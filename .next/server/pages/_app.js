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





const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  searchReducer: _searchReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  placeReducer: _placeReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  navigationReducer: _navigationReducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  boxVisibleReducer: _boxVisibleReducer__WEBPACK_IMPORTED_MODULE_4__["default"]
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




function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_searchSaga__WEBPACK_IMPORTED_MODULE_1__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_placeSaga__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_navigationSaga__WEBPACK_IMPORTED_MODULE_3__["default"])]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL2NvbnN0cy9hcGlfdXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvY29uc3RzL2JveFZpc2libGUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvY29uc3RzL25hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvY29uc3RzL3BsYWNlLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2NvbnN0cy9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvYm94VmlzaWJsZVJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvbmF2aWdhdGlvblJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvcGxhY2VSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL3NlYXJjaFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvc2FnYXMvbmF2aWdhdGlvblNhZ2EuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvc2FnYXMvcGxhY2VTYWdhLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3NhZ2FzL3NlYXJjaFNhZ2EuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvc3RvcmVDb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvYmFzZV9yZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL3V0aWxzL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvY29uZmlnLXByb3ZpZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvbG9jYWxlLXByb3ZpZGVyL3ZpX1ZOXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvbWVzc2FnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWhlbG1ldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiXSwibmFtZXMiOlsiQVBJX1VSTCIsIkdFT0NPREUiLCJBVVRPQ09NUExFVEUiLCJESVJFQ1RJT04iLCJESVNUQU5DRU1BVFJJWCIsIkdPT0dMRV9FTUJFRCIsIlBMQUNFX0RFVEFJTCIsIldFQVRIRVIiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJDb21wb25lbnQiLCJjdHgiLCJwYWdlUHJvcHMiLCJBcHAiLCJSZWFjdCIsImNvbXBvbmVudERpZENhdGNoIiwiZXJyb3IiLCJfZXJyb3JJbmZvIiwicmVuZGVyIiwicm91dGVyIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJwcm9wcyIsInVybCIsImNyZWF0ZVVybCIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJ3YXJuQ29udGFpbmVyIiwid2FyblVybCIsImNvbnNvbGUiLCJ3YXJuIiwiQ29udGFpbmVyIiwicCIsImNoaWxkcmVuIiwicGF0aG5hbWUiLCJhc1BhdGgiLCJxdWVyeSIsImJhY2siLCJwdXNoIiwiYXMiLCJwdXNoVG8iLCJocmVmIiwicHVzaFJvdXRlIiwicHVzaFVybCIsInJlcGxhY2UiLCJyZXBsYWNlVG8iLCJyZXBsYWNlUm91dGUiLCJyZXBsYWNlVXJsIiwic3RvcmUiLCJjb25maWd1cmVTdG9yZSIsInJ1blNhZ2EiLCJyb290U2FnYSIsIk1haW5BcHAiLCJfX2pzeCIsIlByb3ZpZGVyIiwiSGVhZCIsImNoYXJTZXQiLCJuYW1lIiwiY29udGVudCIsInJlbCIsImludGVncml0eSIsImNyb3NzT3JpZ2luIiwiX0NvbmZpZ1Byb3ZpZGVyIiwibG9jYWxlIiwidmlfVk4iLCJTSE9XX1ZJU0JMRV9CT1giLCJTRVRfUkVEX01BUktFUiIsIlNFVF9DT0xMQVBTRURfSU5GT19CT1giLCJTRVRfUE9QVVBfUklHSFRfQ0xJQ0siLCJTSE9XX05BVklHQVRJT05fQk9YIiwiTkFWSUdBVElPTl9GUk9NX1JFUVVFU1QiLCJOQVZJR0FUSU9OX1RPX1JFUVVFU1QiLCJOQVZJR0FUSU9OX1JFUVVFU1QiLCJOQVZJR0FUSU9OX1NVQ0NFU1MiLCJOQVZJR0FUSU9OX0ZBSUwiLCJTV0FQX1JFUVVFU1QiLCJOQVZJR0FUSU9OX1NFTEVDVF9SRVNVTFRfUkVRVUVTVCIsIk5BVklHQVRJT05fU0VMRUNUX1JFU1VMVF9TVUNDRVNTIiwiQ0xFQVJfUkVTVUxUX1JFUVVFU1QiLCJDTEVBUl9SRVFVRVNUIiwiVFlQRV9JTlBVVCIsIlRZUEVfTEFUTE9ORyIsIklORk9fUkVTVEFVUkFOVCIsIkdFVF9ERVRBSUxfQllfSURfUkVRVUVTVCIsIkdFVF9ERVRBSUxfQllfSURfU1VDQ0VTUyIsIlNFVF9NWV9MT0NBVElPTiIsIkdFVF9ERVRBSUxfQllfTEFUTE5HX1JFUVVFU1QiLCJHRVRfREVUQUlMX0JZX0xBVExOR19TVUNDRVNTIiwiUkVTRVRfTE9DQVRJT04iLCJHRVRfREVUQUlMX0FST1VORF9QTEFDRV9SRVFVRVNUIiwiR0VUX0RFVEFJTF9BUk9VTkRfUExBQ0VfU1VDQ0VTUyIsIlNFVF9NQVBfVklFV1BPUlRfUkVRVUVTVCIsIlNFVF9DRU5URVJfTEFUTE5HX1JFUVVFU1QiLCJTRUFSQ0hfUkVRVUVTVCIsIlNFQVJDSF9TVUNDRVNTIiwiU0VBUkNIX0NMRUFSX1JFUVVFU1QiLCJTRUFSQ0hfQVJPVU5EX1JFUVVFU1QiLCJTRUFSQ0hfQVJPVU5EX1NVQ0NFU1MiLCJDTEVBUl9TRUFSQ0hfQVJPVU5EX1JFUVVFU1QiLCJTRUxFQ1RfQVJPVU5EX1BMQUNFX01BUktFUiIsIlNFQVJDSF9ISVNUT1JZIiwiU0VBUkNIX0RBVEEiLCJSRVNUQVVSQU5UX0RBVEEiLCJTRUFSQ0hfTE9DQUxfU1RPUkFHRSIsImluaXRpYWxTdGF0ZSIsImJveF92aXNpYmxlIiwiaW5mb19ib3hfY29sbGFwc2VkIiwicmVkX21hcmtlcl92aXNpYmxlIiwicG9zaXRpb25fcmVkX21hcmtlciIsInBvcHVwX3Zpc2libGUiLCJwb3NpdGlvbl9wb3B1cCIsInR5cGVfcG9wdXAiLCJib3hWaXNpYmxlUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImJveCIsIl9vYmplY3RTcHJlYWQiLCJ0eXBlX3Zpc2libGUiLCJ2aXNpYmxlIiwibG9jYXRpb24iLCJjb2xsYXBzZWQiLCJyb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsInNlYXJjaFJlZHVjZXIiLCJwbGFjZVJlZHVjZXIiLCJuYXZpZ2F0aW9uUmVkdWNlciIsImZyb20iLCJ0byIsInJlc3VsdCIsInRleHRfdG9faW5wdXQiLCJ0ZXh0X2Zyb21faW5wdXQiLCJyZXN1bHRfc2VsZWN0IiwicmVzcG9uc2Vfc3RhdHVzIiwidHlwZV9pbnB1dCIsInR5cGVfbGF0bG9uZyIsImluZm9fcmVzdGF1cmFudCIsIm5hdmlnYXRpb24iLCJwbGFjZSIsInRleHQiLCJ0bXAiLCJ0bXBfdGV4dCIsInJvYWRXYXkiLCJjdXJyZW50X3BsYWNlIiwibmVhcl9wbGFjZXMiLCJjZW50ZXIiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsInZpZXdwb3J0Iiwiem9vbSIsIm15X2xvY2F0aW9uIiwicGlkIiwiZGF0YSIsInBsYWNlX2lkIiwiUm91dGVyIiwiZ2VvbWV0cnkiLCJsYXQiLCJsbmciLCJuZWFyUGxhY2VzIiwibGF0TG5nIiwicGlkX2Fyb3VuZCIsInBsYWNlcyIsImFyb3VuZF9wbGFjZXMiLCJhcm91bmRfcGxhY2Vfc2VsZWN0Iiwic2VhcmNoX2hpc3RvcnkiLCJzZWFyY2hfZGF0YSIsInJlc3RhdXJhbnRfZGF0YSIsInNlYXJjaF9sb2NhbF9zdG9yYWdlIiwic2VhcmNoIiwiYXJvdW5kX3BsYWNlX2NlbnRlciIsImNlbnRlcl9sb2NhdGlvbiIsImFsbCIsImZvcmsiLCJzZWFyY2hTYWdhIiwicGxhY2VTYWdhIiwibmF2aWdhdGlvblNhZ2EiLCJ0YWtlTGF0ZXN0IiwibmF2aWdhdGlvblJlcXVlc3RTYWdhIiwiZGlyZWN0aW9uU2VydmljZSIsInBhcmFtcyIsIlJlcXVlc3QiLCJkaXJlY3Rpb24iLCJmcm9tX3BsYWNlIiwidG9fcGxhY2UiLCJ2ZWhpY2xlIiwib3JpZ2luIiwiZGVzdGluYXRpb24iLCJyZXNwb25zZSIsImNhbGwiLCJzdGF0dXMiLCJyb3V0ZXMiLCJsZW5ndGgiLCJfcmVzcG9uc2UkZGF0YSIsIl9yZXNwb25zZSRkYXRhJHJvdXRlcyIsIl9yZXNwb25zZSRkYXRhMiIsIl9yZXNwb25zZSRkYXRhMiRyb3V0ZSIsInNob3J0ZXN0Iiwic29ydCIsInIxIiwicjIiLCJsZWdzIiwiZGlzdGFuY2UiLCJ2YWx1ZSIsImZhc3Rlc3QiLCJkdXJhdGlvbiIsInB1dCIsIl9tZXNzYWdlIiwiZ2V0RGV0YWlsSWRTYWdhIiwiZ2V0RGV0YWlsTGF0TG5nU2FnYSIsImdldERldGFpbEFyb3VuZFBsYWNlU2FnYSIsImdldERldGFpbElkU2VydmljZSIsInBsYWNlX2RldGFpbCIsImdldERldGFpbExhdExuZ1NlcnZpY2UiLCJnZW9jb2RlIiwiZ2V0RGV0YWlsQXJvdW5kUGxhY2VTZXJ2aWNlIiwiaWQiLCJBeGlvcyIsImdldCIsImdldEJ5TGF0TG5nIiwicmVzdWx0cyIsIl9yZXNwb25zZV9zZWFyY2gkZGF0YSIsInJlc3BvbnNlX3NlYXJjaCIsInNlYXJjaFNlcnZpY2UiLCJwcmVkaWN0aW9ucyIsImZpbHRlciIsImkiLCJfcmVzcG9uc2Vfc2VhcmNoJGRhdGEyIiwicGxhY2VfcmV0dXJuIiwibmFtZV9wbGFjZSIsImFkZHJlc3NfY29tcG9uZW50cyIsImxvbmdfbmFtZSIsInJldHVybl9kYXRhIiwiZm9ybWF0dGVkX2FkZHJlc3MiLCJnZXRBZGRyZXNzR2VvY29kZSIsIl9pZCIsIk51bWJlciIsImxuZ19sYXQiLCJkZXNjcmlwdGlvbiIsImFkZHJlc3MiLCJzbGljZSIsIm1hcCIsIml0ZW0iLCJqb2luIiwic2VhcmNoUmVxdWVzdCIsInNlYXJjaFJlcXVlc3RTYWdhIiwic2VhcmNoQXJvdW5kU2FnYSIsInJhZGl1cyIsImxpbWl0IiwiY2FuY2VsIiwiYXV0b2NvbXBsZXRlIiwic2VhcmNoQXJvdW5kU2VydmljZSIsInBvc3QiLCJ0cmltIiwicmVzcG9uc2VfY2VudGVyIiwicGxhY2VfY2VudGVyIiwicGxhY2VfY2VudGVyX3JldHVybiIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTdG9yZSIsImFwcGx5TWlkZGxld2FyZSIsInJ1biIsIkNhbmNlbFRva2VuIiwiYXhpb3MiLCJHRVQiLCJvcHRpb25zIiwicHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiaG9zdF9uYW1lIiwiYXBpX2tleSIsImNhbmNlbFRva2VuIiwiZXhlY3V0b3IiLCJjIiwidGhlbiIsInJlcyIsImNhdGNoIiwiZXJyIiwibGF0bG5nIiwiaW5wdXQiLCJoYXNfY2hpbGRyZW4iLCJkaXN0YW5jZW1hdHJpeCIsIm9yaWdpbnMiLCJkZXN0aW5hdGlvbnMiLCJwbGFjZWlk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SUFDbkMsT0FBT0QseURBQUcsQ0FBQ3RRLHVEQUFPLENBQUNJLGNBQWMsRUFBRTtNQUNqQ3FSLE9BQU8sRUFBRSxHQUFHdkcsTUFBTSxDQUFDTSxNQUFNLENBQUN2QyxRQUFRLElBQUlpQyxNQUFNLENBQUNNLE1BQU0sQ0FBQ3RDLFNBQVMsRUFBRTtNQUMvRHdJLFlBQVksRUFBRSxHQUFHeEcsTUFBTSxDQUFDTyxXQUFXLENBQUN4QyxRQUFRLElBQUlpQyxNQUFNLENBQUNPLFdBQVcsQ0FBQ3ZDLFNBQVMsRUFBRTtNQUM5RXFDLE9BQU8sRUFBRSxHQUFHTCxNQUFNLENBQUNLLE9BQU87SUFDNUIsQ0FBQyxFQUFFZ0YsT0FBTyxDQUFDO0VBQ2IsQ0FBQztFQUNEckQsWUFBWSxFQUFFQSxDQUFDeUUsT0FBTyxFQUFFcEIsT0FBTyxLQUFLO0lBQ2xDLE9BQU9ELHlEQUFHLENBQUN0USx1REFBTyxDQUFDTSxZQUFZLEVBQUU7TUFDL0JxUjtJQUNGLENBQUMsRUFBRXBCLE9BQU8sQ0FBQztFQUNiLENBQUM7RUFDRHFCLFdBQVcsRUFBRUEsQ0FBQzNJLFFBQVEsRUFBRUMsU0FBUyxLQUFLO0lBQ3BDLE9BQU9xRSw0Q0FBSyxDQUFDQyxHQUFHLENBQUMsdURBQXVEdkUsUUFBUSxRQUFRQyxTQUFTLG1FQUE0QyxDQUFDO0VBQ2hKO0FBQ0YsQ0FBQyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDRCxxRDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJleHBvcnQgY29uc3QgQVBJX1VSTCA9IHtcbiAgR0VPQ09ERTogXCIvZ2VvY29kZVwiLFxuICBBVVRPQ09NUExFVEU6IFwiL1BsYWNlL0F1dG9jb21wbGV0ZVwiLFxuICBESVJFQ1RJT046IFwiL0RpcmVjdGlvblwiLFxuICBESVNUQU5DRU1BVFJJWDogXCIvRGlzdGFuY2VNYXRyaXhcIixcbiAgR09PR0xFX0VNQkVEOiBcImh0dHBzOi8vbWFwcy5nb29nbGUuY29tL21hcHM/ej0xNyZvdXRwdXQ9ZW1iZWRcIixcbiAgUExBQ0VfREVUQUlMOiBcIi9QbGFjZS9EZXRhaWxcIixcbiAgV0VBVEhFUjpcImh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyXCIsXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiIsImltcG9ydCBSZWFjdCwgeyBFcnJvckluZm8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIGV4ZWNPbmNlLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGUsXG4gIE5leHRXZWJWaXRhbHNNZXRyaWMsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJy4uL2NsaWVudC9yb3V0ZXInXG5cbmV4cG9ydCB7IEFwcEluaXRpYWxQcm9wcyB9XG5cbmV4cG9ydCB7IE5leHRXZWJWaXRhbHNNZXRyaWMgfVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0ID0gQXBwQ29udGV4dFR5cGU8Um91dGVyPlxuXG5leHBvcnQgdHlwZSBBcHBQcm9wczxQID0ge30+ID0gQXBwUHJvcHNUeXBlPFJvdXRlciwgUD5cblxuLyoqXG4gKiBgQXBwYCBjb21wb25lbnQgaXMgdXNlZCBmb3IgaW5pdGlhbGl6ZSBvZiBwYWdlcy4gSXQgYWxsb3dzIGZvciBvdmVyd3JpdGluZyBhbmQgZnVsbCBjb250cm9sIG9mIHRoZSBgcGFnZWAgaW5pdGlhbGl6YXRpb24uXG4gKiBUaGlzIGFsbG93cyBmb3Iga2VlcGluZyBzdGF0ZSBiZXR3ZWVuIG5hdmlnYXRpb24sIGN1c3RvbSBlcnJvciBoYW5kbGluZywgaW5qZWN0aW5nIGFkZGl0aW9uYWwgZGF0YS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKHtcbiAgQ29tcG9uZW50LFxuICBjdHgsXG59OiBBcHBDb250ZXh0KTogUHJvbWlzZTxBcHBJbml0aWFsUHJvcHM+IHtcbiAgY29uc3QgcGFnZVByb3BzID0gYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eClcbiAgcmV0dXJuIHsgcGFnZVByb3BzIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwPFAgPSB7fSwgQ1AgPSB7fSwgUyA9IHt9PiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcbiAgUCAmIEFwcFByb3BzPENQPixcbiAgU1xuPiB7XG4gIHN0YXRpYyBvcmlnR2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHNcblxuICAvLyBLZXB0IGhlcmUgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuICAvLyBXaGVuIHNvbWVvbmUgZW5kZWQgQXBwIHRoZXkgY291bGQgY2FsbCBgc3VwZXIuY29tcG9uZW50RGlkQ2F0Y2hgLlxuICAvLyBAZGVwcmVjYXRlZCBUaGlzIG1ldGhvZCBpcyBubyBsb25nZXIgbmVlZGVkLiBFcnJvcnMgYXJlIGNhdWdodCBhdCB0aGUgdG9wIGxldmVsXG4gIGNvbXBvbmVudERpZENhdGNoKGVycm9yOiBFcnJvciwgX2Vycm9ySW5mbzogRXJyb3JJbmZvKTogdm9pZCB7XG4gICAgdGhyb3cgZXJyb3JcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHJvdXRlciwgQ29tcG9uZW50LCBwYWdlUHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHRoaXNcbiAgICAgIC5wcm9wcyBhcyBBcHBQcm9wczxDUD5cblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcG9uZW50XG4gICAgICAgIHsuLi5wYWdlUHJvcHN9XG4gICAgICAgIHtcbiAgICAgICAgICAvLyB3ZSBkb24ndCBhZGQgdGhlIGxlZ2FjeSBVUkwgcHJvcCBpZiBpdCdzIHVzaW5nIG5vbi1sZWdhY3lcbiAgICAgICAgICAvLyBtZXRob2RzIGxpa2UgZ2V0U3RhdGljUHJvcHMgYW5kIGdldFNlcnZlclNpZGVQcm9wc1xuICAgICAgICAgIC4uLighKF9fTl9TU0cgfHwgX19OX1NTUCkgPyB7IHVybDogY3JlYXRlVXJsKHJvdXRlcikgfSA6IHt9KVxuICAgICAgICB9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5sZXQgd2FybkNvbnRhaW5lcjogKCkgPT4gdm9pZFxubGV0IHdhcm5Vcmw6ICgpID0+IHZvaWRcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgd2FybkNvbnRhaW5lciA9IGV4ZWNPbmNlKCgpID0+IHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICBgV2FybmluZzogdGhlIFxcYENvbnRhaW5lclxcYCBpbiBcXGBfYXBwXFxgIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHNob3VsZCBiZSByZW1vdmVkLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9hcHAtY29udGFpbmVyLWRlcHJlY2F0ZWRgXG4gICAgKVxuICB9KVxuXG4gIHdhcm5VcmwgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIGBXYXJuaW5nOiB0aGUgJ3VybCcgcHJvcGVydHkgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvdXJsLWRlcHJlY2F0ZWRgXG4gICAgKVxuICB9KVxufVxuXG4vLyBAZGVwcmVjYXRlZCBub29wIGZvciBub3cgdW50aWwgcmVtb3ZhbFxuZXhwb3J0IGZ1bmN0aW9uIENvbnRhaW5lcihwOiBhbnkpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5Db250YWluZXIoKVxuICByZXR1cm4gcC5jaGlsZHJlblxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVXJsKHJvdXRlcjogUm91dGVyKSB7XG4gIC8vIFRoaXMgaXMgdG8gbWFrZSBzdXJlIHdlIGRvbid0IHJlZmVyZW5jZXMgdGhlIHJvdXRlciBvYmplY3QgYXQgY2FsbCB0aW1lXG4gIGNvbnN0IHsgcGF0aG5hbWUsIGFzUGF0aCwgcXVlcnkgfSA9IHJvdXRlclxuICByZXR1cm4ge1xuICAgIGdldCBxdWVyeSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBxdWVyeVxuICAgIH0sXG4gICAgZ2V0IHBhdGhuYW1lKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHBhdGhuYW1lXG4gICAgfSxcbiAgICBnZXQgYXNQYXRoKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIGFzUGF0aFxuICAgIH0sXG4gICAgYmFjazogKCkgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcm91dGVyLmJhY2soKVxuICAgIH0sXG4gICAgcHVzaDogKHVybDogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHVybCwgYXMpXG4gICAgfSxcbiAgICBwdXNoVG86IChocmVmOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICBjb25zdCBwdXNoUm91dGUgPSBhcyA/IGhyZWYgOiAnJ1xuICAgICAgY29uc3QgcHVzaFVybCA9IGFzIHx8IGhyZWZcblxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHB1c2hSb3V0ZSwgcHVzaFVybClcbiAgICB9LFxuICAgIHJlcGxhY2U6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZSh1cmwsIGFzKVxuICAgIH0sXG4gICAgcmVwbGFjZVRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcmVwbGFjZVJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHJlcGxhY2VVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZShyZXBsYWNlUm91dGUsIHJlcGxhY2VVcmwpXG4gICAgfSxcbiAgfVxufVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IENvbmZpZ1Byb3ZpZGVyIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgQXBwLCB7IENvbnRhaW5lciB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCB2aV9WTiBmcm9tICdhbnRkL2xpYi9sb2NhbGUtcHJvdmlkZXIvdmlfVk4nO1xuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4uL3JlZHV4L3NhZ2FzL2luZGV4JztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4uL3JlZHV4L3N0b3JlQ29uZmlnJztcbmltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL2luZGV4LnNjc3MnO1xuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0JztcbmNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoKTtcbnN0b3JlLnJ1blNhZ2Eocm9vdFNhZ2EpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluQXBwIGV4dGVuZHMgQXBwIHtcblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHM7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuXHRcdFx0XHQ8Q29udGFpbmVyPlxuXHRcdFx0XHRcdDxIZWFkPlxuXHRcdFx0XHRcdFx0PG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cblx0XHRcdFx0XHRcdHsvKiA8dGl0bGU+UGFya2luZyBMb3QgTWFuYWdlbWVudDwvdGl0bGU+ICovfVxuXHRcdFx0XHRcdFx0PG1ldGFcblx0XHRcdFx0XHRcdFx0bmFtZT1cInZpZXdwb3J0XCJcblx0XHRcdFx0XHRcdFx0Y29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaGVpZ2h0PWRldmljZS1oZWlnaHQsIGluaXRpYWwtc2NhbGU9MS4wXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8bGlua1xuXHRcdFx0XHRcdFx0XHRyZWw9XCJpY29uXCJcblx0XHRcdFx0XHRcdFx0aHJlZj1cIi9zdGF0aWMvaW1hZ2VzL2dvb25nLWxvZ28tbWluaS5wbmdcIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxsaW5rXG5cdFx0XHRcdFx0XHRcdHJlbD1cInN0eWxlc2hlZXRcIlxuXHRcdFx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly91c2UuZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjIuMC9jc3MvYWxsLmNzc1wiXG5cdFx0XHRcdFx0XHRcdGludGVncml0eT1cInNoYTM4NC1oV1ZqZmx3RnhMNnNOem50aWgyN2JmeGtyMjdQbWJiSy9pU3ZKK2E0KzBvd1hxNzl2K2xzRmtXNTRiT0diaURRXCJcblx0XHRcdFx0XHRcdFx0Y3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L0hlYWQ+XG5cdFx0XHRcdFx0PENvbmZpZ1Byb3ZpZGVyIGxvY2FsZT17dmlfVk59PlxuXHRcdFx0XHRcdFx0PENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuXHRcdFx0XHRcdDwvQ29uZmlnUHJvdmlkZXI+XG5cdFx0XHRcdDwvQ29udGFpbmVyPlxuXHRcdFx0PC9Qcm92aWRlcj5cblx0XHQpO1xuXHR9XG59XG4iLCJleHBvcnQgY29uc3RcbiAgU0hPV19WSVNCTEVfQk9YID0gXCJCT1g6U0hPV19WSVNJQkxFX0JPWFwiLFxuXG4gIFNFVF9SRURfTUFSS0VSID0gXCJNQVJLRVI6U0VUX1JFRF9NQVJLRVJcIixcblxuICBTRVRfQ09MTEFQU0VEX0lORk9fQk9YID0gXCJJTkZPX0JPWDpTRVRfQ09MTEFQU0VEXCIsXG5cbiAgU0VUX1BPUFVQX1JJR0hUX0NMSUNLID0gXCJQT1BVUDpTRVRfUE9QVVBcIiIsImV4cG9ydCBjb25zdFxuICBTSE9XX05BVklHQVRJT05fQk9YID0gXCJCT1g6U0hPV19OQVZJR0FUSU9OX0JPWFwiLFxuXG4gIE5BVklHQVRJT05fRlJPTV9SRVFVRVNUID0gXCJMT0NBVElPTjpOQVZJR0FUSU9OX0ZST01fUkVRVUVTVFwiLFxuXG4gIE5BVklHQVRJT05fVE9fUkVRVUVTVCA9IFwiTE9DQVRJT046TkFWSUdBVElPTl9UT19SRVFVRVNUXCIsXG5cbiAgTkFWSUdBVElPTl9SRVFVRVNUID0gXCJMT0NBVElPTjpOQVZJR0FUSU9OX1JFUVVFU1RcIixcbiAgTkFWSUdBVElPTl9TVUNDRVNTID0gXCJMT0NBVElPTjpOQVZJR0FUSU9OX1NVQ0NFU1NcIixcbiAgTkFWSUdBVElPTl9GQUlMID0gXCJMT0NBVElPTjpOQVZJR0FUSU9OX0ZBSUxcIixcblxuICBTV0FQX1JFUVVFU1QgPSBcIkxPQ0FUSU9OOlNXQVBfUkVRVUVTVFwiLFxuXG4gIE5BVklHQVRJT05fU0VMRUNUX1JFU1VMVF9SRVFVRVNUID0gXCJMT0NBVElPTjpTRUxFQ1RfUkVTVUxUX1JFUVVFU1RcIixcbiAgTkFWSUdBVElPTl9TRUxFQ1RfUkVTVUxUX1NVQ0NFU1MgPSBcIkxPQ0FUSU9OOlNFTEVDVF9SRVNVTFRfU1VDQ0VTU1wiLFxuXG4gIENMRUFSX1JFU1VMVF9SRVFVRVNUID0gXCJMT0NBVElPTjpDTEVBUl9SRVNVTFRfUkVRVUVTVFwiLFxuXG4gIENMRUFSX1JFUVVFU1QgPSBcIkxPQ0FUSU9OOkNMRUFSX1JFUVVFU1RcIixcblxuICBUWVBFX0lOUFVUID0gXCJUWVBFX0lOUFVUXCIsXG4gIFRZUEVfTEFUTE9ORyA9IFwiVFlQRV9MQVRMT05HXCIsXG4gIElORk9fUkVTVEFVUkFOVCA9IFwiSU5GT19SRVNUQVVSQU5UXCIiLCJleHBvcnQgY29uc3RcbiAgR0VUX0RFVEFJTF9CWV9JRF9SRVFVRVNUID0gXCJMT0NBVElPTjpHRVRfREVUQUlMX0lEX1JFUVVFU1RcIixcbiAgR0VUX0RFVEFJTF9CWV9JRF9TVUNDRVNTID0gXCJMT0NBVElPTjpHRVRfREVUQUlMX0lEX1NVQ0NFU1NcIixcblxuICBTRVRfTVlfTE9DQVRJT04gPSBcIkxPQ0FUSU9OOlNFVF9NWV9MT0NBVElPTlwiLFxuXG4gIEdFVF9ERVRBSUxfQllfTEFUTE5HX1JFUVVFU1QgPSBcIkxPQ0FUSU9OOkdFVF9ERVRBSUxfTEFUTE5HX1JFUVVFU1RcIixcbiAgR0VUX0RFVEFJTF9CWV9MQVRMTkdfU1VDQ0VTUyA9IFwiTE9DQVRJT046R0VUX0RFVEFJTF9MQVRMTkdfU1VDQ0VTU1wiLFxuXG4gIFJFU0VUX0xPQ0FUSU9OID0gXCJMT0NBVElPTjpSRVNFVFwiLFxuICBHRVRfREVUQUlMX0FST1VORF9QTEFDRV9SRVFVRVNUID0gXCJMT0NBVElPTjpHRVRfREVUQUlMX0FST1VORF9QTEFDRV9SRVFVRVNUXCIsXG4gIEdFVF9ERVRBSUxfQVJPVU5EX1BMQUNFX1NVQ0NFU1MgPSBcIkxPQ0FUSU9OOkdFVF9ERVRBSUxfQVJPVU5EX1BMQUNFX1NVQ0NFU1NcIixcblxuICBTRVRfTUFQX1ZJRVdQT1JUX1JFUVVFU1QgPSBcIk1BUDpTRVRfVklFV1BPUlRfUkVRVUVTVFwiLFxuICBTRVRfQ0VOVEVSX0xBVExOR19SRVFVRVNUID0gXCJNQVA6U0VUX0NFTlRFUl9MQVRMTkdfUkVRVUVTVFwiXG4iLCJleHBvcnQgY29uc3RcbiAgICBTRUFSQ0hfUkVRVUVTVCA9IFwiU0VBUkNIOlNFQVJDSF9SRVFVRVNUXCIsXG4gICAgU0VBUkNIX1NVQ0NFU1MgPSBcIlNFQVJDSDpTRUFSQ0hfU1VDQ0VTU1wiLFxuXG4gICAgU0VBUkNIX0NMRUFSX1JFUVVFU1QgPSBcIlNFQVJDSDpDTEVBUl9SRVFVRVNUXCIsXG5cbiAgICBTRUFSQ0hfQVJPVU5EX1JFUVVFU1QgPSBcIlNFQVJDSDpTRUFSQ0hfQVJPVU5EX1JFUVVFU1RcIixcbiAgICBTRUFSQ0hfQVJPVU5EX1NVQ0NFU1MgPSBcIlNFQVJDSDpTRUFSQ0hfQVJPVU5EX1NVQ0NFU1NcIixcblxuICAgIENMRUFSX1NFQVJDSF9BUk9VTkRfUkVRVUVTVCA9IFwiU0VBUkNIOkNMRUFSX1NFQVJDSF9BUk9VTkRfUkVRVUVTVFwiLFxuICAgIFNFTEVDVF9BUk9VTkRfUExBQ0VfTUFSS0VSID0gXCJTRUxFQ1RfQVJPVU5EX1BMQUNFX01BUktFUl9SRVFVRVNUXCIsXG5cbiAgICBTRUFSQ0hfSElTVE9SWSA9IFwiU0VBUkNIX0hJU1RPUllcIixcblxuICAgIFNFQVJDSF9EQVRBID0gXCJTRUFSQ0hfREFUQVwiLFxuICAgIFJFU1RBVVJBTlRfREFUQSA9IFwiUkVTVEFVUkFOVF9EQVRBXCIsXG4gICAgU0VBUkNIX0xPQ0FMX1NUT1JBR0UgPSBcIlNFQVJDSF9MT0NBTF9TVE9SQUdFXCIiLCJpbXBvcnQgKiBhcyBib3ggZnJvbSAnLi4vY29uc3RzL2JveFZpc2libGUnXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgYm94X3Zpc2libGU6ICdzZWFyY2gnLFxuICBpbmZvX2JveF9jb2xsYXBzZWQ6IGZhbHNlLFxuICByZWRfbWFya2VyX3Zpc2libGU6IGZhbHNlLFxuICBwb3NpdGlvbl9yZWRfbWFya2VyOiB7fSxcbiAgcG9wdXBfdmlzaWJsZTogZmFsc2UsXG4gIHBvc2l0aW9uX3BvcHVwOiB7fSxcbiAgdHlwZV9wb3B1cDogJ25vcm1hbCdcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYm94VmlzaWJsZVJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBib3guU0hPV19WSVNCTEVfQk9YOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGJveF92aXNpYmxlOiBhY3Rpb24udHlwZV92aXNpYmxlIH1cbiAgICBjYXNlIGJveC5TRVRfUkVEX01BUktFUjpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCByZWRfbWFya2VyX3Zpc2libGU6IGFjdGlvbi52aXNpYmxlLCBwb3NpdGlvbl9yZWRfbWFya2VyOiBhY3Rpb24ubG9jYXRpb24gfVxuICAgIGNhc2UgYm94LlNFVF9DT0xMQVBTRURfSU5GT19CT1g6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaW5mb19ib3hfY29sbGFwc2VkOiBhY3Rpb24uY29sbGFwc2VkIH1cbiAgICBjYXNlIGJveC5TRVRfUE9QVVBfUklHSFRfQ0xJQ0s6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcG9wdXBfdmlzaWJsZTogYWN0aW9uLnZpc2libGUsIHBvc2l0aW9uX3BvcHVwOiBhY3Rpb24ubG9jYXRpb24sIHR5cGVfcG9wdXA6IGFjdGlvbi50eXBlX3BvcHVwIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfVxuICB9XG59IiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHNlYXJjaFJlZHVjZXIgZnJvbSAnLi9zZWFyY2hSZWR1Y2VyJztcbmltcG9ydCBwbGFjZVJlZHVjZXIgZnJvbSAnLi9wbGFjZVJlZHVjZXInO1xuaW1wb3J0IG5hdmlnYXRpb25SZWR1Y2VyIGZyb20gJy4vbmF2aWdhdGlvblJlZHVjZXInO1xuaW1wb3J0IGJveFZpc2libGVSZWR1Y2VyIGZyb20gJy4vYm94VmlzaWJsZVJlZHVjZXInO1xuXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG5cdHNlYXJjaFJlZHVjZXIsXG5cdHBsYWNlUmVkdWNlcixcblx0bmF2aWdhdGlvblJlZHVjZXIsXG5cdGJveFZpc2libGVSZWR1Y2VyLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuIiwiaW1wb3J0ICogYXMgbmF2aWdhdGlvbiBmcm9tICcuLi9jb25zdHMvbmF2aWdhdGlvbidcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBmcm9tOiBudWxsLFxuICB0bzogbnVsbCxcbiAgcmVzdWx0OiBudWxsLFxuICB0ZXh0X3RvX2lucHV0OiAnJyxcbiAgdGV4dF9mcm9tX2lucHV0OiAnJyxcbiAgcmVzdWx0X3NlbGVjdDogJ2Zhc3Rlc3QnLFxuICByZXNwb25zZV9zdGF0dXM6IHRydWUsXG4gIHR5cGVfaW5wdXQ6IHRydWUsXG4gIHR5cGVfbGF0bG9uZzogJycsXG4gIGluZm9fcmVzdGF1cmFudDogZmFsc2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmF2aWdhdGlvblJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgICBjYXNlIG5hdmlnYXRpb24uTkFWSUdBVElPTl9GUk9NX1JFUVVFU1Q6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZnJvbTogYWN0aW9uLnBsYWNlLFxuICAgICAgICB0ZXh0X2Zyb21faW5wdXQ6IGFjdGlvbi50ZXh0LFxuICAgICAgfVxuXG4gICAgY2FzZSBuYXZpZ2F0aW9uLk5BVklHQVRJT05fVE9fUkVRVUVTVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB0bzogYWN0aW9uLnBsYWNlLFxuICAgICAgICB0ZXh0X3RvX2lucHV0OiBhY3Rpb24udGV4dCxcbiAgICAgIH1cblxuICAgIGNhc2UgbmF2aWdhdGlvbi5TV0FQX1JFUVVFU1Q6XG4gICAgICBjb25zdCB0bXAgPSBzdGF0ZS5mcm9tO1xuICAgICAgY29uc3QgdG1wX3RleHQgPSBzdGF0ZS50ZXh0X2Zyb21faW5wdXQ7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZnJvbTogc3RhdGUudG8sXG4gICAgICAgIHRvOiB0bXAsXG4gICAgICAgIHRleHRfZnJvbV9pbnB1dDogc3RhdGUudGV4dF90b19pbnB1dCxcbiAgICAgICAgdGV4dF90b19pbnB1dDogdG1wX3RleHRcbiAgICAgIH1cblxuICAgIGNhc2UgbmF2aWdhdGlvbi5OQVZJR0FUSU9OX1NVQ0NFU1M6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcmVzdWx0OiBhY3Rpb24ucmVzdWx0LCByZXNwb25zZV9zdGF0dXM6IHRydWUgfVxuXG4gICAgY2FzZSBuYXZpZ2F0aW9uLk5BVklHQVRJT05fRkFJTDpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCByZXN1bHQ6IGFjdGlvbi5yZXN1bHQsIHJlc3BvbnNlX3N0YXR1czogZmFsc2UgfVxuXG4gICAgY2FzZSBuYXZpZ2F0aW9uLk5BVklHQVRJT05fU0VMRUNUX1JFU1VMVF9SRVFVRVNUOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHJlc3VsdF9zZWxlY3Q6IGFjdGlvbi5yb2FkV2F5IH1cblxuICAgIGNhc2UgbmF2aWdhdGlvbi5DTEVBUl9SRVNVTFRfUkVRVUVTVDpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCByZXN1bHQ6IG51bGwgfVxuXG4gICAgY2FzZSBuYXZpZ2F0aW9uLkNMRUFSX1JFUVVFU1Q6XG4gICAgICByZXR1cm4geyAuLi5pbml0aWFsU3RhdGUgfVxuXG4gICAgY2FzZSBuYXZpZ2F0aW9uLlRZUEVfSU5QVVQ6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdHlwZV9pbnB1dDogYWN0aW9uLnR5cGVfaW5wdXQgfVxuICAgIGNhc2UgbmF2aWdhdGlvbi5UWVBFX0xBVExPTkc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdHlwZV9sYXRsb25nOiBhY3Rpb24udHlwZV9sYXRsb25nIH1cbiAgICBjYXNlIG5hdmlnYXRpb24uSU5GT19SRVNUQVVSQU5UOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGluZm9fcmVzdGF1cmFudDogYWN0aW9uLmluZm9fcmVzdGF1cmFudCB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH1cbiAgfVxufSIsImltcG9ydCAqIGFzIHBsYWNlIGZyb20gJy4uL2NvbnN0cy9wbGFjZSdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGN1cnJlbnRfcGxhY2U6IG51bGwsXG4gIG5lYXJfcGxhY2VzOiBbXSxcbiAgY2VudGVyOiB7XG4gICAgbGF0aXR1ZGU6IDIxLjAxMzcyMixcbiAgICBsb25naXR1ZGU6IDEwNS43OTgyMzJcbiAgfSxcbiAgdmlld3BvcnQ6IHtcbiAgICBsYXRpdHVkZTogMjEuMDEzNzIyLFxuICAgIGxvbmdpdHVkZTogMTA1Ljc5ODIzMixcbiAgICB6b29tOiAxMlxuICB9LFxuICBteV9sb2NhdGlvbjogbnVsbFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZWFyY2hSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgcGxhY2UuR0VUX0RFVEFJTF9CWV9JRF9TVUNDRVNTOlxuICAgICAgY29uc3QgcGlkID0gYWN0aW9uLnBpZCB8fCBhY3Rpb24uZGF0YS5wbGFjZV9pZDtcbiAgICAgIGlmIChwaWQpIHtcbiAgICAgICAgUm91dGVyLnB1c2goe1xuICAgICAgICAgIHBhdGhuYW1lOiBgL2AsXG4gICAgICAgICAgcXVlcnk6IHsgcGlkOiBgJHtwaWR9YCB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgUm91dGVyLnB1c2goe1xuICAgICAgICAgIHBhdGhuYW1lOiBgL2AsXG4gICAgICAgICAgcXVlcnk6IHsgbG9jYXRpb246IGAke2FjdGlvbi5kYXRhLmdlb21ldHJ5LmxvY2F0aW9uLmxhdH0sJHthY3Rpb24uZGF0YS5nZW9tZXRyeS5sb2NhdGlvbi5sbmd9YCB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGN1cnJlbnRfcGxhY2U6IGFjdGlvbi5kYXRhLCBuZWFyX3BsYWNlczogYWN0aW9uLm5lYXJQbGFjZXMgfVxuXG4gICAgY2FzZSBwbGFjZS5SRVNFVF9MT0NBVElPTjpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjdXJyZW50X3BsYWNlOiBpbml0aWFsU3RhdGUuY3VycmVudF9wbGFjZSwgbmVhcl9wbGFjZXM6IGluaXRpYWxTdGF0ZS5uZWFyX3BsYWNlcyB9XG5cbiAgICBjYXNlIHBsYWNlLlNFVF9NQVBfVklFV1BPUlRfUkVRVUVTVDpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB2aWV3cG9ydDogYWN0aW9uLnZpZXdwb3J0IH1cblxuICAgIGNhc2UgcGxhY2UuU0VUX0NFTlRFUl9MQVRMTkdfUkVRVUVTVDpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjZW50ZXI6IGFjdGlvbi5sYXRMbmcgfVxuXG4gICAgY2FzZSBwbGFjZS5HRVRfREVUQUlMX0FST1VORF9QTEFDRV9TVUNDRVNTOlxuICAgICAgY29uc3QgcGlkX2Fyb3VuZCA9IGFjdGlvbi5waWQgfHwgYWN0aW9uLmRhdGEucGxhY2VfaWQ7O1xuICAgICAgaWYgKHBpZF9hcm91bmQpIHtcbiAgICAgICAgUm91dGVyLnB1c2goe1xuICAgICAgICAgIHBhdGhuYW1lOiBgL2AsXG4gICAgICAgICAgcXVlcnk6IHsgcGlkX2Fyb3VuZCB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGN1cnJlbnRfcGxhY2U6IGFjdGlvbi5kYXRhLCBuZWFyX3BsYWNlczogYWN0aW9uLm5lYXJQbGFjZXMgfVxuICAgIFxuICAgIGNhc2UgcGxhY2UuU0VUX01ZX0xPQ0FUSU9OOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIG15X2xvY2F0aW9uOiBhY3Rpb24ubGF0TG5nIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9XG4gIH1cbn0iLCJpbXBvcnQgKiBhcyBzZWFyY2ggZnJvbSAnLi4vY29uc3RzL3NlYXJjaCdcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBwbGFjZXM6IFtdLFxuICBhcm91bmRfcGxhY2VzOiBbXSxcbiAgYXJvdW5kX3BsYWNlX3NlbGVjdDogbnVsbCxcbiAgc2VhcmNoX2hpc3Rvcnk6IHRydWUsXG4gIHNlYXJjaF9kYXRhOiBbXSxcbiAgcmVzdGF1cmFudF9kYXRhOiBbXSxcbiAgc2VhcmNoX2xvY2FsX3N0b3JhZ2U6IFtdXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlYXJjaFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBzZWFyY2guU0VBUkNIX1NVQ0NFU1M6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcGxhY2VzOiBhY3Rpb24ucGxhY2VzIH1cbiAgICBjYXNlIHNlYXJjaC5TRUFSQ0hfQVJPVU5EX1NVQ0NFU1M6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgYXJvdW5kX3BsYWNlczogYWN0aW9uLmFyb3VuZF9wbGFjZXMsIGFyb3VuZF9wbGFjZV9jZW50ZXI6IGFjdGlvbi5jZW50ZXJfbG9jYXRpb24gfVxuICAgIGNhc2Ugc2VhcmNoLlNFQVJDSF9DTEVBUl9SRVFVRVNUOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHBsYWNlczogaW5pdGlhbFN0YXRlLnBsYWNlcyB9XG4gICAgY2FzZSBzZWFyY2guQ0xFQVJfU0VBUkNIX0FST1VORF9SRVFVRVNUOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGFyb3VuZF9wbGFjZXM6IGluaXRpYWxTdGF0ZS5hcm91bmRfcGxhY2VzLCBhcm91bmRfcGxhY2Vfc2VsZWN0OiBudWxsIH1cbiAgICBjYXNlIHNlYXJjaC5TRUxFQ1RfQVJPVU5EX1BMQUNFX01BUktFUjpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBhcm91bmRfcGxhY2Vfc2VsZWN0OiBhY3Rpb24ucGxhY2UgfVxuICAgIGNhc2Ugc2VhcmNoLlNFQVJDSF9ISVNUT1JZOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHNlYXJjaF9oaXN0b3J5OiBhY3Rpb24uc2VhcmNoX2hpc3RvcnkgfVxuICAgIGNhc2Ugc2VhcmNoLlNFQVJDSF9EQVRBOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHNlYXJjaF9kYXRhOiBhY3Rpb24uc2VhcmNoX2RhdGEgfVxuICAgIGNhc2Ugc2VhcmNoLlJFU1RBVVJBTlRfREFUQTpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCByZXN0YXVyYW50X2RhdGE6IGFjdGlvbi5yZXN0YXVyYW50X2RhdGEgfVxuICAgIGNhc2Ugc2VhcmNoLlNFQVJDSF9MT0NBTF9TVE9SQUdFOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHNlYXJjaF9sb2NhbF9zdG9yYWdlOiBhY3Rpb24uc2VhcmNoX2xvY2FsX3N0b3JhZ2UgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9XG4gIH1cbn0iLCJpbXBvcnQgeyBhbGwsIGZvcmsgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0IHNlYXJjaFNhZ2EgZnJvbSAnLi9zZWFyY2hTYWdhJztcbmltcG9ydCBwbGFjZVNhZ2EgZnJvbSAnLi9wbGFjZVNhZ2EnO1xuaW1wb3J0IG5hdmlnYXRpb25TYWdhIGZyb20gJy4vbmF2aWdhdGlvblNhZ2EnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XG5cdHlpZWxkIGFsbChbZm9yayhzZWFyY2hTYWdhKSwgZm9yayhwbGFjZVNhZ2EpLCBmb3JrKG5hdmlnYXRpb25TYWdhKV0pO1xufVxuIiwiaW1wb3J0IHsgdGFrZUxhdGVzdCwgY2FsbCwgcHV0LCBhbGwgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0ICogYXMgbmF2aWdhdGlvbiBmcm9tICcuLi9jb25zdHMvbmF2aWdhdGlvbic7XG5pbXBvcnQgUmVxdWVzdCBmcm9tICcuLi8uLi91dGlscy9yZXF1ZXN0JztcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tICdhbnRkJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogbmF2aWdhdGlvblNhZ2EoKSB7XG4gIHlpZWxkIGFsbChbXG4gICAgdGFrZUxhdGVzdChuYXZpZ2F0aW9uLk5BVklHQVRJT05fUkVRVUVTVCwgbmF2aWdhdGlvblJlcXVlc3RTYWdhKSxcbiAgXSk7XG59XG5cbmZ1bmN0aW9uIGRpcmVjdGlvblNlcnZpY2UocGFyYW1zKSB7XG4gIHJldHVybiBSZXF1ZXN0LmRpcmVjdGlvbihwYXJhbXMpO1xufVxuXG5mdW5jdGlvbiogbmF2aWdhdGlvblJlcXVlc3RTYWdhKGFjdGlvbikge1xuICB0cnkgeyAgXG4gICAgY29uc3QgeyBmcm9tX3BsYWNlLCB0b19wbGFjZSwgdmVoaWNsZSB9ID0gYWN0aW9uO1xuICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICBvcmlnaW46IHsgbGF0aXR1ZGU6IGZyb21fcGxhY2UuZ2VvbWV0cnkubG9jYXRpb24ubGF0LCBsb25naXR1ZGU6IGZyb21fcGxhY2UuZ2VvbWV0cnkubG9jYXRpb24ubG5nIH0sXG4gICAgICBkZXN0aW5hdGlvbjogeyBsYXRpdHVkZTogdG9fcGxhY2UuZ2VvbWV0cnkubG9jYXRpb24ubGF0LCBsb25naXR1ZGU6IHRvX3BsYWNlLmdlb21ldHJ5LmxvY2F0aW9uLmxuZyB9LFxuICAgICAgdmVoaWNsZVxuICAgIH1cbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoZGlyZWN0aW9uU2VydmljZSwgcGFyYW1zKTtcblxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwICYmIHJlc3BvbnNlLmRhdGEucm91dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHNob3J0ZXN0ID0gcmVzcG9uc2UuZGF0YT8ucm91dGVzPy5zb3J0KChyMSxyMikgPT4ge1xuICAgICAgICByZXR1cm4gcjEubGVnc1swXS5kaXN0YW5jZS52YWx1ZSAtIHIyLmxlZ3NbMF0uZGlzdGFuY2UudmFsdWU7XG4gICAgICB9KVswXTtcbiAgICAgIGNvbnN0IGZhc3Rlc3QgPSByZXNwb25zZS5kYXRhPy5yb3V0ZXM/LnNvcnQoKHIxLHIyKSA9PiB7XG4gICAgICAgIHJldHVybiByMS5sZWdzWzBdLmR1cmF0aW9uLnZhbHVlIC0gcjIubGVnc1swXS5kdXJhdGlvbi52YWx1ZTtcbiAgICAgIH0pWzBdO1xuICAgICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgICBmYXN0ZXN0OiBbZmFzdGVzdF0sXG4gICAgICAgIHNob3J0ZXN0OiBbc2hvcnRlc3RdXG4gICAgICB9O1xuICAgICAgeWllbGQgcHV0KHtcbiAgICAgICAgdHlwZTogbmF2aWdhdGlvbi5OQVZJR0FUSU9OX1NVQ0NFU1MsXG4gICAgICAgIHJlc3VsdDogcmVzdWx0XG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlLmVycm9yKFwiS2jDtG5nIHTDrG0gdGjhuqV5IMSRxrDhu51uZyDEkWkgIVwiKTtcbiAgICAgIHlpZWxkIHB1dCh7XG4gICAgICAgIHR5cGU6IG5hdmlnYXRpb24uTkFWSUdBVElPTl9GQUlMLFxuICAgICAgICByZXN1bHQ6IG51bGxcbiAgICAgIH0pXG4gICAgfVxuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbWVzc2FnZS5lcnJvcihcIktow7RuZyB0w6xtIHRo4bqleSDEkcaw4budbmcgxJFpICFcIik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IG5hdmlnYXRpb24uTkFWSUdBVElPTl9GQUlMLFxuICAgICAgcmVzdWx0OiBudWxsXG4gICAgfSlcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgdGFrZUxhdGVzdCwgY2FsbCwgcHV0LCBhbGwgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0ICogYXMgcGxhY2UgZnJvbSAnLi4vY29uc3RzL3BsYWNlJztcbmltcG9ydCBSZXF1ZXN0IGZyb20gJy4uLy4uL3V0aWxzL3JlcXVlc3QnO1xuaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gJ2FudGQnXG5pbXBvcnQgeyBzZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi9zZWFyY2hTYWdhJ1xuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcGxhY2VTYWdhKCkge1xuICB5aWVsZCBhbGwoW1xuICAgIHRha2VMYXRlc3QocGxhY2UuR0VUX0RFVEFJTF9CWV9JRF9SRVFVRVNULCBnZXREZXRhaWxJZFNhZ2EpLFxuICAgIHRha2VMYXRlc3QocGxhY2UuR0VUX0RFVEFJTF9CWV9MQVRMTkdfUkVRVUVTVCwgZ2V0RGV0YWlsTGF0TG5nU2FnYSksXG4gICAgdGFrZUxhdGVzdChwbGFjZS5HRVRfREVUQUlMX0FST1VORF9QTEFDRV9SRVFVRVNULCBnZXREZXRhaWxBcm91bmRQbGFjZVNhZ2EpXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGV0YWlsSWRTZXJ2aWNlKHBpZCkge1xuICByZXR1cm4gUmVxdWVzdC5wbGFjZV9kZXRhaWwocGlkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERldGFpbExhdExuZ1NlcnZpY2UobGF0TG5nKSB7XG4gIHJldHVybiBSZXF1ZXN0Lmdlb2NvZGUobGF0TG5nKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERldGFpbEFyb3VuZFBsYWNlU2VydmljZShpZCkge1xuICByZXR1cm4gQXhpb3MuZ2V0KGBodHRwczovL25hcGkuZ29vbmcuaW8vdjEvbWFya2VyL2dldF9tYXJrZXJfZGV0YWlsLyR7aWR9YCk7XG59XG5cbmZ1bmN0aW9uKiBnZXREZXRhaWxJZFNhZ2EoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGdldERldGFpbElkU2VydmljZSwgYWN0aW9uLnBpZCk7XG5cbiAgICBjb25zdCBsYXRMbmcgPSB7XG4gICAgICBsYXRpdHVkZTogcmVzcG9uc2UuZGF0YS5yZXN1bHQuZ2VvbWV0cnkubG9jYXRpb24ubGF0LFxuICAgICAgbG9uZ2l0dWRlOiByZXNwb25zZS5kYXRhLnJlc3VsdC5nZW9tZXRyeS5sb2NhdGlvbi5sbmdcbiAgICB9XG4gICAgY29uc3QgZ2V0QnlMYXRMbmcgPSB5aWVsZCBjYWxsKGdldERldGFpbExhdExuZ1NlcnZpY2UsIGxhdExuZyk7XG4gICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09ICdPSycgJiYgZ2V0QnlMYXRMbmcuZGF0YS5yZXN1bHRzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGxvY2F0aW9uID0gcmVzcG9uc2UuZGF0YS5yZXN1bHQuZ2VvbWV0cnkubG9jYXRpb24ubGF0ICsgXCIsXCIgKyByZXNwb25zZS5kYXRhLnJlc3VsdC5nZW9tZXRyeS5sb2NhdGlvbi5sbmc7XG4gICAgICBjb25zdCByZXNwb25zZV9zZWFyY2ggPSB5aWVsZCBjYWxsKHNlYXJjaFNlcnZpY2UsIHJlc3BvbnNlLmRhdGEucmVzdWx0Lm5hbWUsIGxvY2F0aW9uLCAxMSwgMTApO1xuICAgICAgY29uc3QgbmVhcl9wbGFjZXMgPSByZXNwb25zZV9zZWFyY2guZGF0YS5wcmVkaWN0aW9ucz8uZmlsdGVyKGkgPT4gaS5wbGFjZV9pZCAhPT0gYWN0aW9uLnBpZCk7XG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBwbGFjZS5HRVRfREVUQUlMX0JZX0lEX1NVQ0NFU1MsIGRhdGE6IHJlc3BvbnNlLmRhdGEucmVzdWx0LCBuZWFyUGxhY2VzOiBuZWFyX3BsYWNlcywgcGlkOiBhY3Rpb24ucGlkIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UuZXJyb3IoJ0tow7RuZyB0w6xtIHRo4bqleSDEkeG7i2EgxJFp4buDbSAhJylcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdGhyb3cgZXJyb3JcbiAgfVxufVxuXG5mdW5jdGlvbiogZ2V0RGV0YWlsTGF0TG5nU2FnYShhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoZ2V0RGV0YWlsTGF0TG5nU2VydmljZSwgYWN0aW9uLmxhdExuZyk7XG4gICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09ICdPSycgJiYgcmVzcG9uc2UuZGF0YS5yZXN1bHRzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHBsYWNlX3JldHVybiA9IHJlc3BvbnNlLmRhdGEucmVzdWx0c1swXTtcbiAgICAgIGNvbnN0IG5hbWVfcGxhY2UgPSBwbGFjZV9yZXR1cm4uYWRkcmVzc19jb21wb25lbnRzWzBdLmxvbmdfbmFtZTtcblxuICAgICAgY29uc3QgbG9jYXRpb24gPSBwbGFjZV9yZXR1cm4uZ2VvbWV0cnkubG9jYXRpb24ubGF0ICsgXCIsXCIgKyBwbGFjZV9yZXR1cm4uZ2VvbWV0cnkubG9jYXRpb24ubG5nO1xuICAgICAgY29uc3QgcmVzcG9uc2Vfc2VhcmNoID0geWllbGQgY2FsbChzZWFyY2hTZXJ2aWNlLCBuYW1lX3BsYWNlLCBsb2NhdGlvbiwgMTEsIDEwKTtcbiAgICAgIGNvbnN0IG5lYXJfcGxhY2VzID0gcmVzcG9uc2Vfc2VhcmNoLmRhdGEucHJlZGljdGlvbnM/LmZpbHRlcihpID0+IGkucGxhY2VfaWQgIT09IHBsYWNlX3JldHVybi5wbGFjZV9pZCk7XG4gICAgICBjb25zdCByZXR1cm5fZGF0YSA9IHtcbiAgICAgICAgLi4ucGxhY2VfcmV0dXJuLFxuICAgICAgICBuYW1lOiBuYW1lX3BsYWNlLFxuICAgICAgICBmb3JtYXR0ZWRfYWRkcmVzczogZ2V0QWRkcmVzc0dlb2NvZGUocGxhY2VfcmV0dXJuKVxuICAgICAgfVxuICAgICAgeWllbGQgcHV0KHsgdHlwZTogcGxhY2UuR0VUX0RFVEFJTF9CWV9JRF9TVUNDRVNTLCBkYXRhOiByZXR1cm5fZGF0YSwgbmVhclBsYWNlczogbmVhcl9wbGFjZXMgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5lcnJvcignS2jDtG5nIHTDrG0gdGjhuqV5IMSR4buLYSDEkWnhu4NtICEnKVxuICAgIH1cblxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHRocm93IGVycm9yXG4gIH1cbn1cblxuZnVuY3Rpb24qIGdldERldGFpbEFyb3VuZFBsYWNlU2FnYShhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoZ2V0RGV0YWlsQXJvdW5kUGxhY2VTZXJ2aWNlLCBhY3Rpb24uaWQpO1xuICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5kYXRhLmRhdGE7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIGNvbnN0IHJldHVybl9kYXRhID0ge1xuICAgICAgICAuLi5kYXRhLFxuICAgICAgICBwbGFjZV9pZDogZGF0YS5faWQsXG4gICAgICAgIGdlb21ldHJ5OiB7XG4gICAgICAgICAgbG9jYXRpb246IHtcbiAgICAgICAgICAgIGxhdDogTnVtYmVyKGRhdGEubG5nX2xhdFsxXSksXG4gICAgICAgICAgICBsbmc6IE51bWJlcihkYXRhLmxuZ19sYXRbMF0pLFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZm9ybWF0dGVkX2FkZHJlc3M6IGRhdGEuZGVzY3JpcHRpb24uYWRkcmVzc1xuICAgICAgfVxuICAgICAgY29uc3QgbmFtZV9wbGFjZSA9IHJldHVybl9kYXRhLm5hbWU7XG4gICAgICBjb25zdCBsb2NhdGlvbiA9IHJldHVybl9kYXRhLmdlb21ldHJ5LmxvY2F0aW9uLmxhdCArIFwiLFwiICsgcmV0dXJuX2RhdGEuZ2VvbWV0cnkubG9jYXRpb24ubG5nO1xuICAgICAgY29uc3QgcmVzcG9uc2Vfc2VhcmNoID0geWllbGQgY2FsbChzZWFyY2hTZXJ2aWNlLCBuYW1lX3BsYWNlLCBsb2NhdGlvbiwgMTAsIDEwKTtcbiAgICAgIGNvbnN0IG5lYXJfcGxhY2VzID0gcmVzcG9uc2Vfc2VhcmNoLmRhdGEucHJlZGljdGlvbnM7XG4gICAgICB5aWVsZCBwdXQoeyB0eXBlOiBwbGFjZS5HRVRfREVUQUlMX0FST1VORF9QTEFDRV9TVUNDRVNTLCBkYXRhOiByZXR1cm5fZGF0YSwgbmVhclBsYWNlczogbmVhcl9wbGFjZXMgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5lcnJvcignS2jDtG5nIHTDrG0gdGjhuqV5IMSR4buLYSDEkWnhu4NtICEnKVxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB0aHJvdyBlcnJvclxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBZGRyZXNzR2VvY29kZShwbGFjZSkge1xuICBsZXQgcmVzdWx0ID0gW107XG4gIHBsYWNlLmFkZHJlc3NfY29tcG9uZW50cy5zbGljZSgxKS5tYXAoaXRlbSA9PiB7XG4gICAgcmVzdWx0LnB1c2goaXRlbS5sb25nX25hbWUpO1xuICB9KVxuICByZXR1cm4gcmVzdWx0LmpvaW4oJywnKVxufSIsImltcG9ydCB7IHRha2VMYXRlc3QsIGNhbGwsIHB1dCwgYWxsIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCAqIGFzIHNlYXJjaCBmcm9tICcuLi9jb25zdHMvc2VhcmNoJztcbmltcG9ydCBSZXF1ZXN0IGZyb20gJy4uLy4uL3V0aWxzL3JlcXVlc3QnO1xuaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IGdldERldGFpbExhdExuZ1NlcnZpY2UsIGdldEFkZHJlc3NHZW9jb2RlIH0gZnJvbSAnLi9wbGFjZVNhZ2EnXG5cbmxldCBzZWFyY2hSZXF1ZXN0ID0gbnVsbDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBzZWFyY2hTYWdhKCkge1xuICB5aWVsZCBhbGwoW1xuICAgIHRha2VMYXRlc3Qoc2VhcmNoLlNFQVJDSF9SRVFVRVNULCBzZWFyY2hSZXF1ZXN0U2FnYSksXG4gICAgdGFrZUxhdGVzdChzZWFyY2guU0VBUkNIX0FST1VORF9SRVFVRVNULCBzZWFyY2hBcm91bmRTYWdhKSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFNlcnZpY2UocXVlcnksIGxvY2F0aW9uLCByYWRpdXMsIGxpbWl0KSB7XG4gIGlmIChzZWFyY2hSZXF1ZXN0KSBzZWFyY2hSZXF1ZXN0LmNhbmNlbCgpO1xuICBzZWFyY2hSZXF1ZXN0ID0gUmVxdWVzdC5hdXRvY29tcGxldGUocXVlcnksIGxvY2F0aW9uLCByYWRpdXMsIGxpbWl0KTtcbiAgcmV0dXJuIHNlYXJjaFJlcXVlc3Q7XG59XG5cbmZ1bmN0aW9uIHNlYXJjaEFyb3VuZFNlcnZpY2UobG9jYXRpb24sIHpvb20pIHtcbiAgcmV0dXJuIEF4aW9zLnBvc3QoJ2h0dHBzOi8vbmFwaS5nb29uZy5pby92MS9tYXJrZXIvZ2V0X21hcmtlcnNfaW5fYmVhcicsIHtcbiAgICBcImxhdFwiOiBsb2NhdGlvbi5sYXQsXG4gICAgXCJsbmdcIjogbG9jYXRpb24ubG5nLFxuICAgIFwiZGlzdGFuY2VcIjogMTAwMCxcbiAgICBcInR5cGVfY29kZVwiOiBbXCJTVUdHRVNUSU9OXCJdLCAvL29yIFwiY2F0X2NvZGVcIjpbXCJHVF9TVEFUSUNcIl1cbiAgICBcImJlYXJpbmdcIjogMCxcbiAgICBcImFuZ2xlXCI6IDM2MCxcbiAgICBcImxpbWl0XCI6IDUwLFxuICAgIFwicGFnZVwiOiAwLFxuICAgIFwiem9vbVwiOiB6b29tXG4gIH0pO1xufVxuXG5mdW5jdGlvbiogc2VhcmNoUmVxdWVzdFNhZ2EoYWN0aW9uKSB7XG4gIGlmIChhY3Rpb24ucXVlcnkudHJpbSgpID09PSAnJykge1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IHNlYXJjaC5TRUFSQ0hfU1VDQ0VTUywgcGxhY2VzOiBbXSB9KTtcbiAgfVxuICBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKHNlYXJjaFNlcnZpY2UsIGFjdGlvbi5xdWVyeSwgYWN0aW9uLmxvY2F0aW9uKTtcbiAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PSAnT0snKSB7XG4gICAgICAgIGNvbnN0IHBsYWNlcyA9IHJlc3BvbnNlLmRhdGEucHJlZGljdGlvbnMgfHwgW107XG4gICAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IHNlYXJjaC5TRUFSQ0hfU1VDQ0VTUywgcGxhY2VzOiBwbGFjZXMgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB5aWVsZCBwdXQoeyB0eXBlOiBzZWFyY2guU0VBUkNIX1NVQ0NFU1MsIHBsYWNlczogW10gfSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24qIHNlYXJjaEFyb3VuZFNhZ2EoYWN0aW9uKSB7XG4gIGlmIChhY3Rpb24ubG9jYXRpb24ubGF0ICYmIGFjdGlvbi5sb2NhdGlvbi5sbmcpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoc2VhcmNoQXJvdW5kU2VydmljZSwgYWN0aW9uLmxvY2F0aW9uLCBhY3Rpb24uem9vbSk7XG4gICAgaWYgKHJlc3BvbnNlLmRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgcmVzcG9uc2VfY2VudGVyID0geWllbGQgY2FsbChnZXREZXRhaWxMYXRMbmdTZXJ2aWNlLCB7IGxhdGl0dWRlOiBhY3Rpb24ubG9jYXRpb24ubGF0LCBsb25naXR1ZGU6IGFjdGlvbi5sb2NhdGlvbi5sbmcgfSk7XG4gICAgICBjb25zdCBwbGFjZV9jZW50ZXIgPSByZXNwb25zZV9jZW50ZXIuZGF0YS5yZXN1bHRzWzBdO1xuICAgICAgY29uc3QgcGxhY2VfY2VudGVyX3JldHVybiA9IHtcbiAgICAgICAgLi4ucGxhY2VfY2VudGVyLFxuICAgICAgICBuYW1lOiBwbGFjZV9jZW50ZXIuYWRkcmVzc19jb21wb25lbnRzWzBdLmxvbmdfbmFtZSxcbiAgICAgICAgZm9ybWF0dGVkX2FkZHJlc3M6IGdldEFkZHJlc3NHZW9jb2RlKHBsYWNlX2NlbnRlcilcbiAgICAgIH1cbiAgICAgIHlpZWxkIHB1dCh7IHR5cGU6IHNlYXJjaC5TRUFSQ0hfQVJPVU5EX1NVQ0NFU1MsIGFyb3VuZF9wbGFjZXM6IHJlc3BvbnNlLmRhdGEsIGNlbnRlcl9sb2NhdGlvbjogcGxhY2VfY2VudGVyX3JldHVybiB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZS5lcnJvcignS2jDtG5nIGPDsyDEkeG7i2EgxJFp4buDbSBuw6BvIHF1YW5oIMSRw6J5ICEnKVxuICAgIH1cbiAgfVxufSIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCdcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuL3JlZHVjZXJzL2luZGV4J1xuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKCkge1xuICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKClcbiAgcmV0dXJuIHtcbiAgICAuLi5jcmVhdGVTdG9yZShyb290UmVkdWNlciwgYXBwbHlNaWRkbGV3YXJlKHNhZ2FNaWRkbGV3YXJlKSksXG4gICAgcnVuU2FnYTogc2FnYU1pZGRsZXdhcmUucnVuLFxuICB9XG4gIHJldHVybiB7XG4gICAgLi4uY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGFwcGx5TWlkZGxld2FyZShzYWdhTWlkZGxld2FyZSkpLFxuICAgIHJ1blNhZ2E6IHNhZ2FNaWRkbGV3YXJlLnJ1bixcbiAgfVxufSIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmNvbnN0IHsgQ2FuY2VsVG9rZW4gfSA9IGF4aW9zO1xuXG5leHBvcnQgY29uc3QgR0VUID0gKHVybCwgcGFyYW1zLCBvcHRpb25zID0ge30pID0+IHtcbiAgbGV0IGNhbmNlbDtcbiAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgYXhpb3MuZ2V0KGAke29wdGlvbnMuaG9zdF9uYW1lIHx8IEFQSV9HQVRFV0FZX1VSTH0ke3VybH1gLCB7XG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgLi4ucGFyYW1zLFxuICAgICAgICBhcGlfa2V5OiBvcHRpb25zLmFwaV9rZXkgfHwgQVBJX0tFWVxuICAgICAgfSxcbiAgICAgIGNhbmNlbFRva2VuOiBuZXcgQ2FuY2VsVG9rZW4oZnVuY3Rpb24gZXhlY3V0b3IoYykge1xuICAgICAgICBjYW5jZWwgPSBjO1xuICAgICAgfSlcbiAgICB9KVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgIH0pO1xuICB9KTtcbiAgcHJvbWlzZS5jYW5jZWwgPSBjYW5jZWw7XG4gIHJldHVybiBwcm9taXNlO1xufSBcbiIsImltcG9ydCB7IEdFVCB9IGZyb20gXCIuL2Jhc2VfcmVxdWVzdFwiO1xuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gXCIuLi9jb25zdHMvYXBpX3VybFwiO1xuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xuZXhwb3J0IGRlZmF1bHQge1xuICBnZW9jb2RlOiAobG9jYXRpb24sIG9wdGlvbnMpID0+IHtcbiAgICByZXR1cm4gR0VUKEFQSV9VUkwuR0VPQ09ERSwge1xuICAgICAgbGF0bG5nOiBgJHtsb2NhdGlvbi5sYXRpdHVkZX0sJHtsb2NhdGlvbi5sb25naXR1ZGV9YFxuICAgIH0sIG9wdGlvbnMpO1xuICB9LFxuICBhdXRvY29tcGxldGU6IChpbnB1dCwgbG9jYXRpb24sIGxpbWl0LCByYWRpdXMsIGhhc19jaGlsZHJlbiwgb3B0aW9ucykgPT4ge1xuICAgIHJldHVybiBHRVQoQVBJX1VSTC5BVVRPQ09NUExFVEUsIHtcbiAgICAgIGlucHV0LFxuICAgICAgbG9jYXRpb24sXG4gICAgICByYWRpdXM6IHJhZGl1cyB8fCAzMDAwLFxuICAgICAgbGltaXQ6IGxpbWl0IHx8IDEwLFxuICAgICAgaGFzX2NoaWxkcmVuOiBoYXNfY2hpbGRyZW4gfHwgZmFsc2VcbiAgICB9LCBvcHRpb25zKTtcbiAgfSxcbiAgZGlyZWN0aW9uOiAocGFyYW1zLCBvcHRpb25zKSA9PiB7XG4gICAgcmV0dXJuIEdFVChBUElfVVJMLkRJUkVDVElPTiwge1xuICAgICAgb3JpZ2luOiBgJHtwYXJhbXMub3JpZ2luLmxhdGl0dWRlfSwke3BhcmFtcy5vcmlnaW4ubG9uZ2l0dWRlfWAsXG4gICAgICBkZXN0aW5hdGlvbjogYCR7cGFyYW1zLmRlc3RpbmF0aW9uLmxhdGl0dWRlfSwke3BhcmFtcy5kZXN0aW5hdGlvbi5sb25naXR1ZGV9YCxcbiAgICAgIHZlaGljbGU6IHBhcmFtcy52ZWhpY2xlIHx8ICdjYXInXG4gICAgfSwgb3B0aW9ucyk7XG4gIH0sXG4gIGRpc3RhbmNlbWF0cml4OiAocGFyYW1zLCBvcHRpb25zKSA9PiB7XG4gICAgcmV0dXJuIEdFVChBUElfVVJMLkRJU1RBTkNFTUFUUklYLCB7XG4gICAgICBvcmlnaW5zOiBgJHtwYXJhbXMub3JpZ2luLmxhdGl0dWRlfSwke3BhcmFtcy5vcmlnaW4ubG9uZ2l0dWRlfWAsXG4gICAgICBkZXN0aW5hdGlvbnM6IGAke3BhcmFtcy5kZXN0aW5hdGlvbi5sYXRpdHVkZX0sJHtwYXJhbXMuZGVzdGluYXRpb24ubG9uZ2l0dWRlfWAsXG4gICAgICB2ZWhpY2xlOiBgJHtwYXJhbXMudmVoaWNsZX1gXG4gICAgfSwgb3B0aW9ucyk7XG4gIH0sXG4gIHBsYWNlX2RldGFpbDogKHBsYWNlaWQsIG9wdGlvbnMpID0+IHtcbiAgICByZXR1cm4gR0VUKEFQSV9VUkwuUExBQ0VfREVUQUlMLCB7XG4gICAgICBwbGFjZWlkXG4gICAgfSwgb3B0aW9ucyk7XG4gIH0sXG4gIGdldF93ZWF0aGVyOiAobGF0aXR1ZGUsIGxvbmdpdHVkZSkgPT4ge1xuICAgIHJldHVybiBBeGlvcy5nZXQoYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2xhdGl0dWRlfSZsb249JHtsb25naXR1ZGV9JnVuaXRzPW1ldHJpYyZsYW5nPXZpJmFwcGlkPSR7V0VBVEhFUl9BUEl9YClcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvY29uZmlnLXByb3ZpZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL2xvY2FsZS1wcm92aWRlci92aV9WTlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9tZXNzYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1oZWxtZXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==