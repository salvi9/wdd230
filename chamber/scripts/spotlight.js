//Member Json File
const url = 'https://salvi9.github.io/wdd230/chamber/data/members.json';
const spotlight_ads = document.querySelector('#spotlight');

async function getSpotlightData() {
	const response = await fetch(url);
	const data = await response.json();
    spotlight(data.members);
}
getSpotlightData()

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
        let portrait = document.createElement('img');

        portrait.setAttribute('src', member.image);
        portrait.setAttribute('alt', `Portrait of ${member.name}`);
        portrait.setAttribute('loading', 'lazy');
        
        tags.textContent = `${member.name}`;
        

        card.appendChild(portrait);
        card.appendChild(tags);
        spotlight_ads.appendChild(card);
        counter++;
    });
};