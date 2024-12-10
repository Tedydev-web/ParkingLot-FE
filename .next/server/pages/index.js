module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/index": 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions_place__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actions/place */ "./redux/actions/place.js");
/* harmony import */ var _redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/actions/boxVisble */ "./redux/actions/boxVisble.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }






const App = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../components/App */ "./components/App.jsx")).then(mod => mod.default), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../components/App */ "./components/App.jsx")],
    modules: ["../components/App"]
  }
});
class Home extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  static async getInitialProps({
    req,
    query,
    params
  }) {
    return {
      query
    };
  }
  constructor(props) {
    super(props);
    _defineProperty(this, "updateWindowWidth", () => {
      this.setState({
        windowWidth: window.innerWidth
      });
    });
    this.state = _objectSpread(_objectSpread({}, props.query), {}, {
      windowWidth: 800
    });
  }
  componentDidMount() {
    var _URLSearchParams$get;
    window.addEventListener('resize', this.updateWindowWidth);
    this.setState({
      windowWidth: window.innerWidth
    });
    this.updateWindowWidth();
    const pid = new URLSearchParams(window.location.search).get("pid");
    const location = (_URLSearchParams$get = new URLSearchParams(window.location.search).get("location")) === null || _URLSearchParams$get === void 0 ? void 0 : _URLSearchParams$get.split(",");
    const pid_around = new URLSearchParams(window.location.search).get("pid_around");
    const is_iframe = new URLSearchParams(window.location.search).get("iframe");
    if (is_iframe) {
      if (location) {
        const latLng = {
          latitude: Number(location[0]),
          longitude: Number(location[1])
        };
        this.props.dispatch(Object(_redux_actions_place__WEBPACK_IMPORTED_MODULE_3__["getDetailByLatLngAction"])(latLng));
        this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_4__["setBoxVisibleAction"])('iframe'));
      } else {
        this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_4__["setBoxVisibleAction"])('iframe'));
      }
      return;
    } else {
      if (pid) {
        this.props.dispatch(Object(_redux_actions_place__WEBPACK_IMPORTED_MODULE_3__["getDetailByIdAction"])(pid));
        this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_4__["setBoxVisibleAction"])('info'));
        return;
      } else if (pid_around) {
        this.props.dispatch(Object(_redux_actions_place__WEBPACK_IMPORTED_MODULE_3__["getDetailAroundPlace"])(pid_around));
        this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_4__["setBoxVisibleAction"])('info'));
        return;
      } else if (location) {
        const latLng = {
          latitude: Number(location[0]),
          longitude: Number(location[1])
        };
        this.props.dispatch(Object(_redux_actions_place__WEBPACK_IMPORTED_MODULE_3__["getDetailByLatLngAction"])(latLng));
        this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_4__["setBoxVisibleAction"])('info'));
        return;
      }
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.boxVisible !== "search" && this.props.boxVisible === "search") {
      next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push({
        pathname: `/`,
        query: null
      });
    }
  }
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(App, null));
  }
}
const mapStateToProps = state => {
  return {
    boxVisible: state.boxVisibleReducer.box_visible
  };
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Home));

/***/ }),

/***/ "./redux/actions/boxVisble.js":
/*!************************************!*\
  !*** ./redux/actions/boxVisble.js ***!
  \************************************/
/*! exports provided: setBoxVisibleAction, setRedMarkerAction, setCollapsedInfoBoxAction, setPopupRightClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBoxVisibleAction", function() { return setBoxVisibleAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRedMarkerAction", function() { return setRedMarkerAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCollapsedInfoBoxAction", function() { return setCollapsedInfoBoxAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPopupRightClick", function() { return setPopupRightClick; });
/* harmony import */ var _consts_boxVisible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts/boxVisible */ "./redux/consts/boxVisible.js");

const setBoxVisibleAction = type_visible => {
  return {
    type: _consts_boxVisible__WEBPACK_IMPORTED_MODULE_0__["SHOW_VISBLE_BOX"],
    type_visible
  };
};
const setRedMarkerAction = (visible, location) => {
  return {
    type: _consts_boxVisible__WEBPACK_IMPORTED_MODULE_0__["SET_RED_MARKER"],
    visible,
    location
  };
};
const setCollapsedInfoBoxAction = collapsed => {
  return {
    type: _consts_boxVisible__WEBPACK_IMPORTED_MODULE_0__["SET_COLLAPSED_INFO_BOX"],
    collapsed
  };
};
const setPopupRightClick = (visible, location, type_popup) => {
  return {
    type: _consts_boxVisible__WEBPACK_IMPORTED_MODULE_0__["SET_POPUP_RIGHT_CLICK"],
    visible,
    location,
    type_popup
  };
};

/***/ }),

/***/ "./redux/actions/place.js":
/*!********************************!*\
  !*** ./redux/actions/place.js ***!
  \********************************/
/*! exports provided: getDetailByIdAction, getDetailByLatLngAction, getDetailAroundPlace, setMapViewportAction, setCenterLatLngAction, setMyLocationAction, resetLocationAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDetailByIdAction", function() { return getDetailByIdAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDetailByLatLngAction", function() { return getDetailByLatLngAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDetailAroundPlace", function() { return getDetailAroundPlace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMapViewportAction", function() { return setMapViewportAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCenterLatLngAction", function() { return setCenterLatLngAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMyLocationAction", function() { return setMyLocationAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetLocationAction", function() { return resetLocationAction; });
/* harmony import */ var _consts_place__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts/place */ "./redux/consts/place.js");

const getDetailByIdAction = pid => {
  return {
    type: _consts_place__WEBPACK_IMPORTED_MODULE_0__["GET_DETAIL_BY_ID_REQUEST"],
    pid
  };
};
const getDetailByLatLngAction = latLng => {
  return {
    type: _consts_place__WEBPACK_IMPORTED_MODULE_0__["GET_DETAIL_BY_LATLNG_REQUEST"],
    latLng
  };
};
const getDetailAroundPlace = id => {
  return {
    type: _consts_place__WEBPACK_IMPORTED_MODULE_0__["GET_DETAIL_AROUND_PLACE_REQUEST"],
    id
  };
};
const setMapViewportAction = viewport => {
  return {
    type: _consts_place__WEBPACK_IMPORTED_MODULE_0__["SET_MAP_VIEWPORT_REQUEST"],
    viewport
  };
};
const setCenterLatLngAction = latLng => {
  return {
    type: _consts_place__WEBPACK_IMPORTED_MODULE_0__["SET_CENTER_LATLNG_REQUEST"],
    latLng
  };
};
const setMyLocationAction = latLng => {
  return {
    type: _consts_place__WEBPACK_IMPORTED_MODULE_0__["SET_MY_LOCATION"],
    latLng
  };
};
const resetLocationAction = () => {
  return {
    type: _consts_place__WEBPACK_IMPORTED_MODULE_0__["RESET_LOCATION"]
  };
};

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

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "antd/lib/avatar":
/*!**********************************!*\
  !*** external "antd/lib/avatar" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/avatar");

/***/ }),

/***/ "antd/lib/card":
/*!********************************!*\
  !*** external "antd/lib/card" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/card");

/***/ }),

/***/ "antd/lib/col":
/*!*******************************!*\
  !*** external "antd/lib/col" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "antd/lib/divider":
/*!***********************************!*\
  !*** external "antd/lib/divider" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/divider");

/***/ }),

/***/ "antd/lib/input":
/*!*********************************!*\
  !*** external "antd/lib/input" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "antd/lib/layout":
/*!**********************************!*\
  !*** external "antd/lib/layout" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

/***/ }),

/***/ "antd/lib/list":
/*!********************************!*\
  !*** external "antd/lib/list" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/list");

/***/ }),

/***/ "antd/lib/message":
/*!***********************************!*\
  !*** external "antd/lib/message" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

/***/ }),

/***/ "antd/lib/row":
/*!*******************************!*\
  !*** external "antd/lib/row" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ "antd/lib/tooltip":
/*!***********************************!*\
  !*** external "antd/lib/tooltip" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/tooltip");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "fast-deep-equal/es6/react":
/*!********************************************!*\
  !*** external "fast-deep-equal/es6/react" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fast-deep-equal/es6/react");

/***/ }),

/***/ "i18next":
/*!**************************!*\
  !*** external "i18next" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("i18next");

/***/ }),

/***/ "lodash/debounce":
/*!**********************************!*\
  !*** external "lodash/debounce" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/debounce");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

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

/***/ "react-copy-to-clipboard":
/*!******************************************!*\
  !*** external "react-copy-to-clipboard" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-copy-to-clipboard");

/***/ }),

/***/ "react-device-detect":
/*!**************************************!*\
  !*** external "react-device-detect" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-device-detect");

/***/ }),

/***/ "react-div-100vh":
/*!**********************************!*\
  !*** external "react-div-100vh" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-div-100vh");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-i18next":
/*!********************************!*\
  !*** external "react-i18next" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-i18next");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-sortable-hoc":
/*!*************************************!*\
  !*** external "react-sortable-hoc" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-sortable-hoc");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9ib3hWaXNibGUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9wbGFjZS5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9jb25zdHMvYm94VmlzaWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9jb25zdHMvcGxhY2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFudC1kZXNpZ24vaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9hdmF0YXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9jYXJkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvY29sXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvZGl2aWRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGQvbGliL2lucHV0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvbGF5b3V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvbGlzdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGQvbGliL21lc3NhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9yb3dcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi90b29sdGlwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmYXN0LWRlZXAtZXF1YWwvZXM2L3JlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaTE4bmV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaC9kZWJvdW5jZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZHluYW1pY1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jb3B5LXRvLWNsaXBib2FyZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRldmljZS1kZXRlY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kaXYtMTAwdmhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb20vc2VydmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaTE4bmV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc29ydGFibGUtaG9jXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIl0sIm5hbWVzIjpbIkFwcCIsImR5bmFtaWMiLCJ0aGVuIiwibW9kIiwiZGVmYXVsdCIsInNzciIsImxvYWRhYmxlR2VuZXJhdGVkIiwid2VicGFjayIsInJlcXVpcmUiLCJtb2R1bGVzIiwiSG9tZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwicmVxIiwicXVlcnkiLCJwYXJhbXMiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiX2RlZmluZVByb3BlcnR5Iiwic2V0U3RhdGUiLCJ3aW5kb3dXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJzdGF0ZSIsIl9vYmplY3RTcHJlYWQiLCJjb21wb25lbnREaWRNb3VudCIsIl9VUkxTZWFyY2hQYXJhbXMkZ2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInVwZGF0ZVdpbmRvd1dpZHRoIiwicGlkIiwiVVJMU2VhcmNoUGFyYW1zIiwibG9jYXRpb24iLCJzZWFyY2giLCJnZXQiLCJzcGxpdCIsInBpZF9hcm91bmQiLCJpc19pZnJhbWUiLCJsYXRMbmciLCJsYXRpdHVkZSIsIk51bWJlciIsImxvbmdpdHVkZSIsImRpc3BhdGNoIiwiZ2V0RGV0YWlsQnlMYXRMbmdBY3Rpb24iLCJzZXRCb3hWaXNpYmxlQWN0aW9uIiwiZ2V0RGV0YWlsQnlJZEFjdGlvbiIsImdldERldGFpbEFyb3VuZFBsYWNlIiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwiYm94VmlzaWJsZSIsIlJvdXRlciIsInB1c2giLCJwYXRobmFtZSIsInJlbmRlciIsIl9fanN4IiwiRnJhZ21lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJib3hWaXNpYmxlUmVkdWNlciIsImJveF92aXNpYmxlIiwiY29ubmVjdCIsInR5cGVfdmlzaWJsZSIsInR5cGUiLCJib3giLCJzZXRSZWRNYXJrZXJBY3Rpb24iLCJ2aXNpYmxlIiwic2V0Q29sbGFwc2VkSW5mb0JveEFjdGlvbiIsImNvbGxhcHNlZCIsInNldFBvcHVwUmlnaHRDbGljayIsInR5cGVfcG9wdXAiLCJwbGFjZSIsImlkIiwic2V0TWFwVmlld3BvcnRBY3Rpb24iLCJ2aWV3cG9ydCIsInNldENlbnRlckxhdExuZ0FjdGlvbiIsInNldE15TG9jYXRpb25BY3Rpb24iLCJyZXNldExvY2F0aW9uQWN0aW9uIiwiUkVTRVRfTE9DQVRJT04iLCJTSE9XX1ZJU0JMRV9CT1giLCJTRVRfUkVEX01BUktFUiIsIlNFVF9DT0xMQVBTRURfSU5GT19CT1giLCJTRVRfUE9QVVBfUklHSFRfQ0xJQ0siLCJHRVRfREVUQUlMX0JZX0lEX1JFUVVFU1QiLCJHRVRfREVUQUlMX0JZX0lEX1NVQ0NFU1MiLCJTRVRfTVlfTE9DQVRJT04iLCJHRVRfREVUQUlMX0JZX0xBVExOR19SRVFVRVNUIiwiR0VUX0RFVEFJTF9CWV9MQVRMTkdfU1VDQ0VTUyIsIkdFVF9ERVRBSUxfQVJPVU5EX1BMQUNFX1JFUVVFU1QiLCJHRVRfREVUQUlMX0FST1VORF9QTEFDRV9TVUNDRVNTIiwiU0VUX01BUF9WSUVXUE9SVF9SRVFVRVNUIiwiU0VU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MEM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3NcbiBcdC8vIFwiMFwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJwYWdlcy9pbmRleFwiOiAwXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG5cblxuIFx0XHQvLyByZXF1aXJlKCkgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdC8vIFwiMFwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IDApIHtcbiBcdFx0XHR2YXIgY2h1bmsgPSByZXF1aXJlKFwiLi4vXCIgKyAoe31bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuanNcIik7XG4gXHRcdFx0dmFyIG1vcmVNb2R1bGVzID0gY2h1bmsubW9kdWxlcywgY2h1bmtJZHMgPSBjaHVuay5pZHM7XG4gXHRcdFx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBjaHVua0lkcy5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIHVuY2F1Z2h0IGVycm9yIGhhbmRsZXIgZm9yIHdlYnBhY2sgcnVudGltZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikge1xuIFx0XHRwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuIFx0XHRcdHRocm93IGVycjsgLy8gY2F0Y2ggdGhpcyBlcnJvciBieSB1c2luZyBpbXBvcnQoKS5jYXRjaCgpXG4gXHRcdH0pO1xuIFx0fTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgZ2V0RGV0YWlsQnlMYXRMbmdBY3Rpb24sIGdldERldGFpbEJ5SWRBY3Rpb24sIGdldERldGFpbEFyb3VuZFBsYWNlIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucy9wbGFjZSc7XG5pbXBvcnQgeyBzZXRCb3hWaXNpYmxlQWN0aW9uIH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnMvYm94VmlzYmxlXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcblxuY29uc3QgQXBwID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uL2NvbXBvbmVudHMvQXBwJykudGhlbihtb2QgPT4gbW9kLmRlZmF1bHQpLCB7XG4gIHNzcjogZmFsc2Vcbn0pO1xuXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcmVxLCBxdWVyeSwgcGFyYW1zIH0pIHtcbiAgICByZXR1cm4geyBxdWVyeSB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgLi4ucHJvcHMucXVlcnksXG4gICAgICB3aW5kb3dXaWR0aDogODAwLFxuICAgIH07XG4gIH1cblxuICB1cGRhdGVXaW5kb3dXaWR0aCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgd2luZG93V2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoIH0pO1xuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZVdpbmRvd1dpZHRoKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgd2luZG93V2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoIH0pO1xuICAgIHRoaXMudXBkYXRlV2luZG93V2lkdGgoKTtcbiAgICBjb25zdCBwaWQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpLmdldChcInBpZFwiKTtcbiAgICBjb25zdCBsb2NhdGlvbiA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCkuZ2V0KFwibG9jYXRpb25cIik/LnNwbGl0KFwiLFwiKTtcbiAgICBjb25zdCBwaWRfYXJvdW5kID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKS5nZXQoXCJwaWRfYXJvdW5kXCIpO1xuICAgIGNvbnN0IGlzX2lmcmFtZSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCkuZ2V0KFwiaWZyYW1lXCIpO1xuICAgIGlmIChpc19pZnJhbWUpIHtcbiAgICAgIGlmIChsb2NhdGlvbikge1xuICAgICAgICBjb25zdCBsYXRMbmcgPSB7XG4gICAgICAgICAgbGF0aXR1ZGU6IE51bWJlcihsb2NhdGlvblswXSksXG4gICAgICAgICAgbG9uZ2l0dWRlOiBOdW1iZXIobG9jYXRpb25bMV0pXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChnZXREZXRhaWxCeUxhdExuZ0FjdGlvbihsYXRMbmcpKTtcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChzZXRCb3hWaXNpYmxlQWN0aW9uKCdpZnJhbWUnKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHNldEJveFZpc2libGVBY3Rpb24oJ2lmcmFtZScpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHBpZCkge1xuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGdldERldGFpbEJ5SWRBY3Rpb24ocGlkKSk7XG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goc2V0Qm94VmlzaWJsZUFjdGlvbignaW5mbycpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAocGlkX2Fyb3VuZCkge1xuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGdldERldGFpbEFyb3VuZFBsYWNlKHBpZF9hcm91bmQpKTtcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChzZXRCb3hWaXNpYmxlQWN0aW9uKCdpbmZvJykpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2UgaWYgKGxvY2F0aW9uKSB7XG4gICAgICAgIGNvbnN0IGxhdExuZyA9IHtcbiAgICAgICAgICBsYXRpdHVkZTogTnVtYmVyKGxvY2F0aW9uWzBdKSxcbiAgICAgICAgICBsb25naXR1ZGU6IE51bWJlcihsb2NhdGlvblsxXSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGdldERldGFpbEJ5TGF0TG5nQWN0aW9uKGxhdExuZykpO1xuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHNldEJveFZpc2libGVBY3Rpb24oJ2luZm8nKSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgaWYgKHByZXZQcm9wcy5ib3hWaXNpYmxlICE9PSBcInNlYXJjaFwiICYmIHRoaXMucHJvcHMuYm94VmlzaWJsZSA9PT0gXCJzZWFyY2hcIikge1xuICAgICAgUm91dGVyLnB1c2goe1xuICAgICAgICBwYXRobmFtZTogYC9gLFxuICAgICAgICBxdWVyeTogbnVsbFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIHsvKiB7aXNNb2JpbGUgPyA8QXBwTW9iaWxlIC8+IDogPEFwcCB3aW5kb3dXaWR0aD17dGhpcy5zdGF0ZS53aW5kb3dXaWR0aH0gLz59ICovfVxuICAgICAgPEFwcCAvPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xuICByZXR1cm4ge1xuICAgIGJveFZpc2libGU6IHN0YXRlLmJveFZpc2libGVSZWR1Y2VyLmJveF92aXNpYmxlLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShIb21lKVxuIiwiaW1wb3J0ICogYXMgYm94IGZyb20gJy4uL2NvbnN0cy9ib3hWaXNpYmxlJ1xuXG5leHBvcnQgY29uc3Qgc2V0Qm94VmlzaWJsZUFjdGlvbiA9ICh0eXBlX3Zpc2libGUpID0+IHtcbiAgcmV0dXJuIHsgdHlwZTogYm94LlNIT1dfVklTQkxFX0JPWCwgdHlwZV92aXNpYmxlIH1cbn07XG5cbmV4cG9ydCBjb25zdCBzZXRSZWRNYXJrZXJBY3Rpb24gPSAodmlzaWJsZSwgbG9jYXRpb24pID0+IHtcbiAgcmV0dXJuIHsgdHlwZTogYm94LlNFVF9SRURfTUFSS0VSLCB2aXNpYmxlLCBsb2NhdGlvbiB9XG59XG5cbmV4cG9ydCBjb25zdCBzZXRDb2xsYXBzZWRJbmZvQm94QWN0aW9uID0gKGNvbGxhcHNlZCkgPT4ge1xuICByZXR1cm4geyB0eXBlOiBib3guU0VUX0NPTExBUFNFRF9JTkZPX0JPWCwgY29sbGFwc2VkIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNldFBvcHVwUmlnaHRDbGljayA9ICh2aXNpYmxlLCBsb2NhdGlvbiwgdHlwZV9wb3B1cCkgPT4ge1xuICByZXR1cm4geyB0eXBlOiBib3guU0VUX1BPUFVQX1JJR0hUX0NMSUNLLCB2aXNpYmxlLCBsb2NhdGlvbiwgdHlwZV9wb3B1cCB9XG59IiwiaW1wb3J0ICogYXMgcGxhY2UgZnJvbSAnLi4vY29uc3RzL3BsYWNlJztcblxuZXhwb3J0IGNvbnN0IGdldERldGFpbEJ5SWRBY3Rpb24gPSAocGlkKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogcGxhY2UuR0VUX0RFVEFJTF9CWV9JRF9SRVFVRVNULFxuICAgIHBpZFxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RGV0YWlsQnlMYXRMbmdBY3Rpb24gPSAobGF0TG5nKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogcGxhY2UuR0VUX0RFVEFJTF9CWV9MQVRMTkdfUkVRVUVTVCxcbiAgICBsYXRMbmdcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdldERldGFpbEFyb3VuZFBsYWNlID0gKGlkKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogcGxhY2UuR0VUX0RFVEFJTF9BUk9VTkRfUExBQ0VfUkVRVUVTVCxcbiAgICBpZFxuICB9XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0TWFwVmlld3BvcnRBY3Rpb24gPSAodmlld3BvcnQpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBwbGFjZS5TRVRfTUFQX1ZJRVdQT1JUX1JFUVVFU1QsXG4gICAgdmlld3BvcnRcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc2V0Q2VudGVyTGF0TG5nQWN0aW9uID0gKGxhdExuZykgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHBsYWNlLlNFVF9DRU5URVJfTEFUTE5HX1JFUVVFU1QsXG4gICAgbGF0TG5nXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNldE15TG9jYXRpb25BY3Rpb24gPSAobGF0TG5nKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogcGxhY2UuU0VUX01ZX0xPQ0FUSU9OLFxuICAgIGxhdExuZ1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZXNldExvY2F0aW9uQWN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHBsYWNlLlJFU0VUX0xPQ0FUSU9OXG4gIH1cbn0iLCJleHBvcnQgY29uc3RcbiAgU0hPV19WSVNCTEVfQk9YID0gXCJCT1g6U0hPV19WSVNJQkxFX0JPWFwiLFxuXG4gIFNFVF9SRURfTUFSS0VSID0gXCJNQVJLRVI6U0VUX1JFRF9NQVJLRVJcIixcblxuICBTRVRfQ09MTEFQU0VEX0lORk9fQk9YID0gXCJJTkZPX0JPWDpTRVRfQ09MTEFQU0VEXCIsXG5cbiAgU0VUX1BPUFVQX1JJR0hUX0NMSUNLID0gXCJQT1BVUDpTRVRfUE9QVVBcIiIsImV4cG9ydCBjb25zdFxuICBHRVRfREVUQUlMX0JZX0lEX1JFUVVFU1QgPSBcIkxPQ0FUSU9OOkdFVF9ERVRBSUxfSURfUkVRVUVTVFwiLFxuICBHRVRfREVUQUlMX0JZX0lEX1NVQ0NFU1MgPSBcIkxPQ0FUSU9OOkdFVF9ERVRBSUxfSURfU1VDQ0VTU1wiLFxuXG4gIFNFVF9NWV9MT0NBVElPTiA9IFwiTE9DQVRJT046U0VUX01ZX0xPQ0FUSU9OXCIsXG5cbiAgR0VUX0RFVEFJTF9CWV9MQVRMTkdfUkVRVUVTVCA9IFwiTE9DQVRJT046R0VUX0RFVEFJTF9MQVRMTkdfUkVRVUVTVFwiLFxuICBHRVRfREVUQUlMX0JZX0xBVExOR19TVUNDRVNTID0gXCJMT0NBVElPTjpHRVRfREVUQUlMX0xBVExOR19TVUNDRVNTXCIsXG5cbiAgUkVTRVRfTE9DQVRJT04gPSBcIkxPQ0FUSU9OOlJFU0VUXCIsXG4gIEdFVF9ERVRBSUxfQVJPVU5EX1BMQUNFX1JFUVVFU1QgPSBcIkxPQ0FUSU9OOkdFVF9ERVRBSUxfQVJPVU5EX1BMQUNFX1JFUVVFU1RcIixcbiAgR0VUX0RFVEFJTF9BUk9VTkRfUExBQ0VfU1VDQ0VTUyA9IFwiTE9DQVRJT046R0VUX0RFVEFJTF9BUk9VTkRfUExBQ0VfU1VDQ0VTU1wiLFxuXG4gIFNFVF9NQVBfVklFV1BPUlRfUkVRVUVTVCA9IFwiTUFQOlNFVF9WSUVXUE9SVF9SRVFVRVNUXCIsXG4gIFNFVF9DRU5URVJfTEFUTE5HX1JFUVVFU1QgPSBcIk1BUDpTRVRfQ0VOVEVSX0xBVExOR19SRVFVRVNUXCJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL2F2YXRhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9jYXJkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL2NvbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9kaXZpZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL2lucHV0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL2xheW91dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9saXN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL21lc3NhZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvcm93XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL3Rvb2x0aXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmFzdC1kZWVwLWVxdWFsL2VzNi9yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpMThuZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaC9kZWJvdW5jZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2R5bmFtaWNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY29weS10by1jbGlwYm9hcmRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZGV2aWNlLWRldGVjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kaXYtMTAwdmhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pMThuZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNvcnRhYmxlLWhvY1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9