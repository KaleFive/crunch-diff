const s3 = require("./tests/s3")
const fs = require('fs')

function uploadToS3() {
  let ssPath = "./Screenshots/new/cnn_page.png"
  fs.readFile(ssPath, function (err,data) {
    if (err) {
      return console.log(err);
    }
    let imageStream = fs.createReadStream(ssPath)
    let myBucket = 'kalefive.unique.bucket.name';
    let myKey = 'qa/' + 'cnnImage.png';
    let params = {
      Bucket: myBucket,
      Key: myKey,
      Body: imageStream,
      ACL: 'public-read',
    };
    s3.putObject(params)
  });
};
uploadToS3()
