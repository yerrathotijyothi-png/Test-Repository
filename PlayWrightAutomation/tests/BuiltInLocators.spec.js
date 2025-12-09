import{test, expect} from '@playwright/test'
test('Built in locators', async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    // page.getByPlaceholder() to locate an input by placeholder.
    await page.getByPlaceholder('Username').type("Admin")
    await page.getByPlaceholder('Password').fill("admin123")
    // page.getByText() to locate by text content.
    await page.getByText( Login )
})