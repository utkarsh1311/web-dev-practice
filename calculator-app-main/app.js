const numberBtns = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector("#equals");
const screen = document.querySelector("#screen");
const resetButton = document.querySelector("#reset");

// let c = true;
// let ep = true;
// let val2 = 0;
// let tempVal = 0;
// let val1 = 0;
// let operator = "";
// let expressionString = "";

// numberBtns.forEach((btn) => {
// 	btn.addEventListener("click", () => {
// 		if (c) {
// 			expressionString += btn.value;
// 			val1 = val1 * 10 + Number(btn.value);
// 			console.log(val1);
// 			console.log(expressionString);
// 		} else {
// 			expressionString += btn.value;
// 			val2 = val2 * 10 + Number(btn.value);
// 			console.log(val2);
// 			console.log(expressionString);
// 		}
// 	});
// });

// operators.forEach((op) => {
// 	op.addEventListener("click", () => {
// 		if (ep) {
// 			operator = op.value;
// 			expressionString += op.value;
// 			console.log(expressionString);
// 			c = false;
// 			ep = false;
// 		}
// 	});
// });

// equals.addEventListener("click", () => {
// 	switch (operator) {
// 		case "+":
// 			let value = val1 + val2;
// 			console.log("The sum of two given numbers is " + (val1 + val2));
// 			screen.innerHTML = `<p>${value.toLocaleString()}</p>`;
// 			reset();
// 			break;
// 		case "-":
// 			console.log("The diff of two given numbers is " + (val1 - val2));
// 			reset();
// 			break;
// 		case "x":
// 			console.log("The product of two given numbers is " + val1 * val2);
// 			reset();
// 			break;
// 		case "/":
// 			console.log(
// 				"The division of two given numbers is " +
// 					(val1 / val2 === Infinity
// 						? "not defined"
// 						: (val1 / val2).toFixed(3))
// 			);
// 			reset();
// 			break;
// 	}
// 	// console.log("The value of is ");
// });

// const reset = () => {
// 	// screen.innerHTML = "";
// 	val1 = 0;
// 	val2 = 0;
// 	c = true;
// };

// resetButton.addEventListener("click", () => {
// 	screen.innerHTML = "";
// });

let value = 0;

let val1 = "0";
let val2 = "0";
let op = "";
let c = true;
numberBtns.forEach((btn) => {
	btn.addEventListener("click", () => {
		if (c) {
			val1 += btn.value;
		} else {
			val2 += btn.value;
		}
	});
});

operators.forEach((operator) => {
	operator.addEventListener("click", () => {
		if (op != "" && val2 != "") {
			value = compute(val1, val2, op);
			console.log("This is the result " + value);
			val1 = value;
			val2 = "";
		}

		op = operator.value;
		c = false;
	});
});

const compute = (val1, val2, op) => {
	switch (op) {
		case "+":
			return Number(val1) + Number(val2);
		case "-":
			return Number(val1) - Number(val2);
		case "x":
			return Number(val1) * Number(val2);
		case "/":
			if (Number(val2) !== 0) {
				return (Number(val1) / Number(val2));
			} else {
				return undefined;
			}
	}
};
