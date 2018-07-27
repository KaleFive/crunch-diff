let helper = require("../../helper")
let variables = require("../../../variables")

module.exports = {
  "Media library" : function (browser) {
    helper.signin(browser)
    browser
      .url("https://www.contently.com/media")
      .saveScreenshot("screenshots/" + variables["branch"] + "/mediaLibrary.png")
      .pause(500)
      .uploadScreenshot("screenshots/" + variables["branch"] + "/mediaLibrary.png")
      .end();
  }
}
