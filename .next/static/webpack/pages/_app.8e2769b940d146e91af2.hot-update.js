webpackHotUpdate_N_E("pages/_app",{

/***/ "./redux/reducers/index.js":
/*!*********************************!*\
  !*** ./redux/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _searchReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchReducer */ "./redux/reducers/searchReducer.js");
/* harmony import */ var _placeReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./placeReducer */ "./redux/reducers/placeReducer.js");
/* harmony import */ var _navigationReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigationReducer */ "./redux/reducers/navigationReducer.js");
/* harmony import */ var _boxVisibleReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./boxVisibleReducer */ "./redux/reducers/boxVisibleReducer.js");





var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  searchReducer: _searchReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  placeReducer: _placeReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  navigationReducer: _navigationReducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  boxVisibleReducer: _boxVisibleReducer__WEBPACK_IMPORTED_MODULE_4__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./redux/reducers/parkingLotReducer.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvcmVkdWNlcnMvaW5kZXguanMiXSwibmFtZXMiOlsicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJzZWFyY2hSZWR1Y2VyIiwicGxhY2VSZWR1Y2VyIiwibmF2aWdhdGlvblJlZHVjZXIiLCJib3hWaXNpYmxlUmVkdWNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF3QztBQUNwQjtBQUNEO0FBQ0s7QUFDQTtBQUV4QixJQUFNQSxXQUFXLEdBQUdDLDZEQUFlLENBQUM7RUFDbkNDLGFBQWEsRUFBYkEsc0RBQWE7RUFDYkMsWUFBWSxFQUFaQSxxREFBWTtFQUNaQyxpQkFBaUIsRUFBakJBLDBEQUFpQjtFQUNqQkMsaUJBQWlCLEVBQWpCQSwwREFBaUJBO0FBQ2xCLENBQUMsQ0FBQztBQUVhTCwwRUFBVyxFQUFDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuOGUyNzY5Yjk0MGQxNDZlOTFhZjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBzZWFyY2hSZWR1Y2VyIGZyb20gJy4vc2VhcmNoUmVkdWNlcic7XG5pbXBvcnQgcGxhY2VSZWR1Y2VyIGZyb20gJy4vcGxhY2VSZWR1Y2VyJztcbmltcG9ydCBuYXZpZ2F0aW9uUmVkdWNlciBmcm9tICcuL25hdmlnYXRpb25SZWR1Y2VyJztcbmltcG9ydCBib3hWaXNpYmxlUmVkdWNlciBmcm9tICcuL2JveFZpc2libGVSZWR1Y2VyJztcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuXHRzZWFyY2hSZWR1Y2VyLFxuXHRwbGFjZVJlZHVjZXIsXG5cdG5hdmlnYXRpb25SZWR1Y2VyLFxuXHRib3hWaXNpYmxlUmVkdWNlcixcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=