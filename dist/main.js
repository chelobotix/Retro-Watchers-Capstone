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
  let aux = "";
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

  document.querySelector(".comments").innerHTML = aux;
  return aux;
};
const displayCommentCounter = async (counter) => {
  if (counter) {
    document.querySelector(
      ".comment-counter"
    ).innerHTML = `Comments (${counter}) `;
  } else {
    document.querySelector(".comment-counter").innerHTML = "Comments 0 ";
  }
};

const addComment = async (id) => {
  (0,_endPointAPI_js__WEBPACK_IMPORTED_MODULE_1__.getComments)(id).then((comments) => {
    displayComment(comments);
  });

  document.querySelector("#form").addEventListener("submit", async (e) => {
    const comment = document.querySelector("#comment-textarea");
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

    document.querySelector('input[name="username').value = "";
    document.querySelector("#comment-textarea").value = "";

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

  let aux = "";
  genres.forEach((genre) => {
    aux += `
      <p>${genre}</p>
    `;
  });

  document.getElementById("popup").style.display = "block";
  document.querySelector(".overlay").style.display = "block";
  document.getElementById("popup-details").innerHTML = `
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
                <p>IMDb: <span>
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

  document.querySelector(".genre").innerHTML = aux;
  addComment(data.id);

  const commentItem = await (0,_comment_counter_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data.id).then((res) => res);
  await displayCommentCounter(commentItem);
};

window.closePopup = () => {
  document.getElementById("popup").style.display = "none";
  document.querySelector(".overlay").style.display = "none";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxV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QUc7QUFDSDs7QUFFQTtBQUNBLEVBQUUsNkRBQVk7QUFDZDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlFQUFlLGVBQWUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkgvQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUN3Qjs7QUFFN0MsOERBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrNS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjazUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2s1Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjazUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VicGFjazUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjazUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2s1Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2s1Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2s1Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjazUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrNS8uL3NyYy9tb2R1bGVzL2FwaUtleS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrNS8uL3NyYy9tb2R1bGVzL2NvbW1lbnQtY291bnRlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrNS8uL3NyYy9tb2R1bGVzL2VuZFBvaW50QVBJLmpzIiwid2VicGFjazovL3dlYnBhY2s1Ly4vc3JjL21vZHVsZXMvbW92aWVDb3VudGVyLmpzIiwid2VicGFjazovL3dlYnBhY2s1Ly4vc3JjL21vZHVsZXMvcG9wdXAtY29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjazUvLi9zcmMvbW9kdWxlcy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjazUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjazUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjazUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2s1L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VicGFjazUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrNS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2s1L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYnBhY2s1L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWJwYWNrNS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcclxcbiAgc3JjOiB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXBcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG8gQ29uZGVuc2VkXFxcIjtcXHJcXG4gIHNyYzogdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bytDb25kZW5zZWQ6aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNzAwOzEsMzAwOzEsNDAwOzEsNzAwJmRpc3BsYXk9c3dhcFxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJsYXkge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIG9wYWNpdHk6IDAuNTtcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3ODA4MWM7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiB7XFxyXFxuICBwYWRkaW5nOiAwIDIwcHggMCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHVsLm5hdi1pdGVtIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgdWwubmF2LWl0ZW0gbGkubmF2LWl0ZW0ge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiBsaS5zZWFyY2gge1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IGxpLnNlYXJjaCBzZWN0aW9uLnNlYXJjaCB7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgbGkuc2VhcmNoIHNlY3Rpb24uc2VhcmNoIGZvcm0uc2VhcmNoIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzgwODFjO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgbGkuc2VhcmNoIHNlY3Rpb24uc2VhcmNoIGZvcm0uc2VhcmNoIHNlbGVjdCB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzgwODFjO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDA7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgbGkuc2VhcmNoIHNlY3Rpb24uc2VhcmNoIGZvcm0uc2VhcmNoIGlucHV0W3R5cGU9XFxcImltYWdlXFxcIl0ge1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHVsLm5hdi1pdGVtIGxpLm5hdi1pdGVtIGltZy5uYXYtaXRlbSB7XFxyXFxuICB3aWR0aDogMTgwcHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgdWwubmF2LWl0ZW0gbGkubmF2LWl0ZW0gYS5uYXYtaXRlbSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtc2l6ZTogMC4ycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbm1haW4gc2VjdGlvbi5jb3VudGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbm1haW4gc2VjdGlvbi5jb3VudGVyIGgxIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZjRjNWM7XFxyXFxuICBjb2xvcjogI2ZiOGIyNDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBkaXNwbGF5IHBvcHVwIGNvbW1lbnRzICovXFxyXFxuLnBvcHVwIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgei1pbmRleDogMTAwMDtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgaGVpZ2h0OiA4MCU7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNSkgMCA1NHB4IDU1cHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMCAtMTJweCAzMHB4LCByZ2JhKDAsIDAsIDAsIDAuMTIpIDAgNHB4IDZweCwgcmdiYSgwLCAwLCAwLCAwLjE3KSAwIDEycHggMTNweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwIC0zcHggNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIHdpZHRoOiA2cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3ODA4MWM7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1kZXRhaWxzIHtcXHJcXG4gIHBhZGRpbmc6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1wb3B1cC1idG4ge1xcclxcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1wb3B1cC1idG4gYnV0dG9uIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgbWFyZ2luOiA1cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWhlYWRlci1kZXNjIC50aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDUwcHg7XFxyXFxuICBjb2xvcjogI2IxMDAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWhlYWRlci1kZXNjIC50YWdsaW5lIHtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGNvbG9yOiBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9yZS1pbmZvIHAge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5nZW5yZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLmdlbnJlIHAge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcclxcbiAgcGFkZGluZzogNXB4IDExcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2VucmUgcDpob3ZlciB7XFxyXFxuICBjb2xvcjogI2IxMDAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlbGVhc2UtZGF0ZSB7XFxyXFxuICBjb2xvcjogZ3JheTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5tb3JlLWluZm8ge1xcclxcbiAgbWFyZ2luLXRvcDogNDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9yZS1pbmZvIHNwYW4ge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkZW5yb2Q7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5vdmVydmlldyB7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgbWFyZ2luOiA0MHB4IGF1dG87XFxyXFxuICBwYWRkaW5nOiA0MHB4IDA7XFxyXFxuICBsaW5lLWhlaWdodDogMS41O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2Q1ZDVkNTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDVkNWQ1O1xcclxcbn1cXHJcXG5cXHJcXG4ub3ZlcnZpZXcgc3BhbiB7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgY29sb3I6ICMyNDI0MjQ7XFxyXFxufVxcclxcblxcclxcbi5pZnJhbWUtdmlkZW8ge1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGhlaWdodDogNDE1cHg7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5kaXNwbGF5LWNvbW1lbnRzIHtcXHJcXG4gIG1hcmdpbjogNDBweCBhdXRvO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtYm9keSB7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q1ZDVkNTtcXHJcXG4gIG1hcmdpbjogMjBweCAwO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWJvZHk6bGFzdC1jaGlsZCB7XFxyXFxuICBib3JkZXItYm90dG9tOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1uYW1lIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgY29sb3I6ICM3ODA4MWM7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWRhdGUge1xcclxcbiAgZm9udC1zaXplOiAxM3B4O1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIGNvbG9yOiAjNzc3O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC10ZXh0IHtcXHJcXG4gIGNvbG9yOiBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIG1hcmdpbjogMjBweCBhdXRvO1xcclxcbiAgbWF4LXdpZHRoOiA0MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSAuZm9ybS1ncm91cCBpbnB1dCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcbiAgbWFyZ2luOiAxMHB4IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tZ3JvdXAgdGV4dGFyZWEge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG4gIG1hcmdpbjogMTBweCAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1ncm91cCAuY29tbWVudC1idG4ge1xcclxcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc4MDgxYztcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tZ3JvdXAgLmNvbW1lbnQtYnRuOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MjA0MTM7XFxyXFxufVxcclxcblxcclxcbm1haW4gc2VjdGlvbi5tb3ZpZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGdhcDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLm1vdmllIGRpdi5tb3ZpZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xcclxcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDVweCA1cHggMTBweCA1cHggIzAwMDtcXHJcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCA1cHggIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLm1vdmllIGRpdi5tb3ZpZTpob3ZlciB7XFxyXFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDVweCA1cHggMTBweCA1cHggIzc4MDgxYztcXHJcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCA1cHggIzc4MDgxYztcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLm1vdmllIGRpdi5tb3ZpZSBpbWcubW92aWUge1xcclxcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcXHJcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24ubW92aWUgZGl2Lm1vdmllIGRpdi5idXR0b24tY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiA1cHggMjVweCA1cHggMjVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3ODA4MWM7XFxyXFxufVxcclxcblxcclxcbm1haW4gc2VjdGlvbi5tb3ZpZSBkaXYubW92aWUgZGl2LmJ1dHRvbi1jb250YWluZXIgcC5saWtlLWNvdW50ZXIge1xcclxcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbm1haW4gc2VjdGlvbi5tb3ZpZSBkaXYubW92aWUgZGl2LmJ1dHRvbi1jb250YWluZXIgaW1nLmJ0bi1tb3JlLWluZm8sXFxyXFxubWFpbiBzZWN0aW9uLm1vdmllIGRpdi5tb3ZpZSBkaXYuYnV0dG9uLWNvbnRhaW5lciBpbWcuYnRuLWxpa2Uge1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbm1haW4gc2VjdGlvbi5tb3ZpZSBkaXYubW92aWUgZGl2LmJ1dHRvbi1jb250YWluZXIgaW1nLmJ0bi1tb3JlLWluZm86aG92ZXIsXFxyXFxubWFpbiBzZWN0aW9uLm1vdmllIGRpdi5tb3ZpZSBkaXYuYnV0dG9uLWNvbnRhaW5lciBpbWcuYnRuLWxpa2U6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc4MDgxYztcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nLXRvcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1sb2dvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1sb2dvLWltZyB7XFxyXFxuICBoZWlnaHQ6IDVyZW07XFxyXFxuICB3aWR0aDogMTByZW07XFxyXFxufVxcclxcblxcclxcbi5jb3B5cmlnaHQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBEZXNrdG9wICovXFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgaGVhZGVyIG5hdiB1bC5uYXYtaXRlbSB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGhlYWRlciBuYXYgdWwubmF2LWl0ZW0gZGl2Lm5hdi1pdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGhlYWRlciBuYXYgdWwubmF2LWl0ZW0gbGkubmF2LWl0ZW0gYS5uYXYtaXRlbSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiBNb2JpbGUgKi9cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxyXFxuICBoZWFkZXIgbmF2IHtcXHJcXG4gICAgcGFkZGluZzogMCA1cHggMCA1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoZWFkZXIgbmF2IHVsLm5hdi1pdGVtIHtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgfVxcclxcblxcclxcbiAgaGVhZGVyIG5hdiB1bC5uYXYtaXRlbSBkaXYubmF2LWl0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgaGVhZGVyIG5hdiB1bC5uYXYtaXRlbSBsaS5uYXYtaXRlbSBhLm5hdi1pdGVtIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucG9wdXAtZGV0YWlscyB7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucG9wdXAtaGVhZGVyIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBvcHVwLWhlYWRlci1kZXNjIC50aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5nZW5yZSB7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW9yZS1pbmZvIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5pZnJhbWUtdmlkZW8ge1xcclxcbiAgICBoZWlnaHQ6IDI1MHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLDZLQUE2SztBQUMvSzs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixtSkFBbUo7QUFDcko7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztBQUNiOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7QUFDZjs7QUFF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QUVBO0lBQ0UsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixlQUFlO0VBQ2pCOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsYUFBYTtFQUNmO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCI7XFxyXFxuICBzcmM6IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcFxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJvYm90byBDb25kZW5zZWRcXFwiO1xcclxcbiAgc3JjOiB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK0NvbmRlbnNlZDppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw3MDA7MSwzMDA7MSw0MDA7MSw3MDAmZGlzcGxheT1zd2FwXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4ub3ZlcmxheSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgb3BhY2l0eTogMC41O1xcclxcbiAgei1pbmRleDogMTA7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc4MDgxYztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IHtcXHJcXG4gIHBhZGRpbmc6IDAgMjBweCAwIDIwcHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgdWwubmF2LWl0ZW0ge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiB1bC5uYXYtaXRlbSBsaS5uYXYtaXRlbSB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgbmF2IGxpLnNlYXJjaCB7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgbGkuc2VhcmNoIHNlY3Rpb24uc2VhcmNoIHtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiBsaS5zZWFyY2ggc2VjdGlvbi5zZWFyY2ggZm9ybS5zZWFyY2gge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3ODA4MWM7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiBsaS5zZWFyY2ggc2VjdGlvbi5zZWFyY2ggZm9ybS5zZWFyY2ggc2VsZWN0IHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3ODA4MWM7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgcGFkZGluZzogMTBweCAwIDEwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiBsaS5zZWFyY2ggc2VjdGlvbi5zZWFyY2ggZm9ybS5zZWFyY2ggaW5wdXRbdHlwZT1cXFwiaW1hZ2VcXFwiXSB7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBuYXYgdWwubmF2LWl0ZW0gbGkubmF2LWl0ZW0gaW1nLm5hdi1pdGVtIHtcXHJcXG4gIHdpZHRoOiAxODBweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIG5hdiB1bC5uYXYtaXRlbSBsaS5uYXYtaXRlbSBhLm5hdi1pdGVtIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC1zaXplOiAwLjJyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLmNvdW50ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLmNvdW50ZXIgaDEge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmNGM1YztcXHJcXG4gIGNvbG9yOiAjZmI4YjI0O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIGRpc3BsYXkgcG9wdXAgY29tbWVudHMgKi9cXHJcXG4ucG9wdXAge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB6LWluZGV4OiAxMDAwO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBoZWlnaHQ6IDgwJTtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC41KSAwIDU0cHggNTVweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwIC0xMnB4IDMwcHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMCA0cHggNnB4LCByZ2JhKDAsIDAsIDAsIDAuMTcpIDAgMTJweCAxM3B4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDAgLTNweCA1cHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgd2lkdGg6IDZweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc4MDgxYztcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWRldGFpbHMge1xcclxcbiAgcGFkZGluZzogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLXBvcHVwLWJ0biB7XFxyXFxuICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLXBvcHVwLWJ0biBidXR0b24ge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBtYXJnaW46IDVweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtaGVhZGVyLWRlc2MgLnRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogNTBweDtcXHJcXG4gIGNvbG9yOiAjYjEwMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtaGVhZGVyLWRlc2MgLnRhZ2xpbmUge1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgY29sb3I6IGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5tb3JlLWluZm8gcCB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmdlbnJlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2VucmUgcCB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxyXFxuICBwYWRkaW5nOiA1cHggMTFweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDMxcHg7XFxyXFxufVxcclxcblxcclxcbi5nZW5yZSBwOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjYjEwMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVsZWFzZS1kYXRlIHtcXHJcXG4gIGNvbG9yOiBncmF5O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vcmUtaW5mbyB7XFxyXFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5tb3JlLWluZm8gc3BhbiB7XFxyXFxuICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdvbGRlbnJvZDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJ2aWV3IHtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBtYXJnaW46IDQwcHggYXV0bztcXHJcXG4gIHBhZGRpbmc6IDQwcHggMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDVkNWQ1O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkNWQ1ZDU7XFxyXFxufVxcclxcblxcclxcbi5vdmVydmlldyBzcGFuIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICBjb2xvcjogIzI0MjQyNDtcXHJcXG59XFxyXFxuXFxyXFxuLmlmcmFtZS12aWRlbyB7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgaGVpZ2h0OiA0MTVweDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXktY29tbWVudHMge1xcclxcbiAgbWFyZ2luOiA0MHB4IGF1dG87XFxyXFxuICB3aWR0aDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1ib2R5IHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDVkNWQ1O1xcclxcbiAgbWFyZ2luOiAyMHB4IDA7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtYm9keTpsYXN0LWNoaWxkIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LW5hbWUge1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjb2xvcjogIzc4MDgxYztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtZGF0ZSB7XFxyXFxuICBmb250LXNpemU6IDEzcHg7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgY29sb3I6ICM3Nzc7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LXRleHQge1xcclxcbiAgY29sb3I6IGdyYXk7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxyXFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIC5mb3JtLWdyb3VwIGlucHV0IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICBtYXJnaW46IDEwcHggMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1ncm91cCB0ZXh0YXJlYSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcbiAgbWFyZ2luOiAxMHB4IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICByZXNpemU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWdyb3VwIC5jb21tZW50LWJ0biB7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzgwODFjO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1ncm91cCAuY29tbWVudC1idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyMDQxMztcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLm1vdmllIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgZ2FwOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24ubW92aWUgZGl2Lm1vdmllIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XFxyXFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IDVweCAjMDAwO1xcclxcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IDVweCAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24ubW92aWUgZGl2Lm1vdmllOmhvdmVyIHtcXHJcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IDVweCAjNzgwODFjO1xcclxcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IDVweCAjNzgwODFjO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24ubW92aWUgZGl2Lm1vdmllIGltZy5tb3ZpZSB7XFxyXFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xcclxcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbm1haW4gc2VjdGlvbi5tb3ZpZSBkaXYubW92aWUgZGl2LmJ1dHRvbi1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDVweCAyNXB4IDVweCAyNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc4MDgxYztcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLm1vdmllIGRpdi5tb3ZpZSBkaXYuYnV0dG9uLWNvbnRhaW5lciBwLmxpa2UtY291bnRlciB7XFxyXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLm1vdmllIGRpdi5tb3ZpZSBkaXYuYnV0dG9uLWNvbnRhaW5lciBpbWcuYnRuLW1vcmUtaW5mbyxcXHJcXG5tYWluIHNlY3Rpb24ubW92aWUgZGl2Lm1vdmllIGRpdi5idXR0b24tY29udGFpbmVyIGltZy5idG4tbGlrZSB7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uLm1vdmllIGRpdi5tb3ZpZSBkaXYuYnV0dG9uLWNvbnRhaW5lciBpbWcuYnRuLW1vcmUtaW5mbzpob3ZlcixcXHJcXG5tYWluIHNlY3Rpb24ubW92aWUgZGl2Lm1vdmllIGRpdi5idXR0b24tY29udGFpbmVyIGltZy5idG4tbGlrZTpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzgwODFjO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWxvZ28ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWxvZ28taW1nIHtcXHJcXG4gIGhlaWdodDogNXJlbTtcXHJcXG4gIHdpZHRoOiAxMHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvcHlyaWdodCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIERlc2t0b3AgKi9cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICBoZWFkZXIgbmF2IHVsLm5hdi1pdGVtIHtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgfVxcclxcblxcclxcbiAgaGVhZGVyIG5hdiB1bC5uYXYtaXRlbSBkaXYubmF2LWl0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgfVxcclxcblxcclxcbiAgaGVhZGVyIG5hdiB1bC5uYXYtaXRlbSBsaS5uYXYtaXRlbSBhLm5hdi1pdGVtIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qIE1vYmlsZSAqL1xcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXHJcXG4gIGhlYWRlciBuYXYge1xcclxcbiAgICBwYWRkaW5nOiAwIDVweCAwIDVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGhlYWRlciBuYXYgdWwubmF2LWl0ZW0ge1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoZWFkZXIgbmF2IHVsLm5hdi1pdGVtIGRpdi5uYXYtaXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoZWFkZXIgbmF2IHVsLm5hdi1pdGVtIGxpLm5hdi1pdGVtIGEubmF2LWl0ZW0ge1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb3B1cC1kZXRhaWxzIHtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb3B1cC1oZWFkZXIge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucG9wdXAtaGVhZGVyLWRlc2MgLnRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmdlbnJlIHtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb3JlLWluZm8ge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmlmcmFtZS12aWRlbyB7XFxyXFxuICAgIGhlaWdodDogMjUwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGFwaUtleSA9ICcwOGRjY2U5ZjRmM2U4ODFjNGYyMTRiMjAyMGI4MzRkMic7XG5jb25zdCBzaXRlSWQgPSAnRWRZMUt2TkNwME9MYUtuMmNIazgnO1xuZXhwb3J0IHsgYXBpS2V5LCBzaXRlSWQgfTtcbiIsImltcG9ydCB7IGdldENvbW1lbnRzIH0gZnJvbSAnLi9lbmRQb2ludEFQSS5qcyc7XG5cbmNvbnN0IGNvbW1lbnRDb3VudGVyID0gYXN5bmMgKGlkKSA9PiBnZXRDb21tZW50cyhpZCkudGhlbigoY29tbWVudHMpID0+IGNvbW1lbnRzLmxlbmd0aCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbW1lbnRDb3VudGVyO1xuIiwiaW1wb3J0IHsgYXBpS2V5LCBzaXRlSWQgfSBmcm9tICcuL2FwaUtleS5qcyc7XG5cbmNvbnN0IGdldE1vdmllTGlzdCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbGlzdC84MjQwMzI2P2FwaV9rZXk9JHthcGlLZXl9Jmxhbmd1YWdlPWVuLVVTYDtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICBjb25zdCBtb3ZpZUxpc3QgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBtb3ZpZUxpc3Q7XG59O1xuXG5jb25zdCBnZXRTaW5nbGVNb3ZpZSA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS8ke2lkfT9hcGlfa2V5PSR7YXBpS2V5fSZsYW5ndWFnZT1lbi1VU2A7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgY29uc3Qgc2luZ2xlTW92aWUgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBzaW5nbGVNb3ZpZTtcbn07XG5cbmNvbnN0IGdldENvbW1lbnRzID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IHVybCA9IGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8ke3NpdGVJZH0vY29tbWVudHM/aXRlbV9pZD0ke2lkfWA7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgY29uc3QgY29tbWVudHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBjb21tZW50cztcbn07XG5cbmNvbnN0IGdldFRyYWlsZXIgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvJHtpZH0vdmlkZW9zP2FwaV9rZXk9JHthcGlLZXl9Jmxhbmd1YWdlPWVuLVVTYDtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICBjb25zdCB0cmFpbGVycyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIHRyYWlsZXJzO1xufTtcblxuY29uc3Qgc2V0Q29tbWVudHMgPSBhc3luYyAoY29tbWVudHMpID0+IHtcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyR7c2l0ZUlkfS9jb21tZW50c2A7XG4gIGF3YWl0IGZldGNoKHVybCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNvbW1lbnRzKSxcbiAgfSk7XG4gIHJldHVybiBjb21tZW50cztcbn07XG5cbmNvbnN0IHNldExpa2UgPSBhc3luYyAobW92aWVJZCkgPT4ge1xuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJHtzaXRlSWR9L2xpa2VzL2A7XG4gIGF3YWl0IGZldGNoKHVybCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaXRlbV9pZDogbW92aWVJZCB9KSxcbiAgfSk7XG59O1xuXG5jb25zdCBnZXRMaWtlID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJHtzaXRlSWR9L2xpa2VzL2A7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgY29uc3QgbGlrZUNvdW50ZXIgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBsaWtlQ291bnRlcjtcbn07XG5cbmV4cG9ydCB7XG4gIGdldE1vdmllTGlzdCwgc2V0TGlrZSwgZ2V0TGlrZSwgZ2V0U2luZ2xlTW92aWUsIGdldENvbW1lbnRzLCBzZXRDb21tZW50cywgZ2V0VHJhaWxlcixcbn07XG4iLCJpbXBvcnQgeyBnZXRNb3ZpZUxpc3QgfSBmcm9tICcuL2VuZFBvaW50QVBJLmpzJztcblxuY29uc3QgZ2V0TW92aWVDb3VudGVyID0gYXN5bmMgKGNhdGVnb3J5KSA9PiB7XG4gIGNvbnN0IG1vdmllTGlzdCA9IGF3YWl0IGdldE1vdmllTGlzdCgpO1xuICBsZXQgY291bnRlciA9IG1vdmllTGlzdC5pdGVtcztcbiAgaWYgKGNhdGVnb3J5ICE9PSAwKSB7XG4gICAgY291bnRlciA9IG1vdmllTGlzdC5pdGVtcy5maWx0ZXIoKG1vdmllKSA9PiBtb3ZpZS5nZW5yZV9pZHMuaW5jbHVkZXMoY2F0ZWdvcnkpKTtcbiAgfVxuICByZXR1cm4gY291bnRlci5sZW5ndGg7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRNb3ZpZUNvdW50ZXI7XG4iLCJpbXBvcnQgY29tbWVudENvdW50ZXIgZnJvbSBcIi4vY29tbWVudC1jb3VudGVyLmpzXCI7XG5pbXBvcnQgeyBnZXRDb21tZW50cywgZ2V0VHJhaWxlciwgc2V0Q29tbWVudHMgfSBmcm9tIFwiLi9lbmRQb2ludEFQSS5qc1wiO1xuXG5jb25zdCBkaXNwbGF5Q29tbWVudCA9IGFzeW5jIChjb21tZW50cykgPT4ge1xuICBsZXQgYXV4ID0gXCJcIjtcbiAgaWYgKGNvbW1lbnRzLmVycm9yKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29tbWVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBjb21tZW50ID0gY29tbWVudHNbaV07XG4gICAgYXV4ICs9IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50LWJvZHlcIj5cbiAgICAgIDxwIGNsYXNzPVwiY29tbWVudC1uYW1lXCI+JHtjb21tZW50LnVzZXJuYW1lfTwvcD5cbiAgICAgIDxwIGNsYXNzPVwiY29tbWVudC1kYXRlXCI+JHtjb21tZW50LmNyZWF0aW9uX2RhdGV9PC9wPlxuICAgICAgPHAgY2xhc3M9XCJjb21tZW50LXRleHRcIj4ke2NvbW1lbnQuY29tbWVudH08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIGA7XG4gIH1cblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbW1lbnRzXCIpLmlubmVySFRNTCA9IGF1eDtcbiAgcmV0dXJuIGF1eDtcbn07XG5jb25zdCBkaXNwbGF5Q29tbWVudENvdW50ZXIgPSBhc3luYyAoY291bnRlcikgPT4ge1xuICBpZiAoY291bnRlcikge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIi5jb21tZW50LWNvdW50ZXJcIlxuICAgICkuaW5uZXJIVE1MID0gYENvbW1lbnRzICgke2NvdW50ZXJ9KSBgO1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tbWVudC1jb3VudGVyXCIpLmlubmVySFRNTCA9IFwiQ29tbWVudHMgMCBcIjtcbiAgfVxufTtcblxuY29uc3QgYWRkQ29tbWVudCA9IGFzeW5jIChpZCkgPT4ge1xuICBnZXRDb21tZW50cyhpZCkudGhlbigoY29tbWVudHMpID0+IHtcbiAgICBkaXNwbGF5Q29tbWVudChjb21tZW50cyk7XG4gIH0pO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybVwiKS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGFzeW5jIChlKSA9PiB7XG4gICAgY29uc3QgY29tbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29tbWVudC10ZXh0YXJlYVwiKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbW1lbnQuZm9jdXMoKTtcbiAgICBjb25zdCB1c2VybmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJ1c2VybmFtZScpLnZhbHVlO1xuICAgIGNvbnN0IGNvbW1lbnRzID0ge1xuICAgICAgaXRlbV9pZDogaWQsXG4gICAgICB1c2VybmFtZTogdXNlcm5hbWUudG9VcHBlckNhc2UoKSxcbiAgICAgIGNvbW1lbnQ6IGNvbW1lbnQudmFsdWUsXG4gICAgfTtcblxuICAgIGF3YWl0IHNldENvbW1lbnRzKGNvbW1lbnRzKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJ1c2VybmFtZScpLnZhbHVlID0gXCJcIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbW1lbnQtdGV4dGFyZWFcIikudmFsdWUgPSBcIlwiO1xuXG4gICAgZ2V0Q29tbWVudHMoaWQpLnRoZW4oKGNvbW1lbnRzKSA9PiB7XG4gICAgICBkaXNwbGF5Q29tbWVudChjb21tZW50cyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjb21tZW50SXRlbSA9IGF3YWl0IGNvbW1lbnRDb3VudGVyKGlkKS50aGVuKChyZXMpID0+IHJlcyk7XG5cbiAgICBhd2FpdCBkaXNwbGF5Q29tbWVudENvdW50ZXIoY29tbWVudEl0ZW0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGNvbW1lbnRQdXB1cEhhbmRsZXIgPSBhc3luYyAoZGF0YSkgPT4ge1xuICBjb25zdCBrZXkgPSBhd2FpdCBnZXRUcmFpbGVyKGRhdGEuaWQpLnRoZW4oKGRhdGEpID0+IGRhdGEucmVzdWx0c1swXS5rZXkpO1xuXG4gIGNvbnN0IGdlbnJlcyA9IGRhdGEuZ2VucmVzLm1hcCgoZ2VuKSA9PiBnZW4ubmFtZSk7XG5cbiAgbGV0IGF1eCA9IFwiXCI7XG4gIGdlbnJlcy5mb3JFYWNoKChnZW5yZSkgPT4ge1xuICAgIGF1eCArPSBgXG4gICAgICA8cD4ke2dlbnJlfTwvcD5cbiAgICBgO1xuICB9KTtcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvcHVwXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvcHVwLWRldGFpbHNcIikuaW5uZXJIVE1MID0gYFxuICAgICAgPGRpdiBjbGFzcz1cImNsb3NlLXBvcHVwLWJ0blwiPlxuICAgICAgPGJ1dHRvbiBvbmNsaWNrPVwiY2xvc2VQb3B1cCgpXCI+JiN4MjcxNTwvYnV0dG9uPlxuXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC1jb250ZW50c1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtY29tbWVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJwb3B1cC1pbWdcIiBzcmM9XCJodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93MzAwLyR7ZGF0YS5wb3N0ZXJfcGF0aH1cIiBhbHQ9XCJtb3ZpZSBpbWFnZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLWhlYWRlci1kZXNjXCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzcz1cInRpdGxlXCI+JHtkYXRhLnRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwidGFnbGluZVwiPiR7ZGF0YS50YWdsaW5lfTwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJyZWxlYXNlLWRhdGVcIj5SZWxlYXNlIGRhdGU6ICR7ZGF0YS5yZWxlYXNlX2RhdGV9PC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2VucmVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vcmUtaW5mb1wiPlxuICAgICAgICAgICAgICAgIDxwPklNRGI6IDxzcGFuPlxuICAgICAgICAgICAgICAgICR7ZGF0YS52b3RlX2F2ZXJhZ2V9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICA8cD4ke2RhdGEudm90ZV9jb3VudH0gdm90ZXM8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgICA8cCBjbGFzcz1cIm92ZXJ2aWV3XCI+IE1vdmllIFBsb3Q6IDxzcGFuPiR7ZGF0YS5vdmVydmlld308L3NwYW4+PC9wPlxuICAgICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpZnJhbWUtdmlkZW9cIj5cbiAgICAgICAgICA8aWZyYW1lIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke2tleX1cIiB0aXRsZT1cIllvdVR1YmUgdmlkZW8gcGxheWVyXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlOyB3ZWItc2hhcmVcIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRpc3BsYXktY29tbWVudHNcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzcz1cImNvbW1lbnQtY291bnRlclwiPjwvaDM+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudHNcIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgICA8Zm9ybSBjbGFzcz1cImFkZC1jb21tZW50XCIgaWQ9XCJmb3JtXCI+XG4gICAgICAgICAgICA8aDM+QWRkIGEgY29tbWVudDwvaDM+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIiBuYW1lPVwidXNlcm5hbWVcIiByZXF1aXJlZC8+XG4gICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJjb21tZW50LXRleHRhcmVhXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIllvdXIgaW5zaWdodHNcIiBuYW1lPVwiY29tbWVudFwiIHJlcXVpcmVkPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY29tbWVudC1idG5cIj5TdWJtaXQ8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5gO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2VucmVcIikuaW5uZXJIVE1MID0gYXV4O1xuICBhZGRDb21tZW50KGRhdGEuaWQpO1xuXG4gIGNvbnN0IGNvbW1lbnRJdGVtID0gYXdhaXQgY29tbWVudENvdW50ZXIoZGF0YS5pZCkudGhlbigocmVzKSA9PiByZXMpO1xuICBhd2FpdCBkaXNwbGF5Q29tbWVudENvdW50ZXIoY29tbWVudEl0ZW0pO1xufTtcblxud2luZG93LmNsb3NlUG9wdXAgPSAoKSA9PiB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9wdXBcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufTtcblxuZXhwb3J0IHsgY29tbWVudFB1cHVwSGFuZGxlciwgZGlzcGxheUNvbW1lbnQgfTtcbiIsImltcG9ydCBoZWFydCBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2hlYXJ0LnBuZyc7XG5pbXBvcnQgbW9yZUluZm8gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9tb3JlLWluZm8ucG5nJztcbmltcG9ydCB7XG4gIGdldExpa2UsXG4gIGdldE1vdmllTGlzdCxcbiAgZ2V0U2luZ2xlTW92aWUsIHNldExpa2UsXG59IGZyb20gJy4vZW5kUG9pbnRBUEkuanMnO1xuaW1wb3J0IHsgY29tbWVudFB1cHVwSGFuZGxlciB9IGZyb20gJy4vcG9wdXAtY29tbWVudHMuanMnO1xuaW1wb3J0IGdldE1vdmllQ291bnRlciBmcm9tICcuL21vdmllQ291bnRlci5qcyc7XG5cbmNvbnN0IHVwZGF0ZUxpa2UgPSAobW92aWVJZCkgPT4ge1xuICBnZXRMaWtlKCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICByZXNwb25zZS5mb3JFYWNoKChsaWtlKSA9PiB7XG4gICAgICBpZiAobGlrZS5pdGVtX2lkID09PSBtb3ZpZUlkKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNjb3VudGVyJHttb3ZpZUlkfWApLnRleHRDb250ZW50ID0gbGlrZS5saWtlcztcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBhZGRMaWtlID0gKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLWxpa2UnKS5mb3JFYWNoKChtb3ZpZSkgPT4ge1xuICAgIG1vdmllLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgbW92aWVJZCA9IG1vdmllLmlkLnNsaWNlKDQpO1xuICAgICAgc2V0TGlrZShtb3ZpZUlkKS50aGVuKCgpID0+IHtcbiAgICAgICAgdXBkYXRlTGlrZShtb3ZpZUlkKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IHJlbmRlckxpa2VzID0gKCkgPT4ge1xuICBnZXRMaWtlKCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLWxpa2UnKS5mb3JFYWNoKChidG5MaWtlKSA9PiB7XG4gICAgICByZXNwb25zZS5mb3JFYWNoKChsaWtlKSA9PiB7XG4gICAgICAgIGlmIChidG5MaWtlLmlkLnNsaWNlKDQpID09PSBsaWtlLml0ZW1faWQpIHtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjY291bnRlciR7bGlrZS5pdGVtX2lkfWApLnRleHRDb250ZW50ID0gbGlrZS5saWtlcztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgcmFuZG9tTW92aWUgPSAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyYW5kb21Nb3ZpZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZ2V0TW92aWVMaXN0KCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnN0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJlc3BvbnNlLml0ZW1zLmxlbmd0aCk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uLm1vdmllJykuaW5uZXJIVE1MID0gJyc7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uLm1vdmllJykuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJtb3ZpZVwiPlxuICAgICAgICAgICAgPGltZyBjbGFzcz1cIm1vdmllXCIgc3JjPVwiaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzMwMC8ke3Jlc3BvbnNlLml0ZW1zW3JhbmRvbV0ucG9zdGVyX3BhdGh9XCIgYWx0PVwiXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiYnRuLW1vcmUtaW5mb1wiIGlkPVwiJHtyZXNwb25zZS5pdGVtc1tyYW5kb21dLmlkfVwiIHNyYz1cIiR7bW9yZUluZm99XCIgYWx0PVwiXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwibGlrZS1jb3VudGVyXCIgaWQ9XCJjb3VudGVyJHtyZXNwb25zZS5pdGVtc1tyYW5kb21dLmlkfVwiPjA8L3A+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJidG4tbGlrZVwiIGlkPVwibGlrZSR7cmVzcG9uc2UuaXRlbXNbcmFuZG9tXS5pZH1cIiBzcmM9XCIke2hlYXJ0fVwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+YDtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJykudGV4dENvbnRlbnQgPSAn8J+Tve+4jyAxIFJhbmRvbSBNb3ZpZXMgR2VuZXJhdGVkIPCfmIEnO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IHJlbmRlck1vdmllID0gYXN5bmMgKG1vdmllTGlzdCwgY2F0ZWdvcnkgPSAwKSA9PiB7XG4gIGNvbnN0IHNlY3Rpb25Nb3ZpZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24ubW92aWUnKTtcbiAgbGV0IGF1eCA9ICcnO1xuICBsZXQgY2F0ZWdvcnlBcnJheSA9IG1vdmllTGlzdDtcbiAgY2F0ZWdvcnkgPSBwYXJzZUludChjYXRlZ29yeSwgMTApO1xuICBzZWN0aW9uTW92aWUuaW5uZXJIVE1MID0gJyc7XG4gIGlmIChjYXRlZ29yeSAhPT0gMCkge1xuICAgIGNhdGVnb3J5QXJyYXkgPSBtb3ZpZUxpc3QuZmlsdGVyKChtb3ZpZSkgPT4gbW92aWUuZ2VucmVfaWRzLmluY2x1ZGVzKGNhdGVnb3J5KSk7XG4gIH1cbiAgY2F0ZWdvcnlBcnJheS5mb3JFYWNoKChtb3ZpZSkgPT4ge1xuICAgIGF1eCArPSBgPGRpdiBjbGFzcz1cIm1vdmllXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwibW92aWVcIiBzcmM9XCJodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93MzAwLyR7bW92aWUucG9zdGVyX3BhdGh9XCIgYWx0PVwiXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiYnRuLW1vcmUtaW5mb1wiIGlkPVwiJHttb3ZpZS5pZH1cIiBzcmM9XCIke21vcmVJbmZvfVwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cImxpa2UtY291bnRlclwiIGlkPVwiY291bnRlciR7bW92aWUuaWR9XCI+MDwvcD5cbiAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImJ0bi1saWtlXCIgaWQ9XCJsaWtlJHttb3ZpZS5pZH1cIiBzcmM9XCIke2hlYXJ0fVwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+YDtcbiAgfSk7XG4gIHJlbmRlckxpa2VzKCk7XG4gIHNlY3Rpb25Nb3ZpZS5pbm5lckhUTUwgPSBhdXg7XG4gIGFkZExpa2UoKTtcbiAgY29uc3QgY291bnRlciA9IGF3YWl0IChnZXRNb3ZpZUNvdW50ZXIoY2F0ZWdvcnkpKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDEnKS50ZXh0Q29udGVudCA9IGDwn5O977iPICR7Y291bnRlcn0gUmV0cm8gTW92aWVzIEZvdW5kIPCfmIFgO1xuICByYW5kb21Nb3ZpZSgpO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tbW9yZS1pbmZvJykuZm9yRWFjaCgobW92aWUpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXAnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIG1vdmllLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZ2V0U2luZ2xlTW92aWUobW92aWUuaWQpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgY29tbWVudFB1cHVwSGFuZGxlcihkYXRhKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IHNvcnRCeUNhdGVnb3J5ID0gKCkgPT4ge1xuICBjb25zdCBmb3JtU2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybS5zZWFyY2gnKTtcbiAgZm9ybVNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBnZXRNb3ZpZUxpc3QoKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgcmVuZGVyTW92aWUocmVzcG9uc2UuaXRlbXMsIGZvcm1TZWFyY2guZWxlbWVudHMuc2VsZWN0Q2F0ZWdvcnkudmFsdWUpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IHJlbmRlck1vdmllTGlzdCA9ICgpID0+IHtcbiAgZ2V0TW92aWVMaXN0KCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICByZW5kZXJNb3ZpZShyZXNwb25zZS5pdGVtcyk7XG4gICAgc29ydEJ5Q2F0ZWdvcnkoKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJNb3ZpZUxpc3Q7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgcmVuZGVyTGlzdCBmcm9tICcuL21vZHVsZXMvcmVuZGVyLmpzJztcblxucmVuZGVyTGlzdCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9