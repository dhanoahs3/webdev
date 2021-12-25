//jshint esversion:6


exports.getDate = function(){

  const today = new Date();

  const currentDay = today.getDay();

  const options = {
    weekday:"long",
    day:"numeric",
    month:"long",
  };

  var day = today.toLocaleDateString("en-US",options);

  return day;
};


exports.getDay = function (){

  const today = new Date();
  const currentDay = today.getDay();

   const options = {
    weekday:"long",
  };

  var day = today.toLocaleDateString("en-US",options);
  return day;
};


//console.log(module.exports);
