let s3 = require("../s3")

exports.command = function(page, callback) {
  var self = this;
  console.log("This is the page outside of execute " + page)
  this.execute(
    function(page) { // execute application specific code
      console.log("This is the page inside of execute " + page)
      s3.uploadScreenshotToS3(page)
      return true;
    },

    [page], // arguments array to be passed

    function(result) {
      if (typeof callback === "function") {
        callback.call(self, result);
      }
    }
  );

  return this;
};
