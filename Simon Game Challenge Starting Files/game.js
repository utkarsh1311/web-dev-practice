let buttonColor = ["red", "blue", "green", "yellow"];
let userClickedPattern = [];
let gamePattern = [];
let currentLevel = 0;
let started = false;

$(document).keypress(function (e) {
	if (!started) {
		$("#level-title").text("Level " + currentLevel);
		newSequence();
		started = true;
	}
});

function newSequence() {
	let randomNumber = Math.floor(Math.random() * 4);

	let randomChosenColor = buttonColor[randomNumber];

	gamePattern.push(randomChosenColor);

	$("." + randomChosenColor)
		.fadeOut(200)
		.fadeIn(200);

	playSound(randomChosenColor);

	currentLevel++;
	$("#level-title").text("Level " + currentLevel);
}

$(".btn").click(function () {
	let userChoosenColor = $(this).attr("id");
	playSound(userChoosenColor);
	userClickedPattern.push(userChoosenColor);
	animatePress(userChoosenColor);
});

function playSound(randomColor) {
	var audio = new Audio("sounds/" + randomColor + ".mp3");
	audio.play();
}

function animatePress(color) {
	$("#" + color).addClass("pressed");
	setTimeout(() => {
		$("#" + color).removeClass("pressed");
	}, 50);
}
