const {test,expect} = require("@playwright/test")
test("DragAndDrop", async({page})=>{
    await page.goto("https://jqueryui.com/droppable/")
    const frame = page.frame({url:'https://jqueryui.com/resources/demos/droppable/default.html'});
    const source = await frame.locator("//p[text()='Drag me to my target']")
    const target = await frame.locator("//p[text()='Dropped!']")
    //Aproach 1
   await source.dragTo(target)
   await page.waitForTimeout(5000)
    
})