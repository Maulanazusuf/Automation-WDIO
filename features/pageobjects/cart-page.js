const page = require("./page")

class cartPage extends page {
    get btnAddToCart() {
        return $('.btn-success')
    }

    async clickBtnAddToCart() {
        await this.btnAddToCart.click()
    }

    async cllickOkAlert() {
        await browser.acceptAlert()
    }

    async clickBrowserBackBtn() {
        await browser.back()
        await browser.back()
    }
}

module.exports = new cartPage()