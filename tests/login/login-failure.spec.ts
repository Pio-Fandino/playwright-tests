import { test, expect } from '@playwright/test';

test('login fails with wrong credentials', async ({ page }) => {
  // Step 1: Navigate to the site
  await page.goto('https://www.saucedemo.com/');

  // Step 2: Fill in WRONG credentials
  await page.locator('#user-name').fill('locked_out_user');
  await page.locator('#password').fill('wrong_pass');

  // Step 3: Click login button
  await page.locator('#login-button').click();

  // Step 4: Assert error message is shown
  await expect(page.locator('[data-test="error"]'))
    .toContainText('Epic sadface');
});
