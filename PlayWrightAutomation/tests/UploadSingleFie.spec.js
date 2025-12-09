import{test,expect} from "@playwright/test"
test('upload single file', async({page})=>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
    await page.locator("#filesToUpload").setInputFiles('tests\\Files\\sample1.pdf')
    await page.waitForTimeout(5000)
    await page.locator("#filesToUpload").setInputFiles([])

    

} )