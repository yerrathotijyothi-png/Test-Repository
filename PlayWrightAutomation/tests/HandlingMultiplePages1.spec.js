import{test, expect, chromium} from "@playwright/test"
import { promises } from "dns"
test("Handling mutiple pages/windows", async()=>{
const browser = await chromium.launch()
const context = await browser.newContext()
const page1 = await context.newPage()
const allpages = await context.pages() 
console.log("no of pages",allpages.length) 
await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await expect(page1).toHaveTitle("OrangeHRM")
await page1.waitForTimeout(5000)
const [newpage]= await Promise.all([ 
context.waitForEvent('page'),
page1.locator("//a[text()='OrangeHRM, Inc']").click()
])
await expect(newpage).toHaveTitle("Human Resources Management Software | HRMS | OrangeHRM")

})