const{test, expect}=require('@playwright/test')
test('soft assertions', async({page})=>{
    await page.goto("https://demo.nopcommerce.com/register")
    // hard assertions
    //await expect(page).toHaveURL("https://demo.nopcommerce.com/register123")
    //await expect(page).toHaveTitle("nopCommerce demo store. Register") // Intentionally failing the script
    //soft assertions
    await expect.soft(page).toHaveURL("https://demo.nopcommerce.com/register123")
    await expect.soft(page).toHaveTitle("nopCommerce demo store. Register")

})