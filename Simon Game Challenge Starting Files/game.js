
let buttonColor = ["red", "blue", "green", "yellow"];

let gamePattern = [];

function newSequence() {
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    return randomNumber;
}

let randomChosenColor = buttonColor[newSequence()];

gamePattern.push(randomChosenColor);

$("." + randomChosenColor).fadeOut(150).fadeIn(150);
