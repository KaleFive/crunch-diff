let variables = require("../variables")

module.exports = {
  "signin": Signin
}

function Signin(browser) {
  browser
    .url("http://www.contently.com/signin")
    .setValue("input[type=email]", variables["email"])
    .click("button[type=submit]")
    .setValue("input[type=password]", variables["password"])
    .click("button[type=submit]")
    .saveScreenshot("./screenshots/new/signin_complete.png")
}
