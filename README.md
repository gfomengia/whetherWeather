
# Whether Weather Forcast

The main purpose of this website is weather forcast application that displays weather information selected cities based on the user ssettings.   

![Dashboard Display](/images/dashboard.png)

## Features

### Existing Features

- __Navigation Bar__

  - Navigation Bar featured three pages and a logo. This allows visitors to navigate effortlessly through the different pages.
  -Dashboard (Home page), City focus page and the Preference (User settings page).
  -The navigation bar also consit of a humburger menu for mobile devices
  

![Navigation bar-desktop](/images/navbar-desktop.png)
![Navigation bar-mobile](/images/navbar-mobile.png)

ls

- __Home Page__

  - On first visit, the user is welcome with the dashboard that displays the current essential weather information(Temperature, wind speed) of some cities.

![Index page](/images/dashboard.png)

- __City Focus Page__

  - This sections displays the current weather information based on the current hour, maximum and minumum temperatures for the current day and the weekly summary over the next 7 days inclusing the current day.
  

  ![City Focus Page](/images/cityfocus.png)

- __User Settings or Preference Page__

  - Here the user can select favorite cities and this will be displayed on the dashboard while the rest will be removed.
  - Small business will benefit from the affortable services provided by Sixth Sense as it falls within their budjet.
  
  ![User settings](/images/usersettings.png)
  ![dashboard](/images/dasboard-usersettings.png)
  
- __The Footer__

  - A simple footer showing the year and the website name for branding and design.  

![Footer](/images/footer.png)


  
### Features Left to Implement

- Add a more settings to the like temperature conversion from Celcius to Kelvin, Farenheit.
- Add a seach bar, 
-Add notificationstto the user for intance when certain temperature conditions are met.
  
## Technologies Used
  - HTML
  - Bulma CSS framework to style the pages using the mobile first desing approach per bulma docs. [Bulma CSS](https://bulma.io/)
  - Javascript was used to inject dynamic weather data in to the html pages.
  - 11ty (ELeventy) was used to automate the page reloads as we develop the app and to also aid in templating.[11ty(Eleventy)](https://www.11ty.dev/)
  - Nunjucks was use as templating the app as this helps to update content easily in one place rather than in multiple pages. [Nunjucks](https://mozilla.github.io/nunjucks/)
  . 

## Usage
1. Go to the preference page in your browser
2. Select your favorite cities by checking the corresponding boxes
3. Go then to the dashbord and to see the favorite city displayed
4. Clicking on any city will take you to the focus city page where all the relevant weather information is showned for that city.
5. Preferences are stored on localStorage which persist on page reload. However, browser cache clean will reset it to the default settings.
6. On the city focus page, you can also load a new city by changing the city name in the address url of the search bar. Data is available for the following cities: cork, amsterdam, berlin, waterford, new york, paris, tromso, copenhagen and san francisco

## Deployment

- The site was deployed using netlify. The steps to deploy are as follows:

1. From the github repository click on "settings" from the navigation bar.
2. Click on "pages" from navigation section on the left.
3. In the "source" section choose which branch you want to use from the dropdown menu, it will usually be the "main".
4. Select which folder you want to use, in most cases its the "/root".
5. Hit the "save" button, then wait for your site to be published.(This can take some time.)
6. When your site is ready and published the link will be above the "source" section

The live link can be found [here](https://gfomengia.github.io/data-visualisation-pp1/)


## Media

- The icons used in the app were all taken from [Boxicons](https://boxicons.com/).

## License
-This project is licensed under the MIT License.

