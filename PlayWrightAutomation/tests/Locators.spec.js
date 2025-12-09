import {test, expect} from '@playwright/test'
test('login to the Application', async({page})=>{
await page.goto("https://demoblaze.com/")
await page.click('#login2')
await page.locator("//input[@id='loginusername']").fill("pavanol")
await page.fill("//input[@id='loginpassword']", "test@123")
await page.locator("//button[text()='Log in']").click()
// To validate logout text presence
const logoutlink = await page.locator("//a[text()='Log out']")
await expect(logoutlink).toBeVisible()
})
