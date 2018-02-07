module.exports = {
  "Demo test CNN" : function (browser) {
    browser
      .url("http://www.cnn.com")
      .waitForElementVisible("body", 1000)
      .saveScreenshot("./Screenshots/new/cnn_page.png")
      // .pause(1000)
      .end();
  }
}
