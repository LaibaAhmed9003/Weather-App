const apikey = "8fb660ad8f2f061d8216e316ba302af1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");  // Corrected class name

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        const data = await response.json();
        
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        
        switch(data.weather[0].main) {
            case "Clouds":
                weatherIcon.src = "clouds.png";
                break;
            case "Clear":
                weatherIcon.src = "clear.png";
                break;
            case "Rain":
                weatherIcon.src = "rain.png";
                break;
            case "Drizzle":
                weatherIcon.src = "drizzle.png";
                break;
            case "Mist":
                weatherIcon.src = "mist.png";
                break;
                case "Snow":
                weatherIcon.src = "snow.png";
                break;
                case "Humidity":
                weatherIcon.src = "humidity.png";
                break;
                case "Wind":
                weatherIcon.src = "wind.png";
                break;

            default:
                weatherIcon.src = "default.png";  // Fallback icon
        }
        
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchbtn.addEventListener("click", () => {
    checkWeather(searchbox.value);
});

// Add event listener for 'Enter' key press
searchbox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        checkWeather(searchbox.value);
    }
});
