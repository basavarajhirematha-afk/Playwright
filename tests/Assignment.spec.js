import { test, expect } from '@playwright/test'
import path from 'node:path';


//used hooks concept to for reusable, setup and teardown before and after test execution
/*test.beforeAll('launch URL',async()=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/");

});*/ //as playwright follows isolation/seperate pages for every test so giving url which opens page will through error.

test.beforeEach('login',async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByRole('textbox',{name:'username'}).pressSequentially('Admin'); //used pressSequentially
    await page.getByPlaceholder('Password').type("admin123",{delay:10}); // used type to type character by character with delay
    await page.getByRole('button',{name:'login'}).click();
});

test('profile photo upload',async({page})=>{

    await page.getByText('My Info').click();
    await page.locator("//img[@alt='profile picture' and @class='employee-image']").click();
    // await page.locator(".oxd-icon bi-plus").setInputFiles(path.join(__dirname, 'uploadfiles/6a18e0f5e7ace_download.jpg'));
    await page.locator(".oxd-icon-button oxd-icon-button--solid-main employee-image-action").setInputFiles(path.join(__dirname, '../uploadfiles/6a18e0f5e7ace_download.jpg'));
    await expect(page.locator('.oxd-text oxd-text--span.oxd-input-field-error-message.oxd-input-group__message')).toHaveText('Attachment Size Exceeded');
    await page.locator(".oxd-icon bi-plus").setInputFiles(path.join(__dirname,'6a18e0f5e7ace_download.jpg'));
    await page.getByRole('Button',{name:' Save '}).click();
    //unable to inspect success message bcoz the message comes from browser suggestion appears and disappears immedietly
    console.log("profile picture saved");

    await page.getByText('My Info').click();
    await page.locator('.oxd-file-button').scrollIntoViewIfNeeded();
    // await page.getByText('No file selected').setInputFiles(path.join(__dirname,'pablo-heimplatz-ZODcBkEohk8-unsplash.jpg'));
    await page.getByText('No file selected')
    .setInputFiles(path.join(__dirname, '../uploadfiles/pablo-heimplatz-ZODcBkEohk8-unsplash.jpg'));
    await expect(page.locator('.oxd-file-input-div')).toHaveText('pablo-heimplatz-ZODcBkEohk8-unsplash.jpg');
    await page.getByText(' Save ').nth(2).click();


});
