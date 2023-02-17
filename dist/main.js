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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n  font-family: \"Roboto\";\r\n  src: url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\") format(\"truetype\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Roboto Condensed\";\r\n  src: url(\"https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap\") format(\"truetype\");\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\nbody {\r\n  min-height: 100vh;\r\n}\r\n\r\n.overlay {\r\n  height: 100%;\r\n  width: 100%;\r\n  position: fixed;\r\n  background-color: black;\r\n  opacity: 0.5;\r\n  z-index: 10;\r\n  display: none;\r\n}\r\n\r\nheader {\r\n  background-color: #78081c;\r\n  width: 100%;\r\n}\r\n\r\nheader nav {\r\n  padding: 0 20px 0 20px;\r\n}\r\n\r\nheader nav ul.nav-item {\r\n  list-style-type: none;\r\n  display: flex;\r\n}\r\n\r\nheader nav ul.nav-item li.nav-item {\r\n  padding: 10px;\r\n}\r\n\r\nheader nav li.search {\r\n  align-self: center;\r\n}\r\n\r\nheader nav li.search section.search {\r\n  align-self: center;\r\n}\r\n\r\nheader nav li.search section.search form.search {\r\n  display: flex;\r\n  background-color: #78081c;\r\n  border: 2px solid #fff;\r\n  border-radius: 20px;\r\n  padding: 5px;\r\n}\r\n\r\nheader nav li.search section.search form.search select {\r\n  border: none;\r\n  background-color: #78081c;\r\n  color: #fff;\r\n  font-size: 1.3rem;\r\n  padding: 10px 0 10px 0;\r\n}\r\n\r\nheader nav li.search section.search form.search input[type=\"image\"] {\r\n  padding: 5px;\r\n}\r\n\r\nheader nav ul.nav-item li.nav-item img.nav-item {\r\n  width: 180px;\r\n}\r\n\r\nheader nav ul.nav-item li.nav-item a.nav-item {\r\n  text-decoration: none;\r\n  color: #fff;\r\n  font-size: 0.2rem;\r\n  font-weight: bold;\r\n  padding: 5px;\r\n}\r\n\r\nmain {\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\nmain section.counter {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-bottom: 20px;\r\n}\r\n\r\nmain section.counter h1 {\r\n  background-color: #0f4c5c;\r\n  color: #fb8b24;\r\n  padding: 10px;\r\n  border-radius: 10px;\r\n}\r\n\r\n/* display popup comments */\r\n.popup {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  z-index: 1000;\r\n  transform: translate(-50%, -50%);\r\n  background-color: white;\r\n  width: 80%;\r\n  height: 80%;\r\n  overflow-y: scroll;\r\n  box-shadow: rgba(0, 0, 0, 0.5) 0 54px 55px, rgba(0, 0, 0, 0.12) 0 -12px 30px, rgba(0, 0, 0, 0.12) 0 4px 6px, rgba(0, 0, 0, 0.17) 0 12px 13px, rgba(0, 0, 0, 0.09) 0 -3px 5px;\r\n}\r\n\r\n.popup::-webkit-scrollbar-track {\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n.popup::-webkit-scrollbar {\r\n  width: 6px;\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n.popup::-webkit-scrollbar-thumb {\r\n  background-color: #78081c;\r\n}\r\n\r\n.popup-details {\r\n  padding: 40px;\r\n}\r\n\r\n.close-popup-btn {\r\n  text-align: right;\r\n}\r\n\r\n.close-popup-btn button {\r\n  border: none;\r\n  background-color: transparent;\r\n  font-size: 20px;\r\n  margin: 5px 0;\r\n}\r\n\r\n.popup-header {\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 20px;\r\n}\r\n\r\n.popup-header-desc .title {\r\n  font-size: 50px;\r\n  color: #b10000;\r\n}\r\n\r\n.popup-header-desc .tagline {\r\n  font-size: 18px;\r\n  font-style: italic;\r\n  color: gray;\r\n}\r\n\r\n.more-info p {\r\n  font-weight: bold;\r\n}\r\n\r\n.genre {\r\n  display: flex;\r\n  gap: 10px;\r\n  font-weight: 600;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.genre p {\r\n  border: 1px solid red;\r\n  padding: 5px 11px;\r\n  border-radius: 31px;\r\n}\r\n\r\n.genre p:hover {\r\n  color: #b10000;\r\n}\r\n\r\n.release-date {\r\n  color: gray;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.more-info {\r\n  margin-top: 40px;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.more-info span {\r\n  margin-left: 20px;\r\n  background-color: goldenrod;\r\n  color: white;\r\n  padding: 5px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.overview {\r\n  width: 90%;\r\n  margin: 40px auto;\r\n  padding: 40px 0;\r\n  line-height: 1.5;\r\n  font-weight: bold;\r\n  border-top: 1px solid #d5d5d5;\r\n  border-bottom: 1px solid #d5d5d5;\r\n}\r\n\r\n.overview span {\r\n  font-weight: normal;\r\n  color: #242424;\r\n}\r\n\r\n.iframe-video {\r\n  width: 90%;\r\n  height: 415px;\r\n  margin: auto;\r\n}\r\n\r\n.display-comments {\r\n  margin: 40px auto;\r\n  width: 80%;\r\n}\r\n\r\n.comment-body {\r\n  border-bottom: 1px solid #d5d5d5;\r\n  margin: 20px 0;\r\n  margin-bottom: 20px;\r\n  padding: 10px;\r\n}\r\n\r\n.comment-body:last-child {\r\n  border-bottom: none;\r\n}\r\n\r\n.comment-name {\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  color: #78081c;\r\n}\r\n\r\n.comment-date {\r\n  font-size: 13px;\r\n  font-style: italic;\r\n  margin-bottom: 10px;\r\n  color: #777;\r\n}\r\n\r\n.comment-text {\r\n  color: gray;\r\n}\r\n\r\nform {\r\n  margin: 20px auto;\r\n  max-width: 400px;\r\n}\r\n\r\nform .form-group input {\r\n  display: block;\r\n  padding: 5px 10px;\r\n  margin: 10px 0;\r\n  width: 100%;\r\n  border-radius: 5px;\r\n}\r\n\r\n.form-group textarea {\r\n  display: block;\r\n  padding: 5px 10px;\r\n  margin: 10px 0;\r\n  width: 100%;\r\n  height: 100px;\r\n  border-radius: 5px;\r\n  resize: none;\r\n}\r\n\r\n.form-group .comment-btn {\r\n  padding: 10px 15px;\r\n  background-color: #78081c;\r\n  color: white;\r\n  border: none;\r\n  cursor: pointer;\r\n  border-radius: 5px;\r\n}\r\n\r\n.form-group .comment-btn:hover {\r\n  background-color: #520413;\r\n}\r\n\r\nmain section.movie {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n  gap: 50px;\r\n}\r\n\r\nmain section.movie div.movie {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  border-top-left-radius: 20px;\r\n  border-top-right-radius: 20px;\r\n  -webkit-box-shadow: 5px 5px 10px 5px #000;\r\n  box-shadow: 5px 5px 10px 5px #000;\r\n}\r\n\r\nmain section.movie div.movie:hover {\r\n  -webkit-box-shadow: 5px 5px 10px 5px #78081c;\r\n  box-shadow: 5px 5px 10px 5px #78081c;\r\n}\r\n\r\nmain section.movie div.movie img.movie {\r\n  border-top-left-radius: 20px;\r\n  border-top-right-radius: 20px;\r\n}\r\n\r\nmain section.movie div.movie div.button-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 5px 25px 5px 25px;\r\n  background-color: #78081c;\r\n}\r\n\r\nmain section.movie div.movie div.button-container p.like-counter {\r\n  margin-left: auto;\r\n  margin-right: 5px;\r\n  color: #fff;\r\n  font-weight: bold;\r\n}\r\n\r\nmain section.movie div.movie div.button-container img.btn-more-info,\r\nmain section.movie div.movie div.button-container img.btn-like {\r\n  transition: all 0.4s ease-in-out;\r\n}\r\n\r\nmain section.movie div.movie div.button-container img.btn-more-info:hover,\r\nmain section.movie div.movie div.button-container img.btn-like:hover {\r\n  transform: scale(1.2);\r\n  cursor: pointer;\r\n}\r\n\r\nfooter {\r\n  background-color: #78081c;\r\n  color: white;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding-top: 20px;\r\n}\r\n\r\n.footer-logo {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.footer-logo-img {\r\n  height: 5rem;\r\n  width: 10rem;\r\n}\r\n\r\n.copyright {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n/* Desktop */\r\n\r\n@media only screen and (min-width: 768px) {\r\n  header nav ul.nav-item {\r\n    justify-content: space-between;\r\n  }\r\n\r\n  header nav ul.nav-item div.nav-item {\r\n    display: flex;\r\n  }\r\n\r\n  header nav ul.nav-item li.nav-item a.nav-item {\r\n    font-size: 1.5rem;\r\n  }\r\n}\r\n\r\n/* Mobile */\r\n\r\n@media only screen and (max-width: 767px) {\r\n  header nav {\r\n    padding: 0 5px 0 5px;\r\n  }\r\n\r\n  header nav ul.nav-item {\r\n    justify-content: space-between;\r\n  }\r\n\r\n  header nav ul.nav-item div.nav-item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  header nav ul.nav-item li.nav-item a.nav-item {\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  .popup-details {\r\n    padding: 20px;\r\n  }\r\n\r\n  .popup-header {\r\n    flex-direction: column;\r\n    text-align: center;\r\n  }\r\n\r\n  .popup-header-desc .title {\r\n    font-size: 30px;\r\n  }\r\n\r\n  .genre {\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n  }\r\n\r\n  .more-info {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .iframe-video {\r\n    height: 250px;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n  font-family: \"Roboto\";\r\n  src: url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\") format(\"truetype\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"Roboto Condensed\";\r\n  src: url(\"https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap\") format(\"truetype\");\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\nbody {\r\n  min-height: 100vh;\r\n}\r\n\r\n.overlay {\r\n  height: 100%;\r\n  width: 100%;\r\n  position: fixed;\r\n  background-color: black;\r\n  opacity: 0.5;\r\n  z-index: 10;\r\n  display: none;\r\n}\r\n\r\nheader {\r\n  background-color: #78081c;\r\n  width: 100%;\r\n}\r\n\r\nheader nav {\r\n  padding: 0 20px 0 20px;\r\n}\r\n\r\nheader nav ul.nav-item {\r\n  list-style-type: none;\r\n  display: flex;\r\n}\r\n\r\nheader nav ul.nav-item li.nav-item {\r\n  padding: 10px;\r\n}\r\n\r\nheader nav li.search {\r\n  align-self: center;\r\n}\r\n\r\nheader nav li.search section.search {\r\n  align-self: center;\r\n}\r\n\r\nheader nav li.search section.search form.search {\r\n  display: flex;\r\n  background-color: #78081c;\r\n  border: 2px solid #fff;\r\n  border-radius: 20px;\r\n  padding: 5px;\r\n}\r\n\r\nheader nav li.search section.search form.search select {\r\n  border: none;\r\n  background-color: #78081c;\r\n  color: #fff;\r\n  font-size: 1.3rem;\r\n  padding: 10px 0 10px 0;\r\n}\r\n\r\nheader nav li.search section.search form.search input[type=\"image\"] {\r\n  padding: 5px;\r\n}\r\n\r\nheader nav ul.nav-item li.nav-item img.nav-item {\r\n  width: 180px;\r\n}\r\n\r\nheader nav ul.nav-item li.nav-item a.nav-item {\r\n  text-decoration: none;\r\n  color: #fff;\r\n  font-size: 0.2rem;\r\n  font-weight: bold;\r\n  padding: 5px;\r\n}\r\n\r\nmain {\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\nmain section.counter {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-bottom: 20px;\r\n}\r\n\r\nmain section.counter h1 {\r\n  background-color: #0f4c5c;\r\n  color: #fb8b24;\r\n  padding: 10px;\r\n  border-radius: 10px;\r\n}\r\n\r\n/* display popup comments */\r\n.popup {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  z-index: 1000;\r\n  transform: translate(-50%, -50%);\r\n  background-color: white;\r\n  width: 80%;\r\n  height: 80%;\r\n  overflow-y: scroll;\r\n  box-shadow: rgba(0, 0, 0, 0.5) 0 54px 55px, rgba(0, 0, 0, 0.12) 0 -12px 30px, rgba(0, 0, 0, 0.12) 0 4px 6px, rgba(0, 0, 0, 0.17) 0 12px 13px, rgba(0, 0, 0, 0.09) 0 -3px 5px;\r\n}\r\n\r\n.popup::-webkit-scrollbar-track {\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n.popup::-webkit-scrollbar {\r\n  width: 6px;\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n.popup::-webkit-scrollbar-thumb {\r\n  background-color: #78081c;\r\n}\r\n\r\n.popup-details {\r\n  padding: 40px;\r\n}\r\n\r\n.close-popup-btn {\r\n  text-align: right;\r\n}\r\n\r\n.close-popup-btn button {\r\n  border: none;\r\n  background-color: transparent;\r\n  font-size: 20px;\r\n  margin: 5px 0;\r\n}\r\n\r\n.popup-header {\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 20px;\r\n}\r\n\r\n.popup-header-desc .title {\r\n  font-size: 50px;\r\n  color: #b10000;\r\n}\r\n\r\n.popup-header-desc .tagline {\r\n  font-size: 18px;\r\n  font-style: italic;\r\n  color: gray;\r\n}\r\n\r\n.more-info p {\r\n  font-weight: bold;\r\n}\r\n\r\n.genre {\r\n  display: flex;\r\n  gap: 10px;\r\n  font-weight: 600;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.genre p {\r\n  border: 1px solid red;\r\n  padding: 5px 11px;\r\n  border-radius: 31px;\r\n}\r\n\r\n.genre p:hover {\r\n  color: #b10000;\r\n}\r\n\r\n.release-date {\r\n  color: gray;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.more-info {\r\n  margin-top: 40px;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.more-info span {\r\n  margin-left: 20px;\r\n  background-color: goldenrod;\r\n  color: white;\r\n  padding: 5px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.overview {\r\n  width: 90%;\r\n  margin: 40px auto;\r\n  padding: 40px 0;\r\n  line-height: 1.5;\r\n  font-weight: bold;\r\n  border-top: 1px solid #d5d5d5;\r\n  border-bottom: 1px solid #d5d5d5;\r\n}\r\n\r\n.overview span {\r\n  font-weight: normal;\r\n  color: #242424;\r\n}\r\n\r\n.iframe-video {\r\n  width: 90%;\r\n  height: 415px;\r\n  margin: auto;\r\n}\r\n\r\n.display-comments {\r\n  margin: 40px auto;\r\n  width: 80%;\r\n}\r\n\r\n.comment-body {\r\n  border-bottom: 1px solid #d5d5d5;\r\n  margin: 20px 0;\r\n  margin-bottom: 20px;\r\n  padding: 10px;\r\n}\r\n\r\n.comment-body:last-child {\r\n  border-bottom: none;\r\n}\r\n\r\n.comment-name {\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  color: #78081c;\r\n}\r\n\r\n.comment-date {\r\n  font-size: 13px;\r\n  font-style: italic;\r\n  margin-bottom: 10px;\r\n  color: #777;\r\n}\r\n\r\n.comment-text {\r\n  color: gray;\r\n}\r\n\r\nform {\r\n  margin: 20px auto;\r\n  max-width: 400px;\r\n}\r\n\r\nform .form-group input {\r\n  display: block;\r\n  padding: 5px 10px;\r\n  margin: 10px 0;\r\n  width: 100%;\r\n  border-radius: 5px;\r\n}\r\n\r\n.form-group textarea {\r\n  display: block;\r\n  padding: 5px 10px;\r\n  margin: 10px 0;\r\n  width: 100%;\r\n  height: 100px;\r\n  border-radius: 5px;\r\n  resize: none;\r\n}\r\n\r\n.form-group .comment-btn {\r\n  padding: 10px 15px;\r\n  background-color: #78081c;\r\n  color: white;\r\n  border: none;\r\n  cursor: pointer;\r\n  border-radius: 5px;\r\n}\r\n\r\n.form-group .comment-btn:hover {\r\n  background-color: #520413;\r\n}\r\n\r\nmain section.movie {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n  gap: 50px;\r\n}\r\n\r\nmain section.movie div.movie {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  border-top-left-radius: 20px;\r\n  border-top-right-radius: 20px;\r\n  -webkit-box-shadow: 5px 5px 10px 5px #000;\r\n  box-shadow: 5px 5px 10px 5px #000;\r\n}\r\n\r\nmain section.movie div.movie:hover {\r\n  -webkit-box-shadow: 5px 5px 10px 5px #78081c;\r\n  box-shadow: 5px 5px 10px 5px #78081c;\r\n}\r\n\r\nmain section.movie div.movie img.movie {\r\n  border-top-left-radius: 20px;\r\n  border-top-right-radius: 20px;\r\n}\r\n\r\nmain section.movie div.movie div.button-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 5px 25px 5px 25px;\r\n  background-color: #78081c;\r\n}\r\n\r\nmain section.movie div.movie div.button-container p.like-counter {\r\n  margin-left: auto;\r\n  margin-right: 5px;\r\n  color: #fff;\r\n  font-weight: bold;\r\n}\r\n\r\nmain section.movie div.movie div.button-container img.btn-more-info,\r\nmain section.movie div.movie div.button-container img.btn-like {\r\n  transition: all 0.4s ease-in-out;\r\n}\r\n\r\nmain section.movie div.movie div.button-container img.btn-more-info:hover,\r\nmain section.movie div.movie div.button-container img.btn-like:hover {\r\n  transform: scale(1.2);\r\n  cursor: pointer;\r\n}\r\n\r\nfooter {\r\n  background-color: #78081c;\r\n  color: white;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding-top: 20px;\r\n}\r\n\r\n.footer-logo {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.footer-logo-img {\r\n  height: 5rem;\r\n  width: 10rem;\r\n}\r\n\r\n.copyright {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n/* Desktop */\r\n\r\n@media only screen and (min-width: 768px) {\r\n  header nav ul.nav-item {\r\n    justify-content: space-between;\r\n  }\r\n\r\n  header nav ul.nav-item div.nav-item {\r\n    display: flex;\r\n  }\r\n\r\n  header nav ul.nav-item li.nav-item a.nav-item {\r\n    font-size: 1.5rem;\r\n  }\r\n}\r\n\r\n/* Mobile */\r\n\r\n@media only screen and (max-width: 767px) {\r\n  header nav {\r\n    padding: 0 5px 0 5px;\r\n  }\r\n\r\n  header nav ul.nav-item {\r\n    justify-content: space-between;\r\n  }\r\n\r\n  header nav ul.nav-item div.nav-item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  header nav ul.nav-item li.nav-item a.nav-item {\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  .popup-details {\r\n    padding: 20px;\r\n  }\r\n\r\n  .popup-header {\r\n    flex-direction: column;\r\n    text-align: center;\r\n  }\r\n\r\n  .popup-header-desc .title {\r\n    font-size: 30px;\r\n  }\r\n\r\n  .genre {\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n  }\r\n\r\n  .more-info {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .iframe-video {\r\n    height: 250px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
const siteId = 'EdY1KvNCp0OLaKn2cHk8';



/***/ }),

/***/ "./src/modules/comment-counter.js":
/*!****************************************!*\
  !*** ./src/modules/comment-counter.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _endPointAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./endPointAPI.js */ "./src/modules/endPointAPI.js");


const commentCounter = async (id) => (0,_endPointAPI_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(id).then((comments) => comments.length);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCounter);


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
/* harmony export */   "getTrailer": () => (/* binding */ getTrailer),
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

const getTrailer = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${_apiKey_js__WEBPACK_IMPORTED_MODULE_0__.apiKey}&language=en-US`;
  const response = await fetch(url);
  const trailers = await response.json();
  return trailers;
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
/* harmony import */ var _endPointAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./endPointAPI.js */ "./src/modules/endPointAPI.js");


const getMovieCounter = async (category) => {
  const movieList = await (0,_endPointAPI_js__WEBPACK_IMPORTED_MODULE_0__.getMovieList)();
  let counter = movieList.items;
  if (category !== 0) {
    counter = movieList.items.filter((movie) => movie.genre_ids.includes(category));
  }
  return counter.length;
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
/* harmony export */   "commentPupupHandler": () => (/* binding */ commentPupupHandler),
/* harmony export */   "displayComment": () => (/* binding */ displayComment)
/* harmony export */ });
/* harmony import */ var _comment_counter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comment-counter.js */ "./src/modules/comment-counter.js");
/* harmony import */ var _endPointAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endPointAPI.js */ "./src/modules/endPointAPI.js");



const displayComment = async (comments) => {
  let aux = '';
  if (comments.error) {
    return [];
  }
  for (let i = 0; i < comments.length; i += 1) {
    const comment = comments[i];
    aux += `
      <div class="comment-body">
      <p class="comment-name">${comment.username}</p>
      <p class="comment-date">${comment.creation_date}</p>
      <p class="comment-text">${comment.comment}</p>
      </div>
      `;
  }

  document.querySelector('.comments').innerHTML = aux;
  return aux;
};
const displayCommentCounter = async (counter) => {
  if (counter) {
    document.querySelector(
      '.comment-counter',
    ).innerHTML = `Comments (${counter}) `;
  } else {
    document.querySelector('.comment-counter').innerHTML = 'Comments 0 ';
  }
};

const addComment = async (id) => {
  (0,_endPointAPI_js__WEBPACK_IMPORTED_MODULE_1__.getComments)(id).then((comments) => {
    displayComment(comments);
  });

  document.querySelector('#form').addEventListener('submit', async (e) => {
    const comment = document.querySelector('#comment-textarea');
    e.preventDefault();
    e.stopImmediatePropagation();
    e.stopPropagation();
    comment.focus();
    const username = document.querySelector('input[name="username').value;
    const comments = {
      item_id: id,
      username: username.toUpperCase(),
      comment: comment.value,
    };

    await (0,_endPointAPI_js__WEBPACK_IMPORTED_MODULE_1__.setComments)(comments);

    document.querySelector('input[name="username').value = '';
    document.querySelector('#comment-textarea').value = '';

    (0,_endPointAPI_js__WEBPACK_IMPORTED_MODULE_1__.getComments)(id).then((comments) => {
      displayComment(comments);
    });

    const commentItem = await (0,_comment_counter_js__WEBPACK_IMPORTED_MODULE_0__["default"])(id).then((res) => res);

    await displayCommentCounter(commentItem);
  });
};

const commentPupupHandler = async (data) => {
  const key = await (0,_endPointAPI_js__WEBPACK_IMPORTED_MODULE_1__.getTrailer)(data.id).then((data) => data.results[0].key);

  const genres = data.genres.map((gen) => gen.name);

  let aux = '';
  genres.forEach((genre) => {
    aux += `
      <p>${genre}</p>
    `;
  });

  document.getElementById('popup').style.display = 'block';
  document.querySelector('.overlay').style.display = 'block';
  document.getElementById('popup-details').innerHTML = `
      <div class="close-popup-btn">
      <button onclick="closePopup()">&#x2715</button>

      </div>
      <div class="popup-contents">
        <div class="popup-comment">
          <div class="popup-header">
            <img class="popup-img" src="https://image.tmdb.org/t/p/w300/${data.poster_path}" alt="movie image">
            <div class="popup-header-desc">
              <h2 class="title">${data.title}</h2>
              <p class="tagline">${data.tagline}</p>
              <p class="release-date">Release date: ${data.release_date}</p>
              <div class="genre"></div>
              <div class="more-info">
                <p>IMDb: <span>   <img src="http://simpleicon.com/wp-content/uploads/star.svg" width="12px" alt="start svg">
                ${data.vote_average}</span></p>
                <p>${data.vote_count} votes</p>
              </div>
            </div>
            
          </div>
          
          <p class="overview"> Movie Plot: <span>${data.overview}</span></p>
          
          <div class="iframe-video">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          
          <div class="display-comments">
            <h3 class="comment-counter"></h3>
            <div class="comments"></div>
          </div>
          
          <form class="add-comment" id="form">
            <h3>Add a comment</h3>
            <div class="form-group">
            <input type="text" placeholder="Your name" name="username" required/>
            <textarea id="comment-textarea" type="text" placeholder="Your insights" name="comment" required></textarea>
            <button class="comment-btn">Submit</button></div>
            
          </form>
        </div>
      </div>`;

  document.querySelector('.genre').innerHTML = aux;
  addComment(data.id);

  const commentItem = await (0,_comment_counter_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data.id).then((res) => res);
  await displayCommentCounter(commentItem);
};

window.closePopup = () => {
  document.getElementById('popup').style.display = 'none';
  document.querySelector('.overlay').style.display = 'none';
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
      document.querySelector('section.movie').innerHTML = '';
      document.querySelector('section.movie').innerHTML = `<div class="movie">
            <img class="movie" src="https://image.tmdb.org/t/p/w300/${response.items[random].poster_path}" alt="">
            <div class="button-container">
              <img class="btn-more-info" id="${response.items[random].id}" src="${_assets_images_more_info_png__WEBPACK_IMPORTED_MODULE_1__}" alt="">
              <p class="like-counter" id="counter${response.items[random].id}">0</p>
              <img class="btn-like" id="like${response.items[random].id}" src="${_assets_images_heart_png__WEBPACK_IMPORTED_MODULE_0__}" alt="">
            </div>
          </div>`;
      document.querySelector('h1').textContent = '📽️ 1 Random Movies Generated 😁';
    });
  });
};

const renderMovie = async (movieList, category = 0) => {
  const sectionMovie = document.querySelector('section.movie');
  let aux = '';
  let categoryArray = movieList;
  category = parseInt(category, 10);
  sectionMovie.innerHTML = '';
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
  const counter = await ((0,_movieCounter_js__WEBPACK_IMPORTED_MODULE_4__["default"])(category));
  document.querySelector('h1').textContent = `📽️ ${counter} Retro Movies Found 😁`;
  randomMovie();

  document.querySelectorAll('.btn-more-info').forEach((movie) => {
    document.getElementById('popup').style.display = 'none';
    movie.addEventListener('click', () => {
      (0,_endPointAPI_js__WEBPACK_IMPORTED_MODULE_2__.getSingleMovie)(movie.id).then((data) => {
        (0,_popup_comments_js__WEBPACK_IMPORTED_MODULE_3__.commentPupupHandler)(data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxV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QUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sK0RBQWM7QUFDcEIsUUFBUSx1RUFBbUI7QUFDM0IsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw2REFBWTtBQUNoQjtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRSw2REFBWTtBQUNkO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGlFQUFlLGVBQWUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkgvQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUN3Qjs7QUFFN0MsOERBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrNS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjazUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2s1Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjazUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VicGFjazUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjazUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2s1Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2s1Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2s1Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjazUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrNS8uL3NyYy9tb2R1bGVzL2FwaUtleS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrNS8uL3NyYy9tb2R1bGVzL2NvbW1lbnQtY291bnRlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrNS8uL3NyYy9tb2R1bGVzL2VuZFBvaW50QVBJLmpzIiwid2VicGFjazovL3dlYnBhY2s1Ly4vc3JjL21vZHVsZXMvbW92aWVDb3VudGVyLmpzIiwid2VicGFjazovL3dlYnBhY2s1Ly4vc3JjL21vZHVsZXMvcG9wdXAtY29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjazUvLi9zcmMvbW9kdWxlcy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjazUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjazUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjazUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2s1L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VicGFjazUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrNS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2s1L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYnBhY2s1L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWJwYWNrNS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcclxcbiAgc3JjOiB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXBcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG8gQ29uZGVuc2VkXFxcIjtcXHJcXG4gIHNyYzogdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bytDb25kZW5zZWQ6aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNzAwOzEsMzAwOzEsNDAwOzEsNzAwJmRpc3BsYXk9c3dhcFxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJsYXkge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIG9wYWNpdHk6IDAuNTtcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3ODA4MWM7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiB7XFxyXFxuICBwYWRkaW5nOiAwIDIwcHggMCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHVsLm5hdi1pdGVtIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgdWwubmF2LWl0ZW0gbGkubmF2LWl0ZW0ge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiBsaS5zZWFyY2gge1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IGxpLnNlYXJjaCBzZWN0aW9uLnNlYXJjaCB7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgbGkuc2VhcmNoIHNlY3Rpb24uc2VhcmNoIGZvcm0uc2VhcmNoIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzgwODFjO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgbGkuc2VhcmNoIHNlY3Rpb24uc2VhcmNoIGZvcm0uc2VhcmNoIHNlbGVjdCB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzgwODFjO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDA7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgbGkuc2VhcmNoIHNlY3Rpb24uc2VhcmNoIGZvcm0uc2VhcmNoIGlucHV0W3R5cGU9XFxcImltYWdlXFxcIl0ge1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHVsLm5hdi1pdGVtIGxpLm5hdi1pdGVtIGltZy5uYXYtaXRlbSB7XFxyXFxuICB3aWR0aDogMTgwcHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgdWwubmF2LWl0ZW0gbGkubmF2LWl0ZW0gYS5uYXYtaXRlbSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtc2l6ZTogMC4ycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbm1haW4gc2VjdGlvbi5jb3VudGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbm1haW4gc2VjdGlvbi5jb3VudGVyIGgxIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZjRjNWM7XFxyXFxuICBjb2xvcjogI2ZiOGIyNDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBkaXNwbGF5IHBvcHVwIGNvbW1lbnRzICovXFxyXFxuLnBvcHVwIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgei1pbmRleDogMTAwMDtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgaGVpZ2h0OiA4MCU7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNSkgMCA1NHB4IDU1cHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMCAtMTJweCAzMHB4LCByZ2JhKDAsIDAsIDAsIDAuMTIpIDAgNHB4IDZweCwgcmdiYSgwLCAwLCAwLCAwLjE3KSAwIDEycHggMTNweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwIC0zcHggNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIHdpZHRoOiA2cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3ODA4MWM7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1kZXRhaWxzIHtcXHJcXG4gIHBhZGRpbmc6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1wb3B1cC1idG4ge1xcclxcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1wb3B1cC1idG4gYnV0dG9uIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgbWFyZ2luOiA1cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWhlYWRlci1kZXNjIC50aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDUwcHg7XFxyXFxuICBjb2xvcjogI2IxMDAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWhlYWRlci1kZXNjIC50YWdsaW5lIHtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGNvbG9yOiBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9yZS1pbmZvIHAge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5nZW5yZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLmdlbnJlIHAge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcclxcbiAgcGFkZGluZzogNXB4IDExcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2VucmUgcDpob3ZlciB7XFxyXFxuICBjb2xvcjogI2IxMDAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlbGVhc2UtZGF0ZSB7XFxyXFxuICBjb2xvcjogZ3JheTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5tb3JlLWluZm8ge1xcclxcbiAgbWFyZ2luLXRvcDogNDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9yZS1pbmZvIHNwYW4ge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkZW5yb2Q7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5vdmVydmlldyB7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgbWFyZ2luOiA0MHB4IGF1dG87XFxyXFxuICBwYWRkaW5nOiA0MHB4IDA7XFxyXFxuICBsaW5lLWhlaWdodDogMS41O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2Q1ZDVkNTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDVkNWQ1O1xcclxcbn1cXHJcXG5cXHJcXG4ub3ZlcnZpZXcgc3BhbiB7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgY29sb3I6ICMyNDI0MjQ7XFxyXFxufVxcclxcblxcclxcbi5pZnJhbWUtdmlkZW8ge1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGhlaWdodDogNDE1cHg7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5kaXNwbGF5LWNvbW1lbnRzIHtcXHJcXG4gIG1hcmdpbjogNDBweCBhdXRvO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtYm9keSB7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q1ZDVkNTtcXHJcXG4gIG1hcmdpbjogMjBweCAwO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWJvZHk6bGFzdC1jaGlsZCB7XFxyXFxuICBib3JkZXItYm90dG9tOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1uYW1lIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgY29sb3I6ICM3ODA4MWM7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWRhdGUge1xcclxcbiAgZm9udC1zaXplOiAxM3B4O1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIGNvbG9yOiAjNzc3O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC10ZXh0IHtcXHJcXG4gIGNvbG9yOiBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIG1hcmdpbjogMjBweCBhdXRvO1xcclxcbiAgbWF4LXdpZHRoOiA0MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSAuZm9ybS1ncm91cCBpbnB1dCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcbiAgbWFyZ2luOiAxMHB4IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tZ3JvdXAgdGV4dGFyZWEge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG4gIG1hcmdpbjogMTBweCAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1ncm91cCAuY29tbWVudC1idG4ge1xcclxcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc4MDgxYztcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tZ3JvdXAgLmNvbW1lbnQtYnRuOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MjA0MTM7XFxyXFxufVxcclxcblxcclxcbm1haW4gc2VjdGlvbi5tb3ZpZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGdhcDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLm1vdmllIGRpdi5tb3ZpZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xcclxcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDVweCA1cHggMTBweCA1cHggIzAwMDtcXHJcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCA1cHggIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLm1vdmllIGRpdi5tb3ZpZTpob3ZlciB7XFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDVweCA1cHggMTBweCA1cHggIzc4MDgxYztcXHJcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCA1cHggIzc4MDgxYztcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLm1vdmllIGRpdi5tb3ZpZSBpbWcubW92aWUge1xcclxcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcXHJcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24ubW92aWUgZGl2Lm1vdmllIGRpdi5idXR0b24tY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiA1cHggMjVweCA1cHggMjVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3ODA4MWM7XFxyXFxufVxcclxcblxcclxcbm1haW4gc2VjdGlvbi5tb3ZpZSBkaXYubW92aWUgZGl2LmJ1dHRvbi1jb250YWluZXIgcC5saWtlLWNvdW50ZXIge1xcclxcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbm1haW4gc2VjdGlvbi5tb3ZpZSBkaXYubW92aWUgZGl2LmJ1dHRvbi1jb250YWluZXIgaW1nLmJ0bi1tb3JlLWluZm8sXFxyXFxubWFpbiBzZWN0aW9uLm1vdmllIGRpdi5tb3ZpZSBkaXYuYnV0dG9uLWNvbnRhaW5lciBpbWcuYnRuLWxpa2Uge1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbm1haW4gc2VjdGlvbi5tb3ZpZSBkaXYubW92aWUgZGl2LmJ1dHRvbi1jb250YWluZXIgaW1nLmJ0bi1tb3JlLWluZm86aG92ZXIsXFxyXFxubWFpbiBzZWN0aW9uLm1vdmllIGRpdi5tb3ZpZSBkaXYuYnV0dG9uLWNvbnRhaW5lciBpbWcuYnRuLWxpa2U6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc4MDgxYztcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nLXRvcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1sb2dvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1sb2dvLWltZyB7XFxyXFxuICBoZWlnaHQ6IDVyZW07XFxyXFxuICB3aWR0aDogMTByZW07XFxyXFxufVxcclxcblxcclxcbi5jb3B5cmlnaHQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBEZXNrdG9wICovXFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgaGVhZGVyIG5hdiB1bC5uYXYtaXRlbSB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGhlYWRlciBuYXYgdWwubmF2LWl0ZW0gZGl2Lm5hdi1pdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGhlYWRlciBuYXYgdWwubmF2LWl0ZW0gbGkubmF2LWl0ZW0gYS5uYXYtaXRlbSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiBNb2JpbGUgKi9cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxyXFxuICBoZWFkZXIgbmF2IHtcXHJcXG4gICAgcGFkZGluZzogMCA1cHggMCA1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoZWFkZXIgbmF2IHVsLm5hdi1pdGVtIHtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgfVxcclxcblxcclxcbiAgaGVhZGVyIG5hdiB1bC5uYXYtaXRlbSBkaXYubmF2LWl0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgaGVhZGVyIG5hdiB1bC5uYXYtaXRlbSBsaS5uYXYtaXRlbSBhLm5hdi1pdGVtIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucG9wdXAtZGV0YWlscyB7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucG9wdXAtaGVhZGVyIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBvcHVwLWhlYWRlci1kZXNjIC50aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5nZW5yZSB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW9yZS1pbmZvIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5pZnJhbWUtdmlkZW8ge1xcclxcbiAgICBoZWlnaHQ6IDI1MHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLDZLQUE2SztBQUMvSzs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixtSkFBbUo7QUFDcko7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FB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LGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUEsWUFBWTs7QUFFWjtFQUNFO0lBQ0UsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUEsV0FBVzs7QUFFWDtFQUNFO0lBQ0Usb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixlQUFlO0VBQ2pCOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsYUFBYTtFQUNmO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCI7XFxyXFxuICBzcmM6IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcFxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJvYm90byBDb25kZW5zZWRcXFwiO1xcclxcbiAgc3JjOiB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK0NvbmRlbnNlZDppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw3MDA7MSwzMDA7MSw0MDA7MSw3MDAmZGlzcGxheT1zd2FwXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4ub3ZlcmxheSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgb3BhY2l0eTogMC41O1xcclxcbiAgei1pbmRleDogMTA7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc4MDgxYztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHtcXHJcXG4gIHBhZGRpbmc6IDAgMjBweCAwIDIwcHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgdWwubmF2LWl0ZW0ge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiB1bC5uYXYtaXRlbSBsaS5uYXYtaXRlbSB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IGxpLnNlYXJjaCB7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgbGkuc2VhcmNoIHNlY3Rpb24uc2VhcmNoIHtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiBsaS5zZWFyY2ggc2VjdGlvbi5zZWFyY2ggZm9ybS5zZWFyY2gge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3ODA4MWM7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiBsaS5zZWFyY2ggc2VjdGlvbi5zZWFyY2ggZm9ybS5zZWFyY2ggc2VsZWN0IHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3ODA4MWM7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgcGFkZGluZzogMTBweCAwIDEwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiBsaS5zZWFyY2ggc2VjdGlvbi5zZWFyY2ggZm9ybS5zZWFyY2ggaW5wdXRbdHlwZT1cXFwiaW1hZ2VcXFwiXSB7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgdWwubmF2LWl0ZW0gbGkubmF2LWl0ZW0gaW1nLm5hdi1pdGVtIHtcXHJcXG4gIHdpZHRoOiAxODBweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiB1bC5uYXYtaXRlbSBsaS5uYXYtaXRlbSBhLm5hdi1pdGVtIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC1zaXplOiAwLjJyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLmNvdW50ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLmNvdW50ZXIgaDEge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmNGM1YztcXHJcXG4gIGNvbG9yOiAjZmI4YjI0O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIGRpc3BsYXkgcG9wdXAgY29tbWVudHMgKi9cXHJcXG4ucG9wdXAge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB6LWluZGV4OiAxMDAwO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBoZWlnaHQ6IDgwJTtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC41KSAwIDU0cHggNTVweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwIC0xMnB4IDMwcHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMCA0cHggNnB4LCByZ2JhKDAsIDAsIDAsIDAuMTcpIDAgMTJweCAxM3B4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDAgLTNweCA1cHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgd2lkdGg6IDZweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc4MDgxYztcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWRldGFpbHMge1xcclxcbiAgcGFkZGluZzogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLXBvcHVwLWJ0biB7XFxyXFxuICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLXBvcHVwLWJ0biBidXR0b24ge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBtYXJnaW46IDVweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtaGVhZGVyLWRlc2MgLnRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogNTBweDtcXHJcXG4gIGNvbG9yOiAjYjEwMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtaGVhZGVyLWRlc2MgLnRhZ2xpbmUge1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgY29sb3I6IGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5tb3JlLWluZm8gcCB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmdlbnJlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2VucmUgcCB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxyXFxuICBwYWRkaW5nOiA1cHggMTFweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDMxcHg7XFxyXFxufVxcclxcblxcclxcbi5nZW5yZSBwOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjYjEwMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVsZWFzZS1kYXRlIHtcXHJcXG4gIGNvbG9yOiBncmF5O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vcmUtaW5mbyB7XFxyXFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5tb3JlLWluZm8gc3BhbiB7XFxyXFxuICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdvbGRlbnJvZDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJ2aWV3IHtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBtYXJnaW46IDQwcHggYXV0bztcXHJcXG4gIHBhZGRpbmc6IDQwcHggMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDVkNWQ1O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkNWQ1ZDU7XFxyXFxufVxcclxcblxcclxcbi5vdmVydmlldyBzcGFuIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICBjb2xvcjogIzI0MjQyNDtcXHJcXG59XFxyXFxuXFxyXFxuLmlmcmFtZS12aWRlbyB7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgaGVpZ2h0OiA0MTVweDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXktY29tbWVudHMge1xcclxcbiAgbWFyZ2luOiA0MHB4IGF1dG87XFxyXFxuICB3aWR0aDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1ib2R5IHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDVkNWQ1O1xcclxcbiAgbWFyZ2luOiAyMHB4IDA7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtYm9keTpsYXN0LWNoaWxkIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LW5hbWUge1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjb2xvcjogIzc4MDgxYztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtZGF0ZSB7XFxyXFxuICBmb250LXNpemU6IDEzcHg7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgY29sb3I6ICM3Nzc7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LXRleHQge1xcclxcbiAgY29sb3I6IGdyYXk7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxyXFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIC5mb3JtLWdyb3VwIGlucHV0IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICBtYXJnaW46IDEwcHggMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1ncm91cCB0ZXh0YXJlYSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcbiAgbWFyZ2luOiAxMHB4IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICByZXNpemU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWdyb3VwIC5jb21tZW50LWJ0biB7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzgwODFjO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1ncm91cCAuY29tbWVudC1idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyMDQxMztcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLm1vdmllIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgZ2FwOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24ubW92aWUgZGl2Lm1vdmllIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XFxyXFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IDVweCAjMDAwO1xcclxcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IDVweCAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24ubW92aWUgZGl2Lm1vdmllOmhvdmVyIHtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IDVweCAjNzgwODFjO1xcclxcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IDVweCAjNzgwODFjO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24ubW92aWUgZGl2Lm1vdmllIGltZy5tb3ZpZSB7XFxyXFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xcclxcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbm1haW4gc2VjdGlvbi5tb3ZpZSBkaXYubW92aWUgZGl2LmJ1dHRvbi1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDVweCAyNXB4IDVweCAyNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc4MDgxYztcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLm1vdmllIGRpdi5tb3ZpZSBkaXYuYnV0dG9uLWNvbnRhaW5lciBwLmxpa2UtY291bnRlciB7XFxyXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLm1vdmllIGRpdi5tb3ZpZSBkaXYuYnV0dG9uLWNvbnRhaW5lciBpbWcuYnRuLW1vcmUtaW5mbyxcXHJcXG5tYWluIHNlY3Rpb24ubW92aWUgZGl2Lm1vdmllIGRpdi5idXR0b24tY29udGFpbmVyIGltZy5idG4tbGlrZSB7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLm1vdmllIGRpdi5tb3ZpZSBkaXYuYnV0dG9uLWNvbnRhaW5lciBpbWcuYnRuLW1vcmUtaW5mbzpob3ZlcixcXHJcXG5tYWluIHNlY3Rpb24ubW92aWUgZGl2Lm1vdmllIGRpdi5idXR0b24tY29udGFpbmVyIGltZy5idG4tbGlrZTpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzgwODFjO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWxvZ28ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWxvZ28taW1nIHtcXHJcXG4gIGhlaWdodDogNXJlbTtcXHJcXG4gIHdpZHRoOiAxMHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvcHlyaWdodCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIERlc2t0b3AgKi9cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICBoZWFkZXIgbmF2IHVsLm5hdi1pdGVtIHtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgfVxcclxcblxcclxcbiAgaGVhZGVyIG5hdiB1bC5uYXYtaXRlbSBkaXYubmF2LWl0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgfVxcclxcblxcclxcbiAgaGVhZGVyIG5hdiB1bC5uYXYtaXRlbSBsaS5uYXYtaXRlbSBhLm5hdi1pdGVtIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qIE1vYmlsZSAqL1xcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXHJcXG4gIGhlYWRlciBuYXYge1xcclxcbiAgICBwYWRkaW5nOiAwIDVweCAwIDVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGhlYWRlciBuYXYgdWwubmF2LWl0ZW0ge1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoZWFkZXIgbmF2IHVsLm5hdi1pdGVtIGRpdi5uYXYtaXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoZWFkZXIgbmF2IHVsLm5hdi1pdGVtIGxpLm5hdi1pdGVtIGEubmF2LWl0ZW0ge1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb3B1cC1kZXRhaWxzIHtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb3B1cC1oZWFkZXIge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucG9wdXAtaGVhZGVyLWRlc2MgLnRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmdlbnJlIHtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb3JlLWluZm8ge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmlmcmFtZS12aWRlbyB7XFxyXFxuICAgIGhlaWdodDogMjUwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGFwaUtleSA9ICcwOGRjY2U5ZjRmM2U4ODFjNGYyMTRiMjAyMGI4MzRkMic7XHJcbmNvbnN0IHNpdGVJZCA9ICdFZFkxS3ZOQ3AwT0xhS24yY0hrOCc7XHJcbmV4cG9ydCB7IGFwaUtleSwgc2l0ZUlkIH07XHJcbiIsImltcG9ydCB7IGdldENvbW1lbnRzIH0gZnJvbSAnLi9lbmRQb2ludEFQSS5qcyc7XHJcblxyXG5jb25zdCBjb21tZW50Q291bnRlciA9IGFzeW5jIChpZCkgPT4gZ2V0Q29tbWVudHMoaWQpLnRoZW4oKGNvbW1lbnRzKSA9PiBjb21tZW50cy5sZW5ndGgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tbWVudENvdW50ZXI7XHJcbiIsImltcG9ydCB7IGFwaUtleSwgc2l0ZUlkIH0gZnJvbSAnLi9hcGlLZXkuanMnO1xyXG5cclxuY29uc3QgZ2V0TW92aWVMaXN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL2xpc3QvODI0MDMyNj9hcGlfa2V5PSR7YXBpS2V5fSZsYW5ndWFnZT1lbi1VU2A7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gIGNvbnN0IG1vdmllTGlzdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICByZXR1cm4gbW92aWVMaXN0O1xyXG59O1xyXG5cclxuY29uc3QgZ2V0U2luZ2xlTW92aWUgPSBhc3luYyAoaWQpID0+IHtcclxuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS8ke2lkfT9hcGlfa2V5PSR7YXBpS2V5fSZsYW5ndWFnZT1lbi1VU2A7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gIGNvbnN0IHNpbmdsZU1vdmllID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIHJldHVybiBzaW5nbGVNb3ZpZTtcclxufTtcclxuXHJcbmNvbnN0IGdldENvbW1lbnRzID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyR7c2l0ZUlkfS9jb21tZW50cz9pdGVtX2lkPSR7aWR9YDtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgY29uc3QgY29tbWVudHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgcmV0dXJuIGNvbW1lbnRzO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0VHJhaWxlciA9IGFzeW5jIChpZCkgPT4ge1xyXG4gIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL21vdmllLyR7aWR9L3ZpZGVvcz9hcGlfa2V5PSR7YXBpS2V5fSZsYW5ndWFnZT1lbi1VU2A7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gIGNvbnN0IHRyYWlsZXJzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIHJldHVybiB0cmFpbGVycztcclxufTtcclxuXHJcbmNvbnN0IHNldENvbW1lbnRzID0gYXN5bmMgKGNvbW1lbnRzKSA9PiB7XHJcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyR7c2l0ZUlkfS9jb21tZW50c2A7XHJcbiAgYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY29tbWVudHMpLFxyXG4gIH0pO1xyXG4gIHJldHVybiBjb21tZW50cztcclxufTtcclxuXHJcbmNvbnN0IHNldExpa2UgPSBhc3luYyAobW92aWVJZCkgPT4ge1xyXG4gIGNvbnN0IHVybCA9IGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8ke3NpdGVJZH0vbGlrZXMvYDtcclxuICBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGl0ZW1faWQ6IG1vdmllSWQgfSksXHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRMaWtlID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHVybCA9IGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8ke3NpdGVJZH0vbGlrZXMvYDtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgY29uc3QgbGlrZUNvdW50ZXIgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgcmV0dXJuIGxpa2VDb3VudGVyO1xyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICBnZXRNb3ZpZUxpc3QsIHNldExpa2UsIGdldExpa2UsIGdldFNpbmdsZU1vdmllLCBnZXRDb21tZW50cywgc2V0Q29tbWVudHMsIGdldFRyYWlsZXIsXHJcbn07XHJcbiIsImltcG9ydCB7IGdldE1vdmllTGlzdCB9IGZyb20gJy4vZW5kUG9pbnRBUEkuanMnO1xyXG5cclxuY29uc3QgZ2V0TW92aWVDb3VudGVyID0gYXN5bmMgKGNhdGVnb3J5KSA9PiB7XHJcbiAgY29uc3QgbW92aWVMaXN0ID0gYXdhaXQgZ2V0TW92aWVMaXN0KCk7XHJcbiAgbGV0IGNvdW50ZXIgPSBtb3ZpZUxpc3QuaXRlbXM7XHJcbiAgaWYgKGNhdGVnb3J5ICE9PSAwKSB7XHJcbiAgICBjb3VudGVyID0gbW92aWVMaXN0Lml0ZW1zLmZpbHRlcigobW92aWUpID0+IG1vdmllLmdlbnJlX2lkcy5pbmNsdWRlcyhjYXRlZ29yeSkpO1xyXG4gIH1cclxuICByZXR1cm4gY291bnRlci5sZW5ndGg7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRNb3ZpZUNvdW50ZXI7XHJcbiIsImltcG9ydCBjb21tZW50Q291bnRlciBmcm9tICcuL2NvbW1lbnQtY291bnRlci5qcyc7XHJcbmltcG9ydCB7IGdldENvbW1lbnRzLCBnZXRUcmFpbGVyLCBzZXRDb21tZW50cyB9IGZyb20gJy4vZW5kUG9pbnRBUEkuanMnO1xyXG5cclxuY29uc3QgZGlzcGxheUNvbW1lbnQgPSBhc3luYyAoY29tbWVudHMpID0+IHtcclxuICBsZXQgYXV4ID0gJyc7XHJcbiAgaWYgKGNvbW1lbnRzLmVycm9yKSB7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29tbWVudHMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGNvbnN0IGNvbW1lbnQgPSBjb21tZW50c1tpXTtcclxuICAgIGF1eCArPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50LWJvZHlcIj5cclxuICAgICAgPHAgY2xhc3M9XCJjb21tZW50LW5hbWVcIj4ke2NvbW1lbnQudXNlcm5hbWV9PC9wPlxyXG4gICAgICA8cCBjbGFzcz1cImNvbW1lbnQtZGF0ZVwiPiR7Y29tbWVudC5jcmVhdGlvbl9kYXRlfTwvcD5cclxuICAgICAgPHAgY2xhc3M9XCJjb21tZW50LXRleHRcIj4ke2NvbW1lbnQuY29tbWVudH08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBgO1xyXG4gIH1cclxuXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRzJykuaW5uZXJIVE1MID0gYXV4O1xyXG4gIHJldHVybiBhdXg7XHJcbn07XHJcbmNvbnN0IGRpc3BsYXlDb21tZW50Q291bnRlciA9IGFzeW5jIChjb3VudGVyKSA9PiB7XHJcbiAgaWYgKGNvdW50ZXIpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICcuY29tbWVudC1jb3VudGVyJyxcclxuICAgICkuaW5uZXJIVE1MID0gYENvbW1lbnRzICgke2NvdW50ZXJ9KSBgO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1jb3VudGVyJykuaW5uZXJIVE1MID0gJ0NvbW1lbnRzIDAgJztcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBhZGRDb21tZW50ID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgZ2V0Q29tbWVudHMoaWQpLnRoZW4oKGNvbW1lbnRzKSA9PiB7XHJcbiAgICBkaXNwbGF5Q29tbWVudChjb21tZW50cyk7XHJcbiAgfSk7XHJcblxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgKGUpID0+IHtcclxuICAgIGNvbnN0IGNvbW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tbWVudC10ZXh0YXJlYScpO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBjb21tZW50LmZvY3VzKCk7XHJcbiAgICBjb25zdCB1c2VybmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJ1c2VybmFtZScpLnZhbHVlO1xyXG4gICAgY29uc3QgY29tbWVudHMgPSB7XHJcbiAgICAgIGl0ZW1faWQ6IGlkLFxyXG4gICAgICB1c2VybmFtZTogdXNlcm5hbWUudG9VcHBlckNhc2UoKSxcclxuICAgICAgY29tbWVudDogY29tbWVudC52YWx1ZSxcclxuICAgIH07XHJcblxyXG4gICAgYXdhaXQgc2V0Q29tbWVudHMoY29tbWVudHMpO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJ1c2VybmFtZScpLnZhbHVlID0gJyc7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tbWVudC10ZXh0YXJlYScpLnZhbHVlID0gJyc7XHJcblxyXG4gICAgZ2V0Q29tbWVudHMoaWQpLnRoZW4oKGNvbW1lbnRzKSA9PiB7XHJcbiAgICAgIGRpc3BsYXlDb21tZW50KGNvbW1lbnRzKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGNvbW1lbnRJdGVtID0gYXdhaXQgY29tbWVudENvdW50ZXIoaWQpLnRoZW4oKHJlcykgPT4gcmVzKTtcclxuXHJcbiAgICBhd2FpdCBkaXNwbGF5Q29tbWVudENvdW50ZXIoY29tbWVudEl0ZW0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgY29tbWVudFB1cHVwSGFuZGxlciA9IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgY29uc3Qga2V5ID0gYXdhaXQgZ2V0VHJhaWxlcihkYXRhLmlkKS50aGVuKChkYXRhKSA9PiBkYXRhLnJlc3VsdHNbMF0ua2V5KTtcclxuXHJcbiAgY29uc3QgZ2VucmVzID0gZGF0YS5nZW5yZXMubWFwKChnZW4pID0+IGdlbi5uYW1lKTtcclxuXHJcbiAgbGV0IGF1eCA9ICcnO1xyXG4gIGdlbnJlcy5mb3JFYWNoKChnZW5yZSkgPT4ge1xyXG4gICAgYXV4ICs9IGBcclxuICAgICAgPHA+JHtnZW5yZX08L3A+XHJcbiAgICBgO1xyXG4gIH0pO1xyXG5cclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXAnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cC1kZXRhaWxzJykuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2xvc2UtcG9wdXAtYnRuXCI+XHJcbiAgICAgIDxidXR0b24gb25jbGljaz1cImNsb3NlUG9wdXAoKVwiPiYjeDI3MTU8L2J1dHRvbj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtY29udGVudHNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtY29tbWVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLWhlYWRlclwiPlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwicG9wdXAtaW1nXCIgc3JjPVwiaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzMwMC8ke2RhdGEucG9zdGVyX3BhdGh9XCIgYWx0PVwibW92aWUgaW1hZ2VcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLWhlYWRlci1kZXNjXCI+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzPVwidGl0bGVcIj4ke2RhdGEudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICA8cCBjbGFzcz1cInRhZ2xpbmVcIj4ke2RhdGEudGFnbGluZX08L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJyZWxlYXNlLWRhdGVcIj5SZWxlYXNlIGRhdGU6ICR7ZGF0YS5yZWxlYXNlX2RhdGV9PC9wPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnZW5yZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb3JlLWluZm9cIj5cclxuICAgICAgICAgICAgICAgIDxwPklNRGI6IDxzcGFuPiAgIDxpbWcgc3JjPVwiaHR0cDovL3NpbXBsZWljb24uY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy9zdGFyLnN2Z1wiIHdpZHRoPVwiMTJweFwiIGFsdD1cInN0YXJ0IHN2Z1wiPlxyXG4gICAgICAgICAgICAgICAgJHtkYXRhLnZvdGVfYXZlcmFnZX08L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+JHtkYXRhLnZvdGVfY291bnR9IHZvdGVzPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJvdmVydmlld1wiPiBNb3ZpZSBQbG90OiA8c3Bhbj4ke2RhdGEub3ZlcnZpZXd9PC9zcGFuPjwvcD5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImlmcmFtZS12aWRlb1wiPlxyXG4gICAgICAgICAgPGlmcmFtZSB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHtrZXl9XCIgdGl0bGU9XCJZb3VUdWJlIHZpZGVvIHBsYXllclwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZTsgd2ViLXNoYXJlXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaXNwbGF5LWNvbW1lbnRzXCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzcz1cImNvbW1lbnQtY291bnRlclwiPjwvaDM+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50c1wiPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxmb3JtIGNsYXNzPVwiYWRkLWNvbW1lbnRcIiBpZD1cImZvcm1cIj5cclxuICAgICAgICAgICAgPGgzPkFkZCBhIGNvbW1lbnQ8L2gzPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiIG5hbWU9XCJ1c2VybmFtZVwiIHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwiY29tbWVudC10ZXh0YXJlYVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJZb3VyIGluc2lnaHRzXCIgbmFtZT1cImNvbW1lbnRcIiByZXF1aXJlZD48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY29tbWVudC1idG5cIj5TdWJtaXQ8L2J1dHRvbj48L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PmA7XHJcblxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nZW5yZScpLmlubmVySFRNTCA9IGF1eDtcclxuICBhZGRDb21tZW50KGRhdGEuaWQpO1xyXG5cclxuICBjb25zdCBjb21tZW50SXRlbSA9IGF3YWl0IGNvbW1lbnRDb3VudGVyKGRhdGEuaWQpLnRoZW4oKHJlcykgPT4gcmVzKTtcclxuICBhd2FpdCBkaXNwbGF5Q29tbWVudENvdW50ZXIoY29tbWVudEl0ZW0pO1xyXG59O1xyXG5cclxud2luZG93LmNsb3NlUG9wdXAgPSAoKSA9PiB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbn07XHJcblxyXG5leHBvcnQgeyBjb21tZW50UHVwdXBIYW5kbGVyLCBkaXNwbGF5Q29tbWVudCB9O1xyXG4iLCJpbXBvcnQgaGVhcnQgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9oZWFydC5wbmcnO1xyXG5pbXBvcnQgbW9yZUluZm8gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9tb3JlLWluZm8ucG5nJztcclxuaW1wb3J0IHtcclxuICBnZXRMaWtlLFxyXG4gIGdldE1vdmllTGlzdCxcclxuICBnZXRTaW5nbGVNb3ZpZSwgc2V0TGlrZSxcclxufSBmcm9tICcuL2VuZFBvaW50QVBJLmpzJztcclxuaW1wb3J0IHsgY29tbWVudFB1cHVwSGFuZGxlciB9IGZyb20gJy4vcG9wdXAtY29tbWVudHMuanMnO1xyXG5pbXBvcnQgZ2V0TW92aWVDb3VudGVyIGZyb20gJy4vbW92aWVDb3VudGVyLmpzJztcclxuXHJcbmNvbnN0IHVwZGF0ZUxpa2UgPSAobW92aWVJZCkgPT4ge1xyXG4gIGdldExpa2UoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgcmVzcG9uc2UuZm9yRWFjaCgobGlrZSkgPT4ge1xyXG4gICAgICBpZiAobGlrZS5pdGVtX2lkID09PSBtb3ZpZUlkKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2NvdW50ZXIke21vdmllSWR9YCkudGV4dENvbnRlbnQgPSBsaWtlLmxpa2VzO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGFkZExpa2UgPSAoKSA9PiB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1saWtlJykuZm9yRWFjaCgobW92aWUpID0+IHtcclxuICAgIG1vdmllLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjb25zdCBtb3ZpZUlkID0gbW92aWUuaWQuc2xpY2UoNCk7XHJcbiAgICAgIHNldExpa2UobW92aWVJZCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdXBkYXRlTGlrZShtb3ZpZUlkKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHJlbmRlckxpa2VzID0gKCkgPT4ge1xyXG4gIGdldExpa2UoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1saWtlJykuZm9yRWFjaCgoYnRuTGlrZSkgPT4ge1xyXG4gICAgICByZXNwb25zZS5mb3JFYWNoKChsaWtlKSA9PiB7XHJcbiAgICAgICAgaWYgKGJ0bkxpa2UuaWQuc2xpY2UoNCkgPT09IGxpa2UuaXRlbV9pZCkge1xyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2NvdW50ZXIke2xpa2UuaXRlbV9pZH1gKS50ZXh0Q29udGVudCA9IGxpa2UubGlrZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgcmFuZG9tTW92aWUgPSAoKSA9PiB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JhbmRvbU1vdmllJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZ2V0TW92aWVMaXN0KCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgY29uc3QgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmVzcG9uc2UuaXRlbXMubGVuZ3RoKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VjdGlvbi5tb3ZpZScpLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uLm1vdmllJykuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJtb3ZpZVwiPlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwibW92aWVcIiBzcmM9XCJodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93MzAwLyR7cmVzcG9uc2UuaXRlbXNbcmFuZG9tXS5wb3N0ZXJfcGF0aH1cIiBhbHQ9XCJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiYnRuLW1vcmUtaW5mb1wiIGlkPVwiJHtyZXNwb25zZS5pdGVtc1tyYW5kb21dLmlkfVwiIHNyYz1cIiR7bW9yZUluZm99XCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsaWtlLWNvdW50ZXJcIiBpZD1cImNvdW50ZXIke3Jlc3BvbnNlLml0ZW1zW3JhbmRvbV0uaWR9XCI+MDwvcD5cclxuICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiYnRuLWxpa2VcIiBpZD1cImxpa2Uke3Jlc3BvbnNlLml0ZW1zW3JhbmRvbV0uaWR9XCIgc3JjPVwiJHtoZWFydH1cIiBhbHQ9XCJcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5gO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMScpLnRleHRDb250ZW50ID0gJ/Cfk73vuI8gMSBSYW5kb20gTW92aWVzIEdlbmVyYXRlZCDwn5iBJztcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgcmVuZGVyTW92aWUgPSBhc3luYyAobW92aWVMaXN0LCBjYXRlZ29yeSA9IDApID0+IHtcclxuICBjb25zdCBzZWN0aW9uTW92aWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uLm1vdmllJyk7XHJcbiAgbGV0IGF1eCA9ICcnO1xyXG4gIGxldCBjYXRlZ29yeUFycmF5ID0gbW92aWVMaXN0O1xyXG4gIGNhdGVnb3J5ID0gcGFyc2VJbnQoY2F0ZWdvcnksIDEwKTtcclxuICBzZWN0aW9uTW92aWUuaW5uZXJIVE1MID0gJyc7XHJcbiAgaWYgKGNhdGVnb3J5ICE9PSAwKSB7XHJcbiAgICBjYXRlZ29yeUFycmF5ID0gbW92aWVMaXN0LmZpbHRlcigobW92aWUpID0+IG1vdmllLmdlbnJlX2lkcy5pbmNsdWRlcyhjYXRlZ29yeSkpO1xyXG4gIH1cclxuICBjYXRlZ29yeUFycmF5LmZvckVhY2goKG1vdmllKSA9PiB7XHJcbiAgICBhdXggKz0gYDxkaXYgY2xhc3M9XCJtb3ZpZVwiPlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwibW92aWVcIiBzcmM9XCJodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93MzAwLyR7bW92aWUucG9zdGVyX3BhdGh9XCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImJ0bi1tb3JlLWluZm9cIiBpZD1cIiR7bW92aWUuaWR9XCIgc3JjPVwiJHttb3JlSW5mb31cIiBhbHQ9XCJcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzcz1cImxpa2UtY291bnRlclwiIGlkPVwiY291bnRlciR7bW92aWUuaWR9XCI+MDwvcD5cclxuICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiYnRuLWxpa2VcIiBpZD1cImxpa2Uke21vdmllLmlkfVwiIHNyYz1cIiR7aGVhcnR9XCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+YDtcclxuICB9KTtcclxuICByZW5kZXJMaWtlcygpO1xyXG4gIHNlY3Rpb25Nb3ZpZS5pbm5lckhUTUwgPSBhdXg7XHJcbiAgYWRkTGlrZSgpO1xyXG4gIGNvbnN0IGNvdW50ZXIgPSBhd2FpdCAoZ2V0TW92aWVDb3VudGVyKGNhdGVnb3J5KSk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDEnKS50ZXh0Q29udGVudCA9IGDwn5O977iPICR7Y291bnRlcn0gUmV0cm8gTW92aWVzIEZvdW5kIPCfmIFgO1xyXG4gIHJhbmRvbU1vdmllKCk7XHJcblxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tbW9yZS1pbmZvJykuZm9yRWFjaCgobW92aWUpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBtb3ZpZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgZ2V0U2luZ2xlTW92aWUobW92aWUuaWQpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBjb21tZW50UHVwdXBIYW5kbGVyKGRhdGEpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3Qgc29ydEJ5Q2F0ZWdvcnkgPSAoKSA9PiB7XHJcbiAgY29uc3QgZm9ybVNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0uc2VhcmNoJyk7XHJcbiAgZm9ybVNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZ2V0TW92aWVMaXN0KCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmVuZGVyTW92aWUocmVzcG9uc2UuaXRlbXMsIGZvcm1TZWFyY2guZWxlbWVudHMuc2VsZWN0Q2F0ZWdvcnkudmFsdWUpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCByZW5kZXJNb3ZpZUxpc3QgPSAoKSA9PiB7XHJcbiAgZ2V0TW92aWVMaXN0KCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgIHJlbmRlck1vdmllKHJlc3BvbnNlLml0ZW1zKTtcclxuICAgIHNvcnRCeUNhdGVnb3J5KCk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZW5kZXJNb3ZpZUxpc3Q7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCByZW5kZXJMaXN0IGZyb20gJy4vbW9kdWxlcy9yZW5kZXIuanMnO1xuXG5yZW5kZXJMaXN0KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=