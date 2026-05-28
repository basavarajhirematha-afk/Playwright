// @ts-check
import { test, expect } from '@playwright/test';


test.skip('locators', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  //getByPlaceholder
  await page.getByPlaceholder('Username').fill("Admin");  
  await page.getByPlaceholder('Password').fill("admin123");

  //getByPlaceholder
  await page.getByRole('button', {name:'login'}).click();


  //getByAltText
  await page.getByAltText('client brand banner').isVisible(); //returns true/false

  //assert
  await page.waitForTimeout(3000); // waiting to load 
  //await expect (page.getByAltText('client brand banner')).toBeVisible(); //validates banner if not test fails


  await page.waitForURL("**/dashboard/index");
  //getByTitle
  await page.getByRole('link',{name:'PIM'}).click();

  await page.getByText('Configuration ').click();
  await page.waitForTimeout(2000);
  await page
        .getByRole('menu')
        .getByText('Custom Fields').click();
   await page.waitForTimeout(2000);

  //locator
  await page.locator("//button[@class='oxd-icon-button oxd-main-menu-button']").click();

  await page.locator("//button[contains(@class,'oxd-button')]").click()
  await page.waitForTimeout(2000);

  await page.locator("//label[contains(text(),'Field Name')]/parent::div/following::div/child::input").fill('test1');
  await page.waitForLoadState();

  await page
  .locator('.oxd-select-wrapper')
  .locator('.oxd-select-text-input').click();
  
  await page.getByText('Job').click();
  await page.waitForTimeout(2000);

  await page
  .getByRole('listbox')
  .getByText('Contact Details').click();
  await page.waitForTimeout(2000);

  
});


test.skip('locators_continuation', async function({page}){

  await page.goto("https://www.amazon.in/");
  await page.waitForTimeout(2000);
  
  await page.getByRole('searchbox').fill("phones");
  // await page 
  //     .getByRole('listitem')
  //     .filter({hasText:'Alexa Skills'}).click();
  await page.locator("//span[@id='nav-search-submit-text']").click();
  await page
      .getByRole('button')
      .filter({hasText:'REDMI A7'}).click();


});

