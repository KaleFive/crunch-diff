let variables = require("../../variables")

module.exports = {
  "CNN homepage" : function (browser) {

    browser
      .url("https://www.cnn.com")
      .waitForElementVisible("body", 1000)
      .saveScreenshot("screenshots/" + variables["branch"] + "/cnnHomepage.png")
      .pause(500)
      .uploadScreenshot("screenshots/" + variables["branch"] + "/cnnHomepage.png")
      .end()
  }
}
