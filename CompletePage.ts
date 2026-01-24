import { expect, Locator, Page } from "@playwright/test";

export class CompletePage {
    readonly page:Page
    readonly backHomeButton:Locator
    readonly thankMessage : Locator

    constructor(page:Page){
        this.page=page
        this.backHomeButton =page.locator("[id='back-to-products']")
        this.thankMessage =page.locator("[class='complete-header']")
    }
    async getThankMessage():Promise<string>{  
        return await this.thankMessage.innerText()
      }

      async backHome():Promise<void>{
        await this.backHomeButton.click()
      }
}