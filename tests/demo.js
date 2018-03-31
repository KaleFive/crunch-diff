module.exports = {
  "Demo test Google" : function (browser) {
    browser
      .url("http://www.google.com")
      .waitForElementVisible("body", 1000)
      .saveScreenshot("./screenshots/new/google_page.png")
      // .setValue("input[type=text]", "nightwatch")
      // .waitForElementVisible("input[value='Google Search']", 1000)
      // .click("input[value='Google Search']")
      // .pause(1000)
      // .saveScreenshot("./Screenshots/new/google_search.png")
      // .assert.containsText("#main", "Night Watch")
      .end();
  }
}
