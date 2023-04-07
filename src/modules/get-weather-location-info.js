export { getCurrentWeatherFromIp };
import { currentWeatherDOM } from "./current-weather-dom";

const weatherKey = '498b1218daf647469f2182425230304';
const currentURL = `https://api.weatherapi.com/v1/current.json?key=${weatherKey}&q=`;
const ipURL = `https://api.weatherapi.com/v1/ip.json?key=${weatherKey}&q=auto:ip`;

const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', getSearchCurrentWeather);

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
    console.log(searchData);
    currentWeatherDOM(searchData);
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
    console.log(weatherData)
    currentWeatherDOM(weatherData);
  } catch(error) {
    console.log(error);
  }
}
