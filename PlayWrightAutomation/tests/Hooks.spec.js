import{test,expect} from "@playwright/test"
let page
test.beforeAll(async({browser})=>{ // for first hook we need to create browser fixture and need to create object for the page to access page
    page = await browser.newPage()
    await page.goto("https://demoblaze.com/")
    await page.click('#login2')
    await page.locator("//input[@id='loginusername']").fill("pavanol")
    await page.fill("//input[@id='loginpassword']", "test@123")
    await page.locator("//button[text()='Log in']").click()
    console.log("This is before all")
})
test.beforeEach(async()=>{
    console.log("This is before each")
})
test.afterEach(async()=>{
    console.log("This is after each")
})
test.afterAll(async()=>{
    await page.locator("#logout2").click()
    console.log("This is after all")
})
test('verify the items', async()=>{
    const items = await page.$$("//div[@class='col-lg-4 col-md-6 mb-4']")
    expect(items).toHaveLength(9)
    console.log(items.length)

})
test('Add product to the cart', async()=>{
  const product = await page.locator("//a[text()='Samsung galaxy s6']")
  await product.click()
  const addtocart = await page.locator("//a[text()='Add to cart']")
  await addtocart.click()
})