//jshint esversion:6
const express = require('express');
const app = express();
app.get("/",function(req,res){
   res.send("<h1>Hello world </h1>");
});

app.get("/contact",function(req,res){
   res.send("<h1>Contact me at harsimran@gmail.com </h1>");
});

app.get("/about-me",function(req,res){
   res.send("<h1>About me</h1>  <p>Harsimran</p>  <p>Qa Tester</>");
});

app.get("/hobbies",function(req,res){
   res.send("<h1>Hobbiles</h1><ul><li>Code</li><li>Travel</li><li>Youtube</li></ul>");
});


app.listen(3000,function(){
console.log("server started on port 3000");
});
