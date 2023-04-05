export { getCurrentWeather };

const weatherKey = '498b1218daf647469f2182425230304';
const currentURL = `https://api.weatherapi.com/v1/current.json?key=${weatherKey}&q=`;
const ipURL = `https://api.weatherapi.com/v1/ip.json?key=${weatherKey}&q=auto:ip`;

function adjustCityString(city) {
  return city.toLowerCase().replaceAll(' ', '_');
}

async function findUserCity() {
  try {
    const locationResponse = await fetch(ipURL, {mode: 'cors'});
    const locationData = await locationResponse.json();
    return adjustCityString(locationData.city);
  } catch(error) {
    console.log(error);
  }
}

async function getCurrentWeather() {
  try {
    const userCity = await findUserCity();
    const usersCurrentWeatherURL = currentURL + userCity;
    const currentResponse = await fetch(usersCurrentWeatherURL, {mode: 'cors'});
    const weatherData = await currentResponse.json();
    console.log(weatherData.current)
    return weatherData.current
  } catch(error) {
    console.log(error);
  }
}
