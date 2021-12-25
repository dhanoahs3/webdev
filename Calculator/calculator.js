//jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(re,res){
   res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1+num2;

  res.send("The addition of two numbers is "+result);
});


app.get("/bmicalculator",function(re,res){
   res.sendFile(__dirname+"/bmiCalculator.html");
});


app.post("/bmiCalculator",function(req,res){

  console.log(req.body)

   var height = parseFloat(req.body.height);
   var weight = parseFloat(req.body.weight);

   var result = weight/(height*height);

  res.send("<h1>BMI Calculator</h1><br>Your bmi : "+result);
});


app.listen(3000,function(){
console.log("server started on port 3000");
});
