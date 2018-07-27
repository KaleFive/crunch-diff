const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const fs = require('fs')
const variables = require('./variables')

let myBucket = 'kalefive.unique.bucket.name';
let myKey = 'myBucketKey';

module.exports = {
  "createBucket": createBucket,
  "putObject": putObject,
  "uploadScreenshotToS3": uploadScreenshotToS3
}

function createBucket() {
  s3.createBucket({Bucket: myBucket}, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log("Successfully created your bucket");
    }
  })
};

function putObject(params) {
  s3.putObject(params, function(err, data) {
    if (err) {
      console.log(err)
    } else {
      console.log("Successfully uploaded data to myBucket/myKey");
    }
  })
};

function uploadScreenshotToS3(page) {
  let branchName = variables["branch"]
  let key = "branches/" + page.split("/").slice(1).join("/")
  let screenshotPath = page
  console.log("this is the screenshotPath: " + screenshotPath)
  return new Promise(function(resolve, reject) {
    fs.readFile(screenshotPath, function (err,data) {
      if (err) {
        return console.log(err);
      }
      let imageStream = fs.createReadStream(screenshotPath)
      let params = {
        Bucket: "kalefive.unique.bucket.name",
        Key: key,
        Body: imageStream,
        ACL: 'public-read'
      };
      s3.putObject(params, function(err, data) {
        if (err) { console.log(err, err.stack) }
        else { console.log("Successfully uploaded to " + key) }
        resolve()
      });
    });
  });
};

