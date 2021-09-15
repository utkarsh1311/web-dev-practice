const randomNumber = () => Math.floor(Math.random() * 6) + 1;

let player1 = randomNumber();
let player2 = randomNumber();

let pic1 = "images/dice" + player1 + ".png";
let pic2 = "images/dice" + player2 + ".png";

document.querySelector("#img1").setAttribute("src", pic1);
document.querySelector("#img2").setAttribute("src", pic2);

let title = document.querySelector("h1");

if (player1 > player2) {
  title.textContent = "Player 1 wins :)";
} else if (player1 < player2) {
  title.textContent = "Player 2 wins :)";
} else {
  title.textContent = "It's a draw :|";
}
