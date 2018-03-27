module.exports = {
  "Demo test NY Times" : function (browser) {
    browser
      .url("http://www.nytimes.com")
      .waitForElementVisible("body", 1000)
      .saveScreenshot("./Screenshots/new/NYTimes_page.png")
      // .pause(1000)
      .end();
  }
}
