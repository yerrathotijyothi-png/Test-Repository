const {test, expect}=require('@playwright/test')
test('To take screenshot', async({page})=>{
await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
 await page.screenshot({path:'tests\\Screenshots'+"Home page"+Date()+".png"})
})

test('To take full screenshot', async({page})=>{
await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
 await page.screenshot({path:'tests\\Screenshots'+"Home page"+Date.now()+".png", fullPage: true})
})

test.only('To take particular element screenshot', async({page})=>{
await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
 await page.locator("#dropdown-class-example").screenshot({path:'tests\\Screenshots'+"Home page"+Date.now()+".png"})
})