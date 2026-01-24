import { Locator, Page } from "@playwright/test";

export class YourInformationPage {
    readonly page:Page
   readonly firstNameFiled:Locator
   readonly lastNameFiled:Locator
   readonly zipCodeFiled:Locator
   readonly cancelButton:Locator
   readonly continueButton:Locator
   readonly cartButton: Locator



   
    constructor(page:Page){
        this.page = page
         this.firstNameFiled = page.locator("[id='first-name']")
         this.lastNameFiled = page.locator("[id='last-name']")
         this.zipCodeFiled = page.locator("[id='postal-code']")
       this.cancelButton =page.locator("")
       this.continueButton =page.locator("[id='continue']")
       this.cartButton = page.locator("[class='shopping_cart_link']")

    }
    async proceedToOverView(firstName:string,lastName:string,zipCode:string){
        await this.firstNameFiled.fill(firstName)
        await this.lastNameFiled.fill(lastName)
        await this.zipCodeFiled.fill(zipCode)
        await this.continueButton.click()
    }
   

}
