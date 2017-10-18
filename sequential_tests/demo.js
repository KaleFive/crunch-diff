module.exports = {
  "Sequential Demo test CNN" : function (browser) {
    browser
      .url("http://www.cnn.com")
      .waitForElementVisible("body", 1000)
      // .saveScreenshot("./Screenshots/new/cnn_page.png")
      // .pause(1000)
      .end();
  },
  "Sequential Demo test Contently" : function (browser) {
    browser
      .url("http://www.contently.com")
      .waitForElementVisible("body", 1000)
      // .saveScreenshot("./Screenshots/new/contently_page.png")
      // .pause(1000)
      .end();
  },
  "Sequential Demo test Google" : function (browser) {
    browser
      .url("http://www.google.com")
      .waitForElementVisible("body", 1000)
      // .saveScreenshot("./Screenshots/new/google_page.png")
      // .setValue("input[type=text]", "nightwatch")
      // .waitForElementVisible("input[value='Google Search']", 1000)
      // .click("input[value='Google Search']")
      // .pause(1000)
      // .saveScreenshot("./Screenshots/new/google_search.png")
      // .assert.containsText("#main", "Night Watch")
      .end();
  },
  "Sequential Demo test NY Times" : function (browser) {
    browser
      .url("http://www.nytimes.com")
      .waitForElementVisible("body", 1000)
      // .saveScreenshot("./Screenshots/new/NYTimes_page.png")
      // .pause(1000)
      .end();
  }
}
