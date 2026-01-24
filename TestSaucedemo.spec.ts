import { test, Page, BrowserContext, expect } from '@playwright/test';
import { LoginPage } from './LoginPage';
import { ProductPage } from './ProductsPage';
import { YourCartPage } from './YourCart';
import { OverviewPage } from './OverviewPage';
import { YourInformationPage } from './YourInformationPage';
import { CompletePage } from './CompletePage';
import * as data from './data.json';

test.describe('Page Objects Test', () => {
    let page: Page;
    let context: BrowserContext;
    //Page Objects
    let loginPage: LoginPage
    let prodcutPage: ProductPage
    let yourCart: YourCartPage
    let overviewPage: OverviewPage
    let yourInformationPage: YourInformationPage
    let completePage: CompletePage

    //Global Data
    const standardUser = data.users.standard;
  const wrongUser = data.users.wrong;
  const checkoutData = data.checkout;
  const overviewData = data.overview;
  const completeData = data.complete;
  const errorMessage = data.errorMessage;
  const productsData = data.products;

    //Data - Test:
    const userName: string = 'standard_user'
    const password: string = 'secret_sauce'
    const firstName: string = 'Tomas'
    const lastName: string = 'Russo'
    const zipCode: string = '123456789'
    const backpackPrice: string = '$29.99'
    const taxTotal: string = 'Tax: $10.40'
    const itemTotal: string = 'Item total: $129.94'
    const totalPrice: string = 'Total: $140.34'
    const thankMessage: string = 'Thank you for your order!'
    const filter1: string = 'Name (A to Z)'
    const filter2: string = 'Name (Z to A)'
    const filter3: string = 'Price (low to high)'
    const filter4: string = 'Price (high to low)'
    const erroMessage: string = 'Epic sadface: Username and password do not match any user in this service'
    const wrongUserName: string = 'userking'
    const wrongPassword: string = '123456789'
    const cartAmount: string = '1'



    test.beforeAll(async ({ browser }) => {
        context = await browser.newContext();
        //Start Tracing
        await context.tracing.start({ screenshots: true, snapshots: true, sources: true })
        page = await context.newPage();
        await page.goto('https://www.saucedemo.com/');
        //Init Page Objects

        loginPage = new LoginPage(page)
        prodcutPage = new ProductPage(page)
        yourCart = new YourCartPage(page)
        overviewPage = new OverviewPage(page)
        yourInformationPage = new YourInformationPage(page)
        completePage = new CompletePage(page)

        //Pre-Conditions:

    });
    test.beforeEach(async () => {
        await page.goto('https://www.saucedemo.com/');
    });
    //  test.afterEach(async () => {
    //   await page.close();
    // });

    test.afterAll(async () => {
        await context.tracing.stop({ path: 'kuku.zip' })
        await context.close();
        await page.close();
    });

    test("Test full Checkout", async () => {
        await loginPage.signIn(userName, password)
        await prodcutPage.addAllProductsToCart()
        await prodcutPage.proceedToYourCart()
        await yourCart.proceedToCheckOut()
        await yourInformationPage.proceedToOverView(checkoutData.firstName, checkoutData.lastName, checkoutData.zipCode)
        await overviewPage.finishProcess()
        await expect(completePage.thankMessage).toBeVisible()
        let messege: string = await completePage.getThankMessage()
        expect(messege).toEqual(completeData.thankMessage)
        await completePage.backHome()

    })
    test("Test  total price,tax,item total", async () => {
        await loginPage.signIn(userName, password)
        await prodcutPage.addAllProductsToCart()
        await prodcutPage.proceedToYourCart()
        await yourCart.proceedToCheckOut()
        await yourInformationPage.proceedToOverView(checkoutData.firstName, checkoutData.lastName, checkoutData.zipCode)
        await expect(overviewPage.tax).toBeVisible()
        let taxAmount: string = await overviewPage.getTaxTotal()
        expect(taxAmount).toEqual(overviewData.taxTotal)
        await expect(overviewPage.itemTotal).toBeVisible()
        let itemAmount: string = await overviewPage.getItemTotal()
        expect(itemAmount).toEqual(overviewData.itemTotal)
        await expect(overviewPage.totalPrice).toBeVisible()
        let priceAmount: string = await overviewPage.getTotalPrice()
        expect(priceAmount).toEqual(overviewData.totalPrice)
        await overviewPage.finishProcess()


    })

    test("Test  login & logout", async () => {
        await loginPage.signIn(standardUser.userName, standardUser.password)
        await expect(prodcutPage.productTitle).toBeVisible()
        let ProductPageTitle :string = await prodcutPage.getPageTitle()
        expect(ProductPageTitle).toEqual("Products")
        await expect(prodcutPage.backpackPrice).toBeVisible()
        let amount: string = await prodcutPage.backPackprice()
      //  expect(amount).toEqual(productsData.Backpack)
      await expect(prodcutPage.backpackPrice).toHaveText(productsData.Backpack)
        await prodcutPage.logout()


    })
    test("Test  check Filters", async () => {
        await loginPage.signIn(userName, password)
        await prodcutPage.chooseFilter(filter1)
        await prodcutPage.chooseFilter(filter2)
        await prodcutPage.chooseFilter(filter3)
        await prodcutPage.chooseFilter(filter4)




    })

    test("Test Assert Error message", async () => {
        await loginPage.signIn(wrongUser.userName, wrongUser.password)
        let error: string = await loginPage.getErrorMessage()
        await expect(loginPage.erroMessage).toBeVisible()
       expect(error).toEqual(erroMessage)
         // await expect(loginPage.erroMessage).toHaveText(erroMessage)



    })
    test("Test Add Backpackproduct", async () => {
        await loginPage.signIn(userName, password)
        await prodcutPage.addBackPack()
        await expect(prodcutPage.cartProductAmount).toBeVisible()
        let amount: string = await prodcutPage.getCartAmount()
        expect(amount).toEqual(cartAmount)




    })


})