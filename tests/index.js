module.exports = {

  //Each "export" counts as one test case
  'index': browser => {

    //We direct our browser to the google homepage, and wait for it to load
    browser.url('http://google.com')
      .waitForElementVisible('body', 1000)

    // We then test to see that the "Search" button is visible
    browser.assert.elementPresent('input[value="Google Search"]')

    //We then fill the search bar with the word "Nightwatch"
    browser.setValue('#lst-ib', 'Nightwatch')

    //then, we click on "Search", and wait for the search results to appear
    browser.click('input[value="Google Search"]')
      .waitForElementVisible('#resultStats', 1000)

    //Once thats done, we close the browser
    browser.end()
  }
}
