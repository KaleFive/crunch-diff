module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'nightwatch')
      .waitForElementVisible('input[value="Google Search"]', 1000)
      .saveScreenshot('./reports/homepage.png')
      .click('input[value="Google Search"]')
      .pause(1000)
      .assert.containsText('#main', 'Night Watch')
      .end();
  }
}
