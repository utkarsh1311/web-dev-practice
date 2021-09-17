
document.querySelectorAll(".drum-part").forEach((element) => {
	element.addEventListener("click", function () {
		var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
	});
});
