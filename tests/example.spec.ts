import { test, expect } from '@playwright/test';

test('Login', async ({ page }) => {
  await page.goto('http://localhost:3000/login');
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill('123@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('123456');
    await page.getByRole('button', { name: 'Sign In' }).click();

  await expect(page.getByRole('heading', {name: 'AdventureHub Outdoor Center'})).toBeVisible();
});


