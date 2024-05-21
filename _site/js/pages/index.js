document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main');
  dataStore.getCityData(weatherData); // Initialize weather data and cities list

  // Retrieve favorite cities from local storage
  const favoriteCities = JSON.parse(localStorage.getItem('favoriteCities')) || [];

  // Display cities based on favorite cities or all if none are selected
  dataStore.list().forEach((city) => {
    if (favoriteCities.length === 0 || favoriteCities.includes(city)) {
      const { minTemp, maxTemp, imageSrc, capitalisedCity } = dataStore.getDailyData(city);
      main.innerHTML += createCityItem(city, capitalisedCity, minTemp, maxTemp, imageSrc);
    }
  });
});
