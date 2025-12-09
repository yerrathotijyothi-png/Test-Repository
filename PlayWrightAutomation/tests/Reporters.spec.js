const {test, expect}=require("@playwright/test")
test("Test 1", async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await expect(page).toHaveTitle("Practice Page")
    await page.goto("https://demo.nopcommerce.com/register")
await expect(page).toHaveTitle("nopCommerce demo store. Register")   
})
test("Test 2", async({page})=>{
await page.goto("https://demo.nopcommerce.com/register")
await expect(page).toHaveTitle("nopCommerce demo store. Register")   
})
test("Test 3", async({page})=>{
await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
await expect(page).toHaveTitle('Practice Page')  
})