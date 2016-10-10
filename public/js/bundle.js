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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Main = __webpack_require__(1);

	ReactDOM.render(React.createElement(Main, null), document.getElementById("body"));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Header = __webpack_require__(2);
	var Body = __webpack_require__(3);
	var Footer = __webpack_require__(4);

	var Main = React.createClass({
	  displayName: "Main",

	  render: function render() {
	    return React.createElement(
	      "div",
	      null,
	      React.createElement(Header, null),
	      React.createElement(Body, null),
	      React.createElement(Footer, null)
	    );
	  }
	});

	module.exports = Main;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	var Header = React.createClass({
	  displayName: "Header",

	  render: function render() {
	    return React.createElement(
	      "h1",
	      null,
	      "header"
	    );
	  }
	});

	module.exports = Header;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	var Body = React.createClass({
	  displayName: "Body",

	  render: function render() {
	    return React.createElement(
	      "h1",
	      null,
	      "body"
	    );
	  }
	});

	module.exports = Body;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	var Footer = React.createClass({
	  displayName: "Footer",

	  render: function render() {
	    return React.createElement(
	      "h1",
	      null,
	      "footer"
	    );
	  }
	});

	module.exports = Footer;

/***/ }
/******/ ]);