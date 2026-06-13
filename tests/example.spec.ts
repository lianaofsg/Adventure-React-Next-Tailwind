import { test, expect } from '@playwright/test';

test('Login', async ({ page }) => {
  await page.goto('http://localhost:3000/login');
  await page.getByRole('button', { name: 'Sign In' }).click();

  expect(page.goto('http://localhost:3000/')).toBeTruthy();
});


