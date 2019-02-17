var mongoose = require('mongoose');

module.exports = mongoose.model('userMusic',{
    //define the schema for mongoose table
    id : {
        type: String
    },
    filename : {
        required: true,
        type: String,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true, 
      },
    filepath : {
        required: true,
        type: String,
        trim: true,
    },
    publicaccess : {
        type: String,
    }
});