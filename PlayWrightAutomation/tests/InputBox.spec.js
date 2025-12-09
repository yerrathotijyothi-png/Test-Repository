const{test, expect}  = require("@playwright/test")
test("Input box", async({page})=>{
   await page.goto("https://demo.nopcommerce.com/register")
   //handling input box
   //1. inorder to enter data into the input box we can use fill method as well as type method
   //first way to fil the data in the input box. I have capture the element on top of it I enetred data 
   const lastName = await page.locator("#LastName")
   // before entering the data we can also check for some assertions
   await expect(lastName).toBeEnabled()
   await expect(lastName).toBeVisible()
   await expect(lastName).toBeEmpty()
   await expect(lastName).toBeEditable()
   lastName.fill("Yerrathoti")
   await page.waitForTimeout(5000)
   // I can capture and fill data in single line like below
   await page.locator("#LastName").fill("Naga") 
   await page.locator("#LastName").type("Naga")
   // we can also provide the data like below by using fill method inside it we provide the locator and the value that we wish to provide
   await page.fill("#LastName", "Nagajyothi")
   await page.type("#LastName","Naga")
   await page.waitForTimeout(5000)

})