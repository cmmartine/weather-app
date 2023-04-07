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
  const locationPara = document.createElement('p');
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

/***/ "./src/modules/get-weather-location-info.js":
/*!**************************************************!*\
  !*** ./src/modules/get-weather-location-info.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCurrentWeatherFromIp": () => (/* binding */ getCurrentWeatherFromIp)
/* harmony export */ });
/* harmony import */ var _current_weather_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current-weather-dom */ "./src/modules/current-weather-dom.js");



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
    (0,_current_weather_dom__WEBPACK_IMPORTED_MODULE_0__.currentWeatherDOM)(searchData);
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
    ;(0,_current_weather_dom__WEBPACK_IMPORTED_MODULE_0__.currentWeatherDOM)(weatherData);
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE0Qjs7QUFFNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE4QixxQkFBcUIsSUFBSSx1QkFBdUI7QUFDOUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLHNCQUFzQjtBQUNoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0IsOEJBQThCO0FBQzdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQyx5QkFBeUIsTUFBTSx3QkFBd0I7QUFDdkY7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbENtQztBQUN1Qjs7QUFFMUQ7QUFDQSxxRUFBcUUsV0FBVztBQUNoRiwyREFBMkQsV0FBVzs7QUFFdEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFLGFBQWE7QUFDOUU7QUFDQTtBQUNBLElBQUksdUVBQWlCO0FBQ3JCLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlEQUFpRCxhQUFhO0FBQzlEO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFLGFBQWE7QUFDOUU7QUFDQTtBQUNBLElBQUksd0VBQWlCO0FBQ3JCLElBQUk7QUFDSjtBQUNBO0FBQ0E7Ozs7Ozs7VUNsREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ044RTs7QUFFOUUsMkZBQXVCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2N1cnJlbnQtd2VhdGhlci1kb20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9nZXQtd2VhdGhlci1sb2NhdGlvbi1pbmZvLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgY3VycmVudFdlYXRoZXJET00gfVxuXG5jb25zdCBjdXJyZW50Q29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LWNvbnRlbnQnKTtcblxuZnVuY3Rpb24gY3VycmVudFdlYXRoZXJET00oY3VycmVudFdlYXRoZXIpIHtcbiAgY3VycmVudENvbnRlbnQuaW5uZXJUZXh0ID0gJyc7XG4gIHNob3dDdXJyZW50TG9jYXRpb24oY3VycmVudFdlYXRoZXIubG9jYXRpb24pO1xuICBzaG93VGVtcGVyYXR1cmUoY3VycmVudFdlYXRoZXIuY3VycmVudCk7XG4gIHNob3dDb25kaXRpb25zKGN1cnJlbnRXZWF0aGVyLmN1cnJlbnQpO1xuICBzaG93V2luZChjdXJyZW50V2VhdGhlci5jdXJyZW50KTtcbn1cblxuZnVuY3Rpb24gc2hvd0N1cnJlbnRMb2NhdGlvbihjdXJyZW50TG9jYXRpb24pIHtcbiAgY29uc3QgbG9jYXRpb25QYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBsb2NhdGlvblBhcmEuaW5uZXJUZXh0ID0gYCR7Y3VycmVudExvY2F0aW9uLm5hbWV9LCAke2N1cnJlbnRMb2NhdGlvbi5yZWdpb259YDtcbiAgY3VycmVudENvbnRlbnQuYXBwZW5kKGxvY2F0aW9uUGFyYSk7XG59XG5cbmZ1bmN0aW9uIHNob3dUZW1wZXJhdHVyZShjdXJyZW50V2VhdGhlcikge1xuICBjb25zdCB0ZW1wUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgdGVtcFBhcmEuaW5uZXJUZXh0ID0gYCR7Y3VycmVudFdlYXRoZXIudGVtcF9mfcKwRmA7XG4gIGN1cnJlbnRDb250ZW50LmFwcGVuZCh0ZW1wUGFyYSk7XG59XG5cbmZ1bmN0aW9uIHNob3dDb25kaXRpb25zKGN1cnJlbnRXZWF0aGVyKSB7XG4gIGNvbnN0IGNvbmRpdGlvblBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbmRpdGlvblBhcmEuaW5uZXJUZXh0ID0gYCR7Y3VycmVudFdlYXRoZXIuY29uZGl0aW9uLnRleHR9YDtcbiAgY3VycmVudENvbnRlbnQuYXBwZW5kKGNvbmRpdGlvblBhcmEpO1xufVxuXG5mdW5jdGlvbiBzaG93V2luZChjdXJyZW50V2VhdGhlcikge1xuICBjb25zdCB3aW5kUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgd2luZFBhcmEuaW5uZXJUZXh0ID0gYFdpbmQ6ICR7Y3VycmVudFdlYXRoZXIud2luZF9tcGh9IG1waCAke2N1cnJlbnRXZWF0aGVyLndpbmRfZGlyfWA7XG4gIGN1cnJlbnRDb250ZW50LmFwcGVuZCh3aW5kUGFyYSk7XG59IiwiZXhwb3J0IHsgZ2V0Q3VycmVudFdlYXRoZXJGcm9tSXAgfTtcbmltcG9ydCB7IGN1cnJlbnRXZWF0aGVyRE9NIH0gZnJvbSBcIi4vY3VycmVudC13ZWF0aGVyLWRvbVwiO1xuXG5jb25zdCB3ZWF0aGVyS2V5ID0gJzQ5OGIxMjE4ZGFmNjQ3NDY5ZjIxODI0MjUyMzAzMDQnO1xuY29uc3QgY3VycmVudFVSTCA9IGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PSR7d2VhdGhlcktleX0mcT1gO1xuY29uc3QgaXBVUkwgPSBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvaXAuanNvbj9rZXk9JHt3ZWF0aGVyS2V5fSZxPWF1dG86aXBgO1xuXG5jb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWJ1dHRvbicpO1xuc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2V0U2VhcmNoQ3VycmVudFdlYXRoZXIpO1xuXG5mdW5jdGlvbiBhZGp1c3RDaXR5U3RyaW5nKGNpdHkpIHtcbiAgcmV0dXJuIGNpdHkudG9Mb3dlckNhc2UoKS5yZXBsYWNlQWxsKCcgJywgJ18nKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0U2VhcmNoQ3VycmVudFdlYXRoZXIoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHNlYXJjaFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0aW9uLXNlYXJjaCcpLnZhbHVlO1xuICBjb25zdCBzZWFyY2hMb2NhdGlvbiA9IGFkanVzdENpdHlTdHJpbmcoc2VhcmNoVmFsdWUpO1xuICB0cnkge1xuICAgIGNvbnN0IHNlYXJjaEN1cnJlbnRXZWF0aGVyVVJMID0gY3VycmVudFVSTCArIHNlYXJjaExvY2F0aW9uO1xuICAgIGNvbnN0IHNlYXJjaFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goc2VhcmNoQ3VycmVudFdlYXRoZXJVUkwsIHttb2RlOiAnY29ycyd9KTtcbiAgICBjb25zdCBzZWFyY2hEYXRhID0gYXdhaXQgc2VhcmNoUmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKHNlYXJjaERhdGEpO1xuICAgIGN1cnJlbnRXZWF0aGVyRE9NKHNlYXJjaERhdGEpO1xuICB9IGNhdGNoKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGZpbmRVc2VyQ2l0eVdpdGhJcCgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBsb2NhdGlvblJlc3BvbnNlID0gYXdhaXQgZmV0Y2goaXBVUkwsIHttb2RlOiAnY29ycyd9KTtcbiAgICBjb25zdCBsb2NhdGlvbkRhdGEgPSBhd2FpdCBsb2NhdGlvblJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gYWRqdXN0Q2l0eVN0cmluZyhsb2NhdGlvbkRhdGEuY2l0eSk7XG4gIH0gY2F0Y2goZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q3VycmVudFdlYXRoZXJGcm9tSXAoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgdXNlckNpdHkgPSBhd2FpdCBmaW5kVXNlckNpdHlXaXRoSXAoKTtcbiAgICBjb25zdCB1c2Vyc0N1cnJlbnRXZWF0aGVyVVJMID0gY3VycmVudFVSTCArIHVzZXJDaXR5O1xuICAgIGNvbnN0IGN1cnJlbnRSZXNwb25zZSA9IGF3YWl0IGZldGNoKHVzZXJzQ3VycmVudFdlYXRoZXJVUkwsIHttb2RlOiAnY29ycyd9KTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGN1cnJlbnRSZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpXG4gICAgY3VycmVudFdlYXRoZXJET00od2VhdGhlckRhdGEpO1xuICB9IGNhdGNoKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGdldEN1cnJlbnRXZWF0aGVyRnJvbUlwIH0gZnJvbSBcIi4vbW9kdWxlcy9nZXQtd2VhdGhlci1sb2NhdGlvbi1pbmZvXCI7XG5cbmdldEN1cnJlbnRXZWF0aGVyRnJvbUlwKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9