//import mongo schemas
var userreg = require('./userreg.js');
var app = require('express');
const bcryptjs = require('bcryptjs');
var salt = 10;
//our APIs for routing through the application
module.exports = function(app) {    
    //test api call to check for all values, remove before deployment
    app.get('/api/show', function(req, res) {
        userreg.find(function(err, userreg) {
            if (err)
                res.send(err);
            res.send(userreg);
        });
    });

    app.post('/api/register',(req,res)=>{
        console.log('Register triggered by react');
        console.log(req.body);
        var value = convert2Mongo(req.body);
        let emailr = req.body.email;
        var entry = new userreg(value);
        entry.save((err,val)=>{
        if(err) 
            res.send('Registration failed');
        else
            res.send('Registration successful!');
        });
    });

    //check login credentials
    app.post('/api/login',(req,res)=>{
        let emailr = req.body.email;
        let pwd = req.body.password;
        console.log("pwd:"+req.body.password);
        let val;
        userreg.findOne({ email:emailr},{email:1,password:1},(err,user)=>{
            if(err) 
                res.send('email not found');
            else{
                if(user == null){
                    res.send('Invalid username');   //no email matches
                    return;
                }
                bcryptjs.compare(pwd,user.password,(err,hash)=>{
                    // console.log(hash);
                    if(!hash){
                        res.send('Password does not match');
                    }else{
                        res.send('Login success');
                    }
                });
            }
        });
    });

}; //module.export ends



//********************************************************************** */
//function to convert our data into mongo acceptable
//since alot of feilds are not required by us
function convert2Mongo(axdata){
    // console.log(typeof salt);
    let pwd = axdata.password;
    let pwd2 = bcryptjs.hashSync(pwd,salt);
    // console.log(pwd2);
    let value = {
        firstname : axdata.firstname,
        lastname : axdata.lastname,
        email : axdata.email,
        password : pwd2
    };
    return value;
}
