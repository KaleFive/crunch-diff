// const s3 = require("./s3")
// const fs = require('fs')

module.exports = {
  "Demo test CNN" : function (browser) {
    // let ssPath = "./Screenshots/new/cnn_page.png"

    browser
      .url("http://www.cnn.com")
      .waitForElementVisible("body", 1000)
      .saveScreenshot('./Screenshots/new/cnn_page.png')
      .end();
    // setTimeout(uploadToS3, 3000);

  }
}

// function uploadToS3() {
//   fs.readFile(ssPath, 'utf8', function (err,data) {
//     if (err) {
//       return console.log(err);
//     }
//     console.log("Inside read file metod");
//     let myBucket = 'kalefive.unique.bucket.name';
//     let myKey = 'myBucketKey';
//     let params = {Bucket: myBucket, Key: myKey, Body: data, ACL: 'public-read', ContentType: data.mimetype};
    // s3.putObject(params)
//   });
// };
