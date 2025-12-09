import{test,expect} from "@playwright/test"
test('locate multiple web elements', async({page})=>{
    await page.goto("https://demo.nopcommerce.com/register")
    const firstname = await page.locator("#FirstName")
    const lastname = await page.locator("#LastName")
    await firstname.fill("Hello Welcome to my channel")
    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C')
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')
    await page.keyboard.press('Control+V')
    await expect(lastname).toHaveValue("Hello Welcome to my channel")
    await page.waitForTimeout(5000)

} )