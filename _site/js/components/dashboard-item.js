const createCityItem = (city, capitalisedCity, minTemp, maxTemp, imageSrc) => {
    return `
    <div class="column is-3">
      <a href="/cityFocus/?city=${city}" class="has-text-black">
        <section class="card has-text-centered has-text-white has-text-weight-bold has-background-black">
          <header class="card-header">
            <p id="city-1-heading" class="card-header-title is-size-6 has-text-white has-text-weight-bold is-centered"> ${capitalisedCity}</p>
          </header>
          <div class="card-image is-flex is-justify-content-center">
            <figure class="image is-64x64 pt-2 is-centered">
              <img src="${imageSrc} " alt="${capitalisedCity}">
            </figure>
          </div>
          <article class="card-content is-flex">
            <div class="column is-half">
              <p class="content is-size-6">${minTemp}°C</p>
            </div>
            <div class="column is-half">
              <p class="content is-size-6">${maxTemp} Km/h</p>
            </div>
          </article>
        </section>
      </a>
    </div>`
}



