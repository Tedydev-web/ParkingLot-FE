webpackHotUpdate_N_E(1,{

/***/ "./components/Map.jsx":
/*!****************************!*\
  !*** ./components/Map.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/avatar */ "./node_modules/antd/lib/avatar/index.js");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/message */ "./node_modules/antd/lib/message/index.js");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../consts */ "./consts/index.js");
/* harmony import */ var _Marker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Marker */ "./components/Marker.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _BottomInfoLocation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./BottomInfoLocation */ "./components/BottomInfoLocation.jsx");
/* harmony import */ var _MenuRightCLick__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./MenuRightCLick */ "./components/MenuRightCLick.jsx");
/* harmony import */ var _redux_sagas_placeSaga__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../redux/sagas/placeSaga */ "./redux/sagas/placeSaga.js");
/* harmony import */ var fast_deep_equal_es6_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! fast-deep-equal/es6/react */ "./node_modules/fast-deep-equal/es6/react.js");
/* harmony import */ var fast_deep_equal_es6_react__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal_es6_react__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _redux_actions_place__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../redux/actions/place */ "./redux/actions/place.js");
/* harmony import */ var _redux_actions_search__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../redux/actions/search */ "./redux/actions/search.js");
/* harmony import */ var _redux_actions_navigation__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../redux/actions/navigation */ "./redux/actions/navigation.js");
/* harmony import */ var _MarkerNavigation__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./MarkerNavigation */ "./components/MarkerNavigation.jsx");
/* harmony import */ var _redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../redux/actions/boxVisble */ "./redux/actions/boxVisble.js");
/* harmony import */ var _static_images_normal_map_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../static/images/normal_map.png */ "./static/images/normal_map.png");
/* harmony import */ var _static_images_normal_map_png__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_static_images_normal_map_png__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _static_images_satellite_jpeg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../static/images/satellite.jpeg */ "./static/images/satellite.jpeg");
/* harmony import */ var _static_images_satellite_jpeg__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_static_images_satellite_jpeg__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react-dom/server */ "./node_modules/react-dom/server.browser.js");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var react_div_100vh__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-div-100vh */ "./node_modules/react-div-100vh/lib/index.js");
/* harmony import */ var react_div_100vh__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(react_div_100vh__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../utils/request */ "./utils/request.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/main.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _utils_images__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../utils/images */ "./utils/images.js");










var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper(t, o, e) { return o = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(o), Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }






















// import { STYLE_KEY } from "../config.dev";
var Map = /*#__PURE__*/function (_Component) {
  function Map(props) {
    var _this;
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Map);
    _this = _callSuper(this, Map, [props]);
    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "_onViewportChange", function (viewport) {
      _this.props.dispatch(Object(_redux_actions_place__WEBPACK_IMPORTED_MODULE_18__["setMapViewportAction"])(viewport));
    });
    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "_onMouseClick", function (e) {
      _this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_22__["setPopupRightClick"])(false));
      if (_this.props.boxVisible !== 'iframe') {
        _this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_22__["setRedMarkerAction"])(false));
      }
      // if (this.props.boxVisible === "info") this.props.dispatch(setBoxVisibleAction('search'))
      // this.markerWhatIs ? this.markerWhatIs.remove() : null;
      _this.props.dispatch(Object(_redux_actions_search__WEBPACK_IMPORTED_MODULE_19__["selectAroundPlaceAction"])(null));
      _this.removeMarkerWhatIs();
      _this.setState({
        bottomInfoVisible: false
      });
    });
    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "_onRightClick", function (e) {
      var position = {
        lat: e.lngLat.lat,
        lng: e.lngLat.lng
      };
      if (_this.props.boxVisible !== 'iframe') {
        _this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_22__["setRedMarkerAction"])(true, position));
        _this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_22__["setPopupRightClick"])(true, position, 'normal'));
      }
    });
    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "_onClickMenu", function (evt) {
      var parent = evt.target.parentElement;
      if (evt.target.className && evt.target.className.toString().includes('what-is-this')) {
        _this.handleWhatIs();
      } else if (evt.target.className && evt.target.className.toString().includes('from-here')) {
        _this.handleFromHere();
      } else if (evt.target.className && evt.target.className.toString().includes('to-here')) {
        _this.handleToHere();
      } else if (evt.target.className && evt.target.className.toString().includes('delete-location')) {
        _this.handleDeleteLocation();
      } else if (evt.target.className && evt.target.className.toString().includes('search-around')) {
        _this.handleSearchAround();
      } else if (evt.target.className && evt.target.className.toString().includes('to-around-place')) {
        _this.handleToAroundPlace();
      } else if (evt.target.className && evt.target.className.toString().includes('what-is-navigation')) {
        _this.handleWhatIs(false);
      }
      if (parent !== null && parent !== void 0 && parent.className && parent !== null && parent !== void 0 && parent.className.toString().includes('menu-right-click')) {
        if (evt.target.className && !evt.target.className.toString().includes('what-is-this')) {
          _this.props.dispatch(Object(_redux_actions_search__WEBPACK_IMPORTED_MODULE_19__["clearSearchAroundAction"])());
        }
        _this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_22__["setPopupRightClick"])(false));
        _this.removeMarkerWhatIs();
      }
    });
    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "changeVisibleBottomInfo", function (visible) {
      _this.setState({
        bottomInfoVisible: visible
      });
    });
    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "_getInforPlace", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _this$props$position_, _this$props$position_2;
      var lat,
        lng,
        latLng,
        response,
        place_response,
        _args = arguments;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            lat = _args.length > 0 && _args[0] !== undefined ? _args[0] : (_this$props$position_ = _this.props.position_popup) === null || _this$props$position_ === void 0 ? void 0 : _this$props$position_.lat;
            lng = _args.length > 1 && _args[1] !== undefined ? _args[1] : (_this$props$position_2 = _this.props.position_popup) === null || _this$props$position_2 === void 0 ? void 0 : _this$props$position_2.lng;
            latLng = {
              latitude: lat,
              longitude: lng
            };
            _context.prev = 3;
            _context.next = 6;
            return Object(_redux_sagas_placeSaga__WEBPACK_IMPORTED_MODULE_16__["getDetailLatLngService"])(latLng);
          case 6:
            response = _context.sent;
            if (!(response.data.results.length > 0)) {
              _context.next = 12;
              break;
            }
            place_response = response.data.results[0];
            return _context.abrupt("return", _objectSpread(_objectSpread({}, place_response), {}, {
              name: place_response.address_components[0].long_name,
              formatted_address: _this.getAddressGeocode(place_response)
            }));
          case 12:
            antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default.a.error('Không tìm thấy địa điểm !!');
            return _context.abrupt("return", null);
          case 14:
            _context.next = 19;
            break;
          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](3);
            throw _context.t0;
          case 19:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[3, 16]]);
    })));
    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "selectPlace", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var _this$props$positionM, _this$props$positionM2;
      var lat,
        lng,
        redMarkerVisible,
        place,
        viewport,
        el,
        _args2 = arguments;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            lat = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : (_this$props$positionM = _this.props.positionMarkerSelect) === null || _this$props$positionM === void 0 ? void 0 : _this$props$positionM.lat;
            lng = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : (_this$props$positionM2 = _this.props.positionMarkerSelect) === null || _this$props$positionM2 === void 0 ? void 0 : _this$props$positionM2.lng;
            redMarkerVisible = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : true;
            _context2.next = 5;
            return _this._getInforPlace(lat, lng);
          case 5:
            place = _context2.sent;
            if (place) {
              viewport = {
                longitude: lng,
                latitude: lat,
                zoom: 15
              };
              _this.props.dispatch(Object(_redux_actions_place__WEBPACK_IMPORTED_MODULE_18__["setMapViewportAction"])(viewport));
              _this.setState({
                bottomInfoVisible: true,
                placeMouseClick: place
              });
              if (redMarkerVisible) {
                if (_this.markerWhatIs) {
                  _this.markerWhatIs.setLngLat({
                    lat: lat,
                    lng: lng
                  }).addTo(_this.map);
                } else {
                  el = document.createElement('div');
                  el.innerHTML = react_dom_server__WEBPACK_IMPORTED_MODULE_25___default.a.renderToStaticMarkup(__jsx(_Marker__WEBPACK_IMPORTED_MODULE_12__["default"], {
                    size: 22
                  }));
                  _this.markerWhatIs = new maplibregl.Marker(el, {
                    anchor: 'bottom'
                  }).setLngLat({
                    lat: lat,
                    lng: lng
                  }).addTo(_this.map);
                }
                _this.markerWhatIs.getElement().addEventListener('contextmenu', function (e) {
                  e.stopPropagation();
                  e.preventDefault();
                  _this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_22__["setRedMarkerAction"])(false));
                  _this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_22__["setPopupRightClick"])(true, {
                    lat: lat,
                    lng: lng
                  }, 'popupCurrentPlace'));
                });
                _this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_22__["setRedMarkerAction"])(false));
              }
              // redMarkerVisible ? this.props.dispatch(setRedMarkerAction(true, { lat, lng })) : null;
            } else {
              antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default.a.error('Không tìm thấy địa điểm !!');
            }
          case 7:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    })));
    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "removeMarkerWhatIs", function () {
      _this.markerWhatIs ? _this.markerWhatIs.remove() : null;
    });
    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "_getInforPlaceAround", /*#__PURE__*/function () {
      var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(id) {
        var response;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_26___default.a.get("https://napi.goong.io/v1/marker/get_marker_detail/".concat(id));
            case 3:
              response = _context3.sent;
              if (!response.data.data) {
                _context3.next = 8;
                break;
              }
              return _context3.abrupt("return", response.data.data);
            case 8:
              antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default.a.error('Không tìm thấy địa điểm !!');
              return _context3.abrupt("return", null);
            case 10:
              _context3.next = 16;
              break;
            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3["catch"](0);
              antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default.a.error('Không tìm thấy địa điểm !');
              throw _context3.t0;
            case 16:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 12]]);
      }));
      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }());
    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "selectAroundPlace", /*#__PURE__*/function () {
      var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(id) {
        var place, viewport;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _this._getInforPlaceAround(id);
            case 2:
              place = _context4.sent;
              if (place) {
                viewport = {
                  longitude: Number(place.lng_lat[0]),
                  latitude: Number(place.lng_lat[1]),
                  zoom: 15
                };
                _this.props.dispatch(Object(_redux_actions_place__WEBPACK_IMPORTED_MODULE_18__["setMapViewportAction"])(viewport));
                _this.setState({
                  bottomInfoVisible: true,
                  placeMouseClick: place
                });
                _this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_22__["setPopupRightClick"])(false));
              } else {
                antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default.a.error('Không tìm thấy địa điểm !!');
              }
            case 4:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      return function (_x2) {
        return _ref4.apply(this, arguments);
      };
    }());
    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "handleWhatIs", function () {
      var redMarkerVisible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var _this$props = _this.props,
        position_popup = _this$props.position_popup,
        isSmallScreen = _this$props.isSmallScreen;
      if (isSmallScreen) {
        _this.props.dispatch(Object(_redux_actions_place__WEBPACK_IMPORTED_MODULE_18__["getDetailByLatLngAction"])({
          latitude: position_popup.lat,
          longitude: position_popup.lng
        }));
        _this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_22__["setBoxVisibleAction"])('info'));
        _this.props.dispatch(Object(_redux_actions_search__WEBPACK_IMPORTED_MODULE_19__["clearSearchAroundAction"])());
        _this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_22__["setPopupRightClick"])(false));
        _this.removeMarkerWhatIs();
      } else {
        _this.selectPlace(position_popup.lat, position_popup.lng, redMarkerVisible);
      }
    });
    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "handleFromHere", /*#__PURE__*/function () {
      var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(lat, lng) {
        var place, viewport;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (!(!lat || !lng)) {
                _context5.next = 6;
                break;
              }
              _context5.next = 3;
              return _this._getInforPlace();
            case 3:
              place = _context5.sent;
              _context5.next = 9;
              break;
            case 6:
              _context5.next = 8;
              return _this._getInforPlace(lat, lng);
            case 8:
              place = _context5.sent;
            case 9:
              if (place) {
                viewport = {
                  longitude: place.geometry.location.lng,
                  latitude: place.geometry.location.lat,
                  zoom: 15
                };
                !_this.props.to_place && _this.props.dispatch(Object(_redux_actions_place__WEBPACK_IMPORTED_MODULE_18__["setMapViewportAction"])(viewport));
                _this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_22__["setBoxVisibleAction"])('navigation'));
                _this.props.dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_20__["navigationFromAction"])(place, "".concat(place.name, " - ").concat(place.formatted_address)));
                _this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_22__["setRedMarkerAction"])(false));
                _this.changeVisibleBottomInfo(false);
              }
            case 10:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      return function (_x3, _x4) {
        return _ref5.apply(this, arguments);
      };
    }());
    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "handleToHere", /*#__PURE__*/function () {
      var _ref6 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(lat, lng) {
        var place, viewport, my_location, response;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              if (!(!lat || !lng)) {
                _context6.next = 6;
                break;
              }
              _context6.next = 3;
              return _this._getInforPlace();
            case 3:
              place = _context6.sent;
              _context6.next = 9;
              break;
            case 6:
              _context6.next = 8;
              return _this._getInforPlace(lat, lng);
            case 8:
              place = _context6.sent;
            case 9:
              if (!place) {
                _context6.next = 29;
                break;
              }
              _this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_22__["setBoxVisibleAction"])('navigation'));
              viewport = {
                longitude: place.geometry.location.lng,
                latitude: place.geometry.location.lat,
                zoom: 15
              };
              my_location = _this.props.my_location;
              if (!(my_location && (_this.props.boxVisible === 'search' || _this.props.boxVisible === 'info'))) {
                _context6.next = 24;
                break;
              }
              _context6.prev = 14;
              _context6.next = 17;
              return _utils_request__WEBPACK_IMPORTED_MODULE_28__["default"].geocode(my_location);
            case 17:
              response = _context6.sent;
              if (response.data.results.length > 0) {
                _this.props.dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_20__["navigationFromAction"])(_objectSpread(_objectSpread({}, response.data.results[0]), {}, {
                  name: response.data.results[0].address_components[0].long_name
                }), 'Vị trí của bạn'));
              }
              _context6.next = 24;
              break;
            case 21:
              _context6.prev = 21;
              _context6.t0 = _context6["catch"](14);
              throw _context6.t0;
            case 24:
              !_this.props.from_place && _this.props.dispatch(Object(_redux_actions_place__WEBPACK_IMPORTED_MODULE_18__["setMapViewportAction"])(viewport));
              _this.props.dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_20__["navigationToAction"])(place, "".concat(place.name, " - ").concat(place.formatted_address)));
              _this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_22__["setBoxVisibleAction"])('navigation'));
              _this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_22__["setRedMarkerAction"])(false));
              _this.changeVisibleBottomInfo(false);
            case 29:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[14, 21]]);
      }));
      return function (_x5, _x6) {
        return _ref6.apply(this, arguments);
      };
    }());
    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "handleDeleteLocation", function () {
      var type_popup = _this.props.type_popup;
      if (type_popup === 'popupFromPlace') {
        _this.props.dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_20__["navigationFromAction"])(null, ''));
      } else if (type_popup === 'popupToPlace') {
        _this.props.dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_20__["navigationToAction"])(null, ''));
      }
      _this.props.dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_20__["clearResultAction"])());
    });
    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "handleSearchAround", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      var place, viewport, location;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return _this._getInforPlace();
          case 2:
            place = _context7.sent;
            if (place) {
              viewport = {
                longitude: place.geometry.location.lng,
                latitude: place.geometry.location.lat,
                zoom: 15
              };
              location = {
                lat: place.geometry.location.lat,
                lng: place.geometry.location.lng
              };
              _this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_22__["setBoxVisibleAction"])('search'));
              _this.props.dispatch(Object(_redux_actions_place__WEBPACK_IMPORTED_MODULE_18__["setMapViewportAction"])(viewport));
              _this.props.dispatch(Object(_redux_actions_search__WEBPACK_IMPORTED_MODULE_19__["searchAroundAction"])(location, _this.props.viewport.zoom));
              _this.setState({
                bottomInfoVisible: false
              });
            }
          case 4:
          case "end":
            return _context7.stop();
        }
      }, _callee7);
    })));
    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "_selectAroundPlace", function (type, place) {
      if (type !== 'center') {
        _this.props.dispatch(Object(_redux_actions_search__WEBPACK_IMPORTED_MODULE_19__["selectAroundPlaceAction"])(place));
        _this.selectAroundPlace(place === null || place === void 0 ? void 0 : place.id);
      } else {
        _this.props.dispatch(Object(_redux_actions_search__WEBPACK_IMPORTED_MODULE_19__["selectAroundPlaceAction"])(place));
        _this.selectPlace(place.geometry.location.lat, place.geometry.location.lng, false);
      }
    });
    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "handleToAroundPlace", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
      var place, _response$data, place_center, response;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            place = null;
            _this.props.around_places.map(function (item) {
              if (item.lng_lat[0] * 1 === _this.popupRightClick.getLngLat().lng && item.lng_lat[1] * 1 === _this.popupRightClick.getLngLat().lat) {
                place = item;
              }
            });
            if (!place) {
              _context8.next = 21;
              break;
            }
            _context8.prev = 3;
            _this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_22__["setPopupRightClick"])(false));
            place_center = _this.props.around_place_center;
            _this.props.dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_20__["navigationFromAction"])(place_center, "".concat(place_center.name, " - ").concat(place_center.formatted_address)));
            _context8.next = 9;
            return axios__WEBPACK_IMPORTED_MODULE_26___default.a.get("https://napi.goong.io/v1/marker/get_marker_detail/".concat(place.id));
          case 9:
            response = _context8.sent;
            place = (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.data;
            place = _objectSpread(_objectSpread({}, place), {}, {
              place_id: place._id,
              geometry: {
                location: {
                  lat: Number(place.lng_lat[1]),
                  lng: Number(place.lng_lat[0])
                }
              },
              formatted_address: place.description.address
            });
            _this.props.dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_20__["navigationToAction"])(place, "".concat(place.name, " - ").concat(place.formatted_address)));
            _this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_22__["setBoxVisibleAction"])('navigation'));
            _context8.next = 19;
            break;
          case 16:
            _context8.prev = 16;
            _context8.t0 = _context8["catch"](3);
            antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default.a.error('Không tìm thấy địa điểm !');
          case 19:
            _context8.next = 22;
            break;
          case 21:
            antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default.a.error('Không tìm thấy địa điểm !');
          case 22:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[3, 16]]);
    })));
    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "removeMarkerPopup", function () {
      if (_this.markerCurrentPlace) _this.markerCurrentPlace.remove();
      if (_this.popupRightClick) _this.popupRightClick.remove();
      if (_this.props.around_places) _this.props.dispatch(Object(_redux_actions_search__WEBPACK_IMPORTED_MODULE_19__["clearSearchAroundAction"])());
      if (_this.redMarker) _this.redMarker.remove();
    });
    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "getAddressGeocode", function (place) {
      var _place$address_compon;
      var result = [];
      (_place$address_compon = place.address_components) === null || _place$address_compon === void 0 ? void 0 : _place$address_compon.slice(1).map(function (item) {
        result.push(item.long_name);
      });
      return result.join(',');
    });
    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "changeStyle", function () {
      var style = _this.state.style;
      if (style === _consts__WEBPACK_IMPORTED_MODULE_11__["STYLE_URL"].SATELITE + "YJTajS80fLlhJ4a2BG0gXqXXdZzdLG5V3iivOK9e") {
        _this.setState({
          style: _consts__WEBPACK_IMPORTED_MODULE_11__["STYLE_URL"].NORMAL + "YJTajS80fLlhJ4a2BG0gXqXXdZzdLG5V3iivOK9e"
        });
        _this.map.setStyle(_consts__WEBPACK_IMPORTED_MODULE_11__["STYLE_URL"].NORMAL + "YJTajS80fLlhJ4a2BG0gXqXXdZzdLG5V3iivOK9e");
      } else {
        _this.setState({
          style: _consts__WEBPACK_IMPORTED_MODULE_11__["STYLE_URL"].SATELITE + "YJTajS80fLlhJ4a2BG0gXqXXdZzdLG5V3iivOK9e"
        });
        _this.map.setStyle(_consts__WEBPACK_IMPORTED_MODULE_11__["STYLE_URL"].SATELITE + "YJTajS80fLlhJ4a2BG0gXqXXdZzdLG5V3iivOK9e");
      }
    });
    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "navigationByURLIframe", /*#__PURE__*/function () {
      var _ref9 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(from, to) {
        var fromplace, toplace;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_22__["setBoxVisibleAction"])('iframe'));
              _this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_22__["setRedMarkerAction"])(false));
              _this.changeVisibleBottomInfo(false);
              if (!(!from.lat || !from.lng)) {
                _context9.next = 9;
                break;
              }
              _context9.next = 6;
              return _this._getInforPlace();
            case 6:
              fromplace = _context9.sent;
              _context9.next = 12;
              break;
            case 9:
              _context9.next = 11;
              return _this._getInforPlace(from.lat, from.lng);
            case 11:
              fromplace = _context9.sent;
            case 12:
              _context9.next = 14;
              return _this.props.dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_20__["navigationFromAction"])(fromplace, "".concat(fromplace.name, " - ").concat(fromplace.formatted_address)));
            case 14:
              if (!(!to.lat || !to.lng)) {
                _context9.next = 20;
                break;
              }
              _context9.next = 17;
              return _this._getInforPlace();
            case 17:
              toplace = _context9.sent;
              _context9.next = 23;
              break;
            case 20:
              _context9.next = 22;
              return _this._getInforPlace(to.lat, to.lng);
            case 22:
              toplace = _context9.sent;
            case 23:
              _context9.next = 25;
              return _this.props.dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_20__["navigationToAction"])(toplace, "".concat(toplace.name, " - ").concat(toplace.formatted_address)));
            case 25:
              _this.props.dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_20__["navigationAction"])(_this.props.from_place, _this.props.to_place, 'car'));
            case 26:
            case "end":
              return _context9.stop();
          }
        }, _callee9);
      }));
      return function (_x7, _x8) {
        return _ref9.apply(this, arguments);
      };
    }());
    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "navigationByURL", /*#__PURE__*/function () {
      var _ref10 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(from, to) {
        var fromplace, toplace;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              _this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_22__["setBoxVisibleAction"])('navigation'));
              _this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_22__["setRedMarkerAction"])(false));
              _this.changeVisibleBottomInfo(false);
              if (!(!from.lat || !from.lng)) {
                _context10.next = 9;
                break;
              }
              _context10.next = 6;
              return _this._getInforPlace();
            case 6:
              fromplace = _context10.sent;
              _context10.next = 12;
              break;
            case 9:
              _context10.next = 11;
              return _this._getInforPlace(from.lat, from.lng);
            case 11:
              fromplace = _context10.sent;
            case 12:
              _context10.next = 14;
              return _this.props.dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_20__["navigationFromAction"])(fromplace, "".concat(fromplace.name, " - ").concat(fromplace.formatted_address)));
            case 14:
              if (!(!to.lat || !to.lng)) {
                _context10.next = 20;
                break;
              }
              _context10.next = 17;
              return _this._getInforPlace();
            case 17:
              toplace = _context10.sent;
              _context10.next = 23;
              break;
            case 20:
              _context10.next = 22;
              return _this._getInforPlace(to.lat, to.lng);
            case 22:
              toplace = _context10.sent;
            case 23:
              _context10.next = 25;
              return _this.props.dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_20__["navigationToAction"])(toplace, "".concat(toplace.name, " - ").concat(toplace.formatted_address)));
            case 25:
            case "end":
              return _context10.stop();
          }
        }, _callee10);
      }));
      return function (_x9, _x10) {
        return _ref10.apply(this, arguments);
      };
    }());
    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "handleStorageChange", function (event) {
      console.log('oppaopaopa');
      if (event.key === 'search_history') {
        _this.setState({
          value: event.newValue
        });
      }
    });
    _this._mapRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createRef();
    _this.map = null;
    _this.redMarker = null;
    _this.popupRightClick = null;
    _this.popup_navigation = [];
    _this.state = {
      style: _consts__WEBPACK_IMPORTED_MODULE_11__["STYLE_URL"].NORMAL + "YJTajS80fLlhJ4a2BG0gXqXXdZzdLG5V3iivOK9e",
      styleNormal: _consts__WEBPACK_IMPORTED_MODULE_11__["STYLE_URL"].NORMAL + "YJTajS80fLlhJ4a2BG0gXqXXdZzdLG5V3iivOK9e",
      styleEarth: _consts__WEBPACK_IMPORTED_MODULE_11__["STYLE_URL"].SATELITE + "YJTajS80fLlhJ4a2BG0gXqXXdZzdLG5V3iivOK9e",
      bottomInfoVisible: false,
      value: localStorage.getItem('search_history') || ''
    };
    _this.list = [];
    _this.listRestaurant = [];
    _this.listHistories = [];
    _this.view = null;
    _this.navigationView = null;
    return _this;
  }
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Map, _Component);
  return Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Map, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;
      if (this.props.isSmallScreen !== prevProps.isSmallScreen) {
        if (!this.props.isSmallScreen && !this.navigation) {
          this.navigation = new maplibregl.NavigationControl();
          this.map.addControl(this.navigation);
        } else if (this.props.isSmallScreen && this.navigation) {
          this.map.removeControl(this.navigation);
          this.navigation = null;
        }
      }
      if (!fast_deep_equal_es6_react__WEBPACK_IMPORTED_MODULE_17___default()(prevProps.positionMarkerSelect, this.props.positionMarkerSelect) && this.props.positionMarkerSelect) {
        if (this.redMarker) {
          this.redMarker = this.redMarker.setLngLat(this.props.positionMarkerSelect).addTo(this.map);
        } else {
          var el = document.createElement('div');
          el.innerHTML = react_dom_server__WEBPACK_IMPORTED_MODULE_25___default.a.renderToStaticMarkup(__jsx(_Marker__WEBPACK_IMPORTED_MODULE_12__["default"], {
            size: 22
          }));
          // Marker chuột phải
          this.redMarker = new maplibregl.Marker({
            anchor: 'bottom',
            element: el
          }).setLngLat(this.props.positionMarkerSelect).addTo(this.map);
          this.redMarker.getElement().addEventListener('contextmenu', function (e) {
            e.stopPropagation();
            e.preventDefault();
            _this2.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_22__["setPopupRightClick"])(true, _this2.props.positionMarkerSelect, 'normal'));
          });
        }
      }
      if (prevProps.markerSelect !== this.props.markerSelect) {
        if (!this.props.markerSelect) {
          var _this$redMarker;
          (_this$redMarker = this.redMarker) === null || _this$redMarker === void 0 ? void 0 : _this$redMarker.remove();
        }
      }
      if (this.props.popup_visible && (!fast_deep_equal_es6_react__WEBPACK_IMPORTED_MODULE_17___default()(prevProps.position_popup, this.props.position_popup) || this.props.type_popup !== prevProps.type_popup) && this.props.position_popup) {
        this.popupRightClick = this.popupRightClick ? this.popupRightClick.setLngLat([this.props.position_popup.lng, this.props.position_popup.lat]).addTo(this.map).setHTML(react_dom_server__WEBPACK_IMPORTED_MODULE_25___default.a.renderToStaticMarkup(__jsx(_MenuRightCLick__WEBPACK_IMPORTED_MODULE_15__["default"], {
          dispatch: this.props.dispatch,
          position_popup: this.props.position_popup,
          type_popup: this.props.type_popup
        }))) : new maplibregl.Popup({
          closeButton: false,
          anchor: 'top',
          closeOnClick: false,
          offset: [0, 5]
        }).setLngLat([this.props.position_popup.lng, this.props.position_popup.lat]).setHTML(react_dom_server__WEBPACK_IMPORTED_MODULE_25___default.a.renderToStaticMarkup(__jsx(_MenuRightCLick__WEBPACK_IMPORTED_MODULE_15__["default"], {
          dispatch: this.props.dispatch,
          position_popup: this.props.position_popup,
          type_popup: this.props.type_popup
        }))).addTo(this.map);
      }
      if (this.popupRightClick && !this.props.popup_visible) {
        this.popupRightClick.remove();
      }
      if (!fast_deep_equal_es6_react__WEBPACK_IMPORTED_MODULE_17___default()(prevProps.current_place, this.props.current_place) && this.props.current_place) {
        var selectedPlace = this.props.current_place;
        this.map.flyTo({
          center: [selectedPlace.geometry.location.lng, selectedPlace.geometry.location.lat],
          zoom: 15,
          speed: 1.5,
          curve: 1
        });
        this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_22__["setCollapsedInfoBoxAction"])(false));
        this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_22__["setRedMarkerAction"])(false));
        this.setState({
          bottomInfoVisible: false
        });
      }
      if (!fast_deep_equal_es6_react__WEBPACK_IMPORTED_MODULE_17___default()(prevProps.viewport, this.props.viewport) && this.props.viewport) {
        this.map.flyTo({
          center: [this.props.viewport.longitude, this.props.viewport.latitude],
          zoom: this.props.viewport.zoom,
          speed: 2
        });
      }
      if (!fast_deep_equal_es6_react__WEBPACK_IMPORTED_MODULE_17___default()(prevProps.around_place_center, this.props.around_place_center)) {
        this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_22__["setRedMarkerAction"])(false));
      }
      if (!fast_deep_equal_es6_react__WEBPACK_IMPORTED_MODULE_17___default()(prevProps.boxVisible, this.props.boxVisible) && this.props.boxVisible === 'navigation') {
        this.removeMarkerPopup();
      }
      if (!fast_deep_equal_es6_react__WEBPACK_IMPORTED_MODULE_17___default()(prevProps.result_select, this.props.result_select) || !fast_deep_equal_es6_react__WEBPACK_IMPORTED_MODULE_17___default()(prevProps.result_navigation, this.props.result_navigation)) {
        var _this$props2 = this.props,
          result_select = _this$props2.result_select,
          result_navigation = _this$props2.result_navigation,
          boxVisible = _this$props2.boxVisible,
          from_place = _this$props2.from_place,
          to_place = _this$props2.to_place;
        var dashedLineGeoJSON = [],
          polylineGeoJSON = [];
        this.result_navigation = [];
        if (boxVisible !== 'navigation' && boxVisible !== 'iframe' || !result_navigation) {
          var _this$popup_navigatio, _this$popup_navigatio2;
          // Remove cac layer/source
          if (this.map.getLayer("route-layer-fastest")) this.map.removeLayer("route-layer-fastest");
          if (this.map.getLayer("route-layer-shortest")) this.map.removeLayer("route-layer-shortest");
          if (this.map.getLayer("walk-layer-0")) this.map.removeLayer("walk-layer-0");
          if (this.map.getLayer("walk-layer-1")) this.map.removeLayer("walk-layer-1");
          if (this.map.getSource("route-source-fastest")) this.map.removeSource("route-source-fastest");
          if (this.map.getSource("route-source-shortest")) this.map.removeSource("route-source-shortest");
          if (this.map.getSource("walk-source-0")) this.map.removeSource("walk-source-0");
          if (this.map.getSource("walk-source-1")) this.map.removeSource("walk-source-1");
          (_this$popup_navigatio = this.popup_navigation[0]) === null || _this$popup_navigatio === void 0 ? void 0 : _this$popup_navigatio.remove();
          (_this$popup_navigatio2 = this.popup_navigation[1]) === null || _this$popup_navigatio2 === void 0 ? void 0 : _this$popup_navigatio2.remove();
        } else {
          if (result_navigation) {
            var distance = '';
            if (localStorage.getItem('unit') === 'KILOMETERS') {
              distance = "".concat((result_navigation.fastest[0].legs[0].distance.value / 1000).toFixed(1), " KM");
            } else if (localStorage.getItem('unit') === 'MILES') {
              distance = "".concat((result_navigation.fastest[0].legs[0].distance.value / 1000 * _consts__WEBPACK_IMPORTED_MODULE_11__["Mile_Travel"].MILES).toFixed(1), " D\u1EB7m");
            } else {
              distance = "".concat((result_navigation.fastest[0].legs[0].distance.value / 1000).toFixed(1), " KM");
            }
            var coordinateObject1 = {};
            coordinateObject1.coordinates = this.decodePolyline(result_navigation.fastest[0].overview_polyline.points);
            coordinateObject1.type = 'LineString';
            polylineGeoJSON.push(coordinateObject1);
            polylineGeoJSON[0].roadWay = 'fastest';
            var coordinateObject2 = {};
            coordinateObject2.coordinates = this.decodePolyline(result_navigation.shortest[0].overview_polyline.points);
            coordinateObject2.type = 'LineString';
            polylineGeoJSON.push(coordinateObject2);
            polylineGeoJSON[1].roadWay = 'shortest';
            dashedLineGeoJSON.push({
              type: 'LineString',
              coordinates: [[polylineGeoJSON[0].coordinates[0][0], polylineGeoJSON[0].coordinates[0][1]], [from_place === null || from_place === void 0 ? void 0 : from_place.geometry.location.lng, from_place === null || from_place === void 0 ? void 0 : from_place.geometry.location.lat]]
            });
            dashedLineGeoJSON.push({
              type: 'LineString',
              coordinates: [[polylineGeoJSON[0].coordinates[polylineGeoJSON[0].coordinates.length - 1][0], polylineGeoJSON[0].coordinates[polylineGeoJSON[0].coordinates.length - 1][1]], [to_place === null || to_place === void 0 ? void 0 : to_place.geometry.location.lng, to_place === null || to_place === void 0 ? void 0 : to_place.geometry.location.lat]]
            });
            polylineGeoJSON.map(function (item, i) {
              // Layer dan duong
              if (_this2.map.getLayer("route-layer-".concat(item.roadWay))) _this2.map.removeLayer("route-layer-".concat(item.roadWay));
              if (_this2.map.getSource("route-source-".concat(item.roadWay))) _this2.map.removeSource("route-source-".concat(item.roadWay));
              _this2.map.addSource("route-source-".concat(item.roadWay), {
                type: 'geojson',
                data: {
                  type: 'Feature',
                  properties: {},
                  geometry: item
                }
              });
              _this2.map.addLayer({
                id: "route-layer-".concat(item.roadWay),
                type: 'line',
                source: "route-source-".concat(item.roadWay),
                layout: {
                  'line-join': 'round',
                  'line-cap': 'round'
                },
                paint: {
                  'line-color': 'rgb(24, 144, 255)',
                  'line-width': 7,
                  'line-opacity': item.roadWay === result_select ? 1 : 0.5
                }
              });
              // Layer di bo

              if (_this2.map.getLayer("walk-layer-".concat(i))) _this2.map.removeLayer("walk-layer-".concat(i));
              if (_this2.map.getSource("walk-source-".concat(i))) _this2.map.removeSource("walk-source-".concat(i));
              _this2.map.addSource("walk-source-".concat(i), {
                type: 'geojson',
                data: {
                  type: 'Feature',
                  properties: {},
                  geometry: dashedLineGeoJSON[i]
                }
              });
              _this2.map.addLayer({
                id: "walk-layer-".concat(i),
                type: 'line',
                source: "walk-source-".concat(i),
                layout: {
                  'line-join': 'round',
                  'line-cap': 'round'
                },
                paint: {
                  'line-color': 'rgb(133, 135, 126)',
                  'line-opacity': 1,
                  'line-width': 6,
                  'line-dasharray': [0.2, 2]
                }
              });
              // Add Popup hien ket qua

              if (_this2.popup_navigation[i]) {
                var _this2$popup_navigati;
                (_this2$popup_navigati = _this2.popup_navigation[i]) === null || _this2$popup_navigati === void 0 ? void 0 : _this2$popup_navigati.remove();
                _this2.popup_navigation[i] = null;
              }
              _this2.popup_navigation[i] = new maplibregl.Popup({
                closeButton: false,
                anchor: 'top',
                closeOnClick: false,
                className: item.roadWay === result_select ? 'popup-z-index1' : 'popup-z-index2'
              }).setLngLat([i === 0 ? item.coordinates[Math.trunc(0.75 * item.coordinates.length)][0] : item.coordinates[Math.trunc(0.25 * item.coordinates.length)][0], i === 0 ? item.coordinates[Math.trunc(item.coordinates.length * 0.75)][1] : item.coordinates[Math.trunc(item.coordinates.length * 0.25)][1]]).setHTML(react_dom_server__WEBPACK_IMPORTED_MODULE_25___default.a.renderToStaticMarkup(__jsx("div", {
                className: "tooltipNavigation",
                id: "popup-".concat(item.roadWay)
              }, __jsx("p", null, distance), __jsx("p", null, result_navigation[item.roadWay][0].legs[0].duration.text)))).setMaxWidth('300px').addTo(_this2.map);
              document.getElementById("popup-".concat(item.roadWay)).addEventListener('click', function () {
                _this2.props.dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_20__["selectResultAction"])(item.roadWay));
              });
              var normalizeBounds = function normalizeBounds(bounds) {
                var _bounds = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(bounds, 2),
                  firstPoint = _bounds[0],
                  secondPoint = _bounds[1];
                var minLat = Math.min(firstPoint[1], secondPoint[1]);
                var maxLat = Math.max(firstPoint[1], secondPoint[1]);
                var minLng = Math.min(firstPoint[0], secondPoint[0]);
                var maxLng = Math.max(firstPoint[0], secondPoint[0]);
                return [[minLng, minLat], [maxLng, maxLat]];
              };
              var bound = normalizeBounds([item.coordinates[0], item.coordinates[item.coordinates.length - 1]]);
              if (react_device_detect__WEBPACK_IMPORTED_MODULE_29__["isMobile"]) {
                _this2.navigationView = _this2.map.cameraForBounds(bound, {
                  padding: {
                    top: 10,
                    bottom: 25,
                    left: 24,
                    right: 24
                  }
                });
              } else {
                _this2.navigationView = _this2.map.cameraForBounds(bound, {
                  padding: {
                    top: 40,
                    bottom: 40,
                    left: 200,
                    right: 40
                  }
                });
              }
            });
            this.view = {
              latitude: this.navigationView.center.lat,
              longitude: this.navigationView.center.lng,
              zoom: this.navigationView.zoom
            };
          }
        }
        this.props.dispatch(Object(_redux_actions_place__WEBPACK_IMPORTED_MODULE_18__["setMapViewportAction"])(this.view));
      }
      if (!fast_deep_equal_es6_react__WEBPACK_IMPORTED_MODULE_17___default()(prevProps.from_place, this.props.from_place)) {
        var place = this.props.from_place;
        if (place) {
          var popup = new maplibregl.Popup({
            offset: [0, -18],
            className: 'tooltip-marker',
            closeButton: false
          }).setHTML("<div class=\"ant-tooltip-inner tooltip-info-location\">".concat(place.name, "</div>")).setMaxWidth('150px');
          if (this.start_marker) {
            this.start_marker = this.start_marker.setLngLat(place.geometry.location).setPopup(popup).addTo(this.map);
          } else {
            var marker_start = document.createElement('div');
            marker_start.innerHTML = react_dom_server__WEBPACK_IMPORTED_MODULE_25___default.a.renderToStaticMarkup(__jsx("div", {
              className: "marker-start"
            }, __jsx("img", {
              src: _utils_images__WEBPACK_IMPORTED_MODULE_30__["default"].button,
              style: {
                width: 12
              },
              alt: ""
            })));
            this.start_marker = new maplibregl.Marker({
              anchor: 'center',
              element: marker_start
            }).setPopup(popup).setLngLat(place.geometry.location).addTo(this.map);
            this.start_marker.getElement().addEventListener('contextmenu', function (e) {
              e.stopPropagation();
              e.preventDefault();
              var lngLat = _this2.start_marker.getLngLat();
              _this2.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_22__["setPopupRightClick"])(true, lngLat, 'popupFromPlace'));
              _this2.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_22__["setRedMarkerAction"])(false));
            });
            this.start_marker.getElement().addEventListener('click', function () {
              if (popup.isOpen()) {
                _this2.start_marker.togglePopup();
              }
            });
            this.start_marker.getElement().addEventListener('mouseenter', function () {
              return _this2.start_marker.togglePopup();
            });
            this.start_marker.getElement().addEventListener('mouseleave', function () {
              return _this2.start_marker.togglePopup();
            });
          }
        } else {
          var _prevProps$from_place, _this$state$placeMous;
          if (fast_deep_equal_es6_react__WEBPACK_IMPORTED_MODULE_17___default()(this.start_marker.getLngLat(), this.props.position_popup)) {
            this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_22__["setPopupRightClick"])(false));
          }
          if (fast_deep_equal_es6_react__WEBPACK_IMPORTED_MODULE_17___default()((_prevProps$from_place = prevProps.from_place) === null || _prevProps$from_place === void 0 ? void 0 : _prevProps$from_place.place_id, (_this$state$placeMous = this.state.placeMouseClick) === null || _this$state$placeMous === void 0 ? void 0 : _this$state$placeMous.place_id)) {
            this.changeVisibleBottomInfo(false);
          }
          this.changeVisibleBottomInfo(false);
          this.start_marker ? this.start_marker.remove() : null;
        }
      }
      if (!fast_deep_equal_es6_react__WEBPACK_IMPORTED_MODULE_17___default()(prevProps.to_place, this.props.to_place)) {
        var _place = this.props.to_place;
        if (_place) {
          var _popup = new maplibregl.Popup({
            offset: [0, -18],
            className: 'tooltip-marker',
            closeButton: false
          }).setHTML("<div class=\"ant-tooltip-inner tooltip-info-location\">".concat(_place.name, "</div>")).setMaxWidth('150px');
          if (this.end_marker) {
            this.to_place = this.end_marker.setPopup(_popup).setLngLat(_place.geometry.location).addTo(this.map);
          } else {
            var marker_end = document.createElement('div');
            marker_end.innerHTML = react_dom_server__WEBPACK_IMPORTED_MODULE_25___default.a.renderToStaticMarkup(__jsx("div", {
              className: "marker-end"
            }, __jsx("div", null, __jsx("img", {
              src: _utils_images__WEBPACK_IMPORTED_MODULE_30__["default"].marker,
              alt: ""
            }))));
            this.end_marker = new maplibregl.Marker({
              anchor: 'center',
              element: marker_end
            }).setPopup(_popup).setLngLat(_place.geometry.location).addTo(this.map);
            this.end_marker.getElement().addEventListener('contextmenu', function (e) {
              e.stopPropagation();
              e.preventDefault();
              var lngLat = _this2.end_marker.getLngLat();
              _this2.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_22__["setPopupRightClick"])(true, lngLat, 'popupToPlace'));
              _this2.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_22__["setRedMarkerAction"])(false));
            });
            this.end_marker.getElement().addEventListener('click', function () {
              if (_popup.isOpen()) {
                _this2.end_marker.togglePopup();
              }
            });
            this.end_marker.getElement().addEventListener('mouseenter', function () {
              return _this2.end_marker.togglePopup();
            });
            this.end_marker.getElement().addEventListener('mouseleave', function () {
              return _this2.end_marker.togglePopup();
            });
          }
        } else {
          var _this$start_marker, _prevProps$to_place, _this$state$placeMous2;
          if (fast_deep_equal_es6_react__WEBPACK_IMPORTED_MODULE_17___default()((_this$start_marker = this.start_marker) === null || _this$start_marker === void 0 ? void 0 : _this$start_marker.getLngLat(), this.props.position_popup)) {
            this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_22__["setPopupRightClick"])(false));
          }
          if (fast_deep_equal_es6_react__WEBPACK_IMPORTED_MODULE_17___default()((_prevProps$to_place = prevProps.to_place) === null || _prevProps$to_place === void 0 ? void 0 : _prevProps$to_place.place_id, (_this$state$placeMous2 = this.state.placeMouseClick) === null || _this$state$placeMous2 === void 0 ? void 0 : _this$state$placeMous2.place_id)) {
            this.changeVisibleBottomInfo(false);
          }
          this.end_marker ? this.end_marker.remove() : null;
        }
      }
      if (!fast_deep_equal_es6_react__WEBPACK_IMPORTED_MODULE_17___default()(prevProps.around_places, this.props.around_places) || !fast_deep_equal_es6_react__WEBPACK_IMPORTED_MODULE_17___default()(prevProps.around_place_select, this.props.around_place_select)) {
        var _this$list_marker_aro;
        if (((_this$list_marker_aro = this.list_marker_around) === null || _this$list_marker_aro === void 0 ? void 0 : _this$list_marker_aro.length) > 0) {
          this.list_marker_around.forEach(function (item) {
            item.remove();
          });
          this.list_marker_around = [];
        }
        var _this$props3 = this.props,
          around_places = _this$props3.around_places,
          around_place_center = _this$props3.around_place_center;
        if (around_places.length > 0) {
          this.list_marker_around = [];
          var _el = document.createElement('div');
          _el.innerHTML = react_dom_server__WEBPACK_IMPORTED_MODULE_25___default.a.renderToStaticMarkup(__jsx(_Marker__WEBPACK_IMPORTED_MODULE_12__["default"], {
            id: "marker-center",
            type: "center"
          }));
          this.list_marker_around[0] = new maplibregl.Marker(_el, {
            anchor: 'bottom'
          }).setPopup(new maplibregl.Popup({
            offset: [0, -32],
            className: 'tooltip-marker',
            closeButton: false
          }).setHTML("<div class=\"ant-tooltip-inner tooltip-info-location\">".concat(around_place_center.name, "</div>")).setMaxWidth('150px')).setLngLat(around_place_center.geometry.location).addTo(this.map);
          var markerCenterDiv = this.list_marker_around[0].getElement();
          markerCenterDiv.addEventListener('click', function () {
            _this2._selectAroundPlace('center', around_place_center);
            _this2.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_22__["setRedMarkerAction"])(false));
            if (_this2.list_marker_around[0].getPopup().isOpen()) {
              _this2.list_marker_around[0].togglePopup();
            }
          });
          markerCenterDiv.addEventListener('contextmenu', function (e) {
            e.stopPropagation();
            e.preventDefault();
            _this2.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_22__["setRedMarkerAction"])(false));
            _this2.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_22__["setPopupRightClick"])(true, around_place_center.geometry.location, 'normal'));
          });
          markerCenterDiv.addEventListener('mouseenter', function () {
            return _this2.list_marker_around[0].togglePopup();
          });
          markerCenterDiv.addEventListener('mouseleave', function () {
            return _this2.list_marker_around[0].togglePopup();
          });
          around_places.forEach(function (item, i) {
            var popup = new maplibregl.Popup({
              offset: [0, -32],
              className: 'tooltip-marker',
              closeButton: false,
              anchor: 'bottom'
            }).setHTML("<div class=\"ant-tooltip-inner tooltip-info-location\">".concat(item.name, "</div>")).setMaxWidth('150px');
            _el = document.createElement('div');
            _el.innerHTML = react_dom_server__WEBPACK_IMPORTED_MODULE_25___default.a.renderToStaticMarkup(__jsx(_Marker__WEBPACK_IMPORTED_MODULE_12__["default"], {
              type: "around",
              place: item,
              place_select: _this2.props.around_place_select,
              id: "marker-around-".concat(i)
            }));
            _this2.list_marker_around.push(new maplibregl.Marker(_el, {
              anchor: 'bottom'
            }).setPopup(popup).setLngLat([item.lng_lat[0] * 1, item.lng_lat[1] * 1]).addTo(_this2.map));
            var markerDiv = _this2.list_marker_around[i + 1].getElement();
            markerDiv.addEventListener('click', function (e) {
              e.stopPropagation();
              _this2.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_22__["setRedMarkerAction"])(false));
              _this2._selectAroundPlace('around', item);
              if (popup.isOpen()) {
                _this2.list_marker_around[i + 1].togglePopup();
              }
            });
            markerDiv.addEventListener('contextmenu', function (e) {
              e.stopPropagation();
              e.preventDefault();
              _this2.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_22__["setPopupRightClick"])(true, {
                lng: item.lng_lat[0] * 1,
                lat: item.lng_lat[1] * 1
              }, 'around'));
              _this2.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_22__["setRedMarkerAction"])(false));
            });
            markerDiv.addEventListener('mouseenter', function () {
              return _this2.list_marker_around[i + 1].togglePopup();
            });
            markerDiv.addEventListener('mouseleave', function () {
              return _this2.list_marker_around[i + 1].togglePopup();
            });
          });
        }
      }
      if (this.props.boxVisible === 'info' && this.props.current_place) {
        if (!this.markerCurrentPlace) {
          var _this$props$current_p, _this$props$current_p2;
          var _el2 = document.createElement('div');
          _el2.innerHTML = react_dom_server__WEBPACK_IMPORTED_MODULE_25___default.a.renderToStaticMarkup(
          // <Marker type="normal" />
          __jsx("div", {
            className: "marker-histories"
          }, __jsx("div", null, __jsx("img", {
            src: _utils_images__WEBPACK_IMPORTED_MODULE_30__["default"].marker,
            alt: ""
          }))));
          // Marker info
          this.markerCurrentPlace = new maplibregl.Marker({
            anchor: 'bottom',
            element: _el2
          }).setLngLat((_this$props$current_p = this.props.current_place) === null || _this$props$current_p === void 0 ? void 0 : (_this$props$current_p2 = _this$props$current_p.geometry) === null || _this$props$current_p2 === void 0 ? void 0 : _this$props$current_p2.location).addTo(this.map);
          this.markerCurrentPlace.getElement().addEventListener('contextmenu', function (e) {
            e.stopPropagation();
            e.preventDefault();
            var lngLat = _this2.markerCurrentPlace.getLngLat();
            _this2.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_22__["setPopupRightClick"])(true, lngLat, 'popupCurrentPlace'));
          });
        } else {
          this.markerCurrentPlace.setLngLat(this.props.current_place.geometry.location).addTo(this.map);
        }
      }
      if (this.props.boxVisible !== 'info' && this.markerCurrentPlace) {
        this.markerCurrentPlace.remove();
        this.markerCurrentPlace = null;
      }
      if (this.props.boxVisible === 'detailsrestaurant' && this.props.restaurantData) {
        if (this.props.restaurantData.length !== 0) {
          var _iterator = _createForOfIteratorHelper(this.props.restaurantData),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var item = _step.value;
              var marker_restaurant = document.createElement('div');
              marker_restaurant.innerHTML = react_dom_server__WEBPACK_IMPORTED_MODULE_25___default.a.renderToStaticMarkup(
              // <MarkerNavigation id="end-marker" type="histories" />
              __jsx("div", {
                className: "marker-histories"
              }, __jsx("div", null, __jsx("img", {
                src: _utils_images__WEBPACK_IMPORTED_MODULE_30__["default"].marker,
                alt: ""
              }))));
              this.restaurant_marker = new maplibregl.Marker({
                anchor: 'center',
                element: marker_restaurant
              })
              // .setPopup(popup)
              .setLngLat(item.geometry.location).addTo(this.map);
              this.listRestaurant.push(this.restaurant_marker);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        } else {
          // console.log('Có')
          var _iterator2 = _createForOfIteratorHelper(this.listRestaurant),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var marker = _step2.value;
              marker.remove();
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          this.listRestaurant = [];
        }
      }
      if (this.props.boxVisible === 'history') {
        var _iterator3 = _createForOfIteratorHelper(this.listHistories),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _marker = _step3.value;
            _marker.remove();
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        var _iterator4 = _createForOfIteratorHelper(this.props.searchLocalStorage),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _item = _step4.value;
            var marker_history = document.createElement('div');
            marker_history.innerHTML = react_dom_server__WEBPACK_IMPORTED_MODULE_25___default.a.renderToStaticMarkup(__jsx("div", {
              className: "marker-histories"
            }, __jsx("div", null, __jsx("img", {
              src: _utils_images__WEBPACK_IMPORTED_MODULE_30__["default"].marker,
              alt: ""
            }))));
            this.history_marker = new maplibregl.Marker({
              anchor: 'center',
              element: marker_history
            }).setLngLat(_item.location).addTo(this.map);
            this.listHistories.push(this.history_marker);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      } else {
        var _iterator5 = _createForOfIteratorHelper(this.listHistories),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var _marker2 = _step5.value;
            _marker2.remove();
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      }

      // if (this.props.boxVisible === "details") {
      if (this.props.result_navigation && this.props.boxVisible === 'details') {
        var _iterator6 = _createForOfIteratorHelper(this.props.result_navigation.fastest[0].legs[0].steps),
          _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var step = _step6.value;
            var _popup2 = new maplibregl.Popup({
              offset: [0, -32],
              className: 'tooltip-marker',
              closeButton: false,
              anchor: 'bottom'
            }).setHTML("<div class=\"ant-tooltip-inner tooltip-info-location\">".concat(step.html_instructions, "</div>")).setMaxWidth('150px');
            var marker_step = document.createElement('div');
            marker_step.innerHTML = react_dom_server__WEBPACK_IMPORTED_MODULE_25___default.a.renderToStaticMarkup(__jsx("div", {
              className: "marker-details"
            }));
            this.step_marker = new maplibregl.Marker({
              anchor: 'center',
              element: marker_step
            }).setPopup(_popup2).setLngLat(step.end_location).addTo(this.map);
            this.list.push(this.step_marker);
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
      } else {
        var _iterator7 = _createForOfIteratorHelper(this.list),
          _step7;
        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var _marker3 = _step7.value;
            _marker3.remove();
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
        this.list = [];
      }
      // }
      if (this.props.boxVisible === 'navigation' && react_device_detect__WEBPACK_IMPORTED_MODULE_29__["isMobile"]) {
        if (this.props.result_navigation) {
          var _iterator8 = _createForOfIteratorHelper(this.props.result_navigation.fastest[0].legs[0].steps),
            _step8;
          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var _step9 = _step8.value;
              var _popup3 = new maplibregl.Popup({
                offset: [0, -32],
                className: 'tooltip-marker',
                closeButton: false,
                anchor: 'bottom'
              }).setHTML("<div class=\"ant-tooltip-inner tooltip-info-location\">".concat(_step9.html_instructions, "</div>")).setMaxWidth('150px');
              var _marker_step = document.createElement('div');
              _marker_step.innerHTML = react_dom_server__WEBPACK_IMPORTED_MODULE_25___default.a.renderToStaticMarkup(__jsx("div", {
                className: "marker-details"
              }));
              this.step_marker = new maplibregl.Marker({
                anchor: 'center',
                element: _marker_step
              }).setPopup(_popup3).setLngLat(_step9.end_location).addTo(this.map);
              this.list.push(this.step_marker);
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
        } else {
          var _iterator9 = _createForOfIteratorHelper(this.list),
            _step10;
          try {
            for (_iterator9.s(); !(_step10 = _iterator9.n()).done;) {
              var _marker4 = _step10.value;
              _marker4.remove();
            }
          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }
          this.list = [];
        }
      }
    }
  }, {
    key: "decodePolyline",
    value: function decodePolyline(encoded) {
      var points = [];
      var index = 0,
        len = encoded.length;
      var lat = 0,
        lng = 0;
      while (index < len) {
        var b,
          shift = 0,
          result = 0;
        do {
          b = encoded.charAt(index++).charCodeAt(0) - 63;
          result |= (b & 0x1f) << shift;
          shift += 5;
        } while (b >= 0x20);
        var dlat = result & 1 ? ~(result >> 1) : result >> 1;
        lat += dlat;
        shift = 0;
        result = 0;
        do {
          b = encoded.charAt(index++).charCodeAt(0) - 63;
          result |= (b & 0x1f) << shift;
          shift += 5;
        } while (b >= 0x20);
        var dlng = result & 1 ? ~(result >> 1) : result >> 1;
        lng += dlng;
        points.push([lng * 1e-5, lat * 1e-5]);
      }
      return points;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;
      window.addEventListener('storage', this.handleStorageChange);
      // console.log(STYLE_URL.NORMAL)
      var selectedPlace = this.props.current_place;
      this.map = new maplibregl.Map({
        container: 'map',
        // container id
        style: _consts__WEBPACK_IMPORTED_MODULE_11__["STYLE_URL"].NORMAL + "YJTajS80fLlhJ4a2BG0gXqXXdZzdLG5V3iivOK9e",
        center: selectedPlace ? [selectedPlace.geometry.location.lng, selectedPlace.geometry.location.lat] : [105.801982, 21.026745],
        // starting position [lng, lat]
        zoom: 12 // starting zoom
      });
      if (selectedPlace) this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_22__["setRedMarkerAction"])(true, selectedPlace.geometry.location));
      this.navigation = new maplibregl.NavigationControl();
      this.geolocateControl = new maplibregl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        // Bật tắt hiển bị vị trí
        trackUserLocation: true,
        // Hiển thị
        showUserLocation: true,
        // Tắt vòng tròn to
        showAccuracyCircle: false,
        // Điều chỉnh mức zoom đến vị trí của mình
        fitBoundsOptions: {
          maxZoom: 15
        }
      });
      this.geolocateControl.on('error', function () {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default.a.warning('Goong không thể lấy địa điểm hiện tại của bạn !');
      });
      this.geolocateControl.on('geolocate', function (e) {
        _this3.props.dispatch(Object(_redux_actions_place__WEBPACK_IMPORTED_MODULE_18__["setMyLocationAction"])({
          latitude: e.coords.latitude,
          longitude: e.coords.longitude
        }));
      });
      !react_device_detect__WEBPACK_IMPORTED_MODULE_29__["isMobile"] && this.map.addControl(this.navigation);
      !react_device_detect__WEBPACK_IMPORTED_MODULE_29__["isMobile"] && this.map.addControl(this.geolocateControl);
      this.map.on('click', this._onMouseClick);
      this.map.on('contextmenu', this._onRightClick);
      this.map.on('load', function () {
        var _URLSearchParams$get, _this3$geolocateContr;
        _this3.map.resize();
        var pid = new URLSearchParams(window.location.search).get('pid');
        var location = (_URLSearchParams$get = new URLSearchParams(window.location.search).get('location')) === null || _URLSearchParams$get === void 0 ? void 0 : _URLSearchParams$get.split(',');
        var pid_around = new URLSearchParams(window.location.search).get('pid_around');
        var direction_infor = new URLSearchParams(window.location.search).get('direction');
        if (!direction_infor && !pid && !location && !pid_around && !_this3.props.current_place) (_this3$geolocateContr = _this3.geolocateControl) === null || _this3$geolocateContr === void 0 ? void 0 : _this3$geolocateContr.trigger();else {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
              _this3.props.dispatch(Object(_redux_actions_place__WEBPACK_IMPORTED_MODULE_18__["setMyLocationAction"])({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
              }));
            });
          }
        }
      });
      this.map.on('move', function () {
        _this3.props.dispatch(Object(_redux_actions_place__WEBPACK_IMPORTED_MODULE_18__["setCenterLatLngAction"])({
          latitude: _this3.map.getCenter().lat,
          longitude: _this3.map.getCenter().lng
        }));
      });
      this.map.on('style.load', function () {
        var _this3$map;
        (_this3$map = _this3.map) === null || _this3$map === void 0 ? void 0 : _this3$map.addLayer({
          id: '3d-buildings',
          source: 'composite',
          'source-layer': 'VN_Building',
          filter: ['==', 'extrude', 'true'],
          type: 'fill-extrusion',
          minzoom: 15,
          paint: {
            'fill-extrusion-color': '#aaa',
            'fill-extrusion-height': {
              type: 'identity',
              property: 'height'
            },
            'fill-extrusion-base': {
              type: 'identity',
              property: 'min_height'
            },
            'fill-extrusion-opacity': 0.4
          }
        });
        if (_this3.props.result_navigation) {
          if (_this3.props.result_select === 'fastest') {
            _this3.props.dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_20__["selectResultAction"])('shortest'));
            _this3.props.dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_20__["selectResultAction"])('fastest'));
          } else {
            _this3.props.dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_20__["selectResultAction"])('fastest'));
            _this3.props.dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_20__["selectResultAction"])('shortest'));
          }
        }
      });
      document.body.addEventListener('click', this._onClickMenu);
      // this.map.on('click', 'route-layer-fastest', (e) => {
      //   console.log(e, 'fastest');
      //   e.originalEvent.stopPropagation();
      //   e.originalEvent.preventDefault();
      // });

      // this.map.on('click', 'route-layer-shortest', (e) => {
      //   console.log(e)
      // });

      var direction_infor = new URLSearchParams(window.location.search).get('direction');
      var iframe = new URLSearchParams(window.location.search).get('iframe');
      if (direction_infor) {
        var coor_from = {
          lat: direction_infor.split('&')[0].split(',')[0],
          lng: direction_infor.split('&')[0].split(',')[1]
        };
        var coor_to = {
          lat: direction_infor.split('&')[1].split(',')[0],
          lng: direction_infor.split('&')[1].split(',')[1]
        };
        if (coor_from.lat && coor_from.lng && coor_to.lat && coor_to.lng) {
          // this.handleFromHere(coor_from.lat, coor_from.lng);
          // this.handleToHere(coor_to.lat, coor_to.lng);
          if (iframe != null) {
            this.navigationByURLIframe(coor_from, coor_to);
          } else {
            this.navigationByURL(coor_from, coor_to);
          }
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('storage', this.handleStorageChange);
      document.body.removeEventListener('click', this._onClickMenu);
    }
  }, {
    key: "render",
    value: function render() {
      var _placeMouseClick$geom, _placeMouseClick$geom2;
      var _this$state = this.state,
        style = _this$state.style,
        bottomInfoVisible = _this$state.bottomInfoVisible,
        placeMouseClick = _this$state.placeMouseClick;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, __jsx(react_div_100vh__WEBPACK_IMPORTED_MODULE_27___default.a, null, __jsx("div", {
        id: "map"
      }), __jsx("div", null, !react_device_detect__WEBPACK_IMPORTED_MODULE_29__["isMobile"] && __jsx(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_0___default.a, {
        shape: "square",
        size: 64,
        onClick: this.changeStyle,
        className: "change-status-button",
        style: {
          backgroundImage: style === _consts__WEBPACK_IMPORTED_MODULE_11__["STYLE_URL"].NORMAL + "YJTajS80fLlhJ4a2BG0gXqXXdZzdLG5V3iivOK9e" ? "url(".concat(_static_images_satellite_jpeg__WEBPACK_IMPORTED_MODULE_24___default.a, ")") : "url(".concat(_static_images_normal_map_png__WEBPACK_IMPORTED_MODULE_23___default.a, ")")
        }
      }), react_device_detect__WEBPACK_IMPORTED_MODULE_29__["isMobile"] && __jsx(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_0___default.a, {
        shape: "square",
        size: 64,
        onClick: this.changeStyle,
        className: "change-status-button"
        // id='change-status-button--mobile'
        ,
        style: {
          backgroundImage: style === _consts__WEBPACK_IMPORTED_MODULE_11__["STYLE_URL"].NORMAL + "YJTajS80fLlhJ4a2BG0gXqXXdZzdLG5V3iivOK9e" ? "url(".concat(_static_images_satellite_jpeg__WEBPACK_IMPORTED_MODULE_24___default.a, ")") : "url(".concat(_static_images_normal_map_png__WEBPACK_IMPORTED_MODULE_23___default.a, ")")
        }
      })), bottomInfoVisible && __jsx(_BottomInfoLocation__WEBPACK_IMPORTED_MODULE_14__["default"], {
        changeVisibleBottomInfo: this.changeVisibleBottomInfo,
        lat: ((_placeMouseClick$geom = placeMouseClick.geometry) === null || _placeMouseClick$geom === void 0 ? void 0 : _placeMouseClick$geom.location.lat) || Number(placeMouseClick.lng_lat[1]),
        lng: ((_placeMouseClick$geom2 = placeMouseClick.geometry) === null || _placeMouseClick$geom2 === void 0 ? void 0 : _placeMouseClick$geom2.location.lng) || Number(placeMouseClick.lng_lat[0]),
        name: placeMouseClick.name || placeMouseClick.address_components[0].long_name,
        isMarkerAround: placeMouseClick.marker_type_id,
        place_id: placeMouseClick._id,
        address: this.getAddressGeocode(placeMouseClick) || placeMouseClick.formatted_address || placeMouseClick.description.address,
        removeMarker: this.removeMarkerWhatIs
      })));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);
var mapStateToProps = function mapStateToProps(state) {
  return {
    current_place: state.placeReducer.current_place,
    from_place: state.navigationReducer.from,
    to_place: state.navigationReducer.to,
    boxVisible: state.boxVisibleReducer.box_visible,
    result_navigation: state.navigationReducer.result,
    viewport: state.placeReducer.viewport,
    result_select: state.navigationReducer.result_select,
    around_places: state.searchReducer.around_places,
    markerSelect: state.boxVisibleReducer.red_marker_visible,
    positionMarkerSelect: state.boxVisibleReducer.position_red_marker,
    around_place_center: state.searchReducer.around_place_center,
    popup_visible: state.boxVisibleReducer.popup_visible,
    position_popup: state.boxVisibleReducer.position_popup,
    type_popup: state.boxVisibleReducer.type_popup,
    around_place_select: state.searchReducer.around_place_select,
    my_location: state.placeReducer.my_location,
    restaurantData: state.searchReducer.restaurant_data,
    searchLocalStorage: state.searchReducer.search_local_storage
  };
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_13__["connect"])(mapStateToProps)(Map));

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYXAuanN4Il0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsIm93bktleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJmaWx0ZXIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJhcHBseSIsIl9vYmplY3RTcHJlYWQiLCJhcmd1bWVudHMiLCJfZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsIl9jYWxsU3VwZXIiLCJfZ2V0UHJvdG90eXBlT2YiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiQm9vbGVhbiIsInZhbHVlT2YiLCJNYXAiLCJfQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsInZpZXdwb3J0IiwiZGlzcGF0Y2giLCJzZXRNYXBWaWV3cG9ydEFjdGlvbiIsInNldFBvcHVwUmlnaHRDbGljayIsImJveFZpc2libGUiLCJzZXRSZWRNYXJrZXJBY3Rpb24iLCJzZWxlY3RBcm91bmRQbGFjZUFjdGlvbiIsInJlbW92ZU1hcmtlcldoYXRJcyIsInNldFN0YXRlIiwiYm90dG9tSW5mb1Zpc2libGUiLCJwb3NpdGlvbiIsImxhdCIsImxuZ0xhdCIsImxuZyIsImV2dCIsInBhcmVudCIsInRhcmdldCIsInBhcmVudEVsZW1lbnQiLCJjbGFzc05hbWUiLCJ0b1N0cmluZyIsImluY2x1ZGVzIiwiaGFuZGxlV2hhdElzIiwiaGFuZGxlRnJvbUhlcmUiLCJoYW5kbGVUb0hlcmUiLCJoYW5kbGVEZWxldGVMb2NhdGlvbiIsImhhbmRsZVNlYXJjaEFyb3VuZCIsImhhbmRsZVRvQXJvdW5kUGxhY2UiLCJjbGVhclNlYXJjaEFyb3VuZEFjdGlvbiIsInZpc2libGUiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9jYWxsZWUiLCJfdGhpcyRwcm9wcyRwb3NpdGlvbl8iLCJfdGhpcyRwcm9wcyRwb3NpdGlvbl8yIiwibGF0TG5nIiwicmVzcG9uc2UiLCJwbGFjZV9yZXNwb25zZSIsIl9hcmdzIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInVuZGVmaW5lZCIsInBvc2l0aW9uX3BvcHVwIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJnZXREZXRhaWxMYXRMbmdTZXJ2aWNlIiwiZGF0YSIsInJlc3VsdHMiLCJhZGRyZXNzX2NvbXBvbmVudHMiLCJsb25nX25hbWUiLCJmb3JtYXR0ZWRfYWRkcmVzcyIsImdldEFkZHJlc3NHZW9jb2RlIiwiX21lc3NhZ2UiLCJlcnJvciIsInQwIiwiX2NhbGxlZTIiLCJfdGhpcyRwcm9wcyRwb3NpdGlvbk0iLCJfdGhpcyRwcm9wcyRwb3NpdGlvbk0yIiwicmVkTWFya2VyVmlzaWJsZSIsInBsYWNlIiwiZWwiLCJfYXJnczIiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJwb3NpdGlvbk1hcmtlclNlbGVjdCIsIl9nZXRJbmZvclBsYWNlIiwiem9vbSIsInBsYWNlTW91c2VDbGljayIsIm1hcmtlcldoYXRJcyIsInNldExuZ0xhdCIsImFkZFRvIiwibWFwIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiUmVhY3RET01TZXJ2ZXIiLCJyZW5kZXJUb1N0YXRpY01hcmt1cCIsIl9fanN4IiwiTWFya2VyIiwic2l6ZSIsIm1hcGxpYnJlZ2wiLCJhbmNob3IiLCJnZXRFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3BQcm9wYWdhdGlvbiIsInByZXZlbnREZWZhdWx0IiwicmVtb3ZlIiwiX3JlZjMiLCJfY2FsbGVlMyIsImlkIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiQXhpb3MiLCJnZXQiLCJjb25jYXQiLCJfeCIsIl9yZWY0IiwiX2NhbGxlZTQiLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCJfZ2V0SW5mb3JQbGFjZUFyb3VuZCIsIk51bWJlciIsImxuZ19sYXQiLCJfeDIiLCJfdGhpcyRwcm9wcyIsImlzU21hbGxTY3JlZW4iLCJnZXREZXRhaWxCeUxhdExuZ0FjdGlvbiIsInNldEJveFZpc2libGVBY3Rpb24iLCJzZWxlY3RQbGFjZSIsIl9yZWY1IiwiX2NhbGxlZTUiLCJfY2FsbGVlNSQiLCJfY29udGV4dDUiLCJnZW9tZXRyeSIsImxvY2F0aW9uIiwidG9fcGxhY2UiLCJuYXZpZ2F0aW9uRnJvbUFjdGlvbiIsImNoYW5nZVZpc2libGVCb3R0b21JbmZvIiwiX3gzIiwiX3g0IiwiX3JlZjYiLCJfY2FsbGVlNiIsIm15X2xvY2F0aW9uIiwiX2NhbGxlZTYkIiwiX2NvbnRleHQ2IiwiUmVxdWVzdCIsImdlb2NvZGUiLCJmcm9tX3BsYWNlIiwibmF2aWdhdGlvblRvQWN0aW9uIiwiX3g1IiwiX3g2IiwidHlwZV9wb3B1cCIsImNsZWFyUmVzdWx0QWN0aW9uIiwiX2NhbGxlZTciLCJfY2FsbGVlNyQiLCJfY29udGV4dDciLCJzZWFyY2hBcm91bmRBY3Rpb24iLCJzZWxlY3RBcm91bmRQbGFjZSIsIl9jYWxsZWU4IiwiX3Jlc3BvbnNlJGRhdGEiLCJwbGFjZV9jZW50ZXIiLCJfY2FsbGVlOCQiLCJfY29udGV4dDgiLCJhcm91bmRfcGxhY2VzIiwiaXRlbSIsInBvcHVwUmlnaHRDbGljayIsImdldExuZ0xhdCIsImFyb3VuZF9wbGFjZV9jZW50ZXIiLCJwbGFjZV9pZCIsIl9pZCIsImRlc2NyaXB0aW9uIiwiYWRkcmVzcyIsIm1hcmtlckN1cnJlbnRQbGFjZSIsInJlZE1hcmtlciIsIl9wbGFjZSRhZGRyZXNzX2NvbXBvbiIsInJlc3VsdCIsImpvaW4iLCJzdHlsZSIsInN0YXRlIiwiU1RZTEVfVVJMIiwiU0FURUxJVEUiLCJOT1JNQUwiLCJzZXRTdHlsZSIsIl9yZWY5IiwiX2NhbGxlZTkiLCJmcm9tIiwidG8iLCJmcm9tcGxhY2UiLCJ0b3BsYWNlIiwiX2NhbGxlZTkkIiwiX2NvbnRleHQ5IiwibmF2aWdhdGlvbkFjdGlvbiIsIl94NyIsIl94OCIsIl9yZWYxMCIsIl9jYWxsZWUxMCIsIl9jYWxsZWUxMCQiLCJfY29udGV4dDEwIiwiX3g5IiwiX3gxMCIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsImtleSIsIm5ld1ZhbHVlIiwiX21hcFJlZiIsIlJlYWN0IiwiY3JlYXRlUmVmIiwicG9wdXBfbmF2aWdhdGlvbiIsInN0eWxlTm9ybWFsIiwic3R5bGVFYXJ0aCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJsaXN0IiwibGlzdFJlc3RhdXJhbnQiLCJsaXN0SGlzdG9yaWVzIiwidmlldyIsIm5hdmlnYXRpb25WaWV3IiwiX2luaGVyaXRzIiwiX2NyZWF0ZUNsYXNzIiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwiX3RoaXMyIiwibmF2aWdhdGlvbiIsIk5hdmlnYXRpb25Db250cm9sIiwiYWRkQ29udHJvbCIsInJlbW92ZUNvbnRyb2wiLCJlcXVhbCIsImVsZW1lbnQiLCJtYXJrZXJTZWxlY3QiLCJfdGhpcyRyZWRNYXJrZXIiLCJwb3B1cF92aXNpYmxlIiwic2V0SFRNTCIsIk1lbnVSaWdodENsaWNrIiwiUG9wdXAiLCJjbG9zZUJ1dHRvbiIsImNsb3NlT25DbGljayIsIm9mZnNldCIsImN1cnJlbnRfcGxhY2UiLCJzZWxlY3RlZFBsYWNlIiwiZmx5VG8iLCJjZW50ZXIiLCJzcGVlZCIsImN1cnZlIiwic2V0Q29sbGFwc2VkSW5mb0JveEFjdGlvbiIsInJlbW92ZU1hcmtlclBvcHVwIiwicmVzdWx0X3NlbGVjdCIsInJlc3VsdF9uYXZpZ2F0aW9uIiwiX3RoaXMkcHJvcHMyIiwiZGFzaGVkTGluZUdlb0pTT04iLCJwb2x5bGluZUdlb0pTT04iLCJfdGhpcyRwb3B1cF9uYXZpZ2F0aW8iLCJfdGhpcyRwb3B1cF9uYXZpZ2F0aW8yIiwiZ2V0TGF5ZXIiLCJyZW1vdmVMYXllciIsImdldFNvdXJjZSIsInJlbW92ZVNvdXJjZSIsImRpc3RhbmNlIiwiZmFzdGVzdCIsImxlZ3MiLCJ0b0ZpeGVkIiwiTWlsZV9UcmF2ZWwiLCJNSUxFUyIsImNvb3JkaW5hdGVPYmplY3QxIiwiY29vcmRpbmF0ZXMiLCJkZWNvZGVQb2x5bGluZSIsIm92ZXJ2aWV3X3BvbHlsaW5lIiwicG9pbnRzIiwicm9hZFdheSIsImNvb3JkaW5hdGVPYmplY3QyIiwic2hvcnRlc3QiLCJhZGRTb3VyY2UiLCJwcm9wZXJ0aWVzIiwiYWRkTGF5ZXIiLCJzb3VyY2UiLCJsYXlvdXQiLCJwYWludCIsIl90aGlzMiRwb3B1cF9uYXZpZ2F0aSIsIk1hdGgiLCJ0cnVuYyIsImR1cmF0aW9uIiwidGV4dCIsInNldE1heFdpZHRoIiwiZ2V0RWxlbWVudEJ5SWQiLCJzZWxlY3RSZXN1bHRBY3Rpb24iLCJub3JtYWxpemVCb3VuZHMiLCJib3VuZHMiLCJfYm91bmRzIiwiX3NsaWNlZFRvQXJyYXkiLCJmaXJzdFBvaW50Iiwic2Vjb25kUG9pbnQiLCJtaW5MYXQiLCJtaW4iLCJtYXhMYXQiLCJtYXgiLCJtaW5MbmciLCJtYXhMbmciLCJib3VuZCIsImlzTW9iaWxlIiwiY2FtZXJhRm9yQm91bmRzIiwicGFkZGluZyIsInRvcCIsImJvdHRvbSIsImxlZnQiLCJyaWdodCIsInBvcHVwIiwic3RhcnRfbWFya2VyIiwic2V0UG9wdXAiLCJtYXJrZXJfc3RhcnQiLCJzcmMiLCJpbWFnZXMiLCJidXR0b24iLCJ3aWR0aCIsImFsdCIsImlzT3BlbiIsInRvZ2dsZVBvcHVwIiwiX3ByZXZQcm9wcyRmcm9tX3BsYWNlIiwiX3RoaXMkc3RhdGUkcGxhY2VNb3VzIiwiZW5kX21hcmtlciIsIm1hcmtlcl9lbmQiLCJtYXJrZXIiLCJfdGhpcyRzdGFydF9tYXJrZXIiLCJfcHJldlByb3BzJHRvX3BsYWNlIiwiX3RoaXMkc3RhdGUkcGxhY2VNb3VzMiIsImFyb3VuZF9wbGFjZV9zZWxlY3QiLCJfdGhpcyRsaXN0X21hcmtlcl9hcm8iLCJsaXN0X21hcmtlcl9hcm91bmQiLCJfdGhpcyRwcm9wczMiLCJtYXJrZXJDZW50ZXJEaXYiLCJfc2VsZWN0QXJvdW5kUGxhY2UiLCJnZXRQb3B1cCIsInBsYWNlX3NlbGVjdCIsIm1hcmtlckRpdiIsIl90aGlzJHByb3BzJGN1cnJlbnRfcCIsIl90aGlzJHByb3BzJGN1cnJlbnRfcDIiLCJyZXN0YXVyYW50RGF0YSIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJtYXJrZXJfcmVzdGF1cmFudCIsInJlc3RhdXJhbnRfbWFya2VyIiwiZXJyIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsIl9pdGVyYXRvcjMiLCJfc3RlcDMiLCJfaXRlcmF0b3I0Iiwic2VhcmNoTG9jYWxTdG9yYWdlIiwiX3N0ZXA0IiwibWFya2VyX2hpc3RvcnkiLCJoaXN0b3J5X21hcmtlciIsIl9pdGVyYXRvcjUiLCJfc3RlcDUiLCJfaXRlcmF0b3I2Iiwic3RlcHMiLCJfc3RlcDYiLCJzdGVwIiwiaHRtbF9pbnN0cnVjdGlvbnMiLCJtYXJrZXJfc3RlcCIsInN0ZXBfbWFya2VyIiwiZW5kX2xvY2F0aW9uIiwiX2l0ZXJhdG9yNyIsIl9zdGVwNyIsIl9pdGVyYXRvcjgiLCJfc3RlcDgiLCJfaXRlcmF0b3I5IiwiX3N0ZXAxMCIsImVuY29kZWQiLCJpbmRleCIsImxlbiIsImIiLCJzaGlmdCIsImNoYXJDb2RlQXQiLCJkbGF0IiwiZGxuZyIsImNvbXBvbmVudERpZE1vdW50IiwiX3RoaXMzIiwid2luZG93IiwiaGFuZGxlU3RvcmFnZUNoYW5nZSIsImNvbnRhaW5lciIsImdlb2xvY2F0ZUNvbnRyb2wiLCJHZW9sb2NhdGVDb250cm9sIiwicG9zaXRpb25PcHRpb25zIiwiZW5hYmxlSGlnaEFjY3VyYWN5IiwidHJhY2tVc2VyTG9jYXRpb24iLCJzaG93VXNlckxvY2F0aW9uIiwic2hvd0FjY3VyYWN5Q2lyY2xlIiwiZml0Qm91bmRzT3B0aW9ucyIsIm1heFpvb20iLCJvbiIsIndhcm5pbmciLCJzZXRNeUxvY2F0aW9uQWN0aW9uIiwiY29vcmRzIiwiX29uTW91c2VDbGljayIsIl9vblJpZ2h0Q2xpY2siLCJfVVJMU2VhcmNoUGFyYW1zJGdldCIsIl90aGlzMyRnZW9sb2NhdGVDb250ciIsInJlc2l6ZSIsInBpZCIsIlVSTFNlYXJjaFBhcmFtcyIsInNlYXJjaCIsInNwbGl0IiwicGlkX2Fyb3VuZCIsImRpcmVjdGlvbl9pbmZvciIsInRyaWdnZXIiLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsInNldENlbnRlckxhdExuZ0FjdGlvbiIsImdldENlbnRlciIsIl90aGlzMyRtYXAiLCJtaW56b29tIiwicHJvcGVydHkiLCJib2R5IiwiX29uQ2xpY2tNZW51IiwiaWZyYW1lIiwiY29vcl9mcm9tIiwiY29vcl90byIsIm5hdmlnYXRpb25CeVVSTElmcmFtZSIsIm5hdmlnYXRpb25CeVVSTCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsIl9wbGFjZU1vdXNlQ2xpY2skZ2VvbSIsIl9wbGFjZU1vdXNlQ2xpY2skZ2VvbTIiLCJfdGhpcyRzdGF0ZSIsIkZyYWdtZW50IiwiRGl2MTAwdmgiLCJfQXZhdGFyIiwic2hhcGUiLCJvbkNsaWNrIiwiY2hhbmdlU3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJzYXRlbGxpdGVfaW1nIiwibm9ybWFsX21hcF9pbWciLCJCb3R0b21JbmZvTG9jYXRpb24iLCJpc01hcmtlckFyb3VuZCIsIm1hcmtlcl90eXBlX2lkIiwicmVtb3ZlTWFya2VyIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwicGxhY2VSZWR1Y2VyIiwibmF2aWdhdGlvblJlZHVjZXIiLCJib3hWaXNpYmxlUmVkdWNlciIsImJveF92aXNpYmxlIiwic2VhcmNoUmVkdWNlciIsInJlZF9tYXJrZXJfdmlzaWJsZSIsInBvc2l0aW9uX3JlZF9tYXJrZXIiLCJyZXN0YXVyYW50X2RhdGEiLCJzZWFyY2hfbG9jYWxfc3RvcmFnZSIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQ0FDQSxxSkFBQUEsbUJBQUEsWUFBQUEsb0JBQUEsV0FBQUMsQ0FBQSxTQUFBQyxDQUFBLEVBQUFELENBQUEsT0FBQUUsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLFNBQUEsRUFBQUMsQ0FBQSxHQUFBSCxDQUFBLENBQUFJLGNBQUEsRUFBQUMsQ0FBQSxHQUFBSixNQUFBLENBQUFLLGNBQUEsY0FBQVAsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsSUFBQUQsQ0FBQSxDQUFBRCxDQUFBLElBQUFFLENBQUEsQ0FBQU8sS0FBQSxLQUFBQyxDQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsQ0FBQSxHQUFBRixDQUFBLENBQUFHLFFBQUEsa0JBQUFDLENBQUEsR0FBQUosQ0FBQSxDQUFBSyxhQUFBLHVCQUFBQyxDQUFBLEdBQUFOLENBQUEsQ0FBQU8sV0FBQSw4QkFBQUMsT0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLFdBQUFDLE1BQUEsQ0FBQUssY0FBQSxDQUFBUCxDQUFBLEVBQUFELENBQUEsSUFBQVMsS0FBQSxFQUFBUCxDQUFBLEVBQUFpQixVQUFBLE1BQUFDLFlBQUEsTUFBQUMsUUFBQSxTQUFBcEIsQ0FBQSxDQUFBRCxDQUFBLFdBQUFrQixNQUFBLG1CQUFBakIsQ0FBQSxJQUFBaUIsTUFBQSxZQUFBQSxPQUFBakIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsV0FBQUQsQ0FBQSxDQUFBRCxDQUFBLElBQUFFLENBQUEsZ0JBQUFvQixLQUFBckIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxRQUFBSyxDQUFBLEdBQUFWLENBQUEsSUFBQUEsQ0FBQSxDQUFBSSxTQUFBLFlBQUFtQixTQUFBLEdB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LENBQUM7QUFDRixDQUFDO0FBQ2NDLDJIQUFPLENBQUNWLGVBQWUsQ0FBQyxDQUFDdmEsR0FBRyxDQUFDLEVBQUMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svMS44NWNjOGE1MDZlZWJhMDVhMmIwNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNUWUxFX1VSTCB9IGZyb20gJy4uL2NvbnN0cyc7XG5pbXBvcnQgTWFya2VyIGZyb20gJy4vTWFya2VyJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgQm90dG9tSW5mb0xvY2F0aW9uIGZyb20gJy4vQm90dG9tSW5mb0xvY2F0aW9uJztcbmltcG9ydCBNZW51UmlnaHRDbGljayBmcm9tICcuL01lbnVSaWdodENMaWNrJztcbmltcG9ydCB7IGdldERldGFpbExhdExuZ1NlcnZpY2UgfSBmcm9tICcuLi9yZWR1eC9zYWdhcy9wbGFjZVNhZ2EnO1xuaW1wb3J0IHsgbWVzc2FnZSwgQXZhdGFyIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgZXF1YWwgZnJvbSAnZmFzdC1kZWVwLWVxdWFsL2VzNi9yZWFjdCc7XG5pbXBvcnQgeyBzZXRNYXBWaWV3cG9ydEFjdGlvbiwgZ2V0RGV0YWlsQnlMYXRMbmdBY3Rpb24sIHNldENlbnRlckxhdExuZ0FjdGlvbiwgc2V0TXlMb2NhdGlvbkFjdGlvbiwgZ2V0RGV0YWlsQnlJZEFjdGlvbiB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMvcGxhY2UnO1xuaW1wb3J0IHsgc2VhcmNoQXJvdW5kQWN0aW9uLCBjbGVhclNlYXJjaEFyb3VuZEFjdGlvbiwgc2VsZWN0QXJvdW5kUGxhY2VBY3Rpb24gfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zL3NlYXJjaCc7XG5pbXBvcnQgeyBzZWxlY3RSZXN1bHRBY3Rpb24sIG5hdmlnYXRpb25Gcm9tQWN0aW9uLCBuYXZpZ2F0aW9uVG9BY3Rpb24sIGNsZWFyUmVzdWx0QWN0aW9uLCBuYXZpZ2F0aW9uQWN0aW9uIH0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucy9uYXZpZ2F0aW9uJztcbmltcG9ydCBNYXJrZXJOYXZpZ2F0aW9uIGZyb20gJy4vTWFya2VyTmF2aWdhdGlvbic7XG5pbXBvcnQgeyBzZXRSZWRNYXJrZXJBY3Rpb24sIHNldENvbGxhcHNlZEluZm9Cb3hBY3Rpb24sIHNldFBvcHVwUmlnaHRDbGljaywgc2V0Qm94VmlzaWJsZUFjdGlvbiB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMvYm94VmlzYmxlJztcbmltcG9ydCBub3JtYWxfbWFwX2ltZyBmcm9tICcuLi9zdGF0aWMvaW1hZ2VzL25vcm1hbF9tYXAucG5nJztcbmltcG9ydCBzYXRlbGxpdGVfaW1nIGZyb20gJy4uL3N0YXRpYy9pbWFnZXMvc2F0ZWxsaXRlLmpwZWcnO1xuaW1wb3J0IFJlYWN0RE9NU2VydmVyIGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBEaXYxMDB2aCBmcm9tICdyZWFjdC1kaXYtMTAwdmgnO1xuaW1wb3J0IFJlcXVlc3QgZnJvbSAnLi4vdXRpbHMvcmVxdWVzdCc7XG5pbXBvcnQgeyBNaWxlX1RyYXZlbCB9IGZyb20gJy4uL2NvbnN0cyc7XG5pbXBvcnQgeyBpc01vYmlsZSB9IGZyb20gJ3JlYWN0LWRldmljZS1kZXRlY3QnO1xuaW1wb3J0IGltYWdlcyBmcm9tICcuLi91dGlscy9pbWFnZXMnO1xuLy8gaW1wb3J0IHsgU1RZTEVfS0VZIH0gZnJvbSBcIi4uL2NvbmZpZy5kZXZcIjtcblxuY2xhc3MgTWFwIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5fbWFwUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG5cdFx0dGhpcy5tYXAgPSBudWxsO1xuXHRcdHRoaXMucmVkTWFya2VyID0gbnVsbDtcblx0XHR0aGlzLnBvcHVwUmlnaHRDbGljayA9IG51bGw7XG5cdFx0dGhpcy5wb3B1cF9uYXZpZ2F0aW9uID0gW107XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHN0eWxlOiBTVFlMRV9VUkwuTk9STUFMICsgU1RZTEVfS0VZLFxuXHRcdFx0c3R5bGVOb3JtYWw6IFNUWUxFX1VSTC5OT1JNQUwgKyBTVFlMRV9LRVksXG5cdFx0XHRzdHlsZUVhcnRoOiBTVFlMRV9VUkwuU0FURUxJVEUgKyBTVFlMRV9LRVksXG5cdFx0XHRib3R0b21JbmZvVmlzaWJsZTogZmFsc2UsXG5cdFx0XHR2YWx1ZTogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NlYXJjaF9oaXN0b3J5JykgfHwgJycsXG5cdFx0fTtcblx0XHR0aGlzLmxpc3QgPSBbXTtcblx0XHR0aGlzLmxpc3RSZXN0YXVyYW50ID0gW107XG5cdFx0dGhpcy5saXN0SGlzdG9yaWVzID0gW107XG5cdFx0dGhpcy52aWV3ID0gbnVsbDtcblx0XHR0aGlzLm5hdmlnYXRpb25WaWV3ID0gbnVsbDtcblx0fVxuXG5cdF9vblZpZXdwb3J0Q2hhbmdlID0gKHZpZXdwb3J0KSA9PiB7XG5cdFx0dGhpcy5wcm9wcy5kaXNwYXRjaChzZXRNYXBWaWV3cG9ydEFjdGlvbih2aWV3cG9ydCkpO1xuXHR9O1xuXG5cdF9vbk1vdXNlQ2xpY2sgPSAoZSkgPT4ge1xuXHRcdHRoaXMucHJvcHMuZGlzcGF0Y2goc2V0UG9wdXBSaWdodENsaWNrKGZhbHNlKSk7XG5cdFx0aWYgKHRoaXMucHJvcHMuYm94VmlzaWJsZSAhPT0gJ2lmcmFtZScpIHtcblx0XHRcdHRoaXMucHJvcHMuZGlzcGF0Y2goc2V0UmVkTWFya2VyQWN0aW9uKGZhbHNlKSk7XG5cdFx0fVxuXHRcdC8vIGlmICh0aGlzLnByb3BzLmJveFZpc2libGUgPT09IFwiaW5mb1wiKSB0aGlzLnByb3BzLmRpc3BhdGNoKHNldEJveFZpc2libGVBY3Rpb24oJ3NlYXJjaCcpKVxuXHRcdC8vIHRoaXMubWFya2VyV2hhdElzID8gdGhpcy5tYXJrZXJXaGF0SXMucmVtb3ZlKCkgOiBudWxsO1xuXHRcdHRoaXMucHJvcHMuZGlzcGF0Y2goc2VsZWN0QXJvdW5kUGxhY2VBY3Rpb24obnVsbCkpO1xuXHRcdHRoaXMucmVtb3ZlTWFya2VyV2hhdElzKCk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRib3R0b21JbmZvVmlzaWJsZTogZmFsc2UsXG5cdFx0fSk7XG5cdH07XG5cblx0X29uUmlnaHRDbGljayA9IChlKSA9PiB7XG5cdFx0Y29uc3QgcG9zaXRpb24gPSB7IGxhdDogZS5sbmdMYXQubGF0LCBsbmc6IGUubG5nTGF0LmxuZyB9O1xuXHRcdGlmICh0aGlzLnByb3BzLmJveFZpc2libGUgIT09ICdpZnJhbWUnKSB7XG5cdFx0XHR0aGlzLnByb3BzLmRpc3BhdGNoKHNldFJlZE1hcmtlckFjdGlvbih0cnVlLCBwb3NpdGlvbikpO1xuXHRcdFx0dGhpcy5wcm9wcy5kaXNwYXRjaChzZXRQb3B1cFJpZ2h0Q2xpY2sodHJ1ZSwgcG9zaXRpb24sICdub3JtYWwnKSk7XG5cdFx0fVxuXHR9O1xuXG5cdF9vbkNsaWNrTWVudSA9IChldnQpID0+IHtcblx0XHRjb25zdCBwYXJlbnQgPSBldnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG5cblx0XHRpZiAoZXZ0LnRhcmdldC5jbGFzc05hbWUgJiYgZXZ0LnRhcmdldC5jbGFzc05hbWUudG9TdHJpbmcoKS5pbmNsdWRlcygnd2hhdC1pcy10aGlzJykpIHtcblx0XHRcdHRoaXMuaGFuZGxlV2hhdElzKCk7XG5cdFx0fSBlbHNlIGlmIChldnQudGFyZ2V0LmNsYXNzTmFtZSAmJiBldnQudGFyZ2V0LmNsYXNzTmFtZS50b1N0cmluZygpLmluY2x1ZGVzKCdmcm9tLWhlcmUnKSkge1xuXHRcdFx0dGhpcy5oYW5kbGVGcm9tSGVyZSgpO1xuXHRcdH0gZWxzZSBpZiAoZXZ0LnRhcmdldC5jbGFzc05hbWUgJiYgZXZ0LnRhcmdldC5jbGFzc05hbWUudG9TdHJpbmcoKS5pbmNsdWRlcygndG8taGVyZScpKSB7XG5cdFx0XHR0aGlzLmhhbmRsZVRvSGVyZSgpO1xuXHRcdH0gZWxzZSBpZiAoZXZ0LnRhcmdldC5jbGFzc05hbWUgJiYgZXZ0LnRhcmdldC5jbGFzc05hbWUudG9TdHJpbmcoKS5pbmNsdWRlcygnZGVsZXRlLWxvY2F0aW9uJykpIHtcblx0XHRcdHRoaXMuaGFuZGxlRGVsZXRlTG9jYXRpb24oKTtcblx0XHR9IGVsc2UgaWYgKGV2dC50YXJnZXQuY2xhc3NOYW1lICYmIGV2dC50YXJnZXQuY2xhc3NOYW1lLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ3NlYXJjaC1hcm91bmQnKSkge1xuXHRcdFx0dGhpcy5oYW5kbGVTZWFyY2hBcm91bmQoKTtcblx0XHR9IGVsc2UgaWYgKGV2dC50YXJnZXQuY2xhc3NOYW1lICYmIGV2dC50YXJnZXQuY2xhc3NOYW1lLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ3RvLWFyb3VuZC1wbGFjZScpKSB7XG5cdFx0XHR0aGlzLmhhbmRsZVRvQXJvdW5kUGxhY2UoKTtcblx0XHR9IGVsc2UgaWYgKGV2dC50YXJnZXQuY2xhc3NOYW1lICYmIGV2dC50YXJnZXQuY2xhc3NOYW1lLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ3doYXQtaXMtbmF2aWdhdGlvbicpKSB7XG5cdFx0XHR0aGlzLmhhbmRsZVdoYXRJcyhmYWxzZSk7XG5cdFx0fVxuXHRcdGlmIChwYXJlbnQ/LmNsYXNzTmFtZSAmJiBwYXJlbnQ/LmNsYXNzTmFtZS50b1N0cmluZygpLmluY2x1ZGVzKCdtZW51LXJpZ2h0LWNsaWNrJykpIHtcblx0XHRcdGlmIChldnQudGFyZ2V0LmNsYXNzTmFtZSAmJiAhZXZ0LnRhcmdldC5jbGFzc05hbWUudG9TdHJpbmcoKS5pbmNsdWRlcygnd2hhdC1pcy10aGlzJykpIHtcblx0XHRcdFx0dGhpcy5wcm9wcy5kaXNwYXRjaChjbGVhclNlYXJjaEFyb3VuZEFjdGlvbigpKTtcblx0XHRcdH1cblx0XHRcdHRoaXMucHJvcHMuZGlzcGF0Y2goc2V0UG9wdXBSaWdodENsaWNrKGZhbHNlKSk7XG5cdFx0XHR0aGlzLnJlbW92ZU1hcmtlcldoYXRJcygpO1xuXHRcdH1cblx0fTtcblxuXHRjaGFuZ2VWaXNpYmxlQm90dG9tSW5mbyA9ICh2aXNpYmxlKSA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRib3R0b21JbmZvVmlzaWJsZTogdmlzaWJsZSxcblx0XHR9KTtcblx0fTtcblxuXHRfZ2V0SW5mb3JQbGFjZSA9IGFzeW5jIChsYXQgPSB0aGlzLnByb3BzLnBvc2l0aW9uX3BvcHVwPy5sYXQsIGxuZyA9IHRoaXMucHJvcHMucG9zaXRpb25fcG9wdXA/LmxuZykgPT4ge1xuXHRcdGNvbnN0IGxhdExuZyA9IHtcblx0XHRcdGxhdGl0dWRlOiBsYXQsXG5cdFx0XHRsb25naXR1ZGU6IGxuZyxcblx0XHR9O1xuXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0RGV0YWlsTGF0TG5nU2VydmljZShsYXRMbmcpO1xuXHRcdFx0aWYgKHJlc3BvbnNlLmRhdGEucmVzdWx0cy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGNvbnN0IHBsYWNlX3Jlc3BvbnNlID0gcmVzcG9uc2UuZGF0YS5yZXN1bHRzWzBdO1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdC4uLnBsYWNlX3Jlc3BvbnNlLFxuXHRcdFx0XHRcdG5hbWU6IHBsYWNlX3Jlc3BvbnNlLmFkZHJlc3NfY29tcG9uZW50c1swXS5sb25nX25hbWUsXG5cdFx0XHRcdFx0Zm9ybWF0dGVkX2FkZHJlc3M6IHRoaXMuZ2V0QWRkcmVzc0dlb2NvZGUocGxhY2VfcmVzcG9uc2UpLFxuXHRcdFx0XHR9O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bWVzc2FnZS5lcnJvcignS2jDtG5nIHTDrG0gdGjhuqV5IMSR4buLYSDEkWnhu4NtICEhJyk7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHR0aHJvdyBlcnJvcjtcblx0XHR9XG5cdH07XG5cblx0c2VsZWN0UGxhY2UgPSBhc3luYyAobGF0ID0gdGhpcy5wcm9wcy5wb3NpdGlvbk1hcmtlclNlbGVjdD8ubGF0LCBsbmcgPSB0aGlzLnByb3BzLnBvc2l0aW9uTWFya2VyU2VsZWN0Py5sbmcsIHJlZE1hcmtlclZpc2libGUgPSB0cnVlKSA9PiB7XG5cdFx0Y29uc3QgcGxhY2UgPSBhd2FpdCB0aGlzLl9nZXRJbmZvclBsYWNlKGxhdCwgbG5nKTtcblxuXHRcdGlmIChwbGFjZSkge1xuXHRcdFx0Y29uc3Qgdmlld3BvcnQgPSB7XG5cdFx0XHRcdGxvbmdpdHVkZTogbG5nLFxuXHRcdFx0XHRsYXRpdHVkZTogbGF0LFxuXHRcdFx0XHR6b29tOiAxNSxcblx0XHRcdH07XG5cdFx0XHR0aGlzLnByb3BzLmRpc3BhdGNoKHNldE1hcFZpZXdwb3J0QWN0aW9uKHZpZXdwb3J0KSk7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0Ym90dG9tSW5mb1Zpc2libGU6IHRydWUsXG5cdFx0XHRcdHBsYWNlTW91c2VDbGljazogcGxhY2UsXG5cdFx0XHR9KTtcblx0XHRcdGlmIChyZWRNYXJrZXJWaXNpYmxlKSB7XG5cdFx0XHRcdGlmICh0aGlzLm1hcmtlcldoYXRJcykge1xuXHRcdFx0XHRcdHRoaXMubWFya2VyV2hhdElzLnNldExuZ0xhdCh7IGxhdCwgbG5nIH0pLmFkZFRvKHRoaXMubWFwKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0XHRcdGVsLmlubmVySFRNTCA9IFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RhdGljTWFya3VwKDxNYXJrZXIgc2l6ZT17MjJ9IC8+KTtcblx0XHRcdFx0XHR0aGlzLm1hcmtlcldoYXRJcyA9IG5ldyBtYXBsaWJyZWdsLk1hcmtlcihlbCwgeyBhbmNob3I6ICdib3R0b20nIH0pLnNldExuZ0xhdCh7IGxhdCwgbG5nIH0pLmFkZFRvKHRoaXMubWFwKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLm1hcmtlcldoYXRJcy5nZXRFbGVtZW50KCkuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCAoZSkgPT4ge1xuXHRcdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdHRoaXMucHJvcHMuZGlzcGF0Y2goc2V0UmVkTWFya2VyQWN0aW9uKGZhbHNlKSk7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5kaXNwYXRjaChzZXRQb3B1cFJpZ2h0Q2xpY2sodHJ1ZSwgeyBsYXQsIGxuZyB9LCAncG9wdXBDdXJyZW50UGxhY2UnKSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR0aGlzLnByb3BzLmRpc3BhdGNoKHNldFJlZE1hcmtlckFjdGlvbihmYWxzZSkpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gcmVkTWFya2VyVmlzaWJsZSA/IHRoaXMucHJvcHMuZGlzcGF0Y2goc2V0UmVkTWFya2VyQWN0aW9uKHRydWUsIHsgbGF0LCBsbmcgfSkpIDogbnVsbDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWVzc2FnZS5lcnJvcignS2jDtG5nIHTDrG0gdGjhuqV5IMSR4buLYSDEkWnhu4NtICEhJyk7XG5cdFx0fVxuXHR9O1xuXG5cdHJlbW92ZU1hcmtlcldoYXRJcyA9ICgpID0+IHtcblx0XHR0aGlzLm1hcmtlcldoYXRJcyA/IHRoaXMubWFya2VyV2hhdElzLnJlbW92ZSgpIDogbnVsbDtcblx0fTtcblxuXHRfZ2V0SW5mb3JQbGFjZUFyb3VuZCA9IGFzeW5jIChpZCkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IEF4aW9zLmdldChgaHR0cHM6Ly9uYXBpLmdvb25nLmlvL3YxL21hcmtlci9nZXRfbWFya2VyX2RldGFpbC8ke2lkfWApO1xuXG5cdFx0XHRpZiAocmVzcG9uc2UuZGF0YS5kYXRhKSB7XG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5kYXRhLmRhdGE7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRtZXNzYWdlLmVycm9yKCdLaMO0bmcgdMOsbSB0aOG6pXkgxJHhu4thIMSRaeG7g20gISEnKTtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdG1lc3NhZ2UuZXJyb3IoJ0tow7RuZyB0w6xtIHRo4bqleSDEkeG7i2EgxJFp4buDbSAhJyk7XG5cdFx0XHR0aHJvdyBlcnJvcjtcblx0XHR9XG5cdH07XG5cblx0c2VsZWN0QXJvdW5kUGxhY2UgPSBhc3luYyAoaWQpID0+IHtcblx0XHRjb25zdCBwbGFjZSA9IGF3YWl0IHRoaXMuX2dldEluZm9yUGxhY2VBcm91bmQoaWQpO1xuXHRcdGlmIChwbGFjZSkge1xuXHRcdFx0Y29uc3Qgdmlld3BvcnQgPSB7XG5cdFx0XHRcdGxvbmdpdHVkZTogTnVtYmVyKHBsYWNlLmxuZ19sYXRbMF0pLFxuXHRcdFx0XHRsYXRpdHVkZTogTnVtYmVyKHBsYWNlLmxuZ19sYXRbMV0pLFxuXHRcdFx0XHR6b29tOiAxNSxcblx0XHRcdH07XG5cdFx0XHR0aGlzLnByb3BzLmRpc3BhdGNoKHNldE1hcFZpZXdwb3J0QWN0aW9uKHZpZXdwb3J0KSk7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0Ym90dG9tSW5mb1Zpc2libGU6IHRydWUsXG5cdFx0XHRcdHBsYWNlTW91c2VDbGljazogcGxhY2UsXG5cdFx0XHR9KTtcblx0XHRcdHRoaXMucHJvcHMuZGlzcGF0Y2goc2V0UG9wdXBSaWdodENsaWNrKGZhbHNlKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1lc3NhZ2UuZXJyb3IoJ0tow7RuZyB0w6xtIHRo4bqleSDEkeG7i2EgxJFp4buDbSAhIScpO1xuXHRcdH1cblx0fTtcblxuXHRoYW5kbGVXaGF0SXMgPSAocmVkTWFya2VyVmlzaWJsZSA9IHRydWUpID0+IHtcblx0XHRjb25zdCB7IHBvc2l0aW9uX3BvcHVwLCBpc1NtYWxsU2NyZWVuIH0gPSB0aGlzLnByb3BzO1xuXHRcdGlmIChpc1NtYWxsU2NyZWVuKSB7XG5cdFx0XHR0aGlzLnByb3BzLmRpc3BhdGNoKFxuXHRcdFx0XHRnZXREZXRhaWxCeUxhdExuZ0FjdGlvbih7XG5cdFx0XHRcdFx0bGF0aXR1ZGU6IHBvc2l0aW9uX3BvcHVwLmxhdCxcblx0XHRcdFx0XHRsb25naXR1ZGU6IHBvc2l0aW9uX3BvcHVwLmxuZyxcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cblx0XHRcdHRoaXMucHJvcHMuZGlzcGF0Y2goc2V0Qm94VmlzaWJsZUFjdGlvbignaW5mbycpKTtcblx0XHRcdHRoaXMucHJvcHMuZGlzcGF0Y2goY2xlYXJTZWFyY2hBcm91bmRBY3Rpb24oKSk7XG5cdFx0XHR0aGlzLnByb3BzLmRpc3BhdGNoKHNldFBvcHVwUmlnaHRDbGljayhmYWxzZSkpO1xuXHRcdFx0dGhpcy5yZW1vdmVNYXJrZXJXaGF0SXMoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZWxlY3RQbGFjZShwb3NpdGlvbl9wb3B1cC5sYXQsIHBvc2l0aW9uX3BvcHVwLmxuZywgcmVkTWFya2VyVmlzaWJsZSk7XG5cdFx0fVxuXHR9O1xuXG5cdGhhbmRsZUZyb21IZXJlID0gYXN5bmMgKGxhdCwgbG5nKSA9PiB7XG5cdFx0bGV0IHBsYWNlO1xuXHRcdGlmICghbGF0IHx8ICFsbmcpIHBsYWNlID0gYXdhaXQgdGhpcy5fZ2V0SW5mb3JQbGFjZSgpO1xuXHRcdGVsc2Uge1xuXHRcdFx0cGxhY2UgPSBhd2FpdCB0aGlzLl9nZXRJbmZvclBsYWNlKGxhdCwgbG5nKTtcblx0XHR9XG5cdFx0aWYgKHBsYWNlKSB7XG5cdFx0XHRjb25zdCB2aWV3cG9ydCA9IHtcblx0XHRcdFx0bG9uZ2l0dWRlOiBwbGFjZS5nZW9tZXRyeS5sb2NhdGlvbi5sbmcsXG5cdFx0XHRcdGxhdGl0dWRlOiBwbGFjZS5nZW9tZXRyeS5sb2NhdGlvbi5sYXQsXG5cdFx0XHRcdHpvb206IDE1LFxuXHRcdFx0fTtcblx0XHRcdCF0aGlzLnByb3BzLnRvX3BsYWNlICYmIHRoaXMucHJvcHMuZGlzcGF0Y2goc2V0TWFwVmlld3BvcnRBY3Rpb24odmlld3BvcnQpKTtcblx0XHRcdHRoaXMucHJvcHMuZGlzcGF0Y2goc2V0Qm94VmlzaWJsZUFjdGlvbignbmF2aWdhdGlvbicpKTtcblx0XHRcdHRoaXMucHJvcHMuZGlzcGF0Y2gobmF2aWdhdGlvbkZyb21BY3Rpb24ocGxhY2UsIGAke3BsYWNlLm5hbWV9IC0gJHtwbGFjZS5mb3JtYXR0ZWRfYWRkcmVzc31gKSk7XG5cblx0XHRcdHRoaXMucHJvcHMuZGlzcGF0Y2goc2V0UmVkTWFya2VyQWN0aW9uKGZhbHNlKSk7XG5cdFx0XHR0aGlzLmNoYW5nZVZpc2libGVCb3R0b21JbmZvKGZhbHNlKTtcblx0XHR9XG5cdH07XG5cblx0aGFuZGxlVG9IZXJlID0gYXN5bmMgKGxhdCwgbG5nKSA9PiB7XG5cdFx0bGV0IHBsYWNlO1xuXHRcdGlmICghbGF0IHx8ICFsbmcpIHBsYWNlID0gYXdhaXQgdGhpcy5fZ2V0SW5mb3JQbGFjZSgpO1xuXHRcdGVsc2Uge1xuXHRcdFx0cGxhY2UgPSBhd2FpdCB0aGlzLl9nZXRJbmZvclBsYWNlKGxhdCwgbG5nKTtcblx0XHR9XG5cdFx0aWYgKHBsYWNlKSB7XG5cdFx0XHR0aGlzLnByb3BzLmRpc3BhdGNoKHNldEJveFZpc2libGVBY3Rpb24oJ25hdmlnYXRpb24nKSk7XG5cdFx0XHRjb25zdCB2aWV3cG9ydCA9IHtcblx0XHRcdFx0bG9uZ2l0dWRlOiBwbGFjZS5nZW9tZXRyeS5sb2NhdGlvbi5sbmcsXG5cdFx0XHRcdGxhdGl0dWRlOiBwbGFjZS5nZW9tZXRyeS5sb2NhdGlvbi5sYXQsXG5cdFx0XHRcdHpvb206IDE1LFxuXHRcdFx0fTtcblx0XHRcdGNvbnN0IG15X2xvY2F0aW9uID0gdGhpcy5wcm9wcy5teV9sb2NhdGlvbjtcblx0XHRcdGlmIChteV9sb2NhdGlvbiAmJiAodGhpcy5wcm9wcy5ib3hWaXNpYmxlID09PSAnc2VhcmNoJyB8fCB0aGlzLnByb3BzLmJveFZpc2libGUgPT09ICdpbmZvJykpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IFJlcXVlc3QuZ2VvY29kZShteV9sb2NhdGlvbik7XG5cdFx0XHRcdFx0aWYgKHJlc3BvbnNlLmRhdGEucmVzdWx0cy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnByb3BzLmRpc3BhdGNoKFxuXHRcdFx0XHRcdFx0XHRuYXZpZ2F0aW9uRnJvbUFjdGlvbihcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHQuLi5yZXNwb25zZS5kYXRhLnJlc3VsdHNbMF0sXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lOiByZXNwb25zZS5kYXRhLnJlc3VsdHNbMF0uYWRkcmVzc19jb21wb25lbnRzWzBdLmxvbmdfbmFtZSxcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdCdW4buLIHRyw60gY+G7p2EgYuG6oW4nXG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRcdHRocm93IGVycm9yO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQhdGhpcy5wcm9wcy5mcm9tX3BsYWNlICYmIHRoaXMucHJvcHMuZGlzcGF0Y2goc2V0TWFwVmlld3BvcnRBY3Rpb24odmlld3BvcnQpKTtcblx0XHRcdHRoaXMucHJvcHMuZGlzcGF0Y2gobmF2aWdhdGlvblRvQWN0aW9uKHBsYWNlLCBgJHtwbGFjZS5uYW1lfSAtICR7cGxhY2UuZm9ybWF0dGVkX2FkZHJlc3N9YCkpO1xuXHRcdFx0dGhpcy5wcm9wcy5kaXNwYXRjaChzZXRCb3hWaXNpYmxlQWN0aW9uKCduYXZpZ2F0aW9uJykpO1xuXHRcdFx0dGhpcy5wcm9wcy5kaXNwYXRjaChzZXRSZWRNYXJrZXJBY3Rpb24oZmFsc2UpKTtcblx0XHRcdHRoaXMuY2hhbmdlVmlzaWJsZUJvdHRvbUluZm8oZmFsc2UpO1xuXHRcdH1cblx0fTtcblxuXHRoYW5kbGVEZWxldGVMb2NhdGlvbiA9ICgpID0+IHtcblx0XHRjb25zdCB7IHR5cGVfcG9wdXAgfSA9IHRoaXMucHJvcHM7XG5cdFx0aWYgKHR5cGVfcG9wdXAgPT09ICdwb3B1cEZyb21QbGFjZScpIHtcblx0XHRcdHRoaXMucHJvcHMuZGlzcGF0Y2gobmF2aWdhdGlvbkZyb21BY3Rpb24obnVsbCwgJycpKTtcblx0XHR9IGVsc2UgaWYgKHR5cGVfcG9wdXAgPT09ICdwb3B1cFRvUGxhY2UnKSB7XG5cdFx0XHR0aGlzLnByb3BzLmRpc3BhdGNoKG5hdmlnYXRpb25Ub0FjdGlvbihudWxsLCAnJykpO1xuXHRcdH1cblx0XHR0aGlzLnByb3BzLmRpc3BhdGNoKGNsZWFyUmVzdWx0QWN0aW9uKCkpO1xuXHR9O1xuXG5cdGhhbmRsZVNlYXJjaEFyb3VuZCA9IGFzeW5jICgpID0+IHtcblx0XHRjb25zdCBwbGFjZSA9IGF3YWl0IHRoaXMuX2dldEluZm9yUGxhY2UoKTtcblx0XHRpZiAocGxhY2UpIHtcblx0XHRcdGNvbnN0IHZpZXdwb3J0ID0ge1xuXHRcdFx0XHRsb25naXR1ZGU6IHBsYWNlLmdlb21ldHJ5LmxvY2F0aW9uLmxuZyxcblx0XHRcdFx0bGF0aXR1ZGU6IHBsYWNlLmdlb21ldHJ5LmxvY2F0aW9uLmxhdCxcblx0XHRcdFx0em9vbTogMTUsXG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgbG9jYXRpb24gPSB7XG5cdFx0XHRcdGxhdDogcGxhY2UuZ2VvbWV0cnkubG9jYXRpb24ubGF0LFxuXHRcdFx0XHRsbmc6IHBsYWNlLmdlb21ldHJ5LmxvY2F0aW9uLmxuZyxcblx0XHRcdH07XG5cdFx0XHR0aGlzLnByb3BzLmRpc3BhdGNoKHNldEJveFZpc2libGVBY3Rpb24oJ3NlYXJjaCcpKTtcblx0XHRcdHRoaXMucHJvcHMuZGlzcGF0Y2goc2V0TWFwVmlld3BvcnRBY3Rpb24odmlld3BvcnQpKTtcblx0XHRcdHRoaXMucHJvcHMuZGlzcGF0Y2goc2VhcmNoQXJvdW5kQWN0aW9uKGxvY2F0aW9uLCB0aGlzLnByb3BzLnZpZXdwb3J0Lnpvb20pKTtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRib3R0b21JbmZvVmlzaWJsZTogZmFsc2UsXG5cdFx0XHR9KTtcblx0XHR9XG5cdH07XG5cblx0X3NlbGVjdEFyb3VuZFBsYWNlID0gKHR5cGUsIHBsYWNlKSA9PiB7XG5cdFx0aWYgKHR5cGUgIT09ICdjZW50ZXInKSB7XG5cdFx0XHR0aGlzLnByb3BzLmRpc3BhdGNoKHNlbGVjdEFyb3VuZFBsYWNlQWN0aW9uKHBsYWNlKSk7XG5cdFx0XHR0aGlzLnNlbGVjdEFyb3VuZFBsYWNlKHBsYWNlPy5pZCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucHJvcHMuZGlzcGF0Y2goc2VsZWN0QXJvdW5kUGxhY2VBY3Rpb24ocGxhY2UpKTtcblx0XHRcdHRoaXMuc2VsZWN0UGxhY2UocGxhY2UuZ2VvbWV0cnkubG9jYXRpb24ubGF0LCBwbGFjZS5nZW9tZXRyeS5sb2NhdGlvbi5sbmcsIGZhbHNlKTtcblx0XHR9XG5cdH07XG5cblx0aGFuZGxlVG9Bcm91bmRQbGFjZSA9IGFzeW5jICgpID0+IHtcblx0XHRsZXQgcGxhY2UgPSBudWxsO1xuXHRcdHRoaXMucHJvcHMuYXJvdW5kX3BsYWNlcy5tYXAoKGl0ZW0pID0+IHtcblx0XHRcdGlmIChpdGVtLmxuZ19sYXRbMF0gKiAxID09PSB0aGlzLnBvcHVwUmlnaHRDbGljay5nZXRMbmdMYXQoKS5sbmcgJiYgaXRlbS5sbmdfbGF0WzFdICogMSA9PT0gdGhpcy5wb3B1cFJpZ2h0Q2xpY2suZ2V0TG5nTGF0KCkubGF0KSB7XG5cdFx0XHRcdHBsYWNlID0gaXRlbTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRpZiAocGxhY2UpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHRoaXMucHJvcHMuZGlzcGF0Y2goc2V0UG9wdXBSaWdodENsaWNrKGZhbHNlKSk7XG5cdFx0XHRcdGNvbnN0IHBsYWNlX2NlbnRlciA9IHRoaXMucHJvcHMuYXJvdW5kX3BsYWNlX2NlbnRlcjtcblx0XHRcdFx0dGhpcy5wcm9wcy5kaXNwYXRjaChuYXZpZ2F0aW9uRnJvbUFjdGlvbihwbGFjZV9jZW50ZXIsIGAke3BsYWNlX2NlbnRlci5uYW1lfSAtICR7cGxhY2VfY2VudGVyLmZvcm1hdHRlZF9hZGRyZXNzfWApKTtcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBeGlvcy5nZXQoYGh0dHBzOi8vbmFwaS5nb29uZy5pby92MS9tYXJrZXIvZ2V0X21hcmtlcl9kZXRhaWwvJHtwbGFjZS5pZH1gKTtcblxuXHRcdFx0XHRwbGFjZSA9IHJlc3BvbnNlLmRhdGE/LmRhdGE7XG5cdFx0XHRcdHBsYWNlID0ge1xuXHRcdFx0XHRcdC4uLnBsYWNlLFxuXHRcdFx0XHRcdHBsYWNlX2lkOiBwbGFjZS5faWQsXG5cdFx0XHRcdFx0Z2VvbWV0cnk6IHtcblx0XHRcdFx0XHRcdGxvY2F0aW9uOiB7XG5cdFx0XHRcdFx0XHRcdGxhdDogTnVtYmVyKHBsYWNlLmxuZ19sYXRbMV0pLFxuXHRcdFx0XHRcdFx0XHRsbmc6IE51bWJlcihwbGFjZS5sbmdfbGF0WzBdKSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRmb3JtYXR0ZWRfYWRkcmVzczogcGxhY2UuZGVzY3JpcHRpb24uYWRkcmVzcyxcblx0XHRcdFx0fTtcblx0XHRcdFx0dGhpcy5wcm9wcy5kaXNwYXRjaChuYXZpZ2F0aW9uVG9BY3Rpb24ocGxhY2UsIGAke3BsYWNlLm5hbWV9IC0gJHtwbGFjZS5mb3JtYXR0ZWRfYWRkcmVzc31gKSk7XG5cdFx0XHRcdHRoaXMucHJvcHMuZGlzcGF0Y2goc2V0Qm94VmlzaWJsZUFjdGlvbignbmF2aWdhdGlvbicpKTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdG1lc3NhZ2UuZXJyb3IoJ0tow7RuZyB0w6xtIHRo4bqleSDEkeG7i2EgxJFp4buDbSAhJyk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1lc3NhZ2UuZXJyb3IoJ0tow7RuZyB0w6xtIHRo4bqleSDEkeG7i2EgxJFp4buDbSAhJyk7XG5cdFx0fVxuXHR9O1xuXG5cdHJlbW92ZU1hcmtlclBvcHVwID0gKCkgPT4ge1xuXHRcdGlmICh0aGlzLm1hcmtlckN1cnJlbnRQbGFjZSkgdGhpcy5tYXJrZXJDdXJyZW50UGxhY2UucmVtb3ZlKCk7XG5cdFx0aWYgKHRoaXMucG9wdXBSaWdodENsaWNrKSB0aGlzLnBvcHVwUmlnaHRDbGljay5yZW1vdmUoKTtcblx0XHRpZiAodGhpcy5wcm9wcy5hcm91bmRfcGxhY2VzKSB0aGlzLnByb3BzLmRpc3BhdGNoKGNsZWFyU2VhcmNoQXJvdW5kQWN0aW9uKCkpO1xuXHRcdGlmICh0aGlzLnJlZE1hcmtlcikgdGhpcy5yZWRNYXJrZXIucmVtb3ZlKCk7XG5cdH07XG5cblx0Z2V0QWRkcmVzc0dlb2NvZGUgPSAocGxhY2UpID0+IHtcblx0XHRsZXQgcmVzdWx0ID0gW107XG5cdFx0cGxhY2UuYWRkcmVzc19jb21wb25lbnRzPy5zbGljZSgxKS5tYXAoKGl0ZW0pID0+IHtcblx0XHRcdHJlc3VsdC5wdXNoKGl0ZW0ubG9uZ19uYW1lKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oJywnKTtcblx0fTtcblxuXHRjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG5cdFx0aWYgKHRoaXMucHJvcHMuaXNTbWFsbFNjcmVlbiAhPT0gcHJldlByb3BzLmlzU21hbGxTY3JlZW4pIHtcblx0XHRcdGlmICghdGhpcy5wcm9wcy5pc1NtYWxsU2NyZWVuICYmICF0aGlzLm5hdmlnYXRpb24pIHtcblx0XHRcdFx0dGhpcy5uYXZpZ2F0aW9uID0gbmV3IG1hcGxpYnJlZ2wuTmF2aWdhdGlvbkNvbnRyb2woKTtcblx0XHRcdFx0dGhpcy5tYXAuYWRkQ29udHJvbCh0aGlzLm5hdmlnYXRpb24pO1xuXHRcdFx0fSBlbHNlIGlmICh0aGlzLnByb3BzLmlzU21hbGxTY3JlZW4gJiYgdGhpcy5uYXZpZ2F0aW9uKSB7XG5cdFx0XHRcdHRoaXMubWFwLnJlbW92ZUNvbnRyb2wodGhpcy5uYXZpZ2F0aW9uKTtcblx0XHRcdFx0dGhpcy5uYXZpZ2F0aW9uID0gbnVsbDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoIWVxdWFsKHByZXZQcm9wcy5wb3NpdGlvbk1hcmtlclNlbGVjdCwgdGhpcy5wcm9wcy5wb3NpdGlvbk1hcmtlclNlbGVjdCkgJiYgdGhpcy5wcm9wcy5wb3NpdGlvbk1hcmtlclNlbGVjdCkge1xuXHRcdFx0aWYgKHRoaXMucmVkTWFya2VyKSB7XG5cdFx0XHRcdHRoaXMucmVkTWFya2VyID0gdGhpcy5yZWRNYXJrZXIuc2V0TG5nTGF0KHRoaXMucHJvcHMucG9zaXRpb25NYXJrZXJTZWxlY3QpLmFkZFRvKHRoaXMubWFwKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdGVsLmlubmVySFRNTCA9IFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RhdGljTWFya3VwKDxNYXJrZXIgc2l6ZT17MjJ9IC8+KTtcblx0XHRcdFx0Ly8gTWFya2VyIGNodeG7mXQgcGjhuqNpXG5cdFx0XHRcdHRoaXMucmVkTWFya2VyID0gbmV3IG1hcGxpYnJlZ2wuTWFya2VyKHsgYW5jaG9yOiAnYm90dG9tJywgZWxlbWVudDogZWwgfSkuc2V0TG5nTGF0KHRoaXMucHJvcHMucG9zaXRpb25NYXJrZXJTZWxlY3QpLmFkZFRvKHRoaXMubWFwKTtcblxuXHRcdFx0XHR0aGlzLnJlZE1hcmtlci5nZXRFbGVtZW50KCkuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCAoZSkgPT4ge1xuXHRcdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdHRoaXMucHJvcHMuZGlzcGF0Y2goc2V0UG9wdXBSaWdodENsaWNrKHRydWUsIHRoaXMucHJvcHMucG9zaXRpb25NYXJrZXJTZWxlY3QsICdub3JtYWwnKSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChwcmV2UHJvcHMubWFya2VyU2VsZWN0ICE9PSB0aGlzLnByb3BzLm1hcmtlclNlbGVjdCkge1xuXHRcdFx0aWYgKCF0aGlzLnByb3BzLm1hcmtlclNlbGVjdCkge1xuXHRcdFx0XHR0aGlzLnJlZE1hcmtlcj8ucmVtb3ZlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMucHJvcHMucG9wdXBfdmlzaWJsZSAmJiAoIWVxdWFsKHByZXZQcm9wcy5wb3NpdGlvbl9wb3B1cCwgdGhpcy5wcm9wcy5wb3NpdGlvbl9wb3B1cCkgfHwgdGhpcy5wcm9wcy50eXBlX3BvcHVwICE9PSBwcmV2UHJvcHMudHlwZV9wb3B1cCkgJiYgdGhpcy5wcm9wcy5wb3NpdGlvbl9wb3B1cCkge1xuXHRcdFx0dGhpcy5wb3B1cFJpZ2h0Q2xpY2sgPSB0aGlzLnBvcHVwUmlnaHRDbGlja1xuXHRcdFx0XHQ/IHRoaXMucG9wdXBSaWdodENsaWNrXG5cdFx0XHRcdFx0XHQuc2V0TG5nTGF0KFt0aGlzLnByb3BzLnBvc2l0aW9uX3BvcHVwLmxuZywgdGhpcy5wcm9wcy5wb3NpdGlvbl9wb3B1cC5sYXRdKVxuXHRcdFx0XHRcdFx0LmFkZFRvKHRoaXMubWFwKVxuXHRcdFx0XHRcdFx0LnNldEhUTUwoXG5cdFx0XHRcdFx0XHRcdFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RhdGljTWFya3VwKFxuXHRcdFx0XHRcdFx0XHRcdDxNZW51UmlnaHRDbGlja1xuXHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGF0Y2g9e3RoaXMucHJvcHMuZGlzcGF0Y2h9XG5cdFx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbl9wb3B1cD17dGhpcy5wcm9wcy5wb3NpdGlvbl9wb3B1cH1cblx0XHRcdFx0XHRcdFx0XHRcdHR5cGVfcG9wdXA9e3RoaXMucHJvcHMudHlwZV9wb3B1cH1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdDogbmV3IG1hcGxpYnJlZ2wuUG9wdXAoe1xuXHRcdFx0XHRcdFx0Y2xvc2VCdXR0b246IGZhbHNlLFxuXHRcdFx0XHRcdFx0YW5jaG9yOiAndG9wJyxcblx0XHRcdFx0XHRcdGNsb3NlT25DbGljazogZmFsc2UsXG5cdFx0XHRcdFx0XHRvZmZzZXQ6IFswLCA1XSxcblx0XHRcdFx0ICB9KVxuXHRcdFx0XHRcdFx0LnNldExuZ0xhdChbdGhpcy5wcm9wcy5wb3NpdGlvbl9wb3B1cC5sbmcsIHRoaXMucHJvcHMucG9zaXRpb25fcG9wdXAubGF0XSlcblx0XHRcdFx0XHRcdC5zZXRIVE1MKFxuXHRcdFx0XHRcdFx0XHRSZWFjdERPTVNlcnZlci5yZW5kZXJUb1N0YXRpY01hcmt1cChcblx0XHRcdFx0XHRcdFx0XHQ8TWVudVJpZ2h0Q2xpY2tcblx0XHRcdFx0XHRcdFx0XHRcdGRpc3BhdGNoPXt0aGlzLnByb3BzLmRpc3BhdGNofVxuXHRcdFx0XHRcdFx0XHRcdFx0cG9zaXRpb25fcG9wdXA9e3RoaXMucHJvcHMucG9zaXRpb25fcG9wdXB9XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlX3BvcHVwPXt0aGlzLnByb3BzLnR5cGVfcG9wdXB9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0LmFkZFRvKHRoaXMubWFwKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5wb3B1cFJpZ2h0Q2xpY2sgJiYgIXRoaXMucHJvcHMucG9wdXBfdmlzaWJsZSkge1xuXHRcdFx0dGhpcy5wb3B1cFJpZ2h0Q2xpY2sucmVtb3ZlKCk7XG5cdFx0fVxuXG5cdFx0aWYgKCFlcXVhbChwcmV2UHJvcHMuY3VycmVudF9wbGFjZSwgdGhpcy5wcm9wcy5jdXJyZW50X3BsYWNlKSAmJiB0aGlzLnByb3BzLmN1cnJlbnRfcGxhY2UpIHtcblx0XHRcdGNvbnN0IHNlbGVjdGVkUGxhY2UgPSB0aGlzLnByb3BzLmN1cnJlbnRfcGxhY2U7XG5cblx0XHRcdHRoaXMubWFwLmZseVRvKHtcblx0XHRcdFx0Y2VudGVyOiBbc2VsZWN0ZWRQbGFjZS5nZW9tZXRyeS5sb2NhdGlvbi5sbmcsIHNlbGVjdGVkUGxhY2UuZ2VvbWV0cnkubG9jYXRpb24ubGF0XSxcblx0XHRcdFx0em9vbTogMTUsXG5cdFx0XHRcdHNwZWVkOiAxLjUsXG5cdFx0XHRcdGN1cnZlOiAxLFxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLnByb3BzLmRpc3BhdGNoKHNldENvbGxhcHNlZEluZm9Cb3hBY3Rpb24oZmFsc2UpKTtcblx0XHRcdHRoaXMucHJvcHMuZGlzcGF0Y2goc2V0UmVkTWFya2VyQWN0aW9uKGZhbHNlKSk7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0Ym90dG9tSW5mb1Zpc2libGU6IGZhbHNlLFxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYgKCFlcXVhbChwcmV2UHJvcHMudmlld3BvcnQsIHRoaXMucHJvcHMudmlld3BvcnQpICYmIHRoaXMucHJvcHMudmlld3BvcnQpIHtcblx0XHRcdHRoaXMubWFwLmZseVRvKHtcblx0XHRcdFx0Y2VudGVyOiBbdGhpcy5wcm9wcy52aWV3cG9ydC5sb25naXR1ZGUsIHRoaXMucHJvcHMudmlld3BvcnQubGF0aXR1ZGVdLFxuXHRcdFx0XHR6b29tOiB0aGlzLnByb3BzLnZpZXdwb3J0Lnpvb20sXG5cdFx0XHRcdHNwZWVkOiAyLFxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYgKCFlcXVhbChwcmV2UHJvcHMuYXJvdW5kX3BsYWNlX2NlbnRlciwgdGhpcy5wcm9wcy5hcm91bmRfcGxhY2VfY2VudGVyKSkge1xuXHRcdFx0dGhpcy5wcm9wcy5kaXNwYXRjaChzZXRSZWRNYXJrZXJBY3Rpb24oZmFsc2UpKTtcblx0XHR9XG5cblx0XHRpZiAoIWVxdWFsKHByZXZQcm9wcy5ib3hWaXNpYmxlLCB0aGlzLnByb3BzLmJveFZpc2libGUpICYmIHRoaXMucHJvcHMuYm94VmlzaWJsZSA9PT0gJ25hdmlnYXRpb24nKSB7XG5cdFx0XHR0aGlzLnJlbW92ZU1hcmtlclBvcHVwKCk7XG5cdFx0fVxuXG5cdFx0aWYgKCFlcXVhbChwcmV2UHJvcHMucmVzdWx0X3NlbGVjdCwgdGhpcy5wcm9wcy5yZXN1bHRfc2VsZWN0KSB8fCAhZXF1YWwocHJldlByb3BzLnJlc3VsdF9uYXZpZ2F0aW9uLCB0aGlzLnByb3BzLnJlc3VsdF9uYXZpZ2F0aW9uKSkge1xuXHRcdFx0Y29uc3QgeyByZXN1bHRfc2VsZWN0LCByZXN1bHRfbmF2aWdhdGlvbiwgYm94VmlzaWJsZSwgZnJvbV9wbGFjZSwgdG9fcGxhY2UgfSA9IHRoaXMucHJvcHM7XG5cdFx0XHRsZXQgZGFzaGVkTGluZUdlb0pTT04gPSBbXSxcblx0XHRcdFx0cG9seWxpbmVHZW9KU09OID0gW107XG5cdFx0XHR0aGlzLnJlc3VsdF9uYXZpZ2F0aW9uID0gW107XG5cblx0XHRcdGlmICgoYm94VmlzaWJsZSAhPT0gJ25hdmlnYXRpb24nICYmIGJveFZpc2libGUgIT09ICdpZnJhbWUnKSB8fCAhcmVzdWx0X25hdmlnYXRpb24pIHtcblx0XHRcdFx0Ly8gUmVtb3ZlIGNhYyBsYXllci9zb3VyY2Vcblx0XHRcdFx0aWYgKHRoaXMubWFwLmdldExheWVyKGByb3V0ZS1sYXllci1mYXN0ZXN0YCkpIHRoaXMubWFwLnJlbW92ZUxheWVyKGByb3V0ZS1sYXllci1mYXN0ZXN0YCk7XG5cdFx0XHRcdGlmICh0aGlzLm1hcC5nZXRMYXllcihgcm91dGUtbGF5ZXItc2hvcnRlc3RgKSkgdGhpcy5tYXAucmVtb3ZlTGF5ZXIoYHJvdXRlLWxheWVyLXNob3J0ZXN0YCk7XG5cdFx0XHRcdGlmICh0aGlzLm1hcC5nZXRMYXllcihgd2Fsay1sYXllci0wYCkpIHRoaXMubWFwLnJlbW92ZUxheWVyKGB3YWxrLWxheWVyLTBgKTtcblx0XHRcdFx0aWYgKHRoaXMubWFwLmdldExheWVyKGB3YWxrLWxheWVyLTFgKSkgdGhpcy5tYXAucmVtb3ZlTGF5ZXIoYHdhbGstbGF5ZXItMWApO1xuXG5cdFx0XHRcdGlmICh0aGlzLm1hcC5nZXRTb3VyY2UoYHJvdXRlLXNvdXJjZS1mYXN0ZXN0YCkpIHRoaXMubWFwLnJlbW92ZVNvdXJjZShgcm91dGUtc291cmNlLWZhc3Rlc3RgKTtcblx0XHRcdFx0aWYgKHRoaXMubWFwLmdldFNvdXJjZShgcm91dGUtc291cmNlLXNob3J0ZXN0YCkpIHRoaXMubWFwLnJlbW92ZVNvdXJjZShgcm91dGUtc291cmNlLXNob3J0ZXN0YCk7XG5cdFx0XHRcdGlmICh0aGlzLm1hcC5nZXRTb3VyY2UoYHdhbGstc291cmNlLTBgKSkgdGhpcy5tYXAucmVtb3ZlU291cmNlKGB3YWxrLXNvdXJjZS0wYCk7XG5cdFx0XHRcdGlmICh0aGlzLm1hcC5nZXRTb3VyY2UoYHdhbGstc291cmNlLTFgKSkgdGhpcy5tYXAucmVtb3ZlU291cmNlKGB3YWxrLXNvdXJjZS0xYCk7XG5cblx0XHRcdFx0dGhpcy5wb3B1cF9uYXZpZ2F0aW9uWzBdPy5yZW1vdmUoKTtcblx0XHRcdFx0dGhpcy5wb3B1cF9uYXZpZ2F0aW9uWzFdPy5yZW1vdmUoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmIChyZXN1bHRfbmF2aWdhdGlvbikge1xuXHRcdFx0XHRcdGxldCBkaXN0YW5jZSA9ICcnO1xuXHRcdFx0XHRcdGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndW5pdCcpID09PSAnS0lMT01FVEVSUycpIHtcblx0XHRcdFx0XHRcdGRpc3RhbmNlID0gYCR7KHJlc3VsdF9uYXZpZ2F0aW9uLmZhc3Rlc3RbMF0ubGVnc1swXS5kaXN0YW5jZS52YWx1ZSAvIDEwMDApLnRvRml4ZWQoMSl9IEtNYDtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1bml0JykgPT09ICdNSUxFUycpIHtcblx0XHRcdFx0XHRcdGRpc3RhbmNlID0gYCR7KChyZXN1bHRfbmF2aWdhdGlvbi5mYXN0ZXN0WzBdLmxlZ3NbMF0uZGlzdGFuY2UudmFsdWUgLyAxMDAwKSAqIE1pbGVfVHJhdmVsLk1JTEVTKS50b0ZpeGVkKDEpfSBE4bq3bWA7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGRpc3RhbmNlID0gYCR7KHJlc3VsdF9uYXZpZ2F0aW9uLmZhc3Rlc3RbMF0ubGVnc1swXS5kaXN0YW5jZS52YWx1ZSAvIDEwMDApLnRvRml4ZWQoMSl9IEtNYDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bGV0IGNvb3JkaW5hdGVPYmplY3QxID0ge307XG5cdFx0XHRcdFx0Y29vcmRpbmF0ZU9iamVjdDEuY29vcmRpbmF0ZXMgPSB0aGlzLmRlY29kZVBvbHlsaW5lKHJlc3VsdF9uYXZpZ2F0aW9uLmZhc3Rlc3RbMF0ub3ZlcnZpZXdfcG9seWxpbmUucG9pbnRzKTtcblx0XHRcdFx0XHRjb29yZGluYXRlT2JqZWN0MS50eXBlID0gJ0xpbmVTdHJpbmcnO1xuXHRcdFx0XHRcdHBvbHlsaW5lR2VvSlNPTi5wdXNoKGNvb3JkaW5hdGVPYmplY3QxKTtcblx0XHRcdFx0XHRwb2x5bGluZUdlb0pTT05bMF0ucm9hZFdheSA9ICdmYXN0ZXN0Jztcblx0XHRcdFx0XHRsZXQgY29vcmRpbmF0ZU9iamVjdDIgPSB7fTtcblx0XHRcdFx0XHRjb29yZGluYXRlT2JqZWN0Mi5jb29yZGluYXRlcyA9IHRoaXMuZGVjb2RlUG9seWxpbmUocmVzdWx0X25hdmlnYXRpb24uc2hvcnRlc3RbMF0ub3ZlcnZpZXdfcG9seWxpbmUucG9pbnRzKTtcblx0XHRcdFx0XHRjb29yZGluYXRlT2JqZWN0Mi50eXBlID0gJ0xpbmVTdHJpbmcnO1xuXHRcdFx0XHRcdHBvbHlsaW5lR2VvSlNPTi5wdXNoKGNvb3JkaW5hdGVPYmplY3QyKTtcblx0XHRcdFx0XHRwb2x5bGluZUdlb0pTT05bMV0ucm9hZFdheSA9ICdzaG9ydGVzdCc7XG5cblx0XHRcdFx0XHRkYXNoZWRMaW5lR2VvSlNPTi5wdXNoKHtcblx0XHRcdFx0XHRcdHR5cGU6ICdMaW5lU3RyaW5nJyxcblx0XHRcdFx0XHRcdGNvb3JkaW5hdGVzOiBbXG5cdFx0XHRcdFx0XHRcdFtwb2x5bGluZUdlb0pTT05bMF0uY29vcmRpbmF0ZXNbMF1bMF0sIHBvbHlsaW5lR2VvSlNPTlswXS5jb29yZGluYXRlc1swXVsxXV0sXG5cdFx0XHRcdFx0XHRcdFtmcm9tX3BsYWNlPy5nZW9tZXRyeS5sb2NhdGlvbi5sbmcsIGZyb21fcGxhY2U/Lmdlb21ldHJ5LmxvY2F0aW9uLmxhdF0sXG5cdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGRhc2hlZExpbmVHZW9KU09OLnB1c2goe1xuXHRcdFx0XHRcdFx0dHlwZTogJ0xpbmVTdHJpbmcnLFxuXHRcdFx0XHRcdFx0Y29vcmRpbmF0ZXM6IFtcblx0XHRcdFx0XHRcdFx0W3BvbHlsaW5lR2VvSlNPTlswXS5jb29yZGluYXRlc1twb2x5bGluZUdlb0pTT05bMF0uY29vcmRpbmF0ZXMubGVuZ3RoIC0gMV1bMF0sIHBvbHlsaW5lR2VvSlNPTlswXS5jb29yZGluYXRlc1twb2x5bGluZUdlb0pTT05bMF0uY29vcmRpbmF0ZXMubGVuZ3RoIC0gMV1bMV1dLFxuXHRcdFx0XHRcdFx0XHRbdG9fcGxhY2U/Lmdlb21ldHJ5LmxvY2F0aW9uLmxuZywgdG9fcGxhY2U/Lmdlb21ldHJ5LmxvY2F0aW9uLmxhdF0sXG5cdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0cG9seWxpbmVHZW9KU09OLm1hcCgoaXRlbSwgaSkgPT4ge1xuXHRcdFx0XHRcdFx0Ly8gTGF5ZXIgZGFuIGR1b25nXG5cdFx0XHRcdFx0XHRpZiAodGhpcy5tYXAuZ2V0TGF5ZXIoYHJvdXRlLWxheWVyLSR7aXRlbS5yb2FkV2F5fWApKSB0aGlzLm1hcC5yZW1vdmVMYXllcihgcm91dGUtbGF5ZXItJHtpdGVtLnJvYWRXYXl9YCk7XG5cdFx0XHRcdFx0XHRpZiAodGhpcy5tYXAuZ2V0U291cmNlKGByb3V0ZS1zb3VyY2UtJHtpdGVtLnJvYWRXYXl9YCkpIHRoaXMubWFwLnJlbW92ZVNvdXJjZShgcm91dGUtc291cmNlLSR7aXRlbS5yb2FkV2F5fWApO1xuXHRcdFx0XHRcdFx0dGhpcy5tYXAuYWRkU291cmNlKGByb3V0ZS1zb3VyY2UtJHtpdGVtLnJvYWRXYXl9YCwge1xuXHRcdFx0XHRcdFx0XHR0eXBlOiAnZ2VvanNvbicsXG5cdFx0XHRcdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnRmVhdHVyZScsXG5cdFx0XHRcdFx0XHRcdFx0cHJvcGVydGllczoge30sXG5cdFx0XHRcdFx0XHRcdFx0Z2VvbWV0cnk6IGl0ZW0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdHRoaXMubWFwLmFkZExheWVyKHtcblx0XHRcdFx0XHRcdFx0aWQ6IGByb3V0ZS1sYXllci0ke2l0ZW0ucm9hZFdheX1gLFxuXHRcdFx0XHRcdFx0XHR0eXBlOiAnbGluZScsXG5cdFx0XHRcdFx0XHRcdHNvdXJjZTogYHJvdXRlLXNvdXJjZS0ke2l0ZW0ucm9hZFdheX1gLFxuXHRcdFx0XHRcdFx0XHRsYXlvdXQ6IHtcblx0XHRcdFx0XHRcdFx0XHQnbGluZS1qb2luJzogJ3JvdW5kJyxcblx0XHRcdFx0XHRcdFx0XHQnbGluZS1jYXAnOiAncm91bmQnLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRwYWludDoge1xuXHRcdFx0XHRcdFx0XHRcdCdsaW5lLWNvbG9yJzogJ3JnYigyNCwgMTQ0LCAyNTUpJyxcblx0XHRcdFx0XHRcdFx0XHQnbGluZS13aWR0aCc6IDcsXG5cdFx0XHRcdFx0XHRcdFx0J2xpbmUtb3BhY2l0eSc6IGl0ZW0ucm9hZFdheSA9PT0gcmVzdWx0X3NlbGVjdCA/IDEgOiAwLjUsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdC8vIExheWVyIGRpIGJvXG5cblx0XHRcdFx0XHRcdGlmICh0aGlzLm1hcC5nZXRMYXllcihgd2Fsay1sYXllci0ke2l9YCkpIHRoaXMubWFwLnJlbW92ZUxheWVyKGB3YWxrLWxheWVyLSR7aX1gKTtcblx0XHRcdFx0XHRcdGlmICh0aGlzLm1hcC5nZXRTb3VyY2UoYHdhbGstc291cmNlLSR7aX1gKSkgdGhpcy5tYXAucmVtb3ZlU291cmNlKGB3YWxrLXNvdXJjZS0ke2l9YCk7XG5cdFx0XHRcdFx0XHR0aGlzLm1hcC5hZGRTb3VyY2UoYHdhbGstc291cmNlLSR7aX1gLCB7XG5cdFx0XHRcdFx0XHRcdHR5cGU6ICdnZW9qc29uJyxcblx0XHRcdFx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdGZWF0dXJlJyxcblx0XHRcdFx0XHRcdFx0XHRwcm9wZXJ0aWVzOiB7fSxcblx0XHRcdFx0XHRcdFx0XHRnZW9tZXRyeTogZGFzaGVkTGluZUdlb0pTT05baV0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdHRoaXMubWFwLmFkZExheWVyKHtcblx0XHRcdFx0XHRcdFx0aWQ6IGB3YWxrLWxheWVyLSR7aX1gLFxuXHRcdFx0XHRcdFx0XHR0eXBlOiAnbGluZScsXG5cdFx0XHRcdFx0XHRcdHNvdXJjZTogYHdhbGstc291cmNlLSR7aX1gLFxuXHRcdFx0XHRcdFx0XHRsYXlvdXQ6IHtcblx0XHRcdFx0XHRcdFx0XHQnbGluZS1qb2luJzogJ3JvdW5kJyxcblx0XHRcdFx0XHRcdFx0XHQnbGluZS1jYXAnOiAncm91bmQnLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRwYWludDoge1xuXHRcdFx0XHRcdFx0XHRcdCdsaW5lLWNvbG9yJzogJ3JnYigxMzMsIDEzNSwgMTI2KScsXG5cdFx0XHRcdFx0XHRcdFx0J2xpbmUtb3BhY2l0eSc6IDEsXG5cdFx0XHRcdFx0XHRcdFx0J2xpbmUtd2lkdGgnOiA2LFxuXHRcdFx0XHRcdFx0XHRcdCdsaW5lLWRhc2hhcnJheSc6IFswLjIsIDJdLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHQvLyBBZGQgUG9wdXAgaGllbiBrZXQgcXVhXG5cblx0XHRcdFx0XHRcdGlmICh0aGlzLnBvcHVwX25hdmlnYXRpb25baV0pIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5wb3B1cF9uYXZpZ2F0aW9uW2ldPy5yZW1vdmUoKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5wb3B1cF9uYXZpZ2F0aW9uW2ldID0gbnVsbDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHRoaXMucG9wdXBfbmF2aWdhdGlvbltpXSA9IG5ldyBtYXBsaWJyZWdsLlBvcHVwKHtcblx0XHRcdFx0XHRcdFx0Y2xvc2VCdXR0b246IGZhbHNlLFxuXHRcdFx0XHRcdFx0XHRhbmNob3I6ICd0b3AnLFxuXHRcdFx0XHRcdFx0XHRjbG9zZU9uQ2xpY2s6IGZhbHNlLFxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU6IGl0ZW0ucm9hZFdheSA9PT0gcmVzdWx0X3NlbGVjdCA/ICdwb3B1cC16LWluZGV4MScgOiAncG9wdXAtei1pbmRleDInLFxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0LnNldExuZ0xhdChbaSA9PT0gMCA/IGl0ZW0uY29vcmRpbmF0ZXNbTWF0aC50cnVuYygwLjc1ICogaXRlbS5jb29yZGluYXRlcy5sZW5ndGgpXVswXSA6IGl0ZW0uY29vcmRpbmF0ZXNbTWF0aC50cnVuYygwLjI1ICogaXRlbS5jb29yZGluYXRlcy5sZW5ndGgpXVswXSwgaSA9PT0gMCA/IGl0ZW0uY29vcmRpbmF0ZXNbTWF0aC50cnVuYyhpdGVtLmNvb3JkaW5hdGVzLmxlbmd0aCAqIDAuNzUpXVsxXSA6IGl0ZW0uY29vcmRpbmF0ZXNbTWF0aC50cnVuYyhpdGVtLmNvb3JkaW5hdGVzLmxlbmd0aCAqIDAuMjUpXVsxXV0pXG5cdFx0XHRcdFx0XHRcdC5zZXRIVE1MKFxuXHRcdFx0XHRcdFx0XHRcdFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RhdGljTWFya3VwKFxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ0b29sdGlwTmF2aWdhdGlvblwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlkPXtgcG9wdXAtJHtpdGVtLnJvYWRXYXl9YH0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwPntkaXN0YW5jZX08L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwPntyZXN1bHRfbmF2aWdhdGlvbltpdGVtLnJvYWRXYXldWzBdLmxlZ3NbMF0uZHVyYXRpb24udGV4dH08L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0LnNldE1heFdpZHRoKCczMDBweCcpXG5cdFx0XHRcdFx0XHRcdC5hZGRUbyh0aGlzLm1hcCk7XG5cdFx0XHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcG9wdXAtJHtpdGVtLnJvYWRXYXl9YCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMuZGlzcGF0Y2goc2VsZWN0UmVzdWx0QWN0aW9uKGl0ZW0ucm9hZFdheSkpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRjb25zdCBub3JtYWxpemVCb3VuZHMgPSAoYm91bmRzKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IFtmaXJzdFBvaW50LCBzZWNvbmRQb2ludF0gPSBib3VuZHM7XG5cblx0XHRcdFx0XHRcdFx0Y29uc3QgbWluTGF0ID0gTWF0aC5taW4oZmlyc3RQb2ludFsxXSwgc2Vjb25kUG9pbnRbMV0pO1xuXHRcdFx0XHRcdFx0XHRjb25zdCBtYXhMYXQgPSBNYXRoLm1heChmaXJzdFBvaW50WzFdLCBzZWNvbmRQb2ludFsxXSk7XG5cblx0XHRcdFx0XHRcdFx0Y29uc3QgbWluTG5nID0gTWF0aC5taW4oZmlyc3RQb2ludFswXSwgc2Vjb25kUG9pbnRbMF0pO1xuXHRcdFx0XHRcdFx0XHRjb25zdCBtYXhMbmcgPSBNYXRoLm1heChmaXJzdFBvaW50WzBdLCBzZWNvbmRQb2ludFswXSk7XG5cblx0XHRcdFx0XHRcdFx0cmV0dXJuIFtcblx0XHRcdFx0XHRcdFx0XHRbbWluTG5nLCBtaW5MYXRdLFxuXHRcdFx0XHRcdFx0XHRcdFttYXhMbmcsIG1heExhdF0sXG5cdFx0XHRcdFx0XHRcdF07XG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0Y29uc3QgYm91bmQgPSBub3JtYWxpemVCb3VuZHMoW2l0ZW0uY29vcmRpbmF0ZXNbMF0sIGl0ZW0uY29vcmRpbmF0ZXNbaXRlbS5jb29yZGluYXRlcy5sZW5ndGggLSAxXV0pO1xuXHRcdFx0XHRcdFx0aWYgKGlzTW9iaWxlKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMubmF2aWdhdGlvblZpZXcgPSB0aGlzLm1hcC5jYW1lcmFGb3JCb3VuZHMoYm91bmQsIHtcblx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiB7IHRvcDogMTAsIGJvdHRvbTogMjUsIGxlZnQ6IDI0LCByaWdodDogMjQgfSxcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR0aGlzLm5hdmlnYXRpb25WaWV3ID0gdGhpcy5tYXAuY2FtZXJhRm9yQm91bmRzKGJvdW5kLCB7XG5cdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogeyB0b3A6IDQwLCBib3R0b206IDQwLCBsZWZ0OiAyMDAsIHJpZ2h0OiA0MCB9LFxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdHRoaXMudmlldyA9IHtcblx0XHRcdFx0XHRcdGxhdGl0dWRlOiB0aGlzLm5hdmlnYXRpb25WaWV3LmNlbnRlci5sYXQsXG5cdFx0XHRcdFx0XHRsb25naXR1ZGU6IHRoaXMubmF2aWdhdGlvblZpZXcuY2VudGVyLmxuZyxcblx0XHRcdFx0XHRcdHpvb206IHRoaXMubmF2aWdhdGlvblZpZXcuem9vbSxcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMucHJvcHMuZGlzcGF0Y2goc2V0TWFwVmlld3BvcnRBY3Rpb24odGhpcy52aWV3KSk7XG5cdFx0fVxuXHRcdGlmICghZXF1YWwocHJldlByb3BzLmZyb21fcGxhY2UsIHRoaXMucHJvcHMuZnJvbV9wbGFjZSkpIHtcblx0XHRcdGNvbnN0IHBsYWNlID0gdGhpcy5wcm9wcy5mcm9tX3BsYWNlO1xuXHRcdFx0aWYgKHBsYWNlKSB7XG5cdFx0XHRcdGNvbnN0IHBvcHVwID0gbmV3IG1hcGxpYnJlZ2wuUG9wdXAoe1xuXHRcdFx0XHRcdG9mZnNldDogWzAsIC0xOF0sXG5cdFx0XHRcdFx0Y2xhc3NOYW1lOiAndG9vbHRpcC1tYXJrZXInLFxuXHRcdFx0XHRcdGNsb3NlQnV0dG9uOiBmYWxzZSxcblx0XHRcdFx0fSlcblx0XHRcdFx0XHQuc2V0SFRNTChgPGRpdiBjbGFzcz1cImFudC10b29sdGlwLWlubmVyIHRvb2x0aXAtaW5mby1sb2NhdGlvblwiPiR7cGxhY2UubmFtZX08L2Rpdj5gKVxuXHRcdFx0XHRcdC5zZXRNYXhXaWR0aCgnMTUwcHgnKTtcblx0XHRcdFx0aWYgKHRoaXMuc3RhcnRfbWFya2VyKSB7XG5cdFx0XHRcdFx0dGhpcy5zdGFydF9tYXJrZXIgPSB0aGlzLnN0YXJ0X21hcmtlci5zZXRMbmdMYXQocGxhY2UuZ2VvbWV0cnkubG9jYXRpb24pLnNldFBvcHVwKHBvcHVwKS5hZGRUbyh0aGlzLm1hcCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29uc3QgbWFya2VyX3N0YXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdFx0bWFya2VyX3N0YXJ0LmlubmVySFRNTCA9IFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RhdGljTWFya3VwKFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYXJrZXItc3RhcnRcIj5cblx0XHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRcdHNyYz17aW1hZ2VzLmJ1dHRvbn1cblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyB3aWR0aDogMTIgfX1cblx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJcIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR0aGlzLnN0YXJ0X21hcmtlciA9IG5ldyBtYXBsaWJyZWdsLk1hcmtlcih7XG5cdFx0XHRcdFx0XHRhbmNob3I6ICdjZW50ZXInLFxuXHRcdFx0XHRcdFx0ZWxlbWVudDogbWFya2VyX3N0YXJ0LFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQuc2V0UG9wdXAocG9wdXApXG5cdFx0XHRcdFx0XHQuc2V0TG5nTGF0KHBsYWNlLmdlb21ldHJ5LmxvY2F0aW9uKVxuXHRcdFx0XHRcdFx0LmFkZFRvKHRoaXMubWFwKTtcblx0XHRcdFx0XHR0aGlzLnN0YXJ0X21hcmtlci5nZXRFbGVtZW50KCkuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdGNvbnN0IGxuZ0xhdCA9IHRoaXMuc3RhcnRfbWFya2VyLmdldExuZ0xhdCgpO1xuXHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5kaXNwYXRjaChzZXRQb3B1cFJpZ2h0Q2xpY2sodHJ1ZSwgbG5nTGF0LCAncG9wdXBGcm9tUGxhY2UnKSk7XG5cdFx0XHRcdFx0XHR0aGlzLnByb3BzLmRpc3BhdGNoKHNldFJlZE1hcmtlckFjdGlvbihmYWxzZSkpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHRoaXMuc3RhcnRfbWFya2VyLmdldEVsZW1lbnQoKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0XHRcdGlmIChwb3B1cC5pc09wZW4oKSkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnN0YXJ0X21hcmtlci50b2dnbGVQb3B1cCgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHRoaXMuc3RhcnRfbWFya2VyLmdldEVsZW1lbnQoKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4gdGhpcy5zdGFydF9tYXJrZXIudG9nZ2xlUG9wdXAoKSk7XG5cdFx0XHRcdFx0dGhpcy5zdGFydF9tYXJrZXIuZ2V0RWxlbWVudCgpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB0aGlzLnN0YXJ0X21hcmtlci50b2dnbGVQb3B1cCgpKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKGVxdWFsKHRoaXMuc3RhcnRfbWFya2VyLmdldExuZ0xhdCgpLCB0aGlzLnByb3BzLnBvc2l0aW9uX3BvcHVwKSkge1xuXHRcdFx0XHRcdHRoaXMucHJvcHMuZGlzcGF0Y2goc2V0UG9wdXBSaWdodENsaWNrKGZhbHNlKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGVxdWFsKHByZXZQcm9wcy5mcm9tX3BsYWNlPy5wbGFjZV9pZCwgdGhpcy5zdGF0ZS5wbGFjZU1vdXNlQ2xpY2s/LnBsYWNlX2lkKSkge1xuXHRcdFx0XHRcdHRoaXMuY2hhbmdlVmlzaWJsZUJvdHRvbUluZm8oZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuY2hhbmdlVmlzaWJsZUJvdHRvbUluZm8oZmFsc2UpO1xuXHRcdFx0XHR0aGlzLnN0YXJ0X21hcmtlciA/IHRoaXMuc3RhcnRfbWFya2VyLnJlbW92ZSgpIDogbnVsbDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoIWVxdWFsKHByZXZQcm9wcy50b19wbGFjZSwgdGhpcy5wcm9wcy50b19wbGFjZSkpIHtcblx0XHRcdGNvbnN0IHBsYWNlID0gdGhpcy5wcm9wcy50b19wbGFjZTtcblx0XHRcdGlmIChwbGFjZSkge1xuXHRcdFx0XHRjb25zdCBwb3B1cCA9IG5ldyBtYXBsaWJyZWdsLlBvcHVwKHtcblx0XHRcdFx0XHRvZmZzZXQ6IFswLCAtMThdLFxuXHRcdFx0XHRcdGNsYXNzTmFtZTogJ3Rvb2x0aXAtbWFya2VyJyxcblx0XHRcdFx0XHRjbG9zZUJ1dHRvbjogZmFsc2UsXG5cdFx0XHRcdH0pXG5cdFx0XHRcdFx0LnNldEhUTUwoYDxkaXYgY2xhc3M9XCJhbnQtdG9vbHRpcC1pbm5lciB0b29sdGlwLWluZm8tbG9jYXRpb25cIj4ke3BsYWNlLm5hbWV9PC9kaXY+YClcblx0XHRcdFx0XHQuc2V0TWF4V2lkdGgoJzE1MHB4Jyk7XG5cdFx0XHRcdGlmICh0aGlzLmVuZF9tYXJrZXIpIHtcblx0XHRcdFx0XHR0aGlzLnRvX3BsYWNlID0gdGhpcy5lbmRfbWFya2VyLnNldFBvcHVwKHBvcHVwKS5zZXRMbmdMYXQocGxhY2UuZ2VvbWV0cnkubG9jYXRpb24pLmFkZFRvKHRoaXMubWFwKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb25zdCBtYXJrZXJfZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdFx0bWFya2VyX2VuZC5pbm5lckhUTUwgPSBSZWFjdERPTVNlcnZlci5yZW5kZXJUb1N0YXRpY01hcmt1cChcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWFya2VyLWVuZFwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0XHRcdHNyYz17aW1hZ2VzLm1hcmtlcn1cblx0XHRcdFx0XHRcdFx0XHRcdGFsdD1cIlwiXG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdHRoaXMuZW5kX21hcmtlciA9IG5ldyBtYXBsaWJyZWdsLk1hcmtlcih7XG5cdFx0XHRcdFx0XHRhbmNob3I6ICdjZW50ZXInLFxuXHRcdFx0XHRcdFx0ZWxlbWVudDogbWFya2VyX2VuZCxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0LnNldFBvcHVwKHBvcHVwKVxuXHRcdFx0XHRcdFx0LnNldExuZ0xhdChwbGFjZS5nZW9tZXRyeS5sb2NhdGlvbilcblx0XHRcdFx0XHRcdC5hZGRUbyh0aGlzLm1hcCk7XG5cdFx0XHRcdFx0dGhpcy5lbmRfbWFya2VyLmdldEVsZW1lbnQoKS5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIChlKSA9PiB7XG5cdFx0XHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0Y29uc3QgbG5nTGF0ID0gdGhpcy5lbmRfbWFya2VyLmdldExuZ0xhdCgpO1xuXHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5kaXNwYXRjaChzZXRQb3B1cFJpZ2h0Q2xpY2sodHJ1ZSwgbG5nTGF0LCAncG9wdXBUb1BsYWNlJykpO1xuXHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5kaXNwYXRjaChzZXRSZWRNYXJrZXJBY3Rpb24oZmFsc2UpKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR0aGlzLmVuZF9tYXJrZXIuZ2V0RWxlbWVudCgpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKHBvcHVwLmlzT3BlbigpKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuZW5kX21hcmtlci50b2dnbGVQb3B1cCgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHRoaXMuZW5kX21hcmtlci5nZXRFbGVtZW50KCkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHRoaXMuZW5kX21hcmtlci50b2dnbGVQb3B1cCgpKTtcblx0XHRcdFx0XHR0aGlzLmVuZF9tYXJrZXIuZ2V0RWxlbWVudCgpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB0aGlzLmVuZF9tYXJrZXIudG9nZ2xlUG9wdXAoKSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmIChlcXVhbCh0aGlzLnN0YXJ0X21hcmtlcj8uZ2V0TG5nTGF0KCksIHRoaXMucHJvcHMucG9zaXRpb25fcG9wdXApKSB7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5kaXNwYXRjaChzZXRQb3B1cFJpZ2h0Q2xpY2soZmFsc2UpKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChlcXVhbChwcmV2UHJvcHMudG9fcGxhY2U/LnBsYWNlX2lkLCB0aGlzLnN0YXRlLnBsYWNlTW91c2VDbGljaz8ucGxhY2VfaWQpKSB7XG5cdFx0XHRcdFx0dGhpcy5jaGFuZ2VWaXNpYmxlQm90dG9tSW5mbyhmYWxzZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5lbmRfbWFya2VyID8gdGhpcy5lbmRfbWFya2VyLnJlbW92ZSgpIDogbnVsbDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoIWVxdWFsKHByZXZQcm9wcy5hcm91bmRfcGxhY2VzLCB0aGlzLnByb3BzLmFyb3VuZF9wbGFjZXMpIHx8ICFlcXVhbChwcmV2UHJvcHMuYXJvdW5kX3BsYWNlX3NlbGVjdCwgdGhpcy5wcm9wcy5hcm91bmRfcGxhY2Vfc2VsZWN0KSkge1xuXHRcdFx0aWYgKHRoaXMubGlzdF9tYXJrZXJfYXJvdW5kPy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHRoaXMubGlzdF9tYXJrZXJfYXJvdW5kLmZvckVhY2goKGl0ZW0pID0+IHtcblx0XHRcdFx0XHRpdGVtLnJlbW92ZSgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0dGhpcy5saXN0X21hcmtlcl9hcm91bmQgPSBbXTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHsgYXJvdW5kX3BsYWNlcywgYXJvdW5kX3BsYWNlX2NlbnRlciB9ID0gdGhpcy5wcm9wcztcblx0XHRcdGlmIChhcm91bmRfcGxhY2VzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0dGhpcy5saXN0X21hcmtlcl9hcm91bmQgPSBbXTtcblx0XHRcdFx0bGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdGVsLmlubmVySFRNTCA9IFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RhdGljTWFya3VwKFxuXHRcdFx0XHRcdDxNYXJrZXJcblx0XHRcdFx0XHRcdGlkPVwibWFya2VyLWNlbnRlclwiXG5cdFx0XHRcdFx0XHR0eXBlPVwiY2VudGVyXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpO1xuXHRcdFx0XHR0aGlzLmxpc3RfbWFya2VyX2Fyb3VuZFswXSA9IG5ldyBtYXBsaWJyZWdsLk1hcmtlcihlbCwge1xuXHRcdFx0XHRcdGFuY2hvcjogJ2JvdHRvbScsXG5cdFx0XHRcdH0pXG5cdFx0XHRcdFx0LnNldFBvcHVwKFxuXHRcdFx0XHRcdFx0bmV3IG1hcGxpYnJlZ2wuUG9wdXAoe1xuXHRcdFx0XHRcdFx0XHRvZmZzZXQ6IFswLCAtMzJdLFxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU6ICd0b29sdGlwLW1hcmtlcicsXG5cdFx0XHRcdFx0XHRcdGNsb3NlQnV0dG9uOiBmYWxzZSxcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdC5zZXRIVE1MKGA8ZGl2IGNsYXNzPVwiYW50LXRvb2x0aXAtaW5uZXIgdG9vbHRpcC1pbmZvLWxvY2F0aW9uXCI+JHthcm91bmRfcGxhY2VfY2VudGVyLm5hbWV9PC9kaXY+YClcblx0XHRcdFx0XHRcdFx0LnNldE1heFdpZHRoKCcxNTBweCcpXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHRcdC5zZXRMbmdMYXQoYXJvdW5kX3BsYWNlX2NlbnRlci5nZW9tZXRyeS5sb2NhdGlvbilcblx0XHRcdFx0XHQuYWRkVG8odGhpcy5tYXApO1xuXHRcdFx0XHRjb25zdCBtYXJrZXJDZW50ZXJEaXYgPSB0aGlzLmxpc3RfbWFya2VyX2Fyb3VuZFswXS5nZXRFbGVtZW50KCk7XG5cblx0XHRcdFx0bWFya2VyQ2VudGVyRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuX3NlbGVjdEFyb3VuZFBsYWNlKCdjZW50ZXInLCBhcm91bmRfcGxhY2VfY2VudGVyKTtcblx0XHRcdFx0XHR0aGlzLnByb3BzLmRpc3BhdGNoKHNldFJlZE1hcmtlckFjdGlvbihmYWxzZSkpO1xuXHRcdFx0XHRcdGlmICh0aGlzLmxpc3RfbWFya2VyX2Fyb3VuZFswXS5nZXRQb3B1cCgpLmlzT3BlbigpKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmxpc3RfbWFya2VyX2Fyb3VuZFswXS50b2dnbGVQb3B1cCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0bWFya2VyQ2VudGVyRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgKGUpID0+IHtcblx0XHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHR0aGlzLnByb3BzLmRpc3BhdGNoKHNldFJlZE1hcmtlckFjdGlvbihmYWxzZSkpO1xuXHRcdFx0XHRcdHRoaXMucHJvcHMuZGlzcGF0Y2goc2V0UG9wdXBSaWdodENsaWNrKHRydWUsIGFyb3VuZF9wbGFjZV9jZW50ZXIuZ2VvbWV0cnkubG9jYXRpb24sICdub3JtYWwnKSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdG1hcmtlckNlbnRlckRpdi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4gdGhpcy5saXN0X21hcmtlcl9hcm91bmRbMF0udG9nZ2xlUG9wdXAoKSk7XG5cdFx0XHRcdG1hcmtlckNlbnRlckRpdi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4gdGhpcy5saXN0X21hcmtlcl9hcm91bmRbMF0udG9nZ2xlUG9wdXAoKSk7XG5cblx0XHRcdFx0YXJvdW5kX3BsYWNlcy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgcG9wdXAgPSBuZXcgbWFwbGlicmVnbC5Qb3B1cCh7XG5cdFx0XHRcdFx0XHRvZmZzZXQ6IFswLCAtMzJdLFxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lOiAndG9vbHRpcC1tYXJrZXInLFxuXHRcdFx0XHRcdFx0Y2xvc2VCdXR0b246IGZhbHNlLFxuXHRcdFx0XHRcdFx0YW5jaG9yOiAnYm90dG9tJyxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0LnNldEhUTUwoYDxkaXYgY2xhc3M9XCJhbnQtdG9vbHRpcC1pbm5lciB0b29sdGlwLWluZm8tbG9jYXRpb25cIj4ke2l0ZW0ubmFtZX08L2Rpdj5gKVxuXHRcdFx0XHRcdFx0LnNldE1heFdpZHRoKCcxNTBweCcpO1xuXHRcdFx0XHRcdGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdFx0ZWwuaW5uZXJIVE1MID0gUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdGF0aWNNYXJrdXAoXG5cdFx0XHRcdFx0XHQ8TWFya2VyXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJhcm91bmRcIlxuXHRcdFx0XHRcdFx0XHRwbGFjZT17aXRlbX1cblx0XHRcdFx0XHRcdFx0cGxhY2Vfc2VsZWN0PXt0aGlzLnByb3BzLmFyb3VuZF9wbGFjZV9zZWxlY3R9XG5cdFx0XHRcdFx0XHRcdGlkPXtgbWFya2VyLWFyb3VuZC0ke2l9YH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR0aGlzLmxpc3RfbWFya2VyX2Fyb3VuZC5wdXNoKFxuXHRcdFx0XHRcdFx0bmV3IG1hcGxpYnJlZ2wuTWFya2VyKGVsLCB7IGFuY2hvcjogJ2JvdHRvbScgfSlcblx0XHRcdFx0XHRcdFx0LnNldFBvcHVwKHBvcHVwKVxuXHRcdFx0XHRcdFx0XHQuc2V0TG5nTGF0KFtpdGVtLmxuZ19sYXRbMF0gKiAxLCBpdGVtLmxuZ19sYXRbMV0gKiAxXSlcblx0XHRcdFx0XHRcdFx0LmFkZFRvKHRoaXMubWFwKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0Y29uc3QgbWFya2VyRGl2ID0gdGhpcy5saXN0X21hcmtlcl9hcm91bmRbaSArIDFdLmdldEVsZW1lbnQoKTtcblxuXHRcdFx0XHRcdG1hcmtlckRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5kaXNwYXRjaChzZXRSZWRNYXJrZXJBY3Rpb24oZmFsc2UpKTtcblx0XHRcdFx0XHRcdHRoaXMuX3NlbGVjdEFyb3VuZFBsYWNlKCdhcm91bmQnLCBpdGVtKTtcblx0XHRcdFx0XHRcdGlmIChwb3B1cC5pc09wZW4oKSkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLmxpc3RfbWFya2VyX2Fyb3VuZFtpICsgMV0udG9nZ2xlUG9wdXAoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdG1hcmtlckRpdi5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIChlKSA9PiB7XG5cdFx0XHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5kaXNwYXRjaChzZXRQb3B1cFJpZ2h0Q2xpY2sodHJ1ZSwgeyBsbmc6IGl0ZW0ubG5nX2xhdFswXSAqIDEsIGxhdDogaXRlbS5sbmdfbGF0WzFdICogMSB9LCAnYXJvdW5kJykpO1xuXHRcdFx0XHRcdFx0dGhpcy5wcm9wcy5kaXNwYXRjaChzZXRSZWRNYXJrZXJBY3Rpb24oZmFsc2UpKTtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdG1hcmtlckRpdi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4gdGhpcy5saXN0X21hcmtlcl9hcm91bmRbaSArIDFdLnRvZ2dsZVBvcHVwKCkpO1xuXHRcdFx0XHRcdG1hcmtlckRpdi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4gdGhpcy5saXN0X21hcmtlcl9hcm91bmRbaSArIDFdLnRvZ2dsZVBvcHVwKCkpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAodGhpcy5wcm9wcy5ib3hWaXNpYmxlID09PSAnaW5mbycgJiYgdGhpcy5wcm9wcy5jdXJyZW50X3BsYWNlKSB7XG5cdFx0XHRpZiAoIXRoaXMubWFya2VyQ3VycmVudFBsYWNlKSB7XG5cdFx0XHRcdGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdGVsLmlubmVySFRNTCA9IFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RhdGljTWFya3VwKFxuXHRcdFx0XHRcdC8vIDxNYXJrZXIgdHlwZT1cIm5vcm1hbFwiIC8+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYXJrZXItaGlzdG9yaWVzXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0c3JjPXtpbWFnZXMubWFya2VyfVxuXHRcdFx0XHRcdFx0XHRcdGFsdD1cIlwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KTtcblx0XHRcdFx0Ly8gTWFya2VyIGluZm9cblx0XHRcdFx0dGhpcy5tYXJrZXJDdXJyZW50UGxhY2UgPSBuZXcgbWFwbGlicmVnbC5NYXJrZXIoe1xuXHRcdFx0XHRcdGFuY2hvcjogJ2JvdHRvbScsXG5cdFx0XHRcdFx0ZWxlbWVudDogZWwsXG5cdFx0XHRcdH0pXG5cdFx0XHRcdFx0LnNldExuZ0xhdCh0aGlzLnByb3BzLmN1cnJlbnRfcGxhY2U/Lmdlb21ldHJ5Py5sb2NhdGlvbilcblx0XHRcdFx0XHQuYWRkVG8odGhpcy5tYXApO1xuXHRcdFx0XHR0aGlzLm1hcmtlckN1cnJlbnRQbGFjZS5nZXRFbGVtZW50KCkuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCAoZSkgPT4ge1xuXHRcdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdGNvbnN0IGxuZ0xhdCA9IHRoaXMubWFya2VyQ3VycmVudFBsYWNlLmdldExuZ0xhdCgpO1xuXHRcdFx0XHRcdHRoaXMucHJvcHMuZGlzcGF0Y2goc2V0UG9wdXBSaWdodENsaWNrKHRydWUsIGxuZ0xhdCwgJ3BvcHVwQ3VycmVudFBsYWNlJykpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMubWFya2VyQ3VycmVudFBsYWNlLnNldExuZ0xhdCh0aGlzLnByb3BzLmN1cnJlbnRfcGxhY2UuZ2VvbWV0cnkubG9jYXRpb24pLmFkZFRvKHRoaXMubWFwKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAodGhpcy5wcm9wcy5ib3hWaXNpYmxlICE9PSAnaW5mbycgJiYgdGhpcy5tYXJrZXJDdXJyZW50UGxhY2UpIHtcblx0XHRcdHRoaXMubWFya2VyQ3VycmVudFBsYWNlLnJlbW92ZSgpO1xuXHRcdFx0dGhpcy5tYXJrZXJDdXJyZW50UGxhY2UgPSBudWxsO1xuXHRcdH1cblx0XHRpZiAodGhpcy5wcm9wcy5ib3hWaXNpYmxlID09PSAnZGV0YWlsc3Jlc3RhdXJhbnQnICYmIHRoaXMucHJvcHMucmVzdGF1cmFudERhdGEpIHtcblx0XHRcdGlmICh0aGlzLnByb3BzLnJlc3RhdXJhbnREYXRhLmxlbmd0aCAhPT0gMCkge1xuXHRcdFx0XHRmb3IgKGxldCBpdGVtIG9mIHRoaXMucHJvcHMucmVzdGF1cmFudERhdGEpIHtcblx0XHRcdFx0XHRjb25zdCBtYXJrZXJfcmVzdGF1cmFudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0XHRcdG1hcmtlcl9yZXN0YXVyYW50LmlubmVySFRNTCA9IFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RhdGljTWFya3VwKFxuXHRcdFx0XHRcdFx0Ly8gPE1hcmtlck5hdmlnYXRpb24gaWQ9XCJlbmQtbWFya2VyXCIgdHlwZT1cImhpc3Rvcmllc1wiIC8+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1hcmtlci1oaXN0b3JpZXNcIj5cblx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0XHRzcmM9e2ltYWdlcy5tYXJrZXJ9XG5cdFx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJcIlxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR0aGlzLnJlc3RhdXJhbnRfbWFya2VyID0gbmV3IG1hcGxpYnJlZ2wuTWFya2VyKHtcblx0XHRcdFx0XHRcdGFuY2hvcjogJ2NlbnRlcicsXG5cdFx0XHRcdFx0XHRlbGVtZW50OiBtYXJrZXJfcmVzdGF1cmFudCxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0Ly8gLnNldFBvcHVwKHBvcHVwKVxuXHRcdFx0XHRcdFx0LnNldExuZ0xhdChpdGVtLmdlb21ldHJ5LmxvY2F0aW9uKVxuXHRcdFx0XHRcdFx0LmFkZFRvKHRoaXMubWFwKTtcblx0XHRcdFx0XHR0aGlzLmxpc3RSZXN0YXVyYW50LnB1c2godGhpcy5yZXN0YXVyYW50X21hcmtlcik7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdDw7MnKVxuXHRcdFx0XHRmb3IgKGxldCBtYXJrZXIgb2YgdGhpcy5saXN0UmVzdGF1cmFudCkge1xuXHRcdFx0XHRcdG1hcmtlci5yZW1vdmUoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmxpc3RSZXN0YXVyYW50ID0gW107XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMucHJvcHMuYm94VmlzaWJsZSA9PT0gJ2hpc3RvcnknKSB7XG5cdFx0XHRmb3IgKGxldCBtYXJrZXIgb2YgdGhpcy5saXN0SGlzdG9yaWVzKSB7XG5cdFx0XHRcdG1hcmtlci5yZW1vdmUoKTtcblx0XHRcdH1cblx0XHRcdGZvciAobGV0IGl0ZW0gb2YgdGhpcy5wcm9wcy5zZWFyY2hMb2NhbFN0b3JhZ2UpIHtcblx0XHRcdFx0Y29uc3QgbWFya2VyX2hpc3RvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdFx0bWFya2VyX2hpc3RvcnkuaW5uZXJIVE1MID0gUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdGF0aWNNYXJrdXAoXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYXJrZXItaGlzdG9yaWVzXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0c3JjPXtpbWFnZXMubWFya2VyfVxuXHRcdFx0XHRcdFx0XHRcdGFsdD1cIlwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KTtcblx0XHRcdFx0dGhpcy5oaXN0b3J5X21hcmtlciA9IG5ldyBtYXBsaWJyZWdsLk1hcmtlcih7XG5cdFx0XHRcdFx0YW5jaG9yOiAnY2VudGVyJyxcblx0XHRcdFx0XHRlbGVtZW50OiBtYXJrZXJfaGlzdG9yeSxcblx0XHRcdFx0fSlcblx0XHRcdFx0XHQuc2V0TG5nTGF0KGl0ZW0ubG9jYXRpb24pXG5cdFx0XHRcdFx0LmFkZFRvKHRoaXMubWFwKTtcblx0XHRcdFx0dGhpcy5saXN0SGlzdG9yaWVzLnB1c2godGhpcy5oaXN0b3J5X21hcmtlcik7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciAobGV0IG1hcmtlciBvZiB0aGlzLmxpc3RIaXN0b3JpZXMpIHtcblx0XHRcdFx0bWFya2VyLnJlbW92ZSgpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIGlmICh0aGlzLnByb3BzLmJveFZpc2libGUgPT09IFwiZGV0YWlsc1wiKSB7XG5cdFx0aWYgKHRoaXMucHJvcHMucmVzdWx0X25hdmlnYXRpb24gJiYgdGhpcy5wcm9wcy5ib3hWaXNpYmxlID09PSAnZGV0YWlscycpIHtcblx0XHRcdGZvciAobGV0IHN0ZXAgb2YgdGhpcy5wcm9wcy5yZXN1bHRfbmF2aWdhdGlvbi5mYXN0ZXN0WzBdLmxlZ3NbMF0uc3RlcHMpIHtcblx0XHRcdFx0Y29uc3QgcG9wdXAgPSBuZXcgbWFwbGlicmVnbC5Qb3B1cCh7IG9mZnNldDogWzAsIC0zMl0sIGNsYXNzTmFtZTogJ3Rvb2x0aXAtbWFya2VyJywgY2xvc2VCdXR0b246IGZhbHNlLCBhbmNob3I6ICdib3R0b20nIH0pLnNldEhUTUwoYDxkaXYgY2xhc3M9XCJhbnQtdG9vbHRpcC1pbm5lciB0b29sdGlwLWluZm8tbG9jYXRpb25cIj4ke3N0ZXAuaHRtbF9pbnN0cnVjdGlvbnN9PC9kaXY+YCkuc2V0TWF4V2lkdGgoJzE1MHB4Jyk7XG5cdFx0XHRcdGNvbnN0IG1hcmtlcl9zdGVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdG1hcmtlcl9zdGVwLmlubmVySFRNTCA9IFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RhdGljTWFya3VwKDxkaXYgY2xhc3NOYW1lPVwibWFya2VyLWRldGFpbHNcIj48L2Rpdj4pO1xuXHRcdFx0XHR0aGlzLnN0ZXBfbWFya2VyID0gbmV3IG1hcGxpYnJlZ2wuTWFya2VyKHsgYW5jaG9yOiAnY2VudGVyJywgZWxlbWVudDogbWFya2VyX3N0ZXAgfSkuc2V0UG9wdXAocG9wdXApLnNldExuZ0xhdChzdGVwLmVuZF9sb2NhdGlvbikuYWRkVG8odGhpcy5tYXApO1xuXHRcdFx0XHR0aGlzLmxpc3QucHVzaCh0aGlzLnN0ZXBfbWFya2VyKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9yIChsZXQgbWFya2VyIG9mIHRoaXMubGlzdCkge1xuXHRcdFx0XHRtYXJrZXIucmVtb3ZlKCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxpc3QgPSBbXTtcblx0XHR9XG5cdFx0Ly8gfVxuXHRcdGlmICh0aGlzLnByb3BzLmJveFZpc2libGUgPT09ICduYXZpZ2F0aW9uJyAmJiBpc01vYmlsZSkge1xuXHRcdFx0aWYgKHRoaXMucHJvcHMucmVzdWx0X25hdmlnYXRpb24pIHtcblx0XHRcdFx0Zm9yIChsZXQgc3RlcCBvZiB0aGlzLnByb3BzLnJlc3VsdF9uYXZpZ2F0aW9uLmZhc3Rlc3RbMF0ubGVnc1swXS5zdGVwcykge1xuXHRcdFx0XHRcdGNvbnN0IHBvcHVwID0gbmV3IG1hcGxpYnJlZ2wuUG9wdXAoeyBvZmZzZXQ6IFswLCAtMzJdLCBjbGFzc05hbWU6ICd0b29sdGlwLW1hcmtlcicsIGNsb3NlQnV0dG9uOiBmYWxzZSwgYW5jaG9yOiAnYm90dG9tJyB9KS5zZXRIVE1MKGA8ZGl2IGNsYXNzPVwiYW50LXRvb2x0aXAtaW5uZXIgdG9vbHRpcC1pbmZvLWxvY2F0aW9uXCI+JHtzdGVwLmh0bWxfaW5zdHJ1Y3Rpb25zfTwvZGl2PmApLnNldE1heFdpZHRoKCcxNTBweCcpO1xuXHRcdFx0XHRcdGNvbnN0IG1hcmtlcl9zdGVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdFx0bWFya2VyX3N0ZXAuaW5uZXJIVE1MID0gUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdGF0aWNNYXJrdXAoPGRpdiBjbGFzc05hbWU9XCJtYXJrZXItZGV0YWlsc1wiPjwvZGl2Pik7XG5cdFx0XHRcdFx0dGhpcy5zdGVwX21hcmtlciA9IG5ldyBtYXBsaWJyZWdsLk1hcmtlcih7IGFuY2hvcjogJ2NlbnRlcicsIGVsZW1lbnQ6IG1hcmtlcl9zdGVwIH0pLnNldFBvcHVwKHBvcHVwKS5zZXRMbmdMYXQoc3RlcC5lbmRfbG9jYXRpb24pLmFkZFRvKHRoaXMubWFwKTtcblx0XHRcdFx0XHR0aGlzLmxpc3QucHVzaCh0aGlzLnN0ZXBfbWFya2VyKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Zm9yIChsZXQgbWFya2VyIG9mIHRoaXMubGlzdCkge1xuXHRcdFx0XHRcdG1hcmtlci5yZW1vdmUoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmxpc3QgPSBbXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRkZWNvZGVQb2x5bGluZShlbmNvZGVkKSB7XG5cdFx0dmFyIHBvaW50cyA9IFtdO1xuXHRcdHZhciBpbmRleCA9IDAsXG5cdFx0XHRsZW4gPSBlbmNvZGVkLmxlbmd0aDtcblx0XHR2YXIgbGF0ID0gMCxcblx0XHRcdGxuZyA9IDA7XG5cblx0XHR3aGlsZSAoaW5kZXggPCBsZW4pIHtcblx0XHRcdHZhciBiLFxuXHRcdFx0XHRzaGlmdCA9IDAsXG5cdFx0XHRcdHJlc3VsdCA9IDA7XG5cdFx0XHRkbyB7XG5cdFx0XHRcdGIgPSBlbmNvZGVkLmNoYXJBdChpbmRleCsrKS5jaGFyQ29kZUF0KDApIC0gNjM7XG5cdFx0XHRcdHJlc3VsdCB8PSAoYiAmIDB4MWYpIDw8IHNoaWZ0O1xuXHRcdFx0XHRzaGlmdCArPSA1O1xuXHRcdFx0fSB3aGlsZSAoYiA+PSAweDIwKTtcblx0XHRcdHZhciBkbGF0ID0gcmVzdWx0ICYgMSA/IH4ocmVzdWx0ID4+IDEpIDogcmVzdWx0ID4+IDE7XG5cdFx0XHRsYXQgKz0gZGxhdDtcblxuXHRcdFx0c2hpZnQgPSAwO1xuXHRcdFx0cmVzdWx0ID0gMDtcblx0XHRcdGRvIHtcblx0XHRcdFx0YiA9IGVuY29kZWQuY2hhckF0KGluZGV4KyspLmNoYXJDb2RlQXQoMCkgLSA2Mztcblx0XHRcdFx0cmVzdWx0IHw9IChiICYgMHgxZikgPDwgc2hpZnQ7XG5cdFx0XHRcdHNoaWZ0ICs9IDU7XG5cdFx0XHR9IHdoaWxlIChiID49IDB4MjApO1xuXHRcdFx0dmFyIGRsbmcgPSByZXN1bHQgJiAxID8gfihyZXN1bHQgPj4gMSkgOiByZXN1bHQgPj4gMTtcblx0XHRcdGxuZyArPSBkbG5nO1xuXG5cdFx0XHRwb2ludHMucHVzaChbbG5nICogMWUtNSwgbGF0ICogMWUtNV0pO1xuXHRcdH1cblxuXHRcdHJldHVybiBwb2ludHM7XG5cdH1cblxuXHRjaGFuZ2VTdHlsZSA9ICgpID0+IHtcblx0XHRjb25zdCB7IHN0eWxlIH0gPSB0aGlzLnN0YXRlO1xuXHRcdGlmIChzdHlsZSA9PT0gU1RZTEVfVVJMLlNBVEVMSVRFICsgU1RZTEVfS0VZKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0c3R5bGU6IFNUWUxFX1VSTC5OT1JNQUwgKyBTVFlMRV9LRVksXG5cdFx0XHR9KTtcblx0XHRcdHRoaXMubWFwLnNldFN0eWxlKFNUWUxFX1VSTC5OT1JNQUwgKyBTVFlMRV9LRVkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0c3R5bGU6IFNUWUxFX1VSTC5TQVRFTElURSArIFNUWUxFX0tFWSxcblx0XHRcdH0pO1xuXHRcdFx0dGhpcy5tYXAuc2V0U3R5bGUoU1RZTEVfVVJMLlNBVEVMSVRFICsgU1RZTEVfS0VZKTtcblx0XHR9XG5cdH07XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3N0b3JhZ2UnLCB0aGlzLmhhbmRsZVN0b3JhZ2VDaGFuZ2UpO1xuXHRcdC8vIGNvbnNvbGUubG9nKFNUWUxFX1VSTC5OT1JNQUwpXG5cdFx0Y29uc3Qgc2VsZWN0ZWRQbGFjZSA9IHRoaXMucHJvcHMuY3VycmVudF9wbGFjZTtcblx0XHR0aGlzLm1hcCA9IG5ldyBtYXBsaWJyZWdsLk1hcCh7XG5cdFx0XHRjb250YWluZXI6ICdtYXAnLCAvLyBjb250YWluZXIgaWRcblx0XHRcdHN0eWxlOiBTVFlMRV9VUkwuTk9STUFMICsgU1RZTEVfS0VZLFxuXHRcdFx0Y2VudGVyOiBzZWxlY3RlZFBsYWNlID8gW3NlbGVjdGVkUGxhY2UuZ2VvbWV0cnkubG9jYXRpb24ubG5nLCBzZWxlY3RlZFBsYWNlLmdlb21ldHJ5LmxvY2F0aW9uLmxhdF0gOiBbREVGQVVMVF9WSUVXUE9SVC5sb25naXR1ZGUsIERFRkFVTFRfVklFV1BPUlQubGF0aXR1ZGVdLCAvLyBzdGFydGluZyBwb3NpdGlvbiBbbG5nLCBsYXRdXG5cdFx0XHR6b29tOiBERUZBVUxUX1ZJRVdQT1JULnpvb20sIC8vIHN0YXJ0aW5nIHpvb21cblx0XHR9KTtcblx0XHRpZiAoc2VsZWN0ZWRQbGFjZSkgdGhpcy5wcm9wcy5kaXNwYXRjaChzZXRSZWRNYXJrZXJBY3Rpb24odHJ1ZSwgc2VsZWN0ZWRQbGFjZS5nZW9tZXRyeS5sb2NhdGlvbikpO1xuXG5cdFx0dGhpcy5uYXZpZ2F0aW9uID0gbmV3IG1hcGxpYnJlZ2wuTmF2aWdhdGlvbkNvbnRyb2woKTtcblx0XHR0aGlzLmdlb2xvY2F0ZUNvbnRyb2wgPSBuZXcgbWFwbGlicmVnbC5HZW9sb2NhdGVDb250cm9sKHtcblx0XHRcdHBvc2l0aW9uT3B0aW9uczoge1xuXHRcdFx0XHRlbmFibGVIaWdoQWNjdXJhY3k6IHRydWUsXG5cdFx0XHR9LFxuXHRcdFx0Ly8gQuG6rXQgdOG6r3QgaGnhu4NuIGLhu4sgduG7iyB0csOtXG5cdFx0XHR0cmFja1VzZXJMb2NhdGlvbjogdHJ1ZSxcblx0XHRcdC8vIEhp4buDbiB0aOG7i1xuXHRcdFx0c2hvd1VzZXJMb2NhdGlvbjogdHJ1ZSxcblx0XHRcdC8vIFThuq90IHbDsm5nIHRyw7JuIHRvXG5cdFx0XHRzaG93QWNjdXJhY3lDaXJjbGU6IGZhbHNlLFxuXHRcdFx0Ly8gxJBp4buBdSBjaOG7iW5oIG3hu6ljIHpvb20gxJHhur9uIHbhu4sgdHLDrSBj4bunYSBtw6xuaFxuXHRcdFx0Zml0Qm91bmRzT3B0aW9uczoge1xuXHRcdFx0XHRtYXhab29tOiAxNSxcblx0XHRcdH0sXG5cdFx0fSk7XG5cblx0XHR0aGlzLmdlb2xvY2F0ZUNvbnRyb2wub24oJ2Vycm9yJywgKCkgPT4ge1xuXHRcdFx0bWVzc2FnZS53YXJuaW5nKCdHb29uZyBraMO0bmcgdGjhu4MgbOG6pXkgxJHhu4thIMSRaeG7g20gaGnhu4duIHThuqFpIGPhu6dhIGLhuqFuICEnKTtcblx0XHR9KTtcblxuXHRcdHRoaXMuZ2VvbG9jYXRlQ29udHJvbC5vbignZ2VvbG9jYXRlJywgKGUpID0+IHtcblx0XHRcdHRoaXMucHJvcHMuZGlzcGF0Y2goXG5cdFx0XHRcdHNldE15TG9jYXRpb25BY3Rpb24oe1xuXHRcdFx0XHRcdGxhdGl0dWRlOiBlLmNvb3Jkcy5sYXRpdHVkZSxcblx0XHRcdFx0XHRsb25naXR1ZGU6IGUuY29vcmRzLmxvbmdpdHVkZSxcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0fSk7XG5cblx0XHQhaXNNb2JpbGUgJiYgdGhpcy5tYXAuYWRkQ29udHJvbCh0aGlzLm5hdmlnYXRpb24pO1xuXHRcdCFpc01vYmlsZSAmJiB0aGlzLm1hcC5hZGRDb250cm9sKHRoaXMuZ2VvbG9jYXRlQ29udHJvbCk7XG5cblx0XHR0aGlzLm1hcC5vbignY2xpY2snLCB0aGlzLl9vbk1vdXNlQ2xpY2spO1xuXHRcdHRoaXMubWFwLm9uKCdjb250ZXh0bWVudScsIHRoaXMuX29uUmlnaHRDbGljayk7XG5cdFx0dGhpcy5tYXAub24oJ2xvYWQnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLm1hcC5yZXNpemUoKTtcblxuXHRcdFx0Y29uc3QgcGlkID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKS5nZXQoJ3BpZCcpO1xuXHRcdFx0Y29uc3QgbG9jYXRpb24gPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpLmdldCgnbG9jYXRpb24nKT8uc3BsaXQoJywnKTtcblx0XHRcdGNvbnN0IHBpZF9hcm91bmQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpLmdldCgncGlkX2Fyb3VuZCcpO1xuXHRcdFx0Y29uc3QgZGlyZWN0aW9uX2luZm9yID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKS5nZXQoJ2RpcmVjdGlvbicpO1xuXHRcdFx0aWYgKCFkaXJlY3Rpb25faW5mb3IgJiYgIXBpZCAmJiAhbG9jYXRpb24gJiYgIXBpZF9hcm91bmQgJiYgIXRoaXMucHJvcHMuY3VycmVudF9wbGFjZSkgdGhpcy5nZW9sb2NhdGVDb250cm9sPy50cmlnZ2VyKCk7XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0aWYgKG5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuXHRcdFx0XHRcdG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oKHBvc2l0aW9uKSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLnByb3BzLmRpc3BhdGNoKFxuXHRcdFx0XHRcdFx0XHRzZXRNeUxvY2F0aW9uQWN0aW9uKHtcblx0XHRcdFx0XHRcdFx0XHRsYXRpdHVkZTogcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlLFxuXHRcdFx0XHRcdFx0XHRcdGxvbmdpdHVkZTogcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZSxcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHRoaXMubWFwLm9uKCdtb3ZlJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5wcm9wcy5kaXNwYXRjaChcblx0XHRcdFx0c2V0Q2VudGVyTGF0TG5nQWN0aW9uKHtcblx0XHRcdFx0XHRsYXRpdHVkZTogdGhpcy5tYXAuZ2V0Q2VudGVyKCkubGF0LFxuXHRcdFx0XHRcdGxvbmdpdHVkZTogdGhpcy5tYXAuZ2V0Q2VudGVyKCkubG5nLFxuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHR9KTtcblx0XHR0aGlzLm1hcC5vbignc3R5bGUubG9hZCcsICgpID0+IHtcblx0XHRcdHRoaXMubWFwPy5hZGRMYXllcih7XG5cdFx0XHRcdGlkOiAnM2QtYnVpbGRpbmdzJyxcblx0XHRcdFx0c291cmNlOiAnY29tcG9zaXRlJyxcblx0XHRcdFx0J3NvdXJjZS1sYXllcic6ICdWTl9CdWlsZGluZycsXG5cdFx0XHRcdGZpbHRlcjogWyc9PScsICdleHRydWRlJywgJ3RydWUnXSxcblx0XHRcdFx0dHlwZTogJ2ZpbGwtZXh0cnVzaW9uJyxcblx0XHRcdFx0bWluem9vbTogMTUsXG5cdFx0XHRcdHBhaW50OiB7XG5cdFx0XHRcdFx0J2ZpbGwtZXh0cnVzaW9uLWNvbG9yJzogJyNhYWEnLFxuXHRcdFx0XHRcdCdmaWxsLWV4dHJ1c2lvbi1oZWlnaHQnOiB7XG5cdFx0XHRcdFx0XHR0eXBlOiAnaWRlbnRpdHknLFxuXHRcdFx0XHRcdFx0cHJvcGVydHk6ICdoZWlnaHQnLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0J2ZpbGwtZXh0cnVzaW9uLWJhc2UnOiB7XG5cdFx0XHRcdFx0XHR0eXBlOiAnaWRlbnRpdHknLFxuXHRcdFx0XHRcdFx0cHJvcGVydHk6ICdtaW5faGVpZ2h0Jyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdCdmaWxsLWV4dHJ1c2lvbi1vcGFjaXR5JzogMC40LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSk7XG5cdFx0XHRpZiAodGhpcy5wcm9wcy5yZXN1bHRfbmF2aWdhdGlvbikge1xuXHRcdFx0XHRpZiAodGhpcy5wcm9wcy5yZXN1bHRfc2VsZWN0ID09PSAnZmFzdGVzdCcpIHtcblx0XHRcdFx0XHR0aGlzLnByb3BzLmRpc3BhdGNoKHNlbGVjdFJlc3VsdEFjdGlvbignc2hvcnRlc3QnKSk7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5kaXNwYXRjaChzZWxlY3RSZXN1bHRBY3Rpb24oJ2Zhc3Rlc3QnKSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5kaXNwYXRjaChzZWxlY3RSZXN1bHRBY3Rpb24oJ2Zhc3Rlc3QnKSk7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5kaXNwYXRjaChzZWxlY3RSZXN1bHRBY3Rpb24oJ3Nob3J0ZXN0JykpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0ZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX29uQ2xpY2tNZW51KTtcblx0XHQvLyB0aGlzLm1hcC5vbignY2xpY2snLCAncm91dGUtbGF5ZXItZmFzdGVzdCcsIChlKSA9PiB7XG5cdFx0Ly8gICBjb25zb2xlLmxvZyhlLCAnZmFzdGVzdCcpO1xuXHRcdC8vICAgZS5vcmlnaW5hbEV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdC8vICAgZS5vcmlnaW5hbEV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0Ly8gfSk7XG5cblx0XHQvLyB0aGlzLm1hcC5vbignY2xpY2snLCAncm91dGUtbGF5ZXItc2hvcnRlc3QnLCAoZSkgPT4ge1xuXHRcdC8vICAgY29uc29sZS5sb2coZSlcblx0XHQvLyB9KTtcblxuXHRcdGNvbnN0IGRpcmVjdGlvbl9pbmZvciA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCkuZ2V0KCdkaXJlY3Rpb24nKTtcblx0XHRjb25zdCBpZnJhbWUgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpLmdldCgnaWZyYW1lJyk7XG5cdFx0aWYgKGRpcmVjdGlvbl9pbmZvcikge1xuXHRcdFx0Y29uc3QgY29vcl9mcm9tID0ge1xuXHRcdFx0XHRsYXQ6IGRpcmVjdGlvbl9pbmZvci5zcGxpdCgnJicpWzBdLnNwbGl0KCcsJylbMF0sXG5cdFx0XHRcdGxuZzogZGlyZWN0aW9uX2luZm9yLnNwbGl0KCcmJylbMF0uc3BsaXQoJywnKVsxXSxcblx0XHRcdH07XG5cdFx0XHRjb25zdCBjb29yX3RvID0ge1xuXHRcdFx0XHRsYXQ6IGRpcmVjdGlvbl9pbmZvci5zcGxpdCgnJicpWzFdLnNwbGl0KCcsJylbMF0sXG5cdFx0XHRcdGxuZzogZGlyZWN0aW9uX2luZm9yLnNwbGl0KCcmJylbMV0uc3BsaXQoJywnKVsxXSxcblx0XHRcdH07XG5cdFx0XHRpZiAoY29vcl9mcm9tLmxhdCAmJiBjb29yX2Zyb20ubG5nICYmIGNvb3JfdG8ubGF0ICYmIGNvb3JfdG8ubG5nKSB7XG5cdFx0XHRcdC8vIHRoaXMuaGFuZGxlRnJvbUhlcmUoY29vcl9mcm9tLmxhdCwgY29vcl9mcm9tLmxuZyk7XG5cdFx0XHRcdC8vIHRoaXMuaGFuZGxlVG9IZXJlKGNvb3JfdG8ubGF0LCBjb29yX3RvLmxuZyk7XG5cdFx0XHRcdGlmIChpZnJhbWUgIT0gbnVsbCkge1xuXHRcdFx0XHRcdHRoaXMubmF2aWdhdGlvbkJ5VVJMSWZyYW1lKGNvb3JfZnJvbSwgY29vcl90byk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5uYXZpZ2F0aW9uQnlVUkwoY29vcl9mcm9tLCBjb29yX3RvKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdG5hdmlnYXRpb25CeVVSTElmcmFtZSA9IGFzeW5jIChmcm9tLCB0bykgPT4ge1xuXHRcdHRoaXMucHJvcHMuZGlzcGF0Y2goc2V0Qm94VmlzaWJsZUFjdGlvbignaWZyYW1lJykpO1xuXG5cdFx0dGhpcy5wcm9wcy5kaXNwYXRjaChzZXRSZWRNYXJrZXJBY3Rpb24oZmFsc2UpKTtcblx0XHR0aGlzLmNoYW5nZVZpc2libGVCb3R0b21JbmZvKGZhbHNlKTtcblx0XHRsZXQgZnJvbXBsYWNlO1xuXHRcdGlmICghZnJvbS5sYXQgfHwgIWZyb20ubG5nKSBmcm9tcGxhY2UgPSBhd2FpdCB0aGlzLl9nZXRJbmZvclBsYWNlKCk7XG5cdFx0ZWxzZSB7XG5cdFx0XHRmcm9tcGxhY2UgPSBhd2FpdCB0aGlzLl9nZXRJbmZvclBsYWNlKGZyb20ubGF0LCBmcm9tLmxuZyk7XG5cdFx0fVxuXHRcdGF3YWl0IHRoaXMucHJvcHMuZGlzcGF0Y2gobmF2aWdhdGlvbkZyb21BY3Rpb24oZnJvbXBsYWNlLCBgJHtmcm9tcGxhY2UubmFtZX0gLSAke2Zyb21wbGFjZS5mb3JtYXR0ZWRfYWRkcmVzc31gKSk7XG5cdFx0bGV0IHRvcGxhY2U7XG5cdFx0aWYgKCF0by5sYXQgfHwgIXRvLmxuZykgdG9wbGFjZSA9IGF3YWl0IHRoaXMuX2dldEluZm9yUGxhY2UoKTtcblx0XHRlbHNlIHtcblx0XHRcdHRvcGxhY2UgPSBhd2FpdCB0aGlzLl9nZXRJbmZvclBsYWNlKHRvLmxhdCwgdG8ubG5nKTtcblx0XHR9XG5cdFx0YXdhaXQgdGhpcy5wcm9wcy5kaXNwYXRjaChuYXZpZ2F0aW9uVG9BY3Rpb24odG9wbGFjZSwgYCR7dG9wbGFjZS5uYW1lfSAtICR7dG9wbGFjZS5mb3JtYXR0ZWRfYWRkcmVzc31gKSk7XG5cdFx0dGhpcy5wcm9wcy5kaXNwYXRjaChuYXZpZ2F0aW9uQWN0aW9uKHRoaXMucHJvcHMuZnJvbV9wbGFjZSwgdGhpcy5wcm9wcy50b19wbGFjZSwgJ2NhcicpKTtcblx0fTtcblxuXHRuYXZpZ2F0aW9uQnlVUkwgPSBhc3luYyAoZnJvbSwgdG8pID0+IHtcblx0XHR0aGlzLnByb3BzLmRpc3BhdGNoKHNldEJveFZpc2libGVBY3Rpb24oJ25hdmlnYXRpb24nKSk7XG5cdFx0dGhpcy5wcm9wcy5kaXNwYXRjaChzZXRSZWRNYXJrZXJBY3Rpb24oZmFsc2UpKTtcblx0XHR0aGlzLmNoYW5nZVZpc2libGVCb3R0b21JbmZvKGZhbHNlKTtcblx0XHRsZXQgZnJvbXBsYWNlO1xuXHRcdGlmICghZnJvbS5sYXQgfHwgIWZyb20ubG5nKSBmcm9tcGxhY2UgPSBhd2FpdCB0aGlzLl9nZXRJbmZvclBsYWNlKCk7XG5cdFx0ZWxzZSB7XG5cdFx0XHRmcm9tcGxhY2UgPSBhd2FpdCB0aGlzLl9nZXRJbmZvclBsYWNlKGZyb20ubGF0LCBmcm9tLmxuZyk7XG5cdFx0fVxuXHRcdGF3YWl0IHRoaXMucHJvcHMuZGlzcGF0Y2gobmF2aWdhdGlvbkZyb21BY3Rpb24oZnJvbXBsYWNlLCBgJHtmcm9tcGxhY2UubmFtZX0gLSAke2Zyb21wbGFjZS5mb3JtYXR0ZWRfYWRkcmVzc31gKSk7XG5cdFx0bGV0IHRvcGxhY2U7XG5cdFx0aWYgKCF0by5sYXQgfHwgIXRvLmxuZykgdG9wbGFjZSA9IGF3YWl0IHRoaXMuX2dldEluZm9yUGxhY2UoKTtcblx0XHRlbHNlIHtcblx0XHRcdHRvcGxhY2UgPSBhd2FpdCB0aGlzLl9nZXRJbmZvclBsYWNlKHRvLmxhdCwgdG8ubG5nKTtcblx0XHR9XG5cdFx0YXdhaXQgdGhpcy5wcm9wcy5kaXNwYXRjaChuYXZpZ2F0aW9uVG9BY3Rpb24odG9wbGFjZSwgYCR7dG9wbGFjZS5uYW1lfSAtICR7dG9wbGFjZS5mb3JtYXR0ZWRfYWRkcmVzc31gKSk7XG5cdH07XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N0b3JhZ2UnLCB0aGlzLmhhbmRsZVN0b3JhZ2VDaGFuZ2UpO1xuXHRcdGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9vbkNsaWNrTWVudSk7XG5cdH1cblxuXHRoYW5kbGVTdG9yYWdlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG5cdFx0Y29uc29sZS5sb2coJ29wcGFvcGFvcGEnKTtcblx0XHRpZiAoZXZlbnQua2V5ID09PSAnc2VhcmNoX2hpc3RvcnknKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgdmFsdWU6IGV2ZW50Lm5ld1ZhbHVlIH0pO1xuXHRcdH1cblx0fTtcblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgeyBzdHlsZSwgYm90dG9tSW5mb1Zpc2libGUsIHBsYWNlTW91c2VDbGljayB9ID0gdGhpcy5zdGF0ZTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdDxEaXYxMDB2aD5cblx0XHRcdFx0XHQ8ZGl2IGlkPVwibWFwXCI+PC9kaXY+XG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdHshaXNNb2JpbGUgJiYgKFxuXHRcdFx0XHRcdFx0XHQ8QXZhdGFyXG5cdFx0XHRcdFx0XHRcdFx0c2hhcGU9XCJzcXVhcmVcIlxuXHRcdFx0XHRcdFx0XHRcdHNpemU9ezY0fVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMuY2hhbmdlU3R5bGV9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY2hhbmdlLXN0YXR1cy1idXR0b25cIlxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IHN0eWxlID09PSBTVFlMRV9VUkwuTk9STUFMICsgU1RZTEVfS0VZID8gYHVybCgke3NhdGVsbGl0ZV9pbWd9KWAgOiBgdXJsKCR7bm9ybWFsX21hcF9pbWd9KWAsXG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHR7aXNNb2JpbGUgJiYgKFxuXHRcdFx0XHRcdFx0XHQ8QXZhdGFyXG5cdFx0XHRcdFx0XHRcdFx0c2hhcGU9XCJzcXVhcmVcIlxuXHRcdFx0XHRcdFx0XHRcdHNpemU9ezY0fVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMuY2hhbmdlU3R5bGV9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY2hhbmdlLXN0YXR1cy1idXR0b25cIlxuXHRcdFx0XHRcdFx0XHRcdC8vIGlkPSdjaGFuZ2Utc3RhdHVzLWJ1dHRvbi0tbW9iaWxlJ1xuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IHN0eWxlID09PSBTVFlMRV9VUkwuTk9STUFMICsgU1RZTEVfS0VZID8gYHVybCgke3NhdGVsbGl0ZV9pbWd9KWAgOiBgdXJsKCR7bm9ybWFsX21hcF9pbWd9KWAsXG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0e2JvdHRvbUluZm9WaXNpYmxlICYmIChcblx0XHRcdFx0XHRcdDxCb3R0b21JbmZvTG9jYXRpb25cblx0XHRcdFx0XHRcdFx0Y2hhbmdlVmlzaWJsZUJvdHRvbUluZm89e3RoaXMuY2hhbmdlVmlzaWJsZUJvdHRvbUluZm99XG5cdFx0XHRcdFx0XHRcdGxhdD17cGxhY2VNb3VzZUNsaWNrLmdlb21ldHJ5Py5sb2NhdGlvbi5sYXQgfHwgTnVtYmVyKHBsYWNlTW91c2VDbGljay5sbmdfbGF0WzFdKX1cblx0XHRcdFx0XHRcdFx0bG5nPXtwbGFjZU1vdXNlQ2xpY2suZ2VvbWV0cnk/LmxvY2F0aW9uLmxuZyB8fCBOdW1iZXIocGxhY2VNb3VzZUNsaWNrLmxuZ19sYXRbMF0pfVxuXHRcdFx0XHRcdFx0XHRuYW1lPXtwbGFjZU1vdXNlQ2xpY2submFtZSB8fCBwbGFjZU1vdXNlQ2xpY2suYWRkcmVzc19jb21wb25lbnRzWzBdLmxvbmdfbmFtZX1cblx0XHRcdFx0XHRcdFx0aXNNYXJrZXJBcm91bmQ9e3BsYWNlTW91c2VDbGljay5tYXJrZXJfdHlwZV9pZH1cblx0XHRcdFx0XHRcdFx0cGxhY2VfaWQ9e3BsYWNlTW91c2VDbGljay5faWR9XG5cdFx0XHRcdFx0XHRcdGFkZHJlc3M9e3RoaXMuZ2V0QWRkcmVzc0dlb2NvZGUocGxhY2VNb3VzZUNsaWNrKSB8fCBwbGFjZU1vdXNlQ2xpY2suZm9ybWF0dGVkX2FkZHJlc3MgfHwgcGxhY2VNb3VzZUNsaWNrLmRlc2NyaXB0aW9uLmFkZHJlc3N9XG5cdFx0XHRcdFx0XHRcdHJlbW92ZU1hcmtlcj17dGhpcy5yZW1vdmVNYXJrZXJXaGF0SXN9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdDwvRGl2MTAwdmg+XG5cdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxuXHRcdCk7XG5cdH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0Y3VycmVudF9wbGFjZTogc3RhdGUucGxhY2VSZWR1Y2VyLmN1cnJlbnRfcGxhY2UsXG5cdFx0ZnJvbV9wbGFjZTogc3RhdGUubmF2aWdhdGlvblJlZHVjZXIuZnJvbSxcblx0XHR0b19wbGFjZTogc3RhdGUubmF2aWdhdGlvblJlZHVjZXIudG8sXG5cdFx0Ym94VmlzaWJsZTogc3RhdGUuYm94VmlzaWJsZVJlZHVjZXIuYm94X3Zpc2libGUsXG5cdFx0cmVzdWx0X25hdmlnYXRpb246IHN0YXRlLm5hdmlnYXRpb25SZWR1Y2VyLnJlc3VsdCxcblx0XHR2aWV3cG9ydDogc3RhdGUucGxhY2VSZWR1Y2VyLnZpZXdwb3J0LFxuXHRcdHJlc3VsdF9zZWxlY3Q6IHN0YXRlLm5hdmlnYXRpb25SZWR1Y2VyLnJlc3VsdF9zZWxlY3QsXG5cdFx0YXJvdW5kX3BsYWNlczogc3RhdGUuc2VhcmNoUmVkdWNlci5hcm91bmRfcGxhY2VzLFxuXHRcdG1hcmtlclNlbGVjdDogc3RhdGUuYm94VmlzaWJsZVJlZHVjZXIucmVkX21hcmtlcl92aXNpYmxlLFxuXHRcdHBvc2l0aW9uTWFya2VyU2VsZWN0OiBzdGF0ZS5ib3hWaXNpYmxlUmVkdWNlci5wb3NpdGlvbl9yZWRfbWFya2VyLFxuXHRcdGFyb3VuZF9wbGFjZV9jZW50ZXI6IHN0YXRlLnNlYXJjaFJlZHVjZXIuYXJvdW5kX3BsYWNlX2NlbnRlcixcblx0XHRwb3B1cF92aXNpYmxlOiBzdGF0ZS5ib3hWaXNpYmxlUmVkdWNlci5wb3B1cF92aXNpYmxlLFxuXHRcdHBvc2l0aW9uX3BvcHVwOiBzdGF0ZS5ib3hWaXNpYmxlUmVkdWNlci5wb3NpdGlvbl9wb3B1cCxcblx0XHR0eXBlX3BvcHVwOiBzdGF0ZS5ib3hWaXNpYmxlUmVkdWNlci50eXBlX3BvcHVwLFxuXHRcdGFyb3VuZF9wbGFjZV9zZWxlY3Q6IHN0YXRlLnNlYXJjaFJlZHVjZXIuYXJvdW5kX3BsYWNlX3NlbGVjdCxcblx0XHRteV9sb2NhdGlvbjogc3RhdGUucGxhY2VSZWR1Y2VyLm15X2xvY2F0aW9uLFxuXHRcdHJlc3RhdXJhbnREYXRhOiBzdGF0ZS5zZWFyY2hSZWR1Y2VyLnJlc3RhdXJhbnRfZGF0YSxcblx0XHRzZWFyY2hMb2NhbFN0b3JhZ2U6IHN0YXRlLnNlYXJjaFJlZHVjZXIuc2VhcmNoX2xvY2FsX3N0b3JhZ2UsXG5cdH07XG59O1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKE1hcCk7XG4iXSwic291cmNlUm9vdCI6IiJ9