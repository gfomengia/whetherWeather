const dataStore = {
  cities: [],
  weatherData: weatherData, // Declared already in weather_data.js

  // Function to map weather codes to image paths
  getImagePath(weatherCode) {
    switch (weatherCode) {
      case 0:
        return "/images/clear.png";
      case 1:
      case 2:
      case 3:
        return "/images/cloudy.png";
      case 45:
      case 48:
        return "/images/mist.png";
      case 51:
      case 53:
      case 55:
      case 61:
      case 63:
      case 65:
      case 66:
      case 67:      
      case 80:
      case 81:
      case 82:
        return "/images/rain.png";
      case 56:
      case 57:
      case 71:
      case 73:
      case 75:
      case 77:
      case 85:
      case 86:
        return "/images/snow.png";
      default:
        return "/images/sun.png"; // Default image path
          }
      },

  getCityData(weatherData) {
    this.weatherData = weatherData;
    Object.keys(weatherData).forEach(key => {
      if (key.endsWith("_daily")) {
        const city = key.replace("_daily", "");
        this.cities.push(city);
      }
    });
  },

  getDailyData(city) {
      if (!this.weatherData) {
          console.error("Weather data is not available.");
          return null;
      }

      const dailyData = this.weatherData[city + "_daily"];
      if (!dailyData || !dailyData.daily) {
          console.error("Daily data not available for city:", city);
          return null;
      }

      const currentDayIndex = dayjs().day();
      const weatherCode = dailyData.daily.weather_code[currentDayIndex]; // Get the weather code for the current day

      // Generate image path based on the weather code
      const imageSrc = this.getImagePath(weatherCode);

      return {
          minTemp: dailyData.daily.temperature_2m_min[currentDayIndex],
          maxTemp: dailyData.daily.temperature_2m_max[currentDayIndex],
          maxWind: dailyData.daily.wind_speed_10m_max[currentDayIndex],
          imageSrc: imageSrc,
          capitalisedCity: this.capitalizeCityName(city)
      };
  },

  getWeeklyData(city) {
      if (!this.weatherData) {
          console.error("Weather data is not available.");
          return null;
      }

      const dailyData = this.weatherData[city + '_daily'];
      if (!dailyData || !dailyData.daily) {
          console.error("Data not available for city:", city);
          return null;
      }

      return dailyData.daily.temperature_2m_max.map((maxTemp, index) => {
          const currentDayTitle = dayNames[index % dayNames.length]; // Ensure we get a valid day name
          const weatherCode = dailyData.daily.weather_code[index]; // Get the weather code

          // Generate image path based on the weather code
          const imageSrc = this.getImagePath(weatherCode);

          return {
              currentDayTitle: currentDayTitle,
              imageSrc: imageSrc,
              capitalisedCity: this.capitalizeCityName(city),
              minTemp: dailyData.daily.temperature_2m_min[index],
              maxTemp: maxTemp
          };
      });
  },
  getCurrentHourData(city) {
    if (!this.weatherData) {
      console.error("Weather data is not available.");
      return null;
    }

    const hourlyData = this.weatherData[city + "_hourly"];
    if (!hourlyData || !hourlyData.hourly) {
      console.error("Hourly data not available for city:", city);
      return null;
    }

    const currentHour = dayjs().hour();
    return {
      cityCurrentHourTemp: hourlyData.hourly.temperature_2m[currentHour],
      cityCurrentHourWindSpeed: hourlyData.hourly.wind_speed_10m[currentHour]
    };
  },

  list() {
    return this.cities;
  },

  capitalizeCityName(city) {
    return city.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
};

const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

