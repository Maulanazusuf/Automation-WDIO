const {Given, When, Then} = require('@wdio/cucumber-framework');

const FrontPage = require('../pageobjects/front-page')
const HomePage = require('../pageobjects/home-page');
const cartPage = require('../pageobjects/cart-page')



Given('I am on the front page', async() => {
    await FrontPage.open()
})

When(/^I try to login with correct credential$/, async() => {
    await FrontPage.login('wibowo.bullseye', 'bullseye');
})

Then (/^I am successfully logged in$/, async() => {
    await HomePage.verifyLoginSuccess('wibowo.bullseye')
})


When('I try to login with username {string} and password {string}', async(username, password) => {
    await FrontPage.login(username, password)
})

Then(/^I am successfully logged in with username "(.*)"$/, async(username) => {
    await HomePage.verifyLoginSuccess(username)
})

When('I add items {string} to cart', async(itemName) => {
    await HomePage.clickProductName(itemName)
    await cartPage.clickBtnAddToCart()
    await browser.pause(2000)
    await cartPage.cllickOkAlert()
    await cartPage.clickBrowserBackBtn()
    await browser.pause(5000)

})

Then('I am logout from website', async() => {
    await HomePage.clikBtnlogout()
    await browser.pause(2000)
})