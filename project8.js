// variables ,arrays
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var start = false;
var level = 0;
// All functions

// function for random number

function sequence() {
  userClickedPattern.length = 0;

  var number = Math.round(Math.random() * 3);
  var randomColor = buttonColors[number];

  level++;
  $("#level-title").text(" level " + level);

  gamePattern.push(randomColor);

  $("#" + randomColor)
    .fadeOut(150)
    .fadeIn(150);

  playSound(randomColor);
}

// function for playing sound

function playSound(name) {
  var sound = new Audio(
    "C:/Users/PRASHANT PANCHAL/Desktop/my codes/html/sounds/" + name + ".mp3"
  );
  sound.play();
}
// function for animation while we click the button

function animation(currentColor, clas) {
  $("#" + currentColor).addClass(clas);
  setTimeout(function () {
    $("#" + currentColor).removeClass(clas);
  }, 200);
}

// function for controlin the levels of game
$(document).keypress(function () {
  if (!start) {
    $("#level-title").text(" level " + level);
    sequence();
    start = true;
  }
});

// function which will work when any button is clicked

$(".btn").click(function () {
  var userChosenColor = $(this).attr("id");

  userClickedPattern.push(userChosenColor);
  // console.log(userChosenColor);

  playSound(userChosenColor);
  animation(userChosenColor, "pressed");
  checking(userClickedPattern.length - 1);
});

// function for checking users answer

function checking(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("success");
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        sequence();
      }, 1000);
    }
  } else {
    console.log("wrong");
    playSound("wrong");
    animation("main", "game-over");
    $("#level-title").text(" Game Over , Press any key to Restart ");
    restart();
  }
}
// function to restart the game
function restart(){
level = 0;
gamePattern.length = 0;
start = false;
}