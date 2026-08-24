import { expect, test } from "@playwright/test";

test.use({ baseURL: process.env.FBG_BASE_URL ?? "http://localhost:3100" });

async function fillForm(
  page: import("@playwright/test").Page,
  overrides: { message?: string } = {},
) {
  await page.goto("/kontakt");
  await page.fill("#name", "Erika Musterfrau");
  await page.fill("#email", "erika@example.de");
  await page.fill("#phone", "030 123456");
  await page.selectOption("#subject", "mitgliedschaft");
  await page.fill("#message", overrides.message ?? "Ich habe 4 ha Wald bei Müllrose und interessiere mich für eine Mitgliedschaft.");
  await page.check("#privacy");
}

test("meldet keinen Erfolg, wenn der Versand nicht konfiguriert ist", async ({ page }) => {
  await fillForm(page);
  await page.click('button[type="submit"]');

  // Nicht getByRole("alert") – der Route-Announcer von Next.js trägt dieselbe Rolle.
  const alert = page.locator('form p[role="alert"]');
  await expect(alert).toBeVisible();
  await expect(alert).toContainText("info@fbg-schlaubetal.de");
  await expect(page.getByText("Nachricht gesendet")).toHaveCount(0);
});

test("behält die Eingaben nach einem Fehlversuch", async ({ page }) => {
  const message = "Bitte diesen Text nicht verlieren.";
  await fillForm(page, { message });
  await page.click('button[type="submit"]');

  await expect(page.locator('form p[role="alert"]')).toBeVisible();
  await expect(page.locator("#message")).toHaveValue(message);
  await expect(page.locator("#name")).toHaveValue("Erika Musterfrau");
  await expect(page.locator("#subject")).toHaveValue("mitgliedschaft");
});

test("schluckt Einsendungen von Bots ohne Mailversand", async ({ page }) => {
  await fillForm(page);
  // Das Honeypot-Feld ist display:none – Playwright kann es nicht regulär befüllen.
  await page.locator("#website").evaluate((el: HTMLInputElement) => {
    el.value = "http://spam.example";
  });
  await page.click('button[type="submit"]');

  await expect(page.getByText("Nachricht gesendet")).toBeVisible();
});
