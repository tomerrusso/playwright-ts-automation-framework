import { expect, Locator, Page } from "@playwright/test";
import { log } from "node:console";
import { promises } from "node:timers";

export class OverviewPage {
    readonly page:Page
   readonly finishButton:Locator
   readonly cancelButton:Locator
   readonly itemTotal:Locator
   readonly tax:Locator
   readonly totalPrice:Locator

    constructor(page:Page){
        this.page = page
        this.finishButton =page.locator("[id='finish']")
        this.cancelButton =page.locator("[id='cancel']")
        this.itemTotal =page.locator("//div[@class='summary_subtotal_label']")
        this.tax =page.locator("//div[@class='summary_tax_label']")
        this.totalPrice=page.locator("//div[@class='summary_total_label']")
       
    }
    async finishProcess():Promise<void>{
        await this.finishButton.click()
    }
    async getTotalPrice():Promise<string>{
        return await this.totalPrice.innerText()
       
         
         
    }
    async getItemTotal():Promise<string>{
       return await this.itemTotal.innerText()
       

        
    }
    async getTaxTotal():Promise<string>{
     return await this.tax.innerText()
     
        
        
    }
 

}
