import { test, expect } from "@playwright/test";

/*
  Die Datenschutzerklärung sichert zu, dass beim Aufruf der Seiten keine Daten
  an Dritte fließen: Bilder, Video und Schriften liegen lokal, die Karte lädt
  erst nach ausdrücklichem Klick.

  Dieser Test hält diese Zusage fest. Er ist entstanden, nachdem das
  Hero-Video unbemerkt von videos.pexels.com nachgeladen wurde, obwohl die
  Erklärung bereits das Gegenteil behauptete. Wer künftig eine externe
  Ressource einbindet, bekommt hier einen Fehlschlag statt einer stillen
  Abweichung.
*/

const pages = [
  "/",
  "/ueber-uns",
  "/leistungen",
  "/aktuelles",
  "/mitgliedschaft",
  "/downloads",
  "/satzung",
  "/kontakt",
  "/impressum",
  "/datenschutz",
];

/** Hosts, die die Seite selbst ausliefern — alles andere gilt als extern. */
const eigeneHosts = ["localhost", "127.0.0.1", "fbg-schlaubetal.de"];

function istExtern(url: string) {
  if (!url.startsWith("http")) return false;
  const host = new URL(url).hostname;
  return !eigeneHosts.some((eigen) => host === eigen || host.endsWith(`.${eigen}`));
}

for (const path of pages) {
  test(`${path} — lädt nichts von externen Servern`, async ({ page }) => {
    const extern: string[] = [];
    page.on("request", (request) => {
      if (istExtern(request.url())) extern.push(request.url());
    });

    await page.goto(path, { waitUntil: "networkidle" });
    // Bis ans Seitenende scrollen, damit auch lazy geladene Elemente anfragen.
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(2000);

    expect(extern, `Externe Requests auf ${path}:\n${extern.join("\n")}`).toEqual([]);
  });
}

test("Kontakt — Karte lädt OpenStreetMap erst nach Klick", async ({ page }) => {
  const osmRequests: string[] = [];
  page.on("request", (request) => {
    if (request.url().includes("openstreetmap.org")) osmRequests.push(request.url());
  });

  await page.goto("/kontakt", { waitUntil: "networkidle" });
  await page.getByRole("button", { name: "Karte laden" }).scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);

  expect(osmRequests, "Vor dem Klick darf keine Anfrage an OSM gehen").toEqual([]);

  await page.getByRole("button", { name: "Karte laden" }).click();
  await page.waitForTimeout(2000);

  expect(osmRequests.length).toBeGreaterThan(0);
});
