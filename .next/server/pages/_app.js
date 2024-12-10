module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./consts/api_url.js":
/*!***************************!*\
  !*** ./consts/api_url.js ***!
  \***************************/
/*! exports provided: API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
const API_URL = {
  GEOCODE: "/geocode",
  AUTOCOMPLETE: "/Place/Autocomplete",
  DIRECTION: "/Direction",
  DISTANCEMATRIX: "/DistanceMatrix",
  GOOGLE_EMBED: "https://maps.google.com/maps?z=17&output=embed",
  PLACE_DETAIL: "/Place/Detail",
  WEATHER: "https://api.openweathermap.org/data/2.5/weather"
};

/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");
exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric; /**
                                                          * `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
                                                          * This allows for keeping state between navigation, custom error handling, injecting additional data.
                                                          */
async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}
class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }
  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps,
    // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }
}
exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;
if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);
  });
} // @deprecated noop for now until removal
function Container(p) {
  if (true) warnContainer();
  return p.children;
}
function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },
    get pathname() {
      if (true) warnUrl();
      return pathname;
    },
    get asPath() {
      if (true) warnUrl();
      return asPath;
    },
    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainApp; });
/* harmony import */ var antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/config-provider */ "antd/lib/config-provider");
/* harmony import */ var antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_locale_provider_vi_VN__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/locale-provider/vi_VN */ "antd/lib/locale-provider/vi_VN");
/* harmony import */ var antd_lib_locale_provider_vi_VN__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_locale_provider_vi_VN__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_sagas_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/sagas/index */ "./redux/sagas/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux_storeConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux/storeConfig */ "./redux/storeConfig.js");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/index.scss */ "./styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_10__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










const store = Object(_redux_storeConfig__WEBPACK_IMPORTED_MODULE_7__["default"])();
store.runSaga(_redux_sagas_index__WEBPACK_IMPORTED_MODULE_5__["default"]);
class MainApp extends next_app__WEBPACK_IMPORTED_MODULE_3___default.a {
  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_6__["Provider"], {
      store: store
    }, __jsx(next_app__WEBPACK_IMPORTED_MODULE_3__["Container"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("meta", {
      charSet: "UTF-8"
    }), __jsx("meta", {
      name: "viewport",
      content: "width=device-width, height=device-height, initial-scale=1.0"
    }), __jsx("link", {
      rel: "icon",
      href: "/static/images/goong-logo-mini.png"
    }), __jsx("link", {
      rel: "stylesheet",
      href: "https://use.fontawesome.com/releases/v5.2.0/css/all.css",
      integrity: "sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ",
      crossOrigin: "anonymous"
    })), __jsx(antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_0___default.a, {
      locale: antd_lib_locale_provider_vi_VN__WEBPACK_IMPORTED_MODULE_4___default.a
    }, __jsx(Component, pageProps))));
  }
}

/***/ }),

/***/ "./redux/actions/parkingLot.js":
/*!*************************************!*\
  !*** ./redux/actions/parkingLot.js ***!
  \*************************************/
/*! exports provided: getParkingLotsRequest, getParkingLotsSuccess, getParkingLotsFailure, searchParkingLotsRequest, searchParkingLotsSuccess, searchParkingLotsFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParkingLotsRequest", function() { return getParkingLotsRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParkingLotsSuccess", function() { return getParkingLotsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParkingLotsFailure", function() { return getParkingLotsFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchParkingLotsRequest", function() { return searchParkingLotsRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchParkingLotsSuccess", function() { return searchParkingLotsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchParkingLotsFailure", function() { return searchParkingLotsFailure; });
/* harmony import */ var _consts_parkingLot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts/parkingLot */ "./redux/consts/parkingLot.js");

const getParkingLotsRequest = () => ({
  type: _consts_parkingLot__WEBPACK_IMPORTED_MODULE_0__["GET_PARKING_LOTS_REQUEST"]
});
const getParkingLotsSuccess = parkingLots => ({
  type: _consts_parkingLot__WEBPACK_IMPORTED_MODULE_0__["GET_PARKING_LOTS_SUCCESS"],
  parkingLots
});
const getParkingLotsFailure = error => ({
  type: _consts_parkingLot__WEBPACK_IMPORTED_MODULE_0__["GET_PARKING_LOTS_FAILURE"],
  error
});
const searchParkingLotsRequest = keyword => ({
  type: _consts_parkingLot__WEBPACK_IMPORTED_MODULE_0__["SEARCH_PARKING_LOTS_REQUEST"],
  keyword
});
const searchParkingLotsSuccess = results => ({
  type: _consts_parkingLot__WEBPACK_IMPORTED_MODULE_0__["SEARCH_PARKING_LOTS_SUCCESS"],
  results
});
const searchParkingLotsFailure = error => ({
  type: _consts_parkingLot__WEBPACK_IMPORTED_MODULE_0__["SEARCH_PARKING_LOTS_FAILURE"],
  error
});

/***/ }),

/***/ "./redux/consts/boxVisible.js":
/*!************************************!*\
  !*** ./redux/consts/boxVisible.js ***!
  \************************************/
/*! exports provided: SHOW_VISBLE_BOX, SET_RED_MARKER, SET_COLLAPSED_INFO_BOX, SET_POPUP_RIGHT_CLICK */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_VISBLE_BOX", function() { return SHOW_VISBLE_BOX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_RED_MARKER", function() { return SET_RED_MARKER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_COLLAPSED_INFO_BOX", function() { return SET_COLLAPSED_INFO_BOX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_POPUP_RIGHT_CLICK", function() { return SET_POPUP_RIGHT_CLICK; });
const SHOW_VISBLE_BOX = "BOX:SHOW_VISIBLE_BOX",
  SET_RED_MARKER = "MARKER:SET_RED_MARKER",
  SET_COLLAPSED_INFO_BOX = "INFO_BOX:SET_COLLAPSED",
  SET_POPUP_RIGHT_CLICK = "POPUP:SET_POPUP";

/***/ }),

/***/ "./redux/consts/navigation.js":
/*!************************************!*\
  !*** ./redux/consts/navigation.js ***!
  \************************************/
/*! exports provided: SHOW_NAVIGATION_BOX, NAVIGATION_FROM_REQUEST, NAVIGATION_TO_REQUEST, NAVIGATION_REQUEST, NAVIGATION_SUCCESS, NAVIGATION_FAIL, SWAP_REQUEST, NAVIGATION_SELECT_RESULT_REQUEST, NAVIGATION_SELECT_RESULT_SUCCESS, CLEAR_RESULT_REQUEST, CLEAR_REQUEST, TYPE_INPUT, TYPE_LATLONG, INFO_RESTAURANT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_NAVIGATION_BOX", function() { return SHOW_NAVIGATION_BOX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAVIGATION_FROM_REQUEST", function() { return NAVIGATION_FROM_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAVIGATION_TO_REQUEST", function() { return NAVIGATION_TO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAVIGATION_REQUEST", function() { return NAVIGATION_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAVIGATION_SUCCESS", function() { return NAVIGATION_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAVIGATION_FAIL", function() { return NAVIGATION_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SWAP_REQUEST", function() { return SWAP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAVIGATION_SELECT_RESULT_REQUEST", function() { return NAVIGATION_SELECT_RESULT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAVIGATION_SELECT_RESULT_SUCCESS", function() { return NAVIGATION_SELECT_RESULT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_RESULT_REQUEST", function() { return CLEAR_RESULT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_REQUEST", function() { return CLEAR_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_INPUT", function() { return TYPE_INPUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_LATLONG", function() { return TYPE_LATLONG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INFO_RESTAURANT", function() { return INFO_RESTAURANT; });
const SHOW_NAVIGATION_BOX = "BOX:SHOW_NAVIGATION_BOX",
  NAVIGATION_FROM_REQUEST = "LOCATION:NAVIGATION_FROM_REQUEST",
  NAVIGATION_TO_REQUEST = "LOCATION:NAVIGATION_TO_REQUEST",
  NAVIGATION_REQUEST = "LOCATION:NAVIGATION_REQUEST",
  NAVIGATION_SUCCESS = "LOCATION:NAVIGATION_SUCCESS",
  NAVIGATION_FAIL = "LOCATION:NAVIGATION_FAIL",
  SWAP_REQUEST = "LOCATION:SWAP_REQUEST",
  NAVIGATION_SELECT_RESULT_REQUEST = "LOCATION:SELECT_RESULT_REQUEST",
  NAVIGATION_SELECT_RESULT_SUCCESS = "LOCATION:SELECT_RESULT_SUCCESS",
  CLEAR_RESULT_REQUEST = "LOCATION:CLEAR_RESULT_REQUEST",
  CLEAR_REQUEST = "LOCATION:CLEAR_REQUEST",
  TYPE_INPUT = "TYPE_INPUT",
  TYPE_LATLONG = "TYPE_LATLONG",
  INFO_RESTAURANT = "INFO_RESTAURANT";

/***/ }),

/***/ "./redux/consts/parkingLot.js":
/*!************************************!*\
  !*** ./redux/consts/parkingLot.js ***!
  \************************************/
/*! exports provided: GET_PARKING_LOTS_REQUEST, GET_PARKING_LOTS_SUCCESS, GET_PARKING_LOTS_FAILURE, SEARCH_PARKING_LOTS_REQUEST, SEARCH_PARKING_LOTS_SUCCESS, SEARCH_PARKING_LOTS_FAILURE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PARKING_LOTS_REQUEST", function() { return GET_PARKING_LOTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PARKING_LOTS_SUCCESS", function() { return GET_PARKING_LOTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PARKING_LOTS_FAILURE", function() { return GET_PARKING_LOTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_PARKING_LOTS_REQUEST", function() { return SEARCH_PARKING_LOTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_PARKING_LOTS_SUCCESS", function() { return SEARCH_PARKING_LOTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_PARKING_LOTS_FAILURE", function() { return SEARCH_PARKING_LOTS_FAILURE; });
const GET_PARKING_LOTS_REQUEST = "PARKING_LOT:GET_REQUEST",
  GET_PARKING_LOTS_SUCCESS = "PARKING_LOT:GET_SUCCESS",
  GET_PARKING_LOTS_FAILURE = "PARKING_LOT:GET_FAILURE",
  SEARCH_PARKING_LOTS_REQUEST = "PARKING_LOT:SEARCH_REQUEST",
  SEARCH_PARKING_LOTS_SUCCESS = "PARKING_LOT:SEARCH_SUCCESS",
  SEARCH_PARKING_LOTS_FAILURE = "PARKING_LOT:SEARCH_FAILURE";

/***/ }),

/***/ "./redux/consts/place.js":
/*!*******************************!*\
  !*** ./redux/consts/place.js ***!
  \*******************************/
/*! exports provided: GET_DETAIL_BY_ID_REQUEST, GET_DETAIL_BY_ID_SUCCESS, SET_MY_LOCATION, GET_DETAIL_BY_LATLNG_REQUEST, GET_DETAIL_BY_LATLNG_SUCCESS, RESET_LOCATION, GET_DETAIL_AROUND_PLACE_REQUEST, GET_DETAIL_AROUND_PLACE_SUCCESS, SET_MAP_VIEWPORT_REQUEST, SET_CENTER_LATLNG_REQUEST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_DETAIL_BY_ID_REQUEST", function() { return GET_DETAIL_BY_ID_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_DETAIL_BY_ID_SUCCESS", function() { return GET_DETAIL_BY_ID_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_MY_LOCATION", function() { return SET_MY_LOCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_DETAIL_BY_LATLNG_REQUEST", function() { return GET_DETAIL_BY_LATLNG_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_DETAIL_BY_LATLNG_SUCCESS", function() { return GET_DETAIL_BY_LATLNG_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_LOCATION", function() { return RESET_LOCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_DETAIL_AROUND_PLACE_REQUEST", function() { return GET_DETAIL_AROUND_PLACE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_DETAIL_AROUND_PLACE_SUCCESS", function() { return GET_DETAIL_AROUND_PLACE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_MAP_VIEWPORT_REQUEST", function() { return SET_MAP_VIEWPORT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CENTER_LATLNG_REQUEST", function() { return SET_CENTER_LATLNG_REQUEST; });
const GET_DETAIL_BY_ID_REQUEST = "LOCATION:GET_DETAIL_ID_REQUEST",
  GET_DETAIL_BY_ID_SUCCESS = "LOCATION:GET_DETAIL_ID_SUCCESS",
  SET_MY_LOCATION = "LOCATION:SET_MY_LOCATION",
  GET_DETAIL_BY_LATLNG_REQUEST = "LOCATION:GET_DETAIL_LATLNG_REQUEST",
  GET_DETAIL_BY_LATLNG_SUCCESS = "LOCATION:GET_DETAIL_LATLNG_SUCCESS",
  RESET_LOCATION = "LOCATION:RESET",
  GET_DETAIL_AROUND_PLACE_REQUEST = "LOCATION:GET_DETAIL_AROUND_PLACE_REQUEST",
  GET_DETAIL_AROUND_PLACE_SUCCESS = "LOCATION:GET_DETAIL_AROUND_PLACE_SUCCESS",
  SET_MAP_VIEWPORT_REQUEST = "MAP:SET_VIEWPORT_REQUEST",
  SET_CENTER_LATLNG_REQUEST = "MAP:SET_CENTER_LATLNG_REQUEST";

/***/ }),

/***/ "./redux/consts/search.js":
/*!********************************!*\
  !*** ./redux/consts/search.js ***!
  \********************************/
/*! exports provided: SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_CLEAR_REQUEST, SEARCH_AROUND_REQUEST, SEARCH_AROUND_SUCCESS, CLEAR_SEARCH_AROUND_REQUEST, SELECT_AROUND_PLACE_MARKER, SEARCH_HISTORY, SEARCH_DATA, RESTAURANT_DATA, SEARCH_LOCAL_STORAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_REQUEST", function() { return SEARCH_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_SUCCESS", function() { return SEARCH_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_CLEAR_REQUEST", function() { return SEARCH_CLEAR_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_AROUND_REQUEST", function() { return SEARCH_AROUND_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_AROUND_SUCCESS", function() { return SEARCH_AROUND_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_SEARCH_AROUND_REQUEST", function() { return CLEAR_SEARCH_AROUND_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_AROUND_PLACE_MARKER", function() { return SELECT_AROUND_PLACE_MARKER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_HISTORY", function() { return SEARCH_HISTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_DATA", function() { return SEARCH_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESTAURANT_DATA", function() { return RESTAURANT_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_LOCAL_STORAGE", function() { return SEARCH_LOCAL_STORAGE; });
const SEARCH_REQUEST = "SEARCH:SEARCH_REQUEST",
  SEARCH_SUCCESS = "SEARCH:SEARCH_SUCCESS",
  SEARCH_CLEAR_REQUEST = "SEARCH:CLEAR_REQUEST",
  SEARCH_AROUND_REQUEST = "SEARCH:SEARCH_AROUND_REQUEST",
  SEARCH_AROUND_SUCCESS = "SEARCH:SEARCH_AROUND_SUCCESS",
  CLEAR_SEARCH_AROUND_REQUEST = "SEARCH:CLEAR_SEARCH_AROUND_REQUEST",
  SELECT_AROUND_PLACE_MARKER = "SELECT_AROUND_PLACE_MARKER_REQUEST",
  SEARCH_HISTORY = "SEARCH_HISTORY",
  SEARCH_DATA = "SEARCH_DATA",
  RESTAURANT_DATA = "RESTAURANT_DATA",
  SEARCH_LOCAL_STORAGE = "SEARCH_LOCAL_STORAGE";

/***/ }),

/***/ "./redux/reducers/boxVisibleReducer.js":
/*!*********************************************!*\
  !*** ./redux/reducers/boxVisibleReducer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return boxVisibleReducer; });
/* harmony import */ var _consts_boxVisible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts/boxVisible */ "./redux/consts/boxVisible.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

const initialState = {
  box_visible: 'search',
  info_box_collapsed: false,
  red_marker_visible: false,
  position_red_marker: {},
  popup_visible: false,
  position_popup: {},
  type_popup: 'normal'
};
function boxVisibleReducer(state = initialState, action) {
  switch (action.type) {
    case _consts_boxVisible__WEBPACK_IMPORTED_MODULE_0__["SHOW_VISBLE_BOX"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        box_visible: action.type_visible
      });
    case _consts_boxVisible__WEBPACK_IMPORTED_MODULE_0__["SET_RED_MARKER"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        red_marker_visible: action.visible,
        position_red_marker: action.location
      });
    case _consts_boxVisible__WEBPACK_IMPORTED_MODULE_0__["SET_COLLAPSED_INFO_BOX"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        info_box_collapsed: action.collapsed
      });
    case _consts_boxVisible__WEBPACK_IMPORTED_MODULE_0__["SET_POPUP_RIGHT_CLICK"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        popup_visible: action.visible,
        position_popup: action.location,
        type_popup: action.type_popup
      });
    default:
      return _objectSpread({}, state);
  }
}

/***/ }),

/***/ "./redux/reducers/index.js":
/*!*********************************!*\
  !*** ./redux/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _searchReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchReducer */ "./redux/reducers/searchReducer.js");
/* harmony import */ var _placeReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./placeReducer */ "./redux/reducers/placeReducer.js");
/* harmony import */ var _navigationReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigationReducer */ "./redux/reducers/navigationReducer.js");
/* harmony import */ var _boxVisibleReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./boxVisibleReducer */ "./redux/reducers/boxVisibleReducer.js");
/* harmony import */ var _parkingLotReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parkingLotReducer */ "./redux/reducers/parkingLotReducer.js");






const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  searchReducer: _searchReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  placeReducer: _placeReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  navigationReducer: _navigationReducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  boxVisibleReducer: _boxVisibleReducer__WEBPACK_IMPORTED_MODULE_4__["default"],
  parkingLotReducer: _parkingLotReducer__WEBPACK_IMPORTED_MODULE_5__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./redux/reducers/navigationReducer.js":
/*!*********************************************!*\
  !*** ./redux/reducers/navigationReducer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return navigationReducer; });
/* harmony import */ var _consts_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts/navigation */ "./redux/consts/navigation.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

const initialState = {
  from: null,
  to: null,
  result: null,
  text_to_input: '',
  text_from_input: '',
  result_select: 'fastest',
  response_status: true,
  type_input: true,
  type_latlong: '',
  info_restaurant: false
};
function navigationReducer(state = initialState, action) {
  switch (action.type) {
    case _consts_navigation__WEBPACK_IMPORTED_MODULE_0__["NAVIGATION_FROM_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        from: action.place,
        text_from_input: action.text
      });
    case _consts_navigation__WEBPACK_IMPORTED_MODULE_0__["NAVIGATION_TO_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        to: action.place,
        text_to_input: action.text
      });
    case _consts_navigation__WEBPACK_IMPORTED_MODULE_0__["SWAP_REQUEST"]:
      const tmp = state.from;
      const tmp_text = state.text_from_input;
      return _objectSpread(_objectSpread({}, state), {}, {
        from: state.to,
        to: tmp,
        text_from_input: state.text_to_input,
        text_to_input: tmp_text
      });
    case _consts_navigation__WEBPACK_IMPORTED_MODULE_0__["NAVIGATION_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        result: action.result,
        response_status: true
      });
    case _consts_navigation__WEBPACK_IMPORTED_MODULE_0__["NAVIGATION_FAIL"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        result: action.result,
        response_status: false
      });
    case _consts_navigation__WEBPACK_IMPORTED_MODULE_0__["NAVIGATION_SELECT_RESULT_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        result_select: action.roadWay
      });
    case _consts_navigation__WEBPACK_IMPORTED_MODULE_0__["CLEAR_RESULT_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        result: null
      });
    case _consts_navigation__WEBPACK_IMPORTED_MODULE_0__["CLEAR_REQUEST"]:
      return _objectSpread({}, initialState);
    case _consts_navigation__WEBPACK_IMPORTED_MODULE_0__["TYPE_INPUT"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        type_input: action.type_input
      });
    case _consts_navigation__WEBPACK_IMPORTED_MODULE_0__["TYPE_LATLONG"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        type_latlong: action.type_latlong
      });
    case _consts_navigation__WEBPACK_IMPORTED_MODULE_0__["INFO_RESTAURANT"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        info_restaurant: action.info_restaurant
      });
    default:
      return _objectSpread({}, state);
  }
}

/***/ }),

/***/ "./redux/reducers/parkingLotReducer.js":
/*!*********************************************!*\
  !*** ./redux/reducers/parkingLotReducer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parkingLotReducer; });
/* harmony import */ var _consts_parkingLot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts/parkingLot */ "./redux/consts/parkingLot.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

const initialState = {
  parkingLots: [],
  loading: false,
  error: null
};
function parkingLotReducer(state = initialState, action) {
  switch (action.type) {
    case _consts_parkingLot__WEBPACK_IMPORTED_MODULE_0__["GET_PARKING_LOTS_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true,
        error: null
      });
    case _consts_parkingLot__WEBPACK_IMPORTED_MODULE_0__["GET_PARKING_LOTS_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        parkingLots: action.parkingLots,
        error: null
      });
    case _consts_parkingLot__WEBPACK_IMPORTED_MODULE_0__["GET_PARKING_LOTS_FAILURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: action.error
      });
    default:
      return state;
  }
}

/***/ }),

/***/ "./redux/reducers/placeReducer.js":
/*!****************************************!*\
  !*** ./redux/reducers/placeReducer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return searchReducer; });
/* harmony import */ var _consts_place__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts/place */ "./redux/consts/place.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


const initialState = {
  current_place: null,
  near_places: [],
  center: {
    latitude: 21.013722,
    longitude: 105.798232
  },
  viewport: {
    latitude: 21.013722,
    longitude: 105.798232,
    zoom: 12
  },
  my_location: null
};
function searchReducer(state = initialState, action) {
  switch (action.type) {
    case _consts_place__WEBPACK_IMPORTED_MODULE_0__["GET_DETAIL_BY_ID_SUCCESS"]:
      const pid = action.pid || action.data.place_id;
      if (pid) {
        next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push({
          pathname: `/`,
          query: {
            pid: `${pid}`
          }
        });
      } else {
        next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push({
          pathname: `/`,
          query: {
            location: `${action.data.geometry.location.lat},${action.data.geometry.location.lng}`
          }
        });
      }
      return _objectSpread(_objectSpread({}, state), {}, {
        current_place: action.data,
        near_places: action.nearPlaces
      });
    case _consts_place__WEBPACK_IMPORTED_MODULE_0__["RESET_LOCATION"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        current_place: initialState.current_place,
        near_places: initialState.near_places
      });
    case _consts_place__WEBPACK_IMPORTED_MODULE_0__["SET_MAP_VIEWPORT_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        viewport: action.viewport
      });
    case _consts_place__WEBPACK_IMPORTED_MODULE_0__["SET_CENTER_LATLNG_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        center: action.latLng
      });
    case _consts_place__WEBPACK_IMPORTED_MODULE_0__["GET_DETAIL_AROUND_PLACE_SUCCESS"]:
      const pid_around = action.pid || action.data.place_id;
      ;
      if (pid_around) {
        next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push({
          pathname: `/`,
          query: {
            pid_around
          }
        });
      }
      return _objectSpread(_objectSpread({}, state), {}, {
        current_place: action.data,
        near_places: action.nearPlaces
      });
    case _consts_place__WEBPACK_IMPORTED_MODULE_0__["SET_MY_LOCATION"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        my_location: action.latLng
      });
    default:
      return _objectSpread({}, state);
  }
}

/***/ }),

/***/ "./redux/reducers/searchReducer.js":
/*!*****************************************!*\
  !*** ./redux/reducers/searchReducer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return searchReducer; });
/* harmony import */ var _consts_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts/search */ "./redux/consts/search.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

const initialState = {
  places: [],
  around_places: [],
  around_place_select: null,
  search_history: true,
  search_data: [],
  restaurant_data: [],
  search_local_storage: []
};
function searchReducer(state = initialState, action) {
  switch (action.type) {
    case _consts_search__WEBPACK_IMPORTED_MODULE_0__["SEARCH_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        places: action.places
      });
    case _consts_search__WEBPACK_IMPORTED_MODULE_0__["SEARCH_AROUND_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        around_places: action.around_places,
        around_place_center: action.center_location
      });
    case _consts_search__WEBPACK_IMPORTED_MODULE_0__["SEARCH_CLEAR_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        places: initialState.places
      });
    case _consts_search__WEBPACK_IMPORTED_MODULE_0__["CLEAR_SEARCH_AROUND_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        around_places: initialState.around_places,
        around_place_select: null
      });
    case _consts_search__WEBPACK_IMPORTED_MODULE_0__["SELECT_AROUND_PLACE_MARKER"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        around_place_select: action.place
      });
    case _consts_search__WEBPACK_IMPORTED_MODULE_0__["SEARCH_HISTORY"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        search_history: action.search_history
      });
    case _consts_search__WEBPACK_IMPORTED_MODULE_0__["SEARCH_DATA"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        search_data: action.search_data
      });
    case _consts_search__WEBPACK_IMPORTED_MODULE_0__["RESTAURANT_DATA"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        restaurant_data: action.restaurant_data
      });
    case _consts_search__WEBPACK_IMPORTED_MODULE_0__["SEARCH_LOCAL_STORAGE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        search_local_storage: action.search_local_storage
      });
    default:
      return _objectSpread({}, state);
  }
}

/***/ }),

/***/ "./redux/sagas/index.js":
/*!******************************!*\
  !*** ./redux/sagas/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _searchSaga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchSaga */ "./redux/sagas/searchSaga.js");
/* harmony import */ var _placeSaga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./placeSaga */ "./redux/sagas/placeSaga.js");
/* harmony import */ var _navigationSaga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigationSaga */ "./redux/sagas/navigationSaga.js");
/* harmony import */ var _parkingLotSaga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parkingLotSaga */ "./redux/sagas/parkingLotSaga.js");





function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_searchSaga__WEBPACK_IMPORTED_MODULE_1__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_placeSaga__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_navigationSaga__WEBPACK_IMPORTED_MODULE_3__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_parkingLotSaga__WEBPACK_IMPORTED_MODULE_4__["default"])]);
}

/***/ }),

/***/ "./redux/sagas/navigationSaga.js":
/*!***************************************!*\
  !*** ./redux/sagas/navigationSaga.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return navigationSaga; });
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/message */ "antd/lib/message");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _consts_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../consts/navigation */ "./redux/consts/navigation.js");
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/request */ "./utils/request.js");




function* navigationSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_consts_navigation__WEBPACK_IMPORTED_MODULE_2__["NAVIGATION_REQUEST"], navigationRequestSaga)]);
}
function directionService(params) {
  return _utils_request__WEBPACK_IMPORTED_MODULE_3__["default"].direction(params);
}
function* navigationRequestSaga(action) {
  try {
    const {
      from_place,
      to_place,
      vehicle
    } = action;
    let params = {
      origin: {
        latitude: from_place.geometry.location.lat,
        longitude: from_place.geometry.location.lng
      },
      destination: {
        latitude: to_place.geometry.location.lat,
        longitude: to_place.geometry.location.lng
      },
      vehicle
    };
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(directionService, params);
    if (response.status == 200 && response.data.routes.length > 0) {
      var _response$data, _response$data$routes, _response$data2, _response$data2$route;
      const shortest = (_response$data = response.data) === null || _response$data === void 0 ? void 0 : (_response$data$routes = _response$data.routes) === null || _response$data$routes === void 0 ? void 0 : _response$data$routes.sort((r1, r2) => {
        return r1.legs[0].distance.value - r2.legs[0].distance.value;
      })[0];
      const fastest = (_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : (_response$data2$route = _response$data2.routes) === null || _response$data2$route === void 0 ? void 0 : _response$data2$route.sort((r1, r2) => {
        return r1.legs[0].duration.value - r2.legs[0].duration.value;
      })[0];
      const result = {
        fastest: [fastest],
        shortest: [shortest]
      };
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _consts_navigation__WEBPACK_IMPORTED_MODULE_2__["NAVIGATION_SUCCESS"],
        result: result
      });
    } else {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default.a.error("Không tìm thấy đường đi !");
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _consts_navigation__WEBPACK_IMPORTED_MODULE_2__["NAVIGATION_FAIL"],
        result: null
      });
    }
  } catch (error) {
    antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default.a.error("Không tìm thấy đường đi !");
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _consts_navigation__WEBPACK_IMPORTED_MODULE_2__["NAVIGATION_FAIL"],
      result: null
    });
    throw error;
  }
}

/***/ }),

/***/ "./redux/sagas/parkingLotSaga.js":
/*!***************************************!*\
  !*** ./redux/sagas/parkingLotSaga.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parkingLotSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _consts_parkingLot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../consts/parkingLot */ "./redux/consts/parkingLot.js");
/* harmony import */ var _services_parkingLotService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/parkingLotService */ "./services/parkingLotService.js");
/* harmony import */ var _actions_parkingLot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/parkingLot */ "./redux/actions/parkingLot.js");




function* getParkingLotsSaga() {
  try {
    const parkingLots = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_services_parkingLotService__WEBPACK_IMPORTED_MODULE_2__["parkingLotService"].getParkingLots);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_parkingLot__WEBPACK_IMPORTED_MODULE_3__["getParkingLotsSuccess"])(parkingLots));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_parkingLot__WEBPACK_IMPORTED_MODULE_3__["getParkingLotsFailure"])(error.message));
  }
}
function* searchParkingLotsSaga(action) {
  try {
    const results = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_services_parkingLotService__WEBPACK_IMPORTED_MODULE_2__["parkingLotService"].searchParkingLots, action.keyword);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_parkingLot__WEBPACK_IMPORTED_MODULE_3__["searchParkingLotsSuccess"])(results));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_parkingLot__WEBPACK_IMPORTED_MODULE_3__["searchParkingLotsFailure"])(error.message));
  }
}
function* parkingLotSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_consts_parkingLot__WEBPACK_IMPORTED_MODULE_1__["GET_PARKING_LOTS_REQUEST"], getParkingLotsSaga);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_consts_parkingLot__WEBPACK_IMPORTED_MODULE_1__["SEARCH_PARKING_LOTS_REQUEST"], searchParkingLotsSaga);
}

/***/ }),

/***/ "./redux/sagas/placeSaga.js":
/*!**********************************!*\
  !*** ./redux/sagas/placeSaga.js ***!
  \**********************************/
/*! exports provided: default, getDetailIdService, getDetailLatLngService, getDetailAroundPlaceService, getAddressGeocode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return placeSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDetailIdService", function() { return getDetailIdService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDetailLatLngService", function() { return getDetailLatLngService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDetailAroundPlaceService", function() { return getDetailAroundPlaceService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAddressGeocode", function() { return getAddressGeocode; });
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/message */ "antd/lib/message");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _consts_place__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../consts/place */ "./redux/consts/place.js");
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/request */ "./utils/request.js");
/* harmony import */ var _searchSaga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./searchSaga */ "./redux/sagas/searchSaga.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





function* placeSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_consts_place__WEBPACK_IMPORTED_MODULE_2__["GET_DETAIL_BY_ID_REQUEST"], getDetailIdSaga), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_consts_place__WEBPACK_IMPORTED_MODULE_2__["GET_DETAIL_BY_LATLNG_REQUEST"], getDetailLatLngSaga), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_consts_place__WEBPACK_IMPORTED_MODULE_2__["GET_DETAIL_AROUND_PLACE_REQUEST"], getDetailAroundPlaceSaga)]);
}
function getDetailIdService(pid) {
  return _utils_request__WEBPACK_IMPORTED_MODULE_3__["default"].place_detail(pid);
}
function getDetailLatLngService(latLng) {
  return _utils_request__WEBPACK_IMPORTED_MODULE_3__["default"].geocode(latLng);
}
function getDetailAroundPlaceService(id) {
  return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(`https://napi.goong.io/v1/marker/get_marker_detail/${id}`);
}
function* getDetailIdSaga(action) {
  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(getDetailIdService, action.pid);
    const latLng = {
      latitude: response.data.result.geometry.location.lat,
      longitude: response.data.result.geometry.location.lng
    };
    const getByLatLng = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(getDetailLatLngService, latLng);
    if (response.data.status == 'OK' && getByLatLng.data.results.length > 0) {
      var _response_search$data;
      const location = response.data.result.geometry.location.lat + "," + response.data.result.geometry.location.lng;
      const response_search = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_searchSaga__WEBPACK_IMPORTED_MODULE_4__["searchService"], response.data.result.name, location, 11, 10);
      const near_places = (_response_search$data = response_search.data.predictions) === null || _response_search$data === void 0 ? void 0 : _response_search$data.filter(i => i.place_id !== action.pid);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _consts_place__WEBPACK_IMPORTED_MODULE_2__["GET_DETAIL_BY_ID_SUCCESS"],
        data: response.data.result,
        nearPlaces: near_places,
        pid: action.pid
      });
    } else {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default.a.error('Không tìm thấy địa điểm !');
    }
  } catch (error) {
    throw error;
  }
}
function* getDetailLatLngSaga(action) {
  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(getDetailLatLngService, action.latLng);
    if (response.data.status == 'OK' && response.data.results.length > 0) {
      var _response_search$data2;
      const place_return = response.data.results[0];
      const name_place = place_return.address_components[0].long_name;
      const location = place_return.geometry.location.lat + "," + place_return.geometry.location.lng;
      const response_search = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_searchSaga__WEBPACK_IMPORTED_MODULE_4__["searchService"], name_place, location, 11, 10);
      const near_places = (_response_search$data2 = response_search.data.predictions) === null || _response_search$data2 === void 0 ? void 0 : _response_search$data2.filter(i => i.place_id !== place_return.place_id);
      const return_data = _objectSpread(_objectSpread({}, place_return), {}, {
        name: name_place,
        formatted_address: getAddressGeocode(place_return)
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _consts_place__WEBPACK_IMPORTED_MODULE_2__["GET_DETAIL_BY_ID_SUCCESS"],
        data: return_data,
        nearPlaces: near_places
      });
    } else {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default.a.error('Không tìm thấy địa điểm !');
    }
  } catch (error) {
    throw error;
  }
}
function* getDetailAroundPlaceSaga(action) {
  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(getDetailAroundPlaceService, action.id);
    const data = response.data.data;
    if (data) {
      const return_data = _objectSpread(_objectSpread({}, data), {}, {
        place_id: data._id,
        geometry: {
          location: {
            lat: Number(data.lng_lat[1]),
            lng: Number(data.lng_lat[0])
          }
        },
        formatted_address: data.description.address
      });
      const name_place = return_data.name;
      const location = return_data.geometry.location.lat + "," + return_data.geometry.location.lng;
      const response_search = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_searchSaga__WEBPACK_IMPORTED_MODULE_4__["searchService"], name_place, location, 10, 10);
      const near_places = response_search.data.predictions;
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _consts_place__WEBPACK_IMPORTED_MODULE_2__["GET_DETAIL_AROUND_PLACE_SUCCESS"],
        data: return_data,
        nearPlaces: near_places
      });
    } else {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default.a.error('Không tìm thấy địa điểm !');
    }
  } catch (error) {
    throw error;
  }
}
function getAddressGeocode(place) {
  let result = [];
  place.address_components.slice(1).map(item => {
    result.push(item.long_name);
  });
  return result.join(',');
}

/***/ }),

/***/ "./redux/sagas/searchSaga.js":
/*!***********************************!*\
  !*** ./redux/sagas/searchSaga.js ***!
  \***********************************/
/*! exports provided: default, searchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return searchSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchService", function() { return searchService; });
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/message */ "antd/lib/message");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _consts_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../consts/search */ "./redux/consts/search.js");
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/request */ "./utils/request.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _placeSaga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./placeSaga */ "./redux/sagas/placeSaga.js");

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





let searchRequest = null;
function* searchSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_consts_search__WEBPACK_IMPORTED_MODULE_2__["SEARCH_REQUEST"], searchRequestSaga), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_consts_search__WEBPACK_IMPORTED_MODULE_2__["SEARCH_AROUND_REQUEST"], searchAroundSaga)]);
}
function searchService(query, location, radius, limit) {
  if (searchRequest) searchRequest.cancel();
  searchRequest = _utils_request__WEBPACK_IMPORTED_MODULE_3__["default"].autocomplete(query, location, radius, limit);
  return searchRequest;
}
function searchAroundService(location, zoom) {
  return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('https://napi.goong.io/v1/marker/get_markers_in_bear', {
    "lat": location.lat,
    "lng": location.lng,
    "distance": 1000,
    "type_code": ["SUGGESTION"],
    //or "cat_code":["GT_STATIC"]
    "bearing": 0,
    "angle": 360,
    "limit": 50,
    "page": 0,
    "zoom": zoom
  });
}
function* searchRequestSaga(action) {
  if (action.query.trim() === '') {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _consts_search__WEBPACK_IMPORTED_MODULE_2__["SEARCH_SUCCESS"],
      places: []
    });
  } else {
    try {
      const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(searchService, action.query, action.location);
      if (response.data.status == 'OK') {
        const places = response.data.predictions || [];
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _consts_search__WEBPACK_IMPORTED_MODULE_2__["SEARCH_SUCCESS"],
          places: places
        });
      } else {
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
          type: _consts_search__WEBPACK_IMPORTED_MODULE_2__["SEARCH_SUCCESS"],
          places: []
        });
      }
    } catch (error) {}
  }
}
function* searchAroundSaga(action) {
  if (action.location.lat && action.location.lng) {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(searchAroundService, action.location, action.zoom);
    if (response.data.length > 0) {
      const response_center = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_placeSaga__WEBPACK_IMPORTED_MODULE_5__["getDetailLatLngService"], {
        latitude: action.location.lat,
        longitude: action.location.lng
      });
      const place_center = response_center.data.results[0];
      const place_center_return = _objectSpread(_objectSpread({}, place_center), {}, {
        name: place_center.address_components[0].long_name,
        formatted_address: Object(_placeSaga__WEBPACK_IMPORTED_MODULE_5__["getAddressGeocode"])(place_center)
      });
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
        type: _consts_search__WEBPACK_IMPORTED_MODULE_2__["SEARCH_AROUND_SUCCESS"],
        around_places: response.data,
        center_location: place_center_return
      });
    } else {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default.a.error('Không có địa điểm nào quanh đây !');
    }
  }
}

/***/ }),

/***/ "./redux/storeConfig.js":
/*!******************************!*\
  !*** ./redux/storeConfig.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return configureStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/index */ "./redux/reducers/index.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



function configureStore() {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_2___default()();
  return _objectSpread(_objectSpread({}, Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_index__WEBPACK_IMPORTED_MODULE_1__["default"], Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(sagaMiddleware))), {}, {
    runSaga: sagaMiddleware.run
  });
  return _objectSpread(_objectSpread({}, Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_index__WEBPACK_IMPORTED_MODULE_1__["default"], Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(sagaMiddleware))), {}, {
    runSaga: sagaMiddleware.run
  });
}

/***/ }),

/***/ "./services/parkingLotService.js":
/*!***************************************!*\
  !*** ./services/parkingLotService.js ***!
  \***************************************/
/*! exports provided: parkingLotService, getParkingLots, searchParkingLots, getNearbyParkingLots */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parkingLotService", function() { return parkingLotService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParkingLots", function() { return getParkingLots; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchParkingLots", function() { return searchParkingLots; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNearbyParkingLots", function() { return getNearbyParkingLots; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5257/api';
const parkingLotService = {
  getParkingLots: async () => {
    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${API_URL}/ParkingLots`);
      return response.data;
    } catch (error) {
      console.error('Error fetching parking lots:', error);
      throw error;
    }
  },
  searchParkingLots: async keyword => {
    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${API_URL}/ParkingLots?search=${keyword}`);
      return response.data;
    } catch (error) {
      console.error('Error searching parking lots:', error);
      throw error;
    }
  },
  getNearbyParkingLots: async (lat, lng, radiusKm = 2) => {
    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${API_URL}/ParkingLots/nearby?lat=${lat}&lng=${lng}&radiusKm=${radiusKm}`, {
        headers: {
          'Content-Type': 'application/json'
          // Thêm headers khác nếu cần
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching nearby parking lots:', error);
      throw error;
    }
  }
};
const {
  getParkingLots,
  searchParkingLots,
  getNearbyParkingLots
} = parkingLotService;

/***/ }),

/***/ "./styles/index.scss":
/*!***************************!*\
  !*** ./styles/index.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./utils/base_request.js":
/*!*******************************!*\
  !*** ./utils/base_request.js ***!
  \*******************************/
/*! exports provided: GET */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET", function() { return GET; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

const {
  CancelToken
} = axios__WEBPACK_IMPORTED_MODULE_0___default.a;
const GET = (url, params, options = {}) => {
  let cancel;
  let promise = new Promise((resolve, reject) => {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${options.host_name || "https://rsapi.goong.io"}${url}`, {
      params: _objectSpread(_objectSpread({}, params), {}, {
        api_key: options.api_key || "WlmIT8XtdGdBS6pBOePEve49zUx9waRQDSOXrVRv"
      }),
      cancelToken: new CancelToken(function executor(c) {
        cancel = c;
      })
    }).then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    });
  });
  promise.cancel = cancel;
  return promise;
};

/***/ }),

/***/ "./utils/request.js":
/*!**************************!*\
  !*** ./utils/request.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base_request */ "./utils/base_request.js");
/* harmony import */ var _consts_api_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../consts/api_url */ "./consts/api_url.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = ({
  geocode: (location, options) => {
    return Object(_base_request__WEBPACK_IMPORTED_MODULE_0__["GET"])(_consts_api_url__WEBPACK_IMPORTED_MODULE_1__["API_URL"].GEOCODE, {
      latlng: `${location.latitude},${location.longitude}`
    }, options);
  },
  autocomplete: (input, location, limit, radius, has_children, options) => {
    return Object(_base_request__WEBPACK_IMPORTED_MODULE_0__["GET"])(_consts_api_url__WEBPACK_IMPORTED_MODULE_1__["API_URL"].AUTOCOMPLETE, {
      input,
      location,
      radius: radius || 3000,
      limit: limit || 10,
      has_children: has_children || false
    }, options);
  },
  direction: (params, options) => {
    return Object(_base_request__WEBPACK_IMPORTED_MODULE_0__["GET"])(_consts_api_url__WEBPACK_IMPORTED_MODULE_1__["API_URL"].DIRECTION, {
      origin: `${params.origin.latitude},${params.origin.longitude}`,
      destination: `${params.destination.latitude},${params.destination.longitude}`,
      vehicle: params.vehicle || 'car'
    }, options);
  },
  distancematrix: (params, options) => {
    return Object(_base_request__WEBPACK_IMPORTED_MODULE_0__["GET"])(_consts_api_url__WEBPACK_IMPORTED_MODULE_1__["API_URL"].DISTANCEMATRIX, {
      origins: `${params.origin.latitude},${params.origin.longitude}`,
      destinations: `${params.destination.latitude},${params.destination.longitude}`,
      vehicle: `${params.vehicle}`
    }, options);
  },
  place_detail: (placeid, options) => {
    return Object(_base_request__WEBPACK_IMPORTED_MODULE_0__["GET"])(_consts_api_url__WEBPACK_IMPORTED_MODULE_1__["API_URL"].PLACE_DETAIL, {
      placeid
    }, options);
  },
  get_weather: (latitude, longitude) => {
    return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=vi&appid=${"b80572c03d85f1f8899c2073275803d9"}`);
  }
});

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "antd/lib/config-provider":
/*!*******************************************!*\
  !*** external "antd/lib/config-provider" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/config-provider");

/***/ }),

/***/ "antd/lib/locale-provider/vi_VN":
/*!*************************************************!*\
  !*** external "antd/lib/locale-provider/vi_VN" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/locale-provider/vi_VN");

/***/ }),

/***/ "antd/lib/message":
/*!***********************************!*\
  !*** external "antd/lib/message" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL2NvbnN0cy9hcGlfdXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9wYXJraW5nTG90LmpzIiwid2VicGFjazovLy8uL3JlZHV4L2NvbnN0cy9ib3hWaXNpYmxlLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2NvbnN0cy9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2NvbnN0cy9wYXJraW5nTG90LmpzIiwid2VicGFjazovLy8uL3JlZHV4L2NvbnN0cy9wbGFjZS5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9jb25zdHMvc2VhcmNoLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL2JveFZpc2libGVSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL25hdmlnYXRpb25SZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL3BhcmtpbmdMb3RSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL3BsYWNlUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9zZWFyY2hSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3NhZ2FzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHV4L3NhZ2FzL25hdmlnYXRpb25TYWdhLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3NhZ2FzL3BhcmtpbmdMb3RTYWdhLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3NhZ2FzL3BsYWNlU2FnYS5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9zYWdhcy9zZWFyY2hTYWdhLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3N0b3JlQ29uZmlnLmpzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL3BhcmtpbmdMb3RTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2Jhc2VfcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9yZXF1ZXN0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGQvbGliL2NvbmZpZy1wcm92aWRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGQvbGliL2xvY2FsZS1wcm92aWRlci92aV9WTlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGQvbGliL21lc3NhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1oZWxtZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIl0sIm5hbWVzIjpbIkFQSV9VUkwiLCJHRU9DT0RFIiwiQVVUT0NPTVBMRVRFIiwiRElSRUNUSU9OIiwiRElTVEFOQ0VNQVRSSVgiLCJHT09HTEVfRU1CRUQiLCJQTEFDRV9ERVRBSUwiLCJXRUFUSEVSIiwiYXBwR2V0SW5pdGlhbFByb3BzIiwiQ29tcG9uZW50IiwiY3R4IiwicGFnZVByb3BzIiwiQXBwIiwiUmVhY3QiLCJjb21wb25lbnREaWRDYXRjaCIsImVycm9yIiwiX2Vycm9ySW5mbyIsInJlbmRlciIsInJvdXRlciIsIl9fTl9TU0ciLCJfX05fU1NQIiwicHJvcHMiLCJ1cmwiLCJjcmVhdGVVcmwiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIiwid2FybkNvbnRhaW5lciIsIndhcm5VcmwiLCJjb25zb2xlIiwid2FybiIsIkNvbnRhaW5lciIsInAiLCJjaGlsZHJlbiIsInBhdGhuYW1lIiwiYXNQYXRoIiwicXVlcnkiLCJiYWNrIiwicHVzaCIsImFzIiwicHVzaFRvIiwiaHJlZiIsInB1c2hSb3V0ZSIsInB1c2hVcmwiLCJyZXBsYWNlIiwicmVwbGFjZVRvIiwicmVwbGFjZVJvdXRlIiwicmVwbGFjZVVybCIsInN0b3JlIiwiY29uZmlndXJlU3RvcmUiLCJydW5TYWdhIiwicm9vdFNhZ2EiLCJNYWluQXBwIiwiX19qc3giLCJQcm92aWRlciIsIkhlYWQiLCJjaGFyU2V0IiwibmFtZSIsImNvbnRlbnQiLCJyZWwiLCJpbnRlZ3JpdHkiLCJjcm9zc09yaWdpbiIsIl9Db25maWdQcm92aWRlciIsImxvY2FsZSIsInZpX1ZOIiwiZ2V0UGFya2luZ0xvdHNSZXF1ZXN0IiwidHlwZSIsInBhcmtpbmdMb3QiLCJHRVRfUEFSS0lOR19MT1RTX1JFUVVFU1QiLCJnZXRQYXJraW5nTG90c1N1Y2Nlc3MiLCJwYXJraW5nTG90cyIsImdldFBhcmtpbmdMb3RzRmFpbHVyZSIsInNlYXJjaFBhcmtpbmdMb3RzUmVxdWVzdCIsImtleXdvcmQiLCJzZWFyY2hQYXJraW5nTG90c1N1Y2Nlc3MiLCJyZXN1bHRzIiwic2VhcmNoUGFya2luZ0xvdHNGYWlsdXJlIiwiU0hPV19WSVNCTEVfQk9YIiwiU0VUX1JFRF9NQVJLRVIiLCJTRVRfQ09MTEFQU0VEX0lORk9fQk9YIiwiU0VUX1BPUFVQX1JJR0hUX0NMSUNLIiwiU0hPV19OQVZJR0FUSU9OX0JPWCIsIk5BVklHQVRJT05fRlJPTV9SRVFVRVNUIiwiTkFWSUdBVElPTl9UT19SRVFVRVNUIiwiTkFWSUdBVElPTl9SRVFVRVNUIiwiTkFWSUdBVElPTl9TVUNDRVNTIiwiTkFWSUdBVElPTl9GQUlMIiwiU1dBUF9SRVFVRVNUIiwiTkFWSUdBVElPTl9TRUxFQ1RfUkVTVUxUX1JFUVVFU1QiLCJOQVZJR0FUSU9OX1NFTEVDVF9SRVNVTFRfU1VDQ0VTUyIsIkNMRUFSX1JFU1VMVF9SRVFVRVNUIiwiQ0xFQVJfUkVRVUVTVCIsIlRZUEVfSU5QVVQiLCJUWVBFX0xBVExPTkciLCJJTkZPX1JFU1RBVVJBTlQiLCJHRVRfUEFSS0lOR19MT1RTX1NVQ0NFU1MiLCJHRVRfUEFSS0lOR19MT1RTX0ZBSUxVUkUiLCJTRUFSQ0hfUEFSS0lOR19MT1RTX1JFUVVFU1QiLCJTRUFSQ0hfUEFSS0lOR19MT1RTX1NVQ0NFU1MiLCJTRUFSQ0hfUEFSS0lOR19MT1RTX0ZBSUxVUkUiLCJHRVRfREVUQUlMX0JZX0lEX1JFUVVFU1QiLCJHRVRfREVUQUlMX0JZX0lEX1NVQ0NFU1MiLCJTRVRfTVlfTE9DQVRJT04iLCJHRVRfREVUQUlMX0JZX0xBVExOR19SRVFVRVNUIiwiR0VUX0RFVEFJTF9CWV9MQVRMTkdfU1VDQ0VTUyIsIlJFU0VUX0xPQ0FUSU9OIiwiR0VUX0RFVEFJTF9BUk9VTkRfUExBQ0VfUkVRVUVTVCIsIkdFVF9ERVRBSUxfQVJPVU5EX1BMQUNFX1NVQ0NFU1MiLCJTRVRfTUFQX1ZJRVdQT1JUX1JFUVVFU1QiLCJTRVRfQ0VOVEVSX0xBVExOR19SRVFVRVNUIiwiU0VBUkNIX1JFUVVFU1QiLCJTRUFSQ0hfU1VDQ0VTUyIsIlNFQVJDSF9DTEVBUl9SRVFVRVNUIiwiU0VBUkNIX0FST1VORF9SRVFVRVNUIiwiU0VBUkNIX0FST1VORF9TVUNDRVNTIiwiQ0xFQVJfU0VBUkNIX0FST1VORF9SRVFVRVNUIiwiU0VMRUNUX0FST1VORF9QTEFDRV9NQVJLRVIiLCJTRUFSQ0hfSElTVE9SWSIsIlNFQVJDSF9EQVRBIiwiUkVTVEFVUkFOVF9EQVRBIiwiU0VBUkNIX0xPQ0FMX1NUT1JBR0UiLCJpbml0aWFsU3RhdGUiLCJib3hfdmlzaWJsZSIsImluZm9fYm94X2NvbGxhcHNlZCIsInJlZF9tYXJrZXJfdmlzaWJsZSIsInBvc2l0aW9uX3JlZF9tYXJrZXIiLCJwb3B1cF92aXNpYmxlIiwicG9zaXRpb25fcG9wdXAiLCJ0eXBlX3BvcHVwIiwiYm94VmlzaWJsZVJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsImJveCIsIl9vYmplY3RTcHJlYWQiLCJ0eXBlX3Zpc2libGUiLCJ2aXNpYmxlIiwibG9jYXRpb24iLCJjb2xsYXBzZWQiLCJyb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsInNlYXJjaFJlZHVjZXIiLCJwbGFjZVJlZHVjZXIiLCJuYXZpZ2F0aW9uUmVkdWNlciIsInBhcmtpbmdMb3RSZWR1Y2VyIiwiZnJvbSIsInRvIiwicmVzdWx0IiwidGV4dF90b19pbnB1dCIsInRleHRfZnJvbV9pbnB1dCIsInJlc3VsdF9zZWxlY3QiLCJyZXNwb25zZV9zdGF0dXMiLCJ0eXBlX2lucHV0IiwidHlwZV9sYXRsb25nIiwiaW5mb19yZXN0YXVyYW50IiwibmF2aWdhdGlvbiIsInBsYWNlIiwidGV4dCIsInRtcCIsInRtcF90ZXh0Iiwicm9hZFdheSIsImxvYWRpbmciLCJjdXJyZW50X3BsYWNlIiwibmVhcl9wbGFjZXMiLCJjZW50ZXIiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsInZpZXdwb3J0Iiwiem9vbSIsIm15X2xvY2F0aW9uIiwicGlkIiwiZGF0YSIsInBsYWNlX2lkIiwiUm91dGVyIiwiZ2VvbWV0cnkiLCJsYXQiLCJsbmciLCJuZWFyUGxhY2VzIiwibGF0TG5nIiwicGlkX2Fyb3VuZCIsInBsYWNlcyIsImFyb3VuZF9wbGFjZXMiLCJhcm91bmRfcGxhY2Vfc2VsZWN0Iiwic2VhcmNoX2hpc3RvcnkiLCJzZWFyY2hfZGF0YSIsInJlc3RhdXJhbnRfZGF0YSIsInNlYXJjaF9sb2NhbF9zdG9yYWdlIiwic2VhcmNoIiwiYXJvdW5kX3BsYWNlX2NlbnRlciIsImNlbnRlcl9sb2NhdGlvbiIsImFsbCIsImZvcmsiLCJzZWFyY2hTYWdhIiwicGxhY2VTYWdhIiwibmF2aWdhdGlvblNhZ2EiLCJwYXJraW5nTG90U2FnYSIsInRha2VMYXRlc3QiLCJuYXZpZ2F0aW9uUmVxdWVzdFNhZ2EiLCJkaXJlY3Rpb25TZXJ2aWNlIiwicGFyYW1zIiwiUmVxdWVzdCIsImRpcmVjdGlvbiIsImZyb21fcGxhY2UiLCJ0b19wbGFjZSIsInZlaGljbGUiLCJvcmlnaW4iLCJkZXN0aW5hdGlvbiIsInJlc3BvbnNlIiwiY2FsbCIsInN0YXR1cyIsInJvdXRlcyIsImxlbmd0aCIsIl9yZXNwb25zZSRkYXRhIiwiX3Jlc3BvbnNlJGRhdGEkcm91dGVzIiwiX3Jlc3BvbnNlJGRhdGEyIiwiX3Jlc3BvbnNlJGRhdGEyJHJvdXRlIiwic2hvcnRlc3QiLCJzb3J0IiwicjEiLCJyMiIsImxlZ3MiLCJkaXN0YW5jZSIsInZhbHVlIiwiZmFzdGVzdCIsImR1cmF0aW9uIiwicHV0IiwiX21lc3NhZ2UiLCJnZXRQYXJraW5nTG90c1NhZ2EiLCJwYXJraW5nTG90U2VydmljZSIsImdldFBhcmtpbmdMb3RzIiwibWVzc2FnZSIsInNlYXJjaFBhcmtpbmdMb3RzU2FnYSIsInNlYXJjaFBhcmtpbmdMb3RzIiwiZ2V0RGV0YWlsSWRTYWdhIiwiZ2V0RGV0YWlsTGF0TG5nU2FnYSIsImdldERldGFpbEFyb3VuZFBsYWNlU2FnYSIsImdldERldGFpbElkU2VydmljZSIsInBsYWNlX2RldGFpbCIsImdldERldGFpbExhdExuZ1NlcnZpY2UiLCJnZW9jb2RlIiwiZ2V0RGV0YWlsQXJvdW5kUGxhY2VTZXJ2aWNlIiwiaWQiLCJBeGlvcyIsImdldCIsImdldEJ5TGF0TG5nIiwiX3Jlc3BvbnNlX3NlYXJjaCRkYXRhIiwicmVzcG9uc2Vfc2VhcmNoIiwic2VhcmNoU2VydmljZSIsInByZWRpY3Rpb25zIiwiZmlsdGVyIiwiaSIsIl9yZXNwb25zZV9zZWFyY2gkZGF0YTIiLCJwbGFjZV9yZXR1cm4iLCJuYW1lX3BsYWNlIiwiYWRkcmVzc19jb21wb25lbnRzIiwibG9uZ19uYW1lIiwicmV0dXJuX2RhdGEiLCJmb3JtYXR0ZWRfYWRkcmVzcyIsImdldEFkZHJlc3NHZW9jb2RlIiwiX2lkIiwiTnVtYmVyIiwibG5nX2xhdCIsImRlc2NyaXB0aW9uIiwiYWRkcmVzcyIsInNsaWNlIiwibWFwIiwiaXRlbSIsImpvaW4iLCJzZWFyY2hSZXF1ZXN0Iiwic2VhcmNoUmVxdWVzdFNhZ2EiLCJzZWFyY2hBcm91bmRTYWdhIiwicmFkaXVzIiwibGltaXQiLCJjYW5jZWwiLCJhdXRvY29tcGxldGUiLCJzZWFyY2hBcm91bmRTZXJ2aWNlIiwicG9zdCIsInRyaW0iLCJyZXNwb25zZV9jZW50ZXIiLCJwbGFjZV9jZW50ZXIiLCJwbGFjZV9jZW50ZXJfcmV0dXJuIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwicnVuIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJheGlvcyIsImdldE5lYXJieVBhcmtpbmdMb3RzIiwicmFkaXVzS20iLCJoZWFkZXJzIiwiQ2FuY2VsVG9rZW4iLCJHRVQiLCJvcHRpb25zIiwicHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiaG9zdF9uYW1lIiwiYXBpX2tleSIsImNhbmNlbFRva2VuIiwiZXhlY3V0b3IiLCJjIiwidGhlbiIsInJlcyIsImNhdGNoIiwiZXJyIiwibGF0bG5nIiwiaW5wdXQiLCJoYXNfY2hpbGRyZW4iLCJkaXN0YW5jZW1hdHJpeCIsIm9yaWdpbnMiLCJkZXN0aW5hdGlvbnMiLCJwbGFjZWlkIiwiZ2V0X3dlYXRoZXIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNB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Q0FBQztFQUNiLENBQUM7RUFDRDFELFlBQVksRUFBRUEsQ0FBQzhFLE9BQU8sRUFBRXBCLE9BQU8sS0FBSztJQUNsQyxPQUFPRCx5REFBRyxDQUFDcFMsdURBQU8sQ0FBQ00sWUFBWSxFQUFFO01BQy9CbVQ7SUFDRixDQUFDLEVBQUVwQixPQUFPLENBQUM7RUFDYixDQUFDO0VBQ0RxQixXQUFXLEVBQUVBLENBQUN2SixRQUFRLEVBQUVDLFNBQVMsS0FBSztJQUNwQyxPQUFPNEUsNENBQUssQ0FBQ0MsR0FBRyxDQUFDLHVEQUF1RDlFLFFBQVEsUUFBUUMsU0FBUyxtRUFBNEMsQ0FBQztFQUNoSjtBQUNGLENBQUMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0QscUQ7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiZXhwb3J0IGNvbnN0IEFQSV9VUkwgPSB7XG4gIEdFT0NPREU6IFwiL2dlb2NvZGVcIixcbiAgQVVUT0NPTVBMRVRFOiBcIi9QbGFjZS9BdXRvY29tcGxldGVcIixcbiAgRElSRUNUSU9OOiBcIi9EaXJlY3Rpb25cIixcbiAgRElTVEFOQ0VNQVRSSVg6IFwiL0Rpc3RhbmNlTWF0cml4XCIsXG4gIEdPT0dMRV9FTUJFRDogXCJodHRwczovL21hcHMuZ29vZ2xlLmNvbS9tYXBzP3o9MTcmb3V0cHV0PWVtYmVkXCIsXG4gIFBMQUNFX0RFVEFJTDogXCIvUGxhY2UvRGV0YWlsXCIsXG4gIFdFQVRIRVI6XCJodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlclwiLFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2FwcCcpXG4iLCJpbXBvcnQgUmVhY3QsIHsgRXJyb3JJbmZvIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBleGVjT25jZSxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlLFxuICBOZXh0V2ViVml0YWxzTWV0cmljLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi9jbGllbnQvcm91dGVyJ1xuXG5leHBvcnQgeyBBcHBJbml0aWFsUHJvcHMgfVxuXG5leHBvcnQgeyBOZXh0V2ViVml0YWxzTWV0cmljIH1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dCA9IEFwcENvbnRleHRUeXBlPFJvdXRlcj5cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHM8UCA9IHt9PiA9IEFwcFByb3BzVHlwZTxSb3V0ZXIsIFA+XG5cbi8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyh7XG4gIENvbXBvbmVudCxcbiAgY3R4LFxufTogQXBwQ29udGV4dCk6IFByb21pc2U8QXBwSW5pdGlhbFByb3BzPiB7XG4gIGNvbnN0IHBhZ2VQcm9wcyA9IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcDxQID0ge30sIENQID0ge30sIFMgPSB7fT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIFAgJiBBcHBQcm9wczxDUD4sXG4gIFNcbj4ge1xuICBzdGF0aWMgb3JpZ0dldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG5cbiAgLy8gS2VwdCBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgLy8gV2hlbiBzb21lb25lIGVuZGVkIEFwcCB0aGV5IGNvdWxkIGNhbGwgYHN1cGVyLmNvbXBvbmVudERpZENhdGNoYC5cbiAgLy8gQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gRXJyb3JzIGFyZSBjYXVnaHQgYXQgdGhlIHRvcCBsZXZlbFxuICBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIF9lcnJvckluZm86IEVycm9ySW5mbyk6IHZvaWQge1xuICAgIHRocm93IGVycm9yXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByb3V0ZXIsIENvbXBvbmVudCwgcGFnZVByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSB0aGlzXG4gICAgICAucHJvcHMgYXMgQXBwUHJvcHM8Q1A+XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudFxuICAgICAgICB7Li4ucGFnZVByb3BzfVxuICAgICAgICB7XG4gICAgICAgICAgLy8gd2UgZG9uJ3QgYWRkIHRoZSBsZWdhY3kgVVJMIHByb3AgaWYgaXQncyB1c2luZyBub24tbGVnYWN5XG4gICAgICAgICAgLy8gbWV0aG9kcyBsaWtlIGdldFN0YXRpY1Byb3BzIGFuZCBnZXRTZXJ2ZXJTaWRlUHJvcHNcbiAgICAgICAgICAuLi4oIShfX05fU1NHIHx8IF9fTl9TU1ApID8geyB1cmw6IGNyZWF0ZVVybChyb3V0ZXIpIH0gOiB7fSlcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxubGV0IHdhcm5Db250YWluZXI6ICgpID0+IHZvaWRcbmxldCB3YXJuVXJsOiAoKSA9PiB2b2lkXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5Db250YWluZXIgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYFdhcm5pbmc6IHRoZSBcXGBDb250YWluZXJcXGAgaW4gXFxgX2FwcFxcYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCBzaG91bGQgYmUgcmVtb3ZlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvYXBwLWNvbnRhaW5lci1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcblxuICB3YXJuVXJsID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgV2FybmluZzogdGhlICd1cmwnIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3VybC1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcbn1cblxuLy8gQGRlcHJlY2F0ZWQgbm9vcCBmb3Igbm93IHVudGlsIHJlbW92YWxcbmV4cG9ydCBmdW5jdGlvbiBDb250YWluZXIocDogYW55KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuQ29udGFpbmVyKClcbiAgcmV0dXJuIHAuY2hpbGRyZW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVybChyb3V0ZXI6IFJvdXRlcikge1xuICAvLyBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCByZWZlcmVuY2VzIHRoZSByb3V0ZXIgb2JqZWN0IGF0IGNhbGwgdGltZVxuICBjb25zdCB7IHBhdGhuYW1lLCBhc1BhdGgsIHF1ZXJ5IH0gPSByb3V0ZXJcbiAgcmV0dXJuIHtcbiAgICBnZXQgcXVlcnkoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcXVlcnlcbiAgICB9LFxuICAgIGdldCBwYXRobmFtZSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBwYXRobmFtZVxuICAgIH0sXG4gICAgZ2V0IGFzUGF0aCgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBhc1BhdGhcbiAgICB9LFxuICAgIGJhY2s6ICgpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJvdXRlci5iYWNrKClcbiAgICB9LFxuICAgIHB1c2g6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucHVzaCh1cmwsIGFzKVxuICAgIH0sXG4gICAgcHVzaFRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcHVzaFJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHB1c2hVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucHVzaChwdXNoUm91dGUsIHB1c2hVcmwpXG4gICAgfSxcbiAgICByZXBsYWNlOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UodXJsLCBhcylcbiAgICB9LFxuICAgIHJlcGxhY2VUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHJlcGxhY2VSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCByZXBsYWNlVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UocmVwbGFjZVJvdXRlLCByZXBsYWNlVXJsKVxuICAgIH0sXG4gIH1cbn1cbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyBDb25maWdQcm92aWRlciB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IEFwcCwgeyBDb250YWluZXIgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgdmlfVk4gZnJvbSAnYW50ZC9saWIvbG9jYWxlLXByb3ZpZGVyL3ZpX1ZOJztcbmltcG9ydCByb290U2FnYSBmcm9tICcuLi9yZWR1eC9zYWdhcy9pbmRleCc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tICcuLi9yZWR1eC9zdG9yZUNvbmZpZyc7XG5pbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldCc7XG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKCk7XG5zdG9yZS5ydW5TYWdhKHJvb3RTYWdhKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbkFwcCBleHRlbmRzIEFwcCB7XG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSB0aGlzLnByb3BzO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cblx0XHRcdFx0PENvbnRhaW5lcj5cblx0XHRcdFx0XHQ8SGVhZD5cblx0XHRcdFx0XHRcdDxtZXRhIGNoYXJTZXQ9XCJVVEYtOFwiIC8+XG5cdFx0XHRcdFx0XHR7LyogPHRpdGxlPlBhcmtpbmcgTG90IE1hbmFnZW1lbnQ8L3RpdGxlPiAqL31cblx0XHRcdFx0XHRcdDxtZXRhXG5cdFx0XHRcdFx0XHRcdG5hbWU9XCJ2aWV3cG9ydFwiXG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGhlaWdodD1kZXZpY2UtaGVpZ2h0LCBpbml0aWFsLXNjYWxlPTEuMFwiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PGxpbmtcblx0XHRcdFx0XHRcdFx0cmVsPVwiaWNvblwiXG5cdFx0XHRcdFx0XHRcdGhyZWY9XCIvc3RhdGljL2ltYWdlcy9nb29uZy1sb2dvLW1pbmkucG5nXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8bGlua1xuXHRcdFx0XHRcdFx0XHRyZWw9XCJzdHlsZXNoZWV0XCJcblx0XHRcdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS4yLjAvY3NzL2FsbC5jc3NcIlxuXHRcdFx0XHRcdFx0XHRpbnRlZ3JpdHk9XCJzaGEzODQtaFdWamZsd0Z4TDZzTnpudGloMjdiZnhrcjI3UG1iYksvaVN2SithNCswb3dYcTc5ditsc0ZrVzU0Yk9HYmlEUVwiXG5cdFx0XHRcdFx0XHRcdGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9IZWFkPlxuXHRcdFx0XHRcdDxDb25maWdQcm92aWRlciBsb2NhbGU9e3ZpX1ZOfT5cblx0XHRcdFx0XHRcdDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cblx0XHRcdFx0XHQ8L0NvbmZpZ1Byb3ZpZGVyPlxuXHRcdFx0XHQ8L0NvbnRhaW5lcj5cblx0XHRcdDwvUHJvdmlkZXI+XG5cdFx0KTtcblx0fVxufVxuIiwiaW1wb3J0ICogYXMgcGFya2luZ0xvdCBmcm9tICcuLi9jb25zdHMvcGFya2luZ0xvdCc7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UGFya2luZ0xvdHNSZXF1ZXN0ID0gKCkgPT4gKHtcclxuICB0eXBlOiBwYXJraW5nTG90LkdFVF9QQVJLSU5HX0xPVFNfUkVRVUVTVFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQYXJraW5nTG90c1N1Y2Nlc3MgPSAocGFya2luZ0xvdHMpID0+ICh7XHJcbiAgdHlwZTogcGFya2luZ0xvdC5HRVRfUEFSS0lOR19MT1RTX1NVQ0NFU1MsXHJcbiAgcGFya2luZ0xvdHNcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UGFya2luZ0xvdHNGYWlsdXJlID0gKGVycm9yKSA9PiAoe1xyXG4gIHR5cGU6IHBhcmtpbmdMb3QuR0VUX1BBUktJTkdfTE9UU19GQUlMVVJFLFxyXG4gIGVycm9yXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlYXJjaFBhcmtpbmdMb3RzUmVxdWVzdCA9IChrZXl3b3JkKSA9PiAoe1xyXG4gIHR5cGU6IHBhcmtpbmdMb3QuU0VBUkNIX1BBUktJTkdfTE9UU19SRVFVRVNULFxyXG4gIGtleXdvcmRcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VhcmNoUGFya2luZ0xvdHNTdWNjZXNzID0gKHJlc3VsdHMpID0+ICh7XHJcbiAgdHlwZTogcGFya2luZ0xvdC5TRUFSQ0hfUEFSS0lOR19MT1RTX1NVQ0NFU1MsXHJcbiAgcmVzdWx0c1xyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZWFyY2hQYXJraW5nTG90c0ZhaWx1cmUgPSAoZXJyb3IpID0+ICh7XHJcbiAgdHlwZTogcGFya2luZ0xvdC5TRUFSQ0hfUEFSS0lOR19MT1RTX0ZBSUxVUkUsXHJcbiAgZXJyb3JcclxufSk7ICIsImV4cG9ydCBjb25zdFxuICBTSE9XX1ZJU0JMRV9CT1ggPSBcIkJPWDpTSE9XX1ZJU0lCTEVfQk9YXCIsXG5cbiAgU0VUX1JFRF9NQVJLRVIgPSBcIk1BUktFUjpTRVRfUkVEX01BUktFUlwiLFxuXG4gIFNFVF9DT0xMQVBTRURfSU5GT19CT1ggPSBcIklORk9fQk9YOlNFVF9DT0xMQVBTRURcIixcblxuICBTRVRfUE9QVVBfUklHSFRfQ0xJQ0sgPSBcIlBPUFVQOlNFVF9QT1BVUFwiIiwiZXhwb3J0IGNvbnN0XG4gIFNIT1dfTkFWSUdBVElPTl9CT1ggPSBcIkJPWDpTSE9XX05BVklHQVRJT05fQk9YXCIsXG5cbiAgTkFWSUdBVElPTl9GUk9NX1JFUVVFU1QgPSBcIkxPQ0FUSU9OOk5BVklHQVRJT05fRlJPTV9SRVFVRVNUXCIsXG5cbiAgTkFWSUdBVElPTl9UT19SRVFVRVNUID0gXCJMT0NBVElPTjpOQVZJR0FUSU9OX1RPX1JFUVVFU1RcIixcblxuICBOQVZJR0FUSU9OX1JFUVVFU1QgPSBcIkxPQ0FUSU9OOk5BVklHQVRJT05fUkVRVUVTVFwiLFxuICBOQVZJR0FUSU9OX1NVQ0NFU1MgPSBcIkxPQ0FUSU9OOk5BVklHQVRJT05fU1VDQ0VTU1wiLFxuICBOQVZJR0FUSU9OX0ZBSUwgPSBcIkxPQ0FUSU9OOk5BVklHQVRJT05fRkFJTFwiLFxuXG4gIFNXQVBfUkVRVUVTVCA9IFwiTE9DQVRJT046U1dBUF9SRVFVRVNUXCIsXG5cbiAgTkFWSUdBVElPTl9TRUxFQ1RfUkVTVUxUX1JFUVVFU1QgPSBcIkxPQ0FUSU9OOlNFTEVDVF9SRVNVTFRfUkVRVUVTVFwiLFxuICBOQVZJR0FUSU9OX1NFTEVDVF9SRVNVTFRfU1VDQ0VTUyA9IFwiTE9DQVRJT046U0VMRUNUX1JFU1VMVF9TVUNDRVNTXCIsXG5cbiAgQ0xFQVJfUkVTVUxUX1JFUVVFU1QgPSBcIkxPQ0FUSU9OOkNMRUFSX1JFU1VMVF9SRVFVRVNUXCIsXG5cbiAgQ0xFQVJfUkVRVUVTVCA9IFwiTE9DQVRJT046Q0xFQVJfUkVRVUVTVFwiLFxuXG4gIFRZUEVfSU5QVVQgPSBcIlRZUEVfSU5QVVRcIixcbiAgVFlQRV9MQVRMT05HID0gXCJUWVBFX0xBVExPTkdcIixcbiAgSU5GT19SRVNUQVVSQU5UID0gXCJJTkZPX1JFU1RBVVJBTlRcIiIsImV4cG9ydCBjb25zdCBcclxuICBHRVRfUEFSS0lOR19MT1RTX1JFUVVFU1QgPSBcIlBBUktJTkdfTE9UOkdFVF9SRVFVRVNUXCIsXHJcbiAgR0VUX1BBUktJTkdfTE9UU19TVUNDRVNTID0gXCJQQVJLSU5HX0xPVDpHRVRfU1VDQ0VTU1wiLFxyXG4gIEdFVF9QQVJLSU5HX0xPVFNfRkFJTFVSRSA9IFwiUEFSS0lOR19MT1Q6R0VUX0ZBSUxVUkVcIixcclxuICBTRUFSQ0hfUEFSS0lOR19MT1RTX1JFUVVFU1QgPSBcIlBBUktJTkdfTE9UOlNFQVJDSF9SRVFVRVNUXCIsXHJcbiAgU0VBUkNIX1BBUktJTkdfTE9UU19TVUNDRVNTID0gXCJQQVJLSU5HX0xPVDpTRUFSQ0hfU1VDQ0VTU1wiLFxyXG4gIFNFQVJDSF9QQVJLSU5HX0xPVFNfRkFJTFVSRSA9IFwiUEFSS0lOR19MT1Q6U0VBUkNIX0ZBSUxVUkVcIjsgIiwiZXhwb3J0IGNvbnN0XG4gIEdFVF9ERVRBSUxfQllfSURfUkVRVUVTVCA9IFwiTE9DQVRJT046R0VUX0RFVEFJTF9JRF9SRVFVRVNUXCIsXG4gIEdFVF9ERVRBSUxfQllfSURfU1VDQ0VTUyA9IFwiTE9DQVRJT046R0VUX0RFVEFJTF9JRF9TVUNDRVNTXCIsXG5cbiAgU0VUX01ZX0xPQ0FUSU9OID0gXCJMT0NBVElPTjpTRVRfTVlfTE9DQVRJT05cIixcblxuICBHRVRfREVUQUlMX0JZX0xBVExOR19SRVFVRVNUID0gXCJMT0NBVElPTjpHRVRfREVUQUlMX0xBVExOR19SRVFVRVNUXCIsXG4gIEdFVF9ERVRBSUxfQllfTEFUTE5HX1NVQ0NFU1MgPSBcIkxPQ0FUSU9OOkdFVF9ERVRBSUxfTEFUTE5HX1NVQ0NFU1NcIixcblxuICBSRVNFVF9MT0NBVElPTiA9IFwiTE9DQVRJT046UkVTRVRcIixcbiAgR0VUX0RFVEFJTF9BUk9VTkRfUExBQ0VfUkVRVUVTVCA9IFwiTE9DQVRJT046R0VUX0RFVEFJTF9BUk9VTkRfUExBQ0VfUkVRVUVTVFwiLFxuICBHRVRfREVUQUlMX0FST1VORF9QTEFDRV9TVUNDRVNTID0gXCJMT0NBVElPTjpHRVRfREVUQUlMX0FST1VORF9QTEFDRV9TVUNDRVNTXCIsXG5cbiAgU0VUX01BUF9WSUVXUE9SVF9SRVFVRVNUID0gXCJNQVA6U0VUX1ZJRVdQT1JUX1JFUVVFU1RcIixcbiAgU0VUX0NFTlRFUl9MQVRMTkdfUkVRVUVTVCA9IFwiTUFQOlNFVF9DRU5URVJfTEFUTE5HX1JFUVVFU1RcIlxuIiwiZXhwb3J0IGNvbnN0XG4gICAgU0VBUkNIX1JFUVVFU1QgPSBcIlNFQVJDSDpTRUFSQ0hfUkVRVUVTVFwiLFxuICAgIFNFQVJDSF9TVUNDRVNTID0gXCJTRUFSQ0g6U0VBUkNIX1NVQ0NFU1NcIixcblxuICAgIFNFQVJDSF9DTEVBUl9SRVFVRVNUID0gXCJTRUFSQ0g6Q0xFQVJfUkVRVUVTVFwiLFxuXG4gICAgU0VBUkNIX0FST1VORF9SRVFVRVNUID0gXCJTRUFSQ0g6U0VBUkNIX0FST1VORF9SRVFVRVNUXCIsXG4gICAgU0VBUkNIX0FST1VORF9TVUNDRVNTID0gXCJTRUFSQ0g6U0VBUkNIX0FST1VORF9TVUNDRVNTXCIsXG5cbiAgICBDTEVBUl9TRUFSQ0hfQVJPVU5EX1JFUVVFU1QgPSBcIlNFQVJDSDpDTEVBUl9TRUFSQ0hfQVJPVU5EX1JFUVVFU1RcIixcbiAgICBTRUxFQ1RfQVJPVU5EX1BMQUNFX01BUktFUiA9IFwiU0VMRUNUX0FST1VORF9QTEFDRV9NQVJLRVJfUkVRVUVTVFwiLFxuXG4gICAgU0VBUkNIX0hJU1RPUlkgPSBcIlNFQVJDSF9ISVNUT1JZXCIsXG5cbiAgICBTRUFSQ0hfREFUQSA9IFwiU0VBUkNIX0RBVEFcIixcbiAgICBSRVNUQVVSQU5UX0RBVEEgPSBcIlJFU1RBVVJBTlRfREFUQVwiLFxuICAgIFNFQVJDSF9MT0NBTF9TVE9SQUdFID0gXCJTRUFSQ0hfTE9DQUxfU1RPUkFHRVwiIiwiaW1wb3J0ICogYXMgYm94IGZyb20gJy4uL2NvbnN0cy9ib3hWaXNpYmxlJ1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGJveF92aXNpYmxlOiAnc2VhcmNoJyxcbiAgaW5mb19ib3hfY29sbGFwc2VkOiBmYWxzZSxcbiAgcmVkX21hcmtlcl92aXNpYmxlOiBmYWxzZSxcbiAgcG9zaXRpb25fcmVkX21hcmtlcjoge30sXG4gIHBvcHVwX3Zpc2libGU6IGZhbHNlLFxuICBwb3NpdGlvbl9wb3B1cDoge30sXG4gIHR5cGVfcG9wdXA6ICdub3JtYWwnXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJveFZpc2libGVSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgYm94LlNIT1dfVklTQkxFX0JPWDpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBib3hfdmlzaWJsZTogYWN0aW9uLnR5cGVfdmlzaWJsZSB9XG4gICAgY2FzZSBib3guU0VUX1JFRF9NQVJLRVI6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcmVkX21hcmtlcl92aXNpYmxlOiBhY3Rpb24udmlzaWJsZSwgcG9zaXRpb25fcmVkX21hcmtlcjogYWN0aW9uLmxvY2F0aW9uIH1cbiAgICBjYXNlIGJveC5TRVRfQ09MTEFQU0VEX0lORk9fQk9YOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGluZm9fYm94X2NvbGxhcHNlZDogYWN0aW9uLmNvbGxhcHNlZCB9XG4gICAgY2FzZSBib3guU0VUX1BPUFVQX1JJR0hUX0NMSUNLOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHBvcHVwX3Zpc2libGU6IGFjdGlvbi52aXNpYmxlLCBwb3NpdGlvbl9wb3B1cDogYWN0aW9uLmxvY2F0aW9uLCB0eXBlX3BvcHVwOiBhY3Rpb24udHlwZV9wb3B1cCB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH1cbiAgfVxufSIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBzZWFyY2hSZWR1Y2VyIGZyb20gJy4vc2VhcmNoUmVkdWNlcic7XG5pbXBvcnQgcGxhY2VSZWR1Y2VyIGZyb20gJy4vcGxhY2VSZWR1Y2VyJztcbmltcG9ydCBuYXZpZ2F0aW9uUmVkdWNlciBmcm9tICcuL25hdmlnYXRpb25SZWR1Y2VyJztcbmltcG9ydCBib3hWaXNpYmxlUmVkdWNlciBmcm9tICcuL2JveFZpc2libGVSZWR1Y2VyJztcbmltcG9ydCBwYXJraW5nTG90UmVkdWNlciBmcm9tICcuL3BhcmtpbmdMb3RSZWR1Y2VyJztcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuXHRzZWFyY2hSZWR1Y2VyLFxuXHRwbGFjZVJlZHVjZXIsXG5cdG5hdmlnYXRpb25SZWR1Y2VyLFxuXHRib3hWaXNpYmxlUmVkdWNlcixcblx0cGFya2luZ0xvdFJlZHVjZXIsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XG4iLCJpbXBvcnQgKiBhcyBuYXZpZ2F0aW9uIGZyb20gJy4uL2NvbnN0cy9uYXZpZ2F0aW9uJ1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGZyb206IG51bGwsXG4gIHRvOiBudWxsLFxuICByZXN1bHQ6IG51bGwsXG4gIHRleHRfdG9faW5wdXQ6ICcnLFxuICB0ZXh0X2Zyb21faW5wdXQ6ICcnLFxuICByZXN1bHRfc2VsZWN0OiAnZmFzdGVzdCcsXG4gIHJlc3BvbnNlX3N0YXR1czogdHJ1ZSxcbiAgdHlwZV9pbnB1dDogdHJ1ZSxcbiAgdHlwZV9sYXRsb25nOiAnJyxcbiAgaW5mb19yZXN0YXVyYW50OiBmYWxzZVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuYXZpZ2F0aW9uUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblxuICAgIGNhc2UgbmF2aWdhdGlvbi5OQVZJR0FUSU9OX0ZST01fUkVRVUVTVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmcm9tOiBhY3Rpb24ucGxhY2UsXG4gICAgICAgIHRleHRfZnJvbV9pbnB1dDogYWN0aW9uLnRleHQsXG4gICAgICB9XG5cbiAgICBjYXNlIG5hdmlnYXRpb24uTkFWSUdBVElPTl9UT19SRVFVRVNUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHRvOiBhY3Rpb24ucGxhY2UsXG4gICAgICAgIHRleHRfdG9faW5wdXQ6IGFjdGlvbi50ZXh0LFxuICAgICAgfVxuXG4gICAgY2FzZSBuYXZpZ2F0aW9uLlNXQVBfUkVRVUVTVDpcbiAgICAgIGNvbnN0IHRtcCA9IHN0YXRlLmZyb207XG4gICAgICBjb25zdCB0bXBfdGV4dCA9IHN0YXRlLnRleHRfZnJvbV9pbnB1dDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmcm9tOiBzdGF0ZS50byxcbiAgICAgICAgdG86IHRtcCxcbiAgICAgICAgdGV4dF9mcm9tX2lucHV0OiBzdGF0ZS50ZXh0X3RvX2lucHV0LFxuICAgICAgICB0ZXh0X3RvX2lucHV0OiB0bXBfdGV4dFxuICAgICAgfVxuXG4gICAgY2FzZSBuYXZpZ2F0aW9uLk5BVklHQVRJT05fU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCByZXN1bHQ6IGFjdGlvbi5yZXN1bHQsIHJlc3BvbnNlX3N0YXR1czogdHJ1ZSB9XG5cbiAgICBjYXNlIG5hdmlnYXRpb24uTkFWSUdBVElPTl9GQUlMOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHJlc3VsdDogYWN0aW9uLnJlc3VsdCwgcmVzcG9uc2Vfc3RhdHVzOiBmYWxzZSB9XG5cbiAgICBjYXNlIG5hdmlnYXRpb24uTkFWSUdBVElPTl9TRUxFQ1RfUkVTVUxUX1JFUVVFU1Q6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcmVzdWx0X3NlbGVjdDogYWN0aW9uLnJvYWRXYXkgfVxuXG4gICAgY2FzZSBuYXZpZ2F0aW9uLkNMRUFSX1JFU1VMVF9SRVFVRVNUOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHJlc3VsdDogbnVsbCB9XG5cbiAgICBjYXNlIG5hdmlnYXRpb24uQ0xFQVJfUkVRVUVTVDpcbiAgICAgIHJldHVybiB7IC4uLmluaXRpYWxTdGF0ZSB9XG5cbiAgICBjYXNlIG5hdmlnYXRpb24uVFlQRV9JTlBVVDpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB0eXBlX2lucHV0OiBhY3Rpb24udHlwZV9pbnB1dCB9XG4gICAgY2FzZSBuYXZpZ2F0aW9uLlRZUEVfTEFUTE9ORzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB0eXBlX2xhdGxvbmc6IGFjdGlvbi50eXBlX2xhdGxvbmcgfVxuICAgIGNhc2UgbmF2aWdhdGlvbi5JTkZPX1JFU1RBVVJBTlQ6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaW5mb19yZXN0YXVyYW50OiBhY3Rpb24uaW5mb19yZXN0YXVyYW50IH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfVxuICB9XG59IiwiaW1wb3J0ICogYXMgcGFya2luZ0xvdCBmcm9tICcuLi9jb25zdHMvcGFya2luZ0xvdCc7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcblx0cGFya2luZ0xvdHM6IFtdLFxyXG5cdGxvYWRpbmc6IGZhbHNlLFxyXG5cdGVycm9yOiBudWxsLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFya2luZ0xvdFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgcGFya2luZ0xvdC5HRVRfUEFSS0lOR19MT1RTX1JFUVVFU1Q6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bG9hZGluZzogdHJ1ZSxcclxuXHRcdFx0XHRlcnJvcjogbnVsbCxcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgcGFya2luZ0xvdC5HRVRfUEFSS0lOR19MT1RTX1NVQ0NFU1M6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0cGFya2luZ0xvdHM6IGFjdGlvbi5wYXJraW5nTG90cyxcclxuXHRcdFx0XHRlcnJvcjogbnVsbCxcclxuXHRcdFx0fTtcclxuXHRcdGNhc2UgcGFya2luZ0xvdC5HRVRfUEFSS0lOR19MT1RTX0ZBSUxVUkU6XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0ZXJyb3I6IGFjdGlvbi5lcnJvcixcclxuXHRcdFx0fTtcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgcGxhY2UgZnJvbSAnLi4vY29uc3RzL3BsYWNlJ1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgY3VycmVudF9wbGFjZTogbnVsbCxcbiAgbmVhcl9wbGFjZXM6IFtdLFxuICBjZW50ZXI6IHtcbiAgICBsYXRpdHVkZTogMjEuMDEzNzIyLFxuICAgIGxvbmdpdHVkZTogMTA1Ljc5ODIzMlxuICB9LFxuICB2aWV3cG9ydDoge1xuICAgIGxhdGl0dWRlOiAyMS4wMTM3MjIsXG4gICAgbG9uZ2l0dWRlOiAxMDUuNzk4MjMyLFxuICAgIHpvb206IDEyXG4gIH0sXG4gIG15X2xvY2F0aW9uOiBudWxsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlYXJjaFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBwbGFjZS5HRVRfREVUQUlMX0JZX0lEX1NVQ0NFU1M6XG4gICAgICBjb25zdCBwaWQgPSBhY3Rpb24ucGlkIHx8IGFjdGlvbi5kYXRhLnBsYWNlX2lkO1xuICAgICAgaWYgKHBpZCkge1xuICAgICAgICBSb3V0ZXIucHVzaCh7XG4gICAgICAgICAgcGF0aG5hbWU6IGAvYCxcbiAgICAgICAgICBxdWVyeTogeyBwaWQ6IGAke3BpZH1gIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBSb3V0ZXIucHVzaCh7XG4gICAgICAgICAgcGF0aG5hbWU6IGAvYCxcbiAgICAgICAgICBxdWVyeTogeyBsb2NhdGlvbjogYCR7YWN0aW9uLmRhdGEuZ2VvbWV0cnkubG9jYXRpb24ubGF0fSwke2FjdGlvbi5kYXRhLmdlb21ldHJ5LmxvY2F0aW9uLmxuZ31gIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY3VycmVudF9wbGFjZTogYWN0aW9uLmRhdGEsIG5lYXJfcGxhY2VzOiBhY3Rpb24ubmVhclBsYWNlcyB9XG5cbiAgICBjYXNlIHBsYWNlLlJFU0VUX0xPQ0FUSU9OOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGN1cnJlbnRfcGxhY2U6IGluaXRpYWxTdGF0ZS5jdXJyZW50X3BsYWNlLCBuZWFyX3BsYWNlczogaW5pdGlhbFN0YXRlLm5lYXJfcGxhY2VzIH1cblxuICAgIGNhc2UgcGxhY2UuU0VUX01BUF9WSUVXUE9SVF9SRVFVRVNUOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHZpZXdwb3J0OiBhY3Rpb24udmlld3BvcnQgfVxuXG4gICAgY2FzZSBwbGFjZS5TRVRfQ0VOVEVSX0xBVExOR19SRVFVRVNUOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNlbnRlcjogYWN0aW9uLmxhdExuZyB9XG5cbiAgICBjYXNlIHBsYWNlLkdFVF9ERVRBSUxfQVJPVU5EX1BMQUNFX1NVQ0NFU1M6XG4gICAgICBjb25zdCBwaWRfYXJvdW5kID0gYWN0aW9uLnBpZCB8fCBhY3Rpb24uZGF0YS5wbGFjZV9pZDs7XG4gICAgICBpZiAocGlkX2Fyb3VuZCkge1xuICAgICAgICBSb3V0ZXIucHVzaCh7XG4gICAgICAgICAgcGF0aG5hbWU6IGAvYCxcbiAgICAgICAgICBxdWVyeTogeyBwaWRfYXJvdW5kIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY3VycmVudF9wbGFjZTogYWN0aW9uLmRhdGEsIG5lYXJfcGxhY2VzOiBhY3Rpb24ubmVhclBsYWNlcyB9XG4gICAgXG4gICAgY2FzZSBwbGFjZS5TRVRfTVlfTE9DQVRJT046XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbXlfbG9jYXRpb246IGFjdGlvbi5sYXRMbmcgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH1cbiAgfVxufSIsImltcG9ydCAqIGFzIHNlYXJjaCBmcm9tICcuLi9jb25zdHMvc2VhcmNoJ1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHBsYWNlczogW10sXG4gIGFyb3VuZF9wbGFjZXM6IFtdLFxuICBhcm91bmRfcGxhY2Vfc2VsZWN0OiBudWxsLFxuICBzZWFyY2hfaGlzdG9yeTogdHJ1ZSxcbiAgc2VhcmNoX2RhdGE6IFtdLFxuICByZXN0YXVyYW50X2RhdGE6IFtdLFxuICBzZWFyY2hfbG9jYWxfc3RvcmFnZTogW11cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2VhcmNoUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIHNlYXJjaC5TRUFSQ0hfU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwbGFjZXM6IGFjdGlvbi5wbGFjZXMgfVxuICAgIGNhc2Ugc2VhcmNoLlNFQVJDSF9BUk9VTkRfU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBhcm91bmRfcGxhY2VzOiBhY3Rpb24uYXJvdW5kX3BsYWNlcywgYXJvdW5kX3BsYWNlX2NlbnRlcjogYWN0aW9uLmNlbnRlcl9sb2NhdGlvbiB9XG4gICAgY2FzZSBzZWFyY2guU0VBUkNIX0NMRUFSX1JFUVVFU1Q6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcGxhY2VzOiBpbml0aWFsU3RhdGUucGxhY2VzIH1cbiAgICBjYXNlIHNlYXJjaC5DTEVBUl9TRUFSQ0hfQVJPVU5EX1JFUVVFU1Q6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgYXJvdW5kX3BsYWNlczogaW5pdGlhbFN0YXRlLmFyb3VuZF9wbGFjZXMsIGFyb3VuZF9wbGFjZV9zZWxlY3Q6IG51bGwgfVxuICAgIGNhc2Ugc2VhcmNoLlNFTEVDVF9BUk9VTkRfUExBQ0VfTUFSS0VSOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGFyb3VuZF9wbGFjZV9zZWxlY3Q6IGFjdGlvbi5wbGFjZSB9XG4gICAgY2FzZSBzZWFyY2guU0VBUkNIX0hJU1RPUlk6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgc2VhcmNoX2hpc3Rvcnk6IGFjdGlvbi5zZWFyY2hfaGlzdG9yeSB9XG4gICAgY2FzZSBzZWFyY2guU0VBUkNIX0RBVEE6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgc2VhcmNoX2RhdGE6IGFjdGlvbi5zZWFyY2hfZGF0YSB9XG4gICAgY2FzZSBzZWFyY2guUkVTVEFVUkFOVF9EQVRBOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHJlc3RhdXJhbnRfZGF0YTogYWN0aW9uLnJlc3RhdXJhbnRfZGF0YSB9XG4gICAgY2FzZSBzZWFyY2guU0VBUkNIX0xPQ0FMX1NUT1JBR0U6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgc2VhcmNoX2xvY2FsX3N0b3JhZ2U6IGFjdGlvbi5zZWFyY2hfbG9jYWxfc3RvcmFnZSB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH1cbiAgfVxufSIsImltcG9ydCB7IGFsbCwgZm9yayB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQgc2VhcmNoU2FnYSBmcm9tICcuL3NlYXJjaFNhZ2EnO1xuaW1wb3J0IHBsYWNlU2FnYSBmcm9tICcuL3BsYWNlU2FnYSc7XG5pbXBvcnQgbmF2aWdhdGlvblNhZ2EgZnJvbSAnLi9uYXZpZ2F0aW9uU2FnYSc7XG5pbXBvcnQgcGFya2luZ0xvdFNhZ2EgZnJvbSAnLi9wYXJraW5nTG90U2FnYSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcblx0eWllbGQgYWxsKFtcblx0XHRmb3JrKHNlYXJjaFNhZ2EpLCBcblx0XHRmb3JrKHBsYWNlU2FnYSksIFxuXHRcdGZvcmsobmF2aWdhdGlvblNhZ2EpLFxuXHRcdGZvcmsocGFya2luZ0xvdFNhZ2EpXG5cdF0pO1xufVxuIiwiaW1wb3J0IHsgdGFrZUxhdGVzdCwgY2FsbCwgcHV0LCBhbGwgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0ICogYXMgbmF2aWdhdGlvbiBmcm9tICcuLi9jb25zdHMvbmF2aWdhdGlvbic7XG5pbXBvcnQgUmVxdWVzdCBmcm9tICcuLi8uLi91dGlscy9yZXF1ZXN0JztcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tICdhbnRkJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogbmF2aWdhdGlvblNhZ2EoKSB7XG4gIHlpZWxkIGFsbChbXG4gICAgdGFrZUxhdGVzdChuYXZpZ2F0aW9uLk5BVklHQVRJT05fUkVRVUVTVCwgbmF2aWdhdGlvblJlcXVlc3RTYWdhKSxcbiAgXSk7XG59XG5cbmZ1bmN0aW9uIGRpcmVjdGlvblNlcnZpY2UocGFyYW1zKSB7XG4gIHJldHVybiBSZXF1ZXN0LmRpcmVjdGlvbihwYXJhbXMpO1xufVxuXG5mdW5jdGlvbiogbmF2aWdhdGlvblJlcXVlc3RTYWdhKGFjdGlvbikge1xuICB0cnkgeyAgXG4gICAgY29uc3QgeyBmcm9tX3BsYWNlLCB0b19wbGFjZSwgdmVoaWNsZSB9ID0gYWN0aW9uO1xuICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICBvcmlnaW46IHsgbGF0aXR1ZGU6IGZyb21fcGxhY2UuZ2VvbWV0cnkubG9jYXRpb24ubGF0LCBsb25naXR1ZGU6IGZyb21fcGxhY2UuZ2VvbWV0cnkubG9jYXRpb24ubG5nIH0sXG4gICAgICBkZXN0aW5hdGlvbjogeyBsYXRpdHVkZTogdG9fcGxhY2UuZ2VvbWV0cnkubG9jYXRpb24ubGF0LCBsb25naXR1ZGU6IHRvX3BsYWNlLmdlb21ldHJ5LmxvY2F0aW9uLmxuZyB9LFxuICAgICAgdmVoaWNsZVxuICAgIH1cbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoZGlyZWN0aW9uU2VydmljZSwgcGFyYW1zKTtcblxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwICYmIHJlc3BvbnNlLmRhdGEucm91dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHNob3J0ZXN0ID0gcmVzcG9uc2UuZGF0YT8ucm91dGVzPy5zb3J0KChyMSxyMikgPT4ge1xuICAgICAgICByZXR1cm4gcjEubGVnc1swXS5kaXN0YW5jZS52YWx1ZSAtIHIyLmxlZ3NbMF0uZGlzdGFuY2UudmFsdWU7XG4gICAgICB9KVswXTtcbiAgICAgIGNvbnN0IGZhc3Rlc3QgPSByZXNwb25zZS5kYXRhPy5yb3V0ZXM/LnNvcnQoKHIxLHIyKSA9PiB7XG4gICAgICAgIHJldHVybiByMS5sZWdzWzBdLmR1cmF0aW9uLnZhbHVlIC0gcjIubGVnc1swXS5kdXJhdGlvbi52YWx1ZTtcbiAgICAgIH0pWzBdO1xuICAgICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgICBmYXN0ZXN0OiBbZmFzdGVzdF0sXG4gICAgICAgIHNob3J0ZXN0OiBbc2hvcnRlc3RdXG4gICAgICB9O1xuICAgICAgeWllbGQgcHV0KHtcbiAgICAgICAgdHlwZTogbmF2aWdhdGlvbi5OQVZJR0FUSU9OX1NVQ0NFU1MsXG4gICAgICAgIHJlc3VsdDogcmVzdWx0XG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmVycm9yKFwiS2jDtG5nIHTDrG0gdGjhuqV5IMSRxrDhu51uZyDEkWkgIVwiKTtcbiAgICAgIHlpZWxkIHB1dCh7XG4gICAgICAgIHR5cGU6IG5hdmlnYXRpb24uTkFWSUdBVElPTl9GQUlMLFxuICAgICAgICByZXN1bHQ6IG51bGxcbiAgICAgIH0pXG4gICAgfVxuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbWVzc2FnZS5lcnJvcihcIktow7RuZyB0w6xtIHRo4bqleSDEkcaw4budbmcgxJFpICFcIik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IG5hdmlnYXRpb24uTkFWSUdBVElPTl9GQUlMLFxuICAgICAgcmVzdWx0OiBudWxsXG4gICAgfSlcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY2FsbCwgcHV0LCB0YWtlTGF0ZXN0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0ICogYXMgcGFya2luZ0xvdCBmcm9tICcuLi9jb25zdHMvcGFya2luZ0xvdCc7XHJcbmltcG9ydCB7IHBhcmtpbmdMb3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcGFya2luZ0xvdFNlcnZpY2UnO1xyXG5pbXBvcnQgeyBcclxuICBnZXRQYXJraW5nTG90c1N1Y2Nlc3MsIFxyXG4gIGdldFBhcmtpbmdMb3RzRmFpbHVyZSxcclxuICBzZWFyY2hQYXJraW5nTG90c1N1Y2Nlc3MsIFxyXG4gIHNlYXJjaFBhcmtpbmdMb3RzRmFpbHVyZSBcclxufSBmcm9tICcuLi9hY3Rpb25zL3BhcmtpbmdMb3QnO1xyXG5cclxuZnVuY3Rpb24qIGdldFBhcmtpbmdMb3RzU2FnYSgpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcGFya2luZ0xvdHMgPSB5aWVsZCBjYWxsKHBhcmtpbmdMb3RTZXJ2aWNlLmdldFBhcmtpbmdMb3RzKTtcclxuICAgIHlpZWxkIHB1dChnZXRQYXJraW5nTG90c1N1Y2Nlc3MocGFya2luZ0xvdHMpKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgeWllbGQgcHV0KGdldFBhcmtpbmdMb3RzRmFpbHVyZShlcnJvci5tZXNzYWdlKSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogc2VhcmNoUGFya2luZ0xvdHNTYWdhKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHRzID0geWllbGQgY2FsbChwYXJraW5nTG90U2VydmljZS5zZWFyY2hQYXJraW5nTG90cywgYWN0aW9uLmtleXdvcmQpO1xyXG4gICAgeWllbGQgcHV0KHNlYXJjaFBhcmtpbmdMb3RzU3VjY2VzcyhyZXN1bHRzKSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHlpZWxkIHB1dChzZWFyY2hQYXJraW5nTG90c0ZhaWx1cmUoZXJyb3IubWVzc2FnZSkpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBhcmtpbmdMb3RTYWdhKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QocGFya2luZ0xvdC5HRVRfUEFSS0lOR19MT1RTX1JFUVVFU1QsIGdldFBhcmtpbmdMb3RzU2FnYSk7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChwYXJraW5nTG90LlNFQVJDSF9QQVJLSU5HX0xPVFNfUkVRVUVTVCwgc2VhcmNoUGFya2luZ0xvdHNTYWdhKTtcclxufSAiLCJpbXBvcnQgeyB0YWtlTGF0ZXN0LCBjYWxsLCBwdXQsIGFsbCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQgKiBhcyBwbGFjZSBmcm9tICcuLi9jb25zdHMvcGxhY2UnO1xuaW1wb3J0IFJlcXVlc3QgZnJvbSAnLi4vLi4vdXRpbHMvcmVxdWVzdCc7XG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSAnYW50ZCdcbmltcG9ydCB7IHNlYXJjaFNlcnZpY2UgfSBmcm9tICcuL3NlYXJjaFNhZ2EnXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwbGFjZVNhZ2EoKSB7XG4gIHlpZWxkIGFsbChbXG4gICAgdGFrZUxhdGVzdChwbGFjZS5HRVRfREVUQUlMX0JZX0lEX1JFUVVFU1QsIGdldERldGFpbElkU2FnYSksXG4gICAgdGFrZUxhdGVzdChwbGFjZS5HRVRfREVUQUlMX0JZX0xBVExOR19SRVFVRVNULCBnZXREZXRhaWxMYXRMbmdTYWdhKSxcbiAgICB0YWtlTGF0ZXN0KHBsYWNlLkdFVF9ERVRBSUxfQVJPVU5EX1BMQUNFX1JFUVVFU1QsIGdldERldGFpbEFyb3VuZFBsYWNlU2FnYSlcbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREZXRhaWxJZFNlcnZpY2UocGlkKSB7XG4gIHJldHVybiBSZXF1ZXN0LnBsYWNlX2RldGFpbChwaWQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGV0YWlsTGF0TG5nU2VydmljZShsYXRMbmcpIHtcbiAgcmV0dXJuIFJlcXVlc3QuZ2VvY29kZShsYXRMbmcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGV0YWlsQXJvdW5kUGxhY2VTZXJ2aWNlKGlkKSB7XG4gIHJldHVybiBBeGlvcy5nZXQoYGh0dHBzOi8vbmFwaS5nb29uZy5pby92MS9tYXJrZXIvZ2V0X21hcmtlcl9kZXRhaWwvJHtpZH1gKTtcbn1cblxuZnVuY3Rpb24qIGdldERldGFpbElkU2FnYShhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoZ2V0RGV0YWlsSWRTZXJ2aWNlLCBhY3Rpb24ucGlkKTtcblxuICAgIGNvbnN0IGxhdExuZyA9IHtcbiAgICAgIGxhdGl0dWRlOiByZXNwb25zZS5kYXRhLnJlc3VsdC5nZW9tZXRyeS5sb2NhdGlvbi5sYXQsXG4gICAgICBsb25naXR1ZGU6IHJlc3BvbnNlLmRhdGEucmVzdWx0Lmdlb21ldHJ5LmxvY2F0aW9uLmxuZ1xuICAgIH1cbiAgICBjb25zdCBnZXRCeUxhdExuZyA9IHlpZWxkIGNhbGwoZ2V0RGV0YWlsTGF0TG5nU2VydmljZSwgbGF0TG5nKTtcbiAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT0gJ09LJyAmJiBnZXRCeUxhdExuZy5kYXRhLnJlc3VsdHMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgbG9jYXRpb24gPSByZXNwb25zZS5kYXRhLnJlc3VsdC5nZW9tZXRyeS5sb2NhdGlvbi5sYXQgKyBcIixcIiArIHJlc3BvbnNlLmRhdGEucmVzdWx0Lmdlb21ldHJ5LmxvY2F0aW9uLmxuZztcbiAgICAgIGNvbnN0IHJlc3BvbnNlX3NlYXJjaCA9IHlpZWxkIGNhbGwoc2VhcmNoU2VydmljZSwgcmVzcG9uc2UuZGF0YS5yZXN1bHQubmFtZSwgbG9jYXRpb24sIDExLCAxMCk7XG4gICAgICBjb25zdCBuZWFyX3BsYWNlcyA9IHJlc3BvbnNlX3NlYXJjaC5kYXRhLnByZWRpY3Rpb25zPy5maWx0ZXIoaSA9PiBpLnBsYWNlX2lkICE9PSBhY3Rpb24ucGlkKTtcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IHBsYWNlLkdFVF9ERVRBSUxfQllfSURfU1VDQ0VTUywgZGF0YTogcmVzcG9uc2UuZGF0YS5yZXN1bHQsIG5lYXJQbGFjZXM6IG5lYXJfcGxhY2VzLCBwaWQ6IGFjdGlvbi5waWQgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5lcnJvcignS2jDtG5nIHTDrG0gdGjhuqV5IMSR4buLYSDEkWnhu4NtICEnKVxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB0aHJvdyBlcnJvclxuICB9XG59XG5cbmZ1bmN0aW9uKiBnZXREZXRhaWxMYXRMbmdTYWdhKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChnZXREZXRhaWxMYXRMbmdTZXJ2aWNlLCBhY3Rpb24ubGF0TG5nKTtcbiAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT0gJ09LJyAmJiByZXNwb25zZS5kYXRhLnJlc3VsdHMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgcGxhY2VfcmV0dXJuID0gcmVzcG9uc2UuZGF0YS5yZXN1bHRzWzBdO1xuICAgICAgY29uc3QgbmFtZV9wbGFjZSA9IHBsYWNlX3JldHVybi5hZGRyZXNzX2NvbXBvbmVudHNbMF0ubG9uZ19uYW1lO1xuXG4gICAgICBjb25zdCBsb2NhdGlvbiA9IHBsYWNlX3JldHVybi5nZW9tZXRyeS5sb2NhdGlvbi5sYXQgKyBcIixcIiArIHBsYWNlX3JldHVybi5nZW9tZXRyeS5sb2NhdGlvbi5sbmc7XG4gICAgICBjb25zdCByZXNwb25zZV9zZWFyY2ggPSB5aWVsZCBjYWxsKHNlYXJjaFNlcnZpY2UsIG5hbWVfcGxhY2UsIGxvY2F0aW9uLCAxMSwgMTApO1xuICAgICAgY29uc3QgbmVhcl9wbGFjZXMgPSByZXNwb25zZV9zZWFyY2guZGF0YS5wcmVkaWN0aW9ucz8uZmlsdGVyKGkgPT4gaS5wbGFjZV9pZCAhPT0gcGxhY2VfcmV0dXJuLnBsYWNlX2lkKTtcbiAgICAgIGNvbnN0IHJldHVybl9kYXRhID0ge1xuICAgICAgICAuLi5wbGFjZV9yZXR1cm4sXG4gICAgICAgIG5hbWU6IG5hbWVfcGxhY2UsXG4gICAgICAgIGZvcm1hdHRlZF9hZGRyZXNzOiBnZXRBZGRyZXNzR2VvY29kZShwbGFjZV9yZXR1cm4pXG4gICAgICB9XG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBwbGFjZS5HRVRfREVUQUlMX0JZX0lEX1NVQ0NFU1MsIGRhdGE6IHJldHVybl9kYXRhLCBuZWFyUGxhY2VzOiBuZWFyX3BsYWNlcyB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmVycm9yKCdLaMO0bmcgdMOsbSB0aOG6pXkgxJHhu4thIMSRaeG7g20gIScpXG4gICAgfVxuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdGhyb3cgZXJyb3JcbiAgfVxufVxuXG5mdW5jdGlvbiogZ2V0RGV0YWlsQXJvdW5kUGxhY2VTYWdhKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChnZXREZXRhaWxBcm91bmRQbGFjZVNlcnZpY2UsIGFjdGlvbi5pZCk7XG4gICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgY29uc3QgcmV0dXJuX2RhdGEgPSB7XG4gICAgICAgIC4uLmRhdGEsXG4gICAgICAgIHBsYWNlX2lkOiBkYXRhLl9pZCxcbiAgICAgICAgZ2VvbWV0cnk6IHtcbiAgICAgICAgICBsb2NhdGlvbjoge1xuICAgICAgICAgICAgbGF0OiBOdW1iZXIoZGF0YS5sbmdfbGF0WzFdKSxcbiAgICAgICAgICAgIGxuZzogTnVtYmVyKGRhdGEubG5nX2xhdFswXSksXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBmb3JtYXR0ZWRfYWRkcmVzczogZGF0YS5kZXNjcmlwdGlvbi5hZGRyZXNzXG4gICAgICB9XG4gICAgICBjb25zdCBuYW1lX3BsYWNlID0gcmV0dXJuX2RhdGEubmFtZTtcbiAgICAgIGNvbnN0IGxvY2F0aW9uID0gcmV0dXJuX2RhdGEuZ2VvbWV0cnkubG9jYXRpb24ubGF0ICsgXCIsXCIgKyByZXR1cm5fZGF0YS5nZW9tZXRyeS5sb2NhdGlvbi5sbmc7XG4gICAgICBjb25zdCByZXNwb25zZV9zZWFyY2ggPSB5aWVsZCBjYWxsKHNlYXJjaFNlcnZpY2UsIG5hbWVfcGxhY2UsIGxvY2F0aW9uLCAxMCwgMTApO1xuICAgICAgY29uc3QgbmVhcl9wbGFjZXMgPSByZXNwb25zZV9zZWFyY2guZGF0YS5wcmVkaWN0aW9ucztcbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IHBsYWNlLkdFVF9ERVRBSUxfQVJPVU5EX1BMQUNFX1NVQ0NFU1MsIGRhdGE6IHJldHVybl9kYXRhLCBuZWFyUGxhY2VzOiBuZWFyX3BsYWNlcyB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmVycm9yKCdLaMO0bmcgdMOsbSB0aOG6pXkgxJHhu4thIMSRaeG7g20gIScpXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHRocm93IGVycm9yXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFkZHJlc3NHZW9jb2RlKHBsYWNlKSB7XG4gIGxldCByZXN1bHQgPSBbXTtcbiAgcGxhY2UuYWRkcmVzc19jb21wb25lbnRzLnNsaWNlKDEpLm1hcChpdGVtID0+IHtcbiAgICByZXN1bHQucHVzaChpdGVtLmxvbmdfbmFtZSk7XG4gIH0pXG4gIHJldHVybiByZXN1bHQuam9pbignLCcpXG59IiwiaW1wb3J0IHsgdGFrZUxhdGVzdCwgY2FsbCwgcHV0LCBhbGwgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0ICogYXMgc2VhcmNoIGZyb20gJy4uL2NvbnN0cy9zZWFyY2gnO1xuaW1wb3J0IFJlcXVlc3QgZnJvbSAnLi4vLi4vdXRpbHMvcmVxdWVzdCc7XG5pbXBvcnQgQXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgZ2V0RGV0YWlsTGF0TG5nU2VydmljZSwgZ2V0QWRkcmVzc0dlb2NvZGUgfSBmcm9tICcuL3BsYWNlU2FnYSdcblxubGV0IHNlYXJjaFJlcXVlc3QgPSBudWxsO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHNlYXJjaFNhZ2EoKSB7XG4gIHlpZWxkIGFsbChbXG4gICAgdGFrZUxhdGVzdChzZWFyY2guU0VBUkNIX1JFUVVFU1QsIHNlYXJjaFJlcXVlc3RTYWdhKSxcbiAgICB0YWtlTGF0ZXN0KHNlYXJjaC5TRUFSQ0hfQVJPVU5EX1JFUVVFU1QsIHNlYXJjaEFyb3VuZFNhZ2EpLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoU2VydmljZShxdWVyeSwgbG9jYXRpb24sIHJhZGl1cywgbGltaXQpIHtcbiAgaWYgKHNlYXJjaFJlcXVlc3QpIHNlYXJjaFJlcXVlc3QuY2FuY2VsKCk7XG4gIHNlYXJjaFJlcXVlc3QgPSBSZXF1ZXN0LmF1dG9jb21wbGV0ZShxdWVyeSwgbG9jYXRpb24sIHJhZGl1cywgbGltaXQpO1xuICByZXR1cm4gc2VhcmNoUmVxdWVzdDtcbn1cblxuZnVuY3Rpb24gc2VhcmNoQXJvdW5kU2VydmljZShsb2NhdGlvbiwgem9vbSkge1xuICByZXR1cm4gQXhpb3MucG9zdCgnaHR0cHM6Ly9uYXBpLmdvb25nLmlvL3YxL21hcmtlci9nZXRfbWFya2Vyc19pbl9iZWFyJywge1xuICAgIFwibGF0XCI6IGxvY2F0aW9uLmxhdCxcbiAgICBcImxuZ1wiOiBsb2NhdGlvbi5sbmcsXG4gICAgXCJkaXN0YW5jZVwiOiAxMDAwLFxuICAgIFwidHlwZV9jb2RlXCI6IFtcIlNVR0dFU1RJT05cIl0sIC8vb3IgXCJjYXRfY29kZVwiOltcIkdUX1NUQVRJQ1wiXVxuICAgIFwiYmVhcmluZ1wiOiAwLFxuICAgIFwiYW5nbGVcIjogMzYwLFxuICAgIFwibGltaXRcIjogNTAsXG4gICAgXCJwYWdlXCI6IDAsXG4gICAgXCJ6b29tXCI6IHpvb21cbiAgfSk7XG59XG5cbmZ1bmN0aW9uKiBzZWFyY2hSZXF1ZXN0U2FnYShhY3Rpb24pIHtcbiAgaWYgKGFjdGlvbi5xdWVyeS50cmltKCkgPT09ICcnKSB7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogc2VhcmNoLlNFQVJDSF9TVUNDRVNTLCBwbGFjZXM6IFtdIH0pO1xuICB9XG4gIGVsc2Uge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoc2VhcmNoU2VydmljZSwgYWN0aW9uLnF1ZXJ5LCBhY3Rpb24ubG9jYXRpb24pO1xuICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09ICdPSycpIHtcbiAgICAgICAgY29uc3QgcGxhY2VzID0gcmVzcG9uc2UuZGF0YS5wcmVkaWN0aW9ucyB8fCBbXTtcbiAgICAgICAgeWllbGQgcHV0KHsgdHlwZTogc2VhcmNoLlNFQVJDSF9TVUNDRVNTLCBwbGFjZXM6IHBsYWNlcyB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IHNlYXJjaC5TRUFSQ0hfU1VDQ0VTUywgcGxhY2VzOiBbXSB9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiogc2VhcmNoQXJvdW5kU2FnYShhY3Rpb24pIHtcbiAgaWYgKGFjdGlvbi5sb2NhdGlvbi5sYXQgJiYgYWN0aW9uLmxvY2F0aW9uLmxuZykge1xuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChzZWFyY2hBcm91bmRTZXJ2aWNlLCBhY3Rpb24ubG9jYXRpb24sIGFjdGlvbi56b29tKTtcbiAgICBpZiAocmVzcG9uc2UuZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCByZXNwb25zZV9jZW50ZXIgPSB5aWVsZCBjYWxsKGdldERldGFpbExhdExuZ1NlcnZpY2UsIHsgbGF0aXR1ZGU6IGFjdGlvbi5sb2NhdGlvbi5sYXQsIGxvbmdpdHVkZTogYWN0aW9uLmxvY2F0aW9uLmxuZyB9KTtcbiAgICAgIGNvbnN0IHBsYWNlX2NlbnRlciA9IHJlc3BvbnNlX2NlbnRlci5kYXRhLnJlc3VsdHNbMF07XG4gICAgICBjb25zdCBwbGFjZV9jZW50ZXJfcmV0dXJuID0ge1xuICAgICAgICAuLi5wbGFjZV9jZW50ZXIsXG4gICAgICAgIG5hbWU6IHBsYWNlX2NlbnRlci5hZGRyZXNzX2NvbXBvbmVudHNbMF0ubG9uZ19uYW1lLFxuICAgICAgICBmb3JtYXR0ZWRfYWRkcmVzczogZ2V0QWRkcmVzc0dlb2NvZGUocGxhY2VfY2VudGVyKVxuICAgICAgfVxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogc2VhcmNoLlNFQVJDSF9BUk9VTkRfU1VDQ0VTUywgYXJvdW5kX3BsYWNlczogcmVzcG9uc2UuZGF0YSwgY2VudGVyX2xvY2F0aW9uOiBwbGFjZV9jZW50ZXJfcmV0dXJuIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmVycm9yKCdLaMO0bmcgY8OzIMSR4buLYSDEkWnhu4NtIG7DoG8gcXVhbmggxJHDonkgIScpXG4gICAgfVxuICB9XG59IiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvaW5kZXgnXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZmlndXJlU3RvcmUoKSB7XG4gIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKVxuICByZXR1cm4ge1xuICAgIC4uLmNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBhcHBseU1pZGRsZXdhcmUoc2FnYU1pZGRsZXdhcmUpKSxcbiAgICBydW5TYWdhOiBzYWdhTWlkZGxld2FyZS5ydW4sXG4gIH1cbiAgcmV0dXJuIHtcbiAgICAuLi5jcmVhdGVTdG9yZShyb290UmVkdWNlciwgYXBwbHlNaWRkbGV3YXJlKHNhZ2FNaWRkbGV3YXJlKSksXG4gICAgcnVuU2FnYTogc2FnYU1pZGRsZXdhcmUucnVuLFxuICB9XG59IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgQVBJX1VSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkwgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6NTI1Ny9hcGknO1xuXG5leHBvcnQgY29uc3QgcGFya2luZ0xvdFNlcnZpY2UgPSB7XG5cdGdldFBhcmtpbmdMb3RzOiBhc3luYyAoKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke0FQSV9VUkx9L1BhcmtpbmdMb3RzYCk7XG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcGFya2luZyBsb3RzOicsIGVycm9yKTtcblx0XHRcdHRocm93IGVycm9yO1xuXHRcdH1cblx0fSxcblxuXHRzZWFyY2hQYXJraW5nTG90czogYXN5bmMgKGtleXdvcmQpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7QVBJX1VSTH0vUGFya2luZ0xvdHM/c2VhcmNoPSR7a2V5d29yZH1gKTtcblx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKCdFcnJvciBzZWFyY2hpbmcgcGFya2luZyBsb3RzOicsIGVycm9yKTtcblx0XHRcdHRocm93IGVycm9yO1xuXHRcdH1cblx0fSxcblxuXHRnZXROZWFyYnlQYXJraW5nTG90czogYXN5bmMgKGxhdCwgbG5nLCByYWRpdXNLbSA9IDIpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXG5cdFx0XHRcdGAke0FQSV9VUkx9L1BhcmtpbmdMb3RzL25lYXJieT9sYXQ9JHtsYXR9JmxuZz0ke2xuZ30mcmFkaXVzS209JHtyYWRpdXNLbX1gLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0XHRcdFx0XHRcdC8vIFRow6ptIGhlYWRlcnMga2jDoWMgbuG6v3UgY+G6p25cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgbmVhcmJ5IHBhcmtpbmcgbG90czonLCBlcnJvcik7XG5cdFx0XHR0aHJvdyBlcnJvcjtcblx0XHR9XG5cdH0sXG59O1xuXG5leHBvcnQgY29uc3QgeyBnZXRQYXJraW5nTG90cywgc2VhcmNoUGFya2luZ0xvdHMsIGdldE5lYXJieVBhcmtpbmdMb3RzIH0gPSBwYXJraW5nTG90U2VydmljZTtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmNvbnN0IHsgQ2FuY2VsVG9rZW4gfSA9IGF4aW9zO1xuXG5leHBvcnQgY29uc3QgR0VUID0gKHVybCwgcGFyYW1zLCBvcHRpb25zID0ge30pID0+IHtcbiAgbGV0IGNhbmNlbDtcbiAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgYXhpb3MuZ2V0KGAke29wdGlvbnMuaG9zdF9uYW1lIHx8IEFQSV9HQVRFV0FZX1VSTH0ke3VybH1gLCB7XG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgLi4ucGFyYW1zLFxuICAgICAgICBhcGlfa2V5OiBvcHRpb25zLmFwaV9rZXkgfHwgQVBJX0tFWVxuICAgICAgfSxcbiAgICAgIGNhbmNlbFRva2VuOiBuZXcgQ2FuY2VsVG9rZW4oZnVuY3Rpb24gZXhlY3V0b3IoYykge1xuICAgICAgICBjYW5jZWwgPSBjO1xuICAgICAgfSlcbiAgICB9KVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgIH0pO1xuICB9KTtcbiAgcHJvbWlzZS5jYW5jZWwgPSBjYW5jZWw7XG4gIHJldHVybiBwcm9taXNlO1xufSBcbiIsImltcG9ydCB7IEdFVCB9IGZyb20gXCIuL2Jhc2VfcmVxdWVzdFwiO1xuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gXCIuLi9jb25zdHMvYXBpX3VybFwiO1xuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xuZXhwb3J0IGRlZmF1bHQge1xuICBnZW9jb2RlOiAobG9jYXRpb24sIG9wdGlvbnMpID0+IHtcbiAgICByZXR1cm4gR0VUKEFQSV9VUkwuR0VPQ09ERSwge1xuICAgICAgbGF0bG5nOiBgJHtsb2NhdGlvbi5sYXRpdHVkZX0sJHtsb2NhdGlvbi5sb25naXR1ZGV9YFxuICAgIH0sIG9wdGlvbnMpO1xuICB9LFxuICBhdXRvY29tcGxldGU6IChpbnB1dCwgbG9jYXRpb24sIGxpbWl0LCByYWRpdXMsIGhhc19jaGlsZHJlbiwgb3B0aW9ucykgPT4ge1xuICAgIHJldHVybiBHRVQoQVBJX1VSTC5BVVRPQ09NUExFVEUsIHtcbiAgICAgIGlucHV0LFxuICAgICAgbG9jYXRpb24sXG4gICAgICByYWRpdXM6IHJhZGl1cyB8fCAzMDAwLFxuICAgICAgbGltaXQ6IGxpbWl0IHx8IDEwLFxuICAgICAgaGFzX2NoaWxkcmVuOiBoYXNfY2hpbGRyZW4gfHwgZmFsc2VcbiAgICB9LCBvcHRpb25zKTtcbiAgfSxcbiAgZGlyZWN0aW9uOiAocGFyYW1zLCBvcHRpb25zKSA9PiB7XG4gICAgcmV0dXJuIEdFVChBUElfVVJMLkRJUkVDVElPTiwge1xuICAgICAgb3JpZ2luOiBgJHtwYXJhbXMub3JpZ2luLmxhdGl0dWRlfSwke3BhcmFtcy5vcmlnaW4ubG9uZ2l0dWRlfWAsXG4gICAgICBkZXN0aW5hdGlvbjogYCR7cGFyYW1zLmRlc3RpbmF0aW9uLmxhdGl0dWRlfSwke3BhcmFtcy5kZXN0aW5hdGlvbi5sb25naXR1ZGV9YCxcbiAgICAgIHZlaGljbGU6IHBhcmFtcy52ZWhpY2xlIHx8ICdjYXInXG4gICAgfSwgb3B0aW9ucyk7XG4gIH0sXG4gIGRpc3RhbmNlbWF0cml4OiAocGFyYW1zLCBvcHRpb25zKSA9PiB7XG4gICAgcmV0dXJuIEdFVChBUElfVVJMLkRJU1RBTkNFTUFUUklYLCB7XG4gICAgICBvcmlnaW5zOiBgJHtwYXJhbXMub3JpZ2luLmxhdGl0dWRlfSwke3BhcmFtcy5vcmlnaW4ubG9uZ2l0dWRlfWAsXG4gICAgICBkZXN0aW5hdGlvbnM6IGAke3BhcmFtcy5kZXN0aW5hdGlvbi5sYXRpdHVkZX0sJHtwYXJhbXMuZGVzdGluYXRpb24ubG9uZ2l0dWRlfWAsXG4gICAgICB2ZWhpY2xlOiBgJHtwYXJhbXMudmVoaWNsZX1gXG4gICAgfSwgb3B0aW9ucyk7XG4gIH0sXG4gIHBsYWNlX2RldGFpbDogKHBsYWNlaWQsIG9wdGlvbnMpID0+IHtcbiAgICByZXR1cm4gR0VUKEFQSV9VUkwuUExBQ0VfREVUQUlMLCB7XG4gICAgICBwbGFjZWlkXG4gICAgfSwgb3B0aW9ucyk7XG4gIH0sXG4gIGdldF93ZWF0aGVyOiAobGF0aXR1ZGUsIGxvbmdpdHVkZSkgPT4ge1xuICAgIHJldHVybiBBeGlvcy5nZXQoYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2xhdGl0dWRlfSZsb249JHtsb25naXR1ZGV9JnVuaXRzPW1ldHJpYyZsYW5nPXZpJmFwcGlkPSR7V0VBVEhFUl9BUEl9YClcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvY29uZmlnLXByb3ZpZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL2xvY2FsZS1wcm92aWRlci92aV9WTlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9tZXNzYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1oZWxtZXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==