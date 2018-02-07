let loginCredentials = require("../loginCredentials")

module.exports = {
  "signin": Signin
}

function Signin(browser) {
  browser
    .url("http://www.contently.com/signin")
    .setValue("input[type=email]", loginCredentials["email"])
    .click("button[type=submit]")
    .setValue("input[type=password]", loginCredentials["password"])
    .click("button[type=submit]")
    .saveScreenshot("./Screenshots/new/signin_complete.png")
}
