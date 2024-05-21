const createCurrentHourCityList = (cityCurrentHourTemp, cityCurrentHourWindSpeed) => {
  return `
  <div class="column is-5 is-centered">
    <section class="card has-text-centered has-text-white has-text-weight-bold has-background-black">
      <header class="card-header">
        <p class="card-header-title is-size-6 has-text-white has-text-weight-bold is-centered">Right Now</p>
      </header>
      <article class="card-content is-flex">
        <div class="column is-half">
          <p class="content is-size-6">${cityCurrentHourTemp}°C</p>
        </div>
        <div class="column is-half">
          <p class="content is-size-6">${cityCurrentHourWindSpeed}Km/h</p>
        </div>
      </article>
    </section>
  </div>`

}

const createCurrentDayCityList = (imageSrc, capitalisedCity, maxTemp, maxWind) => {
  return `
  <div class="column is-12 is-centered is is-narrow">
    <div class="columns is-multiline is-centered">
      <div class="column is-one-third">
        <div class="columns is-mobile">
          <div class="column is-one-quarter">
            <figure class="image is-64x64 pt-5">
              <img src="${imageSrc}" alt="${capitalisedCity}">
            </figure>
          </div>
          <div class="column">
            <div class="box has-text-centered has-background-black px-5">
              <p class="subtitle is-6 has-text-weight-bold pb-3 has-text-white">Max Temp</p>
              <p class="subtitle is-6 has-text-weight-bold has-text-white">${maxTemp}°C</p>                
            </div>
          </div>
        </div>
      </div>

      <div class="column is-one-third">
        <div class="box has-text-centered has-background-black">
          <i class='bx bx-wind image has-background-white'></i>
          <p class="subtitle is-6 has-text-weight-bold has-text-white">Wind Speed</p>
          <p class="subtitle is-6 has-text-weight-bold has-text-white">${maxWind}Km/h</p>                
        </div>
      </div>
    </div>
  </div>`
}


const createCityWeeklyDaysList = (currentDayTitle, imageSrc, capitalisedCity, minTemp, maxTemp) => {
  return `

    <div class="column is-narrow">
      <section class="card has-text-centered has-text-white has-text-weight-bold has-background-black">
        <header class="card-header">
          <p class="card-header-title is-size-6 has-text-white has-text-weight-bold is-centered">${currentDayTitle}</p>
        </header>
        <div class="card-image is-flex is-justify-content-center has-background-black">
          <figure class="image is-64x64 pt-2 is-centered">
            <img src="${imageSrc}" alt="${capitalisedCity}">
          </figure>
        </div>
        <article class="card-content is-flex">
          <div class="column is-half">
            <p class="content is-size-6">${minTemp}°C</p>
          </div>
          <div class="column is-half">
            <p class="content is-size-6">${maxTemp}°C</p>
          </div>
        </article>
      </section>
    </div>`
}
