import{test,expect} from "@playwright/test"
test('locate multiple web elements', async({page})=>{
await page.goto("https://demoblaze.com/")
//printing the text of all the links in a webpage
const linksInaPage=await page.$$('a')
for(const link of linksInaPage){
    const linktext = await link.textContent() 
    console.log(linktext)
}
//printing the names of the products
await page.waitForSelector("//div[@id='tbodyid']//div//h4//a")
const productsList = await page.$$("//div[@id='tbodyid']//div//h4//a")
for(const product of productsList){
const productName =await product.textContent()
console.log("Product Name:",productName)
}
} )