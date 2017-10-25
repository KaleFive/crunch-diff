module.exports = {
  "Portfolio page" : function (browser) {
    browser
      .url("http://kimleung2.contently.com/")
      .waitForElementVisible("body", 1000)
      .saveScreenshot("./Screenshots/new/portfolio_page.png")
      .end();
  }
}
