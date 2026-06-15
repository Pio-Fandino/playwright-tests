import { test, expect } from '@playwright/test';

test('successful login flow', async ({ page }) => {
  // Step 1: Navigate
  await page.goto('https://www.saucedemo.com/');

  // Step 2: Fill in login form
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');

  // Step 3: Click login button
  await page.locator('#login-button').click();

  // Step 4: Verify navigation after login
  await expect(page).toHaveURL(/inventory.html/);
  await expect(page.locator('.title')).toHaveText('Products');
});
