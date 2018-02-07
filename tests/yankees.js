module.exports = {
  "Demo test Yankees": function (browser) {
    browser
      .url("http://www.yankees.com")
      .waitForElementVisible("body", 1000)
      // .saveScreenshot("./Screenshots/new/yankees_page.png")
      // .pause(1000)
      .end();
  }
}
