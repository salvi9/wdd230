
document.getElementById('lastModified').textContent = new Date(document.lastModified);


const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});


// Save the current timestamp to local storage
localStorage.setItem('lastVisitedTime', new Date().toString());

// Retrieve the last visited time from local storage
var lastVisitedTime = localStorage.getItem('lastVisitedTime');
if (lastVisitedTime = lastVisitedTime) {
    localStorage.setItem('lastVisitedTime', new Date().toString());
}

// Calculate the difference between the current visit and last visited time
var currentTime = new Date();
var lastVisitedDate = new Date(lastVisitedTime);
var timeDifference = currentTime.getTime() - lastVisitedDate.getTime();

// Convert the time difference to seconds
var secondsDifference = Math.floor(timeDifference / 1000);

console.log('Last visited time:', lastVisitedTime);
console.log('Current time:', currentTime.toString());
console.log('Time difference (seconds):', secondsDifference);

document.querySelector('.lastVisitedTime').textContent = lastVisitedDate


