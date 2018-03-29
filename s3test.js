const s3 = require("./tests/s3")
const fs = require('fs')

function uploadToS3() {
  let ssPath = "./Screenshots/new/cnn_page.png"
  fs.readFile(ssPath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log("Inside read file metod");
    let myBucket = 'kalefive.unique.bucket.name';
    let myKey = 'myBucketKey';
    let params = {Bucket: myBucket, Key: myKey, Body: data, ACL: 'public-read', ContentType: data.mimetype};
    s3.putObject(params)
  });
};
uploadToS3()
