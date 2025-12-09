import{test,expect} from "@playwright/test"
test('mouse hover', async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    const mousehover = await page.locator("#mousehover")
    const top = await page.locator("//a[text()='Top']")
    await mousehover.hover()
    await top.hover()
    await page.waitForTimeout(5000)


})