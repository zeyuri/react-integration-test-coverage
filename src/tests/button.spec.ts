import { test, expect } from "playwright-test-coverage";

const BASE_URL = "http://localhost:6006/iframe.html?id=example-button--primary";

test("basic test", async ({ page }) => {
  // Navigate to app
  await page.goto(BASE_URL);

  // Wait for welcome message to appear
  await expect(page.locator("[data-test=button]")).toHaveText("Button");
});
