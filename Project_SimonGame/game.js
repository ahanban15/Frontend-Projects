// alert("Hello");
const gamePattern = []; 
const buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenIndex = nextSequence();
    var randomChosenColor = buttonColors[randomChosenIndex];
    gamePattern.push(randomChosenColor);
    
};

nextSequence();
let $button = $('#' + nextSequence());
$('#' + nextSequence()).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);



