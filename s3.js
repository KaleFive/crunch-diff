let AWS = require('aws-sdk');

let s3 = new AWS.S3();

let myBucket = 'kalefive.unique.bucket.name';
let myKey = 'myBucketKey';

module.exports = {
  "createBucket": createBucket,
  "putObject": putObject
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
