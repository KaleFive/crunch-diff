let variables = require("../../variables")

module.exports = {
  "Olive Oil Times": function (browser) {
    browser
      .url("https://www.oliveoiltimes.com/")
      .waitForElementVisible("body", 1000)
      .saveScreenshot("screenshots/" + variables["branch"] + "/oliveOilTimes.png")
      .pause(500)
      .uploadScreenshot("screenshots/" + variables["branch"] + "/oliveOilTimes.png")
      .end();
  }
}
