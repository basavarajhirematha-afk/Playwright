import {test, expect} from '@playwright/test'

test.skip('actionspractice', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.getByPlaceholder('Username').fill("Admin");
    await page.getByPlaceholder('Password').fill("admin123");

    await page.getByRole('button',{name:' Login '}).click();

    await page.waitForURL("**/dashboard/index");
    //getByTitle
    await page.getByRole('link',{name:'PIM'}).click();
    await page.getByText('Configuration ').click();
    await page.getByText('Reporting Methods').click();

    const checking_checkbox= page.locator("(//input[@type='checkbox'])[1]")
    await page.waitForTimeout(2000);
    await checking_checkbox.check({force:true});
    await page.waitForTimeout(2000);
    await checking_checkbox.uncheck({force:true});
    console.log(`checkbox unchecked`);


});