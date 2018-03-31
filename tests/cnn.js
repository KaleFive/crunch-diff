module.exports = {
  "Demo test CNN" : function (browser) {
    // let ssPath = "./Screenshots/new/cnn_page.png"

    browser
      .url("https://www.cnn.com")
      .waitForElementVisible("body", 1000)
      .saveScreenshot('./screenshots/qa/cnn.png')
      .end();
  }
}
