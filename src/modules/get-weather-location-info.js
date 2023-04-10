export { getCurrentWeatherFromIp, getForecastFromIp };
import { currentWeatherDOM } from "./current-weather-dom";
import { forecastWeatherDOM } from "./forecast-weather-dom";

const weatherKey = '498b1218daf647469f2182425230304';
const currentURL = `https://api.weatherapi.com/v1/current.json?key=${weatherKey}&q=`;
const forecastURL = `https://api.weatherapi.com/v1/forecast.json?key=${weatherKey}&q=`;
const ipURL = `https://api.weatherapi.com/v1/ip.json?key=${weatherKey}&q=auto:ip`;

const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', getSearchCurrentWeather);
searchButton.addEventListener('click', getSearchForecast);

function adjustCityString(city) {
  return city.toLowerCase().replaceAll(' ', '_');
}

async function getSearchCurrentWeather(e) {
  e.preventDefault();
  const searchValue = document.getElementById('location-search').value;
  const searchLocation = adjustCityString(searchValue);
  try {
    const searchCurrentWeatherURL = currentURL + searchLocation;
    const searchResponse = await fetch(searchCurrentWeatherURL, {mode: 'cors'});
    const searchData = await searchResponse.json();
    currentWeatherDOM(searchData);
  } catch(error) {
    alert('We could not find the city you searched for.');
    console.log(error);
  }
}

async function getSearchForecast(e) {
  e.preventDefault();
  const searchValue = document.getElementById('location-search').value;
  const searchLocation = adjustCityString(searchValue);
  try {
    const forecastDays = '&days=3';
    const searchCurrentWeatherURL = forecastURL + searchLocation + forecastDays;
    const searchResponse = await fetch(searchCurrentWeatherURL, {mode: 'cors'});
    const searchData = await searchResponse.json();
    forecastWeatherDOM(searchData);
  } catch(error) {
    console.log(error);
  }
}

async function findUserCityWithIp() {
  try {
    const locationResponse = await fetch(ipURL, {mode: 'cors'});
    const locationData = await locationResponse.json();
    return adjustCityString(locationData.city);
  } catch(error) {
    console.log(error);
  }
}

async function getCurrentWeatherFromIp() {
  try {
    const userCity = await findUserCityWithIp();
    const usersCurrentWeatherURL = currentURL + userCity;
    const currentResponse = await fetch(usersCurrentWeatherURL, {mode: 'cors'});
    const weatherData = await currentResponse.json();
    currentWeatherDOM(weatherData);
  } catch(error) {
    console.log(error);
  }
}

async function getForecastFromIp() {
  try {
    const forecastDays = '&days=3';
    const userCity = await findUserCityWithIp();
    const usersForecastWeatherURL = forecastURL + userCity + forecastDays;
    const forecastResponse = await fetch(usersForecastWeatherURL, {mode: 'cors'});
    const forecastData = await forecastResponse.json();
    forecastWeatherDOM(forecastData);
  } catch(error) {
    console.log(error);
  }
}
