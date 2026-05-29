import {test, expect} from '@playwright/test'

test('alert handle',async({page})=>{
    await page.goto("https://demoqa.com/");
    await page.locator("//div[@class='category-cards']/descendant::a[3]/descendant::h5").click();
    await page.locator("//span[text()='Alerts']").click();
   
    await page.locator("//button[@id='alertButton']").click({force:true}); //forcing this button to perfom click action because browser popups(promotion) displaying often on the screen which are blocking to click

    page.on('dailog',dailog=>dailog.accept());
});

test('alerts after few seconds',async({page})=>{
    await page.goto("https://demoqa.com/");
    await page.locator("//div[@class='category-cards']/descendant::a[3]/descendant::h5").click();
    await page.locator("//span[text()='Alerts']").click();

    await page.locator("//button[@id='timerAlertButton']").click({force:true});
    
    page.on('dailog', dailog=> dailog.accept());

});

