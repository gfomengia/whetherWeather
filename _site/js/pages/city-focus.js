  document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const currentCity = urlParams.get('city');

   

    dataStore.getCityData(weatherData);

    
      // Get the current city data
      const dailyData = dataStore.getDailyData(currentCity);
      const weeklyData = dataStore.getWeeklyData(currentCity);
      const currentHourData = dataStore.getCurrentHourData(currentCity);

      
      // Update city name
      const cityHeading = document.querySelector(`#currentCityTitle`);
      cityHeading.innerHTML = dataStore.capitalizeCityName(currentCity);

      // Display current hour data
      const { cityCurrentHourTemp, cityCurrentHourWindSpeed } = currentHourData;
      const main = document.querySelector('main');
      main.innerHTML += createCurrentHourCityList(cityCurrentHourTemp, cityCurrentHourWindSpeed);

      // Display current day data
      const { imageSrc, capitalisedCity, maxTemp, maxWind } = dailyData;
      main.innerHTML += createCurrentDayCityList(imageSrc, capitalisedCity, maxTemp, maxWind);

      // Display weekly data
      weeklyData.forEach((dayData, index) => {                

        const { currentDayTitle, imageSrc, capitalisedCity, minTemp, maxTemp } = dayData;

        
        // Get current day index
        const currentDate = new Date();
        const currentDayIndex = currentDate.getDay();

        let dayTitle;
        if (index === currentDayIndex) {
          dayTitle = dayData.currentDayTitle; // Use the currentDayTitle from dayData
          dayTitle = "Today";
          } else {
            dayTitle = dayNames[index % dayNames.length];
            }

        main.innerHTML += createCityWeeklyDaysList(dayTitle, imageSrc, capitalisedCity, minTemp, maxTemp);            
              
      });   
   
});
  



