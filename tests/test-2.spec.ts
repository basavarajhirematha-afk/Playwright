import { test, expect } from '@playwright/test';

test.skip('test', async ({ page, }) => {
  await page.goto('https://www.flipkart.com/');
  await page.locator('form').filter({ hasText: 'Enter Email/Mobile numberBy' }).getByRole('textbox').click();
  await page.locator('form').filter({ hasText: 'Enter Email/Mobile numberBy' }).getByRole('textbox').fill('86857657655');
  await page.getByRole('button', { name: 'Request OTP' }).click();

await page.goto('https://www.flipkart.com/');
await page.locator('form').filter({ hasText: 'Enter Email/Mobile numberBy' }).getByRole('textbox').click();
await page.locator('form').filter({ hasText: 'Enter Email/Mobile numberBy' }).getByRole('textbox').click();
await page.locator('form').filter({ hasText: 'Enter Email/Mobile numberBy' }).getByRole('textbox').fill('9480983084593094509043');
await page.getByRole('button', { name: 'Request OTP' }).click();
await page.getByRole('button', { name: '✕' }).click();
await page.getByRole('link', { name: 'Home' }).click();
});