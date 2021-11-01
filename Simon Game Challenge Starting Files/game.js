let buttonColor = ["red", "blue", "green", "yellow"];
let userClickedPattern = [];
let gamePattern = [];
let currentLevel = 0;
let started = false;

$(document).keypress(function (e) {
	if (!started) {
		$("#level-title").text("Level " + currentLevel);
		setTimeout(() => {
			newSequence();
		}, 300);
		started = true;
	}
});

$(".btn").click(function () {
	let userChoosenColor = $(this).attr("id");
	playSound(userChoosenColor);
	userClickedPattern.push(userChoosenColor);
	animatePress(userChoosenColor);
	checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {
	if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
		console.log("Success");

		if (gamePattern.length === userClickedPattern.length) {
			setTimeout(() => {
				console.log(gamePattern);
				newSequence();
				userClickedPattern = [];
			}, 1000);
		}
	} else {
		console.log("Failed");
		playSound("wrong");
		$("body").addClass("game-over");
		setTimeout(() => {
			$("body").removeClass("game-over");
		}, 200);

		$("h1").text("Game over! Press any key to restart the game.");
		gameRestart();
	}
}

function newSequence() {
	let randomNumber = Math.floor(Math.random() * 4);

	let randomChosenColor = buttonColor[randomNumber];

	gamePattern.push(randomChosenColor);

	$("." + randomChosenColor)
		.fadeOut(200)
		.fadeIn(200);
	animatePress(randomChosenColor);
	playSound(randomChosenColor);

	currentLevel++;
	$("#level-title").text("Level " + currentLevel);
}

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

function gameRestart() {
	currentLevel = 0;
	gamePattern = [];
	started = false;
}
