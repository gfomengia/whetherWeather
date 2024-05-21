 document.addEventListener('DOMContentLoaded', () => {
   const main = document.querySelector('.favouriteCity');
   dataStore.getCityData(weatherData); // Initialize weather data and cities
   //update the id of each checked box
   let switchIdIndex = 1;
   //etrieve favorite cities from local storage or initialize to an empty array
   const favoriteCities = JSON.parse(localStorage.getItem('favoriteCities')) || [];

   //create the favorite cities when checked.
   dataStore.list().forEach((city, index) => {
     const { capitalisedCity } = dataStore.getDailyData(city);
     const checked = favoriteCities.includes(city) ? 'checked' : '';

     // Append the city item HTML to the main element
     main.innerHTML += createFavouriteCityList(city, capitalisedCity, index + 1, checked);
     switchIdIndex++;
   });
   //add event listeners to checkboxes to save the settings when checked
   document.querySelectorAll('.switch').forEach((switchElement) => {
     switchElement.addEventListener('change', (event) => {
       const city = event.target.getAttribute('data-city');
       if (event.target.checked) {
         favoriteCities.push(city);
       } else {
         const index = favoriteCities.indexOf(city);
         if (index > -1) {
           favoriteCities.splice(index, 1);
         }
       }
       //update local storage with new list. JSON.strinigy() is used to convert the array object of fav cities to string that is stored in localStorage
       localStorage.setItem('favoriteCities', JSON.stringify(favoriteCities));
     });
   });
 });
