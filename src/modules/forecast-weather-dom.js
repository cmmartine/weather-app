export { forecastWeatherDOM }

const forecastDaysContainer = document.getElementById('forecast-days-container');

function forecastWeatherDOM(forecastWeather) {
  forecastDaysContainer.innerText = '';
  
  Object.entries(forecastWeather.forecast.forecastday).forEach(forecast => {
    const forecastDayDiv = document.createElement('div');
    forecastDayDiv.classList.add('forecast-day-content');
    showDate(forecast[1], forecastDayDiv);
    showTemps(forecast[1], forecastDayDiv);
    showConditions(forecast[1], forecastDayDiv);
    showChanceRain(forecast[1], forecastDayDiv);
    forecastDaysContainer.append(forecastDayDiv);
  });
}

function showDate(forecast, dayContainer) {
  const datePara = document.createElement('h4');
  datePara.innerText = `${forecast.date}`;
  dayContainer.append(datePara);
}

function showTemps(forecast, dayContainer) {
  const highPara = document.createElement('p');
  const lowPara = document.createElement('p');
  highPara.innerText = `High: ${forecast.day.maxtemp_f}`;
  lowPara.innerText = `Low: ${forecast.day.mintemp_f}`;
  dayContainer.append(highPara, lowPara);
}

function showConditions(forecast, dayContainer) {
  const conditionPara = document.createElement('p');
  conditionPara.innerText = `${forecast.day.condition.text}`;
  dayContainer.append(conditionPara);
}

function showChanceRain(forecast, dayContainer) {
  const precipPara = document.createElement('p');
  precipPara.innerText = `Chance of rain: ${forecast.day.daily_chance_of_rain}%`;
  dayContainer.append(precipPara);
}