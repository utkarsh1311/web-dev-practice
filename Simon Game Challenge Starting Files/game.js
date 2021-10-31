let buttonColor = ["red", "blue", "green", "yellow"];
let userClickedPattern = [];
let gamePattern = [];

function newSequence() {
	let randomNumber = Math.floor(Math.random() * 4);

	let randomChosenColor = buttonColor[randomNumber];

	gamePattern.push(randomChosenColor);

	$("." + randomChosenColor)
		.fadeOut(200)
		.fadeIn(200);

	playSound(randomChosenColor);
}

newSequence();

function playSound(randomColor) {
	var audio = new Audio("sounds/" + randomColor + ".mp3");
	audio.muted = false;
	audio.play();
}
