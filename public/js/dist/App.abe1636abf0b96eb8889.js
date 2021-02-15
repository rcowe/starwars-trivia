/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"App": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors~App"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data/quesdb.js":
/*!************************!*\
  !*** ./data/quesdb.js ***!
  \************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

eval("const questions = [{\n  id: 1,\n  difficulty: 'easy',\n  question: 'Who said this: The Force will be with you. Always.',\n  img: 'null',\n  answer: 'Obi-Wan Kenobi',\n  value: 25\n}, {\n  id: 2,\n  difficulty: 'moderate',\n  question: 'Who said this: I find your lack of faith disturbing.',\n  img: 'null',\n  answer: 'Darth Vader',\n  value: 50\n}, {\n  id: 3,\n  difficulty: 'easy',\n  question: 'Who said this: It’s the ship that made the Kessel run in less than twelve parsecs. I’ve outrun Imperial starships. Not the local bulk cruisers, mind you. I’m talking about the big Corellian ships, now. She’s fast enough for you, old man.',\n  img: 'null',\n  answer: 'Han Solo',\n  value: 25\n}, {\n  id: 4,\n  difficulty: 'easy',\n  question: 'Who said this: Never tell me the odds!',\n  img: 'null',\n  answer: 'Han Solo',\n  value: 25\n}, {\n  id: 5,\n  difficulty: 'easy',\n  question: 'Who said this: Do. Or do not. There is no try.',\n  img: 'null',\n  answer: 'Yoda',\n  value: 25\n}, {\n  id: 6,\n  difficulty: 'easy',\n  question: 'Who said this: No. I am your father.',\n  img: 'null',\n  answer: 'Darth Vader',\n  value: 25\n}, {\n  id: 7,\n  difficulty: 'moderate',\n  question: 'Who said this: When gone am I, the last of the Jedi will you be. The Force runs strong in your family. Pass on what you have learned.',\n  img: 'null',\n  answer: 'Yoda',\n  value: 50\n}, {\n  id: 8,\n  difficulty: 'moderate',\n  question: 'Who said this: I’ll never turn to the dark side. You’ve failed, your highness. I am a Jedi, like my father before me.',\n  img: 'null',\n  answer: 'Luke Skywalker',\n  value: 50\n}, {\n  id: 9,\n  difficulty: 'moderate',\n  question: 'Who said this: Now, young Skywalker, you will die.',\n  img: 'null',\n  answer: 'Emperor Palpatine',\n  value: 50\n}, {\n  id: 10,\n  difficulty: 'moderate',\n  question: 'The Millennium Falcon looks like a worn out junker but it did the Kessel Run in...? ',\n  img: 'https://res.cloudinary.com/di5thiyyl/image/upload/v1613030852/StarWarsMovies/falcon_rrqrx3.png',\n  answer: '12 Parsecs',\n  value: 50\n}, {\n  id: 11,\n  difficulty: 'moderate',\n  question: \"This Queen is known for her politial idealism and advocating for democracy. She is also Luke SkyWalker and Princess Leia's biological mother. What is her name?\",\n  img: 'https://res.cloudinary.com/di5thiyyl/image/upload/v1613030851/StarWarsMovies/padme-amigdalia_ow25uw.png',\n  answer: 'Queen Padme Amidala Naberrie of Naboo',\n  value: 50\n}, {\n  id: 12,\n  difficulty: 'easy',\n  question: 'This actor played an older Princess Leia, she went by what name in the movie series?',\n  img: 'https://res.cloudinary.com/di5thiyyl/image/upload/v1613030851/StarWarsMovies/carrie-fisher_sntjma.png',\n  answer: 'Princess Leia',\n  value: 25\n}, {\n  id: 13,\n  difficulty: 'easy',\n  question: 'In this scene, what does Darth Vader say to Luke?',\n  img: 'https://res.cloudinary.com/di5thiyyl/image/upload/v1613030061/StarWarsMovies/Vader-and-Luke_nodutj.png',\n  answer: 'I am your father, Luke.',\n  value: 25\n}, {\n  id: 14,\n  difficulty: 'easy',\n  question: 'Who is carrying Yoda?',\n  img: 'https://res.cloudinary.com/di5thiyyl/image/upload/v1613030061/StarWarsMovies/Luke-and-Yoda_fxuz0s.png',\n  answer: 'Luke SkyWalker',\n  value: 25\n}, {\n  id: 15,\n  difficulty: 'moderate',\n  question: 'Standing or Rolling, between Rey and Finn is a Droid. What is his name?',\n  img: 'https://res.cloudinary.com/di5thiyyl/image/upload/v1613030060/StarWarsMovies/Rey-and-Finn_cyjrkd.png',\n  answer: 'BB-8',\n  value: 50\n}, {\n  id: 16,\n  difficulty: 'moderate',\n  question: 'Obi Wan Kenobi, gave his life to save who?',\n  img: 'https://res.cloudinary.com/di5thiyyl/image/upload/v1613030060/StarWarsMovies/Obi-Wan_dceycf.png',\n  answer: 'Luke, Leia, Han and Chewie',\n  value: 50\n}, {\n  id: 17,\n  difficulty: 'moderate',\n  question: 'Where was this scene filmed?',\n  img: 'https://res.cloudinary.com/di5thiyyl/image/upload/v1613030060/StarWarsMovies/Rey-and-Luke_r7ivao.png',\n  answer: 'Skellig Michael, Ireland',\n  value: 50\n}, {\n  id: 18,\n  difficulty: 'moderate',\n  question: 'In what movie does Leia kill Jabba the Hut?',\n  img: 'https://res.cloudinary.com/di5thiyyl/image/upload/v1613030058/StarWarsMovies/Leia-Kills-Jabba_iwttby.png',\n  answer: 'Return of the Jedi',\n  value: 50\n}, {\n  id: 19,\n  difficulty: 'easy',\n  question: 'Harrison Ford played this character during the Star Wars saga, what character did he play?',\n  img: 'https://res.cloudinary.com/di5thiyyl/image/upload/v1613030051/StarWarsMovies/han-solo_vdudcb.png',\n  answer: 'Han Solo',\n  value: 25\n}, {\n  id: 20,\n  difficulty: 'moderate',\n  question: 'How many legs do destroyer droids have?',\n  img: 'null',\n  answer: 'Three',\n  value: 50\n}, {\n  id: 21,\n  difficulty: 'hard',\n  question: 'How many planets did Senator Palpatine represent in the Senate?',\n  img: 'mull',\n  answer: 'Thirty-six',\n  value: 75\n}, {\n  id: 22,\n  difficulty: 'hard',\n  question: \"Against whom was Darth Maul's final challenge before becoming a Dark Lord of the Sith?\",\n  img: 'null',\n  answer: 'Darth Sidious',\n  value: 75\n}, {\n  id: 23,\n  difficulty: 'hard',\n  question: 'Who was the oldest member of the Jedi Council at the time of the battle of Naboo?',\n  img: 'null',\n  answer: 'Yoda',\n  value: 75\n}, {\n  id: 24,\n  difficulty: 'hard',\n  question: 'What work did Shimi Skywalker do at home to earn extra income?',\n  img: 'null',\n  answer: 'She cleaned computer memory devices',\n  value: 75\n}, {\n  id: 25,\n  difficulty: 'hard',\n  question: 'How many lightsabers did Anakin use to kill Count Dooku?',\n  img: 'null',\n  answer: 'Two',\n  value: 75\n}, {\n  id: 26,\n  difficulty: 'hard',\n  question: 'Who was Rogue Seven?',\n  img: 'null',\n  answer: 'Kasan Moor',\n  value: 75\n}, {\n  id: 27,\n  difficulty: 'hard',\n  question: 'Which bounty hunter was obsessed with catching and skinning Chewbacca?',\n  img: 'null',\n  answer: 'Dengar',\n  value: 75\n}, {\n  id: 28,\n  difficulty: 'hard',\n  question: \"What was Yoda's species?\",\n  img: 'null',\n  answer: 'Unknown',\n  value: 75\n}, {\n  id: 29,\n  difficulty: 'hard',\n  question: 'What did Anakin tell Chancellor Palpatine about the Jedi Council?',\n  img: 'null',\n  answer: \"That he knew there were things about the force they weren't telling him.\",\n  value: 75\n}, {\n  id: 30,\n  difficulty: 'hard',\n  question: \"Who was Darth Sidious's apprentice?\",\n  img: 'null',\n  answer: 'Darth Vader',\n  value: 75\n}];\n\nconst randomizer = () => {\n  let answers = randomQs[Math.floor(Math.random() * randomQs.length)];\n  console.log(answers);\n  return answers;\n};\n\nmodule.exports = questions;\n\n//# sourceURL=webpack:///./data/quesdb.js?");

/***/ }),

/***/ "./src/components/GameContainer.js":
/*!*****************************************!*\
  !*** ./src/components/GameContainer.js ***!
  \*****************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/prettier-loader/prettier-loader.js):\\nSyntaxError: Unexpected token (26:5)\\n  24 | \\t\\t\\t\\t{question[1].question.img && question[1].question.img.length ?\\n  25 | \\n> 26 | \\t\\t\\t\\t}\\n     | \\t\\t\\t\\t^\\n  27 | \\t\\t\\t</div>\\n  28 | \\t\\t\\t<div className=\\\"score-box\\\">{/*<h2>Score: {score}</h2>*/}</div>\\n  29 | \\t\\t\\t<div className=\\\"answer-btns\\\">\\n    at e (/Users/rosa/projects/proj-starwars/node_modules/prettier/parser-babylon.js:1:344)\\n    at Object.parse (/Users/rosa/projects/proj-starwars/node_modules/prettier/parser-babylon.js:1:262322)\\n    at Object.parse (/Users/rosa/projects/proj-starwars/node_modules/prettier/index.js:9739:19)\\n    at coreFormat (/Users/rosa/projects/proj-starwars/node_modules/prettier/index.js:13252:23)\\n    at format (/Users/rosa/projects/proj-starwars/node_modules/prettier/index.js:13510:73)\\n    at formatWithCursor (/Users/rosa/projects/proj-starwars/node_modules/prettier/index.js:13526:12)\\n    at /Users/rosa/projects/proj-starwars/node_modules/prettier/index.js:44207:15\\n    at Object.format (/Users/rosa/projects/proj-starwars/node_modules/prettier/index.js:44226:12)\\n    at /Users/rosa/projects/proj-starwars/node_modules/prettier-loader/prettier-loader.js:69:33\");\n\n//# sourceURL=webpack:///./src/components/GameContainer.js?");

/***/ }),

/***/ "./src/components/NavBar.js":
/*!**********************************!*\
  !*** ./src/components/NavBar.js ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n\n\n\nconst NavBar = props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", {\n    className: \"NavBar\"\n  }, props.routes.filter(item => !item.path.includes(':')).map((_ref) => {\n    let {\n      key,\n      path\n    } = _ref;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Link */ \"b\"], {\n      key: key,\n      to: path\n    }, key);\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (NavBar);\n\n//# sourceURL=webpack:///./src/components/NavBar.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ \"./src/router/index.js\");\n\n\n // import 'bootstrap/scss/bootstrap.scss';\n\nconst app = document.getElementById('app');\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_router__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], null), app);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/pages/App.js":
/*!**************************!*\
  !*** ./src/pages/App.js ***!
  \**************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_quesdb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! /data/quesdb */ \"./data/quesdb.js\");\n/* harmony import */ var _data_quesdb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data_quesdb__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction App(props) {\n  const [question, setQuestion] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(_data_quesdb__WEBPACK_IMPORTED_MODULE_1___default.a);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Star Wars\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Testing the font\"));\n}\n\n//# sourceURL=webpack:///./src/pages/App.js?");

/***/ }),

/***/ "./src/pages/Contact.js":
/*!******************************!*\
  !*** ./src/pages/Contact.js ***!
  \******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Contact; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Contact(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"This is the \", props.page, \" page.\");\n}\n\n//# sourceURL=webpack:///./src/pages/Contact.js?");

/***/ }),

/***/ "./src/pages/GameLevel1.js":
/*!*********************************!*\
  !*** ./src/pages/GameLevel1.js ***!
  \*********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return GameLevel1; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_quesdb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! /data/quesdb */ \"./data/quesdb.js\");\n/* harmony import */ var _data_quesdb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data_quesdb__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_GameContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/GameContainer */ \"./src/components/GameContainer.js\");\n/* harmony import */ var _components_GameContainer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_GameContainer__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* This Page is for all the easy rated questions */\n\nfunction GameLevel1(props) {\n  const [question, setQuestion] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(_data_quesdb__WEBPACK_IMPORTED_MODULE_1___default.a);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"level1-page\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", {\n    className: \"level1-header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Star Wars Trivia\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Level 1\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"level1-questions-container\"\n  }), Object.keys(question).length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_GameContainer__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    question: question,\n    setQuestion: setQuestion\n  }) : '');\n}\n\n//# sourceURL=webpack:///./src/pages/GameLevel1.js?");

/***/ }),

/***/ "./src/pages/GameLevel2.js":
/*!*********************************!*\
  !*** ./src/pages/GameLevel2.js ***!
  \*********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return GameLevel2; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction GameLevel2(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"This is the \", props.page, \" page.\");\n}\n\n//# sourceURL=webpack:///./src/pages/GameLevel2.js?");

/***/ }),

/***/ "./src/pages/GameLevel3.js":
/*!*********************************!*\
  !*** ./src/pages/GameLevel3.js ***!
  \*********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return GameLevel3; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction GameLevel3(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"This is the \", props.page, \" page.\");\n}\n\n//# sourceURL=webpack:///./src/pages/GameLevel3.js?");

/***/ }),

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Home(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"This is the \", props.page, \" page.\");\n}\n\n//# sourceURL=webpack:///./src/pages/Home.js?");

/***/ }),

/***/ "./src/pages/Login.js":
/*!****************************!*\
  !*** ./src/pages/Login.js ***!
  \****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Login; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Login(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"This is the \", props.page, \" page.\");\n}\n\n//# sourceURL=webpack:///./src/pages/Login.js?");

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/NavBar */ \"./src/components/NavBar.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes */ \"./src/router/routes.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\nconst AppRouter = props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* BrowserRouter */ \"a\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavBar__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], {\n    routes: _routes__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* Link */ \"b\"], {\n    to: \"/test\"\n  }, \" Test Anchor\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Switch */ \"c\"], null, _routes__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"].map((_ref) => {\n    let {\n      Component,\n      key,\n      path\n    } = _ref;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Route */ \"a\"], {\n      key: key,\n      path: path,\n      component: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({\n        page: key\n      }, props))\n    });\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (AppRouter);\n\n//# sourceURL=webpack:///./src/router/index.js?");

/***/ }),

/***/ "./src/router/routes.js":
/*!******************************!*\
  !*** ./src/router/routes.js ***!
  \******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/App */ \"./src/pages/App.js\");\n/* harmony import */ var _pages_Contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/Contact */ \"./src/pages/Contact.js\");\n/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/Home */ \"./src/pages/Home.js\");\n/* harmony import */ var _pages_GameLevel1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/GameLevel1 */ \"./src/pages/GameLevel1.js\");\n/* harmony import */ var _pages_GameLevel2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/GameLevel2 */ \"./src/pages/GameLevel2.js\");\n/* harmony import */ var _pages_GameLevel3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/GameLevel3 */ \"./src/pages/GameLevel3.js\");\n/* harmony import */ var _pages_Login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/Login */ \"./src/pages/Login.js\");\n\n\n\n\n\n\n\n\nconst routes = [{\n  Component: _pages_Home__WEBPACK_IMPORTED_MODULE_3__[/* default */ \"a\"],\n  key: 'Home',\n  path: '/home'\n}, {\n  Component: _pages_GameLevel1__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"],\n  key: 'GameLevel1',\n  path: '/level1'\n}, {\n  Component: _pages_GameLevel2__WEBPACK_IMPORTED_MODULE_5__[/* default */ \"a\"],\n  key: 'GameLevel2',\n  path: '/level2'\n}, {\n  Component: _pages_GameLevel3__WEBPACK_IMPORTED_MODULE_6__[/* default */ \"a\"],\n  key: 'GameLevel3',\n  path: '/level3'\n}, {\n  Component: _pages_Contact__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"],\n  key: 'Contact',\n  path: '/contact'\n}, {\n  Component: _pages_Login__WEBPACK_IMPORTED_MODULE_7__[/* default */ \"a\"],\n  key: 'Login',\n  path: '/login'\n}, {\n  Component: _pages_App__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"],\n  key: 'App',\n  path: '/'\n}];\n/* harmony default export */ __webpack_exports__[\"a\"] = (routes);\n\n//# sourceURL=webpack:///./src/router/routes.js?");

/***/ })

/******/ });