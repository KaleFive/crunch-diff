//
// function uploadToS3() {
//   let ssPath = "./Screenshots/new/cnn_page.png"
//   fs.readFile(ssPath, function (err,data) {
//     if (err) {
//       return console.log(err);
//     }
//     let imageStream = fs.createReadStream(ssPath)
//     let myBucket = 'kalefive.unique.bucket.name';
//     let myKey = 'qa/' + 'cnnImage.png';
//     let params = {
//       Bucket: myBucket,
//       Key: myKey,
//       Body: imageStream,
//       ACL: 'public-read',
//     };
//     s3.putObject(params)
//   });
// };
// uploadToS3()

// Bulk upload whole directory to S3
// https://gist.github.com/jlouros/9abc14239b0d9d8947a3345b99c4ebcb
const path = require("path"); // from node.js

// configuration
const config = {
  s3BucketName: "kalefive.unique.bucket.name",
  folderPath: "./screenshots/new" // path relative script's location
};

// resolve full folder path
const distFolderPath = path.join(__dirname, config.folderPath);

// get of list of files from 'dist' directory
fs.readdir(distFolderPath, (err, files) => {

  if(!files || files.length === 0) {
    console.log(`provided folder '${distFolderPath}' is empty or does not exist.`);
    console.log('Make sure your project was compiled!');
    return;
  }

  // for each file in the directory
  for (const fileName of files) {

    // get the full path of the file
    const filePath = path.join(distFolderPath, fileName);

    // ignore if directory
    if (fs.lstatSync(filePath).isDirectory()) {
      continue;
    }

    // read file contents
    fs.readFile(filePath, (error, fileContent) => {
      // if unable to read file contents, throw exception
      if (error) { throw error; }

      // upload file to S3
      s3.putObject({
        Bucket: config.s3BucketName,
        Key: "new/" + fileName,
        Body: fileContent,
        ACL: "public-read"
      }, (res) => {
        console.log(`Successfully uploaded new/'${fileName}'!`);
      });
    });
  }
});
