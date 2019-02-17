const express = require('express');
var userMusic = require('./userMusic.js'); //upload schema
const app = express();
let multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const dbRoute = process.env.DBCONN;

module.exports = function(app){
    //test api call to check for all values, remove before deployment
    app.get('/music/see', function(req, res) {
        userMusic.find(function(err, userMusic) {
            if (err)
                res.send(err);
            res.send(userMusic);
        });
    });

    //create a filename
    var storage = new GridFsStorage({
        url: dbRoute,
        file: (req, file) => {
          let strName = file.originalname;
          let fileName = strName.split("."); 
          return {
            //returns the filename without the extension
            filename: fileName[0]
          };
        }
      });
      var upload = multer({ storage });

      //single('XXXX') - should be name of file sent using form data
      app.post('/music/upload',upload.single('musicUpload'),(req,res)=>{  //upload single should have the name of the feild
        // console.log({file: req.file});
        res.json({file: req.file});
      });
    //   :url/
       app.post('/music/insert/:filename/:email/:url/:mkpblc',(req,res)=>{
            let filename = req.params.filename;
            let email = req.params.email;
            let url = decodeURIComponent(req.params.url);   //decodeURIComponent(
            let mkpblc = req.params.mkpblc;
            var bod = createJson(filename,email,url,mkpblc);
            var dat = new userMusic(bod);
            dat.save((err,data)=>{
                if(err){
                    res.send(err);
                }else{
                    res.send(data);
                }
            });
        });

        app.get('/music/show/:email/:forf',(req,res)=>{
            let emailr = req.params.email;
            console.log("in now");
            userMusic.find({email:emailr},(err,userMusic)=>{
                if(err) res.send(err);
                res.send(userMusic);
                console.log(userMusic);
            })
        });
      
};//module export ends

function createJson(filename,email,url,mkpblc){
    let bod = {
        filename : filename,
        email : email,
        filepath : url,
        publicaccess : mkpblc
    };
    return bod;
}