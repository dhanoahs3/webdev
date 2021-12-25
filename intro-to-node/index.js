
//jshint esversion:6
const fs  = require("fs");
const superheroes = require('superheroes');
const supervillains = require('supervillains');


var superhero = superheroes.random();

var supervillain = supervillains.random();

console.log("Our superhero is "+superhero);

console.log("Our supervillain is "+supervillain);
