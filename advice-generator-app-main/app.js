let refreshButton = document.querySelector("#refresh");
let quotePara = document.querySelector("#quote");
let adviceId = document.querySelector("#adviceId");

const setNewQuote = (quote, id) => {
	quotePara.textContent = `"${quote}"`;
	adviceId.textContent = `ADVICE #${id}`;
};

async function getNewQuote() {
	let response = await fetch("https://api.adviceslip.com/advice");
	let data = await response.json();
	let quote = data.slip.advice;
	let quoteId = data.slip.id;
	setNewQuote(quote, quoteId);
	console.log(quote);
}

let copy = document.querySelector("#copy");

function copyToClickBoard(){
    var content = quotePara.innerHTML;

    navigator.clipboard.writeText(content)
        .then(() => {
        alert("advice copied successfully")
    })
        .catch(err => {
        console.log('Something went wrong', err);
    })
 
}

copy.addEventListener("click", copyToClickBoard);


refreshButton.addEventListener("click", getNewQuote);

window.onload = getNewQuote();
