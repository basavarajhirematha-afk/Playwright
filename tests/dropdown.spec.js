import {test, expect} from '@playwright/test'

test.skip('actionspractice', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/');

    await page.getByRole('link',{name:'Dropdown'}).click();
    await page.waitForURL("**/dropdown");
    await page.waitForTimeout(2000);
    const drop= page.locator('#dropdown')
    await drop.selectOption('Option 1');
    console.log(`${drop.name} option selected`)



});