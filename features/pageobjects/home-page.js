const Page = require('./page')

class HomePage extends Page {

    get accountName() {
        return $('#nameofuser')
    }

    get buttonLogout() {
        return $(`[onclick='logOut()']`)
    }

    getProductNameLocator(itemName) {
        return $(`//a[text()='${itemName}']`)
    }

    async clickProductName(itemName) {
        await this.getProductNameLocator(itemName).scrollIntoView()
        await browser.pause(2000)
        await this.getProductNameLocator(itemName).click()
    
    }

    async clikBtnlogout() {
        await this.buttonLogout.click()
        await browser.pause(3000)
    }

    async verifyLoginSuccess(user) {
        return await expect(await this.accountName).toHaveTextContaining(user)
    }
}

module.exports = new HomePage();