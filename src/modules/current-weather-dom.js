export { currentWeatherDOM }

const currentContent = document.getElementById('current-content');

function currentWeatherDOM(currentWeather) {
  currentContent.innerText = '';
  showCurrentLocation(currentWeather.location);
  showTemperature(currentWeather.current);
  showConditions(currentWeather.current);
  showWind(currentWeather.current);
}

function showCurrentLocation(currentLocation) {
  const locationPara = document.createElement('h2');
  locationPara.innerText = `${currentLocation.name}, ${currentLocation.region}`;
  currentContent.append(locationPara);
}

function showTemperature(currentWeather) {
  const tempPara = document.createElement('p');
  tempPara.innerText = `${currentWeather.temp_f}°F`;
  currentContent.append(tempPara);
}

function showConditions(currentWeather) {
  const conditionPara = document.createElement('p');
  conditionPara.innerText = `${currentWeather.condition.text}`;
  currentContent.append(conditionPara);
}

function showWind(currentWeather) {
  const windPara = document.createElement('p');
  windPara.innerText = `Wind: ${currentWeather.wind_mph} mph ${currentWeather.wind_dir}`;
  currentContent.append(windPara);
}