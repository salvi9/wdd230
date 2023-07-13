// Daily Forecast
const weather_url = 'https://api.openweathermap.org/data/2.5/forecast?lat=33.98&lon=-117.91&units=imperial&appid=8387eee76ed35d3bc4f13edb0a8d0fe0';
async function apiWeather() {
    const response = await fetch(weather_url);
    const data = await response.json();

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