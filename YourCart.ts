import { Locator, Page } from "@playwright/test";

export class YourCartPage {
    readonly page: Page
    readonly checkOutButton: Locator
    readonly contninueShoppingButton: Locator
    readonly backPackRemoveButton: Locator
    readonly bikeLightRemoveButton: Locator
    readonly boltShirtRemoveButton: Locator
    readonly fleeceJacketRemoveButton: Locator
    readonly onesieRemoveButton: Locator
    readonly redShirtRemoveButton: Locator
    readonly closeMenuButton: Locator
    readonly menuButton: Locator
    readonly allItemsButton: Locator
    readonly aboutButton: Locator
    readonly logOutButton: Locator
    readonly resetAppStateButton: Locator







    constructor(page: Page) {
        this.page = page
        this.backPackRemoveButton = page.locator("[id='remove-sauce-labs-backpack']")
        this.bikeLightRemoveButton = page.locator("[id='remove-sauce-labs-bike-light']")
        this.boltShirtRemoveButton = page.locator("[id='remove-sauce-labs-bolt-t-shirt']")
        this.fleeceJacketRemoveButton = page.locator("[id='remove-sauce-labs-fleece-jacket']")
        this.onesieRemoveButton = page.locator("[id='remove-sauce-labs-onesie']")
        this.redShirtRemoveButton = page.locator("[id='remove-test.allthethings()-t-shirt-(red)']")
        this.checkOutButton = page.locator("[id='checkout']")
        this.contninueShoppingButton = page.locator("[id='continue-shopping']")
        this.closeMenuButton = page.locator("[id='react-burger-cross-btn']")
        this.menuButton = page.locator("[id='react-burger-menu-btn']")
        this.allItemsButton = page.locator("[id='inventory_sidebar_link']")
        this.aboutButton = page.locator("[id='about_sidebar_link']")
        this.logOutButton = page.locator("[id='logout_sidebar_link']")
        this.resetAppStateButton = page.locator("[id='reset_sidebar_link']")



    }
    async proceedToCheckOut(): Promise<void> {
        await this.checkOutButton.click()
    }


}
