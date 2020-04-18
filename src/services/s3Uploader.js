import S3 from 'react-aws-s3';
 
const config = {
    bucketName: 'sruthi515-aws-bucket',
    // dirName: 'media', /* optional */
    region: 'ap-south-1',
    accessKeyId: 'AKIAJQIO6L4OI5YJFLPA',
    secretAccessKey: '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'
}
 
const ReactS3Client = new S3(config);
/*  Notice that if you don't provide a dirName, the file will be automatically uploaded to the root of your bucket */
 
/* This is optional */
 

 
  /**
   * {
   *   Response: {
   *     bucket: "myBucket",
   *     key: "image/test-image.jpg",
   *     location: "https://myBucket.s3.amazonaws.com/media/test-file.jpg"
   *   }
   * }
   */

export default function uploadFileToS3(file, imageUrl, src) {
    debugger
    ReactS3Client
    .uploadFile(src, file.name)
    .then(data => console.log("data: ", data))
    .catch(err => console.error("err: ", err))
}