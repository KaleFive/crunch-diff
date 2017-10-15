"use strict"
const express = require("express")
const blinkDiff = require("blink-diff")
const geckodriver = require("geckodriver")
const {Builder, By, until} = require("selenium-webdriver")
const fs = require("fs")
const pages = require("./testPages")

const PORT = 8080
const HOST = "0.0.0.0"

const app = express()

app.get("/", (req, res) => {
  runBlinkDiff()
  res.send("Hello world\n")
})

app.get("/nightwatch", (req, res) => {
}

app.get("/run", (req, res) => {
  new Builder()
    .forBrowser("chrome")
    .build()
    .then(driver => {
      driver.manage().window().maximize()
      let page = pages["signin"]
      return driver.get("https://" + page)
        .then(_ => takeScreenshot(driver, "signin"))
        .then(_ => runBlinkDiff("signin"))
        .then(_ => driver.quit())
    })

  res.send("Builder has run")
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)

function takeScreenshot(driver, page) {
  return driver.takeScreenshot()
    .then(function(data, err) {
      fs.writeFile("./Screenshots/new/" + page + ".png", data, "base64", function(err) {
        if (err) console.log(err)
      })
    })
}

function runBlinkDiff(page) {
  let diff = new blinkDiff({
    imageAPath: "./Screenshots/master/" + page + ".png",
    imageBPath: "./Screenshots/new/" + page + ".png",

    thresholdType: blinkDiff.THRESHOLD_PERCENT,
    threshold: 0.01, // 1% threshold

    imageOutputPath: "./Screenshots/result/" + page + "_result.png"
  })

  diff.run(function (error, result) {
    if (error) {
      throw error
    } else {
      console.log(diff.hasPassed(result.code) ? "Passed" : "Failed")
      console.log("Found " + result.differences + " differences.")
    }
  })
}
