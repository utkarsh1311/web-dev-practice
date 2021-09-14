const randomNumber = () => Math.floor(Math.random() * 6 + 1);

let player1, player2;

do {
  player1 = randomNumber();
  player2 = randomNumber();
} while (player1 === player2);

let pic1 = "images/dice" + player1 + ".png";
let pic2 = "images/dice" + player2 + ".png";

document.querySelector("#img1").setAttribute("src", pic1);
document.querySelector("#img2").setAttribute("src", pic2);

if (player1 > player2) {
  document.querySelector("h1").textContent = "Player 1 wins";
} else {
  document.querySelector("h1").textContent = "Player 2 wins";
}
