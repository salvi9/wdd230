
document.getElementById('lastModified').textContent = new Date(document.lastModified);

// Hamburger Menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});


// Tracking visit and Time in between page visit for Discover Page
let lastVisitedTime = localStorage.getItem('lastVisitedTime');
localStorage.setItem('lastVisitedTime', new Date().toString());

let currentTime = new Date();
let lastVisitedDate = new Date(lastVisitedTime);
let timeDifference = currentTime.getTime() - lastVisitedDate.getTime();


let secondsDifference = Math.floor(timeDifference / 1000);
let daysDifference = Math.floor(secondsDifference / 86400)
localStorage.setItem('secondsDifference', secondsDifference);

const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

numVisits++;
localStorage.setItem("numVisits-ls", numVisits);

if (numVisits == 1) {
    document.querySelector('.lastVisitedTime').textContent = "Welcome! Let us know if you have any questions";
} else if (secondsDifference > 1 && secondsDifference < 86400 && numVisits > 1) {
    document.querySelector('.lastVisitedTime').textContent = "Back so soon! Awesome";
} else if (secondsDifference > 86400 && numVisits > 1 ) {
    document.querySelector('.lastVisitedTime').textContent = `You last visited ${daysDifference}`;
} else if (secondsDifference > 86400 && numVisits > 2 ) {
    document.querySelector('.lastVisitedTime').textContent = `You last visited ${daysDifference}s`;
}

// Password Confirmation for Join Page
const pwd = document.querySelector("#password");
const pwd2 = document.querySelector("#password2");
const message = document.querySelector("#formmessage");

pwd2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
	if (pwd.value !== pwd2.value) {
		message.textContent = "❗Key Phrases DO NOT MATCH!";
		message.style.visibility = "show";
		pwd2.style.backgroundColor = "#fff0f3";
		pwd2.value = "";
		pwd2.focus();
	} else {
		message.style.display = "none";
		pwd2.style.backgroundColor = "#fff";
		pwd2.style.color = "#000";
	}
}