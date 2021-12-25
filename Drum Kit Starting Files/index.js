
//we first select the given element of our choice
//in our case we selected the elemeent with tag name button
//We then add an event listener to our element.
//This event listener requiries two paramters.
//1.  the event that will trigger something like click in our case
//2. the method that will be called after the event . in our case we will call
//handleClicked method.

//More details here
//https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener

//And list of events can we found here
//https://developer.mozilla.org/fr/docs/Web/Events

//So basically we first find the very first element with the tag name button
//This element is our target.
//We then add even listener and pass first parameter as event.
//The event we are using in our case case is click.
//We then say wnen event click happens call handleClicked method
//and execute all code inside that method.
//document.querySelector("button").addEventListener("click",handleClicked);

//function handleClicked(){

  //This method will be called when some event happens
  //alert("I got clicked");
//}


var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for(var i =0;i<numberOfDrumButtons;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
var buttonInnerHTML = this.innerHTML;
makeSound(buttonInnerHTML);
buttonAnimation(buttonInnerHTML);

    // switch (buttonInnerHTML) {
    //   case "w":
    //   var tom1 = new Audio('sounds/tom-1.mp3');
    //   tom1.play();
    //   break;
    //
    //   case "a":
    //   var tom2 = new Audio('sounds/tom-2.mp3');
    //   tom2.play();
    //   break;
    //
    //   case "s":
    //   var tom3 = new Audio('sounds/tom-3.mp3');
    //   tom3.play();
    //   break;
    //
    //   case "d":
    //   var tom4 = new Audio('sounds/tom-4.mp3');
    //   tom4.play();
    //   break;
    //
    //   case "j":
    //   var snare = new Audio('sounds/snare.mp3');
    //   snare.play();
    //   break;
    //
    //   case "k":
    //   var crash = new Audio('sounds/crash.mp3');
    //   crash.play();
    //   break;
    //
    //   case "l":
    //   var kick = new Audio('sounds/kick-bass.mp3');
    //   kick.play();
    //   break;
    //
    //   default:
    //   console.log(this.innerHTML);


  //  }
  });
  }

document.addEventListener("keypress",function(){
makeSound(event.key);
buttonAnimation(event.key);
});


function makeSound(key){

  switch (key) {
    case "w":
    var tom1 = new Audio('sounds/tom-1.mp3');
    tom1.play();
    break;

    case "a":
    var tom2 = new Audio('sounds/tom-2.mp3');
    tom2.play();
    break;

    case "s":
    var tom3 = new Audio('sounds/tom-3.mp3');
    tom3.play();
    break;

    case "d":
    var tom4 = new Audio('sounds/tom-4.mp3');
    tom4.play();
    break;

    case "j":
    var snare = new Audio('sounds/snare.mp3');
    snare.play();
    break;

    case "k":
    var crash = new Audio('sounds/crash.mp3');
    crash.play();
    break;

    case "l":
    var kick = new Audio('sounds/kick-bass.mp3');
    kick.play();
    break;

    default:
    console.log(this.innerHTML);
  }
}

 function buttonAnimation(currentKey){
   var activeButton = document.querySelector("."+currentKey);
   activeButton.classList.add("pressed");

   setTimeout(function(){
     activeButton.classList.remove("pressed");
   },100);





}
