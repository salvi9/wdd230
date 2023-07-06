const options = {
    year:'numeric'
}
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);

document.getElementById('lastModified').textContent = new Date(document.lastModified);

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("☑️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "❎";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "☑️";
	}
});

const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 1;

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
}

numVisits++;
localStorage.setItem("numVisits-ls", numVisits);


// Get current Temperature
const currentTemp = document.querySelector('#current_temp');
const weatherIcon = document.querySelector('#weather_icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=33.98&lon=-117.91&units=imperial&appid=8387eee76ed35d3bc4f13edb0a8d0fe0';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);

        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].main;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', `Picture of ${data.weather[0].description}`);
    captionDesc.textContent = `${desc}`
}

//dynamic learning activity
const baseURL = "https://salvi9.github.io/wdd230/";
const linksURL = "https://salvi9.github.io/wdd230/data/links.json";
const link1 = document.querySelector('#links');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data.weeks);
    displayLinks(data.weeks);
}

getLinks();

const displayLinks = (weeks) => {
    weeks.forEach((week) => {      
       link1.setAttribute('href', week.links[0].url);
       link1.textContent(`${week[0].links[1].title}`);
    });
};
