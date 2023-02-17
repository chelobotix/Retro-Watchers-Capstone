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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxV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QUMzQixPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZEQUFZO0FBQ2hCO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFLDZEQUFZO0FBQ2Q7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUVBQWUsZUFBZSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqSC9CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ3dCOztBQUU3Qyw4REFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2s1Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrNS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjazUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrNS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJwYWNrNS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrNS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjazUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjazUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjazUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrNS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2s1Ly4vc3JjL21vZHVsZXMvYXBpS2V5LmpzIiwid2VicGFjazovL3dlYnBhY2s1Ly4vc3JjL21vZHVsZXMvY29tbWVudC1jb3VudGVyLmpzIiwid2VicGFjazovL3dlYnBhY2s1Ly4vc3JjL21vZHVsZXMvZW5kUG9pbnRBUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjazUvLi9zcmMvbW9kdWxlcy9tb3ZpZUNvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjazUvLi9zcmMvbW9kdWxlcy9wb3B1cC1jb21tZW50cy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrNS8uL3NyYy9tb2R1bGVzL3JlbmRlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrNS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrNS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrNS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjazUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWJwYWNrNS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2s1L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjazUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VicGFjazUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYnBhY2s1Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCI7XFxyXFxuICBzcmM6IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcFxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJvYm90byBDb25kZW5zZWRcXFwiO1xcclxcbiAgc3JjOiB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK0NvbmRlbnNlZDppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw3MDA7MSwzMDA7MSw0MDA7MSw3MDAmZGlzcGxheT1zd2FwXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4ub3ZlcmxheSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgb3BhY2l0eTogMC41O1xcclxcbiAgei1pbmRleDogMTA7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc4MDgxYztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHtcXHJcXG4gIHBhZGRpbmc6IDAgMjBweCAwIDIwcHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgdWwubmF2LWl0ZW0ge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiB1bC5uYXYtaXRlbSBsaS5uYXYtaXRlbSB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IGxpLnNlYXJjaCB7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgbGkuc2VhcmNoIHNlY3Rpb24uc2VhcmNoIHtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiBsaS5zZWFyY2ggc2VjdGlvbi5zZWFyY2ggZm9ybS5zZWFyY2gge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3ODA4MWM7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiBsaS5zZWFyY2ggc2VjdGlvbi5zZWFyY2ggZm9ybS5zZWFyY2ggc2VsZWN0IHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3ODA4MWM7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgcGFkZGluZzogMTBweCAwIDEwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiBsaS5zZWFyY2ggc2VjdGlvbi5zZWFyY2ggZm9ybS5zZWFyY2ggaW5wdXRbdHlwZT1cXFwiaW1hZ2VcXFwiXSB7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgdWwubmF2LWl0ZW0gbGkubmF2LWl0ZW0gaW1nLm5hdi1pdGVtIHtcXHJcXG4gIHdpZHRoOiAxODBweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiB1bC5uYXYtaXRlbSBsaS5uYXYtaXRlbSBhLm5hdi1pdGVtIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC1zaXplOiAwLjJyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLmNvdW50ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLmNvdW50ZXIgaDEge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmNGM1YztcXHJcXG4gIGNvbG9yOiAjZmI4YjI0O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIGRpc3BsYXkgcG9wdXAgY29tbWVudHMgKi9cXHJcXG4ucG9wdXAge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB6LWluZGV4OiAxMDAwO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBoZWlnaHQ6IDgwJTtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC41KSAwIDU0cHggNTVweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwIC0xMnB4IDMwcHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMCA0cHggNnB4LCByZ2JhKDAsIDAsIDAsIDAuMTcpIDAgMTJweCAxM3B4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDAgLTNweCA1cHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgd2lkdGg6IDZweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc4MDgxYztcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWRldGFpbHMge1xcclxcbiAgcGFkZGluZzogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLXBvcHVwLWJ0biB7XFxyXFxuICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLXBvcHVwLWJ0biBidXR0b24ge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBtYXJnaW46IDVweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtaGVhZGVyLWRlc2MgLnRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogNTBweDtcXHJcXG4gIGNvbG9yOiAjYjEwMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtaGVhZGVyLWRlc2MgLnRhZ2xpbmUge1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgY29sb3I6IGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5tb3JlLWluZm8gcCB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmdlbnJlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2VucmUgcCB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxyXFxuICBwYWRkaW5nOiA1cHggMTFweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDMxcHg7XFxyXFxufVxcclxcblxcclxcbi5nZW5yZSBwOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjYjEwMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVsZWFzZS1kYXRlIHtcXHJcXG4gIGNvbG9yOiBncmF5O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vcmUtaW5mbyB7XFxyXFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5tb3JlLWluZm8gc3BhbiB7XFxyXFxuICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdvbGRlbnJvZDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJ2aWV3IHtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBtYXJnaW46IDQwcHggYXV0bztcXHJcXG4gIHBhZGRpbmc6IDQwcHggMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDVkNWQ1O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkNWQ1ZDU7XFxyXFxufVxcclxcblxcclxcbi5vdmVydmlldyBzcGFuIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICBjb2xvcjogIzI0MjQyNDtcXHJcXG59XFxyXFxuXFxyXFxuLmlmcmFtZS12aWRlbyB7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgaGVpZ2h0OiA0MTVweDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXktY29tbWVudHMge1xcclxcbiAgbWFyZ2luOiA0MHB4IGF1dG87XFxyXFxuICB3aWR0aDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1ib2R5IHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDVkNWQ1O1xcclxcbiAgbWFyZ2luOiAyMHB4IDA7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtYm9keTpsYXN0LWNoaWxkIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LW5hbWUge1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjb2xvcjogIzc4MDgxYztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtZGF0ZSB7XFxyXFxuICBmb250LXNpemU6IDEzcHg7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgY29sb3I6ICM3Nzc7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LXRleHQge1xcclxcbiAgY29sb3I6IGdyYXk7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxyXFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIC5mb3JtLWdyb3VwIGlucHV0IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICBtYXJnaW46IDEwcHggMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1ncm91cCB0ZXh0YXJlYSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcbiAgbWFyZ2luOiAxMHB4IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICByZXNpemU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWdyb3VwIC5jb21tZW50LWJ0biB7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzgwODFjO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1ncm91cCAuY29tbWVudC1idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyMDQxMztcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLm1vdmllIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgZ2FwOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24ubW92aWUgZGl2Lm1vdmllIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XFxyXFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IDVweCAjMDAwO1xcclxcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IDVweCAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24ubW92aWUgZGl2Lm1vdmllOmhvdmVyIHtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IDVweCAjNzgwODFjO1xcclxcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IDVweCAjNzgwODFjO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24ubW92aWUgZGl2Lm1vdmllIGltZy5tb3ZpZSB7XFxyXFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xcclxcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbm1haW4gc2VjdGlvbi5tb3ZpZSBkaXYubW92aWUgZGl2LmJ1dHRvbi1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDVweCAyNXB4IDVweCAyNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc4MDgxYztcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLm1vdmllIGRpdi5tb3ZpZSBkaXYuYnV0dG9uLWNvbnRhaW5lciBwLmxpa2UtY291bnRlciB7XFxyXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLm1vdmllIGRpdi5tb3ZpZSBkaXYuYnV0dG9uLWNvbnRhaW5lciBpbWcuYnRuLW1vcmUtaW5mbyxcXHJcXG5tYWluIHNlY3Rpb24ubW92aWUgZGl2Lm1vdmllIGRpdi5idXR0b24tY29udGFpbmVyIGltZy5idG4tbGlrZSB7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLm1vdmllIGRpdi5tb3ZpZSBkaXYuYnV0dG9uLWNvbnRhaW5lciBpbWcuYnRuLW1vcmUtaW5mbzpob3ZlcixcXHJcXG5tYWluIHNlY3Rpb24ubW92aWUgZGl2Lm1vdmllIGRpdi5idXR0b24tY29udGFpbmVyIGltZy5idG4tbGlrZTpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzgwODFjO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWxvZ28ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWxvZ28taW1nIHtcXHJcXG4gIGhlaWdodDogNXJlbTtcXHJcXG4gIHdpZHRoOiAxMHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvcHlyaWdodCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIERlc2t0b3AgKi9cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICBoZWFkZXIgbmF2IHVsLm5hdi1pdGVtIHtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgfVxcclxcblxcclxcbiAgaGVhZGVyIG5hdiB1bC5uYXYtaXRlbSBkaXYubmF2LWl0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgfVxcclxcblxcclxcbiAgaGVhZGVyIG5hdiB1bC5uYXYtaXRlbSBsaS5uYXYtaXRlbSBhLm5hdi1pdGVtIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qIE1vYmlsZSAqL1xcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXHJcXG4gIGhlYWRlciBuYXYge1xcclxcbiAgICBwYWRkaW5nOiAwIDVweCAwIDVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGhlYWRlciBuYXYgdWwubmF2LWl0ZW0ge1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoZWFkZXIgbmF2IHVsLm5hdi1pdGVtIGRpdi5uYXYtaXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoZWFkZXIgbmF2IHVsLm5hdi1pdGVtIGxpLm5hdi1pdGVtIGEubmF2LWl0ZW0ge1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb3B1cC1kZXRhaWxzIHtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb3B1cC1oZWFkZXIge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucG9wdXAtaGVhZGVyLWRlc2MgLnRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmdlbnJlIHtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb3JlLWluZm8ge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmlmcmFtZS12aWRlbyB7XFxyXFxuICAgIGhlaWdodDogMjUwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsNktBQTZLO0FBQy9LOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLG1KQUFtSjtBQUNySjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsU0FBUztFQUNULGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osV0FBVztFQUNY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RSw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQSxXQUFXOztBQUVYO0VBQ0U7SUFDRSxvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXHJcXG4gIHNyYzogdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvIENvbmRlbnNlZFxcXCI7XFxyXFxuICBzcmM6IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8rQ29uZGVuc2VkOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDcwMDsxLDMwMDsxLDQwMDsxLDcwMCZkaXNwbGF5PXN3YXBcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbi5vdmVybGF5IHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBvcGFjaXR5OiAwLjU7XFxyXFxuICB6LWluZGV4OiAxMDtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzgwODFjO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYge1xcclxcbiAgcGFkZGluZzogMCAyMHB4IDAgMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiB1bC5uYXYtaXRlbSB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHVsLm5hdi1pdGVtIGxpLm5hdi1pdGVtIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgbGkuc2VhcmNoIHtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiBsaS5zZWFyY2ggc2VjdGlvbi5zZWFyY2gge1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IGxpLnNlYXJjaCBzZWN0aW9uLnNlYXJjaCBmb3JtLnNlYXJjaCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc4MDgxYztcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IGxpLnNlYXJjaCBzZWN0aW9uLnNlYXJjaCBmb3JtLnNlYXJjaCBzZWxlY3Qge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc4MDgxYztcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IGxpLnNlYXJjaCBzZWN0aW9uLnNlYXJjaCBmb3JtLnNlYXJjaCBpbnB1dFt0eXBlPVxcXCJpbWFnZVxcXCJdIHtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiB1bC5uYXYtaXRlbSBsaS5uYXYtaXRlbSBpbWcubmF2LWl0ZW0ge1xcclxcbiAgd2lkdGg6IDE4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHVsLm5hdi1pdGVtIGxpLm5hdi1pdGVtIGEubmF2LWl0ZW0ge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LXNpemU6IDAuMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24uY291bnRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24uY291bnRlciBoMSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGY0YzVjO1xcclxcbiAgY29sb3I6ICNmYjhiMjQ7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogZGlzcGxheSBwb3B1cCBjb21tZW50cyAqL1xcclxcbi5wb3B1cCB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHotaW5kZXg6IDEwMDA7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGhlaWdodDogODAlO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjUpIDAgNTRweCA1NXB4LCByZ2JhKDAsIDAsIDAsIDAuMTIpIDAgLTEycHggMzBweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwIDRweCA2cHgsIHJnYmEoMCwgMCwgMCwgMC4xNykgMCAxMnB4IDEzcHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMCAtM3B4IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogNnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzgwODFjO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtZGV0YWlscyB7XFxyXFxuICBwYWRkaW5nOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtcG9wdXAtYnRuIHtcXHJcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtcG9wdXAtYnRuIGJ1dHRvbiB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIG1hcmdpbjogNXB4IDA7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1oZWFkZXItZGVzYyAudGl0bGUge1xcclxcbiAgZm9udC1zaXplOiA1MHB4O1xcclxcbiAgY29sb3I6ICNiMTAwMDA7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1oZWFkZXItZGVzYyAudGFnbGluZSB7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBjb2xvcjogZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vcmUtaW5mbyBwIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2VucmUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblxcclxcbi5nZW5yZSBwIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXHJcXG4gIHBhZGRpbmc6IDVweCAxMXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzFweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdlbnJlIHA6aG92ZXIge1xcclxcbiAgY29sb3I6ICNiMTAwMDA7XFxyXFxufVxcclxcblxcclxcbi5yZWxlYXNlLWRhdGUge1xcclxcbiAgY29sb3I6IGdyYXk7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9yZS1pbmZvIHtcXHJcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vcmUtaW5mbyBzcGFuIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ29sZGVucm9kO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ub3ZlcnZpZXcge1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIG1hcmdpbjogNDBweCBhdXRvO1xcclxcbiAgcGFkZGluZzogNDBweCAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkNWQ1ZDU7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q1ZDVkNTtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJ2aWV3IHNwYW4ge1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gIGNvbG9yOiAjMjQyNDI0O1xcclxcbn1cXHJcXG5cXHJcXG4uaWZyYW1lLXZpZGVvIHtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBoZWlnaHQ6IDQxNXB4O1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzcGxheS1jb21tZW50cyB7XFxyXFxuICBtYXJnaW46IDQwcHggYXV0bztcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWJvZHkge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkNWQ1ZDU7XFxyXFxuICBtYXJnaW46IDIwcHggMDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1ib2R5Omxhc3QtY2hpbGQge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbmFtZSB7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiAjNzgwODFjO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1kYXRlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICBjb2xvcjogIzc3NztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtdGV4dCB7XFxyXFxuICBjb2xvcjogZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICBtYXJnaW46IDIwcHggYXV0bztcXHJcXG4gIG1heC13aWR0aDogNDAwcHg7XFxyXFxufVxcclxcblxcclxcbmZvcm0gLmZvcm0tZ3JvdXAgaW5wdXQge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG4gIG1hcmdpbjogMTBweCAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWdyb3VwIHRleHRhcmVhIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICBtYXJnaW46IDEwcHggMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tZ3JvdXAgLmNvbW1lbnQtYnRuIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3ODA4MWM7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWdyb3VwIC5jb21tZW50LWJ0bjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTIwNDEzO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24ubW92aWUge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBnYXA6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbm1haW4gc2VjdGlvbi5tb3ZpZSBkaXYubW92aWUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcXHJcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiA1cHggNXB4IDEwcHggNXB4ICMwMDA7XFxyXFxuICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggNXB4ICMwMDA7XFxyXFxufVxcclxcblxcclxcbm1haW4gc2VjdGlvbi5tb3ZpZSBkaXYubW92aWU6aG92ZXIge1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiA1cHggNXB4IDEwcHggNXB4ICM3ODA4MWM7XFxyXFxuICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggNXB4ICM3ODA4MWM7XFxyXFxufVxcclxcblxcclxcbm1haW4gc2VjdGlvbi5tb3ZpZSBkaXYubW92aWUgaW1nLm1vdmllIHtcXHJcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XFxyXFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLm1vdmllIGRpdi5tb3ZpZSBkaXYuYnV0dG9uLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogNXB4IDI1cHggNXB4IDI1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzgwODFjO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24ubW92aWUgZGl2Lm1vdmllIGRpdi5idXR0b24tY29udGFpbmVyIHAubGlrZS1jb3VudGVyIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24ubW92aWUgZGl2Lm1vdmllIGRpdi5idXR0b24tY29udGFpbmVyIGltZy5idG4tbW9yZS1pbmZvLFxcclxcbm1haW4gc2VjdGlvbi5tb3ZpZSBkaXYubW92aWUgZGl2LmJ1dHRvbi1jb250YWluZXIgaW1nLmJ0bi1saWtlIHtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24ubW92aWUgZGl2Lm1vdmllIGRpdi5idXR0b24tY29udGFpbmVyIGltZy5idG4tbW9yZS1pbmZvOmhvdmVyLFxcclxcbm1haW4gc2VjdGlvbi5tb3ZpZSBkaXYubW92aWUgZGl2LmJ1dHRvbi1jb250YWluZXIgaW1nLmJ0bi1saWtlOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3ODA4MWM7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItbG9nbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItbG9nby1pbWcge1xcclxcbiAgaGVpZ2h0OiA1cmVtO1xcclxcbiAgd2lkdGg6IDEwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29weXJpZ2h0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogRGVza3RvcCAqL1xcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIGhlYWRlciBuYXYgdWwubmF2LWl0ZW0ge1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoZWFkZXIgbmF2IHVsLm5hdi1pdGVtIGRpdi5uYXYtaXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoZWFkZXIgbmF2IHVsLm5hdi1pdGVtIGxpLm5hdi1pdGVtIGEubmF2LWl0ZW0ge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogTW9iaWxlICovXFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcclxcbiAgaGVhZGVyIG5hdiB7XFxyXFxuICAgIHBhZGRpbmc6IDAgNXB4IDAgNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgaGVhZGVyIG5hdiB1bC5uYXYtaXRlbSB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGhlYWRlciBuYXYgdWwubmF2LWl0ZW0gZGl2Lm5hdi1pdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGhlYWRlciBuYXYgdWwubmF2LWl0ZW0gbGkubmF2LWl0ZW0gYS5uYXYtaXRlbSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBvcHVwLWRldGFpbHMge1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBvcHVwLWhlYWRlciB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb3B1cC1oZWFkZXItZGVzYyAudGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZ2VucmUge1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1vcmUtaW5mbyB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaWZyYW1lLXZpZGVvIHtcXHJcXG4gICAgaGVpZ2h0OiAyNTBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgYXBpS2V5ID0gJzA4ZGNjZTlmNGYzZTg4MWM0ZjIxNGIyMDIwYjgzNGQyJztcclxuY29uc3Qgc2l0ZUlkID0gJ0VkWTFLdk5DcDBPTGFLbjJjSGs4JztcclxuZXhwb3J0IHsgYXBpS2V5LCBzaXRlSWQgfTtcclxuIiwiaW1wb3J0IHsgZ2V0Q29tbWVudHMgfSBmcm9tICcuL2VuZFBvaW50QVBJLmpzJztcblxuY29uc3QgY29tbWVudENvdW50ZXIgPSBhc3luYyAoaWQpID0+IGdldENvbW1lbnRzKGlkKS50aGVuKChjb21tZW50cykgPT4gY29tbWVudHMubGVuZ3RoKTtcblxuZXhwb3J0IGRlZmF1bHQgY29tbWVudENvdW50ZXI7XG4iLCJpbXBvcnQgeyBhcGlLZXksIHNpdGVJZCB9IGZyb20gJy4vYXBpS2V5LmpzJztcclxuXHJcbmNvbnN0IGdldE1vdmllTGlzdCA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9saXN0LzgyNDAzMjY/YXBpX2tleT0ke2FwaUtleX0mbGFuZ3VhZ2U9ZW4tVVNgO1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICBjb25zdCBtb3ZpZUxpc3QgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgcmV0dXJuIG1vdmllTGlzdDtcclxufTtcclxuXHJcbmNvbnN0IGdldFNpbmdsZU1vdmllID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvJHtpZH0/YXBpX2tleT0ke2FwaUtleX0mbGFuZ3VhZ2U9ZW4tVVNgO1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICBjb25zdCBzaW5nbGVNb3ZpZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICByZXR1cm4gc2luZ2xlTW92aWU7XHJcbn07XHJcblxyXG5jb25zdCBnZXRDb21tZW50cyA9IGFzeW5jIChpZCkgPT4ge1xyXG4gIGNvbnN0IHVybCA9IGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8ke3NpdGVJZH0vY29tbWVudHM/aXRlbV9pZD0ke2lkfWA7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gIGNvbnN0IGNvbW1lbnRzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIHJldHVybiBjb21tZW50cztcclxufTtcclxuXHJcbmNvbnN0IGdldFRyYWlsZXIgPSBhc3luYyAoaWQpID0+IHtcclxuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS8ke2lkfS92aWRlb3M/YXBpX2tleT0ke2FwaUtleX0mbGFuZ3VhZ2U9ZW4tVVNgO1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICBjb25zdCB0cmFpbGVycyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICByZXR1cm4gdHJhaWxlcnM7XHJcbn07XHJcblxyXG5jb25zdCBzZXRDb21tZW50cyA9IGFzeW5jIChjb21tZW50cykgPT4ge1xyXG4gIGNvbnN0IHVybCA9IGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8ke3NpdGVJZH0vY29tbWVudHNgO1xyXG4gIGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNvbW1lbnRzKSxcclxuICB9KTtcclxuICByZXR1cm4gY29tbWVudHM7XHJcbn07XHJcblxyXG5jb25zdCBzZXRMaWtlID0gYXN5bmMgKG1vdmllSWQpID0+IHtcclxuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJHtzaXRlSWR9L2xpa2VzL2A7XHJcbiAgYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpdGVtX2lkOiBtb3ZpZUlkIH0pLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0TGlrZSA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJHtzaXRlSWR9L2xpa2VzL2A7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gIGNvbnN0IGxpa2VDb3VudGVyID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIHJldHVybiBsaWtlQ291bnRlcjtcclxufTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgZ2V0TW92aWVMaXN0LCBzZXRMaWtlLCBnZXRMaWtlLCBnZXRTaW5nbGVNb3ZpZSwgZ2V0Q29tbWVudHMsIHNldENvbW1lbnRzLCBnZXRUcmFpbGVyLFxyXG59O1xyXG4iLCJjb25zdCBnZXRNb3ZpZUNvdW50ZXIgPSAobXNnKSA9PiB7XG4gIGNvbnN0IGNvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLWxpa2UnKS5sZW5ndGg7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJykudGV4dENvbnRlbnQgPSBg8J+Tve+4jyAke2NvdW50ZXJ9ICR7bXNnfSDwn5iBYDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldE1vdmllQ291bnRlcjtcbiIsImltcG9ydCBjb21tZW50Q291bnRlciBmcm9tICcuL2NvbW1lbnQtY291bnRlci5qcyc7XHJcbmltcG9ydCB7IGdldENvbW1lbnRzLCBnZXRUcmFpbGVyLCBzZXRDb21tZW50cyB9IGZyb20gJy4vZW5kUG9pbnRBUEkuanMnO1xyXG5cclxuY29uc3QgZGlzcGxheUNvbW1lbnQgPSBhc3luYyAoY29tbWVudHMpID0+IHtcclxuICBsZXQgYXV4ID0gJyc7XHJcbiAgaWYgKGNvbW1lbnRzLmVycm9yKSB7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29tbWVudHMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGNvbnN0IGNvbW1lbnQgPSBjb21tZW50c1tpXTtcclxuICAgIGF1eCArPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50LWJvZHlcIj5cclxuICAgICAgPHAgY2xhc3M9XCJjb21tZW50LW5hbWVcIj4ke2NvbW1lbnQudXNlcm5hbWV9PC9wPlxyXG4gICAgICA8cCBjbGFzcz1cImNvbW1lbnQtZGF0ZVwiPiR7Y29tbWVudC5jcmVhdGlvbl9kYXRlfTwvcD5cclxuICAgICAgPHAgY2xhc3M9XCJjb21tZW50LXRleHRcIj4ke2NvbW1lbnQuY29tbWVudH08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBgO1xyXG4gIH1cclxuXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRzJykuaW5uZXJIVE1MID0gYXV4O1xyXG4gIHJldHVybiBhdXg7XHJcbn07XHJcbmNvbnN0IGRpc3BsYXlDb21tZW50Q291bnRlciA9IGFzeW5jIChjb3VudGVyKSA9PiB7XHJcbiAgaWYgKGNvdW50ZXIpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICcuY29tbWVudC1jb3VudGVyJyxcclxuICAgICkuaW5uZXJIVE1MID0gYENvbW1lbnRzICgke2NvdW50ZXJ9KSBgO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1jb3VudGVyJykuaW5uZXJIVE1MID0gJ0NvbW1lbnRzIDAgJztcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBhZGRDb21tZW50ID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgZ2V0Q29tbWVudHMoaWQpLnRoZW4oKGNvbW1lbnRzKSA9PiB7XHJcbiAgICBkaXNwbGF5Q29tbWVudChjb21tZW50cyk7XHJcbiAgfSk7XHJcblxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgKGUpID0+IHtcclxuICAgIGNvbnN0IGNvbW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tbWVudC10ZXh0YXJlYScpO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBjb21tZW50LmZvY3VzKCk7XHJcbiAgICBjb25zdCB1c2VybmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJ1c2VybmFtZScpLnZhbHVlO1xyXG4gICAgY29uc3QgY29tbWVudHMgPSB7XHJcbiAgICAgIGl0ZW1faWQ6IGlkLFxyXG4gICAgICB1c2VybmFtZTogdXNlcm5hbWUudG9VcHBlckNhc2UoKSxcclxuICAgICAgY29tbWVudDogY29tbWVudC52YWx1ZSxcclxuICAgIH07XHJcblxyXG4gICAgYXdhaXQgc2V0Q29tbWVudHMoY29tbWVudHMpO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJ1c2VybmFtZScpLnZhbHVlID0gJyc7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tbWVudC10ZXh0YXJlYScpLnZhbHVlID0gJyc7XHJcblxyXG4gICAgZ2V0Q29tbWVudHMoaWQpLnRoZW4oKGNvbW1lbnRzKSA9PiB7XHJcbiAgICAgIGRpc3BsYXlDb21tZW50KGNvbW1lbnRzKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGNvbW1lbnRJdGVtID0gYXdhaXQgY29tbWVudENvdW50ZXIoaWQpLnRoZW4oKHJlcykgPT4gcmVzKTtcclxuXHJcbiAgICBhd2FpdCBkaXNwbGF5Q29tbWVudENvdW50ZXIoY29tbWVudEl0ZW0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgY29tbWVudFB1cHVwSGFuZGxlciA9IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgY29uc3Qga2V5ID0gYXdhaXQgZ2V0VHJhaWxlcihkYXRhLmlkKS50aGVuKChkYXRhKSA9PiBkYXRhLnJlc3VsdHNbMF0ua2V5KTtcclxuXHJcbiAgY29uc3QgZ2VucmVzID0gZGF0YS5nZW5yZXMubWFwKChnZW4pID0+IGdlbi5uYW1lKTtcclxuXHJcbiAgbGV0IGF1eCA9ICcnO1xyXG4gIGdlbnJlcy5mb3JFYWNoKChnZW5yZSkgPT4ge1xyXG4gICAgYXV4ICs9IGBcclxuICAgICAgPHA+JHtnZW5yZX08L3A+XHJcbiAgICBgO1xyXG4gIH0pO1xyXG5cclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXAnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cC1kZXRhaWxzJykuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2xvc2UtcG9wdXAtYnRuXCI+XHJcbiAgICAgIDxidXR0b24gb25jbGljaz1cImNsb3NlUG9wdXAoKVwiPiYjeDI3MTU8L2J1dHRvbj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtY29udGVudHNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtY29tbWVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLWhlYWRlclwiPlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwicG9wdXAtaW1nXCIgc3JjPVwiaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzMwMC8ke2RhdGEucG9zdGVyX3BhdGh9XCIgYWx0PVwibW92aWUgaW1hZ2VcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLWhlYWRlci1kZXNjXCI+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzPVwidGl0bGVcIj4ke2RhdGEudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICA8cCBjbGFzcz1cInRhZ2xpbmVcIj4ke2RhdGEudGFnbGluZX08L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJyZWxlYXNlLWRhdGVcIj5SZWxlYXNlIGRhdGU6ICR7ZGF0YS5yZWxlYXNlX2RhdGV9PC9wPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnZW5yZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb3JlLWluZm9cIj5cclxuICAgICAgICAgICAgICAgIDxwPklNRGI6IDxzcGFuPiAgIDxpbWcgc3JjPVwiaHR0cDovL3NpbXBsZWljb24uY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy9zdGFyLnN2Z1wiIHdpZHRoPVwiMTJweFwiIGFsdD1cInN0YXJ0IHN2Z1wiPlxyXG4gICAgICAgICAgICAgICAgJHtkYXRhLnZvdGVfYXZlcmFnZX08L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+JHtkYXRhLnZvdGVfY291bnR9IHZvdGVzPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJvdmVydmlld1wiPiBNb3ZpZSBQbG90OiA8c3Bhbj4ke2RhdGEub3ZlcnZpZXd9PC9zcGFuPjwvcD5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImlmcmFtZS12aWRlb1wiPlxyXG4gICAgICAgICAgPGlmcmFtZSB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHtrZXl9XCIgdGl0bGU9XCJZb3VUdWJlIHZpZGVvIHBsYXllclwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZTsgd2ViLXNoYXJlXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaXNwbGF5LWNvbW1lbnRzXCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzcz1cImNvbW1lbnQtY291bnRlclwiPjwvaDM+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50c1wiPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxmb3JtIGNsYXNzPVwiYWRkLWNvbW1lbnRcIiBpZD1cImZvcm1cIj5cclxuICAgICAgICAgICAgPGgzPkFkZCBhIGNvbW1lbnQ8L2gzPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiIG5hbWU9XCJ1c2VybmFtZVwiIHJlcXVpcmVkLz5cclxuICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwiY29tbWVudC10ZXh0YXJlYVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJZb3VyIGluc2lnaHRzXCIgbmFtZT1cImNvbW1lbnRcIiByZXF1aXJlZD48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY29tbWVudC1idG5cIj5TdWJtaXQ8L2J1dHRvbj48L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PmA7XHJcblxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nZW5yZScpLmlubmVySFRNTCA9IGF1eDtcclxuICBhZGRDb21tZW50KGRhdGEuaWQpO1xyXG5cclxuICBjb25zdCBjb21tZW50SXRlbSA9IGF3YWl0IGNvbW1lbnRDb3VudGVyKGRhdGEuaWQpLnRoZW4oKHJlcykgPT4gcmVzKTtcclxuICBhd2FpdCBkaXNwbGF5Q29tbWVudENvdW50ZXIoY29tbWVudEl0ZW0pO1xyXG59O1xyXG5cclxud2luZG93LmNsb3NlUG9wdXAgPSAoKSA9PiB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbn07XHJcblxyXG5leHBvcnQgeyBjb21tZW50UHVwdXBIYW5kbGVyLCBkaXNwbGF5Q29tbWVudCB9O1xyXG4iLCJpbXBvcnQgaGVhcnQgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9oZWFydC5wbmcnO1xyXG5pbXBvcnQgbW9yZUluZm8gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9tb3JlLWluZm8ucG5nJztcclxuaW1wb3J0IHtcclxuICBnZXRMaWtlLFxyXG4gIGdldE1vdmllTGlzdCxcclxuICBnZXRTaW5nbGVNb3ZpZSwgc2V0TGlrZSxcclxufSBmcm9tICcuL2VuZFBvaW50QVBJLmpzJztcclxuaW1wb3J0IHsgY29tbWVudFB1cHVwSGFuZGxlciB9IGZyb20gJy4vcG9wdXAtY29tbWVudHMuanMnO1xyXG5pbXBvcnQgZ2V0TW92aWVDb3VudGVyIGZyb20gJy4vbW92aWVDb3VudGVyLmpzJztcclxuXHJcbmNvbnN0IHVwZGF0ZUxpa2UgPSAobW92aWVJZCkgPT4ge1xyXG4gIGdldExpa2UoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgcmVzcG9uc2UuZm9yRWFjaCgobGlrZSkgPT4ge1xyXG4gICAgICBpZiAobGlrZS5pdGVtX2lkID09PSBtb3ZpZUlkKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2NvdW50ZXIke21vdmllSWR9YCkudGV4dENvbnRlbnQgPSBsaWtlLmxpa2VzO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGFkZExpa2UgPSAoKSA9PiB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1saWtlJykuZm9yRWFjaCgobW92aWUpID0+IHtcclxuICAgIG1vdmllLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjb25zdCBtb3ZpZUlkID0gbW92aWUuaWQuc2xpY2UoNCk7XHJcbiAgICAgIHNldExpa2UobW92aWVJZCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdXBkYXRlTGlrZShtb3ZpZUlkKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHJlbmRlckxpa2VzID0gKCkgPT4ge1xyXG4gIGdldExpa2UoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1saWtlJykuZm9yRWFjaCgoYnRuTGlrZSkgPT4ge1xyXG4gICAgICByZXNwb25zZS5mb3JFYWNoKChsaWtlKSA9PiB7XHJcbiAgICAgICAgaWYgKGJ0bkxpa2UuaWQuc2xpY2UoNCkgPT09IGxpa2UuaXRlbV9pZCkge1xyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2NvdW50ZXIke2xpa2UuaXRlbV9pZH1gKS50ZXh0Q29udGVudCA9IGxpa2UubGlrZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgcmFuZG9tTW92aWUgPSAoKSA9PiB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JhbmRvbU1vdmllJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZ2V0TW92aWVMaXN0KCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgY29uc3QgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmVzcG9uc2UuaXRlbXMubGVuZ3RoKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VjdGlvbi5tb3ZpZScpLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwibW92aWVcIj5cclxuICAgICAgICAgICAgPGltZyBjbGFzcz1cIm1vdmllXCIgc3JjPVwiaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzMwMC8ke3Jlc3BvbnNlLml0ZW1zW3JhbmRvbV0ucG9zdGVyX3BhdGh9XCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImJ0bi1tb3JlLWluZm9cIiBpZD1cIiR7cmVzcG9uc2UuaXRlbXNbcmFuZG9tXS5pZH1cIiBzcmM9XCIke21vcmVJbmZvfVwiIGFsdD1cIlwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwibGlrZS1jb3VudGVyXCIgaWQ9XCJjb3VudGVyJHtyZXNwb25zZS5pdGVtc1tyYW5kb21dLmlkfVwiPjA8L3A+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImJ0bi1saWtlXCIgaWQ9XCJsaWtlJHtyZXNwb25zZS5pdGVtc1tyYW5kb21dLmlkfVwiIHNyYz1cIiR7aGVhcnR9XCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+YDtcclxuICAgICAgZ2V0TW92aWVDb3VudGVyKCdSYW5kb20gTW92aWUgR2VuZXJhdGVkJyk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHJlbmRlck1vdmllID0gKG1vdmllTGlzdCwgY2F0ZWdvcnkgPSAwKSA9PiB7XHJcbiAgY2F0ZWdvcnkgPSBwYXJzZUludChjYXRlZ29yeSwgMTApO1xyXG4gIGNvbnN0IHNlY3Rpb25Nb3ZpZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24ubW92aWUnKTtcclxuICBzZWN0aW9uTW92aWUuaW5uZXJIVE1MID0gJyc7XHJcbiAgbGV0IGF1eCA9ICcnO1xyXG4gIGxldCBjYXRlZ29yeUFycmF5ID0gbW92aWVMaXN0O1xyXG4gIGlmIChjYXRlZ29yeSAhPT0gMCkge1xyXG4gICAgY2F0ZWdvcnlBcnJheSA9IG1vdmllTGlzdC5maWx0ZXIoKG1vdmllKSA9PiBtb3ZpZS5nZW5yZV9pZHMuaW5jbHVkZXMoY2F0ZWdvcnkpKTtcclxuICB9XHJcbiAgY2F0ZWdvcnlBcnJheS5mb3JFYWNoKChtb3ZpZSkgPT4ge1xyXG4gICAgYXV4ICs9IGA8ZGl2IGNsYXNzPVwibW92aWVcIj5cclxuICAgICAgICAgICAgPGltZyBjbGFzcz1cIm1vdmllXCIgc3JjPVwiaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzMwMC8ke21vdmllLnBvc3Rlcl9wYXRofVwiIGFsdD1cIlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJidG4tbW9yZS1pbmZvXCIgaWQ9XCIke21vdmllLmlkfVwiIHNyYz1cIiR7bW9yZUluZm99XCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsaWtlLWNvdW50ZXJcIiBpZD1cImNvdW50ZXIke21vdmllLmlkfVwiPjA8L3A+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImJ0bi1saWtlXCIgaWQ9XCJsaWtlJHttb3ZpZS5pZH1cIiBzcmM9XCIke2hlYXJ0fVwiIGFsdD1cIlwiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PmA7XHJcbiAgfSk7XHJcbiAgcmVuZGVyTGlrZXMoKTtcclxuICBzZWN0aW9uTW92aWUuaW5uZXJIVE1MID0gYXV4O1xyXG4gIGFkZExpa2UoKTtcclxuICBnZXRNb3ZpZUNvdW50ZXIoJ1JldHJvIE1vdmllcyBGb3VuZCcpO1xyXG4gIHJhbmRvbU1vdmllKCk7XHJcblxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tbW9yZS1pbmZvJykuZm9yRWFjaCgobW92aWUpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBtb3ZpZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgZ2V0U2luZ2xlTW92aWUobW92aWUuaWQpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBjb21tZW50UHVwdXBIYW5kbGVyKGRhdGEpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3Qgc29ydEJ5Q2F0ZWdvcnkgPSAoKSA9PiB7XHJcbiAgY29uc3QgZm9ybVNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0uc2VhcmNoJyk7XHJcbiAgZm9ybVNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZ2V0TW92aWVMaXN0KCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmVuZGVyTW92aWUocmVzcG9uc2UuaXRlbXMsIGZvcm1TZWFyY2guZWxlbWVudHMuc2VsZWN0Q2F0ZWdvcnkudmFsdWUpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCByZW5kZXJNb3ZpZUxpc3QgPSAoKSA9PiB7XHJcbiAgZ2V0TW92aWVMaXN0KCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgIHJlbmRlck1vdmllKHJlc3BvbnNlLml0ZW1zKTtcclxuICAgIHNvcnRCeUNhdGVnb3J5KCk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZW5kZXJNb3ZpZUxpc3Q7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCByZW5kZXJMaXN0IGZyb20gJy4vbW9kdWxlcy9yZW5kZXIuanMnO1xuXG5yZW5kZXJMaXN0KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=