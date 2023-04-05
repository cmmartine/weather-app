/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/get-weather-location-info.js":
/*!**************************************************!*\
  !*** ./src/modules/get-weather-location-info.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCurrentWeather": () => (/* binding */ getCurrentWeather)
/* harmony export */ });


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


(0,_modules_get_weather_location_info__WEBPACK_IMPORTED_MODULE_0__.getCurrentWeather)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE2Qjs7QUFFN0I7QUFDQSxxRUFBcUUsV0FBVztBQUNoRiwyREFBMkQsV0FBVzs7QUFFdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpREFBaUQsYUFBYTtBQUM5RDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSxhQUFhO0FBQzlFO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7Ozs7Ozs7VUMvQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ053RTs7QUFFeEUscUZBQWlCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2dldC13ZWF0aGVyLWxvY2F0aW9uLWluZm8uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBnZXRDdXJyZW50V2VhdGhlciB9O1xuXG5jb25zdCB3ZWF0aGVyS2V5ID0gJzQ5OGIxMjE4ZGFmNjQ3NDY5ZjIxODI0MjUyMzAzMDQnO1xuY29uc3QgY3VycmVudFVSTCA9IGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PSR7d2VhdGhlcktleX0mcT1gO1xuY29uc3QgaXBVUkwgPSBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvaXAuanNvbj9rZXk9JHt3ZWF0aGVyS2V5fSZxPWF1dG86aXBgO1xuXG5mdW5jdGlvbiBhZGp1c3RDaXR5U3RyaW5nKGNpdHkpIHtcbiAgcmV0dXJuIGNpdHkudG9Mb3dlckNhc2UoKS5yZXBsYWNlQWxsKCcgJywgJ18nKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZmluZFVzZXJDaXR5KCkge1xuICB0cnkge1xuICAgIGNvbnN0IGxvY2F0aW9uUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChpcFVSTCwge21vZGU6ICdjb3JzJ30pO1xuICAgIGNvbnN0IGxvY2F0aW9uRGF0YSA9IGF3YWl0IGxvY2F0aW9uUmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBhZGp1c3RDaXR5U3RyaW5nKGxvY2F0aW9uRGF0YS5jaXR5KTtcbiAgfSBjYXRjaChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRDdXJyZW50V2VhdGhlcigpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB1c2VyQ2l0eSA9IGF3YWl0IGZpbmRVc2VyQ2l0eSgpO1xuICAgIGNvbnN0IHVzZXJzQ3VycmVudFdlYXRoZXJVUkwgPSBjdXJyZW50VVJMICsgdXNlckNpdHk7XG4gICAgY29uc3QgY3VycmVudFJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXNlcnNDdXJyZW50V2VhdGhlclVSTCwge21vZGU6ICdjb3JzJ30pO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgY3VycmVudFJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YS5jdXJyZW50KVxuICAgIHJldHVybiB3ZWF0aGVyRGF0YS5jdXJyZW50XG4gIH0gY2F0Y2goZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZ2V0Q3VycmVudFdlYXRoZXIgfSBmcm9tIFwiLi9tb2R1bGVzL2dldC13ZWF0aGVyLWxvY2F0aW9uLWluZm9cIjtcblxuZ2V0Q3VycmVudFdlYXRoZXIoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=