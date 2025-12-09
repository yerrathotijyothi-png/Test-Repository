const {test, expect}=require('@playwright/test')
test('To take screenshot', async({page})=>{
await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
 const pageTitle = await page.title()
 console.log('Page title is: ',pageTitle)
 const pageURL = await page.url()
 console.log('Page url is :', pageURL)
await expect(page).toHaveURL('https://rahulshettyacademy.com/AutomationPractice/')
await expect(page).toHaveTitle('Practice Page') // expect is used for the validations
await page.close // to close the page
})