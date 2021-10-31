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
