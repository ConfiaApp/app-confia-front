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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /home/lucas/projects/appConfia/app-confia-front/src/index.js: Unexpected token (7:6)\\n\\n\\u001b[0m \\u001b[90m 5 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 6 | \\u001b[39mrender(\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 7 | \\u001b[39m      \\u001b[33m<\\u001b[39m\\u001b[33mApp\\u001b[39m \\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m,\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m   | \\u001b[39m      \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 8 | \\u001b[39m      document\\u001b[33m.\\u001b[39mgetElementById(\\u001b[32m'app'\\u001b[39m)\\u001b[0m\\n\\u001b[0m \\u001b[90m 9 | \\u001b[39m)\\u001b[33m;\\u001b[39m\\u001b[0m\\n    at Parser.raise (/home/lucas/projects/appConfia/app-confia-front/node_modules/@babel/parser/lib/index.js:7017:17)\\n    at Parser.unexpected (/home/lucas/projects/appConfia/app-confia-front/node_modules/@babel/parser/lib/index.js:8395:16)\\n    at Parser.parseExprAtom (/home/lucas/projects/appConfia/app-confia-front/node_modules/@babel/parser/lib/index.js:9673:20)\\n    at Parser.parseExprSubscripts (/home/lucas/projects/appConfia/app-confia-front/node_modules/@babel/parser/lib/index.js:9259:23)\\n    at Parser.parseMaybeUnary (/home/lucas/projects/appConfia/app-confia-front/node_modules/@babel/parser/lib/index.js:9239:21)\\n    at Parser.parseExprOps (/home/lucas/projects/appConfia/app-confia-front/node_modules/@babel/parser/lib/index.js:9109:23)\\n    at Parser.parseMaybeConditional (/home/lucas/projects/appConfia/app-confia-front/node_modules/@babel/parser/lib/index.js:9082:23)\\n    at Parser.parseMaybeAssign (/home/lucas/projects/appConfia/app-confia-front/node_modules/@babel/parser/lib/index.js:9037:21)\\n    at Parser.parseExprListItem (/home/lucas/projects/appConfia/app-confia-front/node_modules/@babel/parser/lib/index.js:10327:18)\\n    at Parser.parseCallExpressionArguments (/home/lucas/projects/appConfia/app-confia-front/node_modules/@babel/parser/lib/index.js:9440:22)\\n    at Parser.parseSubscript (/home/lucas/projects/appConfia/app-confia-front/node_modules/@babel/parser/lib/index.js:9346:31)\\n    at Parser.parseSubscripts (/home/lucas/projects/appConfia/app-confia-front/node_modules/@babel/parser/lib/index.js:9276:19)\\n    at Parser.parseExprSubscripts (/home/lucas/projects/appConfia/app-confia-front/node_modules/@babel/parser/lib/index.js:9265:17)\\n    at Parser.parseMaybeUnary (/home/lucas/projects/appConfia/app-confia-front/node_modules/@babel/parser/lib/index.js:9239:21)\\n    at Parser.parseExprOps (/home/lucas/projects/appConfia/app-confia-front/node_modules/@babel/parser/lib/index.js:9109:23)\\n    at Parser.parseMaybeConditional (/home/lucas/projects/appConfia/app-confia-front/node_modules/@babel/parser/lib/index.js:9082:23)\\n    at Parser.parseMaybeAssign (/home/lucas/projects/appConfia/app-confia-front/node_modules/@babel/parser/lib/index.js:9037:21)\\n    at Parser.parseExpression (/home/lucas/projects/appConfia/app-confia-front/node_modules/@babel/parser/lib/index.js:8989:23)\\n    at Parser.parseStatementContent (/home/lucas/projects/appConfia/app-confia-front/node_modules/@babel/parser/lib/index.js:10819:23)\\n    at Parser.parseStatement (/home/lucas/projects/appConfia/app-confia-front/node_modules/@babel/parser/lib/index.js:10690:17)\\n    at Parser.parseBlockOrModuleBlockBody (/home/lucas/projects/appConfia/app-confia-front/node_modules/@babel/parser/lib/index.js:11264:25)\\n    at Parser.parseBlockBody (/home/lucas/projects/appConfia/app-confia-front/node_modules/@babel/parser/lib/index.js:11251:10)\\n    at Parser.parseTopLevel (/home/lucas/projects/appConfia/app-confia-front/node_modules/@babel/parser/lib/index.js:10621:10)\\n    at Parser.parse (/home/lucas/projects/appConfia/app-confia-front/node_modules/@babel/parser/lib/index.js:12222:10)\\n    at parse (/home/lucas/projects/appConfia/app-confia-front/node_modules/@babel/parser/lib/index.js:12273:38)\\n    at parser (/home/lucas/projects/appConfia/app-confia-front/node_modules/@babel/core/lib/parser/index.js:54:34)\\n    at parser.next (<anonymous>)\\n    at normalizeFile (/home/lucas/projects/appConfia/app-confia-front/node_modules/@babel/core/lib/transformation/normalize-file.js:93:38)\\n    at normalizeFile.next (<anonymous>)\\n    at run (/home/lucas/projects/appConfia/app-confia-front/node_modules/@babel/core/lib/transformation/index.js:31:50)\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });