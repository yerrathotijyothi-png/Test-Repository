const {test, expect} = require("@playwright/test")
test("double click", async({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const dblbutton = await page.locator("//button[@ondblclick='myFunction1()']")
    await dblbutton.dblclick()
    await expect(page.locator('#field2')).toHaveValue("Hello World!")
    await page.waitForTimeout(5000)
    
})