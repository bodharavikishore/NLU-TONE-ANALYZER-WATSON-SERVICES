var express=require('express');
var app=express();
var bodyparser=require('body-parser');
var obj = require('./models/abc.js');
var mongoose = require('mongoose');
//var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/user1";
mongoose.connect("mongodb://localhost:27017/harish");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));


app.get('/',function(req,res){
res.sendFile(__dirname+'/public/'+'register.html');
});

app.get('/register',function(req,res){
res.sendFile(__dirname+'/public/'+'login.html');
});

app.post('/register', function (req, res) {
  

    var data = {
        fname :req.body.fname,
        lname: req.body.lname,
        email : req.body.email,
        password : req.body.password,
}
console.log(data);
obj.adduser(data, function(err, data) {
        if (data) {
           response ="registered succesfully"

            console.log('success response',JSON.stringify(response));
        } else {
           error = {
                "error": "Sorry registration failed"
            }
            res.json(error);
            console.log(err);
        }
    });
});

app.post('/login', function (req, res) {
    console.log('a');

    var data = {
        email : req.body.email,
        password : req.body.password
}
console.log(data);
obj.adduser(data, function(err, data) {
        if (data) {
           response ="login succesful"

            console.log('success response',JSON.stringify(response));
        } else {
           error = {
                "error": "Sorry login failed"
            }
            res.json(error);
            console.log(err);
        }
    });
});
app.listen(8081);
