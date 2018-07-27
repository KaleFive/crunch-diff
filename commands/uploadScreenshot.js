let s3 = require("../s3")

exports.command = function(page, callback) {
  s3.uploadScreenshotToS3(page)
};
