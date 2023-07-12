
document.getElementById('lastModified').textContent = new Date(document.lastModified);

// Hamburger Menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

// Daily Forecast
const weather_url = 'https://api.openweathermap.org/data/2.5/forecast?lat=33.98&lon=-117.91&units=imperial&appid=8387eee76ed35d3bc4f13edb0a8d0fe0';
async function apiWeather() {
    const response = await fetch(weather_url);
    const data = await response.json();
    console.log(data);

    const noon = data.list.filter( x => x.dt_txt.includes('12:00:00'));
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    let day = 0;
    noon.forEach(forecast => {
        // ,"dt_txt":"2023-07-12 12:00:00
        let thedate = new Date(forecast.dt_txt) 
        document.querySelector(`#day${day+1}`).textContent = weekdays[thedate.getDay()];
        document.querySelector(`#weather${day+1}`).innerHTML = `${forecast.main.temp}&#176;F`;
        
        /*Image for weather forecast */
        let imagesrc = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`; 
        const desc = forecast.weather[0].description;
        document.getElementById(`icon${day+1}`).setAttribute('src', imagesrc);
        document.getElementById(`icon${day+1}`).setAttribute('alt', desc);
        day++;
})}
apiWeather();


//Member Json File
const url = 'https://salvi9.github.io/wdd230/chamber/data/members.json';
const spotlight_ads = document.querySelector('#spotlight');

async function getMemberData() {
	const response = await fetch(url);
	const data = await response.json();
    spotlight(data.members);
}
getMemberData()

// Home page spotlight
const spotlight = (members) => {
    let counter = 0
    members.forEach((member) => {
        if (counter >= 3) {
            return;
        }

        let card = document.createElement('div');
        card.classList.add("company");
        let tags = document.createElement('h3');
        let tags1 = document.createElement('p')
        let portrait = document.createElement('img');

        portrait.setAttribute('src', member.image);
        portrait.setAttribute('alt', `Portrait of ${member.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '240');
        portrait.setAttribute('height', '340');

        tags.textContent = `Name: ${member.name}`;
        tags1.textContent = 'hello';
        

        card.appendChild(portrait);
        card.appendChild(tags);
		card.appendChild(tags1);
        spotlight_ads.appendChild(card);
        counter++;
    });
};


//Member Json File
const cards = document.querySelector('#directory_cards');

async function getMemberData() {
	const response = await fetch(url);
	const data = await response.json();
	displayMembers(data.members);
}
getMemberData()
// Directory cards
const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('div');
        card.classList.add("directory_div")
        let tags = document.createElement('h3');
		let tags1 = document.createElement('h3');
		let tags2 = document.createElement('h3');
		let tags3 = document.createElement('h3');

        let website = document.createElement('a')

        website.setAttribute('href', `${member.url}`);
        website.textContent = `Website`

        let portrait = document.createElement('img');

        portrait.setAttribute('src', member.image);
        portrait.setAttribute('alt', `Portrait of ${member.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '240');
        portrait.setAttribute('height', '340');

        tags.textContent = `Name: ${member.name}`;
        tags1.textContent = `Address: ${member.address}`;
        tags2.textContent = `Phone Number: ${member.phone}`;
        tags3.textContent = `Membership: ${member.membershipLevel}`;

        card.appendChild(website);
        card.appendChild(portrait);
        card.appendChild(tags);
		card.appendChild(tags1);
		card.appendChild(tags2);
		card.appendChild(tags3);
        card.appendChild(website);


        cards.appendChild(card);
    });
};

/* grid button and list button */
const gridbutton = document.querySelector("#directory_grid");
const listbutton = document.querySelector("#directory_list");
const display = document.querySelector("#directory_cards");


gridbutton.addEventListener("click", () => {
	display.classList.add("directory_grid");
	display.classList.remove("directory_list");
});

listbutton.addEventListener("click", showList);

function showList() {
	display.classList.add("directory_list");
	display.classList.remove("directory_grid");
}


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
    document.querySelector('.lastVisitedTime').innerHTML = "Back so soon! Awesome";
} else if (secondsDifference > 86400 && numVisits > 1 ) {
    document.querySelector('.lastVisitedTime').textContent = `You last visited ${daysDifference}`;
} else if (secondsDifference > 86400 && numVisits > 2 ) {
    document.querySelector('.lastVisitedTime').textContent = `You last visited ${daysDifference}s`;
}

// Password Confirmation for Form Page
const kp1 = document.querySelector("#keyphrase");
const kp2 = document.querySelector("#keyphrase2");
const message = document.querySelector("#formmessage");

kp2.addEventListener("focusout", checkSame);
function checkSame() {
	if (kp1.value !== kp2.value) {
		message.textContent = "❗Key Phrases DO NOT MATCH!";
		message.style.visibility = "show";
		kp2.style.backgroundColor = "#fff0f3";
		kp2.value = "";
		kp2.focus();
	} else {
		message.style.display = "none";
		kp2.style.backgroundColor = "#fff";
		kp2.style.color = "#000";
	}
}

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// Page Rating
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

document.querySelector('#timestamp').textContent = currentTime;

