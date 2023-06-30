// // alert("Hello");
// function nextSequence() {
//     let randomNumber = Math.random() * 3;
//     console.log(randomNumber);
// };

// nextSequence();

// alert("Hello");
function nextSequence() {
    let randomNumber = Math.random() * 4;
    console.log(Math.floor(randomNumber));
};

const gamePattern = []; 
const buttonColors = ["red", "blue", "green", "yellow"];

let randomChosenIndex = nextSequence();
let randomChosenColor = buttonColors[randomChosenIndex];
gamePattern.push(randomChosenColor);

