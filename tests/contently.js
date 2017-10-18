module.exports = {
  "Demo test Contently" : function (browser) {
    browser
      .url("http://www.contently.com")
      .waitForElementVisible("body", 1000)
      .saveScreenshot("./Screenshots/new/contently_page.png")
      .pause(1000)
  }
}
