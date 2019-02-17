var mongoose = require('mongoose');

module.exports = mongoose.model('Userreg',{
    //define the schema for mongoose table
    id : {
        type: String
    },
    firstname : {
        required: true,
        type: String,
        trim: true,
    },
    lastname : {
        required: true,
        type: String,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
      },
    password: {
        type: String,
        required: true,
        minlength: 8,
      }
});