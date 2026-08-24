import { test, expect } from "@playwright/test";

/*
  Vorschaubild und strukturierte Daten sind im ausgelieferten HTML unsichtbar
  und fallen deshalb bei einer Sichtprüfung nicht auf, wenn sie fehlen. Diese
  Tests halten fest, dass sie auf jeder Seite ankommen.
*/

const pages = ["/", "/ueber-uns", "/leistungen", "/aktuelles", "/mitgliedschaft", "/kontakt"];

for (const path of pages) {
  test(`${path} — liefert Vorschaubild und Organisationsdaten`, async ({ page }) => {
    await page.goto(path, { waitUntil: "domcontentloaded" });

    const ogImage = page.locator('meta[property="og:image"]');
    await expect(ogImage).toHaveCount(1);
    await expect(ogImage).toHaveAttribute("content", /\/og-image\.jpg$/);

    const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
    const types = blocks.map((b) => JSON.parse(b)["@type"]);
    expect(types).toContain("Organization");
  });
}

test("/aktuelles — zeichnet die Veranstaltungen als Events aus", async ({ page }) => {
  await page.goto("/aktuelles", { waitUntil: "domcontentloaded" });

  const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
  const events = blocks.map((b) => JSON.parse(b)).filter((d) => d["@type"] === "Event");

  expect(events.length).toBeGreaterThan(0);

  for (const event of events) {
    expect(event.name).toBeTruthy();
    // Startzeit muss ein vollständiger Zeitstempel sein, sonst kann eine
    // Suchmaschine die Veranstaltung nicht terminieren.
    expect(event.startDate).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/);
    expect(new Date(event.endDate).getTime()).toBeGreaterThanOrEqual(
      new Date(event.startDate).getTime(),
    );
    expect(event.location?.address?.addressLocality).toBeTruthy();
  }
});
