//jshint esversion:6
const express = require('express');

const https = require("https");

const bodyParser  = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){

  res.sendFile(__dirname+"/index.html");

});

app.post("/",function(req,res){
  console.log(req.body.cityName);

  const city = req.body.cityName;
  const unit = req.body.unitName;
  const apiId = "f9a3ad24966f9f8af308f52f4f34c451";
  const units  = unit;
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apiId+"&units="+units;
  https.get(url,function(response){
  console.log(response.statusCode);

  response.on("data",function(data){
  const weatherData = JSON.parse(data);

  const temp = weatherData.main.temp;

  const description = weatherData.weather[0].description;

  const icon =   weatherData.weather[0].icon;

  const imageUrl = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
  res.write("<h1> The temperature in "+city+" is "+temp + " degress Celsius </h1>");
  res.write("<p>The weather currently is "+description+"</p>");
  res.write("<img src="+imageUrl+">");
  res.send();
   });
  });
});




app.listen(3000,function(){
console.log("server started on port 3000");
});
