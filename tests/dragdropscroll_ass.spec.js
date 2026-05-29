import { test, expect } from '@playwright/test';

test('dragndrop test', async ({ page }) => {
  await page.goto('https://www.amazon.in/ref=nav_logo');
  //await page.getByText("Continue shopping").click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('phone');
  await page.locator("//input[@id='nav-search-submit-button']").click();
  //await page.getByRole('slider', { name: 'Minimum price' }).fill('0');
  //await page.getByRole('slider', { name: 'Maximum price' }).fill('66');
  //await page.locator("//input[@aria-label='Minimum price']").dragTo(page.locator("//input[@aria-label='Maximum price']"));
  const slider = page.locator("//div[@id='p_36/range-slider_slider-item']");
  await slider.hover();
  await page.mouse.move(20, 0);
  await page.waitForLoadState();
  await page.locator("//span[contains(text(),'Samsung Galaxy M07 Mobile')]").scrollIntoViewIfNeeded();
  expect(page.locator("//span[contains(text(),'Samsung Galaxy M07 Mobile')]")).toContainText('Samsung');
  const price=await page.locator("(//div[@role='listitem'])[3]/descendant::span[@class='a-price-whole']").textContent();
  console.log(price);
  expect (page.locator(".a-price-whole").nth(5)).toHaveText("9,499");
  await page.pause();

  

});