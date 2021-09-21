var numberOfDrum = document.querySelectorAll(".drum-part").length;

// Detecting button press

for (let index = 0; index < numberOfDrum; index++) {
	document
		.querySelectorAll(".drum-part")
		[index].addEventListener("click", function () {
			var buttonInnerHtml = this.innerHTML;
			playSoundByKeyPress(buttonInnerHtml);
		});
}

// For detecting keyboard press

document.addEventListener("keydown", (e) => {
	playSoundByKeyPress(e.key);
});

function playSoundByKeyPress(key) {
	switch (key) {
		case "w":
			var wAudio = new Audio("sounds/crash.mp3");
			wAudio.play();
			break;

		case "q":
			var qAudio = new Audio("sounds/kick-bass.mp3");
			qAudio.play();
			break;

		case "a":
			var aAudio = new Audio("sounds/snare.mp3");
			aAudio.play();
			break;

		case "s":
			var sAudio = new Audio("sounds/tom-1.mp3");
			sAudio.play();
			break;

		case "j":
			var jAudio = new Audio("sounds/tom-2.mp3");
			jAudio.play();
			break;

		case "k":
			var kAudio = new Audio("sounds/tom-3.mp3");
			kAudio.play();
			break;

		case "l":
			var lAudio = new Audio("sounds/tom-4.mp3");
			lAudio.play();
			break;

		default:
			console.log("Not valid keystroke");
			break;
	}
}
