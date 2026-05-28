import { before } from "node:test";
import {page,expect, test} from '@playwright/test'


test.beforeEach('login',async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByRole('textbox',{name:'username'}).fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button',{name:'login'}).click();

});

test('Admin creation',async({page})=>{
    await page.waitForTimeout(2000);
    await page.getByText('Admin').first().click();
    
    //await page.getByText('Admin').first().click();
    await page.getByRole('button',{name:' Add '}).click();
    await page.locator('.oxd-select-text-input').first().click();
    //await page.getByText('-- Select --').nth(1).click();
    await page.locator("//div[@class='oxd-select-option']//span[text()='Admin']").click();
    await page.getByPlaceholder('Type for hints...').fill('test_admin');
    await page.locator('.oxd-select-text-input').nth(1).click();
    await page.locator("//span[text()='Enabled']").last().click();
    await page.locator('.oxd-input.oxd-input--active').nth(1).fill('admin');
    await page.locator("//input[@type='password']").first().fill("Test123");
    await page.locator("//input[@type='password']").nth(1).fill("Test123");
    await page.getByRole('button',{name:' Save '}).click();
});

test('admin search',async({page})=>{
    await page.waitForTimeout(2000);
    await page.waitForURL("**/dashboard/index");
    await page.getByText('Admin').first().click();
    await page.waitForTimeout(2000);
    await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill('admin');
    //await page.getByPlaceholder('Type for hints...').fill('admin');
    //await page.locator('.oxd-select-text-input').nth(1).click();
    //await page.locator("//div[text()='Enabled']").first().click();
    await page.getByText(' Search ').last().click();
   
});

test('edit',async({page})=>{
    await page.waitForTimeout(1000);
    await page.getByText('Admin').first().click();
    await page.locator(".oxd-icon.bi-pencil-fill").first().click();
    await page.waitForURL("**saveSystemUser/1");
    const input= page.getByPlaceholder('Type for hints...')
    input.clear();
    input.fill("editedadmin");
    await page.getByText(' Save ').click();

});

test.afterEach('logout',async({page})=>{
    await page.locator("//img[@alt='profile picture']").click();
    await page.getByText('Logout').last().click();
});