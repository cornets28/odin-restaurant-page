/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/*! exports provided: paragraph, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"paragraph\", function() { return paragraph; });\nconst paragraph = document.createElement('p');\nparagraph.classList.add('tab__display', 'tab__display--about');\nparagraph.textContent = `La Maison Restaurant International Experience Haitian-inspired dishes with an international flair at La Maison, our famous Port-au-Prince restaurant. La Maison is open daily for breakfast, lunch and dinner.Open for breakfast, lunch and dinner. Dress code: Smart Casual.\n                         La Maison Restaurant International Experience Haitian-inspired dishes with an international flair at La Maison, our famous Port-au-Prince restaurant. La Maison is open daily for breakfast, lunch and dinner.Open for breakfast, lunch and dinner. Dress code: Smart Casual.\n                         La Maison Restaurant International Experience Haitian-inspired dishes with an international flair at La Maison, our famous Port-au-Prince restaurant. La Maison is open daily for breakfast, lunch and dinner.Open for breakfast, lunch and dinner. Dress code: Smart Casual.`;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({ paragraph });\n\n\n//# sourceURL=webpack:///./src/about.js?");

/***/ }),

/***/ "./src/base.js":
/*!*********************!*\
  !*** ./src/base.js ***!
  \*********************/
/*! exports provided: elements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"elements\", function() { return elements; });\nconst elements = {\n  content: document.querySelector('.content'),\n  header: document.createElement('header'),\n  headerLogo: document.createElement('div'),\n  img: document.createElement('img'),\n  main: document.createElement('main'),\n  about: document.createElement('div'),\n  menu: document.createElement('div'),\n  contact: document.createElement('div'),\n  footer: document.createElement('footer'),\n  footerSpan: document.createElement('span'),\n};\n\nconst base = (() => {\n  // HEADER\n  elements.header.classList.add('header');\n  elements.headerLogo.classList.add('header__logo');\n  elements.img.src = 'dist/images/logo.png';\n  elements.headerLogo.appendChild(elements.img);\n  elements.header.appendChild(elements.headerLogo);\n  elements.content.appendChild(elements.header);\n\n  // / MAIN\n  elements.main.classList.add('main');\n  elements.about.classList.add('tab', 'tab__about');\n  elements.about.textContent = 'about';\n  elements.menu.classList.add('tab', 'tab__menu');\n  elements.menu.textContent = 'menu';\n  elements.contact.classList.add('tab', 'tab__contact');\n  elements.contact.textContent = 'contact';\n  elements.main.appendChild(elements.about);\n  elements.main.appendChild(elements.menu);\n  elements.main.appendChild(elements.contact);\n  elements.content.appendChild(elements.main);\n\n  // / FOOTER\n  elements.footer.classList.add('footer');\n  elements.footerSpan.textContent = ' Restaurant Lakay ';\n  elements.footer.appendChild(elements.footerSpan);\n  elements.content.appendChild(elements.footer);\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/base.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/*! exports provided: contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contact\", function() { return contact; });\nconst contact = document.createElement('p');\ncontact.classList.add('tab__display', 'tab__display--about');\ncontact.textContent = 'Vontact us via email on gddgd@gmail.com of by phone on : 484646464';\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/base.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\n\nconst tabs = ['about', 'menu', 'contact'];\n_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].main.appendChild(_about__WEBPACK_IMPORTED_MODULE_1__[\"paragraph\"]);\n\n\nconst activeState = (tab) => {\n  for (const key of tabs) {\n    _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"][key].classList.remove('activeState');\n  }\n  _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"][tab].classList.add('activeState');\n};\n\nconst loadAbout = () => {\n  _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].main.removeChild(_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].main.lastChild);\n  _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].main.appendChild(_about__WEBPACK_IMPORTED_MODULE_1__[\"paragraph\"]);\n  activeState('about');\n};\n\nconst loadMenu = () => {\n  _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].main.removeChild(_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].main.lastChild);\n  _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].main.appendChild(_menu__WEBPACK_IMPORTED_MODULE_2__[\"gallary\"]);\n  activeState('menu');\n};\n\nconst loadContact = () => {\n  _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].main.removeChild(_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].main.lastChild);\n  _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].main.appendChild(_contact__WEBPACK_IMPORTED_MODULE_3__[\"contact\"]);\n  activeState('contact');\n};\n\nloadAbout();\n\n_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].about.addEventListener('click', loadAbout);\n_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].menu.addEventListener('click', loadMenu);\n_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].contact.addEventListener('click', loadContact);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: gallary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gallary\", function() { return gallary; });\nconst food = {\n  itemOne: document.createElement('img'),\n  itemTwo: document.createElement('img'),\n  itemThree: document.createElement('img'),\n};\n\nfood.itemOne.src = 'dist/images/food5.jpg';\nfood.itemTwo.src = 'dist/images/food2.jpg';\nfood.itemThree.src = 'dist/images/food4.jpg';\n\nfood.itemOne.classList.add('meal-1', 'the-food');\nfood.itemTwo.classList.add('meal-2', 'the-food');\nfood.itemThree.classList.add('meal-3', 'the-food');\n\nconst gallary = document.createElement('div');\ngallary.classList.add('tab__display', 'tab__display--menu');\n\ngallary.appendChild(food.itemOne);\ngallary.appendChild(food.itemTwo);\ngallary.appendChild(food.itemThree);\n\n\n\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ })

/******/ });