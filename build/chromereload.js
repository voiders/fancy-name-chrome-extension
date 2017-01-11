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
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Reload client for Chrome Apps & Extensions.
	// The reload client has a compatibility with livereload.
	// WARNING: only supports reload command.

	if (true) {
	  var LIVERELOAD_HOST = 'localhost:';
	  var LIVERELOAD_PORT = 35729;
	  var connection = new WebSocket('ws://' + LIVERELOAD_HOST + LIVERELOAD_PORT + '/livereload');
	  connection.onerror = function (error) {
	    console.log('reload connection got error:', error);
	  };

	  connection.onmessage = function (e) {
	    if (!e.data) return;
	    var data = JSON.parse(e.data);
	    if (data && data.command === 'reload') {
	      if (chrome.runtime.reload) {
	        chrome.runtime.reload();
	      } else {
	        location.reload();
	      }
	    }
	  };
	}

/***/ }
/******/ ]);
//# sourceMappingURL=chromereload.js.map