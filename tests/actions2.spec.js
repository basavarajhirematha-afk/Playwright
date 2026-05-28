import {test,expect} from '@playwright/test'

test.skip('hoveraction_practice', async({page})=>{

    await page.goto("https://www.amazon.in/ref=nav_logo");

    await page.getByRole('link',{name:'Hello, sign in'}).hover();
    await page.waitForTimeout(2000);
    await page.locator("//span[text()='Sign in']").click();
    await page.waitForTimeout(2000);

});