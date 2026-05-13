import { test, expect } from "@playwright/test";

const pages = [
  { path: "/", name: "Startseite" },
  { path: "/ueber-uns", name: "Ueber-uns" },
  { path: "/leistungen", name: "Leistungen" },
  { path: "/mitgliedschaft", name: "Mitgliedschaft" },
  { path: "/kontakt", name: "Kontakt" },
  { path: "/impressum", name: "Impressum" },
  { path: "/datenschutz", name: "Datenschutz" },
];

for (const page of pages) {
  test(`${page.name} — loads without errors`, async ({ page: p }) => {
    const errors: string[] = [];
    p.on("pageerror", (err) => errors.push(err.message));

    const response = await p.goto(page.path, { waitUntil: "networkidle" });
    expect(response?.status()).toBe(200);
    expect(errors).toEqual([]);
  });

  test(`${page.name} — screenshot`, async ({ page: p }) => {
    await p.goto(page.path, { waitUntil: "networkidle" });
    // Wait for animations to settle
    await p.waitForTimeout(1500);
    await p.screenshot({
      path: `tests/screenshots/${page.name}.png`,
      fullPage: true,
    });
  });

  test(`${page.name} — no horizontal overflow`, async ({ page: p }) => {
    await p.goto(page.path, { waitUntil: "networkidle" });
    const overflow = await p.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    expect(overflow).toBe(false);
  });
}

// Specific checks
test("Startseite — hero section visible", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });
  const hero = page.locator("section").first();
  await expect(hero).toBeVisible();
});

test("Startseite — no gap line between hero and next section", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });
  await page.waitForTimeout(500);
  // Screenshot of the transition area
  const hero = page.locator("section").first();
  const box = await hero.boundingBox();
  if (box) {
    await page.screenshot({
      path: "tests/screenshots/hero-transition.png",
      clip: { x: 0, y: box.y + box.height - 80, width: box.width, height: 160 },
    });
  }
});

test("Leistungen — all images load", async ({ page }) => {
  const failedImages: string[] = [];
  page.on("response", (response) => {
    if (
      response.request().resourceType() === "image" &&
      response.status() >= 400
    ) {
      failedImages.push(response.url());
    }
  });

  await page.goto("/leistungen", { waitUntil: "networkidle" });
  await page.waitForTimeout(2000);

  expect(failedImages).toEqual([]);
});

test("Kontakt — form is usable", async ({ page }) => {
  await page.goto("/kontakt", { waitUntil: "networkidle" });

  // Check all form inputs exist and are visible
  await expect(page.locator("#name")).toBeVisible();
  await expect(page.locator("#email")).toBeVisible();
  await expect(page.locator("#subject")).toBeVisible();
  await expect(page.locator("#message")).toBeVisible();
  await expect(page.locator("#privacy")).toBeVisible();

  // Check touch target size of checkbox
  const checkbox = page.locator("#privacy");
  const box = await checkbox.boundingBox();
  expect(box?.width).toBeGreaterThanOrEqual(20);
  expect(box?.height).toBeGreaterThanOrEqual(20);
});

test("Navigation — mobile menu works", async ({ page }) => {
  // Only on mobile viewport
  if ((page.viewportSize()?.width ?? 1440) > 768) return;

  await page.goto("/", { waitUntil: "networkidle" });

  // Menu should be hidden
  const menuButton = page.locator("button[aria-label='Hauptmenü öffnen']");
  await expect(menuButton).toBeVisible();

  // Open menu
  await menuButton.click();
  await expect(page.locator("text=Über uns")).toBeVisible();
  await expect(page.locator("text=Leistungen")).toBeVisible();
});
