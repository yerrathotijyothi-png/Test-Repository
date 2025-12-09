const{test, expect} = require('@playwright/test')
test('mouse right click', async({page})=>{
    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html")
    const rightclickele=await page.locator("//span[text()='right click me']")
    await rightclickele.click({button:"right"})
    await page.waitForTimeout(6000)
})