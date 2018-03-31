let helper = require("../helper")

module.exports = {
  "Portfolio page" : function (browser) {
    helper.signin(browser)
    browser
      .useXpath()
      .click("//a[text()='Portfolio']")
      .useCss()
      .saveScreenshot("./screenshots/new/initial_page.png")
      .end();
  }
}
