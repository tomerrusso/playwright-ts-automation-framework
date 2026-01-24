import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {
    readonly page:Page
    readonly userNameFiled:Locator
    readonly passwordFiled:Locator
    readonly loginButton:Locator
    readonly erroMessage:Locator

    constructor(page:Page){
        this.page = page
        this.userNameFiled = page.locator("//input[@placeholder='Username']")
        this.passwordFiled = page.locator("//input[@placeholder='Password']")
        this.loginButton = page.locator("//input[starts-with(@type,'sub')]")
        this.erroMessage =page.locator("//h3[@data-test='error']")


    }
    async signIn(userName:string,password:string){
      await  this.userNameFiled.fill(userName)
       await this.passwordFiled.fill(password)
       await this.loginButton.click()
    }
    async getErrorMessage():Promise<string>{
        return this.erroMessage.innerText()
    }

}
