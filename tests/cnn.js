module.exports = {
  "Demo test CNN" : function (browser) {

    browser
      .url("https://www.cnn.com")
      .waitForElementVisible("body", 1000)
      .saveScreenshot('./screenshots/master/cnnImage.png')
      .uploadScreenshot("cnnImage.png")
      .end()
  }
}
