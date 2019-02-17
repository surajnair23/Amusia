//import mongo schemas
// var userreg = require('./userreg.js');
// var multer        = require('multer');
// const GridFsStorage = require('multer-gridfs-storage');
// const Grid          = require('gridfs-stream');
// const dbRoute = "mongodb://surajnair:amusia123@ds039707.mlab.com:39707/mainmusicdirectory" //mlab link
//our APIs for routing through the application

// https://medium.com/@richard534/uploading-streaming-audio-using-nodejs-express-mongodb-gridfs-b031a0bcb20f
// https://github.com/anhthii/Echo   - actual app
// upload mechanism=========================================
//Create storage for media files

  
  module.exports = function(app){
    // routes for upload =======================================
  //the .single should match the name of form data uploaded
  app.post('/api/uploads',upload.single('musicUpload'),(req,res)=>{  //upload single should have the name of the feild
    console.log('API to upload hit');
    console.log({file: req.file});
    res.json({file: req.file});
  });
  
  //fetch music based on filename ================================
  app.post('/api/files/:filename',(req,res)=>{
    let filenamer = req.params.id;
    storage.collection('fs.files');
    storage.files.find({filename:filenamer}).toArray((err,files)=>{
      if(!files || files.length === 0){
        return res.status(404).json({
          responseCode: 1,
          responseMessage: "error"
        });
        }
        });
    });
  }//module export ends

//   *******************************************************************************************
//   *******************************************************************************************
//   *******************************************************************************************
//   *******************************************************************************************
//   *******************************************************************************************
//   *******************************************************************************************
//   *******************************************************************************************
/**
 * NPM Module dependencies.
 */
// const express = require('express');
// const trackRoute = express.Router();
// const multer = require('multer');

// const mongodb = require('mongodb');
// const MongoClient = require('mongodb').MongoClient;
// const ObjectID = require('mongodb').ObjectID;

// /**
//  * NodeJS Module dependencies.
//  */
// const { Readable } = require('stream');

// /**
//  * Create Express server && Express Router configuration.
//  */
// const app = express();
// app.use('/tracks', trackRoute);

// /**
//  * Connect Mongo Driver to MongoDB.
//  */
// let db;
// MongoClient.connect('mongodb://localhost/trackDB', (err, database) => {
//   if (err) {
//     console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
//     process.exit(1);
//   }
//   db = database;
// });

// /**
//  * GET /tracks/:trackID
//  */
// trackRoute.get('/:trackID', (req, res) => {
//   try {
//     var trackID = new ObjectID(req.params.trackID);
//   } catch(err) {
//     return res.status(400).json({ message: "Invalid trackID in URL parameter. Must be a single String of 12 bytes or a string of 24 hex characters" }); 
//   }
//   res.set('content-type', 'audio/mp3');
//   res.set('accept-ranges', 'bytes');

//   let bucket = new mongodb.GridFSBucket(db, {
//     bucketName: 'tracks'
//   });

//   let downloadStream = bucket.openDownloadStream(trackID);

//   downloadStream.on('data', (chunk) => {
//     res.write(chunk);
//   });

//   downloadStream.on('error', () => {
//     res.sendStatus(404);
//   });

//   downloadStream.on('end', () => {
//     res.end();
//   });
// });

// /**
//  * POST /tracks
//  */
// trackRoute.post('/', (req, res) => {
//   const storage = multer.memoryStorage()
//   const upload = multer({ storage: storage, limits: { fields: 1, fileSize: 6000000, files: 1, parts: 2 }});
//   upload.single('track')(req, res, (err) => {
//     if (err) {
//       return res.status(400).json({ message: "Upload Request Validation Failed" });
//     } else if(!req.body.name) {
//       return res.status(400).json({ message: "No track name in request body" });
//     }
    
//     let trackName = req.body.name;
    
//     // Covert buffer to Readable Stream
//     const readableTrackStream = new Readable();
//     readableTrackStream.push(req.file.buffer);
//     readableTrackStream.push(null);

//     let bucket = new mongodb.GridFSBucket(db, {
//       bucketName: 'tracks'
//     });

//     let uploadStream = bucket.openUploadStream(trackName);
//     let id = uploadStream.id;
//     readableTrackStream.pipe(uploadStream);

//     uploadStream.on('error', () => {
//       return res.status(500).json({ message: "Error uploading file" });
//     });

//     uploadStream.on('finish', () => {
//       return res.status(201).json({ message: "File uploaded successfully, stored under Mongo ObjectID: " + id });
//     });
//   });
// });

// app.listen(3005, () => {
//   console.log("App listening on port 3005!");
// });