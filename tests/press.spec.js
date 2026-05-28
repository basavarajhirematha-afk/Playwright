import {test, expect} from '@playwright/test'

test.skip('press keyboard practice', async ({page})=>{

    await page.goto("https://www.amazon.in/mobile-phones");
    await page.getByRole('link',{name:'Click here to go back to the Amazon home page'}).press('Enter');
    const search= page.getByRole('searhbox');
    await search.fill("phones");
    await search.press('Enter');
    await page.waitForTimeout(2000);
    await expect(page.locator("//div[@id='nav-logo']")).toBeVisible();

});