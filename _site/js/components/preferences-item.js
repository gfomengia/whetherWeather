const createFavouriteCityList = (city, capitalisedCity, switchId, checked) => {
  return `
  <tbody class="has-background-info has-text-weight-bold">
    <td>
      <div class="field">
        <input type="checkbox" id="switch-${switchId}" class="switch is-rounded is-primary" data-city="${city}" ${checked}>
        <label for="switch-${switchId}"></label>
      </div>
    </td>
    <td>${capitalisedCity}</td>
  </tbody>`        
}



