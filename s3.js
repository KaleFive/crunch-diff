const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const fs = require('fs')

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
  let branchName = "master"
  let key = branchName + "/" + page
  let diffPath = "./screenshots/" + key
  return new Promise(function(resolve, reject) {
    fs.readFile(diffPath, function (err,data) {
      if (err) {
        return console.log(err);
      }
      let imageStream = fs.createReadStream(diffPath)
      let params = {
        Bucket: "kalefive.unique.bucket.name",
        Key: key,
        Body: imageStream,
        ACL: 'public-read'
      };
      console.log("inside the promise")
      s3.putObject(params, function() {
        console.log("right before resolve")
        resolve()
      });
    });
  });
};

