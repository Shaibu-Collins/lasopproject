function getWeather() {
    var city = document.getElementById('city-input').value;
    
    // Generate random weather data
    var weatherConditions = ['Sunny', 'Cloudy', 'Rainy', 'Snowy'];
    var randomCondition = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
    var temperature = Math.floor(Math.random() * 50); // Temperature between 0 to 50°C
    var windSpeed = Math.floor(Math.random() * 50); // Wind speed between 0 to 50 km/h
    var humidity = Math.floor(Math.random() * 100); // Humidity between 0 to 100%
    
    // Display weather information
    var weatherInfo = `
        <p>Weather for ${city}:</p>
        <p>Condition: ${randomCondition}</p>
        <p>Temperature: ${temperature}°C</p>
        <p>Wind Speed: ${windSpeed} km/h</p>
        <p>Humidity: ${humidity}%</p>
    `;
    
    document.getElementById('weather-info').innerHTML = weatherInfo;
}
