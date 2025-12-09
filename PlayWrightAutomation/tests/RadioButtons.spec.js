const{test, expect} = require("@playwright/test")
test("handling radio buttons", async({page})=>{
await page.goto("https://demo.nopcommerce.com/register")
const maleRadioButton = await page.locator("#gender-male")
await maleRadioButton.check()
//await expect(maleRadioButton).toBeChecked()
await expect(maleRadioButton.isChecked()).toBeTruthy() // We can also verify that the checkbox is checked or not in this way
const femaleRadioButton = await page.locator("#gender-female")
//await expect(femaleRadioButton).not.toBeChecked()
await expect(await femaleRadioButton.isChecked()).toBeFalsy()
})