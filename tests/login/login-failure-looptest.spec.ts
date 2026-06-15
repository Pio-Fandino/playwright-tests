import { test, expect } from '@playwright/test';

test('multiple failed login attempts', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  for (let i = 0; i < 3; i++) {
    await page.locator('#user-name').fill('locked_out_user');
    await page.locator('#password').fill('wrong_pass');
    await page.locator('#login-button').click();

    await expect(page.locator('[data-test="error"]'))
      .toContainText('Epic sadface');
  }
});
