/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/current-weather-dom.js":
/*!********************************************!*\
  !*** ./src/modules/current-weather-dom.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "currentWeatherDOM": () => (/* binding */ currentWeatherDOM)
/* harmony export */ });


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

/***/ }),

/***/ "./src/modules/forecast-weather-dom.js":
/*!*********************************************!*\
  !*** ./src/modules/forecast-weather-dom.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "forecastWeatherDOM": () => (/* binding */ forecastWeatherDOM)
/* harmony export */ });


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

/***/ }),

/***/ "./src/modules/get-weather-location-info.js":
/*!**************************************************!*\
  !*** ./src/modules/get-weather-location-info.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCurrentWeatherFromIp": () => (/* binding */ getCurrentWeatherFromIp),
/* harmony export */   "getForecastFromIp": () => (/* binding */ getForecastFromIp)
/* harmony export */ });
/* harmony import */ var _current_weather_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current-weather-dom */ "./src/modules/current-weather-dom.js");
/* harmony import */ var _forecast_weather_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forecast-weather-dom */ "./src/modules/forecast-weather-dom.js");




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
    (0,_current_weather_dom__WEBPACK_IMPORTED_MODULE_0__.currentWeatherDOM)(searchData);
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
    (0,_forecast_weather_dom__WEBPACK_IMPORTED_MODULE_1__.forecastWeatherDOM)(searchData);
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
    (0,_current_weather_dom__WEBPACK_IMPORTED_MODULE_0__.currentWeatherDOM)(weatherData);
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
    (0,_forecast_weather_dom__WEBPACK_IMPORTED_MODULE_1__.forecastWeatherDOM)(forecastData);
  } catch(error) {
    console.log(error);
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_get_weather_location_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/get-weather-location-info */ "./src/modules/get-weather-location-info.js");



(0,_modules_get_weather_location_info__WEBPACK_IMPORTED_MODULE_0__.getCurrentWeatherFromIp)();
(0,_modules_get_weather_location_info__WEBPACK_IMPORTED_MODULE_0__.getForecastFromIp)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE0Qjs7QUFFNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE4QixxQkFBcUIsSUFBSSx1QkFBdUI7QUFDOUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLHNCQUFzQjtBQUNoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0IsOEJBQThCO0FBQzdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQyx5QkFBeUIsTUFBTSx3QkFBd0I7QUFDdkY7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsQzZCOztBQUU3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEIsY0FBYztBQUN4QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyx1QkFBdUI7QUFDdkQsOEJBQThCLHVCQUF1QjtBQUNyRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0IsNEJBQTRCO0FBQzNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0QyxrQ0FBa0M7QUFDOUU7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ3NEO0FBQ0k7QUFDRTs7QUFFNUQ7QUFDQSxxRUFBcUUsV0FBVztBQUNoRix1RUFBdUUsV0FBVztBQUNsRiwyREFBMkQsV0FBVzs7QUFFdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUUsYUFBYTtBQUM5RTtBQUNBLElBQUksdUVBQWlCO0FBQ3JCLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSxhQUFhO0FBQzlFO0FBQ0EsSUFBSSx5RUFBa0I7QUFDdEIsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaURBQWlELGFBQWE7QUFDOUQ7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUUsYUFBYTtBQUM5RTtBQUNBLElBQUksdUVBQWlCO0FBQ3JCLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRSxhQUFhO0FBQ2hGO0FBQ0EsSUFBSSx5RUFBa0I7QUFDdEIsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7Ozs7OztVQ2hGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmlHOzs7QUFHakcsMkZBQXVCO0FBQ3ZCLHFGQUFpQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9jdXJyZW50LXdlYXRoZXItZG9tLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvZm9yZWNhc3Qtd2VhdGhlci1kb20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9nZXQtd2VhdGhlci1sb2NhdGlvbi1pbmZvLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgY3VycmVudFdlYXRoZXJET00gfVxuXG5jb25zdCBjdXJyZW50Q29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LWNvbnRlbnQnKTtcblxuZnVuY3Rpb24gY3VycmVudFdlYXRoZXJET00oY3VycmVudFdlYXRoZXIpIHtcbiAgY3VycmVudENvbnRlbnQuaW5uZXJUZXh0ID0gJyc7XG4gIHNob3dDdXJyZW50TG9jYXRpb24oY3VycmVudFdlYXRoZXIubG9jYXRpb24pO1xuICBzaG93VGVtcGVyYXR1cmUoY3VycmVudFdlYXRoZXIuY3VycmVudCk7XG4gIHNob3dDb25kaXRpb25zKGN1cnJlbnRXZWF0aGVyLmN1cnJlbnQpO1xuICBzaG93V2luZChjdXJyZW50V2VhdGhlci5jdXJyZW50KTtcbn1cblxuZnVuY3Rpb24gc2hvd0N1cnJlbnRMb2NhdGlvbihjdXJyZW50TG9jYXRpb24pIHtcbiAgY29uc3QgbG9jYXRpb25QYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgbG9jYXRpb25QYXJhLmlubmVyVGV4dCA9IGAke2N1cnJlbnRMb2NhdGlvbi5uYW1lfSwgJHtjdXJyZW50TG9jYXRpb24ucmVnaW9ufWA7XG4gIGN1cnJlbnRDb250ZW50LmFwcGVuZChsb2NhdGlvblBhcmEpO1xufVxuXG5mdW5jdGlvbiBzaG93VGVtcGVyYXR1cmUoY3VycmVudFdlYXRoZXIpIHtcbiAgY29uc3QgdGVtcFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHRlbXBQYXJhLmlubmVyVGV4dCA9IGAke2N1cnJlbnRXZWF0aGVyLnRlbXBfZn3CsEZgO1xuICBjdXJyZW50Q29udGVudC5hcHBlbmQodGVtcFBhcmEpO1xufVxuXG5mdW5jdGlvbiBzaG93Q29uZGl0aW9ucyhjdXJyZW50V2VhdGhlcikge1xuICBjb25zdCBjb25kaXRpb25QYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25kaXRpb25QYXJhLmlubmVyVGV4dCA9IGAke2N1cnJlbnRXZWF0aGVyLmNvbmRpdGlvbi50ZXh0fWA7XG4gIGN1cnJlbnRDb250ZW50LmFwcGVuZChjb25kaXRpb25QYXJhKTtcbn1cblxuZnVuY3Rpb24gc2hvd1dpbmQoY3VycmVudFdlYXRoZXIpIHtcbiAgY29uc3Qgd2luZFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHdpbmRQYXJhLmlubmVyVGV4dCA9IGBXaW5kOiAke2N1cnJlbnRXZWF0aGVyLndpbmRfbXBofSBtcGggJHtjdXJyZW50V2VhdGhlci53aW5kX2Rpcn1gO1xuICBjdXJyZW50Q29udGVudC5hcHBlbmQod2luZFBhcmEpO1xufSIsImV4cG9ydCB7IGZvcmVjYXN0V2VhdGhlckRPTSB9XG5cbmNvbnN0IGZvcmVjYXN0RGF5c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JlY2FzdC1kYXlzLWNvbnRhaW5lcicpO1xuXG5mdW5jdGlvbiBmb3JlY2FzdFdlYXRoZXJET00oZm9yZWNhc3RXZWF0aGVyKSB7XG4gIGZvcmVjYXN0RGF5c0NvbnRhaW5lci5pbm5lclRleHQgPSAnJztcbiAgXG4gIE9iamVjdC5lbnRyaWVzKGZvcmVjYXN0V2VhdGhlci5mb3JlY2FzdC5mb3JlY2FzdGRheSkuZm9yRWFjaChmb3JlY2FzdCA9PiB7XG4gICAgY29uc3QgZm9yZWNhc3REYXlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JlY2FzdERheURpdi5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdC1kYXktY29udGVudCcpO1xuICAgIHNob3dEYXRlKGZvcmVjYXN0WzFdLCBmb3JlY2FzdERheURpdik7XG4gICAgc2hvd1RlbXBzKGZvcmVjYXN0WzFdLCBmb3JlY2FzdERheURpdik7XG4gICAgc2hvd0NvbmRpdGlvbnMoZm9yZWNhc3RbMV0sIGZvcmVjYXN0RGF5RGl2KTtcbiAgICBzaG93Q2hhbmNlUmFpbihmb3JlY2FzdFsxXSwgZm9yZWNhc3REYXlEaXYpO1xuICAgIGZvcmVjYXN0RGF5c0NvbnRhaW5lci5hcHBlbmQoZm9yZWNhc3REYXlEaXYpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2hvd0RhdGUoZm9yZWNhc3QsIGRheUNvbnRhaW5lcikge1xuICBjb25zdCBkYXRlUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gIGRhdGVQYXJhLmlubmVyVGV4dCA9IGAke2ZvcmVjYXN0LmRhdGV9YDtcbiAgZGF5Q29udGFpbmVyLmFwcGVuZChkYXRlUGFyYSk7XG59XG5cbmZ1bmN0aW9uIHNob3dUZW1wcyhmb3JlY2FzdCwgZGF5Q29udGFpbmVyKSB7XG4gIGNvbnN0IGhpZ2hQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBsb3dQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBoaWdoUGFyYS5pbm5lclRleHQgPSBgSGlnaDogJHtmb3JlY2FzdC5kYXkubWF4dGVtcF9mfWA7XG4gIGxvd1BhcmEuaW5uZXJUZXh0ID0gYExvdzogJHtmb3JlY2FzdC5kYXkubWludGVtcF9mfWA7XG4gIGRheUNvbnRhaW5lci5hcHBlbmQoaGlnaFBhcmEsIGxvd1BhcmEpO1xufVxuXG5mdW5jdGlvbiBzaG93Q29uZGl0aW9ucyhmb3JlY2FzdCwgZGF5Q29udGFpbmVyKSB7XG4gIGNvbnN0IGNvbmRpdGlvblBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbmRpdGlvblBhcmEuaW5uZXJUZXh0ID0gYCR7Zm9yZWNhc3QuZGF5LmNvbmRpdGlvbi50ZXh0fWA7XG4gIGRheUNvbnRhaW5lci5hcHBlbmQoY29uZGl0aW9uUGFyYSk7XG59XG5cbmZ1bmN0aW9uIHNob3dDaGFuY2VSYWluKGZvcmVjYXN0LCBkYXlDb250YWluZXIpIHtcbiAgY29uc3QgcHJlY2lwUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcHJlY2lwUGFyYS5pbm5lclRleHQgPSBgQ2hhbmNlIG9mIHJhaW46ICR7Zm9yZWNhc3QuZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWlufSVgO1xuICBkYXlDb250YWluZXIuYXBwZW5kKHByZWNpcFBhcmEpO1xufSIsImV4cG9ydCB7IGdldEN1cnJlbnRXZWF0aGVyRnJvbUlwLCBnZXRGb3JlY2FzdEZyb21JcCB9O1xuaW1wb3J0IHsgY3VycmVudFdlYXRoZXJET00gfSBmcm9tIFwiLi9jdXJyZW50LXdlYXRoZXItZG9tXCI7XG5pbXBvcnQgeyBmb3JlY2FzdFdlYXRoZXJET00gfSBmcm9tIFwiLi9mb3JlY2FzdC13ZWF0aGVyLWRvbVwiO1xuXG5jb25zdCB3ZWF0aGVyS2V5ID0gJzQ5OGIxMjE4ZGFmNjQ3NDY5ZjIxODI0MjUyMzAzMDQnO1xuY29uc3QgY3VycmVudFVSTCA9IGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PSR7d2VhdGhlcktleX0mcT1gO1xuY29uc3QgZm9yZWNhc3RVUkwgPSBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHt3ZWF0aGVyS2V5fSZxPWA7XG5jb25zdCBpcFVSTCA9IGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9pcC5qc29uP2tleT0ke3dlYXRoZXJLZXl9JnE9YXV0bzppcGA7XG5cbmNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtYnV0dG9uJyk7XG5zZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnZXRTZWFyY2hDdXJyZW50V2VhdGhlcik7XG5zZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnZXRTZWFyY2hGb3JlY2FzdCk7XG5cbmZ1bmN0aW9uIGFkanVzdENpdHlTdHJpbmcoY2l0eSkge1xuICByZXR1cm4gY2l0eS50b0xvd2VyQ2FzZSgpLnJlcGxhY2VBbGwoJyAnLCAnXycpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRTZWFyY2hDdXJyZW50V2VhdGhlcihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3Qgc2VhcmNoVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb24tc2VhcmNoJykudmFsdWU7XG4gIGNvbnN0IHNlYXJjaExvY2F0aW9uID0gYWRqdXN0Q2l0eVN0cmluZyhzZWFyY2hWYWx1ZSk7XG4gIHRyeSB7XG4gICAgY29uc3Qgc2VhcmNoQ3VycmVudFdlYXRoZXJVUkwgPSBjdXJyZW50VVJMICsgc2VhcmNoTG9jYXRpb247XG4gICAgY29uc3Qgc2VhcmNoUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChzZWFyY2hDdXJyZW50V2VhdGhlclVSTCwge21vZGU6ICdjb3JzJ30pO1xuICAgIGNvbnN0IHNlYXJjaERhdGEgPSBhd2FpdCBzZWFyY2hSZXNwb25zZS5qc29uKCk7XG4gICAgY3VycmVudFdlYXRoZXJET00oc2VhcmNoRGF0YSk7XG4gIH0gY2F0Y2goZXJyb3IpIHtcbiAgICBhbGVydCgnV2UgY291bGQgbm90IGZpbmQgdGhlIGNpdHkgeW91IHNlYXJjaGVkIGZvci4nKTtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0U2VhcmNoRm9yZWNhc3QoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHNlYXJjaFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0aW9uLXNlYXJjaCcpLnZhbHVlO1xuICBjb25zdCBzZWFyY2hMb2NhdGlvbiA9IGFkanVzdENpdHlTdHJpbmcoc2VhcmNoVmFsdWUpO1xuICB0cnkge1xuICAgIGNvbnN0IGZvcmVjYXN0RGF5cyA9ICcmZGF5cz0zJztcbiAgICBjb25zdCBzZWFyY2hDdXJyZW50V2VhdGhlclVSTCA9IGZvcmVjYXN0VVJMICsgc2VhcmNoTG9jYXRpb24gKyBmb3JlY2FzdERheXM7XG4gICAgY29uc3Qgc2VhcmNoUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChzZWFyY2hDdXJyZW50V2VhdGhlclVSTCwge21vZGU6ICdjb3JzJ30pO1xuICAgIGNvbnN0IHNlYXJjaERhdGEgPSBhd2FpdCBzZWFyY2hSZXNwb25zZS5qc29uKCk7XG4gICAgZm9yZWNhc3RXZWF0aGVyRE9NKHNlYXJjaERhdGEpO1xuICB9IGNhdGNoKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGZpbmRVc2VyQ2l0eVdpdGhJcCgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBsb2NhdGlvblJlc3BvbnNlID0gYXdhaXQgZmV0Y2goaXBVUkwsIHttb2RlOiAnY29ycyd9KTtcbiAgICBjb25zdCBsb2NhdGlvbkRhdGEgPSBhd2FpdCBsb2NhdGlvblJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gYWRqdXN0Q2l0eVN0cmluZyhsb2NhdGlvbkRhdGEuY2l0eSk7XG4gIH0gY2F0Y2goZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q3VycmVudFdlYXRoZXJGcm9tSXAoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgdXNlckNpdHkgPSBhd2FpdCBmaW5kVXNlckNpdHlXaXRoSXAoKTtcbiAgICBjb25zdCB1c2Vyc0N1cnJlbnRXZWF0aGVyVVJMID0gY3VycmVudFVSTCArIHVzZXJDaXR5O1xuICAgIGNvbnN0IGN1cnJlbnRSZXNwb25zZSA9IGF3YWl0IGZldGNoKHVzZXJzQ3VycmVudFdlYXRoZXJVUkwsIHttb2RlOiAnY29ycyd9KTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGN1cnJlbnRSZXNwb25zZS5qc29uKCk7XG4gICAgY3VycmVudFdlYXRoZXJET00od2VhdGhlckRhdGEpO1xuICB9IGNhdGNoKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEZvcmVjYXN0RnJvbUlwKCkge1xuICB0cnkge1xuICAgIGNvbnN0IGZvcmVjYXN0RGF5cyA9ICcmZGF5cz0zJztcbiAgICBjb25zdCB1c2VyQ2l0eSA9IGF3YWl0IGZpbmRVc2VyQ2l0eVdpdGhJcCgpO1xuICAgIGNvbnN0IHVzZXJzRm9yZWNhc3RXZWF0aGVyVVJMID0gZm9yZWNhc3RVUkwgKyB1c2VyQ2l0eSArIGZvcmVjYXN0RGF5cztcbiAgICBjb25zdCBmb3JlY2FzdFJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXNlcnNGb3JlY2FzdFdlYXRoZXJVUkwsIHttb2RlOiAnY29ycyd9KTtcbiAgICBjb25zdCBmb3JlY2FzdERhdGEgPSBhd2FpdCBmb3JlY2FzdFJlc3BvbnNlLmpzb24oKTtcbiAgICBmb3JlY2FzdFdlYXRoZXJET00oZm9yZWNhc3REYXRhKTtcbiAgfSBjYXRjaChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBnZXRDdXJyZW50V2VhdGhlckZyb21JcCwgZ2V0Rm9yZWNhc3RGcm9tSXAgfSBmcm9tIFwiLi9tb2R1bGVzL2dldC13ZWF0aGVyLWxvY2F0aW9uLWluZm9cIjtcblxuXG5nZXRDdXJyZW50V2VhdGhlckZyb21JcCgpO1xuZ2V0Rm9yZWNhc3RGcm9tSXAoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=