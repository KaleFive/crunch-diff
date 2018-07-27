let helper = require("../../helper")
let variables = require("../../../variables")

module.exports = {
  "New story" : function (browser) {
    helper.signin(browser)
    browser
      .url("http://www.contently.com/stories/new")
      .saveScreenshot("screenshots/" + variables["branch"] + "/storyNew.png")
      .pause(500)
      .uploadScreenshot("screenshots/" + variables["branch"] + "/storyNew.png")
      .end();
  }
}
// module.exports = {
//   "Projects page" : function (browser) {
//     helper.signin(browser)
//     browser
//       .url("http://www.contently.com/portfolio/projects")
//       .saveScreenshot("./screenshots/new/projects/initial_page.png")
//       .click("#projects .js-projects-list .js-toggle-collapsible")
//       .saveScreenshot("./screenshots/new/projects/project_show.png")
//       .click("#projects .js-projects-list .js-toggle-collapsible")
//       .click("#projects .js-projects-list .js-edit-project")
//       .saveScreenshot("./screenshots/new/projects/project_edit.png")
//       .end();
//   }
// }
