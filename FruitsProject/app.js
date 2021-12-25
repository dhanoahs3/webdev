//jshint esversion:6

const mongoose = require('mongoose');

//connect to mongo db server on port 27017 and if we look for a Database
//named fruitsDB. if we find it lets use it otherwise create this db
mongoose.connect("mongodb://localhost:27017/fruitsDB",{ useNewUrlParser: true,useUnifiedTopology: true });



//Lets add schema for a collection in our db.
//We will name our collection fruitsD

const fruitSchema = new mongoose.Schema({
 name:{
   type:String,
   required:[true,"Please check your data entry,no name specified"]
 },
 rating:{
 type:Number,
 min:1,
 max:10
},
 review:String
});

//Here we define that we will make a collection named fruit at it will follow the
//fruitSchema we defined above i.e it will have a name of type String ,rating of
//type number and review of type String again
const Fruit = mongoose.model("Fruit",fruitSchema);

const fruit = new Fruit({
 rating:10,
 review:"Lets rate pears 25"
});


//fruit.save();

const personSchema = new mongoose.Schema({
 name:String,
 age:Number,
 favoriteFruit:fruitSchema
});

const Person = mongoose.model("Person",personSchema);


const avacado = new Fruit({
name :"avacado",
rating:10,
review:"So healthy"
});

avacado.save();


// const person = new Person({
//  name:"HSD",
//  age:30,
//  favoriteFruit:pineappple
//  });
//
//   person.save();





// const kiwi = new Fruit({
//  name:"Kiwi",
//  rating:7,
//  review:"Kiwi is an ok fruit"
// });
//
//
// const orange = new Fruit({
//  name:"Orrange",
//  rating:9,
//  review:"Good for orange juice"
// });
//
// const banana  = new Fruit({
//  name:"Banana",
//  rating:9,
//  review:"I like bananas"
// });


// Fruit.insertMany([kiwi,orange,banana],function(err){
// if(err){
//   console.log(err);
// }
// else{
//   console.log("Successfully added all the fruits to fruitsDB");
// }
//
// });


Fruit.find(function(err,fruits){
  if(err)
  console.log(err);
  else{

    mongoose.connection.close();
  //  console.log(fruits);
  fruits.forEach(function(fruit){
   console.log(fruit.name);
  });
  }
});

//  Person.updateOne({_id: "610557c17aa5144c3cdca6fd"},{age:36},function(err){
// if(err){
//   console.log(err);
// }
// else{
//   console.log("Successfully updated the record");
// }
// });



 Person.updateOne({name: "HSingh"},{favoriteFruit:avacado},function(err){
if(err){
  console.log(err);
}
else{
  console.log("Successfully updated the record with favorite fruit");
}
});


// Fruit.deleteOne({_id: "6105559de8690936c80997fc"},function(err){
// if(err){
//   console.log(err);
// }
// else{
//   console.log("Successfully deleted the record with id");
// }
// });


// Person.deleteMany({name:"HS",age:{$gte:25}},function(err){
// if(err){
//   console.log(err);
// }
// else{
//   console.log("Successfully deleted records with name HS and  age greater than 25");
// }
// });
