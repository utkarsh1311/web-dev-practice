const numberBtns = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector("#equals");
const screen = document.querySelector("#screen");
let c = true;
let val2 = 0;
let tempVal = 0;
let val1 = 0;
let operator = "";
numberBtns.forEach((btn) => {
	btn.addEventListener("click", () => {
		if (c) {
			val1 = val1 * 10 + Number(btn.value);
			console.log(val1);
		} else {
			val2 = val2 * 10 + Number(btn.value);
			console.log(val2);
		}
	});
});

operators.forEach((op) => {
	op.addEventListener("click", () => {
		operator = op.value;
		c = false;
	});
});

equals.addEventListener("click", () => {
	switch (operator) {
		case "+":
			console.log("The sum of two given numbers is " + (val1 + val2));
			screen.innerHTML = `<p>${val1 + val2}</p>`;
			reset();
			break;
		case "-":
			console.log("The diff of two given numbers is " + (val1 - val2));
			reset();
			break;
		case "x":
			console.log("The product of two given numbers is " + val1 * val2);
			reset();
			break;
		case "/":
			console.log(
				"The division of two given numbers is " +
					(val1 / val2 === Infinity
						? "not defined"
						: (val1 / val2).toFixed(3))
			);
			reset();
			break;
	}
	// console.log("The value of is ");
});

const reset = () => {
	val1 = 0;
	val2 = 0;
	operator = "";
	c = true;
};
