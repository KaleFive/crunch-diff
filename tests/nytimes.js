module.exports = {
  "Demo test NY Times" : function (browser) {
    browser
      .url("https://www.nytimes.com")
      .waitForElementVisible("body", 1000)
      .saveScreenshot("./screenshots/new/NYTimes_page.png")
      // .pause(1000)
      .end();
  }
}
