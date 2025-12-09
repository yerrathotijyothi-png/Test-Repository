import{test, expect, chromium} from "@playwright/test"
test("Handling mutiple pages/windows", async()=>{
const browser = await chromium.launch()
const context = await browser.newContext()
const page1 = await context.newPage()
const page2 = await context.newPage()
const allpages = await context.pages() 
console.log("no of pages",allpages.length) 
await page1.goto("https://rahulshettyacademy.com/AutomationPractice/")
await expect(page1).toHaveTitle("Practice Page")
await page2.goto("https://demo.nopcommerce.com/register")
await expect(page2).toHaveTitle("nopCommerce demo store. Register")
await page2.waitForTimeout(5000)
})