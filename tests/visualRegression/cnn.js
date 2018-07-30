let variables = require("../../variables")

module.exports = {
  "CNN homepage" : function (browser) {

    browser
      .url("https://www.cnn.com")
      .saveScreenshot("screenshots/" + variables["branch"] + "/cnnHomepage.png")
      .pause(500)
      .uploadScreenshot("screenshots/" + variables["branch"] + "/cnnHomepage.png")
      .end()
  }
}
