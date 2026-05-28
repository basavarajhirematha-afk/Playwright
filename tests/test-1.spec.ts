import { test, expect } from '@playwright/test';

test.skip('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('mobiles');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).press('Enter');
  await page.getByRole('listitem').filter({ hasText: 'Redmi 15 5G Sandy Purple 6GB' }).getByLabel('Rated 4.1 out of 5 stars by').click();
});