// Detecting Button Press
document.querySelectorAll(".drum").forEach((button) => {
  button.addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML; // 'this' refers to the button that was clicked
    makeSound(buttonInnerHTML); // Call makeSound with the button's innerHTML
    buttonAnimation(buttonInnerHTML); // Call buttonAnimation with the button's innerHTML
  });
});

// Detecting Keyboard Press
document.addEventListener("keydown", function (event) {
  makeSound(event.key); // Call makeSound with the key that was pressed
  buttonAnimation(event.key); // Call buttonAnimation with the key that was pressed
});

// Function to play sound based on the key/button pressed
function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(key);
  }
}

// Function to animate button when pressed
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey); // Select the button with the class matching the key
  if (!activeButton) return; // If no button matches, exit the function
  activeButton.classList.add("pressed"); // Add the "pressed" class to the button

  // Remove the "pressed" class after 100 milliseconds
  setTimeout(function () {
    activeButton.classList.remove("pressed"); 
  }, 100);
}