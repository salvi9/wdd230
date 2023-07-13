//Member Json File
const cards = document.querySelector('#directory_cards');
const url = 'https://salvi9.github.io/wdd230/chamber/data/members.json';

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