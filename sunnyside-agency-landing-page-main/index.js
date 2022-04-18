let menu = document.querySelector("#menu");
let toggle = document.querySelector("#toggle-icon");

toggle.addEventListener("click", () => {
	menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
});
