import { expect, Locator, Page } from "@playwright/test";
import { promises } from "node:timers";

export class ProductPage {
    readonly page: Page
    readonly backPackAddButton: Locator
    readonly bikeLightAddButton: Locator
    readonly boltShirtAddButton: Locator
    readonly fleeceJacketAddButton: Locator
    readonly onesieAddButton: Locator
    readonly redShirtAddButton: Locator
    readonly filterButton: string
    readonly menuButton: Locator
    readonly allItemsButton: Locator
    readonly aboutButton: Locator
    readonly logOutButton: Locator
    readonly resetAppStateButton: Locator
    readonly cartButton: Locator
    readonly backpackPrice: Locator
    readonly closeMenuButton: Locator
    readonly cartProductAmount: Locator
    readonly productTitle:Locator




    constructor(page: Page) {
        this.page = page
        this.backPackAddButton = page.locator("//button[@data-test='add-to-cart-sauce-labs-backpack']")
        this.bikeLightAddButton = page.locator("//button[@id='add-to-cart-sauce-labs-bike-light']")
        this.boltShirtAddButton = page.locator("//button[@id='add-to-cart-sauce-labs-bolt-t-shirt']")
        this.fleeceJacketAddButton = page.locator("//button[@id='add-to-cart-sauce-labs-fleece-jacket']")
        this.onesieAddButton = page.locator("//button[@id='add-to-cart-sauce-labs-onesie']")
        this.redShirtAddButton = page.locator("//button[@id='add-to-cart-test.allthethings()-t-shirt-(red)']")
        this.filterButton = "//select[@class='product_sort_container']"
        this.menuButton = page.locator("[id='react-burger-menu-btn']")
        this.allItemsButton = page.locator("[id='inventory_sidebar_link']")
        this.aboutButton = page.locator("[id='about_sidebar_link']")
        this.logOutButton = page.locator("[id='logout_sidebar_link']")
        this.resetAppStateButton = page.locator("[id='reset_sidebar_link']")
        this.cartButton = page.locator("[class='shopping_cart_link']")
        this.backpackPrice = page.locator("//div[@data-test='inventory-item-price']").nth(0)
        this.closeMenuButton = page.locator("[id='react-burger-cross-btn']")
        this.cartProductAmount = page.locator("//span[@data-test='shopping-cart-badge']")
        this.productTitle=page.locator("//span[@data-test='title']")


    }
    async addAllProductsToCart(): Promise<void> {
        await this.backPackAddButton.click()
        await this.bikeLightAddButton.click()
        await this.boltShirtAddButton.click()
        await this.fleeceJacketAddButton.click()
        await this.onesieAddButton.click()
        await this.redShirtAddButton.click()



    }
    async chooseFilter(filter: string): Promise<void> {
        await this.page.selectOption(this.filterButton, { label: filter })
    }

    async proceedToYourCart(): Promise<void> {
        await this.cartButton.click()
    }
    async backPackprice(): Promise<string> {
        return await this.backpackPrice.innerText()
        
       



    }
    async logout(): Promise<void> {
        await this.menuButton.click()
        await this.logOutButton.click()
    }

    async addBackPack(): Promise<void> {
        await this.backPackAddButton.click()

    }
    async getCartAmount(): Promise<string> {


       return await this.cartProductAmount.innerText()
        
    }
    async getPageTitle():Promise<string>{
        
        return await this.productTitle.innerText()

    }

}
