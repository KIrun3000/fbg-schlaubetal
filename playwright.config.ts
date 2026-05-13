import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  outputDir: "./tests/results",
  timeout: 30000,
  use: {
    baseURL: "http://localhost:3000",
  },
  projects: [
    {
      name: "Desktop",
      use: { ...devices["Desktop Chrome"], viewport: { width: 1440, height: 900 } },
    },
    {
      name: "Tablet",
      use: { ...devices["iPad Pro 11"] },
    },
    {
      name: "Mobile",
      use: { ...devices["iPhone 14"] },
    },
  ],
});
