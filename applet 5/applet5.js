const API_KEY = 'your_openweather_api_key_here'; // Replace with your OpenWeather API key

function fetchWeather() {
  const city = document.getElementById('cityInput').value;
  if (city.trim() === '') {
    alert('Please enter a city name.');
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weatherResult = document.getElementById('weatherResult');
      if (data.cod === 200) {
        weatherResult.innerHTML = `
          <h3>Weather in ${data.name}, ${data.sys.country}</h3>
          <p>Temperature: ${data.main.temp}°C</p>
          <p>Condition: ${data.weather[0].description}</p>
          <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather icon">
        `;
      } else {
        weatherResult.innerHTML = `<p>${data.message}</p>`;
      }
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      alert('Failed to fetch weather data.');
    });
}
