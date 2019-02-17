//modules******************
const express       = require('express');
const app           = express();
const multer        = require('multer');
const bodyParser    = require('body-parser');
var methodOverride  = require('method-override');
var mongoose        = require('mongoose');
var cors            = require('cors');
require('dotenv').config();   // to read .env file
//modules******************

var port = process.env.PORT;

// this is our MongoDB database
const dbRoute = process.env.DBCONN; //mlab link
mongoose.connect(dbRoute,{ useNewUrlParser: true }); //setup connection
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//other modules
app.use(cors({credentials: true, origin: process.env.URI_ACCEPTED}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); 
app.use(methodOverride('X-HTTP-Method-Override')); 

// routes =====================================================================
require('./routes')(app); // configure our routes

// require('./music.og')(app); //final configurations with full filepath

//we gonna try https://github.com/richard534/nodeMongoAudioUploadStreamTest/tree/master

//****************************************************************** */
//check for server running
app.listen(port, function(){
  console.log('Server is running on Port:',port);
});


