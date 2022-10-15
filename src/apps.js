function displayTemperature(response){
    console.log(response.data);
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");

    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
}

let apiKey = "b884720d8f959cc5aa66ad10c2546f56";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&lat={lat}&lon={lon}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);