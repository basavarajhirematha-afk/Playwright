import {test,expect} from '@playwright/test'
import path from 'node:path';

test('fileupload',async({page})=>{

    await page.goto("https://testing.qaautomationlabs.com/");
    await page.getByRole('link',{name:'File Upload'}).first().click();

    await page.locator("//label[@class='file-label']").setInputFiles(path.join(__dirname,"../uploadfiles/6a18e0f5e7ace_download.jpg"));
    const expected=await page.locator("//div[@id='fileInfo']").textContent();
    console.log(expected);
    expect(expected).toContain('6a18e0f5e7ace_download');


});
