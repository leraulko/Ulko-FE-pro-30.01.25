document.addEventListener("DOMContentLoaded", getWeather);

async function getWeather() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=50.352815&lon=30.950519&appid=210d71af9eab5fe6dbc6036cc511f740&units=metric');
    const result = await response.json();

    console.log(result);
    showInfo(result);
}


function showInfo(data) {
    const parent = document.querySelector('#weather');

    const city = data.name;
    const temp = data.main.temp;
    const feelsLike = data.main.feels_like;
    const humidity = data.main.humidity;
    const weatherDescription = data.weather[0].description;

    parent.innerHTML = `
        <h2> The weather in ${city}</h2>
        <p> <strong> Temp: ${temp}°C</strong> </p>
        <p> Feels like: ${feelsLike}°C </p>
        <p> Humidity: ${humidity}% </p>
        <p> Description: ${weatherDescription} </p>
    `;
}

document.querySelector('button').addEventListener('click', getWeather);