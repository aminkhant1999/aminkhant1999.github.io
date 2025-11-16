let buttonColours = ["red", "blue", "green", "yellow"]; // Array of button colors

let gamePattern = []; // Array to hold the game pattern
let userClickedPattern = []; // Array to hold the user's clicked pattern

let started = false; // Flag to check if the game has started
let level = 0; // letiable to track the current level

// Event listener for keypress to start the game
$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level); // Update level title
    nextSequence(); // Call function to generate the next sequence
    started = true; // Set started flag to true
  }
});

// Function to generate the next sequence
function nextSequence() {
  userClickedPattern = []; // Reset the user's clicked pattern for the new level
  level++; // Increment the level
  $("#level-title").text("Level " + level); // Update level title
  let randomNumber = Math.floor(Math.random() * 4); // Generate a random number between 0 and 3
  let randomChosenColour = buttonColours[randomNumber]; // Select a random color from the button colors
  gamePattern.push(randomChosenColour); // Add the random color to the game pattern

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100); // Animate the button
  playSound(randomChosenColour); // Play sound for the button
}

// Event listener for button clicks
$(".btn").click(function() {

  let userChosenColour = $(this).attr("id"); // Get the id of the clicked button
  userClickedPattern.push(userChosenColour); // Add the clicked color to the user's clicked pattern

  playSound(userChosenColour); // Play sound for the clicked button
  animatePress(userChosenColour); // Animate the pressed button

  checkAnswer(userClickedPattern.length-1); // Check the user's answer
});

function checkAnswer(currentLevel) {
    // Check if the user's answer is correct
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong"); // Play wrong sound
      $("body").addClass("game-over"); // Add game-over class to body
      $("#level-title").text("Game Over, Press Any Key to Restart"); // Update level title

      // Remove game-over class after 200 milliseconds
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver(); // Reset the game
    }
}

// function to animate button presses
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

// function to play sound
function playSound(name) {
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

// function to reset the game
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
