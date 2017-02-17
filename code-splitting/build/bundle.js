/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

var _train = __webpack_require__(5);

var _train2 = _interopRequireDefault(_train);

var _small = __webpack_require__(4);

var _small2 = _interopRequireDefault(_small);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var image = document.createElement('img');
image.src = _small2.default;
document.body.appendChild(image);

var bigImage = document.createElement('img');
bigImage.src = _train2.default;
document.body.appendChild(bigImage);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(3);

var sum = function sum(a, b) {
  return a + b;
};

// commonJS system in action
// module.exports = sum;

//es2015 export
//Load scss into JS
exports.default = sum;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b3b3d5ac3eb87a6dd1645a3d0ec70510.jpeg";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _sum = __webpack_require__(1);

var _sum2 = _interopRequireDefault(_sum);

__webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import the file - just run it automatically


// Common JS of import/export example, relative file ref
// const sum = require('./sum');

//es2015 import
var total = (0, _sum2.default)(10, 5);

console.log(total);

/***/ })
/******/ ]);