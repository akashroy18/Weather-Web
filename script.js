const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');
async function checkWeather(city){
    const apikey="6e52e7018e35f80db8e6766925c305ec";
    const url =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    const weatherdata = await fetch(`${url}`).then(Response => Response.json());
    if(weatherdata.cod ==='404'){
        location_not_found.style.display = 'flex';
        weather_body.style.display = "none";
        console.log("error");
        return;

    }
    console.log("run");
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
     temperature.innerHTML = `${Math.round(weatherdata.main.temp - 273.15)}°C`;
     description.innerHTML = `${weatherdata.weather[0].description}`;
     humidity.innerHTML = `${weatherdata.main.humidity} %`;
     wind_speed.innerHTML = `${weatherdata.wind.speed}Km/H`;
      switch(weatherdata.weather[0].main){
        case 'Clouds':
            weather_img.src = "/assets/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "/assets/clear.png";
            break;
        case 'Rain':
            weather_img.src = "/assets/rain.png";
            break;
        case 'Mist':
            weather_img.src = "/assets/mist.png";
            break;
        case 'Snow':
            weather_img.src = "/assets/snow.png";
            break;

    }
    console.log(weatherdata);

}
searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});
