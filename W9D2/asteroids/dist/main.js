/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\")\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\")\n\nUtil.inherits(Asteroid, MovingObject);\n\nfunction Asteroid(options) {\n  MovingObject.call(this, options);\n  this.pos = options.pos;\n  this.vel = Util.randomVec(500);\n  if (options.radius === undefined) {\n    this.radius = 20;\n  } else {\n    this.radius = options.radius;\n  };\n  if (options.color === undefined) {\n    this.color = \"red\";\n  } else {\n    this.color = options.color;\n  };\n};\n\n\nmodule.exports = Asteroid;\n// Other properties are filled in for you.\n// new Asteroid({ pos: [30, 30] });\n\n\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\r\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\r\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\r\n\r\nwindow.MovingObject = MovingObject;\r\nwindow.Asteroid = Asteroid;\r\n\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n  const canvas = document.getElementById(\"game-canvas\");\r\n  const context = canvas.getContext(\"2d\");\r\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("function MovingObject(options) {\r\n    this.pos = options.pos;\r\n    this.vel = options.vel;\r\n    this.radius = options.radius;\r\n    this.color = options.color;\r\n};\r\n\r\nMovingObject.prototype.draw = function () {\r\n    const canvas = document.getElementById(\"game-canvas\");\r\n    const context = canvas.getContext(\"2d\");\r\n    // const context = ctx;\r\n    context.beginPath();\r\n\r\n    context.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\r\n    context.fillStyle = this.color;\r\n    context.fill();\r\n    context.stroke();\r\n}\r\n\r\nmodule.exports = MovingObject;\r\n\r\n// mo.draw(document.getElementById(\"game-canvas\").getContext(\"2d\"));\r\n\r\nconst mo = new MovingObject({\r\n  pos: [30, 30],\r\n  vel: [10, 10],\r\n  radius: 10,\r\n  color: \"pink\"\r\n});\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((module) => {

eval("const Util = {\n  inherits(childClass, parentClass) {\n    function Surrogate() {};\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new Surrogate();\n    childClass.prototype.constructor = childClass\n  },\n  // Return a randomly oriented vector with the given length.\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  },\n};\n\n// new Asteroid({ pos: [30, 30] });\n\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;