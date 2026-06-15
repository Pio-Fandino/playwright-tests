import { test, expect } from '@playwright/test';

test('login form elements are visible', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/'); // demo site for practice
  //await expect(page).toHaveURL('https://www.saucedemo.com/');

  // Locate username field
  const username = page.locator('#user-name');
  await expect(username).toBeVisible();
  //await expect(username).toHaveAttribute('placeholder', 'Username');

  // Locate password field
  const password = page.locator('#password');
  await expect(password).toBeVisible();
  //await expect(password).toHaveAttribute('placeholder', 'Password');

  // Locate login button
  const loginButton = page.locator('#login-button');
  await expect(loginButton).toHaveText('Login');
});
