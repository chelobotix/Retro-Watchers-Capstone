/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n  font-family: \"Roboto\";\r\n  src: url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\")\r\n    format(\"truetype\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Roboto Condensed\";\r\n  src: url(\"https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap\")\r\n    format(\"truetype\");\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\nbody {\r\n  min-height: 100vh;\r\n}\r\n\r\nheader {\r\n  background-color: #78081c;\r\n  width: 100%;\r\n}\r\n\r\nheader nav {\r\n  padding: 0 20px 0 20px;\r\n}\r\n\r\nheader nav ul.nav-item {\r\n  list-style-type: none;\r\n  display: flex;\r\n}\r\n\r\nheader nav ul.nav-item li.nav-item {\r\n  padding: 10px;\r\n}\r\n\r\nheader nav li.search {\r\n  align-self: center;\r\n}\r\n\r\nheader nav li.search section.search {\r\n  align-self: center;\r\n}\r\n\r\nheader nav li.search section.search form.search {\r\n  display: flex;\r\n  background-color: #78081c;\r\n  border: 2px solid #fff;\r\n  border-radius: 20px;\r\n  padding: 5px;\r\n}\r\n\r\nheader nav li.search section.search form.search select {\r\n  border: none;\r\n  background-color: #78081c;\r\n  color: #fff;\r\n  font-size: 1.3rem;\r\n  padding: 10px 0 10px 0;\r\n}\r\n\r\nheader nav li.search section.search form.search input[type=\"image\"] {\r\n  padding: 5px;\r\n}\r\n\r\nheader nav ul.nav-item li.nav-item img.nav-item {\r\n  width: 180px;\r\n}\r\n\r\nheader nav ul.nav-item li.nav-item a.nav-item {\r\n  text-decoration: none;\r\n  color: #fff;\r\n  font-size: 0.2rem;\r\n  font-weight: bold;\r\n  padding: 5px;\r\n}\r\n\r\nmain {\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\nmain section.counter {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-bottom: 20px;\r\n}\r\n\r\nmain section.counter h1 {\r\n  background-color: #0f4c5c;\r\n  color: #fb8b24;\r\n  padding: 10px;\r\n  border-radius: 10px;\r\n}\r\n\r\n/* display popup comments */\r\n.popup {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  z-index: 100;\r\n  background-color: white;\r\n  width: 80%;\r\n  height: 80%;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.popup-contents {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.popup-details {\r\n  padding: 20px;\r\n}\r\n\r\n.popup-details button {\r\n  float: right;\r\n  padding: 5px;\r\n}\r\n\r\nmain section.movie {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n  gap: 50px;\r\n}\r\n\r\nmain section.movie div.movie {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  border-top-left-radius: 20px;\r\n  border-top-right-radius: 20px;\r\n  -webkit-box-shadow: 5px 5px 10px 5px #000;\r\n  box-shadow: 5px 5px 10px 5px #000;\r\n}\r\n\r\nmain section.movie div.movie:hover {\r\n  -webkit-box-shadow: 5px 5px 10px 5px #78081c;\r\n  box-shadow: 5px 5px 10px 5px #78081c;\r\n}\r\n\r\nmain section.movie div.movie img.movie {\r\n  border-top-left-radius: 20px;\r\n  border-top-right-radius: 20px;\r\n}\r\n\r\nmain section.movie div.movie div.button-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 5px 25px 5px 25px;\r\n  background-color: #78081c;\r\n}\r\n\r\nmain section.movie div.movie div.button-container p.like-counter {\r\n  margin-left: auto;\r\n  margin-right: 5px;\r\n  color: #fff;\r\n  font-weight: bold;\r\n}\r\n\r\nmain section.movie div.movie div.button-container img.btn-more-info,\r\nmain section.movie div.movie div.button-container img.btn-like {\r\n  transition: all 0.4s ease-in-out;\r\n}\r\n\r\nmain section.movie div.movie div.button-container img.btn-more-info:hover,\r\nmain section.movie div.movie div.button-container img.btn-like:hover {\r\n  transform: scale(1.2);\r\n  cursor: pointer;\r\n}\r\n\r\nfooter {\r\n  background-color: #78081c;\r\n  color: white;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding-top: 20px;\r\n}\r\n\r\n.footer-logo {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.footer-logo-img {\r\n  height: 5rem;\r\n  width: 10rem;\r\n}\r\n\r\n.copyright {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n/* Desktop */\r\n\r\n@media only screen and (min-width: 768px) {\r\n  header nav ul.nav-item {\r\n    justify-content: space-between;\r\n  }\r\n\r\n  header nav ul.nav-item div.nav-item {\r\n    display: flex;\r\n  }\r\n\r\n  header nav ul.nav-item li.nav-item a.nav-item {\r\n    font-size: 1.5rem;\r\n  }\r\n}\r\n\r\n/* Mobile */\r\n\r\n@media only screen and (max-width: 767px) {\r\n  header nav {\r\n    padding: 0 5px 0 5px;\r\n  }\r\n\r\n  header nav ul.nav-item {\r\n    justify-content: space-between;\r\n  }\r\n\r\n  header nav ul.nav-item div.nav-item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  header nav ul.nav-item li.nav-item a.nav-item {\r\n    font-size: 1.2rem;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB;sBACoB;AACtB;;AAEA;EACE,+BAA+B;EAC/B;sBACoB;AACtB;;AAEA;EACE,sBAAsB;EACtB,UAAU;EACV,SAAS;EACT,iCAAiC;AACnC;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;EACzB,WAAW;AACb;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;EACrB,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,sBAAsB;EACtB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,WAAW;EACX,iBAAiB;EACjB,sBAAsB;AACxB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,qBAAqB;EACrB,WAAW;EACX,iBAAiB;EACjB,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;EACzB,cAAc;EACd,aAAa;EACb,mBAAmB;AACrB;;AAEA,2BAA2B;AAC3B;EACE,eAAe;EACf,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,YAAY;EACZ,uBAAuB;EACvB,UAAU;EACV,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,eAAe;EACf,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,4BAA4B;EAC5B,6BAA6B;EAC7B,yCAAyC;EACzC,iCAAiC;AACnC;;AAEA;EACE,4CAA4C;EAC5C,oCAAoC;AACtC;;AAEA;EACE,4BAA4B;EAC5B,6BAA6B;AAC/B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,0BAA0B;EAC1B,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,WAAW;EACX,iBAAiB;AACnB;;AAEA;;EAEE,gCAAgC;AAClC;;AAEA;;EAEE,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA,YAAY;;AAEZ;EACE;IACE,8BAA8B;EAChC;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,iBAAiB;EACnB;AACF;;AAEA,WAAW;;AAEX;EACE;IACE,oBAAoB;EACtB;;EAEA;IACE,8BAA8B;EAChC;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;EACrB;;EAEA;IACE,iBAAiB;EACnB;AACF","sourcesContent":["@font-face {\r\n  font-family: \"Roboto\";\r\n  src: url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\")\r\n    format(\"truetype\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Roboto Condensed\";\r\n  src: url(\"https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap\")\r\n    format(\"truetype\");\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\nbody {\r\n  min-height: 100vh;\r\n}\r\n\r\nheader {\r\n  background-color: #78081c;\r\n  width: 100%;\r\n}\r\n\r\nheader nav {\r\n  padding: 0 20px 0 20px;\r\n}\r\n\r\nheader nav ul.nav-item {\r\n  list-style-type: none;\r\n  display: flex;\r\n}\r\n\r\nheader nav ul.nav-item li.nav-item {\r\n  padding: 10px;\r\n}\r\n\r\nheader nav li.search {\r\n  align-self: center;\r\n}\r\n\r\nheader nav li.search section.search {\r\n  align-self: center;\r\n}\r\n\r\nheader nav li.search section.search form.search {\r\n  display: flex;\r\n  background-color: #78081c;\r\n  border: 2px solid #fff;\r\n  border-radius: 20px;\r\n  padding: 5px;\r\n}\r\n\r\nheader nav li.search section.search form.search select {\r\n  border: none;\r\n  background-color: #78081c;\r\n  color: #fff;\r\n  font-size: 1.3rem;\r\n  padding: 10px 0 10px 0;\r\n}\r\n\r\nheader nav li.search section.search form.search input[type=\"image\"] {\r\n  padding: 5px;\r\n}\r\n\r\nheader nav ul.nav-item li.nav-item img.nav-item {\r\n  width: 180px;\r\n}\r\n\r\nheader nav ul.nav-item li.nav-item a.nav-item {\r\n  text-decoration: none;\r\n  color: #fff;\r\n  font-size: 0.2rem;\r\n  font-weight: bold;\r\n  padding: 5px;\r\n}\r\n\r\nmain {\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\nmain section.counter {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-bottom: 20px;\r\n}\r\n\r\nmain section.counter h1 {\r\n  background-color: #0f4c5c;\r\n  color: #fb8b24;\r\n  padding: 10px;\r\n  border-radius: 10px;\r\n}\r\n\r\n/* display popup comments */\r\n.popup {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  z-index: 100;\r\n  background-color: white;\r\n  width: 80%;\r\n  height: 80%;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.popup-contents {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.popup-details {\r\n  padding: 20px;\r\n}\r\n\r\n.popup-details button {\r\n  float: right;\r\n  padding: 5px;\r\n}\r\n\r\nmain section.movie {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n  gap: 50px;\r\n}\r\n\r\nmain section.movie div.movie {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  border-top-left-radius: 20px;\r\n  border-top-right-radius: 20px;\r\n  -webkit-box-shadow: 5px 5px 10px 5px #000;\r\n  box-shadow: 5px 5px 10px 5px #000;\r\n}\r\n\r\nmain section.movie div.movie:hover {\r\n  -webkit-box-shadow: 5px 5px 10px 5px #78081c;\r\n  box-shadow: 5px 5px 10px 5px #78081c;\r\n}\r\n\r\nmain section.movie div.movie img.movie {\r\n  border-top-left-radius: 20px;\r\n  border-top-right-radius: 20px;\r\n}\r\n\r\nmain section.movie div.movie div.button-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 5px 25px 5px 25px;\r\n  background-color: #78081c;\r\n}\r\n\r\nmain section.movie div.movie div.button-container p.like-counter {\r\n  margin-left: auto;\r\n  margin-right: 5px;\r\n  color: #fff;\r\n  font-weight: bold;\r\n}\r\n\r\nmain section.movie div.movie div.button-container img.btn-more-info,\r\nmain section.movie div.movie div.button-container img.btn-like {\r\n  transition: all 0.4s ease-in-out;\r\n}\r\n\r\nmain section.movie div.movie div.button-container img.btn-more-info:hover,\r\nmain section.movie div.movie div.button-container img.btn-like:hover {\r\n  transform: scale(1.2);\r\n  cursor: pointer;\r\n}\r\n\r\nfooter {\r\n  background-color: #78081c;\r\n  color: white;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding-top: 20px;\r\n}\r\n\r\n.footer-logo {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.footer-logo-img {\r\n  height: 5rem;\r\n  width: 10rem;\r\n}\r\n\r\n.copyright {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n/* Desktop */\r\n\r\n@media only screen and (min-width: 768px) {\r\n  header nav ul.nav-item {\r\n    justify-content: space-between;\r\n  }\r\n\r\n  header nav ul.nav-item div.nav-item {\r\n    display: flex;\r\n  }\r\n\r\n  header nav ul.nav-item li.nav-item a.nav-item {\r\n    font-size: 1.5rem;\r\n  }\r\n}\r\n\r\n/* Mobile */\r\n\r\n@media only screen and (max-width: 767px) {\r\n  header nav {\r\n    padding: 0 5px 0 5px;\r\n  }\r\n\r\n  header nav ul.nav-item {\r\n    justify-content: space-between;\r\n  }\r\n\r\n  header nav ul.nav-item div.nav-item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  header nav ul.nav-item li.nav-item a.nav-item {\r\n    font-size: 1.2rem;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/apiKey.js":
/*!*******************************!*\
  !*** ./src/modules/apiKey.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "apiKey": () => (/* binding */ apiKey),
/* harmony export */   "siteId": () => (/* binding */ siteId)
/* harmony export */ });
const apiKey = '08dcce9f4f3e881c4f214b2020b834d2';
const siteId = 'qaqaJn8CGZuYgf2pkjHr';



/***/ }),

/***/ "./src/modules/endPointAPI.js":
/*!************************************!*\
  !*** ./src/modules/endPointAPI.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getComments": () => (/* binding */ getComments),
/* harmony export */   "getLike": () => (/* binding */ getLike),
/* harmony export */   "getMovieList": () => (/* binding */ getMovieList),
/* harmony export */   "getSingleMovie": () => (/* binding */ getSingleMovie),
/* harmony export */   "setComments": () => (/* binding */ setComments),
/* harmony export */   "setLike": () => (/* binding */ setLike)
/* harmony export */ });
/* harmony import */ var _apiKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiKey.js */ "./src/modules/apiKey.js");


const getMovieList = async () => {
  const url = `https://api.themoviedb.org/3/list/8240326?api_key=${_apiKey_js__WEBPACK_IMPORTED_MODULE_0__.apiKey}&language=en-US`;
  const response = await fetch(url);
  const movieList = await response.json();
  return movieList;
};

const getSingleMovie = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${_apiKey_js__WEBPACK_IMPORTED_MODULE_0__.apiKey}&language=en-US`;
  const response = await fetch(url);
  const singleMovie = await response.json();
  return singleMovie;
};

const getComments = async (id) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${_apiKey_js__WEBPACK_IMPORTED_MODULE_0__.siteId}/comments?item_id=${id}`;
  const response = await fetch(url);
  const comments = await response.json();
  return comments;
};

const setComments = async (comments) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${_apiKey_js__WEBPACK_IMPORTED_MODULE_0__.siteId}/comments`;
  await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(comments),
  });
  return comments;
};

const setLike = async (movieId) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${_apiKey_js__WEBPACK_IMPORTED_MODULE_0__.siteId}/likes/`;
  await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: movieId }),
  });
};

const getLike = async () => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${_apiKey_js__WEBPACK_IMPORTED_MODULE_0__.siteId}/likes/`;
  const response = await fetch(url);
  const likeCounter = await response.json();
  return likeCounter;
};




/***/ }),

/***/ "./src/modules/movieCounter.js":
/*!*************************************!*\
  !*** ./src/modules/movieCounter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getMovieCounter = (msg) => {
  const counter = document.querySelectorAll('.btn-like').length;
  document.querySelector('h1').textContent = `📽️ ${counter} ${msg} 😁`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMovieCounter);


/***/ }),

/***/ "./src/modules/popup-comments.js":
/*!***************************************!*\
  !*** ./src/modules/popup-comments.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "commentPupupHandler": () => (/* binding */ commentPupupHandler)
/* harmony export */ });
/* harmony import */ var _endPointAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./endPointAPI.js */ "./src/modules/endPointAPI.js");


const displayComment = (comments) => {
  let aux = '';
  comments.forEach((comment) => {
    aux += `
      <p>${comment.creation_date} ${comment.username} : ${comment.comment}</p>
    `;
  });
  document.querySelector('.comments').innerHTML = aux;
};

const commentPupupHandler = async (data) => {
  document.getElementById('popup').style.display = 'block';
  document.getElementById('popup-details').innerHTML = `
      <button class="close-popup-btn" onclick="closePopup()">x</button>
      <div class="popup-contents">
        <div class="popup-comment">
          <img class="popup-img" src="https://image.tmdb.org/t/p/w300/${data.poster_path}" alt="">
          <p class="title">${data.title}</p>
          <div class="more-info">
            <p>popularity : ${data.popularity}</p>
            <p>language: ${data.original_language}</p>
          </div>
          <div class="display-comments">
            <h3>Comments(2)</h3>
            <div class="comments"></div>
          </div>
          <form class="add-comment" id="form">
            <h3>Add a comment</h3>
            <input type="text" placeholder="Your name" name="username" required/>
            <input type="text" placeholder="Your insights" name="comment" required/>
            <button class="comment-btn">Submit</button>
          </form>
        </div>
      </div>`;

  addComment(data.id);
};

window.closePopup = () => {
  document.getElementById('popup').style.display = 'none';
};

const addComment = async (id) => {
  (0,_endPointAPI_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(id).then((comments) => {
    displayComment(comments);
  });
  document.querySelector('#form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.querySelector('input[name="username').value;
    const comment = document.querySelector('input[name="comment').value;
    const comments = {
      item_id: id,
      username,
      comment,
    };

    await (0,_endPointAPI_js__WEBPACK_IMPORTED_MODULE_0__.setComments)(comments);

    document.querySelector('input[name="username').value = '';
    document.querySelector('input[name="comment').value = '';

    (0,_endPointAPI_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(id).then((comments) => {
      displayComment(comments);
    });
  });
};




/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_images_heart_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/heart.png */ "./src/assets/images/heart.png");
/* harmony import */ var _assets_images_more_info_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/more-info.png */ "./src/assets/images/more-info.png");
/* harmony import */ var _endPointAPI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./endPointAPI.js */ "./src/modules/endPointAPI.js");
/* harmony import */ var _popup_comments_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup-comments.js */ "./src/modules/popup-comments.js");
/* harmony import */ var _movieCounter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movieCounter.js */ "./src/modules/movieCounter.js");






const updateLike = (movieId) => {
  (0,_endPointAPI_js__WEBPACK_IMPORTED_MODULE_2__.getLike)().then((response) => {
    response.forEach((like) => {
      if (like.item_id === movieId) {
        document.querySelector(`#counter${movieId}`).textContent = like.likes;
      }
    });
  });
};

const addLike = () => {
  document.querySelectorAll('.btn-like').forEach((movie) => {
    movie.addEventListener('click', () => {
      const movieId = movie.id.slice(4);
      (0,_endPointAPI_js__WEBPACK_IMPORTED_MODULE_2__.setLike)(movieId).then(() => {
        updateLike(movieId);
      });
    });
  });
};

const renderLikes = () => {
  (0,_endPointAPI_js__WEBPACK_IMPORTED_MODULE_2__.getLike)().then((response) => {
    document.querySelectorAll('.btn-like').forEach((btnLike) => {
      response.forEach((like) => {
        if (btnLike.id.slice(4) === like.item_id) {
          document.querySelector(`#counter${like.item_id}`).textContent = like.likes;
        }
      });
    });
  });
};

const randomMovie = () => {
  document.querySelector('#randomMovie').addEventListener('click', (e) => {
    e.preventDefault();
    (0,_endPointAPI_js__WEBPACK_IMPORTED_MODULE_2__.getMovieList)().then((response) => {
      const random = Math.floor(Math.random() * response.items.length);
      document.querySelector('section.movie').innerHTML = `<div class="movie">
            <img class="movie" src="https://image.tmdb.org/t/p/w300/${response.items[random].poster_path}" alt="">
            <div class="button-container">
              <img class="btn-more-info" id="${response.items[random].id}" src="${_assets_images_more_info_png__WEBPACK_IMPORTED_MODULE_1__}" alt="">
              <p class="like-counter" id="counter${response.items[random].id}">0</p>
              <img class="btn-like" id="like${response.items[random].id}" src="${_assets_images_heart_png__WEBPACK_IMPORTED_MODULE_0__}" alt="">
            </div>
          </div>`;
      (0,_movieCounter_js__WEBPACK_IMPORTED_MODULE_4__["default"])('Random Movie Generated');
    });
  });
};

const renderMovie = (movieList, category = 0) => {
  category = parseInt(category, 10);
  const sectionMovie = document.querySelector('section.movie');
  sectionMovie.innerHTML = '';
  let aux = '';
  let categoryArray = movieList;
  if (category !== 0) {
    categoryArray = movieList.filter((movie) => movie.genre_ids.includes(category));
  }
  categoryArray.forEach((movie) => {
    aux += `<div class="movie">
            <img class="movie" src="https://image.tmdb.org/t/p/w300/${movie.poster_path}" alt="">
            <div class="button-container">
              <img class="btn-more-info" id="${movie.id}" src="${_assets_images_more_info_png__WEBPACK_IMPORTED_MODULE_1__}" alt="">
              <p class="like-counter" id="counter${movie.id}">0</p>
              <img class="btn-like" id="like${movie.id}" src="${_assets_images_heart_png__WEBPACK_IMPORTED_MODULE_0__}" alt="">
            </div>
          </div>`;
  });
  renderLikes();
  sectionMovie.innerHTML = aux;
  addLike();
  (0,_movieCounter_js__WEBPACK_IMPORTED_MODULE_4__["default"])('Retro Movies Found');
  randomMovie();

  document.querySelectorAll('.btn-more-info').forEach((movie) => {
    document.getElementById('popup').style.display = 'none';
    movie.addEventListener('click', () => {
      (0,_endPointAPI_js__WEBPACK_IMPORTED_MODULE_2__.getSingleMovie)(movie.id).then((data) => {
        (0,_popup_comments_js__WEBPACK_IMPORTED_MODULE_3__.commentPupupHandler)(data);
      });

      getComments().then((comments) => {
        displayComment(comments);
      });
    });
  });
};

const sortByCategory = () => {
  const formSearch = document.querySelector('form.search');
  formSearch.addEventListener('submit', (e) => {
    e.preventDefault();
    (0,_endPointAPI_js__WEBPACK_IMPORTED_MODULE_2__.getMovieList)().then((response) => {
      renderMovie(response.items, formSearch.elements.selectCategory.value);
    });
  });
};

const renderMovieList = () => {
  (0,_endPointAPI_js__WEBPACK_IMPORTED_MODULE_2__.getMovieList)().then((response) => {
    renderMovie(response.items);
    sortByCategory();
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMovieList);


/***/ }),

/***/ "./src/assets/images/heart.png":
/*!*************************************!*\
  !*** ./src/assets/images/heart.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/heart-07c075fb20497102ff21.png";

/***/ }),

/***/ "./src/assets/images/more-info.png":
/*!*****************************************!*\
  !*** ./src/assets/images/more-info.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/more-info-a0f096d6f37dbc7f2a32.png";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/render.js */ "./src/modules/render.js");



(0,_modules_render_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7QUFDQSxFQUFFLDZEQUFZO0FBQ2Q7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpRUFBZSxlQUFlLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3JIL0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDd0I7O0FBRTdDLDhEQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjazUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2s1Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrNS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2s1Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2s1Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2s1Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrNS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrNS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrNS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2s1Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjazUvLi9zcmMvbW9kdWxlcy9hcGlLZXkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjazUvLi9zcmMvbW9kdWxlcy9lbmRQb2ludEFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrNS8uL3NyYy9tb2R1bGVzL21vdmllQ291bnRlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrNS8uL3NyYy9tb2R1bGVzL3BvcHVwLWNvbW1lbnRzLmpzIiwid2VicGFjazovL3dlYnBhY2s1Ly4vc3JjL21vZHVsZXMvcmVuZGVyLmpzIiwid2VicGFjazovL3dlYnBhY2s1L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2s1L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2s1L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrNS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYnBhY2s1L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjazUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrNS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWJwYWNrNS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VicGFjazUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXHJcXG4gIHNyYzogdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwXFxcIilcXHJcXG4gICAgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvIENvbmRlbnNlZFxcXCI7XFxyXFxuICBzcmM6IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8rQ29uZGVuc2VkOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDcwMDsxLDMwMDsxLDQwMDsxLDcwMCZkaXNwbGF5PXN3YXBcXFwiKVxcclxcbiAgICBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzgwODFjO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYge1xcclxcbiAgcGFkZGluZzogMCAyMHB4IDAgMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiB1bC5uYXYtaXRlbSB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHVsLm5hdi1pdGVtIGxpLm5hdi1pdGVtIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgbGkuc2VhcmNoIHtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiBsaS5zZWFyY2ggc2VjdGlvbi5zZWFyY2gge1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IGxpLnNlYXJjaCBzZWN0aW9uLnNlYXJjaCBmb3JtLnNlYXJjaCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc4MDgxYztcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IGxpLnNlYXJjaCBzZWN0aW9uLnNlYXJjaCBmb3JtLnNlYXJjaCBzZWxlY3Qge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc4MDgxYztcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IGxpLnNlYXJjaCBzZWN0aW9uLnNlYXJjaCBmb3JtLnNlYXJjaCBpbnB1dFt0eXBlPVxcXCJpbWFnZVxcXCJdIHtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiB1bC5uYXYtaXRlbSBsaS5uYXYtaXRlbSBpbWcubmF2LWl0ZW0ge1xcclxcbiAgd2lkdGg6IDE4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHVsLm5hdi1pdGVtIGxpLm5hdi1pdGVtIGEubmF2LWl0ZW0ge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LXNpemU6IDAuMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24uY291bnRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24uY291bnRlciBoMSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGY0YzVjO1xcclxcbiAgY29sb3I6ICNmYjhiMjQ7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogZGlzcGxheSBwb3B1cCBjb21tZW50cyAqL1xcclxcbi5wb3B1cCB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgei1pbmRleDogMTAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgaGVpZ2h0OiA4MCU7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb250ZW50cyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWRldGFpbHMge1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWRldGFpbHMgYnV0dG9uIHtcXHJcXG4gIGZsb2F0OiByaWdodDtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLm1vdmllIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgZ2FwOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24ubW92aWUgZGl2Lm1vdmllIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XFxyXFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IDVweCAjMDAwO1xcclxcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IDVweCAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24ubW92aWUgZGl2Lm1vdmllOmhvdmVyIHtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IDVweCAjNzgwODFjO1xcclxcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IDVweCAjNzgwODFjO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24ubW92aWUgZGl2Lm1vdmllIGltZy5tb3ZpZSB7XFxyXFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xcclxcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbm1haW4gc2VjdGlvbi5tb3ZpZSBkaXYubW92aWUgZGl2LmJ1dHRvbi1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDVweCAyNXB4IDVweCAyNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc4MDgxYztcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLm1vdmllIGRpdi5tb3ZpZSBkaXYuYnV0dG9uLWNvbnRhaW5lciBwLmxpa2UtY291bnRlciB7XFxyXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLm1vdmllIGRpdi5tb3ZpZSBkaXYuYnV0dG9uLWNvbnRhaW5lciBpbWcuYnRuLW1vcmUtaW5mbyxcXHJcXG5tYWluIHNlY3Rpb24ubW92aWUgZGl2Lm1vdmllIGRpdi5idXR0b24tY29udGFpbmVyIGltZy5idG4tbGlrZSB7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLm1vdmllIGRpdi5tb3ZpZSBkaXYuYnV0dG9uLWNvbnRhaW5lciBpbWcuYnRuLW1vcmUtaW5mbzpob3ZlcixcXHJcXG5tYWluIHNlY3Rpb24ubW92aWUgZGl2Lm1vdmllIGRpdi5idXR0b24tY29udGFpbmVyIGltZy5idG4tbGlrZTpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzgwODFjO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWxvZ28ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWxvZ28taW1nIHtcXHJcXG4gIGhlaWdodDogNXJlbTtcXHJcXG4gIHdpZHRoOiAxMHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvcHlyaWdodCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIERlc2t0b3AgKi9cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICBoZWFkZXIgbmF2IHVsLm5hdi1pdGVtIHtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgfVxcclxcblxcclxcbiAgaGVhZGVyIG5hdiB1bC5uYXYtaXRlbSBkaXYubmF2LWl0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgfVxcclxcblxcclxcbiAgaGVhZGVyIG5hdiB1bC5uYXYtaXRlbSBsaS5uYXYtaXRlbSBhLm5hdi1pdGVtIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qIE1vYmlsZSAqL1xcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXHJcXG4gIGhlYWRlciBuYXYge1xcclxcbiAgICBwYWRkaW5nOiAwIDVweCAwIDVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGhlYWRlciBuYXYgdWwubmF2LWl0ZW0ge1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoZWFkZXIgbmF2IHVsLm5hdi1pdGVtIGRpdi5uYXYtaXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoZWFkZXIgbmF2IHVsLm5hdi1pdGVtIGxpLm5hdi1pdGVtIGEubmF2LWl0ZW0ge1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQjtzQkFDb0I7QUFDdEI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0I7c0JBQ29CO0FBQ3RCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixTQUFTO0VBQ1QsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IseUNBQXlDO0VBQ3pDLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLDRDQUE0QztFQUM1QyxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLGdDQUFnQztBQUNsQzs7QUFFQTs7RUFFRSxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBLFlBQVk7O0FBRVo7RUFDRTtJQUNFLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBLFdBQVc7O0FBRVg7RUFDRTtJQUNFLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCI7XFxyXFxuICBzcmM6IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcFxcXCIpXFxyXFxuICAgIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJvYm90byBDb25kZW5zZWRcXFwiO1xcclxcbiAgc3JjOiB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK0NvbmRlbnNlZDppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw3MDA7MSwzMDA7MSw0MDA7MSw3MDAmZGlzcGxheT1zd2FwXFxcIilcXHJcXG4gICAgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc4MDgxYztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHtcXHJcXG4gIHBhZGRpbmc6IDAgMjBweCAwIDIwcHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgdWwubmF2LWl0ZW0ge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiB1bC5uYXYtaXRlbSBsaS5uYXYtaXRlbSB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IGxpLnNlYXJjaCB7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgbGkuc2VhcmNoIHNlY3Rpb24uc2VhcmNoIHtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiBsaS5zZWFyY2ggc2VjdGlvbi5zZWFyY2ggZm9ybS5zZWFyY2gge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3ODA4MWM7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiBsaS5zZWFyY2ggc2VjdGlvbi5zZWFyY2ggZm9ybS5zZWFyY2ggc2VsZWN0IHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3ODA4MWM7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgcGFkZGluZzogMTBweCAwIDEwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiBsaS5zZWFyY2ggc2VjdGlvbi5zZWFyY2ggZm9ybS5zZWFyY2ggaW5wdXRbdHlwZT1cXFwiaW1hZ2VcXFwiXSB7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgdWwubmF2LWl0ZW0gbGkubmF2LWl0ZW0gaW1nLm5hdi1pdGVtIHtcXHJcXG4gIHdpZHRoOiAxODBweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiB1bC5uYXYtaXRlbSBsaS5uYXYtaXRlbSBhLm5hdi1pdGVtIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC1zaXplOiAwLjJyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLmNvdW50ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLmNvdW50ZXIgaDEge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmNGM1YztcXHJcXG4gIGNvbG9yOiAjZmI4YjI0O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIGRpc3BsYXkgcG9wdXAgY29tbWVudHMgKi9cXHJcXG4ucG9wdXAge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIHotaW5kZXg6IDEwMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGhlaWdodDogODAlO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29udGVudHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1kZXRhaWxzIHtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1kZXRhaWxzIGJ1dHRvbiB7XFxyXFxuICBmbG9hdDogcmlnaHQ7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbm1haW4gc2VjdGlvbi5tb3ZpZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGdhcDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLm1vdmllIGRpdi5tb3ZpZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xcclxcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDVweCA1cHggMTBweCA1cHggIzAwMDtcXHJcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCA1cHggIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLm1vdmllIGRpdi5tb3ZpZTpob3ZlciB7XFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDVweCA1cHggMTBweCA1cHggIzc4MDgxYztcXHJcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCA1cHggIzc4MDgxYztcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLm1vdmllIGRpdi5tb3ZpZSBpbWcubW92aWUge1xcclxcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcXHJcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24ubW92aWUgZGl2Lm1vdmllIGRpdi5idXR0b24tY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiA1cHggMjVweCA1cHggMjVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3ODA4MWM7XFxyXFxufVxcclxcblxcclxcbm1haW4gc2VjdGlvbi5tb3ZpZSBkaXYubW92aWUgZGl2LmJ1dHRvbi1jb250YWluZXIgcC5saWtlLWNvdW50ZXIge1xcclxcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbm1haW4gc2VjdGlvbi5tb3ZpZSBkaXYubW92aWUgZGl2LmJ1dHRvbi1jb250YWluZXIgaW1nLmJ0bi1tb3JlLWluZm8sXFxyXFxubWFpbiBzZWN0aW9uLm1vdmllIGRpdi5tb3ZpZSBkaXYuYnV0dG9uLWNvbnRhaW5lciBpbWcuYnRuLWxpa2Uge1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbm1haW4gc2VjdGlvbi5tb3ZpZSBkaXYubW92aWUgZGl2LmJ1dHRvbi1jb250YWluZXIgaW1nLmJ0bi1tb3JlLWluZm86aG92ZXIsXFxyXFxubWFpbiBzZWN0aW9uLm1vdmllIGRpdi5tb3ZpZSBkaXYuYnV0dG9uLWNvbnRhaW5lciBpbWcuYnRuLWxpa2U6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc4MDgxYztcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nLXRvcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1sb2dvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1sb2dvLWltZyB7XFxyXFxuICBoZWlnaHQ6IDVyZW07XFxyXFxuICB3aWR0aDogMTByZW07XFxyXFxufVxcclxcblxcclxcbi5jb3B5cmlnaHQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBEZXNrdG9wICovXFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgaGVhZGVyIG5hdiB1bC5uYXYtaXRlbSB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGhlYWRlciBuYXYgdWwubmF2LWl0ZW0gZGl2Lm5hdi1pdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGhlYWRlciBuYXYgdWwubmF2LWl0ZW0gbGkubmF2LWl0ZW0gYS5uYXYtaXRlbSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiBNb2JpbGUgKi9cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxyXFxuICBoZWFkZXIgbmF2IHtcXHJcXG4gICAgcGFkZGluZzogMCA1cHggMCA1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoZWFkZXIgbmF2IHVsLm5hdi1pdGVtIHtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgfVxcclxcblxcclxcbiAgaGVhZGVyIG5hdiB1bC5uYXYtaXRlbSBkaXYubmF2LWl0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgaGVhZGVyIG5hdiB1bC5uYXYtaXRlbSBsaS5uYXYtaXRlbSBhLm5hdi1pdGVtIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGFwaUtleSA9ICcwOGRjY2U5ZjRmM2U4ODFjNGYyMTRiMjAyMGI4MzRkMic7XG5jb25zdCBzaXRlSWQgPSAncWFxYUpuOENHWnVZZ2YycGtqSHInO1xuZXhwb3J0IHsgYXBpS2V5LCBzaXRlSWQgfTtcbiIsImltcG9ydCB7IGFwaUtleSwgc2l0ZUlkIH0gZnJvbSAnLi9hcGlLZXkuanMnO1xuXG5jb25zdCBnZXRNb3ZpZUxpc3QgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL2xpc3QvODI0MDMyNj9hcGlfa2V5PSR7YXBpS2V5fSZsYW5ndWFnZT1lbi1VU2A7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgY29uc3QgbW92aWVMaXN0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gbW92aWVMaXN0O1xufTtcblxuY29uc3QgZ2V0U2luZ2xlTW92aWUgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvJHtpZH0/YXBpX2tleT0ke2FwaUtleX0mbGFuZ3VhZ2U9ZW4tVVNgO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gIGNvbnN0IHNpbmdsZU1vdmllID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gc2luZ2xlTW92aWU7XG59O1xuXG5jb25zdCBnZXRDb21tZW50cyA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJHtzaXRlSWR9L2NvbW1lbnRzP2l0ZW1faWQ9JHtpZH1gO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gIGNvbnN0IGNvbW1lbnRzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gY29tbWVudHM7XG59O1xuXG5jb25zdCBzZXRDb21tZW50cyA9IGFzeW5jIChjb21tZW50cykgPT4ge1xuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJHtzaXRlSWR9L2NvbW1lbnRzYDtcbiAgYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY29tbWVudHMpLFxuICB9KTtcbiAgcmV0dXJuIGNvbW1lbnRzO1xufTtcblxuY29uc3Qgc2V0TGlrZSA9IGFzeW5jIChtb3ZpZUlkKSA9PiB7XG4gIGNvbnN0IHVybCA9IGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8ke3NpdGVJZH0vbGlrZXMvYDtcbiAgYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpdGVtX2lkOiBtb3ZpZUlkIH0pLFxuICB9KTtcbn07XG5cbmNvbnN0IGdldExpa2UgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHVybCA9IGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8ke3NpdGVJZH0vbGlrZXMvYDtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICBjb25zdCBsaWtlQ291bnRlciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGxpa2VDb3VudGVyO1xufTtcblxuZXhwb3J0IHtcbiAgZ2V0TW92aWVMaXN0LCBzZXRMaWtlLCBnZXRMaWtlLCBnZXRTaW5nbGVNb3ZpZSwgZ2V0Q29tbWVudHMsIHNldENvbW1lbnRzLFxufTtcbiIsImNvbnN0IGdldE1vdmllQ291bnRlciA9IChtc2cpID0+IHtcbiAgY29uc3QgY291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tbGlrZScpLmxlbmd0aDtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDEnKS50ZXh0Q29udGVudCA9IGDwn5O977iPICR7Y291bnRlcn0gJHttc2d9IPCfmIFgO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0TW92aWVDb3VudGVyO1xuIiwiaW1wb3J0IHsgZ2V0Q29tbWVudHMsIHNldENvbW1lbnRzIH0gZnJvbSAnLi9lbmRQb2ludEFQSS5qcyc7XG5cbmNvbnN0IGRpc3BsYXlDb21tZW50ID0gKGNvbW1lbnRzKSA9PiB7XG4gIGxldCBhdXggPSAnJztcbiAgY29tbWVudHMuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xuICAgIGF1eCArPSBgXG4gICAgICA8cD4ke2NvbW1lbnQuY3JlYXRpb25fZGF0ZX0gJHtjb21tZW50LnVzZXJuYW1lfSA6ICR7Y29tbWVudC5jb21tZW50fTwvcD5cbiAgICBgO1xuICB9KTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRzJykuaW5uZXJIVE1MID0gYXV4O1xufTtcblxuY29uc3QgY29tbWVudFB1cHVwSGFuZGxlciA9IGFzeW5jIChkYXRhKSA9PiB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXAtZGV0YWlscycpLmlubmVySFRNTCA9IGBcbiAgICAgIDxidXR0b24gY2xhc3M9XCJjbG9zZS1wb3B1cC1idG5cIiBvbmNsaWNrPVwiY2xvc2VQb3B1cCgpXCI+eDwvYnV0dG9uPlxuICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLWNvbnRlbnRzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC1jb21tZW50XCI+XG4gICAgICAgICAgPGltZyBjbGFzcz1cInBvcHVwLWltZ1wiIHNyYz1cImh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3czMDAvJHtkYXRhLnBvc3Rlcl9wYXRofVwiIGFsdD1cIlwiPlxuICAgICAgICAgIDxwIGNsYXNzPVwidGl0bGVcIj4ke2RhdGEudGl0bGV9PC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb3JlLWluZm9cIj5cbiAgICAgICAgICAgIDxwPnBvcHVsYXJpdHkgOiAke2RhdGEucG9wdWxhcml0eX08L3A+XG4gICAgICAgICAgICA8cD5sYW5ndWFnZTogJHtkYXRhLm9yaWdpbmFsX2xhbmd1YWdlfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGlzcGxheS1jb21tZW50c1wiPlxuICAgICAgICAgICAgPGgzPkNvbW1lbnRzKDIpPC9oMz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50c1wiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxmb3JtIGNsYXNzPVwiYWRkLWNvbW1lbnRcIiBpZD1cImZvcm1cIj5cbiAgICAgICAgICAgIDxoMz5BZGQgYSBjb21tZW50PC9oMz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCIgbmFtZT1cInVzZXJuYW1lXCIgcmVxdWlyZWQvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJZb3VyIGluc2lnaHRzXCIgbmFtZT1cImNvbW1lbnRcIiByZXF1aXJlZC8+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY29tbWVudC1idG5cIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+YDtcblxuICBhZGRDb21tZW50KGRhdGEuaWQpO1xufTtcblxud2luZG93LmNsb3NlUG9wdXAgPSAoKSA9PiB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59O1xuXG5jb25zdCBhZGRDb21tZW50ID0gYXN5bmMgKGlkKSA9PiB7XG4gIGdldENvbW1lbnRzKGlkKS50aGVuKChjb21tZW50cykgPT4ge1xuICAgIGRpc3BsYXlDb21tZW50KGNvbW1lbnRzKTtcbiAgfSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdXNlcm5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwidXNlcm5hbWUnKS52YWx1ZTtcbiAgICBjb25zdCBjb21tZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImNvbW1lbnQnKS52YWx1ZTtcbiAgICBjb25zdCBjb21tZW50cyA9IHtcbiAgICAgIGl0ZW1faWQ6IGlkLFxuICAgICAgdXNlcm5hbWUsXG4gICAgICBjb21tZW50LFxuICAgIH07XG5cbiAgICBhd2FpdCBzZXRDb21tZW50cyhjb21tZW50cyk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwidXNlcm5hbWUnKS52YWx1ZSA9ICcnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJjb21tZW50JykudmFsdWUgPSAnJztcblxuICAgIGdldENvbW1lbnRzKGlkKS50aGVuKChjb21tZW50cykgPT4ge1xuICAgICAgZGlzcGxheUNvbW1lbnQoY29tbWVudHMpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IGNvbW1lbnRQdXB1cEhhbmRsZXIgfTtcbiIsImltcG9ydCBoZWFydCBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2hlYXJ0LnBuZyc7XG5pbXBvcnQgbW9yZUluZm8gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9tb3JlLWluZm8ucG5nJztcbmltcG9ydCB7XG4gIGdldExpa2UsXG4gIGdldE1vdmllTGlzdCxcbiAgZ2V0U2luZ2xlTW92aWUsIHNldExpa2UsXG59IGZyb20gJy4vZW5kUG9pbnRBUEkuanMnO1xuaW1wb3J0IHsgY29tbWVudFB1cHVwSGFuZGxlciB9IGZyb20gJy4vcG9wdXAtY29tbWVudHMuanMnO1xuaW1wb3J0IGdldE1vdmllQ291bnRlciBmcm9tICcuL21vdmllQ291bnRlci5qcyc7XG5cbmNvbnN0IHVwZGF0ZUxpa2UgPSAobW92aWVJZCkgPT4ge1xuICBnZXRMaWtlKCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICByZXNwb25zZS5mb3JFYWNoKChsaWtlKSA9PiB7XG4gICAgICBpZiAobGlrZS5pdGVtX2lkID09PSBtb3ZpZUlkKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNjb3VudGVyJHttb3ZpZUlkfWApLnRleHRDb250ZW50ID0gbGlrZS5saWtlcztcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBhZGRMaWtlID0gKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLWxpa2UnKS5mb3JFYWNoKChtb3ZpZSkgPT4ge1xuICAgIG1vdmllLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgbW92aWVJZCA9IG1vdmllLmlkLnNsaWNlKDQpO1xuICAgICAgc2V0TGlrZShtb3ZpZUlkKS50aGVuKCgpID0+IHtcbiAgICAgICAgdXBkYXRlTGlrZShtb3ZpZUlkKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IHJlbmRlckxpa2VzID0gKCkgPT4ge1xuICBnZXRMaWtlKCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLWxpa2UnKS5mb3JFYWNoKChidG5MaWtlKSA9PiB7XG4gICAgICByZXNwb25zZS5mb3JFYWNoKChsaWtlKSA9PiB7XG4gICAgICAgIGlmIChidG5MaWtlLmlkLnNsaWNlKDQpID09PSBsaWtlLml0ZW1faWQpIHtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjY291bnRlciR7bGlrZS5pdGVtX2lkfWApLnRleHRDb250ZW50ID0gbGlrZS5saWtlcztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgcmFuZG9tTW92aWUgPSAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyYW5kb21Nb3ZpZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZ2V0TW92aWVMaXN0KCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnN0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJlc3BvbnNlLml0ZW1zLmxlbmd0aCk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uLm1vdmllJykuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJtb3ZpZVwiPlxuICAgICAgICAgICAgPGltZyBjbGFzcz1cIm1vdmllXCIgc3JjPVwiaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzMwMC8ke3Jlc3BvbnNlLml0ZW1zW3JhbmRvbV0ucG9zdGVyX3BhdGh9XCIgYWx0PVwiXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiYnRuLW1vcmUtaW5mb1wiIGlkPVwiJHtyZXNwb25zZS5pdGVtc1tyYW5kb21dLmlkfVwiIHNyYz1cIiR7bW9yZUluZm99XCIgYWx0PVwiXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwibGlrZS1jb3VudGVyXCIgaWQ9XCJjb3VudGVyJHtyZXNwb25zZS5pdGVtc1tyYW5kb21dLmlkfVwiPjA8L3A+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJidG4tbGlrZVwiIGlkPVwibGlrZSR7cmVzcG9uc2UuaXRlbXNbcmFuZG9tXS5pZH1cIiBzcmM9XCIke2hlYXJ0fVwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+YDtcbiAgICAgIGdldE1vdmllQ291bnRlcignUmFuZG9tIE1vdmllIEdlbmVyYXRlZCcpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IHJlbmRlck1vdmllID0gKG1vdmllTGlzdCwgY2F0ZWdvcnkgPSAwKSA9PiB7XG4gIGNhdGVnb3J5ID0gcGFyc2VJbnQoY2F0ZWdvcnksIDEwKTtcbiAgY29uc3Qgc2VjdGlvbk1vdmllID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VjdGlvbi5tb3ZpZScpO1xuICBzZWN0aW9uTW92aWUuaW5uZXJIVE1MID0gJyc7XG4gIGxldCBhdXggPSAnJztcbiAgbGV0IGNhdGVnb3J5QXJyYXkgPSBtb3ZpZUxpc3Q7XG4gIGlmIChjYXRlZ29yeSAhPT0gMCkge1xuICAgIGNhdGVnb3J5QXJyYXkgPSBtb3ZpZUxpc3QuZmlsdGVyKChtb3ZpZSkgPT4gbW92aWUuZ2VucmVfaWRzLmluY2x1ZGVzKGNhdGVnb3J5KSk7XG4gIH1cbiAgY2F0ZWdvcnlBcnJheS5mb3JFYWNoKChtb3ZpZSkgPT4ge1xuICAgIGF1eCArPSBgPGRpdiBjbGFzcz1cIm1vdmllXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwibW92aWVcIiBzcmM9XCJodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93MzAwLyR7bW92aWUucG9zdGVyX3BhdGh9XCIgYWx0PVwiXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiYnRuLW1vcmUtaW5mb1wiIGlkPVwiJHttb3ZpZS5pZH1cIiBzcmM9XCIke21vcmVJbmZvfVwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cImxpa2UtY291bnRlclwiIGlkPVwiY291bnRlciR7bW92aWUuaWR9XCI+MDwvcD5cbiAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImJ0bi1saWtlXCIgaWQ9XCJsaWtlJHttb3ZpZS5pZH1cIiBzcmM9XCIke2hlYXJ0fVwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+YDtcbiAgfSk7XG4gIHJlbmRlckxpa2VzKCk7XG4gIHNlY3Rpb25Nb3ZpZS5pbm5lckhUTUwgPSBhdXg7XG4gIGFkZExpa2UoKTtcbiAgZ2V0TW92aWVDb3VudGVyKCdSZXRybyBNb3ZpZXMgRm91bmQnKTtcbiAgcmFuZG9tTW92aWUoKTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLW1vcmUtaW5mbycpLmZvckVhY2goKG1vdmllKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBtb3ZpZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGdldFNpbmdsZU1vdmllKG1vdmllLmlkKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGNvbW1lbnRQdXB1cEhhbmRsZXIoZGF0YSk7XG4gICAgICB9KTtcblxuICAgICAgZ2V0Q29tbWVudHMoKS50aGVuKChjb21tZW50cykgPT4ge1xuICAgICAgICBkaXNwbGF5Q29tbWVudChjb21tZW50cyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBzb3J0QnlDYXRlZ29yeSA9ICgpID0+IHtcbiAgY29uc3QgZm9ybVNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0uc2VhcmNoJyk7XG4gIGZvcm1TZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZ2V0TW92aWVMaXN0KCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIHJlbmRlck1vdmllKHJlc3BvbnNlLml0ZW1zLCBmb3JtU2VhcmNoLmVsZW1lbnRzLnNlbGVjdENhdGVnb3J5LnZhbHVlKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCByZW5kZXJNb3ZpZUxpc3QgPSAoKSA9PiB7XG4gIGdldE1vdmllTGlzdCgpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgcmVuZGVyTW92aWUocmVzcG9uc2UuaXRlbXMpO1xuICAgIHNvcnRCeUNhdGVnb3J5KCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyTW92aWVMaXN0O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHJlbmRlckxpc3QgZnJvbSAnLi9tb2R1bGVzL3JlbmRlci5qcyc7XG5cbnJlbmRlckxpc3QoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==