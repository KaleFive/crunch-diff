let variables = require("../../variables")

module.exports = {
  "NY Times homepage" : function (browser) {
    browser
      .url("https://www.nytimes.com")
      .waitForElementVisible("body", 1000)
      .saveScreenshot("screenshots/" + variables["branch"] + "/nyTimesHomepage.png")
      .pause(500)
      .uploadScreenshot("screenshots/" + variables["branch"] + "/nyTimesHomepage.png")
      .end();
  }
}
