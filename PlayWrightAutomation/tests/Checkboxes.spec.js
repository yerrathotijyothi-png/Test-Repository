const{test, expect} = require("@playwright/test")
test("Handling checkboxes", async({page})=>{
await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
//sinble checkbox
const option1Chkbox = await page.locator("[name='checkBoxOption1']")
await option1Chkbox.check()
await expect(option1Chkbox).toBeChecked()
await page.waitForTimeout(4000)
//multiple checkboxes
const chxboxlocators = ["[name='checkBoxOption1']","#checkBoxOption3"]
for(const element of chxboxlocators){
    await page.locator(element).check()
}

for(const element of chxboxlocators){
    if(await page.locator(element).isChecked()){
        await page.locator(element).uncheck()
    }
}

await page.waitForTimeout(4000)

})