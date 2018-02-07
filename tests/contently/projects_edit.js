let helper = require("../helper")

module.exports = {
  "Projects page" : function (browser) {
    helper.signin(browser)
    browser
      .url("http://www.contently.com/portfolio/projects")
      .saveScreenshot("./Screenshots/new/projects/initial_page.png")
      .click("#projects .js-projects-list .js-toggle-collapsible")
      .saveScreenshot("./Screenshots/new/projects/project_show.png")
      .click("#projects .js-projects-list .js-toggle-collapsible")
      .click("#projects .js-projects-list .js-edit-project")
      .saveScreenshot("./Screenshots/new/projects/project_edit.png")
      .end();
  }
}
