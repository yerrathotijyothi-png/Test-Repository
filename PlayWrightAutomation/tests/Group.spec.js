const {test,expect} = require("@playwright/test")
test.describe("first group",()=>{
test("test1", async({page})=>{
    console.log("this is test1")
    
})
test("test2", async({page})=>{
    console.log("this is test2")
    
})

})

test.describe("second group",()=>{
test("test3", async({page})=>{
    console.log("this is test3")
    
})
test("test4", async({page})=>{
    console.log("this is test4")
    
})
})