import{test,expect} from "@playwright/test"
test('upload multiple files', async({page})=>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
    await page.locator("#filesToUpload").setInputFiles(['tests\\Files\\sample1.pdf','tests\\Files\\sample - Copy.pdf'])
    await page.waitForTimeout(5000)
    // To remove the files
    await page.locator("#filesToUpload").setInputFiles([])
} )