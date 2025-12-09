const {test, expect}=require('@playwright/test')
test('To take video', async({page})=>{
    await page.goto("https://demoblaze.com/")
    await page.click('#login2')
    await page.locator("//input[@id='loginusername']").fill("pavanol")
    await page.fill("//input[@id='loginpassword']", "test@123")
    await page.locator("//button[text()='Log in']").click()
})
