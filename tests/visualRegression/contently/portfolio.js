let helper = require("../../helper")
let variables = require("../../../variables")

module.exports = {
  "Portfolio" : function (browser) {
    helper.signin(browser)
    browser
      .url("https://kimleung2.contently.com/")
      .saveScreenshot("screenshots/" + variables["branch"] + "/portfolio.png")
      .pause(500)
      .uploadScreenshot("screenshots/" + variables["branch"] + "/portfolio.png")
      .end();
  }
}
