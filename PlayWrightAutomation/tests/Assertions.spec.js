const {test, expect}=require('@playwright/test')
test('AssertionsTests', async ({page})=>{
    await page.goto('https://demo.nopcommerce.com/register')
    //1.	expect(page).toHaveURL() – Page has URL
    await expect(page).toHaveURL("https://demo.nopcommerce.com/register")
    // 2.	expect(page).toHaveTitle() - Page has title
    await expect(page).toHaveTitle('nopCommerce demo store. Register')
    // 3.	expect(locator).toBeVisible() – Element is visible
    const logo = page.locator('.header-logo')
    await expect(logo).toBeVisible()
    //4.	expect(locator).toBeEnabled() – Control is enabed
    const searchTextBox=await page.getByPlaceholder('Search store')
    await expect(searchTextBox).toBeEnabled()
    //6.	expect(locator).toBeChecked()- Radiobutton is checked
    const maleRadioButton=await page.locator('#gender-male')
    await maleRadioButton.click()
    await expect(maleRadioButton).toBeChecked()
    //6.	expect(locator).toBeChecked()- checkbox is checked
    const chxbox = await page.locator('#Newsletter')
    await expect(chxbox).toBeChecked()
    //7.	expect(locator).toHaveText() – Element matches text, it check for the internal text of the element but the entire text not the partial text, for checking the partial text we have another method i.e, toContainText()
    const passwordtxtbox= await page.locator('#register-button')
    await expect(passwordtxtbox).toHaveText('Register')
    //8.	expect(locator).toContainText() – Element contains text
    await expect(passwordtxtbox).toContainText('Register')
    //9.	expect(locator).toHaveValue(value) – Input has a value
    const firstNameInput = page.locator('#FirstName');
    await firstNameInput.fill('jyothi');
    await expect(firstNameInput).toHaveValue('jyothi');
    //11.	expect(locator).toHaveAttribute() – Element has attribute
    await expect(firstNameInput).toHaveAttribute('data-val','true') 

})