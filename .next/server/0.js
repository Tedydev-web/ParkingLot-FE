exports.ids = [0];
exports.modules = {

/***/ "./components/App.jsx":
/*!****************************!*\
  !*** ./components/App.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/layout */ "antd/lib/layout");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _SearchingBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SearchingBox */ "./components/SearchingBox.jsx");
/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Map */ "./components/Map.jsx");
/* harmony import */ var _InfoLocation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./InfoLocation */ "./components/InfoLocation.jsx");
/* harmony import */ var _NavigationBox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NavigationBox */ "./components/NavigationBox.jsx");
/* harmony import */ var _redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../redux/actions/boxVisble */ "./redux/actions/boxVisble.js");
/* harmony import */ var _redux_actions_navigation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../redux/actions/navigation */ "./redux/actions/navigation.js");
/* harmony import */ var _redux_actions_place__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../redux/actions/place */ "./redux/actions/place.js");
/* harmony import */ var _Weather_Weather1__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Weather/Weather1 */ "./components/Weather/Weather1.jsx");
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/request */ "./utils/request.js");
/* harmony import */ var _InfoLocationIframe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./InfoLocationIframe */ "./components/InfoLocationIframe.jsx");
/* harmony import */ var _RouteDetails__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./RouteDetails */ "./components/RouteDetails.jsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-i18next */ "react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _translations_i18n_config__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../translations/i18n_config */ "./translations/i18n_config.js");
/* harmony import */ var _SearchHistories__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./SearchHistories */ "./components/SearchHistories.jsx");
/* harmony import */ var _DetailsRestaurant__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./DetailsRestaurant */ "./components/DetailsRestaurant.jsx");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-device-detect */ "react-device-detect");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_21__);



var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;



















// const { Sider } = Layout;

const App = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(props => {
  const {
    boxVisible,
    info_box_collapsed,
    windowWidth,
    dispatch,
    current_place,
    from_place,
    to_place,
    info_restaurant
  } = props;
  const {
    0: temp,
    1: setTemp
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null);
  const {
    0: icon,
    1: setIcon
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null);
  const {
    0: city,
    1: setCity
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null);
  const {
    0: title,
    1: setTitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('Parking Lot Management');
  // console.log(from_place)
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    if (current_place != null && boxVisible === 'info') {
      // document.title = `${current_place.formatted_address}`
      setTitle(current_place.formatted_address);
    } else if (from_place != null && to_place != null && boxVisible === 'navigation') {
      setTitle(`Từ ${from_place.name} đến ${to_place.name}`);
    } else {
      setTitle('Parking Lot Management');
    }
  }, [current_place, boxVisible, from_place, to_place]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    document.title = title;
  }, [title]);
  const toggle = e => {
    e.stopPropagation();
    dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_10__["setCollapsedInfoBoxAction"])(!info_box_collapsed));
  };
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    if (boxVisible === 'navigation') {
      dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_11__["clearAction"])());
      dispatch(Object(_redux_actions_place__WEBPACK_IMPORTED_MODULE_12__["resetLocationAction"])());
    }
  }, [boxVisible, dispatch]);
  const isSmallScreen = windowWidth < 500;
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    getCurrentLocation();
  }, [props.openHistory]);
  const getCurrentLocation = () => {
    const lat = props.latLngCenter.latitude;
    const lng = props.latLngCenter.longitude;
    fetchWeather(lat, lng);
  };
  const fetchWeather = async (lat, lng) => {
    try {
      const response = await _utils_request__WEBPACK_IMPORTED_MODULE_14__["default"].get_weather(lat, lng);
      const fetchedTemp = Math.round(response.data.main.temp);
      const fetchedIcon = response.data.weather[0].icon;
      const fetchedCity = response.data.name;
      setTemp(fetchedTemp);
      setIcon(fetchedIcon);
      setCity(fetchedCity);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError(error.message);
    }
  };
  const changeLanguage = lang => {
    _translations_i18n_config__WEBPACK_IMPORTED_MODULE_18__["default"].changeLanguage(lang);
  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(react_i18next__WEBPACK_IMPORTED_MODULE_17__["I18nextProvider"], {
    i18n: _translations_i18n_config__WEBPACK_IMPORTED_MODULE_18__["default"]
  }, __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_0___default.a, null, __jsx(_Map__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isSmallScreen: isSmallScreen
  }), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "row-app",
    style: {
      overflow: 'hidden'
    }
  }, boxVisible === 'history' && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    xl: 7,
    lg: 9,
    md: 10,
    sm: 11,
    className: "col-span-app",
    style: {
      width: '100%',
      minWidth: '250px',
      maxWidth: '408px',
      flexBasis: 'auto',
      display: info_box_collapsed ? 'none' : ''
    }
  }, __jsx(_SearchHistories__WEBPACK_IMPORTED_MODULE_19__["default"], null)), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    xl: 2,
    style: {
      position: info_box_collapsed ? 'absolute' : 'relative',
      left: info_box_collapsed ? 0 : null,
      display: 'flex',
      alignItems: 'center',
      transform: 'translateY(-50%)',
      top: '50%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(info_box_collapsed ? _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["CaretRightOutlined"] : _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["CaretLeftOutlined"], {
    className: 'trigger',
    onClick: toggle,
    style: {
      pointerEvents: 'auto',
      boxShadow: '1px 1px 8px 1px rgba(0, 0, 0, 0.18)'
    }
  }))), boxVisible === 'details' && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    xl: 7,
    lg: 9,
    md: 10,
    sm: 11,
    className: "col-span-app",
    style: {
      width: '100%',
      minWidth: '50px',
      maxWidth: '408px',
      flexBasis: 'auto',
      display: info_box_collapsed ? 'none' : ''
    }
  }, __jsx(_RouteDetails__WEBPACK_IMPORTED_MODULE_16__["default"], null)), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    xl: 2,
    style: {
      position: info_box_collapsed ? 'absolute' : 'relative',
      left: info_box_collapsed ? 0 : null,
      display: 'flex',
      alignItems: 'center',
      transform: 'translateY(-50%)',
      top: '50%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(info_box_collapsed ? _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["CaretRightOutlined"] : _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["CaretLeftOutlined"], {
    className: 'trigger',
    onClick: toggle,
    style: {
      pointerEvents: 'auto',
      boxShadow: '1px 1px 8px 1px rgba(0, 0, 0, 0.18)'
    }
  }))), boxVisible === 'detailsrestaurant' && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    xl: 7,
    lg: 9,
    md: 10,
    sm: 11,
    className: "col-span-app",
    style: {
      width: '100%',
      minWidth: '250px',
      maxWidth: '408px',
      flexBasis: 'auto',
      display: info_box_collapsed ? 'none' : ''
    }
  }, __jsx(_DetailsRestaurant__WEBPACK_IMPORTED_MODULE_20__["default"], null)), info_restaurant && __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    xl: 7,
    lg: 9,
    md: 10,
    sm: 11,
    className: "col-span-app",
    style: {
      width: '100%',
      marginBottom: '48px',
      marginTop: '48px',
      paddingLeft: '24px',
      minWidth: '250px',
      maxWidth: '408px',
      flexBasis: 'auto',
      display: info_box_collapsed ? 'none' : ''
    }
  }, __jsx(_InfoLocation__WEBPACK_IMPORTED_MODULE_8__["default"], null)), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    xl: 2,
    style: {
      position: info_box_collapsed ? 'absolute' : 'relative',
      left: info_box_collapsed ? 0 : null,
      display: 'flex',
      alignItems: 'center',
      transform: 'translateY(-50%)',
      top: '50%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(info_box_collapsed ? _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["CaretRightOutlined"] : _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["CaretLeftOutlined"], {
    className: 'trigger',
    onClick: toggle,
    style: {
      pointerEvents: 'auto',
      boxShadow: '1px 1px 8px 1px rgba(0, 0, 0, 0.18)'
    }
  }))), boxVisible === 'iframe' && __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    style: {
      width: 380,
      margin: 12
    },
    className: "col-span-app"
  }, __jsx(_InfoLocationIframe__WEBPACK_IMPORTED_MODULE_15__["default"], {
    place: current_place,
    fromPlace: from_place,
    toPlace: to_place
  })), boxVisible === 'search' && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, !react_device_detect__WEBPACK_IMPORTED_MODULE_21__["isMobile"] && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    xl: 7,
    lg: 9,
    md: 10,
    sm: 11,
    className: "col-span-app",
    style: {
      width: '100%',
      maxWidth: '408px',
      flexBasis: 'auto',
      padding: '12px'
    }
  }, __jsx(_SearchingBox__WEBPACK_IMPORTED_MODULE_6__["default"], null), props.openHistory && __jsx(_Weather_Weather1__WEBPACK_IMPORTED_MODULE_13__["default"], {
    temp: temp,
    icon: icon,
    city: city
  }))), react_device_detect__WEBPACK_IMPORTED_MODULE_21__["isMobile"] && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    xl: 7,
    lg: 9,
    md: 10,
    sm: 11,
    className: "col-span-app",
    style: {
      width: '100%',
      flexBasis: 'auto',
      paddingLeft: '9px',
      paddingRight: '9px',
      paddingTop: '9px'
    }
  }, __jsx("div", null, __jsx(_SearchingBox__WEBPACK_IMPORTED_MODULE_6__["default"], null), !props.openHistory && __jsx(_Weather_Weather1__WEBPACK_IMPORTED_MODULE_13__["default"], {
    temp: temp,
    icon: icon,
    city: city
  }))))), boxVisible === 'navigation' && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react_device_detect__WEBPACK_IMPORTED_MODULE_21__["isMobile"] ?
  //( màn Mobile)
  __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    xl: 12,
    lg: 12,
    md: 12,
    sm: 12,
    className: "col-span-app",
    style: {
      width: '100%',
      minWidth: '250px',
      // maxWidth: "408px",
      flexBasis: 'auto',
      display: info_box_collapsed ? 'none' : ''
    }
  }, __jsx(_NavigationBox__WEBPACK_IMPORTED_MODULE_9__["default"], null))) :
  // Non-mobile layout  //( màn Web)
  __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    xl: 7,
    lg: 9,
    md: 10,
    sm: 11,
    className: "col-span-app",
    style: {
      width: '100%',
      minWidth: '350px',
      maxWidth: '408px',
      flexBasis: 'auto',
      display: info_box_collapsed ? 'none' : ''
    }
  }, __jsx(_NavigationBox__WEBPACK_IMPORTED_MODULE_9__["default"], null)), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    xl: 2,
    style: {
      position: info_box_collapsed ? 'absolute' : 'relative',
      left: info_box_collapsed ? 0 : null,
      display: 'flex',
      alignItems: 'center',
      transform: 'translateY(-50%)',
      top: '50%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(info_box_collapsed ? _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["CaretRightOutlined"] : _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["CaretLeftOutlined"], {
    className: 'trigger',
    onClick: toggle,
    style: {
      pointerEvents: 'auto',
      boxShadow: '1px 1px 8px 1px rgba(0, 0, 0, 0.18)'
    }
  })))), boxVisible === 'info' && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react_device_detect__WEBPACK_IMPORTED_MODULE_21__["isMobile"] ?
  //( màn Mobile)
  __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    xl: 12,
    lg: 12,
    md: 12,
    sm: 12,
    className: "col-span-app",
    style: {
      width: '100%',
      minWidth: '250px',
      // maxWidth: "408px",
      flexBasis: 'auto',
      display: info_box_collapsed ? 'none' : ''
    }
  }, __jsx(_InfoLocation__WEBPACK_IMPORTED_MODULE_8__["default"], null))) :
  // Non-mobile layout  //( màn Web)
  __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    xl: 7,
    lg: 9,
    md: 10,
    sm: 11,
    className: "col-span-app",
    style: {
      width: '100%',
      minWidth: '50px',
      maxWidth: '408px',
      flexBasis: 'auto',
      display: info_box_collapsed ? 'none' : ''
    }
  }, __jsx(_InfoLocation__WEBPACK_IMPORTED_MODULE_8__["default"], null)), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    xl: 2,
    style: {
      position: info_box_collapsed ? 'absolute' : 'relative',
      left: info_box_collapsed ? 0 : null,
      display: 'flex',
      alignItems: 'center',
      transform: 'translateY(-50%)',
      top: '50%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(info_box_collapsed ? _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["CaretRightOutlined"] : _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["CaretLeftOutlined"], {
    className: 'trigger',
    onClick: toggle,
    style: {
      pointerEvents: 'auto',
      boxShadow: '1px 1px 8px 1px rgba(0, 0, 0, 0.18)'
    }
  }))))))));
});
const mapStateToProps = state => ({
  from_place: state.navigationReducer.from,
  to_place: state.navigationReducer.to,
  boxVisible: state.boxVisibleReducer.box_visible,
  info_box_collapsed: state.boxVisibleReducer.info_box_collapsed,
  latLngCenter: state.placeReducer.center,
  openHistory: state.searchReducer.search_history,
  current_place: state.placeReducer.current_place,
  info_restaurant: state.navigationReducer.info_restaurant
  // windowWidth: state.windowReducer.width, // Assuming there's a windowReducer managing the window width
});
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps)(App));

/***/ }),

/***/ "./components/BottomInfoLocation.jsx":
/*!*******************************************!*\
  !*** ./components/BottomInfoLocation.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/tooltip */ "antd/lib/tooltip");
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_actions_place__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/actions/place */ "./redux/actions/place.js");
/* harmony import */ var _redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/actions/boxVisble */ "./redux/actions/boxVisble.js");
/* harmony import */ var _redux_actions_search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux/actions/search */ "./redux/actions/search.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
// import React, { Component } from 'react';
// import { getDetailByLatLngAction, getDetailAroundPlace } from '../redux/actions/place';
// import { setBoxVisibleAction, setPopupRightClick, setRedMarkerAction } from "../redux/actions/boxVisble"
// import { Card, Tooltip } from 'antd';
// import { connect } from 'react-redux';
// import { CloseCircleFilled } from '@ant-design/icons';
// import { clearSearchAroundAction } from '../redux/actions/search';

// class BottomInfoLocation extends Component {
//   onClick = () => {
//     if (!this.props.isMarkerAround) {
//       const latLng = {
//         latitude: this.props.lat,
//         longitude: this.props.lng
//       }
//       this.props.dispatch(getDetailByLatLngAction(latLng));
//     } else {
//       this.props.dispatch(getDetailAroundPlace(this.props.place_id))
//     }
//     this.props.changeVisibleBottomInfo(false);
//     this.props.dispatch(setBoxVisibleAction('info'));
//     this.props.dispatch(clearSearchAroundAction());
//     this.props.dispatch(setPopupRightClick(false));
//     this.props.removeMarker();
//   }

//   onClose = (e) => {
//     e.stopPropagation();
//     this.props.changeVisibleBottomInfo(false);
//     this.props.dispatch(clearSearchAroundAction());
//     this.props.removeMarker();
//   }

//   render() {
//     const { name, lat, lng, address } = this.props;
//     const title = <Tooltip title={<span onClick={(e) => e.stopPropagation()}>{name}</span>}>
//       <span>{name}</span>
//     </Tooltip>

//     return (
//       <div className='bottom-info-location-div'>
//         <Card title={title}
//           className="bottom-info-location"
//           onClick={() => this.onClick()}
//           headStyle={{ padding: '5px 16px', margin: 0, color: '#000000' }}
//           bodyStyle={{ padding: '12px 16px', margin: 0, color: '#595959' }}
//           extra={<CloseCircleFilled
//             style={{ color: '#000000', fontSize: 21, zIndex: 9999 }}
//             onClick={this.onClose}
//           />}
//         >
//           <Tooltip placement="bottom" title={<span onClick={(e) => e.stopPropagation()}>{address}</span>}>
//             <p className="address-mini-info">{address}</p>
//           </Tooltip>
//           <p
//             className="coord-mini-info"
//             onClick={(e) => e.stopPropagation()}
//             style={{ cursor: "text" }}
//           >
//             {`${lat.toFixed(5)},${lng.toFixed(5)}`}
//           </p>
//         </Card>
//       </div>
//     )
//   }
// }

// export default connect(null)(BottomInfoLocation);

// ---------------------------------------------------------------//






const BottomInfoLocation = props => {
  const onClick = () => {
    const {
      dispatch,
      isMarkerAround,
      lat,
      lng,
      place_id,
      changeVisibleBottomInfo,
      removeMarker
    } = props;
    if (!isMarkerAround) {
      const latLng = {
        latitude: lat,
        longitude: lng
      };
      dispatch(Object(_redux_actions_place__WEBPACK_IMPORTED_MODULE_5__["getDetailByLatLngAction"])(latLng));
    } else {
      dispatch(Object(_redux_actions_place__WEBPACK_IMPORTED_MODULE_5__["getDetailAroundPlace"])(place_id));
    }
    changeVisibleBottomInfo(false);
    dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_6__["setBoxVisibleAction"])("info"));
    dispatch(Object(_redux_actions_search__WEBPACK_IMPORTED_MODULE_7__["clearSearchAroundAction"])());
    dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_6__["setPopupRightClick"])(false));
    removeMarker();
  };
  const onClose = e => {
    e.stopPropagation();
    const {
      changeVisibleBottomInfo,
      dispatch,
      removeMarker
    } = props;
    changeVisibleBottomInfo(false);
    dispatch(Object(_redux_actions_search__WEBPACK_IMPORTED_MODULE_7__["clearSearchAroundAction"])());
    removeMarker();
  };
  const {
    title,
    address,
    lat,
    lng
  } = props;
  return __jsx("div", {
    className: "bottom-info-location-div"
  }, __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_0___default.a, {
    title: title,
    className: "bottom-info-location",
    onClick: onClick,
    headStyle: {
      padding: "5px 16px",
      margin: 0,
      color: "#000000"
    },
    bodyStyle: {
      padding: "12px 16px",
      margin: 0,
      color: "#595959"
    },
    extra: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["CloseCircleFilled"], {
      style: {
        color: "#000000",
        fontSize: 21,
        zIndex: 9999
      },
      onClick: onClose
    })
  }, __jsx(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_1___default.a, {
    placement: "bottom",
    title: __jsx("span", {
      onClick: e => e.stopPropagation()
    }, address)
  }, __jsx("p", {
    className: "address-mini-info"
  }, address)), __jsx("p", {
    className: "coord-mini-info",
    onClick: e => e.stopPropagation(),
    style: {
      cursor: "text"
    }
  }, `${lat.toFixed(5)},${lng.toFixed(5)}`)));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(null)(BottomInfoLocation));

/***/ }),

/***/ "./components/DetailsRestaurant.jsx":
/*!******************************************!*\
  !*** ./components/DetailsRestaurant.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "lodash/debounce");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/request */ "./utils/request.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_image_type_location__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/image_type_location */ "./utils/image_type_location.js");
/* harmony import */ var _redux_actions_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux/actions/navigation */ "./redux/actions/navigation.js");
/* harmony import */ var _redux_actions_place__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redux/actions/place */ "./redux/actions/place.js");
/* harmony import */ var _redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../redux/actions/boxVisble */ "./redux/actions/boxVisble.js");
/* harmony import */ var _redux_sagas_placeSaga__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../redux/sagas/placeSaga */ "./redux/sagas/placeSaga.js");
/* harmony import */ var _redux_actions_search__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../redux/actions/search */ "./redux/actions/search.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;














const DetailsRestaurant = props => {
  const {
    0: inputValue,
    1: setInputValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: autocompleteResults,
    1: setAutocompleteResults
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: suggestions,
    1: setSuggestions
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: showSuggestions,
    1: setShowSuggestions
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const inputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const {
    0: isTooltipVisible,
    1: setTooltipVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const toggleTooltip = () => {
    setTooltipVisible(!isTooltipVisible);
  };
  const tooltipRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const triggerRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const handleClickOutside = event => {
    if (tooltipRef.current && !tooltipRef.current.contains(event.target) && !triggerRef.current.contains(event.target)) {
      setTooltipVisible(false);
    }
  };
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (isTooltipVisible) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isTooltipVisible]);
  const {
    t
  } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])("common");
  const debouncedSearch = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()((newValue, lat, long) => {
    fetchAutocompleteResults(newValue, lat, long);
  }, 500), []);
  const handleChange = e => {
    props.dispatch(Object(_redux_actions_search__WEBPACK_IMPORTED_MODULE_11__["setRestaurantData"])([]));
    const newValue = e.target.value;
    setInputValue(newValue);
    if (newValue && props.to_place && props.to_place.geometry) {
      const lat = props.to_place.geometry.location.lat;
      const long = props.to_place.geometry.location.lng;
      debouncedSearch(newValue, lat, long);
    }
  };
  const handleInputClick = () => {
    setShowSuggestions(true);
  };
  const fetchAutocompleteResults = async (input, lat, long) => {
    try {
      const newlatlong = `${lat},${long}`;
      const results = await _utils_request__WEBPACK_IMPORTED_MODULE_4__["default"].autocomplete(input, newlatlong);
      setAutocompleteResults(results.data.predictions);
      let restaurantData = [];
      for (let data of results.data.predictions) {
        const respone = await _utils_request__WEBPACK_IMPORTED_MODULE_4__["default"].place_detail(data.place_id);
        restaurantData.push(respone.data.result);
      }
      props.dispatch(Object(_redux_actions_search__WEBPACK_IMPORTED_MODULE_11__["setRestaurantData"])(restaurantData));
      const newSuggestions = results.data.predictions.map(item => ({
        icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["SearchOutlined"], null),
        text: item.structured_formatting.main_text,
        subtext: item.structured_formatting.secondary_text
      }));
      setSuggestions(newSuggestions);
    } catch (error) {
      console.error("Error fetching autocomplete results:", error);
    }
  };

  // useEffect(() => {
  //   if (showSuggestions) {
  //     inputRef.current.style.borderBottomLeftRadius = "0";
  //     inputRef.current.style.borderBottomRightRadius = "0";
  //   } else {
  //     inputRef.current.style.borderBottomLeftRadius = "24px";
  //     inputRef.current.style.borderBottomRightRadius = "24px";
  //   }
  // }, [showSuggestions]);

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    var _props$to_place, _props$to_place$geome, _props$to_place$geome2, _props$to_place2, _props$to_place2$geom, _props$to_place2$geom2;
    const lat = (_props$to_place = props.to_place) === null || _props$to_place === void 0 ? void 0 : (_props$to_place$geome = _props$to_place.geometry) === null || _props$to_place$geome === void 0 ? void 0 : (_props$to_place$geome2 = _props$to_place$geome.location) === null || _props$to_place$geome2 === void 0 ? void 0 : _props$to_place$geome2.lat;
    const long = (_props$to_place2 = props.to_place) === null || _props$to_place2 === void 0 ? void 0 : (_props$to_place2$geom = _props$to_place2.geometry) === null || _props$to_place2$geom === void 0 ? void 0 : (_props$to_place2$geom2 = _props$to_place2$geom.location) === null || _props$to_place2$geom2 === void 0 ? void 0 : _props$to_place2$geom2.lng;
    const input = props.type_latlong;
    if (lat && long) {
      fetchAutocompleteResults(input, lat, long);
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const handleClickOutside = event => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const onTitleSelect = async place => {
    // props.dispatch(setRestaurantData([]))
    // props.dispatch(clearAction())
    let check = true;
    let data = JSON.parse(localStorage.getItem("search_history")) || [];
    if (!place.location) {
      const dataHistory = await Object(_redux_sagas_placeSaga__WEBPACK_IMPORTED_MODULE_10__["getDetailIdService"])(place.place_id);
      if (check) {
        if (place != null && data.length < 100) {
          place.location = dataHistory.data.result.geometry.location;
          // place.place_id = "00000000000"
          data.push(place);
        } else if (place != null && data.length >= 100) {
          data.shift();
          data.push(place);
        }
      }
      window.localStorage.setItem("search_history", JSON.stringify(data));
      const pid = place.id || place.place_id;
      // console.log(pid)
      props.dispatch(Object(_redux_actions_place__WEBPACK_IMPORTED_MODULE_8__["getDetailByIdAction"])(pid));
      // setValue(`${place.structured_formatting.main_text} - ${place.structured_formatting.secondary_text}`);
      // props.dispatch(setBoxVisibleAction("info"));
      props.dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_7__["setInfoRestaurant"])(true));
    } else {
      const latLng = {
        latitude: place.location.lat,
        longitude: place.location.lng
      };
      const response = (await Object(_redux_sagas_placeSaga__WEBPACK_IMPORTED_MODULE_10__["getDetailLatLngService"])(latLng)).data.results;
      // console.log("respone______", response)
      for (let i = response.length - 1; i >= 0; i--) {
        if (place.location.lat === response[i].geometry.location.lat && place.location.lng === response[i].geometry.location.lng && place.structured_formatting.main_text === response[i].name && place.place_id != response[i].place_id) {
          for (let i = data.length - 1; i >= 0; i--) {
            if (data[i].place_id === place.place_id) {
              data.splice(i, 1);
              break;
            }
          }
          place.place_id = response[i].place_id;
          data.push(place);
          break;
        }
      }
      for (let i = data.length - 1; i >= 0; i--) {
        // Nếu có rồi thì đảo lại place đó lên
        if (data[i].place_id === place.place_id) {
          // place.location = dataHistory.data.result.geometry.location
          data.splice(i, 1);
          data.push(place);
          // check = false
          break;
        }
      }
      window.localStorage.setItem("search_history", JSON.stringify(data));
      const pid = place.id || place.place_id;
      props.dispatch(Object(_redux_actions_place__WEBPACK_IMPORTED_MODULE_8__["getDetailByIdAction"])(pid));
      // setValue(`${place.structured_formatting.main_text} - ${place.structured_formatting.secondary_text}`);
      props.dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_7__["setInfoRestaurant"])(true));
    }
  };
  const closeBox = async () => {
    var _responseToPlace$data, _responseFromPlace$da;
    props.dispatch(Object(_redux_actions_search__WEBPACK_IMPORTED_MODULE_11__["setRestaurantData"])([]));
    const toPlaceId = props.to_place.id || props.to_place.place_id;
    const responseToPlace = await _utils_request__WEBPACK_IMPORTED_MODULE_4__["default"].place_detail(toPlaceId);
    const toPlace = (_responseToPlace$data = responseToPlace.data) === null || _responseToPlace$data === void 0 ? void 0 : _responseToPlace$data.result;
    const fromPlaceId = props.from_place.id || props.from_place.place_id;
    const responseFromPlace = await _utils_request__WEBPACK_IMPORTED_MODULE_4__["default"].place_detail(fromPlaceId);
    const fromPlace = (_responseFromPlace$da = responseFromPlace.data) === null || _responseFromPlace$da === void 0 ? void 0 : _responseFromPlace$da.result;
    if (toPlace && fromPlace) {
      const viewport = {
        longitude: toPlace.geometry.location.lng,
        latitude: toPlace.geometry.location.lat,
        zoom: 15
      };
      props.dispatch(Object(_redux_actions_place__WEBPACK_IMPORTED_MODULE_8__["setMapViewportAction"])(viewport));
      // props.dispatch(setTypeInput(false));
      props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_9__["setBoxVisibleAction"])("navigation"));
      props.dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_7__["navigationToAction"])(toPlace, `${toPlace.name} - ${toPlace.formatted_address}`));
      props.dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_7__["navigationFromAction"])(fromPlace, `${fromPlace.name} - ${fromPlace.formatted_address}`));
      props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_9__["setRedMarkerAction"])(false));
      props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_9__["setPopupRightClick"])(false));
    } else {
      message.error("Không tìm thấy vị trí của bạn!");
    }
  };
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (props.to_place && props.to_place.geometry && props.type_latlong) {
      const lat = props.to_place.geometry.location.lat;
      const long = props.to_place.geometry.location.lng;
      const input = props.type_latlong;
      fetchAutocompleteResults(input, lat, long);
    }
  }, [props.to_place, props.type_latlong]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const handleClickOutside = event => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const iconColor = inputValue ? "#1a73e8" : "inherit";
  return __jsx("div", {
    className: "content-servicedetails"
  }, __jsx("div", {
    className: "id-omnibox-container"
  }, __jsx("div", {
    className: "restaurant-omnibox"
  }, __jsx("div", {
    id: "omnibox-singlebox"
  }, __jsx("div", {
    className: "restaurant-omnibox-singlebox"
  }, __jsx("div", {
    className: "restaurant-active"
  }, __jsx("span", {
    id: "restaurant-header--icon--back",
    style: {
      fontSize: "20px"
    },
    onClick: closeBox
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["ArrowLeftOutlined"], {
    id: "restaurant--icon--top"
  }), __jsx("span", {
    className: "tooltip--comeback--restaurant"
  }, t("route_combeack_i18")))), __jsx("div", {
    className: "restaurant-search--adress",
    id: "searchbox",
    ref: inputRef
  }, __jsx("input", {
    id: "search--box--input",
    placeholder: t("search_input"),
    value: inputValue,
    onChange: handleChange,
    onClick: handleInputClick,
    autoComplete: "off"
  }), autocompleteResults && autocompleteResults.length > 0 && __jsx("div", {
    className: "restaurant-search-results"
  }, autocompleteResults.map((item, index) => __jsx("div", {
    className: "restaurant-search-button-container",
    key: index
  }, __jsx("button", {
    className: "restaurant-search-button",
    id: "searchbox-searchbutton",
    onClick: () => {
      onTitleSelect(item);
    },
    disabled: !inputValue.trim()
  }, __jsx("span", {
    style: {
      fontSize: "20px",
      color: iconColor
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["SearchOutlined"], {
    id: "searchbox-searchbutton--SearchOutlined"
  }))), __jsx("span", {
    className: "tooltip--search--restaurant"
  }, t("search_button_i18"))))), __jsx("div", {
    className: "restaurant-clear-button-container"
  }, __jsx("div", {
    className: "restaurant-clear-button-wrapper"
  }, __jsx("span", {
    className: "restaurant-icon",
    style: {
      fontSize: "15px"
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["EnvironmentOutlined"], null)), __jsx("div", {
    className: "restaurant-clear-button--close"
  }), __jsx("div", {
    className: "vertical-border"
  }, __jsx("button", {
    className: "restaurant-clear-button",
    onClick: closeBox
  }, __jsx("span", {
    style: {
      fontSize: "13px"
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["CloseOutlined"], {
    id: "close--servicedetails"
  }))), __jsx("span", {
    className: "tooltip--Cancel--nearby--search"
  }, t("close_button_i18")))))), __jsx("div", {
    className: "restaurant-results-header--top--scroll"
  }, __jsx("div", {
    className: "restaurant-results-header--top"
  }, __jsx("div", {
    className: "restaurant-results-header"
  }, __jsx("h1", {
    className: "restaurant-results-title"
  }, t("results-title_button_i18")), __jsx("span", {
    className: "restaurant-results-title--span",
    onClick: toggleTooltip,
    ref: triggerRef
  }, __jsx("img", {
    src: "static/images/info_gm_grey_18dp.png",
    alt: "info"
  })))), __jsx("div", {
    class: "result--tooltip-search--button"
  }, isTooltipVisible && __jsx("div", {
    className: "result--tooltip-search",
    ref: tooltipRef
  }, __jsx("div", {
    className: "result--tooltip-search--title"
  }, t("results-title_button_search_i18")), __jsx("div", {
    className: "result--tooltip-search--text"
  }, t("results-title_button_text_1_i18"), __jsx("span", {
    style: {
      color: "#1890FF"
    }
  }, " ", t("results-title_button_text_2_i18"), " "), t("results-title_button_text_3_i18")))), autocompleteResults && autocompleteResults.length > 0 && autocompleteResults.map((item, index) => __jsx("div", {
    className: "restaurant-list-item",
    key: index,
    onClick: () => onTitleSelect(item)
  }, __jsx("div", {
    className: "text-content"
  }, __jsx("h3", null, item.structured_formatting.main_text), __jsx("p", null, item.structured_formatting.secondary_text)), __jsx("a", {
    className: "restaurant-item-image"
  }, __jsx("img", {
    src: Object(_utils_image_type_location__WEBPACK_IMPORTED_MODULE_6__["getImageByType"])(item.types[0]),
    width: "80px",
    height: "80px",
    alt: `Image of ${item.name}`
  }))))))))));
};
const mapStateToProps = state => ({
  from_place: state.navigationReducer.from,
  to_place: state.navigationReducer.to,
  result: state.navigationReducer.result,
  result_select: state.navigationReducer.result_select,
  response_status: state.navigationReducer.response_status,
  my_location: state.placeReducer.my_location,
  typeInput: state.navigationReducer.type_input,
  current_place: state.placeReducer.current_place,
  type_latlong: state.navigationReducer.type_latlong,
  places: state.searchReducer.places,
  boxVisible: state.boxVisibleReducer.box_visible,
  info_box_collapsed: state.boxVisibleReducer.info_box_collapsed,
  latLngCenter: state.placeReducer.center,
  openHistory: state.searchReducer.search_history,
  searchData: state.searchReducer.search_data
});
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(DetailsRestaurant));

/***/ }),

/***/ "./components/DragDropContainer.jsx":
/*!******************************************!*\
  !*** ./components/DragDropContainer.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_sortable_hoc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-sortable-hoc */ "react-sortable-hoc");
/* harmony import */ var react_sortable_hoc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_sortable_hoc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _InputNavigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InputNavigation */ "./components/InputNavigation.jsx");
/* harmony import */ var _redux_actions_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actions/navigation */ "./redux/actions/navigation.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-device-detect */ "react-device-detect");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_images__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/images */ "./utils/images.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_7__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const SortableItem = Object(react_sortable_hoc__WEBPACK_IMPORTED_MODULE_1__["SortableElement"])(({
  children,
  toggleHidden
}) => __jsx("div", {
  onMouseEnter: toggleHidden,
  onMouseLeave: toggleHidden
}, children));
const SortableList = Object(react_sortable_hoc__WEBPACK_IMPORTED_MODULE_1__["SortableContainer"])(({
  children
}) => {
  return __jsx("div", null, children);
});
const DragAndDropContainer = props => {
  const {
    t
  } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])("common");
  const {
    typeInput
  } = props;
  const {
    0: hiddenTop,
    1: setHiddenTop
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const toggleHiddenTop = () => {
    setHiddenTop(!hiddenTop);
  };
  const {
    0: hiddenBot,
    1: setHiddenBot
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const toggleHiddenBot = () => {
    setHiddenBot(!hiddenBot);
  };
  const {
    0: items,
    1: setItems
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{
    id: "top",
    place: "start_place"
  }, {
    id: "bottom",
    place: "end_place"
  }]);
  const onSortEnd = ({
    oldIndex,
    newIndex
  }) => {
    if (oldIndex !== newIndex) {
      const sortedItems = Object(react_sortable_hoc__WEBPACK_IMPORTED_MODULE_1__["arrayMove"])(items, oldIndex, newIndex);
      // setItems(sortedItems);
      props.dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_3__["swapAction"])());
    }
  };
  const clickFromInput = () => {
    props.dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_3__["setTypeInput"])(true));
  };
  const clickToInput = () => {
    props.dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_3__["setTypeInput"])(false));
  };
  const {
    0: isHovered,
    1: setIsHovered
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: isHovered2,
    1: setIsHovered2
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx("div", null, !react_device_detect__WEBPACK_IMPORTED_MODULE_5__["isMobile"] && __jsx(SortableList, {
    onSortEnd: onSortEnd,
    lockAxis: "y",
    lockToContainerEdges: true,
    lockOffset: "10%"
  }, items.map((item, index) => __jsx(SortableItem, {
    key: `item-${index}`,
    index: index,
    toggleHidden: item.id === "top" ? toggleHiddenTop : toggleHiddenBot
  }, item.id === "top" ? __jsx("div", {
    className: "Input_top_web"
  }, __jsx("div", {
    style: {
      alignItems: "center",
      display: "flex",
      width: "100px",
      cursor: "grab"
    },
    onMouseOver: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false)
  }, __jsx("img", {
    src: _utils_images__WEBPACK_IMPORTED_MODULE_6__["default"].six_dots,
    alt: "six dots",
    style: {
      display: isHovered ? "inline" : "none",
      position: "fixed"
    }
  }), __jsx("div", {
    className: "Contains_bar_top"
  }, __jsx("div", {
    className: "Drag_top"
  }, " ", t("search_drag_drop_tooltip")), __jsx("div", {
    class: "Above"
  }, __jsx("img", {
    src: "static/images/start_location_grey800_18dp.png",
    id: "round_left",
    alt: "icon",
    style: {
      opacity: 0
    }
  })))), __jsx("div", {
    className: "Hover_top",
    onClick: clickFromInput
  }, __jsx(_InputNavigation__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "Gation",
    placeholder: t("search_input_drag_drop_top"),
    type: "start_input",
    place: item.place,
    autofocus: true
  }), __jsx("div", {
    className: "Tooltip_top"
  }, t("search_input_drag_drop_top_tooltip")))) : __jsx("div", {
    className: "Input_bot_web"
  }, __jsx("div", {
    style: {
      alignItems: "center",
      display: "flex",
      cursor: "grab"
    },
    onMouseOver: () => setIsHovered2(true),
    onMouseLeave: () => setIsHovered2(false)
  }, __jsx("img", {
    src: _utils_images__WEBPACK_IMPORTED_MODULE_6__["default"].six_dots,
    alt: "six dots",
    style: {
      display: isHovered2 ? "inline" : "none",
      position: "fixed"
    }
  }), __jsx("div", {
    className: "Contains_bar"
  }, __jsx("div", {
    class: "Below"
  }, __jsx("img", {
    src: "static/images/place_outline_red600_18dp.png",
    id: "round_bot",
    alt: "icon",
    style: {
      opacity: 0
    }
  })))), __jsx("div", {
    className: "Hover_bot",
    onClick: clickToInput
  }, __jsx(_InputNavigation__WEBPACK_IMPORTED_MODULE_2__["default"], {
    placeholder: t("search_input_drag_drop_bottom"),
    type: "end_input",
    place: item.place,
    autofocus: false
  }), __jsx("div", {
    className: "Tooltip_bot"
  }, " ", t("search_input_drag_drop_bottom"))))))), react_device_detect__WEBPACK_IMPORTED_MODULE_5__["isMobile"] && __jsx(SortableList, {
    onSortEnd: onSortEnd,
    lockAxis: "y",
    lockToContainerEdges: true,
    lockOffset: "0%"
  }, items.map((item, index) => __jsx(SortableItem, {
    key: `item-${index}`,
    index: index,
    toggleHidden: item.id === "top" ? toggleHiddenTop : toggleHiddenBot
  }, item.id === "top" ? __jsx("div", {
    className: "Input_top"
  }, __jsx("div", {
    className: "Hover_top",
    onClick: clickFromInput
  }, __jsx(_InputNavigation__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "Gation",
    placeholder: t("search_input_drag_drop_top_mobile"),
    type: "start_input",
    place: item.place,
    autofocus: true
  }))) : __jsx("div", {
    className: "Input_bot"
  }, __jsx("div", {
    className: "Hover_bot",
    onClick: clickToInput
  }, __jsx(_InputNavigation__WEBPACK_IMPORTED_MODULE_2__["default"], {
    placeholder: t("search_input_drag_drop_bottom"),
    type: "end_input",
    place: item.place,
    autofocus: false
  })))))));
};
const mapStateToProps = state => ({
  typeInput: state.navigationReducer.type_input
  // from_place: state.navigationReducer.from,
  // to_place: state.navigationReducer.to,
});
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps)(DragAndDropContainer));

/***/ }),

/***/ "./components/InfoLocation.jsx":
/*!*************************************!*\
  !*** ./components/InfoLocation.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/list */ "antd/lib/list");
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/divider */ "antd/lib/divider");
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/tooltip */ "antd/lib/tooltip");
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/message */ "antd/lib/message");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_images__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/images */ "./utils/images.js");
/* harmony import */ var _redux_actions_place__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../redux/actions/place */ "./redux/actions/place.js");
/* harmony import */ var _redux_actions_navigation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../redux/actions/navigation */ "./redux/actions/navigation.js");
/* harmony import */ var _SearchingBox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./SearchingBox */ "./components/SearchingBox.jsx");
/* harmony import */ var _redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../redux/actions/boxVisble */ "./redux/actions/boxVisble.js");
/* harmony import */ var _redux_actions_search__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../redux/actions/search */ "./redux/actions/search.js");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-copy-to-clipboard */ "react-copy-to-clipboard");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../utils/request */ "./utils/request.js");
/* harmony import */ var _ShareLocation__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ShareLocation */ "./components/ShareLocation.jsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-i18next */ "react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _utils_image_type_location__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../utils/image_type_location */ "./utils/image_type_location.js");
/* harmony import */ var _DetailsRestaurant__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./DetailsRestaurant */ "./components/DetailsRestaurant.jsx");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-device-detect */ "react-device-detect");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_22__);







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

















// import DownOutlined from "@ant-design/icons";
const InfoLocation = props => {
  // ----------------------------------Màn Mobile--------------------------------------------------
  const {
    0: isFullscreen,
    1: setIsFullscreen
  } = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(false);
  const handleClick = event => {
    // Kiểm tra nếu phần tử được click là input hoặc là bên trong thẻ input thì không làm gì cả

    if (event.target.tagName.toLowerCase() === "input") {
      console.log('-------98899889');
      return;
    }
    setIsFullscreen(!isFullscreen);
  };

  // ----------------------------------------------------------------------------------------------------
  const {
    current_place,
    near_places,
    info_restaurant
  } = props;
  const {
    0: showPopup,
    1: setShowPopup
  } = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(false);
  const {
    t
  } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_19__["useTranslation"])("common");
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(() => {
    if (props.current_place && current_place && current_place.place_id !== props.current_place.place_id) {
      props.dispatch(Object(_redux_actions_search__WEBPACK_IMPORTED_MODULE_15__["clearSearchAroundAction"])());
    }
  }, [current_place]);
  const selectNearPlace = pid => {
    props.dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_12__["setInfoRestaurant"])(false));
    props.dispatch(Object(_redux_actions_place__WEBPACK_IMPORTED_MODULE_11__["getDetailByIdAction"])(pid));
    props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_14__["setBoxVisibleAction"])("info"));
    props.dispatch(Object(_redux_actions_search__WEBPACK_IMPORTED_MODULE_15__["clearSearchAroundAction"])());
  };
  const closeInfoRestaurant = () => {
    props.dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_12__["setInfoRestaurant"])(false));
  };
  const searchAround = place => {
    const viewport = {
      longitude: place.geometry.location.lng,
      latitude: place.geometry.location.lat,
      zoom: 15
    };
    const location = {
      lat: place.geometry.location.lat,
      lng: place.geometry.location.lng
    };
    props.dispatch(Object(_redux_actions_place__WEBPACK_IMPORTED_MODULE_11__["setMapViewportAction"])(viewport));
    props.dispatch(Object(_redux_actions_search__WEBPACK_IMPORTED_MODULE_15__["searchAroundAction"])(location, props.viewport.zoom));
    props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_14__["setRedMarkerAction"])(true, location));
    props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_14__["setPopupRightClick"])(false));
  };
  const navigationTo = async place => {
    var _response$data;
    // console.log('------------------------to', place)
    const selectedPlaceId = place.id || place.place_id;
    const response = await _utils_request__WEBPACK_IMPORTED_MODULE_17__["default"].place_detail(selectedPlaceId);
    const selectedPlace = (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.result;
    if (selectedPlace) {
      const viewport = {
        longitude: selectedPlace.geometry.location.lng,
        latitude: selectedPlace.geometry.location.lat,
        zoom: 15
      };
      props.dispatch(Object(_redux_actions_place__WEBPACK_IMPORTED_MODULE_11__["setMapViewportAction"])(viewport));
      // props.dispatch(setTypeInput(false));
      props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_14__["setBoxVisibleAction"])("navigation"));
      props.dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_12__["navigationToAction"])(selectedPlace, `${selectedPlace.name} - ${selectedPlace.formatted_address}`));
      props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_14__["setRedMarkerAction"])(false));
      props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_14__["setPopupRightClick"])(false));
    } else {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_6___default.a.error("Không tìm thấy vị trí của bạn!");
    }
    try {
      const my_location = props.my_location;
      if (my_location) {
        const response = await _utils_request__WEBPACK_IMPORTED_MODULE_17__["default"].geocode(my_location);
        if (response.data.results.length > 0) {
          props.dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_12__["navigationFromAction"])(_objectSpread(_objectSpread({}, response.data.results[0]), {}, {
            name: response.data.results[0].address_components[0].long_name
          }), "Vị trí của bạn"));
        }
      }
    } catch (error) {
      throw error;
    }
  };
  const saveToBookmark = e => {
    e.stopPropagation();
    if (window.sidebar && window.sidebar.addPanel) {
      // Firefox <23
      window.sidebar.addPanel(document.title, window.location.href, "");
      antd_lib_message__WEBPACK_IMPORTED_MODULE_6___default.a.success("Đã lưu vào bookmark !");
    } else if (window.external && "AddFavorite" in window.external) {
      // Internet Explorer
      window.external.AddFavorite(location.href, document.title);
      antd_lib_message__WEBPACK_IMPORTED_MODULE_6___default.a.success("Đã lưu vào bookmark !");
    } else if (window.opera && window.print || window.sidebar && !(window.sidebar instanceof Node)) {
      // Opera <15 and Firefox >23
      const triggerBookmark = document.createElement("a");
      triggerBookmark.setAttribute("rel", "sidebar");
      triggerBookmark.setAttribute("title", document.title);
      triggerBookmark.setAttribute("href", window.location.href);
      antd_lib_message__WEBPACK_IMPORTED_MODULE_6___default.a.success("Đã lưu vào bookmark !");
    } else {
      // For other browsers (mainly WebKit)
      antd_lib_message__WEBPACK_IMPORTED_MODULE_6___default.a.info("Bạn có thể lưu địa điểm này vào dấu trang bằng cách nhấn " + (navigator.userAgent.toLowerCase().indexOf("mac") !== -1 ? "Command/Cmd" : "CTRL") + " + D trên bàn phím.", 5);
    }
  };
  const saveToClipBoard = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl).then(function () {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_6___default.a.success(t("copy_to_climb"));
    }, function (err) {
      console.error('Không thể lưu URL vào clipboard: ', err);
    });
  };
  let titleAddress;
  if (current_place) {
    titleAddress = __jsx("div", {
      className: "addressDetail",
      onClick: handleClick
    }, __jsx(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_5___default.a, {
      title: current_place.name || current_place.address_components[0].long_name,
      trigger: ["hover"]
    }, __jsx("span", null, current_place.name || current_place.address_components[0].long_name)), __jsx(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_5___default.a, {
      title: current_place.formatted_address
    }, __jsx("h5", null, current_place.formatted_address)));
  }
  return __jsx("div", null, !react_device_detect__WEBPACK_IMPORTED_MODULE_22__["isMobile"] && __jsx("div", {
    className: "info_location_web",
    style: !info_restaurant ? {
      height: "100vh"
    } : {
      height: "100%",
      borderRadius: "16px"
    }
  }, __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_0___default.a, {
    className: "infor-box",
    bodyStyle: {
      padding: 0,
      flexDirection: "column"
    },
    placement: "left"
  }, __jsx("div", {
    style: {
      padding: 16,
      backgroundImage: `url(${current_place ? Object(_utils_image_type_location__WEBPACK_IMPORTED_MODULE_20__["getImageByType"])(current_place.types[0]) : null})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      height: 240,
      position: "relative"
    }
  }, __jsx("div", {
    className: "search-box"
  }, !info_restaurant && __jsx(_SearchingBox__WEBPACK_IMPORTED_MODULE_13__["default"], {
    place: current_place
  }), info_restaurant && __jsx("div", {
    onClick: closeInfoRestaurant,
    className: "close-info-restaurant"
  }, "X"))), __jsx(antd_lib_divider__WEBPACK_IMPORTED_MODULE_4___default.a, {
    style: {
      marginTop: 0,
      marginBottom: 0
    }
  }), titleAddress, __jsx(antd_lib_divider__WEBPACK_IMPORTED_MODULE_4___default.a, {
    style: {
      marginTop: 0,
      marginBottom: 0
    }
  }), __jsx("div", {
    className: "actions-info-wrapp"
  }, __jsx("div", {
    className: "actions-icon"
  }, !info_restaurant && __jsx("div", {
    onClick: () => {
      navigationTo(current_place);
      props.dispatch(Object(_redux_actions_search__WEBPACK_IMPORTED_MODULE_15__["clearSearchAroundAction"])());
    }
  }, __jsx("div", {
    className: "icon-fist"
  }, __jsx("i", {
    className: "fas fa-directions",
    style: {
      cursor: "pointer",
      color: "#FFFFFF",
      fontSize: 18
    }
  })), __jsx("div", {
    className: "text"
  }, t("way"))), __jsx("div", {
    onClick: saveToBookmark
  }, __jsx("div", {
    className: "icon"
  }, __jsx("i", {
    className: "far fa-bookmark",
    style: {
      cursor: "pointer",
      color: "#1A73E8",
      fontSize: 18
    }
  })), __jsx("div", {
    className: "text"
  }, t("save"))), __jsx("div", {
    onClick: togglePopup
  }, __jsx("div", {
    className: "icon"
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["ShareAltOutlined"], {
    key: "share",
    style: {
      fontSize: 18,
      color: "#1A73E8"
    }
  })), __jsx("div", {
    className: "text"
  }, t("share"))))), __jsx(antd_lib_divider__WEBPACK_IMPORTED_MODULE_4___default.a, {
    style: {
      marginBottom: 0,
      marginTop: 0
    }
  }), __jsx("div", {
    className: "captionRow"
  }, __jsx("span", null, t("related_locations"))), __jsx(antd_lib_divider__WEBPACK_IMPORTED_MODULE_4___default.a, {
    style: {
      marginBottom: 0,
      marginTop: 0
    }
  }), __jsx("div", {
    style: {
      flex: 1,
      padding: "0 5px"
    }
  }, __jsx(antd_lib_list__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "list-near-places",
    itemLayout: "horizontal",
    dataSource: near_places,
    renderItem: item => __jsx(antd_lib_list__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
      style: {
        cursor: "pointer"
      },
      onClick: () => selectNearPlace(item.place_id)
    }, __jsx(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_5___default.a, {
      title: __jsx("div", null, __jsx("h4", {
        style: {
          color: "white"
        }
      }, item.structured_formatting.main_text), __jsx("h4", {
        style: {
          color: "white"
        }
      }, item.structured_formatting.secondary_text))
    }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default.a, {
      style: {
        width: "100%",
        padding: "0 16px"
      }
    }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
      span: 20,
      push: 3,
      style: {
        display: "flex",
        alignItems: "center",
        paddingLeft: 16
      }
    }, __jsx("div", {
      className: "addressNear"
    }, __jsx("span", null, item.structured_formatting.main_text), __jsx("h5", {
      style: {
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden"
      }
    }, item.structured_formatting.secondary_text))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
      span: 4,
      pull: 21,
      style: {
        backgroundImage: `url(${Object(_utils_image_type_location__WEBPACK_IMPORTED_MODULE_20__["getImageByType"])(item.types[0])})`,
        backgroundPosition: "center",
        backgroundSize: "cover"
      }
    }))))
  }))), __jsx(_ShareLocation__WEBPACK_IMPORTED_MODULE_18__["default"], {
    show: showPopup,
    handleClose: togglePopup,
    place: current_place
  })), react_device_detect__WEBPACK_IMPORTED_MODULE_22__["isMobile"] && __jsx("div", {
    className: `info_location_mobi ${isFullscreen ? "fullscreen" : ""}`
    // onClick={handleClick}
  }, __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_0___default.a, {
    className: "infor-box",
    bodyStyle: {
      padding: 0,
      flexDirection: "column"
    },
    placement: "left"
  }, " ", __jsx("div", {
    class: "pull-down-the-screen"
  }, __jsx("span", null, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["DownOutlined"], {
    id: "pull-down-the-screen--icon"
  }))), __jsx("div", {
    class: "pull--card--content"
  }, __jsx("div", {
    class: "pull--card--title"
  })), __jsx(antd_lib_divider__WEBPACK_IMPORTED_MODULE_4___default.a, {
    style: {
      marginTop: 0,
      marginBottom: 0,
      borderTop: "0px"
    }
  }), titleAddress, __jsx(antd_lib_divider__WEBPACK_IMPORTED_MODULE_4___default.a, {
    style: {
      marginTop: 0,
      marginBottom: 0,
      borderTop: "0px"
    }
  }), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "row-col-17-icon-button--infolocation"
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 21,
    id: "Mobile-button-select--infolocation"
  }, __jsx("div", {
    className: "actions-info-wrapp"
  }, __jsx("div", {
    className: "actions-icon--info--mobi"
  }, __jsx("div", {
    onClick: () => {
      navigationTo(current_place);
      props.dispatch(Object(_redux_actions_search__WEBPACK_IMPORTED_MODULE_15__["clearSearchAroundAction"])());
    }
  }, __jsx("div", {
    className: "icon-fist--mobi"
  }, __jsx("span", null, __jsx("i", {
    id: "icon-fist--mobi--direction",
    className: "fas fa-directions",
    style: {
      cursor: "pointer",
      color: "#FFFFFF",
      fontSize: 18
      // paddingTop:'5px',
    }
  })), __jsx("div", {
    className: "text--mobi--info"
  }, t("way")))), __jsx("div", {
    onClick: saveToClipBoard
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 4
  }), __jsx("div", {
    className: "icon-fist--mobi--save"
  }, __jsx("i", {
    className: "far fa-bookmark",
    style: {
      cursor: "pointer",
      color: "#1890ff",
      fontSize: 18
    }
  }), __jsx("div", {
    className: "text--mobi--info--save"
  }, t("save")))), __jsx("div", {
    onClick: togglePopup
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 4
  }), __jsx("div", {
    className: "icon-fist--mobi--save"
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["ShareAltOutlined"], {
    key: "share",
    id: "icon-fist--mobi--save--share"
  }), __jsx("div", {
    className: "text--mobi--info--save"
  }, t("share")))))))), __jsx(antd_lib_divider__WEBPACK_IMPORTED_MODULE_4___default.a, {
    style: {
      marginBottom: 0,
      marginTop: 0,
      borderTop: "0px"
    }
  }), __jsx("div", {
    className: "captionRow_mobi"
  }, __jsx("div", {
    style: {
      padding: 16,
      backgroundImage: `url(${current_place ? Object(_utils_image_type_location__WEBPACK_IMPORTED_MODULE_20__["getImageByType"])(current_place.types[0]) : null})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      height: 240,
      position: "relative"
    }
  }, !isFullscreen && __jsx("div", {
    className: "search-box--mobile"
  }, __jsx(_SearchingBox__WEBPACK_IMPORTED_MODULE_13__["default"], {
    place: current_place
  }))), __jsx("span", null, t("related_locations"))), __jsx(antd_lib_divider__WEBPACK_IMPORTED_MODULE_4___default.a, {
    style: {
      marginBottom: 0,
      marginTop: 0
    },
    id: "divier-antd--mobi"
  }), __jsx("div", {
    style: {
      flex: 1,
      padding: "0 5px"
    }
  }, __jsx(antd_lib_list__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "list-near-places",
    itemLayout: "horizontal",
    dataSource: near_places,
    renderItem: item => __jsx(antd_lib_list__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
      style: {
        cursor: "pointer"
      },
      onClick: () => selectNearPlace(item.place_id)
    }, __jsx(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_5___default.a, {
      title: __jsx("div", null, __jsx("h4", {
        style: {
          color: "white"
        }
      }, item.structured_formatting.main_text), __jsx("h4", {
        style: {
          color: "white"
        }
      }, item.structured_formatting.secondary_text))
    }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default.a, {
      style: {
        width: "100%",
        padding: "0 16px"
      }
    }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
      span: 20,
      push: 3,
      style: {
        display: "flex",
        alignItems: "center",
        paddingLeft: 16
      }
    }, __jsx("div", {
      className: "addressNear"
    }, __jsx("span", null, item.structured_formatting.main_text), __jsx("h5", {
      style: {
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden"
      }
    }, item.structured_formatting.secondary_text))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
      span: 4,
      pull: 21,
      style: {
        backgroundImage: `url(${Object(_utils_image_type_location__WEBPACK_IMPORTED_MODULE_20__["getImageByType"])(item.types[0])})`,
        backgroundPosition: "center",
        backgroundSize: "cover"
      }
    }))))
  }))), __jsx(_ShareLocation__WEBPACK_IMPORTED_MODULE_18__["default"], {
    show: showPopup,
    handleClose: togglePopup,
    place: current_place
  })));
};
const mapStateToProps = state => {
  return {
    current_place: state.placeReducer.current_place,
    near_places: state.placeReducer.near_places,
    my_location: state.placeReducer.my_location,
    viewport: state.placeReducer.viewport,
    markerSelect: state.boxVisibleReducer.red_marker_visible,
    info_restaurant: state.navigationReducer.info_restaurant
  };
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps)(InfoLocation));

/***/ }),

/***/ "./components/InfoLocationIframe.jsx":
/*!*******************************************!*\
  !*** ./components/InfoLocationIframe.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/tooltip */ "antd/lib/tooltip");
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_images_arrow_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/images/arrow.png */ "./static/images/arrow.png");
/* harmony import */ var _static_images_arrow_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_images_arrow_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_images__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/images */ "./utils/images.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const InfoLocationIframe = ({
  place,
  fromPlace,
  toPlace
}, props) => {
  const my_location = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.placeReducer.my_location);
  const openNewTab = () => {
    window.open(`${window.location.origin}${window.location.pathname}?location=${place ? place.geometry.location.lat : ''},${place ? place.geometry.location.lng : ''}`);
  };
  const openNewTab2 = () => {
    window.open(`${window.location.origin}${window.location.pathname}?direction=${my_location ? my_location.latitude : ''}%2C${my_location ? my_location.longitude : ''}%26${place ? place.geometry.location.lat : ''}%2C${place ? place.geometry.location.lng : ''}`);
  };
  return __jsx("div", null, place && __jsx("div", {
    className: "info-iframe"
  }, __jsx("div", {
    className: "info-iframe-text"
  }, __jsx("div", {
    className: "title"
  }, place ? place.name : ''), __jsx("div", {
    className: "address"
  }, place ? place.name + (place.formatted_address != '' ? ' - ' + place.formatted_address : '') : ''), __jsx("div", {
    className: "big-map",
    onClick: openNewTab
  }, "Xem b\u1EA3n \u0111\u1ED3 l\u1EDBn h\u01A1n")), __jsx("div", {
    className: "iframe-navigation",
    onClick: openNewTab2
  }, __jsx(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_0___default.a, {
    color: "#ffff",
    title: __jsx("span", {
      style: {
        fontSize: 12,
        fontWeight: 'initial',
        color: 'black'
      }
    }, "Nh\u1EADn ch\u1EC9 \u0111\u01B0\u1EDDng \u0111\u1EBFn v\u1ECB tr\xED n\xE0y tr\xEAn Goong Maps.")
  }, __jsx("img", {
    src: _static_images_arrow_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "Bi\u1EC3u t\u01B0\u1EE3ng ch\u1EC9 \u0111\u01B0\u1EDDng",
    style: {
      width: 45
    }
  }), __jsx("div", {
    style: {
      color: '#1A73E8',
      fontSize: 12,
      marginTop: 5
    }
  }, "Ch\u1EC9 \u0111\u01B0\u1EDDng")))), !place && __jsx("div", {
    className: "direction-iframe"
  }, __jsx("div", {
    className: "direction-iframe-image"
  }, __jsx("img", {
    src: _utils_images__WEBPACK_IMPORTED_MODULE_4__["default"].start_location_grey800_18dp,
    alt: ""
  }), __jsx("img", {
    src: _utils_images__WEBPACK_IMPORTED_MODULE_4__["default"].roaroute_3dots_grey650_24dpd_1,
    alt: ""
  }), __jsx("img", {
    src: _utils_images__WEBPACK_IMPORTED_MODULE_4__["default"].place_outline_red600_18dp,
    alt: ""
  })), __jsx("div", {
    className: "direction-iframe-text"
  }, __jsx("span", null, fromPlace ? fromPlace.name : ''), __jsx("span", null, toPlace ? toPlace.name : ''), __jsx("span", null, "T\xF9y ch\u1ECDn kh\xE1c"))));
};
const mapStateToProps = state => ({
  my_location: state.placeReducer.my_location
});
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(InfoLocationIframe));
// export default InfoLocationIframe;

/***/ }),

/***/ "./components/InputNavigation.jsx":
/*!****************************************!*\
  !*** ./components/InputNavigation.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/input */ "antd/lib/input");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/divider */ "antd/lib/divider");
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/message */ "antd/lib/message");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/debounce */ "lodash/debounce");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux_actions_search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux/actions/search */ "./redux/actions/search.js");
/* harmony import */ var _redux_actions_navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redux/actions/navigation */ "./redux/actions/navigation.js");
/* harmony import */ var _redux_actions_place__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../redux/actions/place */ "./redux/actions/place.js");
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/request */ "./utils/request.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-device-detect */ "react-device-detect");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_11__);




var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;









const InputNavigation = props => {
  const {
    autofocus,
    places,
    text_from_input,
    text_to_input,
    latLngCenter
  } = props;
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])("");
  const {
    0: focused,
    1: setFocused
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    setValue(props.type === "start_input" ? text_from_input : text_to_input);
  }, [text_from_input, text_to_input]);
  const debouncedSearch = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default()((text, latLngStr) => {
    props.dispatch(Object(_redux_actions_search__WEBPACK_IMPORTED_MODULE_7__["searchAction"])(text, latLngStr));
  }, 500), []);
  const onChange = newValue => {
    setValue(newValue);
    if (props.type === "start_input") {
      dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_8__["navigationFromAction"])(null, newValue));
    } else {
      dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_8__["navigationToAction"])(null, newValue));
    }
    dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_8__["clearResultAction"])());
    const latLngStr = `${latLngCenter.latitude}, ${latLngCenter.longitude}`;
    debouncedSearch(newValue, latLngStr);
  };
  const onOptionSelect = async (place, option) => {
    const selectedPlaceId = option.id || option.place_id;
    try {
      var _response$data;
      const response = await _utils_request__WEBPACK_IMPORTED_MODULE_10__["default"].place_detail(selectedPlaceId);
      const selectedPlace = (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.result;
      if (selectedPlace) {
        const viewport = {
          longitude: selectedPlace.geometry.location.lng,
          latitude: selectedPlace.geometry.location.lat,
          zoom: 14
        };
        dispatch(Object(_redux_actions_search__WEBPACK_IMPORTED_MODULE_7__["searchClearAction"])());
        if (props.type === "start_input") {
          dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_8__["navigationFromAction"])(selectedPlace, `${selectedPlace.name} - ${selectedPlace.formatted_address}`));
          !props.to_place && dispatch(Object(_redux_actions_place__WEBPACK_IMPORTED_MODULE_9__["setMapViewportAction"])(viewport));
        } else {
          dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_8__["navigationToAction"])(selectedPlace, `${selectedPlace.name} - ${selectedPlace.formatted_address}`));
          !props.from_place && dispatch(Object(_redux_actions_place__WEBPACK_IMPORTED_MODULE_9__["setMapViewportAction"])(viewport));
        }
      } else {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default.a.error("Không tìm thấy địa điểm!");
      }
    } catch (error) {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default.a.error("Không tìm thấy địa điểm!");
    }
  };
  const onPressEnter = async () => {
    const value = props.type === "start_input" ? text_from_input : text_to_input;
    if (places.length > 0) {
      onOptionSelect(null, places[0]);
    } else {
      if (value.includes(",")) {
        const [lat, lng] = value.split(",");
        if (Number(lat) > 90 || Number(lat) < -90 || Number(lng) > 180 || Number(lng) < -180) {
          antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default.a.error("Tọa độ không chính xác");
        } else {
          try {
            const response = await _utils_request__WEBPACK_IMPORTED_MODULE_10__["default"].geocode({
              latitude: Number(lat),
              longitude: Number(lng)
            });
            if (response.data.results.length > 0) {
              onOptionSelect(null, response.data.results[0]);
              antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default.a.info("Địa điểm được lấy từ dữ liệu geocode");
            } else {
              antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default.a.error("Không tìm thấy địa điểm từ tọa độ !");
            }
          } catch (error) {
            antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default.a.error("Không tìm thấy địa điểm từ tọa độ !");
          }
        }
      } else if (value.includes("&")) {
        const [lat, lng] = value.split("&");
        if (Number(lat) > 90 || Number(lat) < -90 || Number(lng) > 180 || Number(lng) < -180) {
          antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default.a.error("Tọa độ không chính xác");
        } else {
          try {
            const response = await _utils_request__WEBPACK_IMPORTED_MODULE_10__["default"].geocode({
              latitude: Number(lat),
              longitude: Number(lng)
            });
            if (response.data.results.length > 0) {
              onOptionSelect(null, response.data.results[0]);
              antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default.a.info("Địa điểm được lấy từ dữ liệu geocode");
            } else {
              antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default.a.error("Không tìm thấy địa điểm từ tọa độ !");
            }
          } catch (error) {
            antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default.a.error("Không tìm thấy địa điểm từ tọa độ !");
          }
        }
      }
    }
  };
  const renderTitle = (title, place) => __jsx("span", {
    id: place.place_id,
    onClick: () => onOptionSelect(null, place)
  }, title);
  const renderItem = (content, id, count) => ({
    id: id,
    value: __jsx("div", {
      style: {
        width: "100%",
        color: "black",
        fontSize: 15
      }
    }, __jsx("span", null, content), __jsx("br", null), __jsx("span", {
      style: {
        fontSize: 12,
        display: "inline-block",
        width: "100%",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis"
      }
    }, count), count === places.length - 1 ? null : __jsx(antd_lib_divider__WEBPACK_IMPORTED_MODULE_1___default.a, {
      style: {
        margin: 0
      }
    })),
    key: `${id}-${count}`
  });
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    let options = null;
    if (places) {
      props.dispatch(Object(_redux_actions_search__WEBPACK_IMPORTED_MODULE_7__["setSearchData"])(places));
      options = places.map((item, i) => {
        var _item$children;
        return item.has_children && (_item$children = item.children) !== null && _item$children !== void 0 && _item$children.length ? {
          label: renderTitle(item.structured_formatting.main_text, item),
          options: item.children.map((child, j) => renderItem(child.content, child.pid, j)),
          key: `${item.pid}-${i}`,
          name: `${item.structured_formatting.main_text} - ${item.structured_formatting.secondary_text}`
        } : {
          value: __jsx("div", {
            style: {
              width: "100%",
              color: "black",
              fontSize: 15
            }
          }, __jsx("span", null, item.structured_formatting.main_text), __jsx("br", null), __jsx("span", {
            style: {
              fontSize: 12,
              display: "inline-block",
              width: "100%",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis"
            }
          }, item.structured_formatting.secondary_text), i === places.length - 1 ? null : __jsx(antd_lib_divider__WEBPACK_IMPORTED_MODULE_1___default.a, {
            style: {
              margin: 0
            }
          })),
          id: item.place_id,
          key: `${item.pid}-${i}`,
          name: `${item.structured_formatting.main_text} - ${item.structured_formatting.secondary_text}`
        };
      });
    }
  }, []);
  const suffix_searching = value ? null : __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("div", {
    className: "SearchIcon_top"
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["SearchOutlined"], {
    style: {
      fontSize: "21px"
    },
    className: "Search_Out"
  }), __jsx("div", {
    className: "Tooltip_icon"
  }, "T\xECm Ki\u1EBFm")));
  const styleInput = !react_device_detect__WEBPACK_IMPORTED_MODULE_11__["isMobile"] ? {
    width: "270px",
    borderRadius: "8px",
    height: "38px",
    border: focused ? "none" : "1px solid #70757A",
    boxShadow: focused ? "0 0 0 2px #1980ff" : "none",
    // marginLeft: "8px",
    outline: "none"
  } : {
    // border:'1px solid grey',
    // borderRadius:'4px',
    // width: "60vw",
    borderRadius: "8px",
    // height: "38px",
    border: focused ? "none" : "1px solid #70757A",
    boxShadow: focused ? "0 0 0 2px #1980ff" : "none"
    // marginLeft: "8px",
    // outline: "none",
  };
  return __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_0___default.a, {
    style: styleInput,
    placeholder: props.placeholder,
    value: value,
    suffix: suffix_searching,
    allowClear: true,
    onChange: e => onChange(e.target.value),
    onPressEnter: onPressEnter,
    autoFocus: autofocus,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false)
  });
};
const mapStateToProps = state => ({
  places: state.searchReducer.places,
  typeInput: state.navigationReducer.type_input,
  from_place: state.navigationReducer.from,
  to_place: state.navigationReducer.to,
  text_from_input: state.navigationReducer.text_from_input,
  text_to_input: state.navigationReducer.text_to_input,
  latLngCenter: state.placeReducer.center
});
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps)(InputNavigation));

/***/ }),

/***/ "./components/Map.jsx":
/*!****************************!*\
  !*** ./components/Map.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/avatar */ "antd/lib/avatar");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/message */ "antd/lib/message");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../consts */ "./consts/index.js");
/* harmony import */ var _Marker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Marker */ "./components/Marker.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _BottomInfoLocation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BottomInfoLocation */ "./components/BottomInfoLocation.jsx");
/* harmony import */ var _MenuRightCLick__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MenuRightCLick */ "./components/MenuRightCLick.jsx");
/* harmony import */ var _redux_sagas_placeSaga__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redux/sagas/placeSaga */ "./redux/sagas/placeSaga.js");
/* harmony import */ var fast_deep_equal_es6_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! fast-deep-equal/es6/react */ "fast-deep-equal/es6/react");
/* harmony import */ var fast_deep_equal_es6_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal_es6_react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _redux_actions_place__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../redux/actions/place */ "./redux/actions/place.js");
/* harmony import */ var _redux_actions_search__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../redux/actions/search */ "./redux/actions/search.js");
/* harmony import */ var _redux_actions_navigation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../redux/actions/navigation */ "./redux/actions/navigation.js");
/* harmony import */ var _MarkerNavigation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./MarkerNavigation */ "./components/MarkerNavigation.jsx");
/* harmony import */ var _redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../redux/actions/boxVisble */ "./redux/actions/boxVisble.js");
/* harmony import */ var _static_images_normal_map_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../static/images/normal_map.png */ "./static/images/normal_map.png");
/* harmony import */ var _static_images_normal_map_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_static_images_normal_map_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _static_images_satellite_jpeg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../static/images/satellite.jpeg */ "./static/images/satellite.jpeg");
/* harmony import */ var _static_images_satellite_jpeg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_static_images_satellite_jpeg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_div_100vh__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-div-100vh */ "react-div-100vh");
/* harmony import */ var react_div_100vh__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_div_100vh__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../utils/request */ "./utils/request.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-device-detect */ "react-device-detect");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _utils_images__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../utils/images */ "./utils/images.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }






















// import { STYLE_KEY } from "../config.dev";

class Map extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(props) {
    super(props);
    _defineProperty(this, "_onViewportChange", viewport => {
      this.props.dispatch(Object(_redux_actions_place__WEBPACK_IMPORTED_MODULE_10__["setMapViewportAction"])(viewport));
    });
    _defineProperty(this, "_onMouseClick", e => {
      this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_14__["setPopupRightClick"])(false));
      if (this.props.boxVisible !== 'iframe') {
        this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_14__["setRedMarkerAction"])(false));
      }
      // if (this.props.boxVisible === "info") this.props.dispatch(setBoxVisibleAction('search'))
      // this.markerWhatIs ? this.markerWhatIs.remove() : null;
      this.props.dispatch(Object(_redux_actions_search__WEBPACK_IMPORTED_MODULE_11__["selectAroundPlaceAction"])(null));
      this.removeMarkerWhatIs();
      this.setState({
        bottomInfoVisible: false
      });
    });
    _defineProperty(this, "_onRightClick", e => {
      const position = {
        lat: e.lngLat.lat,
        lng: e.lngLat.lng
      };
      if (this.props.boxVisible !== 'iframe') {
        this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_14__["setRedMarkerAction"])(true, position));
        this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_14__["setPopupRightClick"])(true, position, 'normal'));
      }
    });
    _defineProperty(this, "_onClickMenu", evt => {
      const parent = evt.target.parentElement;
      if (evt.target.className && evt.target.className.toString().includes('what-is-this')) {
        this.handleWhatIs();
      } else if (evt.target.className && evt.target.className.toString().includes('from-here')) {
        this.handleFromHere();
      } else if (evt.target.className && evt.target.className.toString().includes('to-here')) {
        this.handleToHere();
      } else if (evt.target.className && evt.target.className.toString().includes('delete-location')) {
        this.handleDeleteLocation();
      } else if (evt.target.className && evt.target.className.toString().includes('search-around')) {
        this.handleSearchAround();
      } else if (evt.target.className && evt.target.className.toString().includes('to-around-place')) {
        this.handleToAroundPlace();
      } else if (evt.target.className && evt.target.className.toString().includes('what-is-navigation')) {
        this.handleWhatIs(false);
      }
      if (parent !== null && parent !== void 0 && parent.className && parent !== null && parent !== void 0 && parent.className.toString().includes('menu-right-click')) {
        if (evt.target.className && !evt.target.className.toString().includes('what-is-this')) {
          this.props.dispatch(Object(_redux_actions_search__WEBPACK_IMPORTED_MODULE_11__["clearSearchAroundAction"])());
        }
        this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_14__["setPopupRightClick"])(false));
        this.removeMarkerWhatIs();
      }
    });
    _defineProperty(this, "changeVisibleBottomInfo", visible => {
      this.setState({
        bottomInfoVisible: visible
      });
    });
    _defineProperty(this, "_getInforPlace", async (lat = (_this$props$position_ => (_this$props$position_ = this.props.position_popup) === null || _this$props$position_ === void 0 ? void 0 : _this$props$position_.lat)(), lng = (_this$props$position_2 => (_this$props$position_2 = this.props.position_popup) === null || _this$props$position_2 === void 0 ? void 0 : _this$props$position_2.lng)()) => {
      const latLng = {
        latitude: lat,
        longitude: lng
      };
      try {
        const response = await Object(_redux_sagas_placeSaga__WEBPACK_IMPORTED_MODULE_8__["getDetailLatLngService"])(latLng);
        if (response.data.results.length > 0) {
          const place_response = response.data.results[0];
          return _objectSpread(_objectSpread({}, place_response), {}, {
            name: place_response.address_components[0].long_name,
            formatted_address: this.getAddressGeocode(place_response)
          });
        } else {
          antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.error('Không tìm thấy địa điểm !!');
          return null;
        }
      } catch (error) {
        throw error;
      }
    });
    _defineProperty(this, "selectPlace", async (lat = (_this$props$positionM => (_this$props$positionM = this.props.positionMarkerSelect) === null || _this$props$positionM === void 0 ? void 0 : _this$props$positionM.lat)(), lng = (_this$props$positionM2 => (_this$props$positionM2 = this.props.positionMarkerSelect) === null || _this$props$positionM2 === void 0 ? void 0 : _this$props$positionM2.lng)(), redMarkerVisible = true) => {
      const place = await this._getInforPlace(lat, lng);
      if (place) {
        const viewport = {
          longitude: lng,
          latitude: lat,
          zoom: 15
        };
        this.props.dispatch(Object(_redux_actions_place__WEBPACK_IMPORTED_MODULE_10__["setMapViewportAction"])(viewport));
        this.setState({
          bottomInfoVisible: true,
          placeMouseClick: place
        });
        if (redMarkerVisible) {
          if (this.markerWhatIs) {
            this.markerWhatIs.setLngLat({
              lat,
              lng
            }).addTo(this.map);
          } else {
            const el = document.createElement('div');
            el.innerHTML = react_dom_server__WEBPACK_IMPORTED_MODULE_17___default.a.renderToStaticMarkup(__jsx(_Marker__WEBPACK_IMPORTED_MODULE_4__["default"], {
              size: 22
            }));
            this.markerWhatIs = new maplibregl.Marker(el, {
              anchor: 'bottom'
            }).setLngLat({
              lat,
              lng
            }).addTo(this.map);
          }
          this.markerWhatIs.getElement().addEventListener('contextmenu', e => {
            e.stopPropagation();
            e.preventDefault();
            this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_14__["setRedMarkerAction"])(false));
            this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_14__["setPopupRightClick"])(true, {
              lat,
              lng
            }, 'popupCurrentPlace'));
          });
          this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_14__["setRedMarkerAction"])(false));
        }
        // redMarkerVisible ? this.props.dispatch(setRedMarkerAction(true, { lat, lng })) : null;
      } else {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.error('Không tìm thấy địa điểm !!');
      }
    });
    _defineProperty(this, "removeMarkerWhatIs", () => {
      this.markerWhatIs ? this.markerWhatIs.remove() : null;
    });
    _defineProperty(this, "_getInforPlaceAround", async id => {
      try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_18___default.a.get(`https://napi.goong.io/v1/marker/get_marker_detail/${id}`);
        if (response.data.data) {
          return response.data.data;
        } else {
          antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.error('Không tìm thấy địa điểm !!');
          return null;
        }
      } catch (error) {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.error('Không tìm thấy địa điểm !');
        throw error;
      }
    });
    _defineProperty(this, "selectAroundPlace", async id => {
      const place = await this._getInforPlaceAround(id);
      if (place) {
        const viewport = {
          longitude: Number(place.lng_lat[0]),
          latitude: Number(place.lng_lat[1]),
          zoom: 15
        };
        this.props.dispatch(Object(_redux_actions_place__WEBPACK_IMPORTED_MODULE_10__["setMapViewportAction"])(viewport));
        this.setState({
          bottomInfoVisible: true,
          placeMouseClick: place
        });
        this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_14__["setPopupRightClick"])(false));
      } else {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.error('Không tìm thấy địa điểm !!');
      }
    });
    _defineProperty(this, "handleWhatIs", (redMarkerVisible = true) => {
      const {
        position_popup,
        isSmallScreen
      } = this.props;
      if (isSmallScreen) {
        this.props.dispatch(Object(_redux_actions_place__WEBPACK_IMPORTED_MODULE_10__["getDetailByLatLngAction"])({
          latitude: position_popup.lat,
          longitude: position_popup.lng
        }));
        this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_14__["setBoxVisibleAction"])('info'));
        this.props.dispatch(Object(_redux_actions_search__WEBPACK_IMPORTED_MODULE_11__["clearSearchAroundAction"])());
        this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_14__["setPopupRightClick"])(false));
        this.removeMarkerWhatIs();
      } else {
        this.selectPlace(position_popup.lat, position_popup.lng, redMarkerVisible);
      }
    });
    _defineProperty(this, "handleFromHere", async (lat, lng) => {
      let place;
      if (!lat || !lng) place = await this._getInforPlace();else {
        place = await this._getInforPlace(lat, lng);
      }
      if (place) {
        const viewport = {
          longitude: place.geometry.location.lng,
          latitude: place.geometry.location.lat,
          zoom: 15
        };
        !this.props.to_place && this.props.dispatch(Object(_redux_actions_place__WEBPACK_IMPORTED_MODULE_10__["setMapViewportAction"])(viewport));
        this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_14__["setBoxVisibleAction"])('navigation'));
        this.props.dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_12__["navigationFromAction"])(place, `${place.name} - ${place.formatted_address}`));
        this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_14__["setRedMarkerAction"])(false));
        this.changeVisibleBottomInfo(false);
      }
    });
    _defineProperty(this, "handleToHere", async (lat, lng) => {
      let place;
      if (!lat || !lng) place = await this._getInforPlace();else {
        place = await this._getInforPlace(lat, lng);
      }
      if (place) {
        this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_14__["setBoxVisibleAction"])('navigation'));
        const viewport = {
          longitude: place.geometry.location.lng,
          latitude: place.geometry.location.lat,
          zoom: 15
        };
        const my_location = this.props.my_location;
        if (my_location && (this.props.boxVisible === 'search' || this.props.boxVisible === 'info')) {
          try {
            const response = await _utils_request__WEBPACK_IMPORTED_MODULE_20__["default"].geocode(my_location);
            if (response.data.results.length > 0) {
              this.props.dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_12__["navigationFromAction"])(_objectSpread(_objectSpread({}, response.data.results[0]), {}, {
                name: response.data.results[0].address_components[0].long_name
              }), 'Vị trí của bạn'));
            }
          } catch (error) {
            throw error;
          }
        }
        !this.props.from_place && this.props.dispatch(Object(_redux_actions_place__WEBPACK_IMPORTED_MODULE_10__["setMapViewportAction"])(viewport));
        this.props.dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_12__["navigationToAction"])(place, `${place.name} - ${place.formatted_address}`));
        this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_14__["setBoxVisibleAction"])('navigation'));
        this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_14__["setRedMarkerAction"])(false));
        this.changeVisibleBottomInfo(false);
      }
    });
    _defineProperty(this, "handleDeleteLocation", () => {
      const {
        type_popup
      } = this.props;
      if (type_popup === 'popupFromPlace') {
        this.props.dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_12__["navigationFromAction"])(null, ''));
      } else if (type_popup === 'popupToPlace') {
        this.props.dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_12__["navigationToAction"])(null, ''));
      }
      this.props.dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_12__["clearResultAction"])());
    });
    _defineProperty(this, "handleSearchAround", async () => {
      const place = await this._getInforPlace();
      if (place) {
        const viewport = {
          longitude: place.geometry.location.lng,
          latitude: place.geometry.location.lat,
          zoom: 15
        };
        const location = {
          lat: place.geometry.location.lat,
          lng: place.geometry.location.lng
        };
        this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_14__["setBoxVisibleAction"])('search'));
        this.props.dispatch(Object(_redux_actions_place__WEBPACK_IMPORTED_MODULE_10__["setMapViewportAction"])(viewport));
        this.props.dispatch(Object(_redux_actions_search__WEBPACK_IMPORTED_MODULE_11__["searchAroundAction"])(location, this.props.viewport.zoom));
        this.setState({
          bottomInfoVisible: false
        });
      }
    });
    _defineProperty(this, "_selectAroundPlace", (type, place) => {
      if (type !== 'center') {
        this.props.dispatch(Object(_redux_actions_search__WEBPACK_IMPORTED_MODULE_11__["selectAroundPlaceAction"])(place));
        this.selectAroundPlace(place === null || place === void 0 ? void 0 : place.id);
      } else {
        this.props.dispatch(Object(_redux_actions_search__WEBPACK_IMPORTED_MODULE_11__["selectAroundPlaceAction"])(place));
        this.selectPlace(place.geometry.location.lat, place.geometry.location.lng, false);
      }
    });
    _defineProperty(this, "handleToAroundPlace", async () => {
      let place = null;
      this.props.around_places.map(item => {
        if (item.lng_lat[0] * 1 === this.popupRightClick.getLngLat().lng && item.lng_lat[1] * 1 === this.popupRightClick.getLngLat().lat) {
          place = item;
        }
      });
      if (place) {
        try {
          var _response$data;
          this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_14__["setPopupRightClick"])(false));
          const place_center = this.props.around_place_center;
          this.props.dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_12__["navigationFromAction"])(place_center, `${place_center.name} - ${place_center.formatted_address}`));
          const response = await axios__WEBPACK_IMPORTED_MODULE_18___default.a.get(`https://napi.goong.io/v1/marker/get_marker_detail/${place.id}`);
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
          this.props.dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_12__["navigationToAction"])(place, `${place.name} - ${place.formatted_address}`));
          this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_14__["setBoxVisibleAction"])('navigation'));
        } catch (error) {
          antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.error('Không tìm thấy địa điểm !');
        }
      } else {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.error('Không tìm thấy địa điểm !');
      }
    });
    _defineProperty(this, "removeMarkerPopup", () => {
      if (this.markerCurrentPlace) this.markerCurrentPlace.remove();
      if (this.popupRightClick) this.popupRightClick.remove();
      if (this.props.around_places) this.props.dispatch(Object(_redux_actions_search__WEBPACK_IMPORTED_MODULE_11__["clearSearchAroundAction"])());
      if (this.redMarker) this.redMarker.remove();
    });
    _defineProperty(this, "getAddressGeocode", place => {
      var _place$address_compon;
      let result = [];
      (_place$address_compon = place.address_components) === null || _place$address_compon === void 0 ? void 0 : _place$address_compon.slice(1).map(item => {
        result.push(item.long_name);
      });
      return result.join(',');
    });
    _defineProperty(this, "changeStyle", () => {
      const {
        style
      } = this.state;
      if (style === _consts__WEBPACK_IMPORTED_MODULE_3__["STYLE_URL"].SATELITE + "YJTajS80fLlhJ4a2BG0gXqXXdZzdLG5V3iivOK9e") {
        this.setState({
          style: _consts__WEBPACK_IMPORTED_MODULE_3__["STYLE_URL"].NORMAL + "YJTajS80fLlhJ4a2BG0gXqXXdZzdLG5V3iivOK9e"
        });
        this.map.setStyle(_consts__WEBPACK_IMPORTED_MODULE_3__["STYLE_URL"].NORMAL + "YJTajS80fLlhJ4a2BG0gXqXXdZzdLG5V3iivOK9e");
      } else {
        this.setState({
          style: _consts__WEBPACK_IMPORTED_MODULE_3__["STYLE_URL"].SATELITE + "YJTajS80fLlhJ4a2BG0gXqXXdZzdLG5V3iivOK9e"
        });
        this.map.setStyle(_consts__WEBPACK_IMPORTED_MODULE_3__["STYLE_URL"].SATELITE + "YJTajS80fLlhJ4a2BG0gXqXXdZzdLG5V3iivOK9e");
      }
    });
    _defineProperty(this, "navigationByURLIframe", async (from, to) => {
      this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_14__["setBoxVisibleAction"])('iframe'));
      this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_14__["setRedMarkerAction"])(false));
      this.changeVisibleBottomInfo(false);
      let fromplace;
      if (!from.lat || !from.lng) fromplace = await this._getInforPlace();else {
        fromplace = await this._getInforPlace(from.lat, from.lng);
      }
      await this.props.dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_12__["navigationFromAction"])(fromplace, `${fromplace.name} - ${fromplace.formatted_address}`));
      let toplace;
      if (!to.lat || !to.lng) toplace = await this._getInforPlace();else {
        toplace = await this._getInforPlace(to.lat, to.lng);
      }
      await this.props.dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_12__["navigationToAction"])(toplace, `${toplace.name} - ${toplace.formatted_address}`));
      this.props.dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_12__["navigationAction"])(this.props.from_place, this.props.to_place, 'car'));
    });
    _defineProperty(this, "navigationByURL", async (from, to) => {
      this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_14__["setBoxVisibleAction"])('navigation'));
      this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_14__["setRedMarkerAction"])(false));
      this.changeVisibleBottomInfo(false);
      let fromplace;
      if (!from.lat || !from.lng) fromplace = await this._getInforPlace();else {
        fromplace = await this._getInforPlace(from.lat, from.lng);
      }
      await this.props.dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_12__["navigationFromAction"])(fromplace, `${fromplace.name} - ${fromplace.formatted_address}`));
      let toplace;
      if (!to.lat || !to.lng) toplace = await this._getInforPlace();else {
        toplace = await this._getInforPlace(to.lat, to.lng);
      }
      await this.props.dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_12__["navigationToAction"])(toplace, `${toplace.name} - ${toplace.formatted_address}`));
    });
    _defineProperty(this, "handleStorageChange", event => {
      console.log('oppaopaopa');
      if (event.key === 'search_history') {
        this.setState({
          value: event.newValue
        });
      }
    });
    this._mapRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createRef();
    this.map = null;
    this.redMarker = null;
    this.popupRightClick = null;
    this.popup_navigation = [];
    this.state = {
      style: _consts__WEBPACK_IMPORTED_MODULE_3__["STYLE_URL"].NORMAL + "YJTajS80fLlhJ4a2BG0gXqXXdZzdLG5V3iivOK9e",
      styleNormal: _consts__WEBPACK_IMPORTED_MODULE_3__["STYLE_URL"].NORMAL + "YJTajS80fLlhJ4a2BG0gXqXXdZzdLG5V3iivOK9e",
      styleEarth: _consts__WEBPACK_IMPORTED_MODULE_3__["STYLE_URL"].SATELITE + "YJTajS80fLlhJ4a2BG0gXqXXdZzdLG5V3iivOK9e",
      bottomInfoVisible: false,
      value: localStorage.getItem('search_history') || ''
    };
    this.list = [];
    this.listRestaurant = [];
    this.listHistories = [];
    this.view = null;
    this.navigationView = null;
  }
  componentDidUpdate(prevProps) {
    if (this.props.isSmallScreen !== prevProps.isSmallScreen) {
      if (!this.props.isSmallScreen && !this.navigation) {
        this.navigation = new maplibregl.NavigationControl();
        this.map.addControl(this.navigation);
      } else if (this.props.isSmallScreen && this.navigation) {
        this.map.removeControl(this.navigation);
        this.navigation = null;
      }
    }
    if (!fast_deep_equal_es6_react__WEBPACK_IMPORTED_MODULE_9___default()(prevProps.positionMarkerSelect, this.props.positionMarkerSelect) && this.props.positionMarkerSelect) {
      if (this.redMarker) {
        this.redMarker = this.redMarker.setLngLat(this.props.positionMarkerSelect).addTo(this.map);
      } else {
        const el = document.createElement('div');
        el.innerHTML = react_dom_server__WEBPACK_IMPORTED_MODULE_17___default.a.renderToStaticMarkup(__jsx(_Marker__WEBPACK_IMPORTED_MODULE_4__["default"], {
          size: 22
        }));
        // Marker chuột phải
        this.redMarker = new maplibregl.Marker({
          anchor: 'bottom',
          element: el
        }).setLngLat(this.props.positionMarkerSelect).addTo(this.map);
        this.redMarker.getElement().addEventListener('contextmenu', e => {
          e.stopPropagation();
          e.preventDefault();
          this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_14__["setPopupRightClick"])(true, this.props.positionMarkerSelect, 'normal'));
        });
      }
    }
    if (prevProps.markerSelect !== this.props.markerSelect) {
      if (!this.props.markerSelect) {
        var _this$redMarker;
        (_this$redMarker = this.redMarker) === null || _this$redMarker === void 0 ? void 0 : _this$redMarker.remove();
      }
    }
    if (this.props.popup_visible && (!fast_deep_equal_es6_react__WEBPACK_IMPORTED_MODULE_9___default()(prevProps.position_popup, this.props.position_popup) || this.props.type_popup !== prevProps.type_popup) && this.props.position_popup) {
      this.popupRightClick = this.popupRightClick ? this.popupRightClick.setLngLat([this.props.position_popup.lng, this.props.position_popup.lat]).addTo(this.map).setHTML(react_dom_server__WEBPACK_IMPORTED_MODULE_17___default.a.renderToStaticMarkup(__jsx(_MenuRightCLick__WEBPACK_IMPORTED_MODULE_7__["default"], {
        dispatch: this.props.dispatch,
        position_popup: this.props.position_popup,
        type_popup: this.props.type_popup
      }))) : new maplibregl.Popup({
        closeButton: false,
        anchor: 'top',
        closeOnClick: false,
        offset: [0, 5]
      }).setLngLat([this.props.position_popup.lng, this.props.position_popup.lat]).setHTML(react_dom_server__WEBPACK_IMPORTED_MODULE_17___default.a.renderToStaticMarkup(__jsx(_MenuRightCLick__WEBPACK_IMPORTED_MODULE_7__["default"], {
        dispatch: this.props.dispatch,
        position_popup: this.props.position_popup,
        type_popup: this.props.type_popup
      }))).addTo(this.map);
    }
    if (this.popupRightClick && !this.props.popup_visible) {
      this.popupRightClick.remove();
    }
    if (!fast_deep_equal_es6_react__WEBPACK_IMPORTED_MODULE_9___default()(prevProps.current_place, this.props.current_place) && this.props.current_place) {
      const selectedPlace = this.props.current_place;
      this.map.flyTo({
        center: [selectedPlace.geometry.location.lng, selectedPlace.geometry.location.lat],
        zoom: 15,
        speed: 1.5,
        curve: 1
      });
      this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_14__["setCollapsedInfoBoxAction"])(false));
      this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_14__["setRedMarkerAction"])(false));
      this.setState({
        bottomInfoVisible: false
      });
    }
    if (!fast_deep_equal_es6_react__WEBPACK_IMPORTED_MODULE_9___default()(prevProps.viewport, this.props.viewport) && this.props.viewport) {
      this.map.flyTo({
        center: [this.props.viewport.longitude, this.props.viewport.latitude],
        zoom: this.props.viewport.zoom,
        speed: 2
      });
    }
    if (!fast_deep_equal_es6_react__WEBPACK_IMPORTED_MODULE_9___default()(prevProps.around_place_center, this.props.around_place_center)) {
      this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_14__["setRedMarkerAction"])(false));
    }
    if (!fast_deep_equal_es6_react__WEBPACK_IMPORTED_MODULE_9___default()(prevProps.boxVisible, this.props.boxVisible) && this.props.boxVisible === 'navigation') {
      this.removeMarkerPopup();
    }
    if (!fast_deep_equal_es6_react__WEBPACK_IMPORTED_MODULE_9___default()(prevProps.result_select, this.props.result_select) || !fast_deep_equal_es6_react__WEBPACK_IMPORTED_MODULE_9___default()(prevProps.result_navigation, this.props.result_navigation)) {
      const {
        result_select,
        result_navigation,
        boxVisible,
        from_place,
        to_place
      } = this.props;
      let dashedLineGeoJSON = [],
        polylineGeoJSON = [];
      this.result_navigation = [];
      if (boxVisible !== 'navigation' && boxVisible !== 'iframe' || !result_navigation) {
        var _this$popup_navigatio, _this$popup_navigatio2;
        // Remove cac layer/source
        if (this.map.getLayer(`route-layer-fastest`)) this.map.removeLayer(`route-layer-fastest`);
        if (this.map.getLayer(`route-layer-shortest`)) this.map.removeLayer(`route-layer-shortest`);
        if (this.map.getLayer(`walk-layer-0`)) this.map.removeLayer(`walk-layer-0`);
        if (this.map.getLayer(`walk-layer-1`)) this.map.removeLayer(`walk-layer-1`);
        if (this.map.getSource(`route-source-fastest`)) this.map.removeSource(`route-source-fastest`);
        if (this.map.getSource(`route-source-shortest`)) this.map.removeSource(`route-source-shortest`);
        if (this.map.getSource(`walk-source-0`)) this.map.removeSource(`walk-source-0`);
        if (this.map.getSource(`walk-source-1`)) this.map.removeSource(`walk-source-1`);
        (_this$popup_navigatio = this.popup_navigation[0]) === null || _this$popup_navigatio === void 0 ? void 0 : _this$popup_navigatio.remove();
        (_this$popup_navigatio2 = this.popup_navigation[1]) === null || _this$popup_navigatio2 === void 0 ? void 0 : _this$popup_navigatio2.remove();
      } else {
        if (result_navigation) {
          let distance = '';
          if (localStorage.getItem('unit') === 'KILOMETERS') {
            distance = `${(result_navigation.fastest[0].legs[0].distance.value / 1000).toFixed(1)} KM`;
          } else if (localStorage.getItem('unit') === 'MILES') {
            distance = `${(result_navigation.fastest[0].legs[0].distance.value / 1000 * _consts__WEBPACK_IMPORTED_MODULE_3__["Mile_Travel"].MILES).toFixed(1)} Dặm`;
          } else {
            distance = `${(result_navigation.fastest[0].legs[0].distance.value / 1000).toFixed(1)} KM`;
          }
          let coordinateObject1 = {};
          coordinateObject1.coordinates = this.decodePolyline(result_navigation.fastest[0].overview_polyline.points);
          coordinateObject1.type = 'LineString';
          polylineGeoJSON.push(coordinateObject1);
          polylineGeoJSON[0].roadWay = 'fastest';
          let coordinateObject2 = {};
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
          polylineGeoJSON.map((item, i) => {
            // Layer dan duong
            if (this.map.getLayer(`route-layer-${item.roadWay}`)) this.map.removeLayer(`route-layer-${item.roadWay}`);
            if (this.map.getSource(`route-source-${item.roadWay}`)) this.map.removeSource(`route-source-${item.roadWay}`);
            this.map.addSource(`route-source-${item.roadWay}`, {
              type: 'geojson',
              data: {
                type: 'Feature',
                properties: {},
                geometry: item
              }
            });
            this.map.addLayer({
              id: `route-layer-${item.roadWay}`,
              type: 'line',
              source: `route-source-${item.roadWay}`,
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

            if (this.map.getLayer(`walk-layer-${i}`)) this.map.removeLayer(`walk-layer-${i}`);
            if (this.map.getSource(`walk-source-${i}`)) this.map.removeSource(`walk-source-${i}`);
            this.map.addSource(`walk-source-${i}`, {
              type: 'geojson',
              data: {
                type: 'Feature',
                properties: {},
                geometry: dashedLineGeoJSON[i]
              }
            });
            this.map.addLayer({
              id: `walk-layer-${i}`,
              type: 'line',
              source: `walk-source-${i}`,
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

            if (this.popup_navigation[i]) {
              var _this$popup_navigatio3;
              (_this$popup_navigatio3 = this.popup_navigation[i]) === null || _this$popup_navigatio3 === void 0 ? void 0 : _this$popup_navigatio3.remove();
              this.popup_navigation[i] = null;
            }
            this.popup_navigation[i] = new maplibregl.Popup({
              closeButton: false,
              anchor: 'top',
              closeOnClick: false,
              className: item.roadWay === result_select ? 'popup-z-index1' : 'popup-z-index2'
            }).setLngLat([i === 0 ? item.coordinates[Math.trunc(0.75 * item.coordinates.length)][0] : item.coordinates[Math.trunc(0.25 * item.coordinates.length)][0], i === 0 ? item.coordinates[Math.trunc(item.coordinates.length * 0.75)][1] : item.coordinates[Math.trunc(item.coordinates.length * 0.25)][1]]).setHTML(react_dom_server__WEBPACK_IMPORTED_MODULE_17___default.a.renderToStaticMarkup(__jsx("div", {
              className: "tooltipNavigation",
              id: `popup-${item.roadWay}`
            }, __jsx("p", null, distance), __jsx("p", null, result_navigation[item.roadWay][0].legs[0].duration.text)))).setMaxWidth('300px').addTo(this.map);
            document.getElementById(`popup-${item.roadWay}`).addEventListener('click', () => {
              this.props.dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_12__["selectResultAction"])(item.roadWay));
            });
            const normalizeBounds = bounds => {
              const [firstPoint, secondPoint] = bounds;
              const minLat = Math.min(firstPoint[1], secondPoint[1]);
              const maxLat = Math.max(firstPoint[1], secondPoint[1]);
              const minLng = Math.min(firstPoint[0], secondPoint[0]);
              const maxLng = Math.max(firstPoint[0], secondPoint[0]);
              return [[minLng, minLat], [maxLng, maxLat]];
            };
            const bound = normalizeBounds([item.coordinates[0], item.coordinates[item.coordinates.length - 1]]);
            if (react_device_detect__WEBPACK_IMPORTED_MODULE_21__["isMobile"]) {
              this.navigationView = this.map.cameraForBounds(bound, {
                padding: {
                  top: 10,
                  bottom: 25,
                  left: 24,
                  right: 24
                }
              });
            } else {
              this.navigationView = this.map.cameraForBounds(bound, {
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
      this.props.dispatch(Object(_redux_actions_place__WEBPACK_IMPORTED_MODULE_10__["setMapViewportAction"])(this.view));
    }
    if (!fast_deep_equal_es6_react__WEBPACK_IMPORTED_MODULE_9___default()(prevProps.from_place, this.props.from_place)) {
      const place = this.props.from_place;
      if (place) {
        const popup = new maplibregl.Popup({
          offset: [0, -18],
          className: 'tooltip-marker',
          closeButton: false
        }).setHTML(`<div class="ant-tooltip-inner tooltip-info-location">${place.name}</div>`).setMaxWidth('150px');
        if (this.start_marker) {
          this.start_marker = this.start_marker.setLngLat(place.geometry.location).setPopup(popup).addTo(this.map);
        } else {
          const marker_start = document.createElement('div');
          marker_start.innerHTML = react_dom_server__WEBPACK_IMPORTED_MODULE_17___default.a.renderToStaticMarkup(__jsx("div", {
            className: "marker-start"
          }, __jsx("img", {
            src: _utils_images__WEBPACK_IMPORTED_MODULE_22__["default"].button,
            style: {
              width: 12
            },
            alt: ""
          })));
          this.start_marker = new maplibregl.Marker({
            anchor: 'center',
            element: marker_start
          }).setPopup(popup).setLngLat(place.geometry.location).addTo(this.map);
          this.start_marker.getElement().addEventListener('contextmenu', e => {
            e.stopPropagation();
            e.preventDefault();
            const lngLat = this.start_marker.getLngLat();
            this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_14__["setPopupRightClick"])(true, lngLat, 'popupFromPlace'));
            this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_14__["setRedMarkerAction"])(false));
          });
          this.start_marker.getElement().addEventListener('click', () => {
            if (popup.isOpen()) {
              this.start_marker.togglePopup();
            }
          });
          this.start_marker.getElement().addEventListener('mouseenter', () => this.start_marker.togglePopup());
          this.start_marker.getElement().addEventListener('mouseleave', () => this.start_marker.togglePopup());
        }
      } else {
        var _prevProps$from_place, _this$state$placeMous;
        if (fast_deep_equal_es6_react__WEBPACK_IMPORTED_MODULE_9___default()(this.start_marker.getLngLat(), this.props.position_popup)) {
          this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_14__["setPopupRightClick"])(false));
        }
        if (fast_deep_equal_es6_react__WEBPACK_IMPORTED_MODULE_9___default()((_prevProps$from_place = prevProps.from_place) === null || _prevProps$from_place === void 0 ? void 0 : _prevProps$from_place.place_id, (_this$state$placeMous = this.state.placeMouseClick) === null || _this$state$placeMous === void 0 ? void 0 : _this$state$placeMous.place_id)) {
          this.changeVisibleBottomInfo(false);
        }
        this.changeVisibleBottomInfo(false);
        this.start_marker ? this.start_marker.remove() : null;
      }
    }
    if (!fast_deep_equal_es6_react__WEBPACK_IMPORTED_MODULE_9___default()(prevProps.to_place, this.props.to_place)) {
      const place = this.props.to_place;
      if (place) {
        const popup = new maplibregl.Popup({
          offset: [0, -18],
          className: 'tooltip-marker',
          closeButton: false
        }).setHTML(`<div class="ant-tooltip-inner tooltip-info-location">${place.name}</div>`).setMaxWidth('150px');
        if (this.end_marker) {
          this.to_place = this.end_marker.setPopup(popup).setLngLat(place.geometry.location).addTo(this.map);
        } else {
          const marker_end = document.createElement('div');
          marker_end.innerHTML = react_dom_server__WEBPACK_IMPORTED_MODULE_17___default.a.renderToStaticMarkup(__jsx("div", {
            className: "marker-end"
          }, __jsx("div", null, __jsx("img", {
            src: _utils_images__WEBPACK_IMPORTED_MODULE_22__["default"].marker,
            alt: ""
          }))));
          this.end_marker = new maplibregl.Marker({
            anchor: 'center',
            element: marker_end
          }).setPopup(popup).setLngLat(place.geometry.location).addTo(this.map);
          this.end_marker.getElement().addEventListener('contextmenu', e => {
            e.stopPropagation();
            e.preventDefault();
            const lngLat = this.end_marker.getLngLat();
            this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_14__["setPopupRightClick"])(true, lngLat, 'popupToPlace'));
            this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_14__["setRedMarkerAction"])(false));
          });
          this.end_marker.getElement().addEventListener('click', () => {
            if (popup.isOpen()) {
              this.end_marker.togglePopup();
            }
          });
          this.end_marker.getElement().addEventListener('mouseenter', () => this.end_marker.togglePopup());
          this.end_marker.getElement().addEventListener('mouseleave', () => this.end_marker.togglePopup());
        }
      } else {
        var _this$start_marker, _prevProps$to_place, _this$state$placeMous2;
        if (fast_deep_equal_es6_react__WEBPACK_IMPORTED_MODULE_9___default()((_this$start_marker = this.start_marker) === null || _this$start_marker === void 0 ? void 0 : _this$start_marker.getLngLat(), this.props.position_popup)) {
          this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_14__["setPopupRightClick"])(false));
        }
        if (fast_deep_equal_es6_react__WEBPACK_IMPORTED_MODULE_9___default()((_prevProps$to_place = prevProps.to_place) === null || _prevProps$to_place === void 0 ? void 0 : _prevProps$to_place.place_id, (_this$state$placeMous2 = this.state.placeMouseClick) === null || _this$state$placeMous2 === void 0 ? void 0 : _this$state$placeMous2.place_id)) {
          this.changeVisibleBottomInfo(false);
        }
        this.end_marker ? this.end_marker.remove() : null;
      }
    }
    if (!fast_deep_equal_es6_react__WEBPACK_IMPORTED_MODULE_9___default()(prevProps.around_places, this.props.around_places) || !fast_deep_equal_es6_react__WEBPACK_IMPORTED_MODULE_9___default()(prevProps.around_place_select, this.props.around_place_select)) {
      var _this$list_marker_aro;
      if (((_this$list_marker_aro = this.list_marker_around) === null || _this$list_marker_aro === void 0 ? void 0 : _this$list_marker_aro.length) > 0) {
        this.list_marker_around.forEach(item => {
          item.remove();
        });
        this.list_marker_around = [];
      }
      const {
        around_places,
        around_place_center
      } = this.props;
      if (around_places.length > 0) {
        this.list_marker_around = [];
        let el = document.createElement('div');
        el.innerHTML = react_dom_server__WEBPACK_IMPORTED_MODULE_17___default.a.renderToStaticMarkup(__jsx(_Marker__WEBPACK_IMPORTED_MODULE_4__["default"], {
          id: "marker-center",
          type: "center"
        }));
        this.list_marker_around[0] = new maplibregl.Marker(el, {
          anchor: 'bottom'
        }).setPopup(new maplibregl.Popup({
          offset: [0, -32],
          className: 'tooltip-marker',
          closeButton: false
        }).setHTML(`<div class="ant-tooltip-inner tooltip-info-location">${around_place_center.name}</div>`).setMaxWidth('150px')).setLngLat(around_place_center.geometry.location).addTo(this.map);
        const markerCenterDiv = this.list_marker_around[0].getElement();
        markerCenterDiv.addEventListener('click', () => {
          this._selectAroundPlace('center', around_place_center);
          this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_14__["setRedMarkerAction"])(false));
          if (this.list_marker_around[0].getPopup().isOpen()) {
            this.list_marker_around[0].togglePopup();
          }
        });
        markerCenterDiv.addEventListener('contextmenu', e => {
          e.stopPropagation();
          e.preventDefault();
          this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_14__["setRedMarkerAction"])(false));
          this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_14__["setPopupRightClick"])(true, around_place_center.geometry.location, 'normal'));
        });
        markerCenterDiv.addEventListener('mouseenter', () => this.list_marker_around[0].togglePopup());
        markerCenterDiv.addEventListener('mouseleave', () => this.list_marker_around[0].togglePopup());
        around_places.forEach((item, i) => {
          const popup = new maplibregl.Popup({
            offset: [0, -32],
            className: 'tooltip-marker',
            closeButton: false,
            anchor: 'bottom'
          }).setHTML(`<div class="ant-tooltip-inner tooltip-info-location">${item.name}</div>`).setMaxWidth('150px');
          el = document.createElement('div');
          el.innerHTML = react_dom_server__WEBPACK_IMPORTED_MODULE_17___default.a.renderToStaticMarkup(__jsx(_Marker__WEBPACK_IMPORTED_MODULE_4__["default"], {
            type: "around",
            place: item,
            place_select: this.props.around_place_select,
            id: `marker-around-${i}`
          }));
          this.list_marker_around.push(new maplibregl.Marker(el, {
            anchor: 'bottom'
          }).setPopup(popup).setLngLat([item.lng_lat[0] * 1, item.lng_lat[1] * 1]).addTo(this.map));
          const markerDiv = this.list_marker_around[i + 1].getElement();
          markerDiv.addEventListener('click', e => {
            e.stopPropagation();
            this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_14__["setRedMarkerAction"])(false));
            this._selectAroundPlace('around', item);
            if (popup.isOpen()) {
              this.list_marker_around[i + 1].togglePopup();
            }
          });
          markerDiv.addEventListener('contextmenu', e => {
            e.stopPropagation();
            e.preventDefault();
            this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_14__["setPopupRightClick"])(true, {
              lng: item.lng_lat[0] * 1,
              lat: item.lng_lat[1] * 1
            }, 'around'));
            this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_14__["setRedMarkerAction"])(false));
          });
          markerDiv.addEventListener('mouseenter', () => this.list_marker_around[i + 1].togglePopup());
          markerDiv.addEventListener('mouseleave', () => this.list_marker_around[i + 1].togglePopup());
        });
      }
    }
    if (this.props.boxVisible === 'info' && this.props.current_place) {
      if (!this.markerCurrentPlace) {
        var _this$props$current_p, _this$props$current_p2;
        const el = document.createElement('div');
        el.innerHTML = react_dom_server__WEBPACK_IMPORTED_MODULE_17___default.a.renderToStaticMarkup(
        // <Marker type="normal" />
        __jsx("div", {
          className: "marker-histories"
        }, __jsx("div", null, __jsx("img", {
          src: _utils_images__WEBPACK_IMPORTED_MODULE_22__["default"].marker,
          alt: ""
        }))));
        // Marker info
        this.markerCurrentPlace = new maplibregl.Marker({
          anchor: 'bottom',
          element: el
        }).setLngLat((_this$props$current_p = this.props.current_place) === null || _this$props$current_p === void 0 ? void 0 : (_this$props$current_p2 = _this$props$current_p.geometry) === null || _this$props$current_p2 === void 0 ? void 0 : _this$props$current_p2.location).addTo(this.map);
        this.markerCurrentPlace.getElement().addEventListener('contextmenu', e => {
          e.stopPropagation();
          e.preventDefault();
          const lngLat = this.markerCurrentPlace.getLngLat();
          this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_14__["setPopupRightClick"])(true, lngLat, 'popupCurrentPlace'));
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
        for (let item of this.props.restaurantData) {
          const marker_restaurant = document.createElement('div');
          marker_restaurant.innerHTML = react_dom_server__WEBPACK_IMPORTED_MODULE_17___default.a.renderToStaticMarkup(
          // <MarkerNavigation id="end-marker" type="histories" />
          __jsx("div", {
            className: "marker-histories"
          }, __jsx("div", null, __jsx("img", {
            src: _utils_images__WEBPACK_IMPORTED_MODULE_22__["default"].marker,
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
      } else {
        // console.log('Có')
        for (let marker of this.listRestaurant) {
          marker.remove();
        }
        this.listRestaurant = [];
      }
    }
    if (this.props.boxVisible === 'history') {
      for (let marker of this.listHistories) {
        marker.remove();
      }
      for (let item of this.props.searchLocalStorage) {
        const marker_history = document.createElement('div');
        marker_history.innerHTML = react_dom_server__WEBPACK_IMPORTED_MODULE_17___default.a.renderToStaticMarkup(__jsx("div", {
          className: "marker-histories"
        }, __jsx("div", null, __jsx("img", {
          src: _utils_images__WEBPACK_IMPORTED_MODULE_22__["default"].marker,
          alt: ""
        }))));
        this.history_marker = new maplibregl.Marker({
          anchor: 'center',
          element: marker_history
        }).setLngLat(item.location).addTo(this.map);
        this.listHistories.push(this.history_marker);
      }
    } else {
      for (let marker of this.listHistories) {
        marker.remove();
      }
    }

    // if (this.props.boxVisible === "details") {
    if (this.props.result_navigation && this.props.boxVisible === 'details') {
      for (let step of this.props.result_navigation.fastest[0].legs[0].steps) {
        const popup = new maplibregl.Popup({
          offset: [0, -32],
          className: 'tooltip-marker',
          closeButton: false,
          anchor: 'bottom'
        }).setHTML(`<div class="ant-tooltip-inner tooltip-info-location">${step.html_instructions}</div>`).setMaxWidth('150px');
        const marker_step = document.createElement('div');
        marker_step.innerHTML = react_dom_server__WEBPACK_IMPORTED_MODULE_17___default.a.renderToStaticMarkup(__jsx("div", {
          className: "marker-details"
        }));
        this.step_marker = new maplibregl.Marker({
          anchor: 'center',
          element: marker_step
        }).setPopup(popup).setLngLat(step.end_location).addTo(this.map);
        this.list.push(this.step_marker);
      }
    } else {
      for (let marker of this.list) {
        marker.remove();
      }
      this.list = [];
    }
    // }
    if (this.props.boxVisible === 'navigation' && react_device_detect__WEBPACK_IMPORTED_MODULE_21__["isMobile"]) {
      if (this.props.result_navigation) {
        for (let step of this.props.result_navigation.fastest[0].legs[0].steps) {
          const popup = new maplibregl.Popup({
            offset: [0, -32],
            className: 'tooltip-marker',
            closeButton: false,
            anchor: 'bottom'
          }).setHTML(`<div class="ant-tooltip-inner tooltip-info-location">${step.html_instructions}</div>`).setMaxWidth('150px');
          const marker_step = document.createElement('div');
          marker_step.innerHTML = react_dom_server__WEBPACK_IMPORTED_MODULE_17___default.a.renderToStaticMarkup(__jsx("div", {
            className: "marker-details"
          }));
          this.step_marker = new maplibregl.Marker({
            anchor: 'center',
            element: marker_step
          }).setPopup(popup).setLngLat(step.end_location).addTo(this.map);
          this.list.push(this.step_marker);
        }
      } else {
        for (let marker of this.list) {
          marker.remove();
        }
        this.list = [];
      }
    }
  }
  decodePolyline(encoded) {
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
  componentDidMount() {
    window.addEventListener('storage', this.handleStorageChange);
    // console.log(STYLE_URL.NORMAL)
    const selectedPlace = this.props.current_place;
    this.map = new maplibregl.Map({
      container: 'map',
      // container id
      style: _consts__WEBPACK_IMPORTED_MODULE_3__["STYLE_URL"].NORMAL + "YJTajS80fLlhJ4a2BG0gXqXXdZzdLG5V3iivOK9e",
      center: selectedPlace ? [selectedPlace.geometry.location.lng, selectedPlace.geometry.location.lat] : [105.801982, 21.026745],
      // starting position [lng, lat]
      zoom: 12 // starting zoom
    });
    if (selectedPlace) this.props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_14__["setRedMarkerAction"])(true, selectedPlace.geometry.location));
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
    this.geolocateControl.on('error', () => {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.warning('Goong không thể lấy địa điểm hiện tại của bạn !');
    });
    this.geolocateControl.on('geolocate', e => {
      this.props.dispatch(Object(_redux_actions_place__WEBPACK_IMPORTED_MODULE_10__["setMyLocationAction"])({
        latitude: e.coords.latitude,
        longitude: e.coords.longitude
      }));
    });
    !react_device_detect__WEBPACK_IMPORTED_MODULE_21__["isMobile"] && this.map.addControl(this.navigation);
    !react_device_detect__WEBPACK_IMPORTED_MODULE_21__["isMobile"] && this.map.addControl(this.geolocateControl);
    this.map.on('click', this._onMouseClick);
    this.map.on('contextmenu', this._onRightClick);
    this.map.on('load', () => {
      var _URLSearchParams$get, _this$geolocateContro;
      this.map.resize();
      const pid = new URLSearchParams(window.location.search).get('pid');
      const location = (_URLSearchParams$get = new URLSearchParams(window.location.search).get('location')) === null || _URLSearchParams$get === void 0 ? void 0 : _URLSearchParams$get.split(',');
      const pid_around = new URLSearchParams(window.location.search).get('pid_around');
      const direction_infor = new URLSearchParams(window.location.search).get('direction');
      if (!direction_infor && !pid && !location && !pid_around && !this.props.current_place) (_this$geolocateContro = this.geolocateControl) === null || _this$geolocateContro === void 0 ? void 0 : _this$geolocateContro.trigger();else {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(position => {
            this.props.dispatch(Object(_redux_actions_place__WEBPACK_IMPORTED_MODULE_10__["setMyLocationAction"])({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            }));
          });
        }
      }
    });
    this.map.on('move', () => {
      this.props.dispatch(Object(_redux_actions_place__WEBPACK_IMPORTED_MODULE_10__["setCenterLatLngAction"])({
        latitude: this.map.getCenter().lat,
        longitude: this.map.getCenter().lng
      }));
    });
    this.map.on('style.load', () => {
      var _this$map;
      (_this$map = this.map) === null || _this$map === void 0 ? void 0 : _this$map.addLayer({
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
      if (this.props.result_navigation) {
        if (this.props.result_select === 'fastest') {
          this.props.dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_12__["selectResultAction"])('shortest'));
          this.props.dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_12__["selectResultAction"])('fastest'));
        } else {
          this.props.dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_12__["selectResultAction"])('fastest'));
          this.props.dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_12__["selectResultAction"])('shortest'));
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

    const direction_infor = new URLSearchParams(window.location.search).get('direction');
    const iframe = new URLSearchParams(window.location.search).get('iframe');
    if (direction_infor) {
      const coor_from = {
        lat: direction_infor.split('&')[0].split(',')[0],
        lng: direction_infor.split('&')[0].split(',')[1]
      };
      const coor_to = {
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
  componentWillUnmount() {
    window.removeEventListener('storage', this.handleStorageChange);
    document.body.removeEventListener('click', this._onClickMenu);
  }
  render() {
    var _placeMouseClick$geom, _placeMouseClick$geom2;
    const {
      style,
      bottomInfoVisible,
      placeMouseClick
    } = this.state;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(react_div_100vh__WEBPACK_IMPORTED_MODULE_19___default.a, null, __jsx("div", {
      id: "map"
    }), __jsx("div", null, !react_device_detect__WEBPACK_IMPORTED_MODULE_21__["isMobile"] && __jsx(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_0___default.a, {
      shape: "square",
      size: 64,
      onClick: this.changeStyle,
      className: "change-status-button",
      style: {
        backgroundImage: style === _consts__WEBPACK_IMPORTED_MODULE_3__["STYLE_URL"].NORMAL + "YJTajS80fLlhJ4a2BG0gXqXXdZzdLG5V3iivOK9e" ? `url(${_static_images_satellite_jpeg__WEBPACK_IMPORTED_MODULE_16___default.a})` : `url(${_static_images_normal_map_png__WEBPACK_IMPORTED_MODULE_15___default.a})`
      }
    }), react_device_detect__WEBPACK_IMPORTED_MODULE_21__["isMobile"] && __jsx(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_0___default.a, {
      shape: "square",
      size: 64,
      onClick: this.changeStyle,
      className: "change-status-button"
      // id='change-status-button--mobile'
      ,
      style: {
        backgroundImage: style === _consts__WEBPACK_IMPORTED_MODULE_3__["STYLE_URL"].NORMAL + "YJTajS80fLlhJ4a2BG0gXqXXdZzdLG5V3iivOK9e" ? `url(${_static_images_satellite_jpeg__WEBPACK_IMPORTED_MODULE_16___default.a})` : `url(${_static_images_normal_map_png__WEBPACK_IMPORTED_MODULE_15___default.a})`
      }
    })), bottomInfoVisible && __jsx(_BottomInfoLocation__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
}
const mapStateToProps = state => {
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
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps)(Map));

/***/ }),

/***/ "./components/Marker.jsx":
/*!*******************************!*\
  !*** ./components/Marker.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



// class Marker extends Component {

//   render() {
//     let marker = null;
//     if (this.props.type === 'around') {
//       if (this.props.place.id !== this.props.place_select?.id) {
//         marker = <EnvironmentFilled
//           style={{ fontSize: this.props.size || 28, color: '#33CC33', cursor: 'pointer' }}
//           id={this.props.id}
//         />
//       } else {
//         marker = <EnvironmentFilled
//           style={{ fontSize: this.props.size || 28, color: '#1890ff', cursor: 'pointer' }}
//           id={this.props.id}
//         />
//       }
//     } else if (this.props.type === 'center') {
//       marker = <EnvironmentFilled
//         style={{ fontSize: this.props.size || 28, color: '#CF1322', cursor: 'pointer' }}
//         id={this.props.id}
//       >
//       </EnvironmentFilled>
//     } else {
//       marker = <EnvironmentFilled
//         style={{ fontSize: this.props.size || 28, color: '#CF1322' }}
//         id={this.props.id}
//       />
//     }
//     // const return_marker = <>
//     //   {this.state.popupVisible && typeMarkerHasTooltip.indexOf(this.props.type) >= 0 && <Popup
//     //     latitude={this.props.latitude}
//     //     longitude={this.props.longitude}
//     //     closeButton={false}
//     //     closeOnClick={false}
//     //     captureClick={true}
//     //     anchor="bottom"
//     //     offsetLeft={0}
//     //     offsetTop={-38}
//     //     className="tooltip-marker"
//     //   >
//     //     <div className="ant-tooltip-inner">
//     //       {this.props.name}
//     //     </div>
//     //   </Popup>
//     //   }
//     //   {marker}
//     // </>
//     return marker;
//   }
// }

// export default Marker

// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------

const Marker = props => {
  let marker = null;
  if (props.type === 'around') {
    var _props$place_select;
    if (props.place.id !== ((_props$place_select = props.place_select) === null || _props$place_select === void 0 ? void 0 : _props$place_select.id)) {
      marker = __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["EnvironmentFilled"], {
        style: {
          fontSize: props.size || 28,
          color: '#33CC33',
          cursor: 'pointer'
        },
        id: props.id
      });
    } else {
      marker = __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["EnvironmentFilled"], {
        style: {
          fontSize: props.size || 28,
          color: '#1890ff',
          cursor: 'pointer'
        },
        id: props.id
      });
    }
  } else if (props.type === 'center') {
    marker = __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["EnvironmentFilled"], {
      style: {
        fontSize: props.size || 28,
        color: '#CF1322',
        cursor: 'pointer'
      },
      id: props.id
    });
  } else {
    marker = __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["EnvironmentFilled"], {
      style: {
        fontSize: props.size || 28,
        color: '#CF1322'
      },
      id: props.id
    });
  }
  return marker;
};
/* harmony default export */ __webpack_exports__["default"] = (Marker);

/***/ }),

/***/ "./components/MarkerNavigation.jsx":
/*!*****************************************!*\
  !*** ./components/MarkerNavigation.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/tooltip */ "antd/lib/tooltip");
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/images */ "./utils/images.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



// class MarkerNavigation extends Component {
//   render() {
//     return (
//       <Tooltip title={this.props.name}>
//         {
//           this.props.type === "start" ?
//             <div {...this.props} className='marker-start'
//             /> :
//             <div {...this.props} className='marker-end'
//             />
//         }
//       </Tooltip>
//     )
//   }
// }

// export default MarkerNavigation;

// -----------------------------------------------------------------------------------------

const MarkerNavigation = props => {
  return __jsx(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_0___default.a, {
    title: props.name
  }, props.type === "start" && __jsx("div", {
    className: "marker-start"
  }, __jsx("img", {
    src: _utils_images__WEBPACK_IMPORTED_MODULE_2__["default"].button,
    style: {
      width: 12
    },
    alt: ""
  })), props.type === "end" && __jsx("div", {
    className: "marker-end"
  }, __jsx("div", null, __jsx("img", {
    src: _utils_images__WEBPACK_IMPORTED_MODULE_2__["default"].marker,
    alt: ""
  }))), props.type === "histories" && __jsx("div", {
    className: "marker-histories"
  }, __jsx("div", null, __jsx("img", {
    src: _utils_images__WEBPACK_IMPORTED_MODULE_2__["default"].marker,
    alt: ""
  }))), props.type === "details" && __jsx("div", {
    className: "marker-details"
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (MarkerNavigation);

/***/ }),

/***/ "./components/MenuRightCLick.jsx":
/*!***************************************!*\
  !*** ./components/MenuRightCLick.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import React from 'react';

// class MenuRightClick extends React.Component {

//   returnMenu = () => {
//     switch (this.props.type_popup) {
//       case "popupFromPlace":
//       case "popupToPlace":
//         return <>
//           <span className="popup-content delete-location" >Xoá địa điểm này</span>
//           <span className="popup-content what-is-navigation">Đây là đâu ?</span>
//         </>
//       case "around":
//         return <span className="popup-content to-around-place">Đường đi tới đây</span>
//       case "popupCurrentPlace":
//         return <>
//           <span className="popup-content from-here">Dẫn đường từ đây</span>
//           <span className="popup-content to-here">Dẫn đường tới đây</span>
//           <span className="popup-content search-around">Tìm kiếm xung quanh</span>
//         </>
//       default:
//         return <>
//           <span className="popup-content what-is-this">Đây là đâu ?</span>
//           <span className="popup-content from-here">Dẫn đường từ đây</span>
//           <span className="popup-content to-here">Dẫn đường tới đây</span>
//           <span className="popup-content search-around">Tìm kiếm xung quanh</span>
//         </>
//     }
//   }

//   render() {
//     return <div className="ant-popover-inner" role="tooltip" style={{ minWidth: 196, zIndex: 9999 }}>
//       <div className="ant-popover-title">
//         <span className="popup-title">Thao tác trên địa điểm</span>
//       </div>
//       <div className="ant-popover-inner-content menu-right-click" style={{ minWidth: 196, zIndex: 9999 }}>
//         {this.returnMenu()}
//       </div>
//     </div>
//   }
// }

// export default (MenuRightClick)

// ------------------------------------------------------------------------------------


const MenuRightClick = props => {
  const returnMenu = () => {
    switch (props.type_popup) {
      case "popupFromPlace":
      case "popupToPlace":
        return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", {
          className: "popup-content delete-location"
        }, "Xo\xE1 \u0111\u1ECBa \u0111i\u1EC3m n\xE0y"), __jsx("span", {
          className: "popup-content what-is-navigation"
        }, "\u0110\xE2y l\xE0 \u0111\xE2u ?"));
      case "around":
        return __jsx("span", {
          className: "popup-content to-around-place"
        }, "\u0110\u01B0\u1EDDng \u0111i t\u1EDBi \u0111\xE2y");
      case "popupCurrentPlace":
        return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", {
          className: "popup-content from-here"
        }, "D\u1EABn \u0111\u01B0\u1EDDng t\u1EEB \u0111\xE2y"), __jsx("span", {
          className: "popup-content to-here"
        }, "D\u1EABn \u0111\u01B0\u1EDDng t\u1EDBi \u0111\xE2y"), __jsx("span", {
          className: "popup-content search-around"
        }, "T\xECm ki\u1EBFm xung quanh"));
      default:
        return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", {
          className: "popup-content what-is-this"
        }, "\u0110\xE2y l\xE0 \u0111\xE2u ?"), __jsx("span", {
          className: "popup-content from-here"
        }, "D\u1EABn \u0111\u01B0\u1EDDng t\u1EEB \u0111\xE2y"), __jsx("span", {
          className: "popup-content to-here"
        }, "D\u1EABn \u0111\u01B0\u1EDDng t\u1EDBi \u0111\xE2y"), __jsx("span", {
          className: "popup-content search-around"
        }, "T\xECm ki\u1EBFm xung quanh"));
    }
  };
  return __jsx("div", null, returnMenu());
};
/* harmony default export */ __webpack_exports__["default"] = (MenuRightClick);

/***/ }),

/***/ "./components/NavigationBox.jsx":
/*!**************************************!*\
  !*** ./components/NavigationBox.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/tooltip */ "antd/lib/tooltip");
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/message */ "antd/lib/message");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _redux_actions_navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redux/actions/navigation */ "./redux/actions/navigation.js");
/* harmony import */ var _redux_actions_search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../redux/actions/search */ "./redux/actions/search.js");
/* harmony import */ var fast_deep_equal_es6_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! fast-deep-equal/es6/react */ "fast-deep-equal/es6/react");
/* harmony import */ var fast_deep_equal_es6_react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal_es6_react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _redux_actions_place__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../redux/actions/place */ "./redux/actions/place.js");
/* harmony import */ var _redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../redux/actions/boxVisble */ "./redux/actions/boxVisble.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _DragDropContainer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./DragDropContainer */ "./components/DragDropContainer.jsx");
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/request */ "./utils/request.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-device-detect */ "react-device-detect");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _redux_sagas_placeSaga__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../redux/sagas/placeSaga */ "./redux/sagas/placeSaga.js");
/* harmony import */ var _navigation_select_NaviOption__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./navigation_select/NaviOption */ "./components/navigation_select/NaviOption.jsx");
/* harmony import */ var _navigation_select_NaviCalculate___WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./navigation_select/NaviCalculate  */ "./components/navigation_select/NaviCalculate .jsx");
/* harmony import */ var _navigation_select_NaviTranslation__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./navigation_select/NaviTranslation */ "./components/navigation_select/NaviTranslation.jsx");
/* harmony import */ var _config_route_details_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../config/route_details_icon */ "./config/route_details_icon.js");
/* harmony import */ var _utils_images__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../utils/images */ "./utils/images.js");
/* harmony import */ var _ShareLocation__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ShareLocation */ "./components/ShareLocation.jsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-i18next */ "react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_24__);





var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


















// import { Mile_Travel } from "../consts";









const NavigationBox = props => {
  const {
    dispatch,
    my_location,
    typeInput
  } = props;
  const {
    0: selectedUnit,
    1: setSelectedUnit
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])("");
  const {
    0: showContent,
    1: setShowContent
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false);
  const {
    0: iconCarActive,
    1: setIconCarActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(true);
  const {
    0: iconMotorActive,
    1: setIconMotorActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false);
  const {
    0: iconWalkActive,
    1: setIconWalkActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false);
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])([]);
  const {
    0: dataAutoComplete,
    1: setDataAutoComplete
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])("");
  const {
    0: carResult,
    1: setCarResult
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])("");
  const {
    0: bikeResult,
    1: setBikeResult
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])("");
  const {
    0: walkResult,
    1: setWalkResult
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])("");
  const {
    0: isOptionVisible,
    1: setIsOptionVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(true);
  const {
    0: isShowActive,
    1: setIsShowActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false);
  const {
    0: selectedIcon,
    1: setSelectedIcon
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])("car");
  const {
    0: showPopup,
    1: setShowPopup
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false);
  const {
    0: distance,
    1: setDistance
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])("");
  const {
    0: duration,
    1: setDuration
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])("");
  const {
    t
  } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_24__["useTranslation"])("common");
  const handleUnitChange = event => {
    setSelectedUnit(event.target.value);
    window.localStorage.setItem("unit", event.target.value);
  };
  const ResultBox = () => {
    const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();
    const result = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(state => state.navigationReducer.result);
    const result_select = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(state => state.navigationReducer.result_select);
    const toggleLink = () => {
      setShowContent(!showContent);
    };
    const selectResult = type => {
      dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_8__["selectResultAction"])(type));
    };
    const togglePopup = () => {
      setShowPopup(!showPopup);
    };
    let div_return = null;
    if (result) {
      const result_render = result[result_select];
      div_return = __jsx("div", {
        className: "div-result-bottom"
      }, __jsx("div", {
        className: "pull--card--content--navi",
        onClick: handleStagesClick
      }, __jsx("div", {
        className: "pull--card--title--navi"
      })), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
        onClick: handleStagesClick
      }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
        span: 19,
        style: {
          marginLeft: "5px"
        }
      }, __jsx("h1", null, __jsx("span", {
        className: "result--text--color--mobile"
      }, result_render[0].legs[0].duration.text, " (", " "), __jsx("span", null, (result_render[0].legs[0].distance.value / 1000).toFixed(2), " ", "km )")), __jsx("p", null, result_select === "fastest" ? t("result_select_i18_fast") : t("result_select_i18_shortest")))), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
        id: "row-col-17-icon-button"
      }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
        span: 17,
        id: "Mobile-button-select"
      }, __jsx("div", null, __jsx("div", {
        className: " route-in--content "
      }, __jsx("button", {
        className: "route-in--button ",
        type: "primary",
        shape: "round",
        onClick: () => selectResult(result_select === "fastest" ? "shortest" : "fastest")
      }, __jsx("span", {
        className: "route-small--content"
      }, __jsx("span", null, __jsx("i", {
        className: "fas fa-directions",
        style: {
          color: "#fff",
          paddingTop: "2px"
        }
      })), __jsx("span", {
        class: "route-content--text"
      }, t("reuslt_button_directions_1")))))), __jsx("div", {
        className: " route-in--content "
      }, __jsx("button", {
        className: "route-in--button ",
        onClick: toggleLink
      }, __jsx("span", {
        className: "route-small--content",
        id: "borderbuttonicon"
      }, __jsx("span", null, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["BarsOutlined"], {
        id: "mobilebars"
      })), __jsx("span", {
        className: "route-content--text",
        style: {
          color: "#1a73e8"
        }
      }, t("reuslt_button_directions_2"))))), __jsx("div", {
        className: " route-in--content "
      }, __jsx("button", {
        className: "route-in--button ",
        onClick: togglePopup
      }, __jsx("span", {
        className: "route-small--content",
        id: "borderbuttonicon"
      }, __jsx("span", null, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["ShareAltOutlined"], {
        id: "mobile-share"
      })), __jsx("span", {
        class: "route-content--text",
        style: {
          color: "#1a73e8"
        }
      }, t("reuslt_button_directions_3"))))), __jsx("div", {
        className: " route-in--content "
      }, __jsx("button", {
        className: "route-in--button ",
        onClick: copyurl
      }, __jsx("span", {
        className: "route-small--content",
        id: "borderbuttonicon"
      }, __jsx("div", {
        className: "route-empty--card"
      }), __jsx("span", null, __jsx("i", {
        className: "far fa-bookmark",
        id: "Mobilebookmark"
      })), __jsx("span", {
        className: "route-content--text",
        style: {
          color: "#1a73e8"
        }
      }, t("reuslt_button_directions_4")))))), __jsx(_ShareLocation__WEBPACK_IMPORTED_MODULE_23__["default"], {
        handleClose: togglePopup,
        show: showPopup
        // place={current_place}
        ,
        fromPlace: props.from_place,
        toPlace: props.to_place
      })));
    }
    return div_return;
  };
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(() => {
    var _props$result, _props$result$fastest, _props$result$fastest2, _props$result$fastest3;
    const fastestLeg = (_props$result = props.result) === null || _props$result === void 0 ? void 0 : (_props$result$fastest = _props$result.fastest) === null || _props$result$fastest === void 0 ? void 0 : (_props$result$fastest2 = _props$result$fastest[0]) === null || _props$result$fastest2 === void 0 ? void 0 : (_props$result$fastest3 = _props$result$fastest2.legs) === null || _props$result$fastest3 === void 0 ? void 0 : _props$result$fastest3[0];
    if (fastestLeg) {
      setDuration(fastestLeg.duration.text);
      setDistance(fastestLeg.distance.text);
    }
  }, [props.result]);
  const handleStagesClick = () => {
    if (showContent) {
      setShowContent(false); // Ẩn nội dung chính
      // setShowAdditionalDiv(true); // Hiện thẻ <div>dsgdfgdfgdfgdfg</div>
    } else {
      setShowContent(true); // Hiện lại nội dung chính
      // setShowAdditionalDiv(false); // Ẩn thẻ <div>dsgdfgdfgdfgdfg</div>
    }
  };
  const handleButtonClick = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(type => {
    setVisibleButton(type);
    setShowContent(!showContent);
  }, []);
  const zoomStep = location => {
    const viewport = {
      longitude: location.lng,
      latitude: location.lat,
      zoom: 16
    };
    props.dispatch(Object(_redux_actions_place__WEBPACK_IMPORTED_MODULE_11__["setMapViewportAction"])(viewport));
  };
  const handleClickClose = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(() => {
    setIsOptionVisible(prev => !prev);
  }, []);
  const {
    0: visibleButton,
    1: setVisibleButton
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])("fastest");
  const copyurl = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(() => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default.a.success(t("success_i18"));
    }).catch(err => {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default.a.error(t("success_i18_error"));
      console.error(err);
    });
  }, [t]);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(() => {
    const {
      from_place,
      to_place
    } = props;
    if (from_place && to_place) {
      routing(from_place, to_place, "car");
    }
    if (localStorage.getItem("search_history") != null) {
      setData(JSON.parse(localStorage.getItem("search_history")).reverse());
    }
    // setData(JSON.parse(localStorage.getItem("search_history")));
    const unit = window.localStorage.getItem("unit");
    setSelectedUnit(unit);
  }, []);
  const convertToHoursAndMinutes = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(seconds => {
    let h = Math.floor(seconds / 3600);
    let m = Math.floor(seconds % 3600 / 60);
    if (h >= 24) {
      m = 0;
    }
    const formattedDuration = `${h > 0 ? h + " giờ " : ""}${m > 0 ? m + " p" : ""}`;
    return formattedDuration;
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(() => {
    setDataAutoComplete(props.places);
  }, [props.places]);
  const routing = (from_place, to_place, vehicle) => {
    setLoading(true);
    next_router__WEBPACK_IMPORTED_MODULE_13___default.a.push({
      pathname: `/`,
      query: {
        direction: `${from_place.geometry.location.lat},${from_place.geometry.location.lng}&${to_place.geometry.location.lat},${to_place.geometry.location.lng}`
      }
    });
    dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_8__["navigationAction"])(from_place, to_place, vehicle));
  };
  const selectIconCar = () => {
    setSelectedIcon("car");
    setActive("SecondCard");
    setIconCarActive(true);
    setIconMotorActive(false);
    setIconWalkActive(false);
    const {
      from_place,
      to_place
    } = props;
    if (from_place && to_place) {
      routing(from_place, to_place, "car");
    }
  };
  const selectIconMotor = () => {
    setSelectedIcon("motorcycle");
    setActive("ThirdCard");
    setIconCarActive(false);
    setIconMotorActive(true);
    setIconWalkActive(false);
    const {
      from_place,
      to_place
    } = props;
    if (from_place && to_place) {
      routing(from_place, to_place, "bike");
    }
  };
  const selectIconWalk = () => {
    setSelectedIcon("walk");
    setActive("FourthCard");
    setIconCarActive(false);
    setIconMotorActive(false);
    setIconWalkActive(true);
    const {
      from_place,
      to_place
    } = props;
    if (from_place && to_place) {
      routing(from_place, to_place, "taxi");
    }
  };
  const closeBox = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(() => {
    dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_8__["clearAction"])());
    dispatch(Object(_redux_actions_search__WEBPACK_IMPORTED_MODULE_9__["searchClearAction"])());
    dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_8__["clearResultAction"])());
    dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_12__["setBoxVisibleAction"])("search"));
    dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_12__["setPopupRightClick"])(false));
    dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_12__["setRedMarkerAction"])(false));
  }, [dispatch]);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(() => {
    const {
      from_place,
      to_place
    } = props;
    if (from_place && to_place && (!fast_deep_equal_es6_react__WEBPACK_IMPORTED_MODULE_10___default()(props.prevFromPlace, from_place) || !fast_deep_equal_es6_react__WEBPACK_IMPORTED_MODULE_10___default()(props.prevToPlace, to_place))) {
      if (from_place.place_id === to_place.place_id) {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default.a.warning("Điểm bắt đầu & điểm kết thúc trùng nhau !");
        props.dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_8__["clearResultAction"])());
        return;
      }
      getTime();
      let vehicle = "car";
      if (iconMotorActive) vehicle = "bike";
      if (iconWalkActive) vehicle = "taxi";
      routing(from_place, to_place, vehicle);
    }
  }, [props.from_place, props.to_place]);

  // Hàm gọi api lấy ra thời gian 3 loại phương tiện
  const getTime = async () => {
    let paramsCar = {
      origin: {
        latitude: from_place.geometry.location.lat,
        longitude: from_place.geometry.location.lng
      },
      destination: {
        latitude: to_place.geometry.location.lat,
        longitude: to_place.geometry.location.lng
      },
      vehicle: "car"
    };
    const car = await _utils_request__WEBPACK_IMPORTED_MODULE_15__["default"].direction(paramsCar);
    setCarResult(convertToHoursAndMinutes(car.data.routes[0].legs[0].duration.value));
    let paramsBike = {
      origin: {
        latitude: from_place.geometry.location.lat,
        longitude: from_place.geometry.location.lng
      },
      destination: {
        latitude: to_place.geometry.location.lat,
        longitude: to_place.geometry.location.lng
      },
      vehicle: "bike"
    };
    const bike = await _utils_request__WEBPACK_IMPORTED_MODULE_15__["default"].direction(paramsBike);
    setBikeResult(convertToHoursAndMinutes(bike.data.routes[0].legs[0].duration.value));
    let paramsTaxi = {
      origin: {
        latitude: from_place.geometry.location.lat,
        longitude: from_place.geometry.location.lng
      },
      destination: {
        latitude: to_place.geometry.location.lat,
        longitude: to_place.geometry.location.lng
      },
      vehicle: "taxi"
    };
    const taxi = await _utils_request__WEBPACK_IMPORTED_MODULE_15__["default"].direction(paramsTaxi);
    setWalkResult(convertToHoursAndMinutes(taxi.data.routes[0].legs[0].duration.value));
  };
  const {
    from_place,
    to_place,
    result,
    result_select,
    response_status
  } = props;
  const navigationMyLocation = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(async () => {
    if (my_location) {
      try {
        const response = await _utils_request__WEBPACK_IMPORTED_MODULE_15__["default"].geocode(my_location);
        if (response.data.results.length > 0) {
          if (typeInput === true) {
            dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_8__["navigationFromAction"])(_objectSpread(_objectSpread({}, response.data.results[0]), {}, {
              name: response.data.results[0].address_components[0].long_name
            }), "Vị trí của bạn"));
          } else {
            dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_8__["navigationToAction"])(_objectSpread(_objectSpread({}, response.data.results[0]), {}, {
              name: response.data.results[0].address_components[0].long_name
            }), "Vị trí của bạn"));
          }
        } else {
          antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default.a.error("Không tìm thấy địa điểm từ tọa độ !");
        }
      } catch (error) {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default.a.warning("Goong không thể lấy tọa độ của bạn !");
      }
    } else {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default.a.warning("Goong không thể lấy tọa độ của bạn !");
    }
  }, [dispatch, my_location, typeInput]);
  const onOptionSelect = async place => {
    let check = true;
    let data = JSON.parse(localStorage.getItem("search_history")) || [];
    if (!place.location) {
      const dataHistory = await Object(_redux_sagas_placeSaga__WEBPACK_IMPORTED_MODULE_17__["getDetailIdService"])(place.place_id);
      if (check) {
        if (place != null && data.length < 100) {
          place.location = dataHistory.data.result.geometry.location;
          data.push(place);
        } else if (place != null && data.length >= 100) {
          data.shift();
          data.push(place);
        }
      }
      window.localStorage.setItem("search_history", JSON.stringify(data));
      place.place_id = place.id || place.place_id;
    } else {
      const latLng = {
        latitude: place.location.lat,
        longitude: place.location.lng
      };
      const response = (await Object(_redux_sagas_placeSaga__WEBPACK_IMPORTED_MODULE_17__["getDetailLatLngService"])(latLng)).data.results;
      for (let i = response.length - 1; i >= 0; i--) {
        if (place.location.lat === response[i].geometry.location.lat && place.location.lng === response[i].geometry.location.lng && place.structured_formatting.main_text === response[i].name && place.place_id != response[i].place_id) {
          for (let i = data.length - 1; i >= 0; i--) {
            if (data[i].place_id === place.place_id) {
              data.splice(i, 1);
              break;
            }
          }
          place.place_id = response[i].place_id;
          data.push(place);
          break;
        }
      }
    }
    for (let i = data.length - 1; i >= 0; i--) {
      // Nếu có rồi thì đảo lại place đó lên
      if (data[i].place_id === place.place_id) {
        // place.location = dataHistory.data.result.geometry.location
        data.splice(i, 1);
        data.push(place);
        // check = false
        break;
      }
    }
    window.localStorage.setItem("search_history", JSON.stringify(data));
    const selectedPlaceId = place.id || place.place_id;
    try {
      var _response$data;
      const response = await _utils_request__WEBPACK_IMPORTED_MODULE_15__["default"].place_detail(selectedPlaceId);
      const selectedPlace = (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.result;
      if (selectedPlace) {
        const viewport = {
          longitude: selectedPlace.geometry.location.lng,
          latitude: selectedPlace.geometry.location.lat,
          zoom: 14
        };
        dispatch(Object(_redux_actions_search__WEBPACK_IMPORTED_MODULE_9__["searchClearAction"])());
        // if (props.type === "start_input") {
        if (typeInput === true) {
          dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_8__["navigationFromAction"])(selectedPlace, `${selectedPlace.name} - ${selectedPlace.formatted_address}`));
          !props.to_place && dispatch(Object(_redux_actions_place__WEBPACK_IMPORTED_MODULE_11__["setMapViewportAction"])(viewport));
        } else {
          dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_8__["navigationToAction"])(selectedPlace, `${selectedPlace.name} - ${selectedPlace.formatted_address}`));
          !props.from_place && dispatch(Object(_redux_actions_place__WEBPACK_IMPORTED_MODULE_11__["setMapViewportAction"])(viewport));
        }
      } else {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default.a.error("Không tìm thấy vị trí của bạn!");
      }
    } catch (error) {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default.a.error("Không tìm thấy vị trí của bạn!");
    }
  };
  const {
    0: active,
    1: setActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])("FirstCard");
  // console.log("--------------------", dataAutoComplete);
  const {
    0: isRotated,
    1: setIsRotated
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false);
  const handleClick = () => {
    setIsRotated(!isRotated);
    dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_8__["swapAction"])());
    dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_12__["setPopupRightClick"])(false));
  };
  const openDeltails = () => {
    dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_12__["setBoxVisibleAction"])("details"));
  };
  const openRestaurant2 = () => {
    dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_12__["setBoxVisibleAction"])("detailsrestaurant"));
  };
  return __jsx("div", null, !react_device_detect__WEBPACK_IMPORTED_MODULE_16__["isMobile"] && __jsx("div", {
    className: "Container_left_web"
  }, __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "navigation-box",
    bodyStyle: {
      padding: 0
    },
    id: "navibox"
  }, __jsx("div", {
    className: "div-navigation-input"
  }, __jsx("div", {
    className: "list-vehicle"
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "Row-col-span-3-18"
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    span: 3
  }), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    span: 18,
    id: "col-span-listmc"
  }, __jsx("div", {
    id: "Listmc"
  }, __jsx("div", {
    className: "List_menuicon"
  }, __jsx("div", {
    className: "Utility",
    style: {
      width: "408px"
    }
  }, __jsx("button", null, __jsx("div", {
    id: "Arow",
    onClick: () => setActive("FirstCard"),
    style: {
      backgroundColor: active === "FirstCard" ? "#e0ecfd" : ""
    }
  }, __jsx("a", {
    href: "#",
    "tooltip-position": "bottom",
    "data-c-tooltip": t("Tooltip_travel"),
    className: "Best_travel",
    "aria-label": t("Tooltip_travel")
  }, __jsx("i", {
    className: "fas fa-directions",
    style: {
      color: active === "FirstCard" ? "#0084ff" : "#54585A"
    }
  }))), result ? __jsx("div", {
    class: "The_best"
  }, t("best_icon_text")) : null), __jsx("button", {
    onClick: selectIconCar
  }, __jsx("div", {
    id: "Carrow",
    onClick: () => setActive("SecondCard"),
    style: {
      backgroundColor: active === "SecondCard" ? "#e0ecfd" : ""
    }
  }, __jsx("a", {
    href: "#",
    "tooltip-position": "bottom",
    "data-c-tooltip": t("Drive_web"),
    className: "Drive",
    "aria-label": t("Drive_web")
  }, __jsx("i", {
    className: "fas fa-car icon-vehicle",
    style: {
      color: active === "SecondCard" ? "#0084ff" : "#54585A"
    }
  }))), result ? __jsx("div", {
    class: "Numberminutes_Drive"
  }, carResult) : null), __jsx("button", {
    onClick: selectIconMotor
  }, __jsx("div", {
    id: "Bikerow",
    onClick: () => setActive("ThirdCard"),
    style: {
      backgroundColor: active === "ThirdCard" ? "#e0ecfd" : ""
    }
  }, __jsx("a", {
    href: "#",
    "tooltip-position": "bottom",
    "data-c-tooltip": t("transport"),
    className: "Public_transport"
  }, " ", __jsx("i", {
    className: "fas fa-motorcycle icon-vehicle",
    style: {
      color: active === "ThirdCard" ? "#0084ff" : "#54585A"
    }
  }), " ")), result ? __jsx("div", {
    class: "Numberminutes_Bike"
  }, bikeResult) : null), __jsx("button", {
    onClick: selectIconWalk
  }, __jsx("div", {
    id: "Taxirow",
    onClick: () => setActive("FourthCard"),
    style: {
      backgroundColor: active === "FourthCard" ? "#e0ecfd" : ""
    }
  }, __jsx("a", {
    href: "#",
    "tooltip-position": "bottom",
    "data-c-tooltip": t("Car_taxi"),
    className: "Walk",
    "aria-label": t("Car_taxi")
  }, __jsx("i", {
    className: "fas fa-taxi icon-vehicle",
    style: {
      color: active === "FourthCard" ? "#0084ff" : "#54585A"
    }
  }))), result ? __jsx("div", {
    class: "Numberminutes_Taxi"
  }, walkResult) : null))))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    span: 3
  }, __jsx("div", {
    className: "Road_closure"
  }, __jsx("div", {
    id: "Close_Folder"
  }, __jsx("a", {
    href: "#",
    "tooltip-position": "bottom",
    "data-c-tooltip": t("Close_way"),
    className: "Close_the_way"
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["CloseOutlined"], {
    className: "icon-close1",
    onClick: closeBox
  }))))))), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "row-col-21-input"
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    span: 21
  }, __jsx("div", {
    className: "inputLocation"
  }, __jsx("div", {
    class: "There_img_column"
  }, __jsx("div", {
    class: "algincolum"
  }, __jsx("div", {
    class: "Above2"
  }, __jsx("img", {
    src: "static/images/start_location_grey800_18dp.png",
    id: "round_left",
    alt: "icon"
  })), __jsx("img", {
    src: "static/images/route_3dots_grey650_24dp.png",
    id: "three_dots",
    alt: "three dots"
  }), __jsx("div", {
    class: "Below2"
  }, __jsx("img", {
    src: _utils_images__WEBPACK_IMPORTED_MODULE_22__["default"].place_outline_red600_18dp,
    id: "round_bot",
    alt: "icon"
  }))), __jsx("div", {
    class: "between-cards"
  }), __jsx("div", {
    className: "Vecto"
  }, __jsx("img", {
    src: _utils_images__WEBPACK_IMPORTED_MODULE_22__["default"].up_and_down,
    id: "Updown",
    alt: "updown",
    onClick: () => {
      props.dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_8__["swapAction"])());
      props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_12__["setPopupRightClick"])(false));
    }
  }), __jsx("div", {
    className: "UAD"
  }, t("search_up_down")))), __jsx(_DragDropContainer__WEBPACK_IMPORTED_MODULE_14__["default"], null)))))), __jsx("div", {
    className: "Container_scrool"
  }, !result && __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx("div", {
    className: "Your_position",
    onClick: navigationMyLocation
  }, __jsx("div", {
    className: "Location"
  }, __jsx(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_0___default.a, {
    title: t("tooltip_location")
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["AimOutlined"], {
    id: "Aim"
  })), __jsx("span", {
    className: "Position"
  }, __jsx("p", {
    className: "Determine_location"
  }, " ", t("tooltip_location"))))), dataAutoComplete && __jsx("div", null, dataAutoComplete.map((item, index) => __jsx("div", {
    key: index,
    className: "Searched_loca",
    onClick: () => onOptionSelect(item)
  }, __jsx("div", {
    className: "Loca"
  }, __jsx("div", {
    className: "Locaicon"
  }, __jsx("i", {
    className: "fas fa-location-arrow"
  })), __jsx("span", {
    className: "Address"
  }, __jsx("span", {
    className: "Sites"
  }, item.structured_formatting.main_text + " "), __jsx("span", {
    className: "Street_name"
  }, item.structured_formatting.secondary_text)))))), data && __jsx("div", null, data.map((item, index) => __jsx("div", {
    key: index,
    className: "Searched_loca",
    onClick: () => onOptionSelect(item)
  }, __jsx("div", {
    className: "Loca"
  }, __jsx("div", {
    className: "Locaicon"
  }, __jsx("i", {
    className: "fas fa-history"
  })), __jsx("span", {
    className: "Address"
  }, __jsx("span", {
    className: "Sites"
  }, item.structured_formatting.main_text + " "), __jsx("span", {
    className: "Street_name"
  }, item.structured_formatting.secondary_text))))))), props.result && __jsx(_navigation_select_NaviOption__WEBPACK_IMPORTED_MODULE_18__["default"], {
    result: props.result,
    isOptionVisible: isOptionVisible,
    handleClickClose: handleClickClose,
    selectedUnit: selectedUnit,
    handleUnitChange: handleUnitChange,
    copyurl: copyurl
  }), result && __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(_navigation_select_NaviCalculate___WEBPACK_IMPORTED_MODULE_19__["default"], {
    result: result,
    selectedUnit: selectedUnit,
    result_select: result_select,
    handleButtonClick: handleButtonClick,
    selectedIcon: selectedIcon,
    openDeltails: openDeltails,
    dispatch: props.dispatch,
    selectResultAction: _redux_actions_navigation__WEBPACK_IMPORTED_MODULE_8__["selectResultAction"]
  }), __jsx(_navigation_select_NaviTranslation__WEBPACK_IMPORTED_MODULE_20__["default"], {
    to_place: to_place,
    openRestaurant2: openRestaurant2
  })))), react_device_detect__WEBPACK_IMPORTED_MODULE_16__["isMobile"] && __jsx("div", {
    class: "Mobi"
  }, __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "navigation-box",
    bodyStyle: {
      padding: 0
    }
  }, __jsx("div", {
    className: "div-navigation-input"
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "library-mobi"
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "span-mobi-3",
    span: 3
  }, __jsx("div", {
    className: "Road_closure"
  }, __jsx("div", {
    id: "Close_Folder"
  }, __jsx("a", {
    href: "#",
    "tooltip-position": "bottom",
    "data-c-tooltip": "\u0110\xF3ng \u0111\u01B0\u1EDDng \u0111i",
    className: "Close_the_way"
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["ArrowLeftOutlined"], {
    className: "icon-close1",
    onClick: closeBox
  }))))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    span: 3,
    id: "library-colum"
  }, __jsx("div", {
    class: "algincolum"
  }, __jsx("div", {
    class: "Above2"
  }, __jsx("img", {
    src: "static/images/start_location_grey800_18dp.png",
    id: "round_left",
    alt: "icon"
  })), __jsx("div", {
    class: "There_center"
  }, __jsx("img", {
    src: "static/images/route_3dots_grey650_24dp.png",
    id: "three_dots",
    alt: "three dots"
  })), __jsx("div", {
    class: "Below2"
  }, __jsx("img", {
    src: _utils_images__WEBPACK_IMPORTED_MODULE_22__["default"].place_outline_red600_18dp,
    id: "round_bot",
    alt: "icon"
  })))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    span: 14
  }, __jsx(_DragDropContainer__WEBPACK_IMPORTED_MODULE_14__["default"], null)), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    span: 4,
    id: "library-updown-4"
  }, __jsx("div", {
    className: "Vecto"
  }, __jsx("button", {
    onClick: handleClick
  }, __jsx("img", {
    src: _utils_images__WEBPACK_IMPORTED_MODULE_22__["default"].up_and_down,
    id: "Updown",
    alt: "updown",
    className: isRotated ? "rotate" : ""
  }))))), __jsx("div", {
    className: "list-vehicle"
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "row-col-17-icon"
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    span: 17,
    id: "library-icon-17"
  }, __jsx("div", {
    class: "Icon_Mobi"
  }, __jsx("button", null, __jsx("div", {
    id: "Arow",
    onClick: () => setActive("FirstCard"),
    style: {
      backgroundColor: active === "FirstCard" ? "#e0ecfd" : ""
    }
  }, __jsx("i", {
    className: "fas fa-directions",
    s: true,
    style: {
      color: active === "FirstCard" ? "#0084ff" : "#54585A"
    }
  }), result ? __jsx("div", {
    class: "The_best"
  }, t("best_icon_text")) : null)), __jsx("button", {
    onClick: selectIconCar
  }, __jsx("div", {
    id: "Carrow",
    onClick: () => setActive("SecondCard"),
    style: {
      backgroundColor: active === "SecondCard" ? "#e0ecfd" : ""
    }
  }, __jsx("i", {
    className: "fas fa-car icon-vehicle",
    style: {
      color: active === "SecondCard" ? "#0084ff" : "#54585A"
    }
  }), result ? __jsx("div", {
    class: "Numberminutes_Drive"
  }, carResult) : null)), __jsx("button", {
    onClick: selectIconMotor
  }, __jsx("div", {
    id: "Bikerow",
    onClick: () => setActive("ThirdCard"),
    style: {
      backgroundColor: active === "ThirdCard" ? "#e0ecfd" : ""
    }
  }, __jsx("i", {
    className: "fas fa-motorcycle icon-vehicle",
    style: {
      color: active === "ThirdCard" ? "#0084ff" : "#54585A"
    }
  }), " ", result ? __jsx("div", {
    class: "Numberminutes_Bike"
  }, bikeResult) : null)), __jsx("button", {
    onClick: selectIconWalk
  }, __jsx("div", {
    id: "Taxirow",
    onClick: () => setActive("FourthCard"),
    style: {
      backgroundColor: active === "FourthCard" ? "#e0ecfd" : ""
    }
  }, __jsx("i", {
    className: "fas fa-taxi icon-vehicle",
    style: {
      color: active === "FourthCard" ? "#0084ff" : "#54585A"
    }
  }), result ? __jsx("div", {
    class: "Numberminutes_Taxi"
  }, walkResult) : null)))))))), __jsx("div", {
    className: "Container_scrool"
  }, !result && __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx("div", {
    class: "Container_scrool--content"
  }, __jsx("div", {
    className: "Your_position_Mobi",
    onClick: navigationMyLocation
  }, __jsx("div", {
    className: "New_position"
  }, __jsx("div", {
    className: "Location"
  }, __jsx(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_0___default.a, {
    title: "V\u1ECB tr\xED c\u1EE7a b\u1EA1n"
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["AimOutlined"], {
    id: "Aim"
  })), __jsx("span", {
    className: "Position"
  }, __jsx("p", {
    className: "Determine_location"
  }, t("tooltip_location")))))), dataAutoComplete && __jsx("div", null, dataAutoComplete.map((item, index) => __jsx("div", {
    key: index,
    className: "Searched_loca",
    onClick: () => onOptionSelect(item)
  }, __jsx("div", {
    className: "Loca"
  }, __jsx("div", {
    className: "Locaicon"
  }, __jsx("i", {
    className: "fas fa-location-arrow"
  })), __jsx("span", {
    className: "Address"
  }, __jsx("span", {
    className: "Sites"
  }, item.structured_formatting.main_text + " "), __jsx("span", {
    className: "Street_name"
  }, item.structured_formatting.secondary_text)))))), data && __jsx("div", null, data.map((item, index) => __jsx("div", {
    key: index,
    className: "Searched_loca",
    onClick: () => onOptionSelect(item)
  }, __jsx("div", {
    className: "Loca"
  }, __jsx("div", {
    className: "Locaicon"
  }, __jsx("i", {
    className: "fas fa-history"
  })), __jsx("span", {
    className: "Address"
  }, __jsx("h6", {
    className: "Sites"
  }, item.structured_formatting.main_text + " "), __jsx("span", {
    className: "Street_name"
  }, item.structured_formatting.secondary_text))))))))), __jsx(ResultBox, null), __jsx("div", null, showContent && __jsx("div", {
    className: "stage"
  }, __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "navigation-box--show",
    bodyStyle: {
      padding: 0
    }
  }, __jsx("div", {
    className: "div-navigation-input--content"
  }, __jsx("div", {
    className: "list-vehicle--show"
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "mobile-route-details--title",
    onClick: handleStagesClick
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    span: 21,
    style: {
      margin: "auto"
    }
  }, __jsx("div", null, __jsx("h1", {
    className: "time-and-km"
  }, __jsx("span", null, __jsx("span", {
    className: "delay-medium"
  }, duration), __jsx("span", null, "(", distance, ")"))), __jsx("div", null, __jsx("h1", {
    className: "travel-the--fastest"
  }, result_select === "fastest" ? t("roadWay_text_1") : t("roadWay_text_2")))))), __jsx("div", {
    className: "phone-route--details--content-scrool"
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: {
      height: "100%"
    }
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    span: 21,
    style: {
      margin: "auto",
      marginTop: "15px"
    }
  }, __jsx("div", null, __jsx("h1", {
    className: "time-and-km"
  }, __jsx("span", null, __jsx("span", {
    className: "delay-medium-stages"
  }, t("reuslt_button_directions_2"))))))), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "mobile-route-details--title--content"
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    span: 3,
    style: {
      textAlign: "right"
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["EnvironmentOutlined"], {
    id: "mobieenviro"
  })), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    span: 19,
    style: {
      margin: "auto"
    }
  }, __jsx("div", {
    className: "medium-time"
  }, __jsx("h1", {
    className: "time-and-km"
  }, __jsx("span", null, __jsx("span", {
    className: "delay-medium-stages--address"
  }, (from_place === null || from_place === void 0 ? void 0 : from_place.formatted_address) || t("route-siste_i18"))))))), __jsx("div", null, result[result_select][0].legs[0].steps.map((item, index) => __jsx("div", {
    key: index
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "mobile-route-details--title--footer",
    onClick: () => {
      zoomStep(item.end_location);
      handleStagesClick(); // Ẩn nội dung chính và hiển thị div mới khi click
    }
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    span: 3,
    style: {
      textAlign: "right"
    }
  }, __jsx("img", {
    src: Object(_config_route_details_icon__WEBPACK_IMPORTED_MODULE_21__["getRouteDetailsIcon"])(item.maneuver),
    id: "turning-directions--mobile",
    alt: "Direction Icon"
  })), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    span: 19,
    style: {
      margin: "auto"
    }
  }, __jsx("div", null, __jsx("h1", {
    className: "time-and-km"
  }, __jsx("span", null, __jsx("span", {
    className: "delay-medium-stages--mobile",
    id: "delay-medium-stages--text--mobile"
  }, item.html_instructions)))), __jsx("div", {
    className: "Details-of-route--time--mobile"
  }, __jsx("div", {
    className: "directions-mode-distance-time--mobile"
  }, item.distance.text, " ", __jsx("span", null, "(", item.duration.text, ")")), __jsx("div", {
    className: "Details-of-route--border--mobile"
  }))))))), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "mobile-route-details--title--footer"
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    span: 3,
    style: {
      textAlign: "right"
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["EnvironmentOutlined"], {
    id: "mobieenviro"
  })), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    span: 19,
    style: {
      margin: "auto"
    }
  }, __jsx("div", null, __jsx("h1", {
    className: "time-and-km"
  }, __jsx("span", null, __jsx("span", {
    className: "delay-medium-stages--address"
  }, (to_place === null || to_place === void 0 ? void 0 : to_place.formatted_address) || t("route-siste_i18")))))))))))))));
};
const mapStateToProps = state => ({
  from_place: state.navigationReducer.from,
  to_place: state.navigationReducer.to,
  result: state.navigationReducer.result,
  result_select: state.navigationReducer.result_select,
  response_status: state.navigationReducer.response_status,
  prevFromPlace: state.navigationReducer.prevFromPlace,
  prevToPlace: state.navigationReducer.prevToPlace,
  my_location: state.placeReducer.my_location,
  values: state.navigationReducer.values,
  searchValues: state.searchReducer.search_data,
  typeInput: state.navigationReducer.type_input,
  places: state.searchReducer.places
});
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps)(NavigationBox));

/***/ }),

/***/ "./components/RouteDetails.jsx":
/*!*************************************!*\
  !*** ./components/RouteDetails.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actions/navigation */ "./redux/actions/navigation.js");
/* harmony import */ var _redux_actions_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/actions/search */ "./redux/actions/search.js");
/* harmony import */ var _redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/actions/boxVisble */ "./redux/actions/boxVisble.js");
/* harmony import */ var _config_route_details_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config/route_details_icon */ "./config/route_details_icon.js");
/* harmony import */ var _ShareLocation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ShareLocation */ "./components/ShareLocation.jsx");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../consts */ "./consts/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/request */ "./utils/request.js");
/* harmony import */ var _redux_actions_place__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../redux/actions/place */ "./redux/actions/place.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-i18next */ "react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_12__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














// import { setBoxVisibleAction, setRedMarkerAction, setPopupRightClick } from '../redux/actions/boxVisble';

const RouteDetails = props => {
  var _from_place$compound, _to_place$compound;
  const {
    0: showPopup,
    1: setShowPopup
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    0: visibleGroup,
    1: setVisibleGroup
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: groupedSteps,
    1: setGroupedSteps
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: visibleIndex,
    1: setVisibleIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    from_place,
    to_place,
    result,
    result_select,
    current_place
  } = props;
  const {
    0: duration,
    1: setDuration
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: distance,
    1: setDistance
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"])();
  const {
    t
  } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_12__["useTranslation"])("common"); // Use the hook here only
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setDuration(props.result.fastest[0].legs[0].duration.text);
    console.log("typeDistance");
    if (localStorage.getItem("unit") === "KILOMETERS") {
      setDistance(`${(props.result.fastest[0].legs[0].distance.value / 1000).toFixed(1)} KM`);
    } else if (localStorage.getItem("unit") === "MILES") {
      setDistance(`${(result.fastest[0].legs[0].distance.value / 1000 * _consts__WEBPACK_IMPORTED_MODULE_8__["Mile_Travel"].MILES).toFixed(1)} ${t("option_units_miles")}`);
    } else {
      setDistance(`${(props.result.fastest[0].legs[0].distance.value / 1000).toFixed(1)} KM`);
    }
  }, []);
  const calculateDurationAndDistance = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    if (result) {
      return {
        duration: result.fastest[0].legs[0].duration.text,
        distance: result.fastest[0].legs[0].distance.text
      };
    }
    return {
      duration: null,
      distance: null
    };
  }, [result]);
  const calculateGroupedSteps = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    if (result) {
      const steps = result[result_select][0].legs[0].steps;
      const grouped = [];
      for (let i = 0; i < steps.length; i += 10) {
        grouped.push(steps.slice(i, i + 10));
      }
      return grouped;
    }
    return [];
  }, [result, result_select]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (calculateDurationAndDistance.duration && calculateDurationAndDistance.distance) {
      setDuration(calculateDurationAndDistance.duration);
      // setDistance(calculateDurationAndDistance.distance);
    }
    setGroupedSteps(calculateGroupedSteps);
  }, [calculateDurationAndDistance, calculateGroupedSteps]);
  const closeBox = async () => {
    var _responseToPlace$data, _responseFromPlace$da;
    const toPlaceId = props.to_place.id || props.to_place.place_id;
    const responseToPlace = await _utils_request__WEBPACK_IMPORTED_MODULE_10__["default"].place_detail(toPlaceId);
    const toPlace = (_responseToPlace$data = responseToPlace.data) === null || _responseToPlace$data === void 0 ? void 0 : _responseToPlace$data.result;
    const fromPlaceId = props.from_place.id || props.from_place.place_id;
    const responseFromPlace = await _utils_request__WEBPACK_IMPORTED_MODULE_10__["default"].place_detail(fromPlaceId);
    const fromPlace = (_responseFromPlace$da = responseFromPlace.data) === null || _responseFromPlace$da === void 0 ? void 0 : _responseFromPlace$da.result;
    if (toPlace && fromPlace) {
      const viewport = {
        longitude: toPlace.geometry.location.lng,
        latitude: toPlace.geometry.location.lat,
        zoom: 15
      };
      props.dispatch(Object(_redux_actions_place__WEBPACK_IMPORTED_MODULE_11__["setMapViewportAction"])(viewport));
      // props.dispatch(setTypeInput(false));
      props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_5__["setBoxVisibleAction"])("navigation"));
      props.dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_3__["navigationToAction"])(toPlace, `${toPlace.name} - ${toPlace.formatted_address}`));
      props.dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_3__["navigationFromAction"])(fromPlace, `${fromPlace.name} - ${fromPlace.formatted_address}`));
      props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_5__["setRedMarkerAction"])(false));
      props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_5__["setPopupRightClick"])(false));
    } else {
      message.error("Không tìm thấy vị trí của bạn!");
    }
    // window.location.href = window.location.href;
  };
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const handleToggleVisibility = index => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };
  const zoomStep = location => {
    const viewport = {
      longitude: location.lng,
      latitude: location.lat,
      zoom: 16
    };
    props.dispatch(Object(_redux_actions_place__WEBPACK_IMPORTED_MODULE_11__["setMapViewportAction"])(viewport));
  };
  return __jsx("div", {
    className: "content-routedetails"
  }, __jsx("div", {
    className: "route_mainroad"
  }, __jsx("button", {
    className: "route_mainroad--seclect",
    onClick: closeBox
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["ArrowLeftOutlined"], {
    id: "arrowclose"
  }), __jsx("div", {
    className: "route_combeack--tooltip"
  }, t("route_combeack_i18"))), __jsx("span", {
    className: "route_mainroad--content"
  }, __jsx("div", {
    className: "route_mainroad--smallcontent"
  }, t("route_mainroad_1_i18"), " ", __jsx("span", {
    className: "route-siste"
  }, (from_place === null || from_place === void 0 ? void 0 : from_place.formatted_address) || t("route-siste_i18"))), __jsx("div", {
    className: "route_mainroad--smallcontent"
  }, t("route_mainroad_2_i18"), " ", __jsx("span", {
    className: "route-siste"
  }, (to_place === null || to_place === void 0 ? void 0 : to_place.formatted_address) || t("route-siste_i18"))))), __jsx("div", {
    className: "passing_routes"
  }, __jsx("div", {
    className: "landmark-location-scrool"
  }, __jsx("div", {
    className: "sharing-icon"
  }, __jsx("div", {
    className: "sharing-icon-share"
  }, __jsx("button", {
    className: "icon-share--information",
    id: "icon-share--move",
    onClick: togglePopup
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["ShareAltOutlined"], {
    id: "share--information"
  })))), __jsx("div", {
    className: "passing_routes--content"
  }, __jsx("div", null, __jsx("h1", {
    className: "passing_routes--time"
  }, __jsx("span", null, __jsx("span", {
    className: "delay-medium"
  }, duration), " ", __jsx("span", {
    className: "Calculate-km"
  }, "(", distance, ")")))), __jsx("div", null, __jsx("h1", {
    className: "travel-the--fastest",
    id: "travel-the--fastest--margin"
  }, result_select === "fastest" ? t("roadWay_text_1") : t("roadWay_text_2")))), __jsx("div", {
    className: "landmark-location-distance-traversed"
  }, __jsx("div", null, __jsx("div", {
    className: "landmark-location--body"
  }, __jsx("div", {
    className: "landmark-location--content"
  }, __jsx("div", {
    className: "first-line"
  }, __jsx("h2", {
    id: "first-line-landmark"
  }, (from_place === null || from_place === void 0 ? void 0 : from_place.formatted_address) || t("route-siste_i18"))), __jsx("div", {
    className: "second-line"
  }, (from_place === null || from_place === void 0 ? void 0 : (_from_place$compound = from_place.compound) === null || _from_place$compound === void 0 ? void 0 : _from_place$compound.province) || t("route-siste_i18"))))), result && __jsx("div", null, groupedSteps.map((group, groupIndex) => __jsx("div", {
    key: groupIndex
  }, __jsx("div", {
    class: "group-content-title--current",
    onClick: () => handleToggleVisibility(groupIndex)
  }, __jsx("div", {
    className: "location-route-content--directions"
  }, __jsx("button", {
    className: "location-route-content--directions--icon"
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["RightOutlined"], {
    id: "current-content--right"
  })), __jsx("div", {
    className: "location-route-content--small--directions"
  }, __jsx("span", null, group[0].html_instructions, " ", t("route_mainroad_2_i18"), " ", group[group.length - 1].html_instructions))), __jsx("div", {
    className: "Details-of-route--time--title"
  }, __jsx("div", {
    className: "directions-mode-distance-time"
  }, group[0].distance.text, " ", __jsx("span", null, "(", group[0].duration.text, ")")), __jsx("div", {
    className: "Details-of-route--border"
  }))), visibleIndex === groupIndex && __jsx("div", null, group.map((item, index) => __jsx("div", {
    key: index,
    className: "Details-of-route-current--content",
    onClick: () => {
      zoomStep(item.end_location);
    }
  }, __jsx("div", {
    className: "Details-of-route-to-take"
  }, __jsx("div", {
    className: "Details-of-route-to-take-image"
  }, __jsx("img", {
    src: Object(_config_route_details_icon__WEBPACK_IMPORTED_MODULE_6__["getRouteDetailsIcon"])(item.maneuver),
    id: "turning-directions",
    alt: "Direction Icon"
  })), __jsx("p", {
    id: "Details-of-route-to-take-text"
  }, item.html_instructions)), __jsx("div", {
    className: "Details-of-route--time"
  }, __jsx("div", {
    className: "directions-mode-distance-time"
  }, item.distance.text, __jsx("span", null, "(", item.duration.text, ")")), __jsx("div", {
    className: "Details-of-route--border"
  })))))))), __jsx("div", null, __jsx("div", {
    className: "landmark-location--body--bottom"
  }, __jsx("div", {
    className: "landmark-location--content--bottom"
  }, __jsx("div", {
    className: "first-line"
  }, __jsx("h2", {
    id: "first-line-landmark"
  }, (to_place === null || to_place === void 0 ? void 0 : to_place.formatted_address) || t("route-siste_i18"))), __jsx("div", {
    className: "second-line fontBodyMedium"
  }, (to_place === null || to_place === void 0 ? void 0 : (_to_place$compound = to_place.compound) === null || _to_place$compound === void 0 ? void 0 : _to_place$compound.province) || t("route-siste_i18")))))))), __jsx(_ShareLocation__WEBPACK_IMPORTED_MODULE_7__["default"], {
    handleClose: togglePopup,
    show: showPopup
    // place={current_place}
    ,
    fromPlace: props.from_place,
    toPlace: props.to_place
  }));
};
const mapStateToProps = state => ({
  from_place: state.navigationReducer.from,
  to_place: state.navigationReducer.to,
  result: state.navigationReducer.result,
  result_select: state.navigationReducer.result_select,
  response_status: state.navigationReducer.response_status,
  my_location: state.placeReducer.my_location,
  typeInput: state.navigationReducer.type_input,
  current_place: state.placeReducer.current_place
});
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(RouteDetails));

/***/ }),

/***/ "./components/SearchHistories.jsx":
/*!****************************************!*\
  !*** ./components/SearchHistories.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/tooltip */ "antd/lib/tooltip");
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SearchingBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchingBox */ "./components/SearchingBox.jsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _static_images_road_1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static/images/road_1.png */ "./static/images/road_1.png");
/* harmony import */ var _static_images_road_1_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_images_road_1_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux_sagas_placeSaga__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux/sagas/placeSaga */ "./redux/sagas/placeSaga.js");
/* harmony import */ var _redux_actions_place__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redux/actions/place */ "./redux/actions/place.js");
/* harmony import */ var _redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../redux/actions/boxVisble */ "./redux/actions/boxVisble.js");
/* harmony import */ var _utils_image_type_location__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/image_type_location */ "./utils/image_type_location.js");
/* harmony import */ var _utils_images__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/images */ "./utils/images.js");
/* harmony import */ var _redux_actions_search__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../redux/actions/search */ "./redux/actions/search.js");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _MarkerNavigation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./MarkerNavigation */ "./components/MarkerNavigation.jsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }















const SearchHistories = props => {
  const {
    t
  } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])("common");
  const {
    0: searchHistory,
    1: setSearchHistory
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(JSON.parse(localStorage.getItem('search_history')).reverse());
  const {
    0: isCheckAll,
    1: setIsCheckAll
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: filteredHistory,
    1: setFilteredHistory
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(searchHistory);
  const {
    0: numberCheck,
    1: setNumberCheck
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  // State để lưu trữ trạng thái của các checkbox, khởi tạo với tất cả là false
  const {
    0: checkedItems,
    1: setCheckedItems
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(() => searchHistory.reduce((acc, item) => {
    acc[item.place_id] = false;
    return acc;
  }, {}));
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setFilteredHistory(searchHistory);
    props.dispatch(Object(_redux_actions_search__WEBPACK_IMPORTED_MODULE_12__["setSearchLocalStorage"])(JSON.parse(localStorage.getItem('search_history'))));
  }, [searchHistory]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (Object.values(checkedItems).filter(value => value === true).length === 0) {
      setIsCheckAll(false);
    } else {
      setIsCheckAll(true);
    }
    setNumberCheck(Object.values(checkedItems).filter(value => value === true).length === 0 || Object.values(checkedItems).filter(value => value === true).length === searchHistory.length ? "" : `(${Object.values(checkedItems).filter(value => value === true).length})`);
  }, [checkedItems]);

  // Hàm để check tất cả các checkbox
  const checkAll = () => {
    const allChecked = searchHistory.reduce((acc, item) => {
      acc[item.place_id] = true;
      return acc;
    }, {});
    setCheckedItems(allChecked);
    setIsCheckAll(true);
  };

  // Hàm để uncheck tất cả các checkbox
  const unCheckAll = () => {
    const allChecked = searchHistory.reduce((acc, item) => {
      acc[item.place_id] = false;
      return acc;
    }, {});
    setCheckedItems(allChecked);
    setIsCheckAll(false);
  };

  // Hàm để toggle trạng thái của checkbox riêng lẻ
  const toggleCheckbox = id => {
    setCheckedItems(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [id]: !prev[id]
    }));
  };

  // Hàm để xóa những item đã được check
  const deleteCheckedItems = () => {
    const checkedItemsList = filteredHistory.filter(item => checkedItems[item.place_id]);
    for (let place of checkedItemsList) {
      deleteHistory(place);
    }
    setNumberCheck("");
    unCheckAll();
  };
  const deleteHistory = place => {
    let data = JSON.parse(localStorage.getItem('search_history'));
    for (let i = data.length - 1; i >= 0; i--) {
      if (data[i].place_id === place.place_id) {
        data.splice(i, 1);
        break;
      }
    }
    window.localStorage.setItem("search_history", JSON.stringify(data));
    // setSearchHistory(window.localStorage.setItem("search_history", JSON.stringify(data)))
    setSearchHistory(JSON.parse(localStorage.getItem('search_history')).reverse());
    props.dispatch(Object(_redux_actions_search__WEBPACK_IMPORTED_MODULE_12__["setSearchLocalStorage"])(data));
  };
  const onTitleSelect = async place => {
    let check = true;
    let data = JSON.parse(localStorage.getItem('search_history')) || [];
    if (!place.location) {
      const dataHistory = await Object(_redux_sagas_placeSaga__WEBPACK_IMPORTED_MODULE_7__["getDetailIdService"])(place.place_id);
      if (check) {
        if (place != null && data.length < 100) {
          place.location = dataHistory.data.result.geometry.location;
          // place.place_id = "00000000000"
          data.push(place);
        } else if (place != null && data.length >= 100) {
          data.shift();
          data.push(place);
        }
      }
      window.localStorage.setItem("search_history", JSON.stringify(data));
      const pid = place.id || place.place_id;
      // console.log(pid)
      props.dispatch(Object(_redux_actions_place__WEBPACK_IMPORTED_MODULE_8__["getDetailByIdAction"])(pid));
      // setValue(`${place.structured_formatting.main_text} - ${place.structured_formatting.secondary_text}`);
      props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_9__["setBoxVisibleAction"])('info'));
    } else {
      const latLng = {
        latitude: place.location.lat,
        longitude: place.location.lng
      };
      const response = (await Object(_redux_sagas_placeSaga__WEBPACK_IMPORTED_MODULE_7__["getDetailLatLngService"])(latLng)).data.results;
      // console.log("respone______", response)
      for (let i = response.length - 1; i >= 0; i--) {
        if (place.location.lat === response[i].geometry.location.lat && place.location.lng === response[i].geometry.location.lng && place.structured_formatting.main_text === response[i].name && place.place_id != response[i].place_id) {
          for (let i = data.length - 1; i >= 0; i--) {
            if (data[i].place_id === place.place_id) {
              data.splice(i, 1);
              break;
            }
          }
          place.place_id = response[i].place_id;
          data.push(place);
          break;
        }
      }
      for (let i = data.length - 1; i >= 0; i--) {
        // Nếu có rồi thì đảo lại place đó lên
        if (data[i].place_id === place.place_id) {
          // place.location = dataHistory.data.result.geometry.location
          data.splice(i, 1);
          data.push(place);
          // check = false
          break;
        }
      }
      window.localStorage.setItem("search_history", JSON.stringify(data));
      const pid = place.id || place.place_id;
      props.dispatch(Object(_redux_actions_place__WEBPACK_IMPORTED_MODULE_8__["getDetailByIdAction"])(pid));
      // setValue(`${place.structured_formatting.main_text} - ${place.structured_formatting.secondary_text}`);
      props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_9__["setBoxVisibleAction"])('info'));
    }
  };
  return __jsx("div", {
    className: "search-histories"
  }, __jsx("div", {
    className: "search-component"
  }, __jsx(_SearchingBox__WEBPACK_IMPORTED_MODULE_2__["default"], null)), __jsx("div", {
    className: "search-histories-body"
  }, __jsx("div", {
    className: "search-histories-body-text"
  }, __jsx("span", null, t("recently")), __jsx(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_0___default.a, {
    placement: "bottomLeft",
    trigger: "click",
    color: "#ffff",
    title: __jsx("span", {
      style: {
        fontSize: 14,
        fontWeight: 'initial',
        color: 'black'
      }
    }, "Nh\u1EADt k\xFD g\u1EA7n \u0111\xE2y \u0111\u01B0\u1EE3c t\u1EA1o d\u1EF1a tr\xEAn nh\u1EEFng \u0111\u1ECBa \u0111i\u1EC3m m\xE0 b\u1EA1n \u0111\xE3 xem tr\xEAn Goong Maps.")
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["InfoCircleOutlined"], null))), __jsx("div", {
    className: "search-histories-body-content"
  }, __jsx("div", {
    className: "search-histories-body-content-hearder"
  }, __jsx("div", {
    className: "search-histories-body-content-hearder-type"
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["CheckOutlined"], null), __jsx("span", null, "T\u1EA5t c\u1EA3"))), __jsx("div", {
    className: "search-histories-body-content-list"
  }, searchHistory && searchHistory.map((item, index) => __jsx("div", {
    className: `search-histories-body-content-item ${checkedItems[item.place_id] ? 'checked' : ''}`
  }, __jsx("div", {
    className: "search-histories-body-content-item-info",
    onClick: () => onTitleSelect(item)
  }, __jsx("img", {
    src: Object(_utils_image_type_location__WEBPACK_IMPORTED_MODULE_10__["getImageByType"])(item.types[0]),
    alt: ""
  }), __jsx("div", {
    className: "search-histories-body-content-item-info-name"
  }, __jsx("div", {
    className: "search-histories-body-content-item-info-name-title"
  }, item.structured_formatting.main_text), __jsx("div", {
    className: "search-histories-body-content-item-info-name-text"
  }, item.structured_formatting.secondary_text))), __jsx("input", {
    type: "checkbox",
    checked: checkedItems[item.place_id],
    onChange: () => toggleCheckbox(item.place_id)
  }), __jsx("div", {
    className: "search-histories-body-content-item-close-item",
    onClick: e => {
      e.stopPropagation();
      deleteHistory(item);
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["CloseOutlined"], null)))))), __jsx("div", {
    className: "search-histories-body-footer"
  }, __jsx("div", {
    className: "search-histories-body-footer-left"
  }, !isCheckAll && __jsx("div", {
    className: "search-histories-body-footer-left-disable"
  }, __jsx("img", {
    src: _utils_images__WEBPACK_IMPORTED_MODULE_11__["default"].bin,
    style: {
      width: 18
    },
    alt: ""
  }), __jsx("span", {
    className: "search-histories-body-footer-left-delete-text"
  }, "X\xF3a t\u1EA5t c\u1EA3")), isCheckAll && __jsx("div", {
    className: "search-histories-body-footer-left-active"
  }, __jsx("img", {
    src: _utils_images__WEBPACK_IMPORTED_MODULE_11__["default"].bin_white,
    style: {
      width: 18
    },
    alt: ""
  }), __jsx("span", {
    className: "search-histories-body-footer-left-delete-text",
    onClick: deleteCheckedItems
  }, "X\xF3a t\u1EA5t c\u1EA3"))), !isCheckAll && __jsx("div", {
    className: "search-histories-body-footer-right",
    onClick: checkAll
  }, `Chọn tất cả`), isCheckAll && __jsx("div", {
    className: "search-histories-body-footer-right",
    onClick: unCheckAll
  }, `Bỏ chọn tất cả ${numberCheck}`))));
};
const mapStateToProps = state => {
  return {
    places: state.searchReducer.places,
    boxVisible: state.boxVisibleReducer.box_visible,
    info_box_collapsed: state.boxVisibleReducer.info_box_collapsed,
    latLngCenter: state.placeReducer.center,
    openHistory: state.searchReducer.search_history,
    searchData: state.searchReducer.search_data
  };
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps)(SearchHistories));

/***/ }),

/***/ "./components/SearchingBox.jsx":
/*!*************************************!*\
  !*** ./components/SearchingBox.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/divider */ "antd/lib/divider");
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/debounce */ "lodash/debounce");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_actions_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/actions/search */ "./redux/actions/search.js");
/* harmony import */ var _redux_actions_place__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/actions/place */ "./redux/actions/place.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var fast_deep_equal_es6_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! fast-deep-equal/es6/react */ "fast-deep-equal/es6/react");
/* harmony import */ var fast_deep_equal_es6_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal_es6_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redux/actions/boxVisble */ "./redux/actions/boxVisble.js");
/* harmony import */ var _redux_sagas_placeSaga__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../redux/sagas/placeSaga */ "./redux/sagas/placeSaga.js");
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/request */ "./utils/request.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-i18next */ "react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-device-detect */ "react-device-detect");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_12__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;











// const config = require("../config." + (process.env.NODE_ENV || "dev") + ".js");
// import * as configDev from '../config.dev.js';

const SearchingBox = props => {
  var _props$searchData;
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("");
  const {
    0: openDropdown,
    1: setOpenDropdown
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true);
  const {
    0: isDropdownVisible,
    1: setIsDropdownVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const {
    0: place,
    1: setPlace
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null);
  const {
    0: searchHistory,
    1: setSearchHistory
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]);
  const searchBoxRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  const {
    0: openSearch2,
    1: setOpenSearch2
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const {
    0: openHistory2,
    1: setOpenHistory2
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  // const [showIcon, setShowIcon] = useState(false);

  const {
    t
  } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_11__["useTranslation"])("common");
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    props.dispatch(Object(_redux_actions_search__WEBPACK_IMPORTED_MODULE_4__["setHistoryBox"])(false));
    if (props.info_box_collapsed) {
      setOpenDropdown(false);
    }
    if (!fast_deep_equal_es6_react__WEBPACK_IMPORTED_MODULE_7___default()(place, props.place)) {
      var _props$place, _props$place2;
      const value = props.place ? `${(_props$place = props.place) === null || _props$place === void 0 ? void 0 : _props$place.name} - ${(_props$place2 = props.place) === null || _props$place2 === void 0 ? void 0 : _props$place2.formatted_address}` : "";
      setPlace(props.place);
      setValue(value);
    }
    const timer = setTimeout(() => {
      if (!react_device_detect__WEBPACK_IMPORTED_MODULE_12__["isMobile"]) {
        props.dispatch(Object(_redux_actions_search__WEBPACK_IMPORTED_MODULE_4__["setHistoryBox"])(true));
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [props.info_box_collapsed, props.place, place]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    const handleClickOutside = event => {
      if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
        props.dispatch(Object(_redux_actions_search__WEBPACK_IMPORTED_MODULE_4__["setHistoryBox"])(false));
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const debouncedSearch = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()((text, latLngStr) => {
    props.dispatch(Object(_redux_actions_search__WEBPACK_IMPORTED_MODULE_4__["searchAction"])(text, latLngStr));
  }, 500), []);
  const onChange = event => {
    const text = event.target.value;
    if (!text) {
      props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_8__["setBoxVisibleAction"])("search"));
      setValue(text);
    } else {
      setValue(text);
      props.dispatch(Object(_redux_actions_search__WEBPACK_IMPORTED_MODULE_4__["setHistoryBox"])(true));
      let data = JSON.parse(localStorage.getItem("search_history"));
      // console.log('-------data',data)
      const filtered = data != null ? data.filter(item => item.description.toLowerCase().includes(text.toLowerCase())) : null;
      props.dispatch(Object(_redux_actions_search__WEBPACK_IMPORTED_MODULE_4__["setSearchData"])(filtered));
    }
    const latLngStr = `${props.latLngCenter.latitude}, ${props.latLngCenter.longitude}`;
    debouncedSearch(text, latLngStr);
  };
  const onTitleSelect = async place => {
    let check = true;
    let data = JSON.parse(localStorage.getItem("search_history")) || [];
    if (!place.location) {
      const dataHistory = await Object(_redux_sagas_placeSaga__WEBPACK_IMPORTED_MODULE_9__["getDetailIdService"])(place.place_id);
      if (check) {
        if (place != null && data.length < 100) {
          place.location = dataHistory.data.result.geometry.location;
          // place.place_id = "00000000000"
          data.push(place);
        } else if (place != null && data.length >= 100) {
          data.shift();
          data.push(place);
        }
      }
      window.localStorage.setItem("search_history", JSON.stringify(data));
      const pid = place.id || place.place_id;
      // console.log(pid)
      props.dispatch(Object(_redux_actions_place__WEBPACK_IMPORTED_MODULE_5__["getDetailByIdAction"])(pid));
      setValue(`${place.structured_formatting.main_text} - ${place.structured_formatting.secondary_text}`);
      props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_8__["setBoxVisibleAction"])("info"));
    } else {
      const latLng = {
        latitude: place.location.lat,
        longitude: place.location.lng
      };
      const response = (await Object(_redux_sagas_placeSaga__WEBPACK_IMPORTED_MODULE_9__["getDetailLatLngService"])(latLng)).data.results;
      // console.log("respone______", response)
      for (let i = response.length - 1; i >= 0; i--) {
        if (place.location.lat === response[i].geometry.location.lat && place.location.lng === response[i].geometry.location.lng && place.structured_formatting.main_text === response[i].name && place.place_id != response[i].place_id) {
          for (let i = data.length - 1; i >= 0; i--) {
            if (data[i].place_id === place.place_id) {
              data.splice(i, 1);
              break;
            }
          }
          place.place_id = response[i].place_id;
          data.push(place);
          break;
        }
      }
      for (let i = data.length - 1; i >= 0; i--) {
        // Nếu có rồi thì đảo lại place đó lên
        if (data[i].place_id === place.place_id) {
          // place.location = dataHistory.data.result.geometry.location
          data.splice(i, 1);
          data.push(place);
          // check = false
          break;
        }
      }
      window.localStorage.setItem("search_history", JSON.stringify(data));
      const pid = place.id || place.place_id;
      props.dispatch(Object(_redux_actions_place__WEBPACK_IMPORTED_MODULE_5__["getDetailByIdAction"])(pid));
      setValue(`${place.structured_formatting.main_text} - ${place.structured_formatting.secondary_text}`);
      props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_8__["setBoxVisibleAction"])("info"));
    }
  };
  const closeBox = event => {
    props.dispatch(Object(_redux_actions_search__WEBPACK_IMPORTED_MODULE_4__["searchClearAction"])());
    props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_8__["setBoxVisibleAction"])("search"));
    props.dispatch(Object(_redux_actions_search__WEBPACK_IMPORTED_MODULE_4__["setSearchLocalStorage"])([]));
    setValue("");
    setOpenDropdown(false);
  };
  const clickSearch = () => {
    // setShowIcon(true); // Hiện icon khi nhấp vào search box
    // setOpenSearch2(true); // Hiện lịch sử tìm kiếm khi nhấp vào search box
    props.dispatch(Object(_redux_actions_search__WEBPACK_IMPORTED_MODULE_4__["setHistoryBox"])(true)); // Cập nhật trạng thái lịch sử tìm kiếm qua Redux
  };
  const closeSearch = () => {
    props.dispatch(Object(_redux_actions_search__WEBPACK_IMPORTED_MODULE_4__["setHistoryBox"])(false));
  };
  const clickShowHistory = () => {
    props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_8__["setBoxVisibleAction"])("history"));
  };
  const deleteHistory = place => {
    let data = JSON.parse(localStorage.getItem("search_history"));
    for (let i = data.length - 1; i >= 0; i--) {
      if (data[i].place_id === place.place_id) {
        data.splice(i, 1);
        break;
      }
    }
    window.localStorage.setItem("search_history", JSON.stringify(data));
    setIsDropdownVisible(true);
    setSearchHistory(data.slice(-5).reverse());
  };
  const {
    places
  } = props;
  let data = JSON.parse(localStorage.getItem("search_history"));
  let history = data == null ? null : data.slice(-5).reverse();
  let numberSearchResult = 5 - (props.searchData != null ? props.searchData.length : 0);
  let isHistory = true;
  if (places.length > 0) {
    isHistory = false;
  }
  let openHistory = true;
  if (props.boxVisible === "info") {
    openHistory = false;
  }
  let openSearch = true;
  if (props.boxVisible === "info" && value !== "") {
    openSearch = false;
  }
  if (props.boxVisible === "history" && value === "") {
    openSearch = false;
  }
  const suffixWeb = value || props.boxVisible === "history" ? __jsx("div", null, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["CloseOutlined"], {
    style: {
      cursor: "pointer",
      fontSize: 16
    },
    onClick: e => {
      e.stopPropagation();
      closeBox();
    }
  })) : __jsx("div", null, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["SearchOutlined"], {
    style: {
      cursor: "pointer",
      fontSize: 17,
      color: "#1890ff"
    }
  }), __jsx(antd_lib_divider__WEBPACK_IMPORTED_MODULE_0___default.a, {
    type: "vertical",
    style: {
      fontSize: 16,
      background: "#ddd"
    }
  }), __jsx("i", {
    className: "fas fa-directions",
    style: {
      cursor: "pointer",
      color: "#1890ff",
      fontSize: 20
    },
    onClick: () => props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_8__["setBoxVisibleAction"])("navigation"))
  }));
  const suffixMobile = value || props.boxVisible === "history" ? __jsx("div", null, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["CloseOutlined"], {
    style: {
      cursor: "pointer",
      fontSize: 16
    },
    onClick: e => {
      e.stopPropagation();
      closeBox();
    }
  })) : __jsx("div", null, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["SearchOutlined"], {
    style: {
      cursor: "pointer",
      fontSize: 17,
      color: "#1890ff"
    }
  }), __jsx(antd_lib_divider__WEBPACK_IMPORTED_MODULE_0___default.a, {
    type: "vertical",
    style: {
      fontSize: 16,
      background: "#ddd"
    }
  }), __jsx("i", {
    className: "fas fa-directions",
    style: {
      cursor: "pointer",
      color: "#1890ff",
      fontSize: 20
    },
    onClick: () => props.dispatch(Object(_redux_actions_boxVisble__WEBPACK_IMPORTED_MODULE_8__["setBoxVisibleAction"])("navigation"))
  }));
  return __jsx("div", null, !react_device_detect__WEBPACK_IMPORTED_MODULE_12__["isMobile"] && __jsx("div", {
    className: "search",
    ref: searchBoxRef,
    onClick: () => clickSearch()
  }, __jsx("div", {
    className: "search_box"
  }, __jsx("input", {
    className: "search_input",
    value: value,
    onChange: onChange,
    type: "text",
    placeholder: t("search_placeholder")
  }), suffixWeb), isHistory && openHistory && openSearch && props.openHistory && history && __jsx("div", {
    className: "search_history"
  }, history.map((item, index) => __jsx("div", {
    onClick: () => onTitleSelect(item),
    key: index,
    style: {
      borderTop: index === 0 ? "1px solid #ddd" : "none"
    }
  }, __jsx("i", {
    className: "fas fa-history"
  }), __jsx("span", {
    className: "history_text"
  }, __jsx("span", {
    className: "title"
  }, item.structured_formatting.main_text + " "), __jsx("span", {
    className: "text"
  }, item.structured_formatting.secondary_text)), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["CloseOutlined"], {
    className: "hover-icon",
    style: {
      cursor: "pointer",
      fontSize: 20,
      color: "gray"
    },
    onClick: e => {
      e.stopPropagation();
      deleteHistory(item);
    }
  })))), !isHistory && props.openHistory && openSearch && __jsx("div", {
    className: "search_history"
  }, props.searchData != null ? props.searchData.slice(0, 5).map((item, index) => __jsx("div", {
    onClick: () => onTitleSelect(item),
    key: index,
    style: {
      borderTop: index === 0 ? "1px solid #ddd" : "none"
    }
  }, __jsx("i", {
    className: "fas fa-history"
  }), __jsx("span", {
    className: "history_text"
  }, __jsx("span", {
    className: "title"
  }, item.structured_formatting.main_text + " "), __jsx("span", {
    className: "text"
  }, item.structured_formatting.secondary_text)))) : null, (props.searchData != null ? props.searchData.length : 0) > 5 ? null : places.slice(0, numberSearchResult).map((item, index) => __jsx("div", {
    onClick: () => onTitleSelect(item),
    key: index,
    style: {
      borderTop: index === 0 && numberSearchResult === 5 ? "1px solid #ddd" : "none"
    }
  }, __jsx("i", {
    className: "fas fa-location-arrow"
  }), __jsx("span", {
    className: "history_text"
  }, __jsx("span", {
    className: "title"
  }, item.structured_formatting.main_text + " "), __jsx("span", {
    className: "text"
  }, item.structured_formatting.secondary_text))))), props.openHistory && openSearch && (data != null ? data.length : 0) > 5 && __jsx("div", {
    className: "locations",
    onClick: () => clickShowHistory()
  }, t("location_content_text_i18search"))), __jsx("div", {
    className: "info--mobile"
  }, react_device_detect__WEBPACK_IMPORTED_MODULE_12__["isMobile"] && __jsx("div", {
    className: "search",
    ref: searchBoxRef,
    onClick: () => clickSearch()
  }, __jsx("div", {
    className: "search_box"
  }, props.openHistory && __jsx("div", {
    onClick: e => {
      e.stopPropagation();
      closeSearch();
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["ArrowLeftOutlined"], {
    id: "info--arrow--back--mobile"
  })), __jsx("input", {
    className: "search_input",
    value: value,
    onChange: onChange,
    type: "text",
    placeholder: t("search_placeholder")
  }), suffixMobile), isHistory && openHistory && openSearch && props.openHistory && history && __jsx("div", {
    className: "search_history"
  }, data.slice(0, 10).reverse().map((item, index) => __jsx("div", {
    onClick: () => onTitleSelect(item),
    key: index,
    style: {
      borderTop: index === 0 ? "1px solid #ddd" : "none",
      padding: "0px 15px"
    }
  }, __jsx("div", {
    className: "history_item"
  }, __jsx("i", {
    className: "fas fa-history"
  }), __jsx("span", {
    className: "history_text"
  }, __jsx("span", {
    className: "title"
  }, item.structured_formatting.main_text), __jsx("p", {
    className: "text"
  }, item.structured_formatting.secondary_text))), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["CloseOutlined"], {
    className: "hover-icon",
    style: {
      cursor: "pointer",
      fontSize: 20,
      color: "gray"
    },
    onClick: e => {
      e.stopPropagation();
      deleteHistory(item);
    }
  })))), !isHistory && props.openHistory && openSearch && __jsx("div", {
    className: "search_history"
  }, (_props$searchData = props.searchData) === null || _props$searchData === void 0 ? void 0 : _props$searchData.slice(0, 10).map((item, index) => __jsx("div", {
    onClick: () => onTitleSelect(item),
    key: index,
    style: {
      borderTop: index === 0 ? "1px solid #ddd" : "none",
      padding: "0px 15px"
    }
  }, __jsx("div", {
    className: "history_item"
  }, __jsx("i", {
    className: "fas fa-location-arrow"
  }), __jsx("span", {
    className: "history_text"
  }, __jsx("span", {
    className: "title"
  }, item.structured_formatting.main_text + " "), __jsx("p", {
    className: "text"
  }, item.structured_formatting.secondary_text))))), places.slice(0, numberSearchResult).map((item, index) => __jsx("div", {
    onClick: () => onTitleSelect(item),
    key: index,
    style: {
      borderTop: index === 0 && numberSearchResult === 5 ? "1px solid #ddd" : "none"
    }
  }, __jsx("div", {
    className: "history_item"
  }, __jsx("i", {
    className: "fas fa-location-arrow"
  }), __jsx("span", {
    className: "history_text"
  }, __jsx("span", {
    className: "title"
  }, item.structured_formatting.main_text + " "), __jsx("p", {
    className: "text"
  }, item.structured_formatting.secondary_text)))))))));
};
const mapStateToProps = state => {
  return {
    places: state.searchReducer.places,
    boxVisible: state.boxVisibleReducer.box_visible,
    info_box_collapsed: state.boxVisibleReducer.info_box_collapsed,
    latLngCenter: state.placeReducer.center,
    openHistory: state.searchReducer.search_history,
    searchData: state.searchReducer.search_data
  };
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(SearchingBox));

/***/ }),

/***/ "./components/ShareLocation.jsx":
/*!**************************************!*\
  !*** ./components/ShareLocation.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/message */ "antd/lib/message");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_images_gmail_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/images/gmail.png */ "./static/images/gmail.png");
/* harmony import */ var _static_images_gmail_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_images_gmail_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_images_twitter_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/images/twitter.png */ "./static/images/twitter.png");
/* harmony import */ var _static_images_twitter_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_images_twitter_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-device-detect */ "react-device-detect");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








// import './Popup.css'; // Tạo file css cho style của popup

const ShareLocation = ({
  show,
  handleClose,
  place,
  fromPlace,
  toPlace
}) => {
  const {
    t
  } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])('common');
  const {
    0: isLink,
    1: setIsLink
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const {
    0: isCopy,
    1: setIsCopy
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: selectedOption,
    1: setSelectedOption
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(`${t('size_small')}`);
  const {
    0: iframeUrl,
    1: setiframeUrl
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: isSelectDropDown,
    1: setIsSelectDropDown
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: widthContent,
    1: setWidthContent
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(500);
  const {
    0: heightContent,
    1: setHeightContent
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(300);
  const {
    0: isCustomSize,
    1: setIsCustomSize
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: widthCustom,
    1: setWidthCustom
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(500);
  const {
    0: heightCustom,
    1: setHeightCustom
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(300);
  const {
    0: iframeUrlNavigation,
    1: setiframeUrlNavigation
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const dropdownRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setiframeUrl(`${window.location.origin}${window.location.pathname}?location=${place ? place.geometry.location.lat : ''},${place ? place.geometry.location.lng : ''}&iframe=true`);
  }, [place]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setiframeUrlNavigation(`${window.location.origin}${window.location.pathname}?direction=${fromPlace ? fromPlace.geometry.location.lat : ''}%2C${fromPlace ? fromPlace.geometry.location.lng : ''}%26${toPlace ? toPlace.geometry.location.lat : ''}%2C${fromPlace ? fromPlace.geometry.location.lng : ''}&iframe=true`);
  }, [fromPlace, toPlace]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (isLink) {
      setWidthContent(500);
    } else {
      if (selectedOption === 'Nhỏ') {
        setWidthContent(500);
        setHeightContent(300);
        setIsCustomSize(false);
      } else if (selectedOption === 'Trung bình') {
        setWidthContent(700);
        setHeightContent(400);
        setIsCustomSize(false);
      } else if (selectedOption === 'Lớn') {
        setWidthContent(1000);
        setHeightContent(500);
        setIsCustomSize(false);
      } else {
        setWidthContent(800);
        setIsCustomSize(true);
      }
    }
  }, [selectedOption, isLink]);
  const handleChangeWidth = event => {
    setWidthCustom(event.target.value);
  };
  const handleChangeHeght = event => {
    setHeightCustom(event.target.value);
  };
  const handleClickOutside = event => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsSelectDropDown(false);
    }
  };
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (isSelectDropDown) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isSelectDropDown]);
  const handleChangeSize = size => {
    // console.log('-------',size)
    setSelectedOption(size);
    setIsSelectDropDown(false);
  };
  const handleOpenDropDown = () => {
    setIsSelectDropDown(true);
  };
  const setLink = () => {
    setIsLink(true);
  };
  const setIframe = () => {
    setIsLink(false);
  };
  const saveHTML = () => {
    const html = place ? `<iframe src="${iframeUrl}" frameborder="0"></iframe>` : `<iframe src="${iframeUrlNavigation}" frameborder="0"></iframe>`;
    navigator.clipboard.writeText(html).then(function () {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default.a.success(t('copy_to_climb'));
    }, function (err) {
      console.error('Không thể lưu URL vào clipboard: ', err);
    });
  };
  const saveToClipBoard = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl).then(function () {
      setIsCopy(true);
      antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default.a.success(t('copy_to_climb'));
    }, function (err) {
      console.error('Không thể lưu URL vào clipboard: ', err);
    });
  };
  const openNewBrower = () => {
    window.open(iframeUrl, '_blank', `width=${widthCustom},height=${heightCustom}`);
  };
  const sendToEmail = () => {
    const titleEmail = `${place ? place.name : ''}`;
    const bodyEmail = `${place ? place.name : ''}%0A${iframeUrl}`;
    const url = place ? `https://mail.google.com/mail/u/0/?su=${titleEmail}&body=${bodyEmail}&hl=vi&gl&url=https://maps.app.goo.gl/w1yjj93EKG5v7b5J6&fs=1&tf=cm` : `https://mail.google.com/mail/u/0/?su=Từ ${fromPlace ? fromPlace.name : ''} đến ${toPlace ? toPlace.name : ''}&body=Từ ${fromPlace ? fromPlace.name : ''} đến ${toPlace ? toPlace.name : ''}%0A${iframeUrlNavigation}&hl=vi&gl&url=https://maps.app.goo.gl/w1yjj93EKG5v7b5J6&fs=1&tf=cm`;
    window.open(url, '_blank', `width=800,height=500`);
  };
  const sendToX = () => {
    const url = `https://x.com/intent/post?url=${place ? iframeUrl : iframeUrlNavigation}`;
    window.open(url, '_blank', `width=800,height=500`);
  };
  return __jsx("div", {
    className: `share-location ${show ? 'show' : ''}`
  }, __jsx("div", {
    className: "share-content"
  }, __jsx("span", {
    className: "close",
    onClick: handleClose
  }, "\xD7"), __jsx("div", {
    className: "pupup-header"
  }, t('share')), __jsx("div", {
    className: "pupup-nav"
  }, __jsx("div", {
    className: "link",
    style: {
      borderBottom: isLink ? '3px solid #0a06f3' : null
    },
    onClick: setLink
  }, t('send_link')), __jsx("div", {
    className: "iframe",
    style: {
      borderBottom: !isLink ? '3px solid #0a06f3' : null
    },
    onClick: setIframe
  }, t('embed_map'))), isLink && __jsx("div", {
    className: "share-body",
    style: {
      width: 400
    }
  }, __jsx("div", {
    className: "info-location"
  }, __jsx("div", {
    className: "image"
  }, __jsx("img", {
    src: "./static/images/goong-logo-mini.png",
    alt: ""
  })), __jsx("div", {
    className: "location"
  }, __jsx("div", {
    className: "title"
  }, place ? place.name : fromPlace && toPlace ? `Từ ${fromPlace.name} đến ${toPlace.name}` : ''), __jsx("div", {
    className: "address"
  }, place ? place.formatted_address : ''))), __jsx("div", {
    style: {
      color: '#888',
      paddingLeft: 20,
      paddingRight: 20
    }
  }, t('link_to_share')), __jsx("div", {
    className: "copy-link-share"
  }, __jsx("div", {
    className: "url-location"
  }, window.location.href), __jsx("div", {
    className: "text",
    onClick: saveToClipBoard
  }, isCopy ? t('copy_to_climb').toUpperCase() : t('copy_link').toUpperCase())), !react_device_detect__WEBPACK_IMPORTED_MODULE_6__["isMobile"] && __jsx("div", {
    className: "send-link"
  }, __jsx("div", {
    className: "send-to-email"
  }, __jsx("img", {
    src: _static_images_gmail_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "",
    onClick: sendToEmail
  }), __jsx("div", {
    className: "text"
  }, "Gmail")), __jsx("div", {
    className: "send-to-x"
  }, __jsx("img", {
    src: _static_images_twitter_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "",
    onClick: sendToX
  }), __jsx("div", {
    className: "text"
  }, "X")))), !isLink && !isCustomSize && __jsx("div", {
    className: "share-body",
    style: {
      width: widthContent
    }
  }, __jsx("div", {
    className: "iframe-size"
  }, __jsx("div", {
    className: "select-size"
  }, __jsx("button", {
    onClick: handleOpenDropDown
  }, __jsx("span", null, selectedOption), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["CaretDownOutlined"], null))), __jsx("div", {
    className: "iframe-url",
    style: {
      color: '#838383'
    }
  }, `<iframe src="${place ? iframeUrl : iframeUrlNavigation}" frameborder="0"></iframe>`), __jsx("div", {
    className: "copy-iframe",
    onClick: saveHTML
  }, t('copy_html'))), __jsx("iframe", {
    className: "iframe-map",
    src: place ? iframeUrl : iframeUrlNavigation,
    frameborder: "0",
    style: {
      height: heightContent,
      width: widthContent
    },
    title: place ? place.name : `Chỉ đường từ ${fromPlace === null || fromPlace === void 0 ? void 0 : fromPlace.name} đến ${toPlace === null || toPlace === void 0 ? void 0 : toPlace.name}`
  }), isSelectDropDown && __jsx("div", {
    className: "drop-size",
    ref: dropdownRef
  }, __jsx("div", {
    onClick: () => {
      handleChangeSize('Nhỏ');
    }
  }, __jsx("span", null, t('size_small'))), __jsx("div", {
    onClick: () => {
      handleChangeSize('Trung bình');
    }
  }, __jsx("span", null, t('size_medium'))), __jsx("div", {
    onClick: () => {
      handleChangeSize('Lớn');
    }
  }, __jsx("span", null, t('size_big'))), __jsx("div", {
    onClick: () => {
      handleChangeSize('Chọn kích thước');
    }
  }, __jsx("span", null, t('size_custom'))))), !isLink && isCustomSize && __jsx("div", {
    className: "share-body",
    style: {
      width: 700
    }
  }, __jsx("div", {
    className: "input-size"
  }, __jsx("div", {
    className: "iframe-size"
  }, __jsx("div", {
    className: "select-size"
  }, __jsx("button", {
    onClick: handleOpenDropDown
  }, __jsx("span", null, selectedOption), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["CaretDownOutlined"], null)))), __jsx("div", {
    className: "insert-size"
  }, __jsx("input", {
    type: "number",
    value: widthCustom,
    onChange: handleChangeWidth
  }), __jsx("div", null, "X"), __jsx("input", {
    type: "number",
    value: heightCustom,
    onChange: handleChangeHeght
  }), __jsx("div", {
    className: "see-demo",
    onClick: openNewBrower
  }, t('size_preview').toUpperCase()))), __jsx("div", {
    className: "iframe-size"
  }, __jsx("div", {
    className: "iframe-url",
    style: {
      color: '#838383'
    }
  }, `<iframe src="${place ? iframeUrl : iframeUrlNavigation}" frameborder="0"></iframe>`), __jsx("div", {
    className: "copy-iframe",
    onClick: saveHTML
  }, t('copy_html').toUpperCase())), isSelectDropDown && __jsx("div", {
    className: "drop-size",
    ref: dropdownRef
  }, __jsx("div", {
    onClick: () => {
      handleChangeSize('Nhỏ');
    }
  }, __jsx("span", null, "Nh\u1ECF")), __jsx("div", {
    onClick: () => {
      handleChangeSize('Trung bình');
    }
  }, __jsx("span", null, "Trung b\xECnh")), __jsx("div", {
    onClick: () => {
      handleChangeSize('Lớn');
    }
  }, __jsx("span", null, "L\u1EDBn")), __jsx("div", {
    onClick: () => {
      handleChangeSize('Chọn kích thước');
    }
  }, __jsx("span", null, "Ch\u1ECDn k\xEDch th\u01B0\u1EDBc"))))));
};
const mapStateToProps = state => {
  return {
    from_place: state.navigationReducer.from,
    to_place: state.navigationReducer.to
  };
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps)(ShareLocation));

/***/ }),

/***/ "./components/Weather/Weather1.jsx":
/*!*****************************************!*\
  !*** ./components/Weather/Weather1.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_weather_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/weather_icon */ "./config/weather_icon.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Weather({
  temp,
  icon,
  city
}) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log("Weather component mounted with:", temp, icon, city);
  }, [temp, icon, city]);
  return __jsx("div", {
    className: "Borde"
  }, __jsx("div", {
    className: "Mass"
  }, __jsx("div", {
    className: "Masssmall"
  }, __jsx("h1", {
    className: "City_name"
  }, city !== null ? city : "Loading ...")), __jsx("div", {
    className: "Weather_content",
    "aria-label": `Thời tiết ở ${city}`,
    role: "group"
  }, __jsx("div", {
    className: "Display_Temperature"
  }, temp !== null ? `${temp}°` : ""), icon && __jsx("img", {
    className: "Temperature",
    alt: "Weather icon",
    src: Object(_config_weather_icon__WEBPACK_IMPORTED_MODULE_1__["getWeatherIcon"])(icon)
  }))));
}
/* harmony default export */ __webpack_exports__["default"] = (Weather);

/***/ }),

/***/ "./components/navigation_select/NaviCalculate .jsx":
/*!*********************************************************!*\
  !*** ./components/navigation_select/NaviCalculate .jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/list */ "antd/lib/list");
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../consts */ "./consts/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_5__);



var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;



const Navi_calculate = ({
  result,
  selectedUnit,
  result_select,
  // handleButtonClick,
  selectedIcon,
  openDeltails,
  dispatch,
  selectResultAction
}) => {
  const {
    0: visibleButton,
    1: setVisibleButton
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("fastest");
  const {
    t
  } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])("common");
  const handleButtonClick = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(type => {
    setVisibleButton(type);
  }, []);
  const convertToHoursAndMinutes = seconds => {
    let h = Math.floor(seconds / 3600);
    let m = Math.floor(seconds % 3600 / 60);
    if (h >= 24) {
      m = 0;
    }
    const formattedDuration = `${h > 0 ? h + " " + t("text_icon_hour") : ""} ${m > 0 ? m + t("text_icon_minute") : ""}`;
    return formattedDuration;
  };
  return result && __jsx(antd_lib_list__WEBPACK_IMPORTED_MODULE_0___default.a, {
    itemLayout: "horizontal",
    dataSource: [{
      roads: result.fastest[0].legs[0].steps[2].html_instructions,
      roadWay: t("roadWay_text_1"),
      title: selectedUnit === "MILES" ? result.fastest && result.fastest[0] ? ` ${(result.fastest[0].legs[0].distance.value / 1000 * _consts__WEBPACK_IMPORTED_MODULE_4__["Mile_Travel"].MILES).toFixed(1)} ${t("option_units_miles")}` : "N/A" : result.fastest && result.fastest[0] ? ` ${(result.fastest[0].legs[0].distance.value / 1000).toFixed(1)} km` : "N/A",
      time: result.fastest && result.fastest[0] ? convertToHoursAndMinutes(result.fastest[0].legs[0].duration.value) : "N/A",
      type: "fastest"
    }, {
      roads: result.shortest[0].legs[0].steps[1].html_instructions,
      roadWay: t("roadWay_text_2"),
      title: selectedUnit === "MILES" ? result.shortest && result.shortest[0] ? ` ${(result.shortest[0].legs[0].distance.value / 1000 * _consts__WEBPACK_IMPORTED_MODULE_4__["Mile_Travel"].MILES).toFixed(1)} ${t("option_units_miles")}` : "N/A" : result.shortest && result.shortest[0] ? ` ${(result.shortest[0].legs[0].distance.value / 1000).toFixed(1)} km` : "N/A",
      time: result.shortest && result.shortest[0] ? convertToHoursAndMinutes(result.shortest[0].legs[0].duration.value) : "N/A",
      type: "shortest"
    }],
    renderItem: item => __jsx(antd_lib_list__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
      id: "timed-content",
      style: {
        cursor: "pointer",
        borderLeft: item.type === result_select ? "5px solid #1890ff" : "none",
        borderBottom: "1px solid #dadce0"
      },
      onClick: () => {
        dispatch(selectResultAction(item.type));
        handleButtonClick(item.type);
      }
    }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "row-col-6-Badge-kilomet"
    }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
      span: 2,
      id: "Col_span_6_kilomet"
    }, selectedIcon === "car" && __jsx("span", null, __jsx("i", {
      className: "fas fa-car icon-vehicle",
      id: "timed-car"
    })), selectedIcon === "motorcycle" && __jsx("span", null, __jsx("i", {
      className: "fas fa-motorcycle icon-vehicle",
      id: "timed-bike"
    })), selectedIcon === "walk" && __jsx("span", null, __jsx("i", {
      className: "fas fa-taxi icon-vehicle",
      id: "timed-taxi"
    }))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
      span: 15,
      id: "Col_span_14_kilomet"
    }, __jsx("div", {
      className: "s-t-detail"
    }, __jsx("h1", null, item.roads), __jsx("p", null, item.roadWay))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
      span: 5,
      id: "Col_span_4_kilomet"
    }, __jsx("h4", null, item.time), __jsx("p", null, item.title)), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
      span: 4,
      id: "col-span-dettext"
    }, visibleButton === item.type && __jsx("button", {
      className: "dettext",
      onClick: openDeltails
    }, __jsx("span", {
      id: "detailtext"
    }, t("roadWay_text_detailtext"))))))
  });
};
/* harmony default export */ __webpack_exports__["default"] = (Navi_calculate);

/***/ }),

/***/ "./components/navigation_select/NaviOption.jsx":
/*!*****************************************************!*\
  !*** ./components/navigation_select/NaviOption.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Navi_option = ({
  result,
  isOptionVisible,
  handleClickClose,
  selectedUnit,
  handleUnitChange,
  copyurl
}) => {
  const {
    t
  } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])("common");
  return result && __jsx("div", null, __jsx("div", {
    className: "option-navi"
  }, __jsx("div", {
    className: "select-distance"
  }, isOptionVisible ? __jsx("h1", {
    className: "Options-for-route"
  }) : __jsx("h1", {
    className: "Options-for-route"
  }, t("Options_for_route_i18")), __jsx("button", {
    onClick: handleClickClose
  }, isOptionVisible ? __jsx("span", null, t("option")) : __jsx("span", null, t("option_visible")))), !isOptionVisible && __jsx("div", {
    className: "option-close"
  }, __jsx("div", {
    className: "distance-unit"
  }, __jsx("div", {
    role: "radiogroup",
    "aria-label": "\u0110\u01A1n v\u1ECB kho\u1EA3ng c\xE1ch",
    className: "under-the-unit"
  }, __jsx("h2", {
    className: "distance-under fontTitleSmall"
  }, t("option_distance-under")), __jsx("div", {
    className: "automatic-distance"
  }, __jsx("div", {
    className: "input-hover"
  }, __jsx("input", {
    className: "number-of-beats",
    type: "radio",
    value: "REGIONAL",
    checked: selectedUnit === "REGIONAL",
    id: "pane.directions-options-units-auto",
    name: "pane.directions-options-units",
    onChange: handleUnitChange
  })), __jsx("label", {
    className: "label-note fontBodyMedium",
    htmlFor: "pane.directions-options-units-auto"
  }, t("option_units_auto"))), __jsx("div", {
    className: "automatic-distance"
  }, __jsx("div", {
    className: "input-hover"
  }, __jsx("input", {
    className: "number-of-beats",
    type: "radio",
    value: "MILES",
    checked: selectedUnit === "MILES",
    id: "pane.directions-options-units-miles",
    name: "pane.directions-options-units",
    onChange: handleUnitChange
  })), __jsx("label", {
    className: "label-note fontBodyMedium",
    htmlFor: "pane.directions-options-units-miles"
  }, t("option_units_miles"))), __jsx("div", {
    className: "automatic-distance"
  }, __jsx("div", {
    className: "input-hover"
  }, __jsx("input", {
    className: "number-of-beats",
    type: "radio",
    value: "KILOMETERS",
    checked: selectedUnit === "KILOMETERS",
    id: "pane.directions-options-units-km",
    name: "pane.directions-options-units",
    onChange: handleUnitChange
  })), __jsx("label", {
    className: "label-note fontBodyMedium",
    htmlFor: "pane.directions-options-units-km"
  }, "km")))))), __jsx("div", {
    className: "copy-link"
  }, __jsx("div", {
    className: "copy-link-select"
  }, __jsx("button", {
    onClick: copyurl
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["LinkOutlined"], {
    id: "set-icon-LinkOut"
  }), __jsx("span", {
    className: "text-link"
  }, t("option_text_link"))))));
};
/* harmony default export */ __webpack_exports__["default"] = (Navi_option);

/***/ }),

/***/ "./components/navigation_select/NaviTranslation.jsx":
/*!**********************************************************!*\
  !*** ./components/navigation_select/NaviTranslation.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_actions_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/actions/navigation */ "./redux/actions/navigation.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Navi_translation = ({
  to_place,
  openRestaurant2,
  dispatch
}) => {
  const {
    0: showMore,
    1: setShowMore
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); // Trạng thái hiển thị
  const {
    t
  } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])('common');
  const type_lat = type => {
    dispatch(Object(_redux_actions_navigation__WEBPACK_IMPORTED_MODULE_2__["setTypeLatlong"])(type));
  };
  const toggleMoreLess = () => {
    setShowMore(!showMore); // Thay đổi trạng thái khi nhấn nút
  };
  return __jsx("div", null, __jsx("div", {
    className: "border-fun"
  }), __jsx("div", null, __jsx("div", null, __jsx("h2", {
    className: "around-the-location"
  }, __jsx("div", {
    className: "fontSmall-around"
  }, t('fontSmall_around_text'), " ", to_place === null || to_place === void 0 ? void 0 : to_place.name))), __jsx("div", {
    className: "Great-content-of-the-service"
  }, __jsx("div", {
    className: "smaller-content"
  }, __jsx("button", {
    className: "restaurant-service",
    onClick: () => {
      openRestaurant2('restaurant');
      type_lat('nhà hàng');
    }
  }, __jsx("div", {
    className: "restaurant-sign"
  }, __jsx("img", {
    src: "static/images/restaurant.png",
    width: "22",
    id: "restaurant",
    alt: "Restaurant"
  })), __jsx("div", {
    className: "restaurant"
  }, t('restaurant_text_i18'))), __jsx("button", {
    className: "restaurant-service",
    onClick: () => {
      openRestaurant2('restaurant');
      type_lat('khách sạn');
    }
  }, __jsx("div", {
    className: "restaurant-sign-hotel"
  }, __jsx("img", {
    src: "static/images/hotel.png",
    id: "hotel",
    alt: "Hotel"
  })), __jsx("div", {
    className: "restaurant"
  }, t('hotel_text_i18'))), __jsx("button", {
    className: "restaurant-service",
    onClick: () => {
      openRestaurant2('restaurant');
      type_lat('trạm xăng');
    }
  }, __jsx("div", {
    className: "restaurant-sign-gas-station"
  }, __jsx("img", {
    src: "static/images/petro.png",
    id: "gas_station",
    alt: "Gas Station"
  })), __jsx("div", {
    className: "restaurant"
  }, t('Gas_Station_text_i18'))), __jsx("button", {
    className: "restaurant-service",
    onClick: () => {
      openRestaurant2('restaurant');
      type_lat('điểm đỗ xe');
    }
  }, __jsx("div", {
    className: "restaurant-sign-parking-sport"
  }, __jsx("img", {
    src: "static/images/signparkingsport.png",
    id: "parking_spot",
    alt: "Parking Spot"
  })), __jsx("div", {
    className: "restaurant"
  }, t('parking_spot_text_i18'))), __jsx("button", {
    className: "restaurant-service",
    id: "restaurant-service--button--hidden",
    onClick: toggleMoreLess
  }, __jsx("div", {
    className: "restaurant-sign-more"
  }, !showMore ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("img", {
    src: "static/images/more.png",
    width: "22",
    alt: "More"
  }), __jsx("div", {
    className: "restaurant--text--button-click"
  }, t('More_text_i18'))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("img", {
    src: "static/images/svgviewer-png-output.png",
    width: "18",
    alt: "Less"
  }), __jsx("div", {
    className: "restaurant--text--button-click"
  }, t('Less_text_i18'))))))), showMore && __jsx("div", {
    className: "other-services"
  }, __jsx("div", {
    className: "other-services--button"
  }, __jsx("button", {
    class: "other-services--button--seclect",
    onClick: () => {
      openRestaurant2('restaurant');
      type_lat('Ngân hàng');
    }
  }, __jsx("div", {
    class: "other-services--button--bank--box--title"
  }, __jsx("span", null, __jsx("img", {
    alt: "bank",
    src: "static/images/bank.png",
    width: "24"
  }))), __jsx("div", {
    class: "other-services--button--bank--text"
  }, t('bank_text_i18'))), __jsx("button", {
    class: "other-services--button--seclect",
    onClick: () => {
      openRestaurant2('restaurant');
      type_lat('Quán bar');
    }
  }, __jsx("div", {
    class: "other-services--button--bank--box--title"
  }, __jsx("span", null, __jsx("img", {
    alt: "bar",
    src: "static/images/cooktail.png",
    width: "24"
  }))), __jsx("div", {
    class: "other-services--button--bank--text"
  }, t('bar_text_i18'))), __jsx("button", {
    class: "other-services--button--seclect",
    onClick: () => {
      openRestaurant2('restaurant');
      type_lat('Quán cà phê');
    }
  }, __jsx("div", {
    class: "other-services--button--bank--box--title"
  }, __jsx("span", null, __jsx("img", {
    alt: "coffee shop",
    src: "static/images/coffecup.png",
    width: "24"
  }))), __jsx("div", {
    class: "other-services--button--bank--text"
  }, t('cafe_text_i18'))), __jsx("button", {
    class: "other-services--button--seclect",
    onClick: () => {
      openRestaurant2('restaurant');
      type_lat('Quán tạp hóa');
    }
  }, __jsx("div", {
    class: "other-services--button--bank--box--title"
  }, __jsx("span", null, __jsx("img", {
    alt: "shopping cart",
    src: "static/images/shoppingcart.png",
    width: "24"
  }))), __jsx("div", {
    class: "other-services--button--bank--text"
  }, t('cart_text_i18'))), __jsx("button", {
    class: "other-services--button--seclect",
    onClick: () => {
      openRestaurant2('restaurant');
      type_lat('Bưu điện');
    }
  }, __jsx("div", {
    class: "other-services--button--bank--box--title"
  }, __jsx("span", null, __jsx("img", {
    alt: "envelope",
    src: "static/images/envelope.png",
    width: "24"
  }))), __jsx("div", {
    class: "other-services--button--bank--text"
  }, " ", t('envelope_text_i18'))), __jsx("button", {
    class: "other-services--button--seclect",
    onClick: () => {
      openRestaurant2('restaurant');
      type_lat('Bệnh viện');
    }
  }, __jsx("div", {
    class: "other-services--button--bank--box--title"
  }, __jsx("span", null, __jsx("img", {
    alt: "hospital",
    src: "static/images/hospital.png",
    width: "24"
  }))), __jsx("div", {
    class: "other-services--button--bank--text"
  }, t('hospital_text_i18')))))));
};
const mapStateToProps = state => ({
  to_place: state.navigationReducer.to
});
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Navi_translation));

/***/ }),

/***/ "./config/route_details_icon.js":
/*!**************************************!*\
  !*** ./config/route_details_icon.js ***!
  \**************************************/
/*! exports provided: getRouteDetailsIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRouteDetailsIcon", function() { return getRouteDetailsIcon; });
/* harmony import */ var _static_images_route_details_arrive_start_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../static/images/route_details/arrive_start.png */ "./static/images/route_details/arrive_start.png");
/* harmony import */ var _static_images_route_details_arrive_start_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_static_images_route_details_arrive_start_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_images_route_details_arrive_end_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../static/images/route_details/arrive_end.png */ "./static/images/route_details/arrive_end.png");
/* harmony import */ var _static_images_route_details_arrive_end_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_static_images_route_details_arrive_end_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_images_route_details_arrive_left_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static/images/route_details/arrive_left.png */ "./static/images/route_details/arrive_left.png");
/* harmony import */ var _static_images_route_details_arrive_left_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_images_route_details_arrive_left_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_images_route_details_go_straight_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/images/route_details/go_straight.png */ "./static/images/route_details/go_straight.png");
/* harmony import */ var _static_images_route_details_go_straight_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_images_route_details_go_straight_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_images_route_details_turning_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/images/route_details/turning.png */ "./static/images/route_details/turning.png");
/* harmony import */ var _static_images_route_details_turning_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_images_route_details_turning_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _static_images_route_details_arrive_right_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static/images/route_details/arrive_right.png */ "./static/images/route_details/arrive_right.png");
/* harmony import */ var _static_images_route_details_arrive_right_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_images_route_details_arrive_right_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _static_images_route_details_depart_left_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../static/images/route_details/depart_left.png */ "./static/images/route_details/depart_left.png");
/* harmony import */ var _static_images_route_details_depart_left_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_images_route_details_depart_left_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _static_images_route_details_depart_right_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../static/images/route_details/depart_right.png */ "./static/images/route_details/depart_right.png");
/* harmony import */ var _static_images_route_details_depart_right_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_images_route_details_depart_right_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _static_images_route_details_slight_left_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../static/images/route_details/slight_left.png */ "./static/images/route_details/slight_left.png");
/* harmony import */ var _static_images_route_details_slight_left_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_static_images_route_details_slight_left_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _static_images_route_details_slight_right_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../static/images/route_details/slight_right.png */ "./static/images/route_details/slight_right.png");
/* harmony import */ var _static_images_route_details_slight_right_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_static_images_route_details_slight_right_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _static_images_route_details_turn_right_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../static/images/route_details/turn_right.png */ "./static/images/route_details/turn_right.png");
/* harmony import */ var _static_images_route_details_turn_right_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_static_images_route_details_turn_right_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _static_images_route_details_turn_left_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../static/images/route_details/turn_left.png */ "./static/images/route_details/turn_left.png");
/* harmony import */ var _static_images_route_details_turn_left_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_static_images_route_details_turn_left_png__WEBPACK_IMPORTED_MODULE_11__);












function getRouteDetailsIcon(icon) {
  switch (icon) {
    case "left":
      return _static_images_route_details_turn_left_png__WEBPACK_IMPORTED_MODULE_11___default.a;
    case "right":
      return _static_images_route_details_turn_right_png__WEBPACK_IMPORTED_MODULE_10___default.a;
    case "slight left":
      return _static_images_route_details_slight_left_png__WEBPACK_IMPORTED_MODULE_8___default.a;
    case "slight right":
      return _static_images_route_details_slight_right_png__WEBPACK_IMPORTED_MODULE_9___default.a;
    case "uturn":
      return _static_images_route_details_turning_png__WEBPACK_IMPORTED_MODULE_4___default.a;
    case "sharp left":
      return _static_images_route_details_slight_left_png__WEBPACK_IMPORTED_MODULE_8___default.a;
    case "sharp right":
      return _static_images_route_details_slight_right_png__WEBPACK_IMPORTED_MODULE_9___default.a;
    case "straight":
      return _static_images_route_details_go_straight_png__WEBPACK_IMPORTED_MODULE_3___default.a;
    case "":
      return _static_images_route_details_arrive_start_png__WEBPACK_IMPORTED_MODULE_0___default.a;
    default:
      return null;
  }
}

/***/ }),

/***/ "./config/weather_icon.js":
/*!********************************!*\
  !*** ./config/weather_icon.js ***!
  \********************************/
/*! exports provided: getWeatherIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeatherIcon", function() { return getWeatherIcon; });
/* harmony import */ var _static_images_weather_ic_weather_sunny_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../static/images/weather/ic_weather_sunny.png */ "./static/images/weather/ic_weather_sunny.png");
/* harmony import */ var _static_images_weather_ic_weather_sunny_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_static_images_weather_ic_weather_sunny_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_images_weather_ic_weather_few_clouds_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../static/images/weather/ic_weather_few_clouds.png */ "./static/images/weather/ic_weather_few_clouds.png");
/* harmony import */ var _static_images_weather_ic_weather_few_clouds_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_static_images_weather_ic_weather_few_clouds_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_images_weather_ic_weather_cloud_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static/images/weather/ic_weather_cloud.png */ "./static/images/weather/ic_weather_cloud.png");
/* harmony import */ var _static_images_weather_ic_weather_cloud_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_images_weather_ic_weather_cloud_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_images_weather_ic_weather_rain_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/images/weather/ic_weather_rain.png */ "./static/images/weather/ic_weather_rain.png");
/* harmony import */ var _static_images_weather_ic_weather_rain_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_images_weather_ic_weather_rain_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_images_weather_ic_weather_rain_thunderstorm_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/images/weather/ic_weather_rain_thunderstorm.png */ "./static/images/weather/ic_weather_rain_thunderstorm.png");
/* harmony import */ var _static_images_weather_ic_weather_rain_thunderstorm_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_images_weather_ic_weather_rain_thunderstorm_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _static_images_weather_ic_weather_snow_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static/images/weather/ic_weather_snow.png */ "./static/images/weather/ic_weather_snow.png");
/* harmony import */ var _static_images_weather_ic_weather_snow_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_images_weather_ic_weather_snow_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _static_images_weather_ic_weather_wind_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../static/images/weather/ic_weather_wind.png */ "./static/images/weather/ic_weather_wind.png");
/* harmony import */ var _static_images_weather_ic_weather_wind_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_images_weather_ic_weather_wind_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _static_images_weather_ic_weather_night_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../static/images/weather/ic_weather_night.png */ "./static/images/weather/ic_weather_night.png");
/* harmony import */ var _static_images_weather_ic_weather_night_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_images_weather_ic_weather_night_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _static_images_weather_ic_weather_night_clouds_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../static/images/weather/ic_weather_night_clouds.png */ "./static/images/weather/ic_weather_night_clouds.png");
/* harmony import */ var _static_images_weather_ic_weather_night_clouds_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_static_images_weather_ic_weather_night_clouds_png__WEBPACK_IMPORTED_MODULE_8__);









function getWeatherIcon(icon) {
  switch (icon) {
    case "01d":
      return _static_images_weather_ic_weather_sunny_png__WEBPACK_IMPORTED_MODULE_0___default.a;
    case "02d":
      return _static_images_weather_ic_weather_few_clouds_png__WEBPACK_IMPORTED_MODULE_1___default.a;
    case "03d":
    case "04d":
      return _static_images_weather_ic_weather_cloud_png__WEBPACK_IMPORTED_MODULE_2___default.a;
    case "09d":
    case "10d":
      return _static_images_weather_ic_weather_rain_png__WEBPACK_IMPORTED_MODULE_3___default.a;
    case "11d":
      return _static_images_weather_ic_weather_rain_thunderstorm_png__WEBPACK_IMPORTED_MODULE_4___default.a;
    case "13d":
      return _static_images_weather_ic_weather_snow_png__WEBPACK_IMPORTED_MODULE_5___default.a;
    case "50d":
      return _static_images_weather_ic_weather_wind_png__WEBPACK_IMPORTED_MODULE_6___default.a;
    case "01n":
      return _static_images_weather_ic_weather_night_png__WEBPACK_IMPORTED_MODULE_7___default.a;
    case "02n":
    case "03n":
    case "04n":
      return _static_images_weather_ic_weather_night_clouds_png__WEBPACK_IMPORTED_MODULE_8___default.a;
    case "09n":
    case "10n":
      return _static_images_weather_ic_weather_rain_png__WEBPACK_IMPORTED_MODULE_3___default.a;
    case "11n":
      return _static_images_weather_ic_weather_rain_thunderstorm_png__WEBPACK_IMPORTED_MODULE_4___default.a;
    case "13n":
      return _static_images_weather_ic_weather_snow_png__WEBPACK_IMPORTED_MODULE_5___default.a;
    case "50n":
      return _static_images_weather_ic_weather_wind_png__WEBPACK_IMPORTED_MODULE_6___default.a;
    default:
      return null;
  }
}

/***/ }),

/***/ "./consts/api_type.js":
/*!****************************!*\
  !*** ./consts/api_type.js ***!
  \****************************/
/*! exports provided: API_TYPE, API_STATUS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_TYPE", function() { return API_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_STATUS", function() { return API_STATUS; });
const API_TYPE = {
  DIRECTION: 'direction',
  GEOCODE: 'geocode',
  AUTOCOMPLETE: 'autocomplete',
  PLACE_DETAIL: 'place_details'
};
const API_STATUS = {
  ZERO: 'ZERO_RESULTS',
  OK: 'OK'
};

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

/***/ "./consts/config.js":
/*!**************************!*\
  !*** ./consts/config.js ***!
  \**************************/
/*! exports provided: Mile_Travel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mile_Travel", function() { return Mile_Travel; });
const Mile_Travel = {
  MILES: 0.621371
};

/***/ }),

/***/ "./consts/index.js":
/*!*************************!*\
  !*** ./consts/index.js ***!
  \*************************/
/*! exports provided: API_URL, STYLE_URL, API_TYPE, API_STATUS, Mile_Travel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api_url */ "./consts/api_url.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return _api_url__WEBPACK_IMPORTED_MODULE_0__["API_URL"]; });

/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./consts/style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STYLE_URL", function() { return _style__WEBPACK_IMPORTED_MODULE_1__["STYLE_URL"]; });

/* harmony import */ var _api_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api_type */ "./consts/api_type.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "API_TYPE", function() { return _api_type__WEBPACK_IMPORTED_MODULE_2__["API_TYPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "API_STATUS", function() { return _api_type__WEBPACK_IMPORTED_MODULE_2__["API_STATUS"]; });

/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./consts/config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mile_Travel", function() { return _config__WEBPACK_IMPORTED_MODULE_3__["Mile_Travel"]; });






/***/ }),

/***/ "./consts/style.js":
/*!*************************!*\
  !*** ./consts/style.js ***!
  \*************************/
/*! exports provided: STYLE_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STYLE_URL", function() { return STYLE_URL; });
// import * as configDev from '../config.dev';
// const configDev = require('../config.dev');
const STYLE_URL = {
  NORMAL: `https://tiles.goong.io/assets/goong_map_web.json?api_key=`,
  SATELITE: `https://tiles.goong.io/assets/goong_satellite.json?api_key=`
};

/***/ }),

/***/ "./redux/actions/navigation.js":
/*!*************************************!*\
  !*** ./redux/actions/navigation.js ***!
  \*************************************/
/*! exports provided: navigationFromAction, swapAction, navigationToAction, navigationAction, selectResultAction, clearResultAction, clearAction, setTypeLatlong, setTypeInput, setInfoRestaurant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigationFromAction", function() { return navigationFromAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swapAction", function() { return swapAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigationToAction", function() { return navigationToAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigationAction", function() { return navigationAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectResultAction", function() { return selectResultAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearResultAction", function() { return clearResultAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearAction", function() { return clearAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTypeLatlong", function() { return setTypeLatlong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTypeInput", function() { return setTypeInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInfoRestaurant", function() { return setInfoRestaurant; });
/* harmony import */ var _consts_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts/navigation */ "./redux/consts/navigation.js");

const navigationFromAction = (place, text) => {
  return {
    type: _consts_navigation__WEBPACK_IMPORTED_MODULE_0__["NAVIGATION_FROM_REQUEST"],
    place,
    text
  };
};
const swapAction = () => {
  return {
    type: _consts_navigation__WEBPACK_IMPORTED_MODULE_0__["SWAP_REQUEST"]
  };
};
const navigationToAction = (place, text) => {
  return {
    type: _consts_navigation__WEBPACK_IMPORTED_MODULE_0__["NAVIGATION_TO_REQUEST"],
    place,
    text
  };
};
const navigationAction = (from_place, to_place, vehicle) => {
  return {
    type: _consts_navigation__WEBPACK_IMPORTED_MODULE_0__["NAVIGATION_REQUEST"],
    from_place,
    to_place,
    vehicle
  };
};
const selectResultAction = type => {
  return {
    type: _consts_navigation__WEBPACK_IMPORTED_MODULE_0__["NAVIGATION_SELECT_RESULT_REQUEST"],
    roadWay: type
  };
};
const clearResultAction = () => {
  return {
    type: _consts_navigation__WEBPACK_IMPORTED_MODULE_0__["CLEAR_RESULT_REQUEST"]
  };
};
const clearAction = () => {
  return {
    type: _consts_navigation__WEBPACK_IMPORTED_MODULE_0__["CLEAR_REQUEST"]
  };
};
const setTypeLatlong = type_latlong => {
  return {
    type: _consts_navigation__WEBPACK_IMPORTED_MODULE_0__["TYPE_LATLONG"],
    type_latlong
  };
};
const setTypeInput = type_input => {
  return {
    type: _consts_navigation__WEBPACK_IMPORTED_MODULE_0__["TYPE_INPUT"],
    type_input
  };
};
const setInfoRestaurant = info_restaurant => {
  return {
    type: _consts_navigation__WEBPACK_IMPORTED_MODULE_0__["INFO_RESTAURANT"],
    info_restaurant
  };
};

/***/ }),

/***/ "./redux/actions/search.js":
/*!*********************************!*\
  !*** ./redux/actions/search.js ***!
  \*********************************/
/*! exports provided: searchAction, searchAroundAction, searchClearAction, clearSearchAroundAction, selectAroundPlaceAction, setHistoryBox, setSearchData, setRestaurantData, setSearchLocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchAction", function() { return searchAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchAroundAction", function() { return searchAroundAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchClearAction", function() { return searchClearAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearSearchAroundAction", function() { return clearSearchAroundAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAroundPlaceAction", function() { return selectAroundPlaceAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHistoryBox", function() { return setHistoryBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSearchData", function() { return setSearchData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRestaurantData", function() { return setRestaurantData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSearchLocalStorage", function() { return setSearchLocalStorage; });
/* harmony import */ var _consts_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts/search */ "./redux/consts/search.js");

const searchAction = (query, location) => {
  return {
    type: _consts_search__WEBPACK_IMPORTED_MODULE_0__["SEARCH_REQUEST"],
    query,
    location
  };
};
const searchAroundAction = (location, zoom) => {
  return {
    type: _consts_search__WEBPACK_IMPORTED_MODULE_0__["SEARCH_AROUND_REQUEST"],
    location,
    zoom
  };
};
const searchClearAction = () => {
  return {
    type: _consts_search__WEBPACK_IMPORTED_MODULE_0__["SEARCH_CLEAR_REQUEST"]
  };
};
const clearSearchAroundAction = () => {
  return {
    type: _consts_search__WEBPACK_IMPORTED_MODULE_0__["CLEAR_SEARCH_AROUND_REQUEST"]
  };
};
const selectAroundPlaceAction = place => {
  return {
    type: _consts_search__WEBPACK_IMPORTED_MODULE_0__["SELECT_AROUND_PLACE_MARKER"],
    place
  };
};
const setHistoryBox = search_history => {
  return {
    type: _consts_search__WEBPACK_IMPORTED_MODULE_0__["SEARCH_HISTORY"],
    search_history
  };
};
const setSearchData = search_data => {
  return {
    type: _consts_search__WEBPACK_IMPORTED_MODULE_0__["SEARCH_DATA"],
    search_data
  };
};
const setRestaurantData = restaurant_data => {
  return {
    type: _consts_search__WEBPACK_IMPORTED_MODULE_0__["RESTAURANT_DATA"],
    restaurant_data
  };
};
const setSearchLocalStorage = search_local_storage => {
  return {
    type: _consts_search__WEBPACK_IMPORTED_MODULE_0__["SEARCH_LOCAL_STORAGE"],
    search_local_storage
  };
};

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

/***/ "./static/images/arrow.png":
/*!*********************************!*\
  !*** ./static/images/arrow.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/arrow-c75cac7ef97ee582881cd4a28414d90c.png";

/***/ }),

/***/ "./static/images/background.png":
/*!**************************************!*\
  !*** ./static/images/background.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/images/bin.png":
/*!*******************************!*\
  !*** ./static/images/bin.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/bin-7f55c0d02d00f905742a29227c8626d4.png";

/***/ }),

/***/ "./static/images/bin_white.png":
/*!*************************************!*\
  !*** ./static/images/bin_white.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/bin_white-1a3667e65b38091125c081cb5c18ad6c.png";

/***/ }),

/***/ "./static/images/button.png":
/*!**********************************!*\
  !*** ./static/images/button.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/button-df8f62c7ff016c7be43ee9b7b207f5b9.png";

/***/ }),

/***/ "./static/images/clock.png":
/*!*********************************!*\
  !*** ./static/images/clock.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/clock-0bcbe8df6df0bbcbf8603f45cf91094f.png";

/***/ }),

/***/ "./static/images/cross.png":
/*!*********************************!*\
  !*** ./static/images/cross.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABOvAAATrwFj5o7DAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAI1JREFUWIXtljsOgCAQRJ8WngevJJX3r/00khAKows4hfsSCorZmQR2ARzHuWe+lkQfgO1a0aCPmT7UBDgMIZJ50poCACxZoR1YO2maFWxu/qZwN/MnBt3N74w+M0+UN9zaKc1CVJmPxgBHsR+AyVjrNdIjkF5CaRtKB5F0FEsfI/lzLP+QgPhL5jj/4ARBjniHMHPVQQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./static/images/gmail.png":
/*!*********************************!*\
  !*** ./static/images/gmail.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gmail-2c1a7560c88ea83e6b2593cd07af8ad8.png";

/***/ }),

/***/ "./static/images/goong-logo-mini.png":
/*!*******************************************!*\
  !*** ./static/images/goong-logo-mini.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/images/hotel.png":
/*!*********************************!*\
  !*** ./static/images/hotel.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/images/ic_directions_filled_blue900_24px.png":
/*!*************************************************************!*\
  !*** ./static/images/ic_directions_filled_blue900_24px.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/images/icon_goong.png":
/*!**************************************!*\
  !*** ./static/images/icon_goong.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/icon_goong-c2fb4826d0469c48afe66f11ea53ee0b.png";

/***/ }),

/***/ "./static/images/location.png":
/*!************************************!*\
  !*** ./static/images/location.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/location-04c60690f3f0131871704485277cd4be.png";

/***/ }),

/***/ "./static/images/location_type/agency_of_the_ministry.png":
/*!****************************************************************!*\
  !*** ./static/images/location_type/agency_of_the_ministry.png ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/agency_of_the_ministry-fb1116a9144b1b758da118114b8fd8b4.png";

/***/ }),

/***/ "./static/images/location_type/airport.png":
/*!*************************************************!*\
  !*** ./static/images/location_type/airport.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/airport-5d3a2bc21d63afbfee5d5d36fd33755d.png";

/***/ }),

/***/ "./static/images/location_type/airport_ticket_agency.png":
/*!***************************************************************!*\
  !*** ./static/images/location_type/airport_ticket_agency.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/airport_ticket_agency-fd319a754f2a94a01c63e30c86efd023.png";

/***/ }),

/***/ "./static/images/location_type/alley.png":
/*!***********************************************!*\
  !*** ./static/images/location_type/alley.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/alley-3d0bf1cb085ce87fc2e68a5dbda51c61.png";

/***/ }),

/***/ "./static/images/location_type/art.png":
/*!*********************************************!*\
  !*** ./static/images/location_type/art.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/art-1798326c805bd77914bcc82e8778e4d9.png";

/***/ }),

/***/ "./static/images/location_type/atm.png":
/*!*********************************************!*\
  !*** ./static/images/location_type/atm.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/atm-05fd578dfd2d6b448ae01d24395c9c1e.png";

/***/ }),

/***/ "./static/images/location_type/auto_repair.png":
/*!*****************************************************!*\
  !*** ./static/images/location_type/auto_repair.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/auto_repair-d7281d80a26305e68c36584e9b832e93.png";

/***/ }),

/***/ "./static/images/location_type/auto_showroom.png":
/*!*******************************************************!*\
  !*** ./static/images/location_type/auto_showroom.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/auto_showroom-8c486ff1c9baf99659d389607864c25d.png";

/***/ }),

/***/ "./static/images/location_type/bank.png":
/*!**********************************************!*\
  !*** ./static/images/location_type/bank.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/bank-ea5c0b0353d0d07304f20c7b63d83634.png";

/***/ }),

/***/ "./static/images/location_type/bar.png":
/*!*********************************************!*\
  !*** ./static/images/location_type/bar.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/bar-93516493c9cf120d546e192d34722801.png";

/***/ }),

/***/ "./static/images/location_type/beach.png":
/*!***********************************************!*\
  !*** ./static/images/location_type/beach.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/beach-a2ca341353eb71347d6301a301da8be6.png";

/***/ }),

/***/ "./static/images/location_type/book_store.png":
/*!****************************************************!*\
  !*** ./static/images/location_type/book_store.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/book_store-5eca1df018690ad9ba0ed162efeef44e.png";

/***/ }),

/***/ "./static/images/location_type/building.png":
/*!**************************************************!*\
  !*** ./static/images/location_type/building.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/building-ba5e98d27f8cb65200db989ebec435fa.png";

/***/ }),

/***/ "./static/images/location_type/cafe.png":
/*!**********************************************!*\
  !*** ./static/images/location_type/cafe.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/cafe-7357f2d43d72c8918f7e33f9e551e76a.png";

/***/ }),

/***/ "./static/images/location_type/camera.png":
/*!************************************************!*\
  !*** ./static/images/location_type/camera.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/camera-d3ed3d192b9c982c79a0c5922b33e8e3.png";

/***/ }),

/***/ "./static/images/location_type/cemetery.png":
/*!**************************************************!*\
  !*** ./static/images/location_type/cemetery.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/cemetery-5a77975bc98736958ab5359d0eeba6ef.png";

/***/ }),

/***/ "./static/images/location_type/central_authority.png":
/*!***********************************************************!*\
  !*** ./static/images/location_type/central_authority.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/central_authority-6f89ac31953ee36ba1f8b2fd82cb7d72.png";

/***/ }),

/***/ "./static/images/location_type/charging_station.png":
/*!**********************************************************!*\
  !*** ./static/images/location_type/charging_station.png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/charging_station-afde167177dc1cd2a32c569c1ecd58f0.png";

/***/ }),

/***/ "./static/images/location_type/church.png":
/*!************************************************!*\
  !*** ./static/images/location_type/church.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/church-82f4b588d0eb2c32c40d2e2bba5d7fc6.png";

/***/ }),

/***/ "./static/images/location_type/cinema.png":
/*!************************************************!*\
  !*** ./static/images/location_type/cinema.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/cinema-c2f68a3870119e2078c90ec1ac85d11d.png";

/***/ }),

/***/ "./static/images/location_type/clinic.png":
/*!************************************************!*\
  !*** ./static/images/location_type/clinic.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/clinic-42ddf89da059aa76125424a9a15a7780.png";

/***/ }),

/***/ "./static/images/location_type/college.png":
/*!*************************************************!*\
  !*** ./static/images/location_type/college.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/college-5cea7b4262b48916d1b5c43d10837f3d.png";

/***/ }),

/***/ "./static/images/location_type/commercial_center.png":
/*!***********************************************************!*\
  !*** ./static/images/location_type/commercial_center.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/commercial_center-1ee7f15c55ec7d7a82e676cc19edc2ba.png";

/***/ }),

/***/ "./static/images/location_type/commune.png":
/*!*************************************************!*\
  !*** ./static/images/location_type/commune.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/commune-9a2645ccd54106e4bf09a9700cd132da.png";

/***/ }),

/***/ "./static/images/location_type/company.png":
/*!*************************************************!*\
  !*** ./static/images/location_type/company.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/company-b4d24ee92535406040cf095a7240ec67.png";

/***/ }),

/***/ "./static/images/location_type/convention_center.png":
/*!***********************************************************!*\
  !*** ./static/images/location_type/convention_center.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/convention_center-328a2aadd8b65ee947cadcd8d30be798.png";

/***/ }),

/***/ "./static/images/location_type/court.png":
/*!***********************************************!*\
  !*** ./static/images/location_type/court.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/court-115a8963d0ffd45c3974c1f11305d80b.png";

/***/ }),

/***/ "./static/images/location_type/culture.png":
/*!*************************************************!*\
  !*** ./static/images/location_type/culture.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/culture-fa4212473abe2c553e2d0d12cd51a429.png";

/***/ }),

/***/ "./static/images/location_type/dentist.png":
/*!*************************************************!*\
  !*** ./static/images/location_type/dentist.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/dentist-0315138c2414b3eb3616eb867482ef8f.png";

/***/ }),

/***/ "./static/images/location_type/dicstrict.png":
/*!***************************************************!*\
  !*** ./static/images/location_type/dicstrict.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/dicstrict-dc5f50e29f04d495e5bcfe714593af47.png";

/***/ }),

/***/ "./static/images/location_type/embassy.png":
/*!*************************************************!*\
  !*** ./static/images/location_type/embassy.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/embassy-a12d7199f90ad75aa19f6b8a4992827a.png";

/***/ }),

/***/ "./static/images/location_type/exhibition_center.png":
/*!***********************************************************!*\
  !*** ./static/images/location_type/exhibition_center.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/exhibition_center-6e113f1d0a81c04be7d9b03627f58150.png";

/***/ }),

/***/ "./static/images/location_type/fire_station.png":
/*!******************************************************!*\
  !*** ./static/images/location_type/fire_station.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/fire_station-e4dd94e1ca21c815443656c725421923.png";

/***/ }),

/***/ "./static/images/location_type/forest.png":
/*!************************************************!*\
  !*** ./static/images/location_type/forest.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/forest-faf490363ab2d3baff6832d8e429d3ac.png";

/***/ }),

/***/ "./static/images/location_type/gas_station.png":
/*!*****************************************************!*\
  !*** ./static/images/location_type/gas_station.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gas_station-e612c0fad8c922104b7a5bbbcfdad926.png";

/***/ }),

/***/ "./static/images/location_type/gate.png":
/*!**********************************************!*\
  !*** ./static/images/location_type/gate.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gate-acfd9ec6ac3b378d9ff2b9ed4ffbf917.png";

/***/ }),

/***/ "./static/images/location_type/golf.png":
/*!**********************************************!*\
  !*** ./static/images/location_type/golf.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/golf-46193a48db405cbca88af83458922ec7.png";

/***/ }),

/***/ "./static/images/location_type/goverment.png":
/*!***************************************************!*\
  !*** ./static/images/location_type/goverment.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/goverment-959148309b75c8e54098f941e64ec6b1.png";

/***/ }),

/***/ "./static/images/location_type/grocery_store.png":
/*!*******************************************************!*\
  !*** ./static/images/location_type/grocery_store.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/grocery_store-d439c9f2bc98cec0255642cef7836df2.png";

/***/ }),

/***/ "./static/images/location_type/gymnasium.png":
/*!***************************************************!*\
  !*** ./static/images/location_type/gymnasium.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gymnasium-5a48670034099a2c23236b7cdaaa61eb.png";

/***/ }),

/***/ "./static/images/location_type/high_school.png":
/*!*****************************************************!*\
  !*** ./static/images/location_type/high_school.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/high_school-d49b1ece8b959b90af36bb5ab8a88d0c.png";

/***/ }),

/***/ "./static/images/location_type/hospital.png":
/*!**************************************************!*\
  !*** ./static/images/location_type/hospital.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/hospital-8e068b86c1f9309a67983c9d673913bc.png";

/***/ }),

/***/ "./static/images/location_type/hotel.png":
/*!***********************************************!*\
  !*** ./static/images/location_type/hotel.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/hotel-bc398df57c74fedca61e2f3036be3036.png";

/***/ }),

/***/ "./static/images/location_type/house_number.png":
/*!******************************************************!*\
  !*** ./static/images/location_type/house_number.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/house_number-48cf3acfbedd7cada8ed2a34dbb9911c.png";

/***/ }),

/***/ "./static/images/location_type/industrial_park.png":
/*!*********************************************************!*\
  !*** ./static/images/location_type/industrial_park.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/industrial_park-03afba0da545a2fefd136f2960b2b173.png";

/***/ }),

/***/ "./static/images/location_type/inter_level_school.png":
/*!************************************************************!*\
  !*** ./static/images/location_type/inter_level_school.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/inter_level_school-4f6805c4b488de246689e25357a0d39f.png";

/***/ }),

/***/ "./static/images/location_type/international_agency.png":
/*!**************************************************************!*\
  !*** ./static/images/location_type/international_agency.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/international_agency-47059b80abc9e3a14b6c2327919483e9.png";

/***/ }),

/***/ "./static/images/location_type/karaoke.png":
/*!*************************************************!*\
  !*** ./static/images/location_type/karaoke.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/karaoke-346b439ac8cef7e56133ff4b3a5a3d69.png";

/***/ }),

/***/ "./static/images/location_type/market.png":
/*!************************************************!*\
  !*** ./static/images/location_type/market.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/market-ef2ff2baf4a1144f5df95efc5e5ae6f8.png";

/***/ }),

/***/ "./static/images/location_type/military.png":
/*!**************************************************!*\
  !*** ./static/images/location_type/military.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/military-c1b825246d6fed80d1e5b527bc217467.png";

/***/ }),

/***/ "./static/images/location_type/monument.png":
/*!**************************************************!*\
  !*** ./static/images/location_type/monument.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/monument-79bcb5e2db65c8101e8ac0c9bd27a227.png";

/***/ }),

/***/ "./static/images/location_type/motel.png":
/*!***********************************************!*\
  !*** ./static/images/location_type/motel.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/motel-959e5fa89b4437e4b05b69e6c230ad3d.png";

/***/ }),

/***/ "./static/images/location_type/motel_room.png":
/*!****************************************************!*\
  !*** ./static/images/location_type/motel_room.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/motel_room-6893310e346da78bef73ddab0385c46e.png";

/***/ }),

/***/ "./static/images/location_type/museum.png":
/*!************************************************!*\
  !*** ./static/images/location_type/museum.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/museum-bae58eb34a6915f20cc0f21da754bb3b.png";

/***/ }),

/***/ "./static/images/location_type/no_type.jpg":
/*!*************************************************!*\
  !*** ./static/images/location_type/no_type.jpg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/no_type-2c3dbec5e929ca25946924ad1fad3c78.jpg";

/***/ }),

/***/ "./static/images/location_type/pagoda.png":
/*!************************************************!*\
  !*** ./static/images/location_type/pagoda.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/pagoda-1176a1549e9d247b831118d583af6027.png";

/***/ }),

/***/ "./static/images/location_type/park.png":
/*!**********************************************!*\
  !*** ./static/images/location_type/park.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/park-2ab71e7c2ff9882cff49b69c9d6970e6.png";

/***/ }),

/***/ "./static/images/location_type/parking.png":
/*!*************************************************!*\
  !*** ./static/images/location_type/parking.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/parking-52ab678770d7439666a136a206c87142.png";

/***/ }),

/***/ "./static/images/location_type/pharmacy.png":
/*!**************************************************!*\
  !*** ./static/images/location_type/pharmacy.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/pharmacy-645822f7b5743bbf70c7cbf459460ca1.png";

/***/ }),

/***/ "./static/images/location_type/police.png":
/*!************************************************!*\
  !*** ./static/images/location_type/police.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/police-aec21560f632e9599ba01e66c636b23f.png";

/***/ }),

/***/ "./static/images/location_type/port.png":
/*!**********************************************!*\
  !*** ./static/images/location_type/port.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/port-2a149c2244153a3230bf50ae03cbcd70.png";

/***/ }),

/***/ "./static/images/location_type/post_office.png":
/*!*****************************************************!*\
  !*** ./static/images/location_type/post_office.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/post_office-32d2c7d4893e2582be0f55bf19ce1147.png";

/***/ }),

/***/ "./static/images/location_type/pre_school.png":
/*!****************************************************!*\
  !*** ./static/images/location_type/pre_school.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/pre_school-627cdd6b7f4d5d1a5925593db6f11f79.png";

/***/ }),

/***/ "./static/images/location_type/primary_school.png":
/*!********************************************************!*\
  !*** ./static/images/location_type/primary_school.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/primary_school-f5559dcaba1f4b71eeca5d28f91e861e.png";

/***/ }),

/***/ "./static/images/location_type/prison.png":
/*!************************************************!*\
  !*** ./static/images/location_type/prison.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/prison-ab6cb23cf2897c61b99aac2677c45295.png";

/***/ }),

/***/ "./static/images/location_type/province.png":
/*!**************************************************!*\
  !*** ./static/images/location_type/province.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/province-72a846589e207b1a449260d98da7c7fc.png";

/***/ }),

/***/ "./static/images/location_type/research_institute.png":
/*!************************************************************!*\
  !*** ./static/images/location_type/research_institute.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/research_institute-494cdd11bedd0a8ffdcef9b33ca636cd.png";

/***/ }),

/***/ "./static/images/location_type/restaurant.png":
/*!****************************************************!*\
  !*** ./static/images/location_type/restaurant.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/restaurant-8a03a75fa07001b2b710eff27821497e.png";

/***/ }),

/***/ "./static/images/location_type/secondary_school.png":
/*!**********************************************************!*\
  !*** ./static/images/location_type/secondary_school.png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/secondary_school-27dc591adadfdcf688d6c08a03dc8113.png";

/***/ }),

/***/ "./static/images/location_type/site.png":
/*!**********************************************!*\
  !*** ./static/images/location_type/site.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/site-e2c5bf2c36a79fcba9e283426f22c28f.png";

/***/ }),

/***/ "./static/images/location_type/spa.png":
/*!*********************************************!*\
  !*** ./static/images/location_type/spa.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/spa-5713beb9eec912e3bd92ddb2bcd5f301.png";

/***/ }),

/***/ "./static/images/location_type/stadium.png":
/*!*************************************************!*\
  !*** ./static/images/location_type/stadium.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/stadium-f4379e16f60b6602a97839b8b7d12964.png";

/***/ }),

/***/ "./static/images/location_type/state_agencie.png":
/*!*******************************************************!*\
  !*** ./static/images/location_type/state_agencie.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/state_agencie-7dec44d6f40805d159ec76dbb24bf230.png";

/***/ }),

/***/ "./static/images/location_type/station.png":
/*!*************************************************!*\
  !*** ./static/images/location_type/station.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/station-8b18a1e88345120a99f28d43e45e742d.png";

/***/ }),

/***/ "./static/images/location_type/street.png":
/*!************************************************!*\
  !*** ./static/images/location_type/street.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/street-ecc5147d50d5eabbb68d94301846cc3a.png";

/***/ }),

/***/ "./static/images/location_type/supermarket.png":
/*!*****************************************************!*\
  !*** ./static/images/location_type/supermarket.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/supermarket-903920a61508c60ac36e593142f882f6.png";

/***/ }),

/***/ "./static/images/location_type/swimming_pool.png":
/*!*******************************************************!*\
  !*** ./static/images/location_type/swimming_pool.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/swimming_pool-d409559675f576dedc5b2c2378419809.png";

/***/ }),

/***/ "./static/images/location_type/tennis.png":
/*!************************************************!*\
  !*** ./static/images/location_type/tennis.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/tennis-c739cdca7c1648dd9a346f41ed231673.png";

/***/ }),

/***/ "./static/images/location_type/theatre.png":
/*!*************************************************!*\
  !*** ./static/images/location_type/theatre.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/theatre-251c7e8d6cb920a23d2d17a77ef575f7.png";

/***/ }),

/***/ "./static/images/location_type/traffic_light.png":
/*!*******************************************************!*\
  !*** ./static/images/location_type/traffic_light.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/traffic_light-ab3ade063227af2dcafbdcc27e6d0e3a.png";

/***/ }),

/***/ "./static/images/location_type/train_station.png":
/*!*******************************************************!*\
  !*** ./static/images/location_type/train_station.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/train_station-ed670f64130263838c5c07352ed7a2e3.png";

/***/ }),

/***/ "./static/images/location_type/training_center.png":
/*!*********************************************************!*\
  !*** ./static/images/location_type/training_center.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/training_center-66fda198397095716ce39d0dd0b485a8.png";

/***/ }),

/***/ "./static/images/location_type/treasury.png":
/*!**************************************************!*\
  !*** ./static/images/location_type/treasury.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/treasury-107345d3275cc77187977885a039b113.png";

/***/ }),

/***/ "./static/images/location_type/tv_radio.png":
/*!**************************************************!*\
  !*** ./static/images/location_type/tv_radio.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/tv_radio-3e489aeec6a90d8ed94f82f72315dfd9.png";

/***/ }),

/***/ "./static/images/location_type/university.png":
/*!****************************************************!*\
  !*** ./static/images/location_type/university.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/university-618e5803ff197d24593f7f252d9467e7.png";

/***/ }),

/***/ "./static/images/location_type/village.png":
/*!*************************************************!*\
  !*** ./static/images/location_type/village.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/village-4e5f58317b6e5277558c5f3bb6839299.png";

/***/ }),

/***/ "./static/images/location_type/vocational_training.png":
/*!*************************************************************!*\
  !*** ./static/images/location_type/vocational_training.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/vocational_training-a684c2ad923743df882627cd35a732e2.png";

/***/ }),

/***/ "./static/images/location_type/zoo.png":
/*!*********************************************!*\
  !*** ./static/images/location_type/zoo.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/zoo-d603218814582e949a21916569963d95.png";

/***/ }),

/***/ "./static/images/marker.png":
/*!**********************************!*\
  !*** ./static/images/marker.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAWXklEQVR4nO2YaXRc5ZWuP6no5Ca5SfdNLKnmUs1VqiqVSiqVZsmyJFu2JduyLc8jHkNsJmMuIYzGnU5ygXQgGIgT4AYSiB3ACdhgPMmyrMGa53mWNc9Sjeec/faSvNL9o5s0pKGTH/2s9a76cX7Ufr69z1n7HMb+h39P282brPDD8wylJWzi9hDjhyYY9Q4xrneICW43a68vYsKv32Q4C/Y3CQDmrapjaGwJQmGRiM7+XoTHnhCBsaC5het3EoxDx0T07Csi4cwfg/lrxYw+KmH8a6f+usXzDQ3M29fHuO5uJtTUBOPMb4MJYKhvZvTBBYYnn2HEGJv4NxGGo48wOvUWE4oqmR9g9IMfi+jctWDqmforCDQ2MHdLF/P19zNqaxUhw86Ezi6Gc++yABAiNDSvpOs3HxPOvPemcPr1K/TiK8X03M9v0nMvfSy8/P9PC2fOP8CX1CUHgK/TMy8yqu5ilHcgWDhXEIwf/4rR/nu/fAmhs53xPd2M7+oKQlNtsDA4yHD/PiZ0dq8QSkreFt5/b4Refgl04knQ/UdBd+8Bbd0CWr8BtHY9KG8TaMse0D3HQSee76TX3/2ZUNXuoK1HmFDbw+jHr4n4xkHGl7Uy4eyVL0cCvW0MQwNM6OsVceMzDN0dTOjuzqaa6mL6+EPQqy+Cnvi/oKOHeDq4l6P9ezjat4enPbt52rGTp01bOOTmcchcySElU6ClK0H5e0HHTxKdPntGqO6y0MvvLY4g/0FxsHDmMhNeOfsFS9TeZOhuYdTXLRKGBlmgf+gfqLP9TaooBZ19C/Sjp3h66AhHRw8KdOQQ0dHv3smRw0T3HCY6fJjo0GGi/YeIdu8nyt9JtCJPQGIWRwnLiTbsAz3+zwHh7U8eWxTpnWDcO5dE/C/eZ9zP3v6CJOpLGFqqGHW13SUM32Z8b6+dOlq7qLQQ9Popnh4/xtO9C8UfIPrefqL924m2rSValwlamUKUlQjKSgJlpxGtWQHatIFo5y6infuINu4CMvIIccs5Sl0HOvQ46KUzF7kp/z8EShsZ99ZHIv70Oca/eu6/JiHUljNqqWHU0XwXDfQwoaczhTpb3CgpAL38XIAePkJ0737QPbuJtq8BZScQJZiBqHDAqgDMMsAkXQyZ5ECEEojUAi4bkJlGtHEjaOteopxtoORcooQ1AWH7MfA/+XWTr+m2OFDayri3LwfzZwpY4GzhXyZBDdVMaGtkQmeLiO/rZkJvt4M6mjxUchX04j9xdOww6Mgeol1ribJiiWI0gGWhcAnIIIGgE4PTihFYiGbhV7IYTi8Bb5BCMCpAdiNRegphw2ZC3k6itPXgkzb4A1uPI/CTtxoCwDf5KS/jLpQF+Ss6/jIRfmCICR2tQXxfP+M6u5ZQS10fSq+AXvwhRw8eAB3eRpS3lCjBSLDKF09d0EsQ0ITBGx6KeWUIZhRLMC1fSMhiZhUhmFeGwRMuhk8jQ0AnA29UQYiJJFqVQ7RuB/HLtiCQvtPv2/MkAi+8+0ewOCYwxjyDU8yz9+nPJ4GmauYdnWG4+GYQyi8xobH6XVqQePlHAXpwH2j/RsLqBIJTA1hlIKMEnDYM7vDQxcLHpEswJA3BbbkYA0rZncjFGJKGYkwagilZCGaVYXCrxfBpZfDrlOBsZuKzsklYu4sCWbvhzT4c8Bx5Fr43Pn5IePZdxp18S4THf/M5RUZuM9TdEqG5lglNNVuo5DLotec5emAP0d51RKviiWLvSAgmCXzaMMyoQjAmC8GAQoJ+kx791gh0mwxo1+vQptOiy2BAn9mMAb0OgwopxmShmFaGYS5cAo9WDp8hHIFIG3FZOcSt2Uu+7IOCe8NDcD9+2uu/XmPwXatlnt9eCv7MEtzl84zv72EcsJCvCiWXWujtn4Me2svT7hwgJ5EoTk9kky9KeHVhmA4PxbAiFP1GHfojrWhUK3FDp8UnCYm4kL0K57NX4aP4BFxVa1Ark6PPZMJtvRajCjGmFGLMhUvh0angMxngj4mlwIoN5M85AHfOvdzsgZNwP/+733gP/ZT5tp0IbsRnXDjx6jNMuHFBRLeuMqoq2kdnXgE9eoCjnStB61KIUiIIUUoIEVL4DGLMqMMwohJjwGZGl1mPQpMR1489jOZrRRgeGMHUtBuTU/MY7B1E/aVruHT/MXyi1aMjXI0hkxHjKilmVFK4NSp4DTr4rDb4E9LJv3IHeXKP0OymhzHz8Is0+5uPoubevsJmTr0bjE1b/3ORQHvTvy559Ic3SunEEdCO5TytTSJaFgU4tVjoRsAsxbxejDG1GIORZrQb1Liano624nIEABABnF+A3xOA1+2Hd94Pr4fDzLwf1Z9cw4cJyeiUyzFmNmJKrcC8JhwevR7eCAt8jjj40nLJk3MAc3kPcpP7nsL006dfmDn+Ipu973nR5Otn/rxEx8/uZ/TxmWBUFTL+1lWn8NPvg3avIOTEEbKiCYkmQpQKvFUGr0mKaZ0EwxY9eoxaXMvMxGDvbQgC4J31wOsOwOfh4PUE4Jn3Y27Wi+nJOUwMTWB6bBYNJZX4xBmHYZUKUyYj5jRqeHR6eM0WeCOd8MZnkCdrG82tvVeY2PQQxu/5Ye/E6T/878E3zrPRx/6T1X/y+FFGzx4T4YVHmfD6/3uUjmwArYzhaJmdKNVKcOlAkUoELHK4jVJMGJUYtplw0xqBzvIqcH4e7pn5xZNfFPAE4PYEMD/vw9ysB9NTHoyPz2G4bwQjfSMo/tVbqJbKMGs0Y1ZvgEdngNdshdcWA68zFe6UtTS3+iBNrj0qjGw+huEDT2aN7n+KDe15LLhpx+Y/c39cvsLg+Howor7F6JHdF2hdHJBi5inJTLTQjRgNBJsSfosCcyYZJuxGtCmlKHviSbh9HOYmpuGe98Lt9mPe7cec24fZeS9mZj2Ymp7H5OQ8xsZmMDw4gYGOfrSVN6JgeS4mpHLMm63w6E3wmmzw2pzwxKTCHZ9NsxnbaXL1IW5wxV4M5h56aiznMBvLOSgqyNrz6SLCw3uZcP09Jrx3+hu0ObWdkg1ArFZAnIEQbyCK1oCPVMFnVWI2QoUJmwEVZiM6ikowNzmLmckZzM64Mbtw+guZcd8RmJrD+MTMosTI8CRuD4yir6MfXbXtKDz2BHpCpPCa7fAYLPCa7PDaXPBEp8HtWk6zyetpInM3P5C0Ed2JeefG43LYuHNtcMfmA58uwuclBnG7lzNuR6aM0sxTcChAUUoip5YQq4cQowEXFQ6fLRxzdh3G9CqUZWZioKMHk4OjmBibxNTENCYnZzG+kIXix6cxOjaF4ZEJDA2NY2BgFL09g+hq7UVHVQuKfnwKzTI1fEYbPMZIeM3R8EYmwBOTDndsFmbiVtN4Sj7fF7MS7VHLqn4JLmih1qb47E8ZK8aYL9US5M2MYt6MKL0QrQogQgzYZETR6jsi0TpwDh18Dj3mnWaMqmW4lZ+Pga5ejPYNYHRoFKMj4xgdmcDIyMS/Fj84OIqBgWH09Q2hu/s2Otp60VrfjubiGhQ9+wvUqU0IGO5I+Cwu+KJS4HVmYN65HNPOFTTmWi302pai05LcXpO1/hu3UtawOkfGfyyy8H7tjjMGzSdb2FyyVc9ZZQHBGAKKkBDZVUROPQSnAZzTBH+cDZ6kaExo5Chftw7dDS0Y7OjGYN9tDA4MYnBgGLcHRnB7YBj9fYPo672Nnu5+dHb0oq21G80N7agvb0Dt5RJcP/ki6sPN4IzR8Fri4I9Mgi9mGTyuFZiPWY4pRyaNRGUK3eYkdFgSOytX5H2zMiuP1Ts/RWSBGZcpaDo1ik2n2GV+i3zKrwsBZxATb1OQEKMHH2cGlxCJQFo8fFlLMWfWoCo+Ds0FRehrbEFvexd6u3rR292Lnu4+dHf1oauzFx3tPWhr7URLUxsa61pQW1GPysIyVJ27jCsPPoUOuQ68LRH+6KXwO7Pgi18Fb3wO5mJWYMK+jAatqXyHKR5t9uTGjqef/Er1MydYfcqnjNYC08kONrVvG5vYvebrbquyza0NgV8fJnARMuIdWhLiLeBTneCzliGQkwufy4F2uQS3XjiFropqdNTWo6OpFe3N7WhvaUdbS9ti8U2NrWioa0ZddT2qy6pRXliK0g8vo/LX53AxbyfGpQuHtAKB5LUIpOTBn7IBnsR1mI1eTmO2NOo3J/LtJhdaolOudH9NzDq/KQ3qWrf700VG1qxmgdD/FewP/RqbilT/YXZho9WGcj6jmAKRKuITrBCWJUJYtQJc7gb4l6ZjSvIdFK1cjYY/foTmwptovFWJxqpaNFTXob6qDnVVtaipqEZVWSXKi8pQeqUINz+4jIrf/gHXf/QSCo0OcCYXuBXbwa/aCy57D/wZO+BJzMN0VCYNRyRTt9HFtZpcaI9L/2mHLYF1WONFOP7gp4t0p32FTVjUogmrho1FG46M6ySYVodwbp2YfCY5cU4jhMwkCLmrIeRsQGDZagRsJnSIl6Dge/ej4ez7qL7wMSqvFqDyehHKr9/EretFKL12A8WXClB04RKK3juPsjfPouKVt/B+9noMS7QQluVD2PYghC0PgF9/BP4VezAfl0sT1qU0YIqndr2Tb46IQ3Ny1vpWVzprcaaJzq1e8+kicEazfpclaGCpkw2mx6qHjAr3iCoE0+pQcusk5LeF08Jo0bpc0NoN4JetQcCVhIBaimqlAlfuuQ81r/4S5W/+BsW/O4ui37+PG++eQ+HZ91H4zru4+ebvUPnab1H+0ms4s3EXGsPCITizIOw4DjrwJIQ9PwC36QF4M3ZixrGcRsxJ1GOIFVr0MWiyJww35e/4Tm/+Dta5dFXQk+np7M/StCyZDYr/Prhf/B3Wa9G83acKw6gyhJtWhy2sJRSINkJYlQnK3wwhez34hCxwUQ4EVGLUyCS4sHY9ip54GpX//AIqT72CildPo/LVX6HqlV+i/IVXcPEHJ/BOejYaQlXg7angN98HOnwSdPAZCHc/gUDeUcwn5GHCkkb9BhfaddFcoyEGjbGpp1pNMazVGC0qzd3APhOdjojgrlgb64y3OTu0cvTKQ2hUGUozajF5THIKxEdB2JAHyt8OylgHITYdXKQDpFGiP+T/4IpOj3MZy/HB9l04f/C7+ODgd/H7rTvxTmoGLip1GBJrQAudyL8PdPAk6MBJ0KGT4Hc+Cm/mbkxHZtCQMZ66dDHUpHWg3uri6tOzLXXLslldUkbwkCb6s4mwh+tZt/zbonZFKGuxaF5rVYahV7YkMKIIxfSCjFlFXEo8aPNWUP4uUGYeBFcmeHscEBEBXiXHSGgIGkJCURYqQVmoFI0hUoxLNSBLPJCxBcLW46B9zywGh34IYf/T8K/5HuZiVtOoMZF6dE60aB2BOoMDdc7kl+tNDtakdYjY56XRZQtqzUpgDRkJYQ06xWiTdAl6ZCHCsPxPMuEUSEsCbd4O2rIXtGoLKHUN+Lgs8M6lQHQSEBUP2OOB6FQgcRWwfDuEDfeCdj4G7HkadPcJ0ILEwZMIbDoGd+IGmjAnU7/OiTatQ6jT2lFjc41U5+aH1ubkserUzKBmFv75RPqjjaw5QiNqiNSzOrtpS224BI2SJXyXNISGZKE0FS4ht1FF/kQX+LyNELbuA228G5S7C5S9E0L2Lggrd0PIPQBh/fdAm4+BdjwK2vU4aO9Td8bp8D8udiKQ/wDcyfk0aUml27pY6tA6qF5j56tN0ahKSNvSEJvI6qMSRG1RiZ+7IaxS/m323nM/YdXf+mpwg/jbrNKs+WWlPAwNkiWBTkkIBmWhNKkS05xOAW+UFYHMLPAbt0HYfgi04yho+/3AzmOgPY8Ad/8AtO8J4MBToIMLXTgB4cBT4Hc+An/uYbgT8jBlTaNBvYs6tQ40auyBKr0dldEJr9WoTawqVB5c88Ipdk1mZH8RU0fuZvXJsUHNDx9hZW+8KirXq8rLpSGolywJtEtCMCANpTGlhKbVcswbtfA6nfBnZINbtw38lkMQdt4HYe9xCPsegbDv+xD2fh/8zuMIbL4PCx8XvEu3YC52FaasqTRkiKNOjQNNCxLaSFTaXZUfvPyzu8oevo9VLV8V1HzsHvYX05WRyOpdkazcbgwui7Ozm0nRqhKNYqxMEoJa8RK+RRyCXkkoDSvENKlWYEavwVxEBNyOWHgS0uFLz4Fv+Ub4s7fAt2IrfFmb4V26EZ6ktZiPXYnZqAxMWlNoyOCiLk0UmtSRXJXGhnJrzPjNrOzw8rQMVhGfHFyfspQ1rfwzu9VnoSHKzKosOlYeoROV2k2s1GGNLw6XcSXiEFSJQ/gm8RJ0SUJpUCGlMbUKEzodpg0mzJhtmLU6MGt3YS4qEXOOZMw5UjEblYYZeyqmbCkYj0halOhekAi38VVqK8ot0f7ylGWuiqQ0VuVMFNU641mNK559IdxSSVj9t7/BSsMld5XrlexGpGn9DaUUxeIlqBSHCA3iUHRKxdSvVNCwWo1RnR7jBhMmTFZMmu2YjIjGpMWJSYsLk5Z4jFviMWqOo0GDk7rVCxJWvircglsRDpQmpa0ui4pllZExdzVrzazREsW+UNqD77x8VcpD7ipSS1lBhOHQdYUEN8UhQoU4VGgQi9Euk1KvUkUDai2GtAYM68wYMVgxYozEqMmBEVM0RkxODBmdNKCPpi51JJpUVqEqPAJlZjuKE5K3VUbFsBpT5F1gQWxCG8G+FH74zAn2xratrPg73xRdVyvYVZPueIFCiiJxmFAhFgv1Eila5QrqVqmpV61Dv9aIAZ0Zt/VW3DZE4rYhCgN6B/XqoqhDbUOTMkKoUplRYrKjKD7p7hKbg1XrzKLcgVb2pfPH7Ex2KXMpK/3q3wWXqOTsmkn/eIFChpsSMV8hkVKdVI4WuYo6VBrqUuvRozGhRxuBXq0VPVobdWkiqS3cikalWahSmlBiikRRXOLBmxY7q1LpRe/s2cte3vIZviR+EXyyNIldTo5jZYwFXVfKWIFJ/0yBQo6bEilfIZVTnUyJJoWaWlU6ag83oENtQoc6gtrUEdSiikCD0iRUKowoMdoWJA6VWu2sXK4RfbhtB3tv7WdcCL8ILsc62MfJ8exivDOonrGgYoWcFZgMP7quUKBYKuMrZUqqlYWjQaGlJpWemlVGalaZqFFpQr3SKFTKDVRisOKGK+FwsTWSlSs0osubtrAL/50Sf+JCfAy7lORilxJdizJlYaHsutn0XKFChRKpgquUhVONXIM6hY7qlHqqUxhQozAIFTI9legicCM27p5Sk5WVS1SijzdvYZf+GhJ/4pIrml1KjGNX4l1BIwuP6b//Fis0mV64sSij5CpkaqFKrkW1XIdKuZ4rl+lQojGjKMb13RKThVWGKUUXN+azT9bmsb86BXGxrNDlYAWu6KCFZ03l17/BCo2m52/Iw1EsUeGWVBO4JdNypVINStQmFDlid5XrzKwmRC46n5/PLq5Zx/5mKLZFsMKYKFYQEx00yBgrDRWzawbzA9cVGv8NSThuStUoUhtbixyxKbeMZlYhUYnOb93Brq5azf7mKI6KYAUOO7uSkMAa2VeCrsvV7JLFbrisNtx/TWvafiF37ddKbdHsllIrOgiwS3vuZn+zfGyzsw8SE9nZzHRWJFWKLkba2GW5ml1V6RfvgxJTZHAN+ztW/yX8+b8AYywLWIbLI3wAAAAASUVORK5CYII="

/***/ }),

/***/ "./static/images/more.png":
/*!********************************!*\
  !*** ./static/images/more.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/more-86951969d723317e78f576375bb00282.png";

/***/ }),

/***/ "./static/images/normal_map.png":
/*!**************************************!*\
  !*** ./static/images/normal_map.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/normal_map-a3abb51146169753a0969cb49630683e.png";

/***/ }),

/***/ "./static/images/petro.png":
/*!*********************************!*\
  !*** ./static/images/petro.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/images/place_outline_red600_18dp.png":
/*!*****************************************************!*\
  !*** ./static/images/place_outline_red600_18dp.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/images/restaurant.png":
/*!**************************************!*\
  !*** ./static/images/restaurant.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/images/road_1.png":
/*!**********************************!*\
  !*** ./static/images/road_1.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/road_1-72a846589e207b1a449260d98da7c7fc.png";

/***/ }),

/***/ "./static/images/road_2.png":
/*!**********************************!*\
  !*** ./static/images/road_2.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/road_2-5eb145eda9f530d48aa18f9296393394.png";

/***/ }),

/***/ "./static/images/road_3.png":
/*!**********************************!*\
  !*** ./static/images/road_3.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/road_3-a18858d3c675c9b05259e5649418c01c.png";

/***/ }),

/***/ "./static/images/road_4.png":
/*!**********************************!*\
  !*** ./static/images/road_4.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/road_4-dc5f50e29f04d495e5bcfe714593af47.png";

/***/ }),

/***/ "./static/images/road_5.png":
/*!**********************************!*\
  !*** ./static/images/road_5.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/road_5-858be8fbc82afea2b2d7175aaf0a1bd4.png";

/***/ }),

/***/ "./static/images/road_6.png":
/*!**********************************!*\
  !*** ./static/images/road_6.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/road_6-0df26894ee1321846e92edb0559e1f78.png";

/***/ }),

/***/ "./static/images/route_3dots_grey650_24dp.png":
/*!****************************************************!*\
  !*** ./static/images/route_3dots_grey650_24dp.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAa0lEQVR4Ae3XAQaAMBiG4Y48qtQf6gZ10x2hFCEDUIznYQDsY8PbfANIQyypi3yfYdoqu/y8pT6O12mntZ4BXeRiQB/ZgL9cz6UcMO5NTVIb+/OJn/dfPwAAQaMHDBA0AACCRtDoAUEjaIATsQ/WYOAV7uEAAAAASUVORK5CYII="

/***/ }),

/***/ "./static/images/route_details/arrive_end.png":
/*!****************************************************!*\
  !*** ./static/images/route_details/arrive_end.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/arrive_end-77325d563c8be356e2ca2d9e241b441b.png";

/***/ }),

/***/ "./static/images/route_details/arrive_left.png":
/*!*****************************************************!*\
  !*** ./static/images/route_details/arrive_left.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/arrive_left-d5e6257cda449e57d418b1d57bc7fe53.png";

/***/ }),

/***/ "./static/images/route_details/arrive_right.png":
/*!******************************************************!*\
  !*** ./static/images/route_details/arrive_right.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/arrive_right-e3214ed7b84d90c2b2e56d94f4b40390.png";

/***/ }),

/***/ "./static/images/route_details/arrive_start.png":
/*!******************************************************!*\
  !*** ./static/images/route_details/arrive_start.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/arrive_start-4c61298b91d04d56e30b53dbc208f4af.png";

/***/ }),

/***/ "./static/images/route_details/depart_left.png":
/*!*****************************************************!*\
  !*** ./static/images/route_details/depart_left.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/depart_left-9da129242838cfb6b6fc74e632882c32.png";

/***/ }),

/***/ "./static/images/route_details/depart_right.png":
/*!******************************************************!*\
  !*** ./static/images/route_details/depart_right.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/depart_right-e3214ed7b84d90c2b2e56d94f4b40390.png";

/***/ }),

/***/ "./static/images/route_details/go_straight.png":
/*!*****************************************************!*\
  !*** ./static/images/route_details/go_straight.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/go_straight-db3d46d2ed094be30a06cfb4323256ac.png";

/***/ }),

/***/ "./static/images/route_details/slight_left.png":
/*!*****************************************************!*\
  !*** ./static/images/route_details/slight_left.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/slight_left-48c5272057c43e6b8939bc260d812aca.png";

/***/ }),

/***/ "./static/images/route_details/slight_right.png":
/*!******************************************************!*\
  !*** ./static/images/route_details/slight_right.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/slight_right-74e190d0c8c7bd7b0b7a6dc223abf873.png";

/***/ }),

/***/ "./static/images/route_details/turn_left.png":
/*!***************************************************!*\
  !*** ./static/images/route_details/turn_left.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/turn_left-9323b916ffdb0ee3887ff9eb7cff03e1.png";

/***/ }),

/***/ "./static/images/route_details/turn_right.png":
/*!****************************************************!*\
  !*** ./static/images/route_details/turn_right.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/turn_right-919aec632864495d6438aeb4db8d38f9.png";

/***/ }),

/***/ "./static/images/route_details/turning.png":
/*!*************************************************!*\
  !*** ./static/images/route_details/turning.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/turning-49562b2b823cd613d8934bbbf691f46d.png";

/***/ }),

/***/ "./static/images/satellite.jpeg":
/*!**************************************!*\
  !*** ./static/images/satellite.jpeg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/satellite-99ecaa4d1d19a846999a9aef1b361e25.jpeg";

/***/ }),

/***/ "./static/images/signparkingsport.png":
/*!********************************************!*\
  !*** ./static/images/signparkingsport.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/images/six-dots.png":
/*!************************************!*\
  !*** ./static/images/six-dots.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAB8SURBVEiJ7dGxCQJBFEXRg7KpmYnYw4amJpZgH4pNWIdtbAPmWoORVqCogQYfkxlk2egfmOTC8AaGlIYyxx5NaAvs+hpY4oZpaBuc+hpIRS06TEJb41C6OKoceIXz29MwVrhgFtoW59LFceXA3edDOzy+7YkrjtXPTOkvb9bLErbhCTQWAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./static/images/start_location_grey800_18dp.png":
/*!*******************************************************!*\
  !*** ./static/images/start_location_grey800_18dp.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/images/straight_grey800_18dp.png":
/*!*************************************************!*\
  !*** ./static/images/straight_grey800_18dp.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAArUlEQVR4AezTAQaAQBAF0I7QETpG2pZvg47RzfcIHaEagK8BJhP+Z+CvHY+1wx+iKDP2yeY3mIqtl2fyUIRZsV02qSjGMCofk4ViTCqKMakoH9POGFQApqId/MuWp/sc5WHsjEHWeagQDICxovU3jAd6QxW0HvhkmAzFGA/EKMPYDutCUbzUBdE9AOPwfRxQdgQSSCCBBBJIoOAU3HMqALarG0AYxB5o94yCUQAAJ045jWyfXpgAAAAASUVORK5CYII="

/***/ }),

/***/ "./static/images/twitter.png":
/*!***********************************!*\
  !*** ./static/images/twitter.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/twitter-3e8e7ee8666a9f4e2946f39ff2f806e3.png";

/***/ }),

/***/ "./static/images/union.png":
/*!*********************************!*\
  !*** ./static/images/union.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/union-b002c3d6bc8904d32a704ddfb3c4c478.png";

/***/ }),

/***/ "./static/images/up-and-down.png":
/*!***************************************!*\
  !*** ./static/images/up-and-down.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/images/weather/ic_weather_cloud.png":
/*!****************************************************!*\
  !*** ./static/images/weather/ic_weather_cloud.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABJCAYAAACaRLDfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAtWSURBVHgB7Vp9jBZHGX9m97279z7kCkpoUY9SkDRKgk0Jf6gYSQzWfzRBL8QKIUSx/kGMaf2DVGouNabGxIhGkwZjiEkTIwnEVGuNbTFNTEwqxBRBDqGAnCAIXO7k4/3YnR2fZ2Zn52N33/c+4Eia/cGy++7OzM785nl+zzOzAFSoUKFChQoVKlSoUKFChQoVKlSosHBgMA9cuHDhod7e3o8FQfBB/Lk0ARBxuz0lhHg7juO3Vq1aNQ3vEsyJqKtXr34BT1/F4xOMsSG6J4T8F88CkiSh4xIer+Hzg9PT02+sXbu2TSUuX778ON7bhMcaIRgSnCzF23V6liQiYgxu4eX/OOfn8DiN5Y6sWLHiH3CfMSuicMAfarVav8DLjTiA7L7iSKhrIaxDPcXrm2EYnscfS7DeB5y6ImvB1E8fGNLFX6OIv/jIIysOYF0B9wEzJuratWu7sOM/xI6+p+i5bVHqdzoeJIXJE4M8QaqO247ItUdkcSKM8/Po0qOrV68+BguMYCaFrly5sgc7vL+MJAU9YEWGJkb+8UhSz/WRXmT3WfZct0f3AhZAEIYrgyA8eubMmWdhgdGVKNSUp7CjL3QqI0S5NzAGDhGFZbJ/Dcn6rOsrshiEtRDCsPa906dPd+zT3UZHoiYnJ0cwon1Xd5z40JxoakQnxWCGgm7wDMt9ZpqSFop9IrL2jI+PPwcLhI5EtdvtZ5CkpcZiBGQ6JLQe+UyZ37MNqUJ002mWERqG0hW/c+rUqc2wACgl6sSJE70ool/OiXMJFHf5MqyD2wnIR8nsGtxrv02GVtXb01Or1+u/Pnv27NfGxsZmpLdzRekoJiYmtmBIP0RmriPX7Fp2o10R4XZq4F676YI++8SxzMJk7yj/OofXMZZp4iTfxAT4OIbMP2LEfnP9+vURzAOdiHoBSdpDRLGCqNS1YcZKSfItzyfGTg3y6YIqR/0KAmo/sMlycjCVWtA5mcS0gib9+5i8noM5oNRc8SUjpuOieGZzLlNMkl3ffy6jWToZ+toQoARJDZir5FMkkg56pMoGbn2nnUBqGXrGkp6enl3Y5tnz58//CGVlCdwtorBTfdSxcpJMFq2dQU1qnqSZwMm1mHGpINUjKQGqX6D7pd9pk67bstu0iGNI2jcHBgaPoa6thlmgkwA2hGPCiUdUokrZOQOYMF5OEstZlJ9wssJygTyIOJmpc+4QZtfPnzVZOrUIH8a23sLE9TGYL1FRFF23Zy93YJmkICqZnKs4AhZJnDLEfOaun+o8Sh3KzeKYQ0xkeRMiTIsFbemIycglF2PZ3548efIjMAN00qi39axpshzSbLcU7vKlaKZnh+KAwSyXpDNOJvA4TgVbyYEl6eXtpG3Vwtr7MXF96dKlSwPQBaVETU1N/QEjRcJTM+c8yUjLyPMIoc7T/dkin7fmMicwg2bZIZAgsiwSep38uhNUNlnaHSlxDT+KuyJPQxeUErVhw4YrSNSfY5o1zk3UKbAwM+DO4u0sgYSbCrj5lL+7YDNpBw7AvsWFeuWmFWXIAsC3jx8/vrhTyY7ZbKPd+AGSlVqURVRKkj0Uu3N2Z707YGZdeLUzqnL3c7CMi9zOJqo497Ky/YK2cUeijtV3Qgd0JGr9Y+tfwShxA80TarUamamKGipyOPlL0Wzq3s5Er2ytsxfc8gBviSSMu9LwY09LDVnCtai0Qd+KQbog+xLMlShCX1/f33BfXBJFByZu2bUmj9mDLbjWv20Csnt+1EpZMVYnHBHLDRJPKKRSQ00m7pPl5n7mXtqAPLPHjx49+j4oQQ26AMnoI0J0vpNZvRVz9Uz6yxsZhZh7wycLnN8msdVnX9O0lRiNE1nmzhOydtm79LDb8eu59fFgSRKuweLXoQBdLQrda122VLCWBnYmXG5J7k6AQwy4gy0nSXgE6TbTe/iHljVSp3hicjtRlP+V5YTqD66nV5Tx0NGicHfzM3hapH+XLYj9dZxZXmRpeq6cU9/9J0eSMyBh9Ezlc2blQAdLWLYjakfOItJ0YJJtqKBQh7kQhRVHSYPMOLT4sezadzv/2iHMJscixr9XSJJNjrQiYayHBgkJ6mUCARKVyOzd1b08SS7BclmEgR7mQhQ2tMYXWzlw8xz859qi3C8uotM7vN82SVbky4hJMgtQ1pTuKOBfjjrFOMkDyGVK3ko1OZognn3hIdfFxfc1mAtRiId041oa/f0lPSu25TGwCEitz953h4IcqTT3kSQVa0uSWgZpk0ByQtIoxmV9JrT8+n01FqU+gSUyaaV8sdUU78BciEICBv0cyR+c3WmUeSvWpC7XQZ980rTwg2NNFjlJag3CLKEybcLnPAjA7NRkU5YFk6wNrU88XZ7hMgjXjVc2bdp4AeZClFBbqtmgJWlQ4npCd6loB8Gmr5gsm6AifdKWoFwvMdaUEkUMBeQ+qccFzE8RIHVTIetT3kWuGiuS6Pxz6ICORGEDE5hgrqRrSgm09thDzmY0TR18qPLC0YsiotR1MVHGXTQ5yt24zJ3Udou9bA7pdYF9RzgywS1risjlWi28zV+CeRB1HAf6SdIfTZK9IWa/XN+3ySpy22IXtC0qdTswoV8Ii6BEEZRoq4i53Grxg0dguaFu04lwXBEctdv4WS765RNPbP4nzIOoF/G0u4bLlrAk0dQvLSLGj34pFwD20rRUxIusydeWWFoECTE1oCeUypsJYxnpSRoxNUm0M9JsNv/VajWfhy5g3QocO3bsNXS/T9Myxs/KdcimWaHfuC5Uaz/GSpJTV6sKdYmuEhMgRKK3c1yXiTVJOFi0CFm2h9aivT20IZdZVCbkWsSxviap1Y6iZqO5ZXR0y++68dB1rddoNHagD/8dSVgidwzoYK5Z660YnSL4lgcuNSCE/1uYCAcmPzIJocl7SHyltuBA6cCxwp3bd9SmIS7epYXXOJjPbK7baYKxbtxuRd/YuvWLXUkidLUowpEjRz6OnXsFv8oOZzsGFhH0cjRhGB4ehv7+fmcLRr4kXU6obMHNmAFMwpotJyztk5bELV1JXS1KLQl3J+H27VtoSb1QR4smq67V6P2hsajESATyQ31tYps7tm9/8iDMEDMiinD48OE1+LLfYEceRVdkiqwg2/5Fq5ODGxkZAdqW8cnsJOxFyaWxJJ5lznEq3JF0mzbcuH4DLk5clC43ODgIg0OD+Jkdt4R6UtcDIw+qnrSmN3GR8/WdO3eOwywwY6IIBw8e7J2cnNyOg34GyXo0JOvCb0DSpHEgzUYDli9fDvg1Vu5b5fQqnWLbshy3E2ZPSbsa53lLIpKazcb4G6+/Po7lPz/8wANs0aJFMDgwqCwqDT4EaodcDYn6C77lud27dx+BsqTubhFlY2xs7MOsVlsnOP8cvvVBHvFhzqM6ukO8adOn+pYtW7aGyFKaVvyfybTrJU7mnWSim6Q5kiQJraGNBEmSGo0TcRx9dtu2bf8eHR1dgtjQW69vHezvX9nb1zeMRNVCFtzE19Hn8z9hm7/fu3fvf2AemDNRnYCWF6Je/XRgYOApnGFmNCtwNvL8lEC7ms6RYq6tCElC127i0Wo2X0aSdqDrTMEC4p4QRcCBs0OHDn1raGjoaSTrQRJbOxeTZVRBkytJLVHZdrr+klFNktRs/rfVaj+/a9dXfgb3AfeMKI0DvzrwcJ/oexYj5pN4DFAgcMjSa7DU7aQVRUaLGnfuTKN1/TiO2z9BfbkB9wn3nCiNffv2jfT3D21GL9yOrrgRtSSNTIoslS3HLGpT2G9Px0nyatSKXr51a/pV1MMFdbMiLBhRNnDgdUwh1uHle5G0xWhdPVGUtJMkoo39dyYmJi7u379/Xv/xq0KFChUqVKhQoUKFChUqVKhQYWHxf/8566uAZ94FAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./static/images/weather/ic_weather_few_clouds.png":
/*!*********************************************************!*\
  !*** ./static/images/weather/ic_weather_few_clouds.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/images/weather/ic_weather_night.png":
/*!****************************************************!*\
  !*** ./static/images/weather/ic_weather_night.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/images/weather/ic_weather_night_clouds.png":
/*!***********************************************************!*\
  !*** ./static/images/weather/ic_weather_night_clouds.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/images/weather/ic_weather_rain.png":
/*!***************************************************!*\
  !*** ./static/images/weather/ic_weather_rain.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABJCAYAAACaRLDfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA+vSURBVHgB7VsLcBXVGT67d+8jDxICiEXlJSrQDj6QGRRGKKCOStERJxQt2AoVbEXaUi0+RowlZsBWfETbCTIwvoqCVKUSZAyDYlHLEMooNIACCUnIO/fmvh/76P+f3bOvXJKb5AZh5v7DYXfvnj17znf+/zv//+8JIRnJSEYykpGMZCQjGcnIhSyKonBVVVWDGxsbh8K5QC5Q4Ug/SX19/VSHwzEfwLkZLn8ExSXLcjOU46Iobm5oaHhvypQpEXKBSNqBqqurG8w7HG/xHHc7x3EEC4BFFLinyAoBoKBIJJFInIKyZOzYsRXkApC0AoUgCYKwn+f5y+33KFhQZCySTCRJIqKYkACsFePGjXuFnOfCkzRJTU1NAZjaLtCgyxkolqLVw5kBJSM8z0FxoLx89OjR5eQ8l15p1JkzZ0bC4KeCFQ1xOh0caIcLBvwHuDVMBQZrGUd8DYKjm6GimiBqFZ47HAIUvhXuR+A6C0oD3PsauKx0zJgx35LzQHoEFAA0DQZTDOUm86BpQxzVFQoICgNMUWQVFCiImcpbRANLIbyDJ05BQO2y/K4CKSKXbezo6Hh84sSJLeQHlJSBglXqzzDIp4F/6LUdJI6zNmUmcAYWloQoaubHU2CcTictBvAMXIWSPmgVicbjB50Ox0zQrg7yA0lKHAUgPQMA6SCZJRlI2h2dj1RNUwu2IQGZA5FTMDrPldKpfQfHTwyFwq8dO3bs0tra2kHkB5BuNQr8oYnAP5VmQNjqxZ8VJKJrm5mTVHNiJiVS0LKzs0GjBFNXVNNjWsW4zeguba8DyiHgsc/D4fAr48ePbyP9LKkA9RUAdYMZEAsvcVzSRlgdVWsU3ZQQLFFUTQoBy8nJJS6X0zQJ6rMMoGQTwYDHI4CFC8CaESNGlEBdkfSTdAlUdXX1aOCPkzjzZm3CwszQOhBDK8x17VrFgELzQ37KycnR22HgdAWSuW2Tlp6CPpWBH4ekfxlETrM4ThkCbYRhIamGyh/BO/89evToatIPQN0HL36HdhrBsgHFVjrtX/LBqCeqRqE5gUugOpsiJXa8zs/PB/cAVj3wrRx09eNs5kYbsbTPSF+fAHQzoE+8Vqx1FaZ9Cvwri8UixRAR1JMeSJdkDg1PYCquyMbKZdUUWVvZDM/buGeAZNQjRoFr1K5YLEavESSz9uo4cezEAhcxV1KrcPrzRjHAA3+NEwT+IZfL/dXJkyfHknQBJZvAMRfaTRMgGsGq5/psK/qMW0DVCuMg1CTQWkroyVZVordpTJhinwzm1DLYdI00/DoNR/bO4XD5aVXVqVEkReky7QHm8S0bjJ0vzLPGTM0+PgagrN1HQNgsM+fS7DaYebDLo/YCM6mj4BxiX41OEru3ofWd+nHDeT72PlxOIilIlxoFQO2Ox+PoHdOirlTAMdrqlbywzhtmKkCI4na5KHELgpMORjUFBwUNR2TH2mziZjDpc7zZnByUP7Ee658+cUy7SXKwIBq4/vDhw78lfQVqwoQJTZFIZC9yCALGQMPo/+xASZY4TgXHYeIOYvKNjGt1XIaWqINJxjnsOaNQ4DStj8XiRJQkDWjaqq59xiJggAcg30v6ChRKKBR6EooCgBEGmEW7khS8hx11gRZZyVlnZuOSnZrAYiCdzZllP+t1EFANVJRoNKpNlJ3PFAt3UmqQlcn79h0YQ/oK1LRp0/b5fL5n/H4/CQQDCBwFS/WDkhfspNvtpibRWZROOFkSfJqpdS9c0jMKFrQRiahgMROWFavHrzCaUBRQeu7H3b0tpVjvtttuK25ra3u2paWVwJEEAgFiN0dW8FoQ1BUsibtoOVNn1UrgnKEuXXcqCfMYistRkLCPqjMqa3QhqefMSUWaUMHMId1Iqok7pbCwsKixueG+6prqE9+fOEHBQhXHzpgLgoUmpxK0dbXSG2NEYRuwOSNBzOf2zujtGsXckhqMa3wF3r+qWZKNRwE0jBDgHniMftKN9CjD+fBDD29ubWkdd+zo0Z9B2ndjIBgkEJSSKPAXgoZH5gKYwxgzCIrFz0oOUrLf7c8wjmGFObdWrVVIFCZPpQRJLZJ6ntBoIgEWAPzbTLqRlPNRyWTbtm0loD1P4MqGZIpdhOCU5OXlWci4c65KHYY588lWus71WaJPf9r4X7HHksbHC5bKwSyFE4Nu7b0sjKJggfYDlx2cPv2mSSS5F6FLn3Lm99xzz5PNzc1PNTY1BluBu7xerwpY0pUmmSff2cvXCzGA0Z8xRQBG2JTseSMetIddsiTrIKl0Ed9CugGpz0ChLF68uKThTMMENMXa2tNtRNMO60wzR9TqTRv3kizjSX4jytmXelkxQiSjPfWIwQ11ch3ooKqOquagVoti7O+pjLNPpmeXJUuWOFeuXFkLnbrY7CjaxTA9wzUwO5mdn0meQUCRde2STRkKWffnkNBzciE5CBEBNoP3UJuQU/3+wMszZkz/PUlB0va5CmX9+vXAkQmvZPLcpS69eOPDg/235MG0XUNlTfNkEz+Z22WrnaKFPg4aJeCCQwNxj+tQqmPrE1Af7to/vGjTJo/5Nykh7sfMJfPSjZBGBYT9ZvbkNV9GzytZBqyTtHLWOhagNf9IMr3DzI2EmiFPQyu3IAxIdax92jShOJTV0WbxNJyu0oFSxHI5Tu6nTqcWfyX9fKCRrRH3aWanKEnMz5oG0AmbGKRuSg2rZoeTpYVSxEzy6qu1dIvzWpKi9Fqj3t6xe2RCkn7JC45C4Cb999ZW7zZYTZqox46hjhYX6n4Mnls8+UTn7ISujdZA22rKTBOtMSb1k7CAWxCHImvA64TPgEVTJvKoVMfba41SZGEFzjNE7uNqY/kYVJ7A32fMmCHu27v3acnjWY9axVIpnOVLMTGtTizloaZMWO6LpZ7NHy8UU47L0g4zRUbiDCiYKI/Ho7kVoFkyZ7gMEs24dhu69AmoLVsOkwTvvRO5QRBcZICbmw0/6xstpk6b9npFRcUt0MlC6ozSFZAnzOtTP4zKejoG+QdJFkMfFid2zjqoIKmA2ZxMxeAnBhLVUGgbv0KjsE9fZvOEOilvO+oVUB3u9quzCT9KFCGli+PnhQn2OhALLoHQ4AoA6zoDLNN3Qe3zFTU/KHgnNzeXZGVl6Yk9qol8Eo6zgyQZoNOwBJ1J0CZsCzeDqHUlqp04QSIzU1E6TlKUXgEVDQXnZOXl0gFqy/Mwe527777bV1ZWNhvCmRcBqHmQduEYWEyjcGDIUeFImIQhfYMDu+SSS8Fc3Gzjhg1gHSqNb1S3QM0CyDpIaHIIMk4QDc6xDlH3Pqify0QKJLz7M5Ki9AqocEwc6AzHaMAZjQJpx+KuZPWWLl3aAIf5r7766g7QklUA1hg4cqqDqeipEAysvT6v4vN1nL72msTmoUOHPo7cYuc4HSbz5g/NHaALhQYSUsJA/ASmeeD4Hk5WnVNJczhj0WjNrFkzNpMUpVdABX3+qkg4Ap2KkWbIUQWDgUp7nVfKy8nyO+6g58uWLXsLDm8XFa2ezvPKTOjvTTCAi8FsBOi0D0zhk0Qs9lkiHvviwQcfTGzYsKECQN0IYI1A3tIJnmmjtnrZNQm1BK8HDsynIKMKUQ5UrNqEExyPRdeSHkhvQxju3keKng+HgrMDPl9VRw0/v7JyfYLdxIFs2Lpj0jdf7DpQWlpKeiPFxcXDgLMeAvN5xOV2F6AZOXj1QwSKkSFQV7cQaKUL6gwaNIgUFBRoexqcNL5DlmMchmCGQ5H35869q7AH3UlvrMekomL3xdVesfrTz/ZOfe+15w725NnHSl644y9P/rGcXa9bty6rvd1/OyjIXPiCMxLIeQjMA36T8gJIQ2HBGIXqMhDAGVQwiKZ4srOzACRDE2kATPkwjia3F366Zd68eXHSA+mX7cwtUddyIAXPgJychXCZMlAffLBz1JeHv//4zvsfuX77m6X/xd9WrFiBS/g/tWKRoqIij+AUXgcTXYCchqCoOSaOLhKctuIhf8VjcT/ce3nRol89A/W6TavYJa1BMUrZ9u1EVJQFyLhOwTUTUsgpPYcDao1Ef6fA6LLc7gWpPANARYtXr14IK+Y1/g7/223tbSeaW5oJ5MhIU1MTgfSP2NjQeKSpuWlNa2vz9YsXP7CqNyChpF2jckjO7WDQI+imCcExzp+Xhxu/2rt7bs+ePYI/EP25gDvw3J5ZpAdSUlLyDRwWYpoH+OkqOMfdyXEApQmONQCoTPooaQfKH07Myc9xQnCsgKcN34fFPNyQv8Vcp6hIgWKlx0AkPlviHMNwr5TT7R5/c+HK/Iqta3u0FRHTPHA4QvpB0m56sBD9JIGeb0KiG1idHD/EfH/Tnj3Ex71RYH+uriVQ6MRcEf387nHlDpBvJr2Up0temnznn9amnEJJRdIOFCy/AwLhKHjbUZpdlBUuZr5fEHdPLRgsfAzmYHnOGxJHy+hFQ1FDHjKY9EKA63h3Tt6mK3Lz7yJplLQD1d7uPd7S6iUt7T7S7vXGE9Hwl+xe2YEDxBcOF4OnfeOhat8o83NxUcwLReI0NSKCWkIeIanZLVlSlN3V+3fv/vS+UDQxnneSpSSNknagTtYdf+z40f+9e+K77z5sbW769Y73/lbF7uVWt18JrttPgbk4d/aA+ebn2r0du9p9HcTrD0BAHTwTl+JfJmv/yklXlf/mqRduONv7j9U0/8LjyQLn0zV5URrNL+1k/u6652rhkHSHSFiUFrm0bT/Z2TnXme/Vnj79LHx/C4rx+MhYLLp55zultfbnt5eXz6w6HZie5cnG2Ohr+/3Kyj1X7NlfOwPWEDBh3im4c3BPwX9IGuSc/f0c+kmv/eOTWzF65mlkL0xmOWyUjzY+H4BDUVdttHbEHnAI9LMT5r9W2e8fOVJ/YziuuLOyHUQUZOLiFNS8tACVdtM7m2zdutUFoexEuncJ07M8Pwyd6VSfP7i3/KJgVFpAtzI6hYkPrHhhuL1OvS8yQdY3pcHRwV1H0iTnTKPq2shFcpa6DTyubkZzRiIpbFrRpLI2NCUm8cA9WCCOExTQSGIxT18wnse7BMI5EmpuPSE5SJrknAF1KtHYOki6KBhxCLnBYIhAmubbnoQTgZA0xwFugyQrNKEHAF9qr+PzBw85PQpJYM4JE4KJ+L9ImuScmV7p8uWxhvra1SdPfO89XX2q3u9vfbQnz4diiasSGNzSHSky5ivd9jpla1aWNdTVPVdbXbOv4Uz9X99Y8+hWkibplzRLf8jjazeUCp6sZbgAhINh+CzWNvfNF5/4gJwjuWD+arw90P6S1MbNgakdGQmHKxNh5XNyDuWC0SiUq29dmDPY47zMk2io3rlzZ4xkJCMZyUhGMpKRjGTkvJf/AyBk9YGcEqkOAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./static/images/weather/ic_weather_rain_thunderstorm.png":
/*!****************************************************************!*\
  !*** ./static/images/weather/ic_weather_rain_thunderstorm.png ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/images/weather/ic_weather_snow.png":
/*!***************************************************!*\
  !*** ./static/images/weather/ic_weather_snow.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/images/weather/ic_weather_sunny.png":
/*!****************************************************!*\
  !*** ./static/images/weather/ic_weather_sunny.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/images/weather/ic_weather_wind.png":
/*!***************************************************!*\
  !*** ./static/images/weather/ic_weather_wind.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./translations/en.json":
/*!******************************!*\
  !*** ./translations/en.json ***!
  \******************************/
/*! exports provided: way, share, save, related_locations, search_placeholder, your_position, size_small, size_medium, size_big, size_custom, send_link, embed_map, link_to_share, copy_link, copy_to_climb, copy_html, size_preview, recently, search_input, search_input_drag_drop_top, search_input_drag_drop_top_mobile, search_input_drag_drop_top_tooltip, search_input_drag_drop_bottom, search_input_drag_drop_bottom_tooltip, search_drag_drop_tooltip, search_up_down, tooltip_location, Close_way, Tooltip_travel, Drive_web, Car_taxi, transport, best_icon_text, text_icon_hour, text_icon_second, location_content_text_i18search, text_icon_minute, result_select_i18_fast, result_select_i18_shortest, Options_for_route_i18, option, option_visible, option_distance-under, option_units_auto, option_units_miles, option_text_link, select_text_link, roadWay_text_1, roadWay_text_2, roadWay_text_detailtext, fontSmall_around_text, restaurant_text_i18, hotel_text_i18, Gas_Station_text_i18, parking_spot_text_i18, More_text_i18, Less_text_i18, bank_text_i18, bar_text_i18, cafe_text_i18, cart_text_i18, envelope_text_i18, hospital_text_i18, route_combeack_i18, route_mainroad_1_i18, route_mainroad_2_i18, route-siste_i18, search_button_i18, close_button_i18, results-title_button_i18, results-title_button_search_i18, results-title_button_text_1_i18, results-title_button_text_2_i18, results-title_button_text_3_i18, reuslt_button_directions_1, reuslt_button_directions_2, reuslt_button_directions_3, reuslt_button_directions_4, success_i18, success_i18_error, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"way\":\"Way\",\"share\":\"Share\",\"save\":\"Save\",\"related_locations\":\"Related locations\",\"search_placeholder\":\"Search on Goong Maps\",\"your_position\":\"Your position\",\"size_small\":\"Small\",\"size_medium\":\"Medium\",\"size_big\":\"Big\",\"size_custom\":\"Custom size\",\"send_link\":\"Send link\",\"embed_map\":\"Embed map\",\"link_to_share\":\"Link to share\",\"copy_link\":\"Copy link\",\"copy_to_climb\":\"Copied to climb\",\"copy_html\":\"Copy HTML\",\"size_preview\":\"Actual size preview\",\"recently\":\"Recently\",\"search_input\":\"Nearby Search! GO\",\"search_input_drag_drop_top\":\"Choose a starting point or click on the map\",\"search_input_drag_drop_top_mobile\":\"Choose a starting position\",\"search_input_drag_drop_top_tooltip\":\"Choose a starting point or click on the map...\",\"search_input_drag_drop_bottom\":\"Choose destination...\",\"search_input_drag_drop_bottom_tooltip\":\"Choose destination...\",\"search_drag_drop_tooltip\":\"Drag to rearrange\",\"search_up_down\":\"Reverse origin and destination\",\"tooltip_location\":\"Your location\",\"Close_way\":\"Close the path\",\"Tooltip_travel\":\"Best means transportation\",\"Drive_web\":\"Drive\",\"Car_taxi\":\"Taxi\",\"transport\":\"Motobike\",\"best_icon_text\":\"Best\",\"text_icon_hour\":\"hour\",\"text_icon_second\":\"s\",\"location_content_text_i18search\":\" Other recent searches\",\"text_icon_minute\":\" m\",\"result_select_i18_fast\":\"Fastest route\",\"result_select_i18_shortest\":\"Shortest path\",\"Options_for_route_i18\":\"Options for route\",\"option\":\"Option\",\"option_visible\":\"Close\",\"option_distance-under\":\"Distance Unit\",\"option_units_auto\":\"Automatic\",\"option_units_miles\":\"Miles\",\"option_text_link\":\"Copy link\",\"select_text_link\":\"Copy link\",\"roadWay_text_1\":\"Fastest\",\"roadWay_text_2\":\"Shortest\",\"roadWay_text_detailtext\":\"Details\",\"fontSmall_around_text\":\"Explore around\",\"restaurant_text_i18\":\"Restaurant\",\"hotel_text_i18\":\"Hotel\",\"Gas_Station_text_i18\":\"Gas Station\",\"parking_spot_text_i18\":\"Parking Spot\",\"More_text_i18\":\"More\",\"Less_text_i18\":\"Less\",\"bank_text_i18\":\"Bank\",\"bar_text_i18\":\"Bar\",\"cafe_text_i18\":\"Cafe\",\"cart_text_i18\":\"Grocery Store\",\"envelope_text_i18\":\"Post Office\",\"hospital_text_i18\":\"Hospital\",\"route_combeack_i18\":\"Go Back\",\"route_mainroad_1_i18\":\"from\",\"route_mainroad_2_i18\":\"to\",\"route-siste_i18\":\"Address not available\",\"search_button_i18\":\"Search\",\"close_button_i18\":\"Cancel Nearby Search\",\"results-title_button_i18\":\"Results\",\"results-title_button_search_i18\":\"Results for Searches\",\"results-title_button_text_1_i18\":\"If you search for an address or a specific location,\",\"results-title_button_text_2_i18\":\"Goong Map\",\"results-title_button_text_3_i18\":\"will show you local results around that area, combined to help find the best results for your search query.\",\"reuslt_button_directions_1\":\"Change Route\",\"reuslt_button_directions_2\":\"Stages\",\"reuslt_button_directions_3\":\"Share\",\"reuslt_button_directions_4\":\"Save\",\"success_i18\":\"The URL has been copied!\",\"success_i18_error\":\"Error copying URL\"}");

/***/ }),

/***/ "./translations/i18n_config.js":
/*!*************************************!*\
  !*** ./translations/i18n_config.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ "i18next");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(i18next__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _en_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./en.json */ "./translations/en.json");
var _en_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./en.json */ "./translations/en.json", 1);
/* harmony import */ var _vi_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vi.json */ "./translations/vi.json");
var _vi_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./vi.json */ "./translations/vi.json", 1);



// import { getLanguage } from '../utils/user-func'

i18next__WEBPACK_IMPORTED_MODULE_0___default.a.init({
  interpolation: {
    escapeValue: false
  },
  // lng: getLanguage() ? getLanguage() : 'en',
  lng: 'vi',
  resources: {
    en: {
      common: _en_json__WEBPACK_IMPORTED_MODULE_1__
    },
    vi: {
      common: _vi_json__WEBPACK_IMPORTED_MODULE_2__
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (i18next__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "./translations/vi.json":
/*!******************************!*\
  !*** ./translations/vi.json ***!
  \******************************/
/*! exports provided: way, share, save, related_locations, search_placeholder, your_position, size_small, size_medium, size_big, size_custom, send_link, embed_map, link_to_share, copy_link, copy_to_climb, copy_html, size_preview, recently, search_input, search_input_drag_drop_top, search_input_drag_drop_top_mobile, search_input_drag_drop_top_tooltip, search_input_drag_drop_bottom, search_input_drag_drop_bottom_tooltip, search_drag_drop_tooltip, search_up_down, tooltip_location, Close_way, Tooltip_travel, Car_taxi, Drive_web, transport, best_icon_text, location_content_text_i18search, text_icon_hour, text_icon_minute, Options_for_route_i18, option, option_visible, option_distance-under, option_units_auto, option_units_miles, option_text_link, text_icon_second, select_text_link, roadWay_text_1, roadWay_text_2, roadWay_text_detailtext, fontSmall_around_text, restaurant_text_i18, hotel_text_i18, Gas_Station_text_i18, parking_spot_text_i18, More_text_i18, Less_text_i18, bank_text_i18, bar_text_i18, cafe_text_i18, cart_text_i18, envelope_text_i18, hospital_text_i18, route_combeack_i18, route_mainroad_1_i18, route_mainroad_2_i18, route-siste_i18, search_button_i18, close_button_i18, results-title_button_i18, results-title_button_search_i18, results-title_button_text_1_i18, results-title_button_text_2_i18, results-title_button_text_3_i18, result_select_i18_fast, result_select_i18_shortest, reuslt_button_directions_1, reuslt_button_directions_2, reuslt_button_directions_3, reuslt_button_directions_4, success_i18, success_i18_error, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"way\":\"Đường đi\",\"share\":\"Chia sẻ\",\"save\":\"Lưu\",\"related_locations\":\"Địa điểm liên quan\",\"search_placeholder\":\"Tìm kiếm trên Goong Maps\",\"your_position\":\"Vị trí của bạn\",\"size_small\":\"Nhỏ\",\"size_medium\":\"Trung bình\",\"size_big\":\"Lớn\",\"size_custom\":\"Chọn kích thước\",\"send_link\":\"Gửi liên kết\",\"embed_map\":\"Nhúng bản đồ\",\"link_to_share\":\"Liên kết để chia sẻ\",\"copy_link\":\"Sao chép đường liên kết\",\"copy_to_climb\":\"Đã sao chép vào bảng nhớ tạm\",\"copy_html\":\"Sao chép HTML\",\"size_preview\":\"Xem kích thước thực\",\"recently\":\"Gần đây\",\"search_input\":\"Tìm kiếm lân cận! GO\",\"search_input_drag_drop_top\":\"Chọn điểm bắt đầu hoặc nhấp vào bản đồ\",\"search_input_drag_drop_top_mobile\":\"Chọn vị trí bắt đầu\",\"search_input_drag_drop_top_tooltip\":\"Chọn điểm bắt đầu hoặc nhấp vào bản đồ...\",\"search_input_drag_drop_bottom\":\"Chọn điểm đến...\",\"search_input_drag_drop_bottom_tooltip\":\"Chọn điểm đến...\",\"search_drag_drop_tooltip\":\"Kéo để sắp xếp lại\",\"search_up_down\":\"   Đảo ngược điểm xuất phát và điểm đến\",\"tooltip_location\":\"Vị trí của bạn\",\"Close_way\":\"Đóng đường đi\",\"Tooltip_travel\":\"Phương tiện đi lại tốt nhất\",\"Car_taxi\":\"Xe Taxi\",\"Drive_web\":\"Lái Xe\",\"transport\":\"Xe Máy\",\"best_icon_text\":\"Tốt nhất\",\"location_content_text_i18search\":\" Nội dung tìm kiếm khác gần đây\",\"text_icon_hour\":\"giờ\",\"text_icon_minute\":\" p\",\"Options_for_route_i18\":\"Lựa chọn cho tuyến đường\",\"option\":\"Tùy Chọn\",\"option_visible\":\"Đóng\",\"option_distance-under\":\" Đơn vị khoảng cách\",\"option_units_auto\":\"Tự động\",\"option_units_miles\":\"dặm\",\"option_text_link\":\"Sao chép đường liên kết\",\"text_icon_second\":\"p\",\"select_text_link\":\"Sao chép đường liên kết\",\"roadWay_text_1\":\"Nhanh nhất\",\"roadWay_text_2\":\"Ngắn nhất\",\"roadWay_text_detailtext\":\"Chi tiết\",\"fontSmall_around_text\":\"Khám phá xung quanh\",\"restaurant_text_i18\":\"Nhà hàng\",\"hotel_text_i18\":\"Khách sạn\",\"Gas_Station_text_i18\":\"Trạm xăng\",\"parking_spot_text_i18\":\"Điểm đỗ xe\",\"More_text_i18\":\"Thêm\",\"Less_text_i18\":\"Ít hơn\",\"bank_text_i18\":\"Ngân hàng\",\"bar_text_i18\":\"Quán bar\",\"cafe_text_i18\":\"Quán cà phê\",\"cart_text_i18\":\"Quán tạp hóa\",\"envelope_text_i18\":\"Bưu điện\",\"hospital_text_i18\":\"Bệnh viện\",\"route_combeack_i18\":\"Quay lại\",\"route_mainroad_1_i18\":\"từ\",\"route_mainroad_2_i18\":\"đến\",\"route-siste_i18\":\"Địa chỉ không có sẵn\",\"search_button_i18\":\"Tìm kiếm\",\"close_button_i18\":\"Hủy tìm kiếm lân cận\",\"results-title_button_i18\":\"Kết quả\",\"results-title_button_search_i18\":\"Kết quả cho các tìm kiếm\",\"results-title_button_text_1_i18\":\" Nếu bạn tìm kiếm địa chỉ hoặc một vị trí nào đó,\",\"results-title_button_text_2_i18\":\"Goong Map\",\"results-title_button_text_3_i18\":\"sẽ hiển thị cho bạn kết quả tại địa phương xung quanh đó, kết quả được kết hợp để giúp tìm ra kết quả tốt nhất cho nội dung tìm kiếm của chúng tôi cho bạn.\",\"result_select_i18_fast\":\"Đường đi nhanh nhất\",\"result_select_i18_shortest\":\"Đường đi ngắn nhất\",\"reuslt_button_directions_1\":\"Đổi tuyến\",\"reuslt_button_directions_2\":\"Các chặng\",\"reuslt_button_directions_3\":\"Chia sẻ\",\"reuslt_button_directions_4\":\"Lưu\",\"success_i18\":\"URL đã được sao chép!\",\"success_i18_error\":\"Lỗi khi sao chép URL\"}");

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

/***/ "./utils/image_type_location.js":
/*!**************************************!*\
  !*** ./utils/image_type_location.js ***!
  \**************************************/
/*! exports provided: getImageByType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageByType", function() { return getImageByType; });
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images */ "./utils/images.js");

function getImageByType(image) {
  switch (image) {
    case "village":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].village;
    case "commune":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].commune;
    case "district":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].dicstrict;
    case "province":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].province;
    case "alley":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].alley;
    case "street":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].street;
    case "auto_showroom":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].auto_showroom;
    case "parking":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].parking;
    case "gas_station":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].gas_station;
    case "auto_repair":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].auto_repair;
    case "atm":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].atm;
    case "bank":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].bank;
    case "convention_center":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].convention_center;
    case "exhibition_center":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].exhibition_center;
    case "industrial_park":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].industrial_park;
    case "company":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].company;
    case "primary_school":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].primary_school;
    case "secondary_school":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].secondary_school;
    case "high_school":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].high_school;
    case "university":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].university;
    case "vocational_training":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].vocational_training;
    case "training_center":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].training_center;
    case "pre_school":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].pre_school;
    case "research_institute":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].research_institute;
    case "college":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].college;
    case "inter_level_school":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].inter_level_school;
    case "pharmacy":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].pharmacy;
    case "dentist":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].dentist;
    case "hospital":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].hospital;
    case "fire_station":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].fire_station;
    case "police":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].police;
    case "clinic":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].clinic;
    case "art":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].art;
    case "museum":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].museum;
    case "theatre":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].theatre;
    case "culture":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].culture;
    case "cinema":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].cinema;
    case "zoo":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].zoo;
    case "tv_radio":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].tv_radio;
    case "karaoke":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].karaoke;
    case "bar":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].bar;
    case "restaurant":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].restaurant_type;
    case "cafe":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].cafe;
    case "state_agencie":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].state_agencie;
    case "court":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].court;
    case "military":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].military;
    case "prison":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].prison;
    case "central_authority":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].central_authority;
    case "embassy":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].embassy;
    case "goverment":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].goverment;
    case "international_agency":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].international_agency;
    case "agency_of_the_ministry":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].agency_of_the_ministry;
    case "treasury":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].treasury;
    case "hotel":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].hotel_type;
    case "motel":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].motel;
    case "motel_room":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].motel_room;
    case "tennis":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].tennis;
    case "swimming_pool":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].swimming_pool;
    case "stadium":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].stadium;
    case "spa":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].spa;
    case "park":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].park;
    case "golf":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].golf;
    case "beach":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].beach;
    case "gymnasium":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].gymnasium;
    case "library,book_store":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].book_store;
    case "airport_ticket_agency":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].airport_ticket_agency;
    case "post_office":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].post_office;
    case "building":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].building;
    case "commercial_center":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].commercial_center;
    case "grocery_store":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].grocery_store;
    case "supermarket":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].supermarket;
    case "market":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].market;
    case "site":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].site;
    case "church":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].church;
    case "monument":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].monument;
    case "pagoda":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].pagoda;
    case "cemetery":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].cemetery;
    case "train_station":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].train_station;
    case "gate":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].gate;
    case "port":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].port;
    case "station":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].station;
    case "airport":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].airport;
    case "charging_station":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].charging_station;
    case "camera":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].camera;
    case "traffic_light":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].traffic_light;
    case "forest":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].forest;
    case "house_number":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].house_number;
    case "":
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].no_type;
    default:
      return _images__WEBPACK_IMPORTED_MODULE_0__["default"].no_type;
  }
}

/***/ }),

/***/ "./utils/images.js":
/*!*************************!*\
  !*** ./utils/images.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _static_images_road_1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../static/images/road_1.png */ "./static/images/road_1.png");
/* harmony import */ var _static_images_road_1_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_static_images_road_1_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_images_road_2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../static/images/road_2.png */ "./static/images/road_2.png");
/* harmony import */ var _static_images_road_2_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_static_images_road_2_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_images_road_3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static/images/road_3.png */ "./static/images/road_3.png");
/* harmony import */ var _static_images_road_3_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_images_road_3_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_images_road_4_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/images/road_4.png */ "./static/images/road_4.png");
/* harmony import */ var _static_images_road_4_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_images_road_4_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_images_road_5_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/images/road_5.png */ "./static/images/road_5.png");
/* harmony import */ var _static_images_road_5_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_images_road_5_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _static_images_road_6_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static/images/road_6.png */ "./static/images/road_6.png");
/* harmony import */ var _static_images_road_6_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_images_road_6_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _static_images_arrow_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../static/images/arrow.png */ "./static/images/arrow.png");
/* harmony import */ var _static_images_arrow_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_images_arrow_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _static_images_background_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../static/images/background.png */ "./static/images/background.png");
/* harmony import */ var _static_images_background_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_images_background_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _static_images_clock_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../static/images/clock.png */ "./static/images/clock.png");
/* harmony import */ var _static_images_clock_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_static_images_clock_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _static_images_cross_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../static/images/cross.png */ "./static/images/cross.png");
/* harmony import */ var _static_images_cross_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_static_images_cross_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _static_images_gmail_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../static/images/gmail.png */ "./static/images/gmail.png");
/* harmony import */ var _static_images_gmail_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_static_images_gmail_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _static_images_goong_logo_mini_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../static/images/goong-logo-mini.png */ "./static/images/goong-logo-mini.png");
/* harmony import */ var _static_images_goong_logo_mini_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_static_images_goong_logo_mini_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _static_images_hotel_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../static/images/hotel.png */ "./static/images/hotel.png");
/* harmony import */ var _static_images_hotel_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_static_images_hotel_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _static_images_ic_directions_filled_blue900_24px_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../static/images/ic_directions_filled_blue900_24px.png */ "./static/images/ic_directions_filled_blue900_24px.png");
/* harmony import */ var _static_images_ic_directions_filled_blue900_24px_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_static_images_ic_directions_filled_blue900_24px_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _static_images_location_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../static/images/location.png */ "./static/images/location.png");
/* harmony import */ var _static_images_location_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _static_images_more_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../static/images/more.png */ "./static/images/more.png");
/* harmony import */ var _static_images_more_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_static_images_more_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _static_images_normal_map_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../static/images/normal_map.png */ "./static/images/normal_map.png");
/* harmony import */ var _static_images_normal_map_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_static_images_normal_map_png__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _static_images_petro_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../static/images/petro.png */ "./static/images/petro.png");
/* harmony import */ var _static_images_petro_png__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_static_images_petro_png__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _static_images_place_outline_red600_18dp_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../static/images/place_outline_red600_18dp.png */ "./static/images/place_outline_red600_18dp.png");
/* harmony import */ var _static_images_place_outline_red600_18dp_png__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_static_images_place_outline_red600_18dp_png__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _static_images_restaurant_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../static/images/restaurant.png */ "./static/images/restaurant.png");
/* harmony import */ var _static_images_restaurant_png__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_static_images_restaurant_png__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _static_images_route_3dots_grey650_24dp_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../static/images/route_3dots_grey650_24dp.png */ "./static/images/route_3dots_grey650_24dp.png");
/* harmony import */ var _static_images_route_3dots_grey650_24dp_png__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_static_images_route_3dots_grey650_24dp_png__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _static_images_satellite_jpeg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../static/images/satellite.jpeg */ "./static/images/satellite.jpeg");
/* harmony import */ var _static_images_satellite_jpeg__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_static_images_satellite_jpeg__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _static_images_signparkingsport_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../static/images/signparkingsport.png */ "./static/images/signparkingsport.png");
/* harmony import */ var _static_images_signparkingsport_png__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_static_images_signparkingsport_png__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _static_images_six_dots_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../static/images/six-dots.png */ "./static/images/six-dots.png");
/* harmony import */ var _static_images_six_dots_png__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_static_images_six_dots_png__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _static_images_start_location_grey800_18dp_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../static/images/start_location_grey800_18dp.png */ "./static/images/start_location_grey800_18dp.png");
/* harmony import */ var _static_images_start_location_grey800_18dp_png__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_static_images_start_location_grey800_18dp_png__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _static_images_straight_grey800_18dp_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../static/images/straight_grey800_18dp.png */ "./static/images/straight_grey800_18dp.png");
/* harmony import */ var _static_images_straight_grey800_18dp_png__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_static_images_straight_grey800_18dp_png__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _static_images_twitter_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../static/images/twitter.png */ "./static/images/twitter.png");
/* harmony import */ var _static_images_twitter_png__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_static_images_twitter_png__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _static_images_union_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../static/images/union.png */ "./static/images/union.png");
/* harmony import */ var _static_images_union_png__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_static_images_union_png__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _static_images_up_and_down_png__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../static/images/up-and-down.png */ "./static/images/up-and-down.png");
/* harmony import */ var _static_images_up_and_down_png__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_static_images_up_and_down_png__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _static_images_location_type_alley_png__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../static/images/location_type/alley.png */ "./static/images/location_type/alley.png");
/* harmony import */ var _static_images_location_type_alley_png__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_alley_png__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _static_images_location_type_art_png__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../static/images/location_type/art.png */ "./static/images/location_type/art.png");
/* harmony import */ var _static_images_location_type_art_png__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_art_png__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _static_images_location_type_atm_png__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../static/images/location_type/atm.png */ "./static/images/location_type/atm.png");
/* harmony import */ var _static_images_location_type_atm_png__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_atm_png__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _static_images_location_type_auto_repair_png__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../static/images/location_type/auto_repair.png */ "./static/images/location_type/auto_repair.png");
/* harmony import */ var _static_images_location_type_auto_repair_png__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_auto_repair_png__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _static_images_location_type_auto_showroom_png__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../static/images/location_type/auto_showroom.png */ "./static/images/location_type/auto_showroom.png");
/* harmony import */ var _static_images_location_type_auto_showroom_png__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_auto_showroom_png__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _static_images_location_type_bank_png__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../static/images/location_type/bank.png */ "./static/images/location_type/bank.png");
/* harmony import */ var _static_images_location_type_bank_png__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_bank_png__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _static_images_location_type_cinema_png__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../static/images/location_type/cinema.png */ "./static/images/location_type/cinema.png");
/* harmony import */ var _static_images_location_type_cinema_png__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_cinema_png__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _static_images_location_type_clinic_png__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../static/images/location_type/clinic.png */ "./static/images/location_type/clinic.png");
/* harmony import */ var _static_images_location_type_clinic_png__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_clinic_png__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _static_images_location_type_college_png__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../static/images/location_type/college.png */ "./static/images/location_type/college.png");
/* harmony import */ var _static_images_location_type_college_png__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_college_png__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var _static_images_location_type_commune_png__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../static/images/location_type/commune.png */ "./static/images/location_type/commune.png");
/* harmony import */ var _static_images_location_type_commune_png__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_commune_png__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var _static_images_location_type_company_png__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../static/images/location_type/company.png */ "./static/images/location_type/company.png");
/* harmony import */ var _static_images_location_type_company_png__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_company_png__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var _static_images_location_type_convention_center_png__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../static/images/location_type/convention_center.png */ "./static/images/location_type/convention_center.png");
/* harmony import */ var _static_images_location_type_convention_center_png__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_convention_center_png__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var _static_images_location_type_culture_png__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../static/images/location_type/culture.png */ "./static/images/location_type/culture.png");
/* harmony import */ var _static_images_location_type_culture_png__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_culture_png__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var _static_images_location_type_dentist_png__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../static/images/location_type/dentist.png */ "./static/images/location_type/dentist.png");
/* harmony import */ var _static_images_location_type_dentist_png__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_dentist_png__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var _static_images_location_type_dicstrict_png__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../static/images/location_type/dicstrict.png */ "./static/images/location_type/dicstrict.png");
/* harmony import */ var _static_images_location_type_dicstrict_png__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_dicstrict_png__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var _static_images_location_type_exhibition_center_png__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../static/images/location_type/exhibition_center.png */ "./static/images/location_type/exhibition_center.png");
/* harmony import */ var _static_images_location_type_exhibition_center_png__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_exhibition_center_png__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var _static_images_location_type_fire_station_png__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../static/images/location_type/fire_station.png */ "./static/images/location_type/fire_station.png");
/* harmony import */ var _static_images_location_type_fire_station_png__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_fire_station_png__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var _static_images_location_type_gas_station_png__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../static/images/location_type/gas_station.png */ "./static/images/location_type/gas_station.png");
/* harmony import */ var _static_images_location_type_gas_station_png__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_gas_station_png__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var _static_images_location_type_high_school_png__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../static/images/location_type/high_school.png */ "./static/images/location_type/high_school.png");
/* harmony import */ var _static_images_location_type_high_school_png__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_high_school_png__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var _static_images_location_type_hospital_png__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../static/images/location_type/hospital.png */ "./static/images/location_type/hospital.png");
/* harmony import */ var _static_images_location_type_hospital_png__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_hospital_png__WEBPACK_IMPORTED_MODULE_48__);
/* harmony import */ var _static_images_location_type_industrial_park_png__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../static/images/location_type/industrial_park.png */ "./static/images/location_type/industrial_park.png");
/* harmony import */ var _static_images_location_type_industrial_park_png__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_industrial_park_png__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var _static_images_location_type_inter_level_school_png__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../static/images/location_type/inter_level_school.png */ "./static/images/location_type/inter_level_school.png");
/* harmony import */ var _static_images_location_type_inter_level_school_png__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_inter_level_school_png__WEBPACK_IMPORTED_MODULE_50__);
/* harmony import */ var _static_images_location_type_museum_png__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../static/images/location_type/museum.png */ "./static/images/location_type/museum.png");
/* harmony import */ var _static_images_location_type_museum_png__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_museum_png__WEBPACK_IMPORTED_MODULE_51__);
/* harmony import */ var _static_images_location_type_parking_png__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../static/images/location_type/parking.png */ "./static/images/location_type/parking.png");
/* harmony import */ var _static_images_location_type_parking_png__WEBPACK_IMPORTED_MODULE_52___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_parking_png__WEBPACK_IMPORTED_MODULE_52__);
/* harmony import */ var _static_images_location_type_pharmacy_png__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../static/images/location_type/pharmacy.png */ "./static/images/location_type/pharmacy.png");
/* harmony import */ var _static_images_location_type_pharmacy_png__WEBPACK_IMPORTED_MODULE_53___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_pharmacy_png__WEBPACK_IMPORTED_MODULE_53__);
/* harmony import */ var _static_images_location_type_police_png__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ../static/images/location_type/police.png */ "./static/images/location_type/police.png");
/* harmony import */ var _static_images_location_type_police_png__WEBPACK_IMPORTED_MODULE_54___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_police_png__WEBPACK_IMPORTED_MODULE_54__);
/* harmony import */ var _static_images_location_type_pre_school_png__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ../static/images/location_type/pre_school.png */ "./static/images/location_type/pre_school.png");
/* harmony import */ var _static_images_location_type_pre_school_png__WEBPACK_IMPORTED_MODULE_55___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_pre_school_png__WEBPACK_IMPORTED_MODULE_55__);
/* harmony import */ var _static_images_location_type_primary_school_png__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ../static/images/location_type/primary_school.png */ "./static/images/location_type/primary_school.png");
/* harmony import */ var _static_images_location_type_primary_school_png__WEBPACK_IMPORTED_MODULE_56___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_primary_school_png__WEBPACK_IMPORTED_MODULE_56__);
/* harmony import */ var _static_images_location_type_province_png__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ../static/images/location_type/province.png */ "./static/images/location_type/province.png");
/* harmony import */ var _static_images_location_type_province_png__WEBPACK_IMPORTED_MODULE_57___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_province_png__WEBPACK_IMPORTED_MODULE_57__);
/* harmony import */ var _static_images_location_type_research_institute_png__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ../static/images/location_type/research_institute.png */ "./static/images/location_type/research_institute.png");
/* harmony import */ var _static_images_location_type_research_institute_png__WEBPACK_IMPORTED_MODULE_58___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_research_institute_png__WEBPACK_IMPORTED_MODULE_58__);
/* harmony import */ var _static_images_location_type_secondary_school_png__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ../static/images/location_type/secondary_school.png */ "./static/images/location_type/secondary_school.png");
/* harmony import */ var _static_images_location_type_secondary_school_png__WEBPACK_IMPORTED_MODULE_59___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_secondary_school_png__WEBPACK_IMPORTED_MODULE_59__);
/* harmony import */ var _static_images_location_type_street_png__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ../static/images/location_type/street.png */ "./static/images/location_type/street.png");
/* harmony import */ var _static_images_location_type_street_png__WEBPACK_IMPORTED_MODULE_60___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_street_png__WEBPACK_IMPORTED_MODULE_60__);
/* harmony import */ var _static_images_location_type_theatre_png__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ../static/images/location_type/theatre.png */ "./static/images/location_type/theatre.png");
/* harmony import */ var _static_images_location_type_theatre_png__WEBPACK_IMPORTED_MODULE_61___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_theatre_png__WEBPACK_IMPORTED_MODULE_61__);
/* harmony import */ var _static_images_location_type_training_center_png__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ../static/images/location_type/training_center.png */ "./static/images/location_type/training_center.png");
/* harmony import */ var _static_images_location_type_training_center_png__WEBPACK_IMPORTED_MODULE_62___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_training_center_png__WEBPACK_IMPORTED_MODULE_62__);
/* harmony import */ var _static_images_location_type_university_png__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ../static/images/location_type/university.png */ "./static/images/location_type/university.png");
/* harmony import */ var _static_images_location_type_university_png__WEBPACK_IMPORTED_MODULE_63___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_university_png__WEBPACK_IMPORTED_MODULE_63__);
/* harmony import */ var _static_images_location_type_village_png__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ../static/images/location_type/village.png */ "./static/images/location_type/village.png");
/* harmony import */ var _static_images_location_type_village_png__WEBPACK_IMPORTED_MODULE_64___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_village_png__WEBPACK_IMPORTED_MODULE_64__);
/* harmony import */ var _static_images_location_type_vocational_training_png__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ../static/images/location_type/vocational_training.png */ "./static/images/location_type/vocational_training.png");
/* harmony import */ var _static_images_location_type_vocational_training_png__WEBPACK_IMPORTED_MODULE_65___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_vocational_training_png__WEBPACK_IMPORTED_MODULE_65__);
/* harmony import */ var _static_images_location_type_zoo_png__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ../static/images/location_type/zoo.png */ "./static/images/location_type/zoo.png");
/* harmony import */ var _static_images_location_type_zoo_png__WEBPACK_IMPORTED_MODULE_66___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_zoo_png__WEBPACK_IMPORTED_MODULE_66__);
/* harmony import */ var _static_images_location_type_agency_of_the_ministry_png__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ../static/images/location_type/agency_of_the_ministry.png */ "./static/images/location_type/agency_of_the_ministry.png");
/* harmony import */ var _static_images_location_type_agency_of_the_ministry_png__WEBPACK_IMPORTED_MODULE_67___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_agency_of_the_ministry_png__WEBPACK_IMPORTED_MODULE_67__);
/* harmony import */ var _static_images_location_type_airport_ticket_agency_png__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ../static/images/location_type/airport_ticket_agency.png */ "./static/images/location_type/airport_ticket_agency.png");
/* harmony import */ var _static_images_location_type_airport_ticket_agency_png__WEBPACK_IMPORTED_MODULE_68___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_airport_ticket_agency_png__WEBPACK_IMPORTED_MODULE_68__);
/* harmony import */ var _static_images_location_type_airport_png__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ../static/images/location_type/airport.png */ "./static/images/location_type/airport.png");
/* harmony import */ var _static_images_location_type_airport_png__WEBPACK_IMPORTED_MODULE_69___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_airport_png__WEBPACK_IMPORTED_MODULE_69__);
/* harmony import */ var _static_images_location_type_bar_png__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ../static/images/location_type/bar.png */ "./static/images/location_type/bar.png");
/* harmony import */ var _static_images_location_type_bar_png__WEBPACK_IMPORTED_MODULE_70___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_bar_png__WEBPACK_IMPORTED_MODULE_70__);
/* harmony import */ var _static_images_location_type_beach_png__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ../static/images/location_type/beach.png */ "./static/images/location_type/beach.png");
/* harmony import */ var _static_images_location_type_beach_png__WEBPACK_IMPORTED_MODULE_71___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_beach_png__WEBPACK_IMPORTED_MODULE_71__);
/* harmony import */ var _static_images_location_type_book_store_png__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ../static/images/location_type/book_store.png */ "./static/images/location_type/book_store.png");
/* harmony import */ var _static_images_location_type_book_store_png__WEBPACK_IMPORTED_MODULE_72___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_book_store_png__WEBPACK_IMPORTED_MODULE_72__);
/* harmony import */ var _static_images_location_type_building_png__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ../static/images/location_type/building.png */ "./static/images/location_type/building.png");
/* harmony import */ var _static_images_location_type_building_png__WEBPACK_IMPORTED_MODULE_73___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_building_png__WEBPACK_IMPORTED_MODULE_73__);
/* harmony import */ var _static_images_location_type_cafe_png__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ../static/images/location_type/cafe.png */ "./static/images/location_type/cafe.png");
/* harmony import */ var _static_images_location_type_cafe_png__WEBPACK_IMPORTED_MODULE_74___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_cafe_png__WEBPACK_IMPORTED_MODULE_74__);
/* harmony import */ var _static_images_location_type_camera_png__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ../static/images/location_type/camera.png */ "./static/images/location_type/camera.png");
/* harmony import */ var _static_images_location_type_camera_png__WEBPACK_IMPORTED_MODULE_75___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_camera_png__WEBPACK_IMPORTED_MODULE_75__);
/* harmony import */ var _static_images_location_type_cemetery_png__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ../static/images/location_type/cemetery.png */ "./static/images/location_type/cemetery.png");
/* harmony import */ var _static_images_location_type_cemetery_png__WEBPACK_IMPORTED_MODULE_76___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_cemetery_png__WEBPACK_IMPORTED_MODULE_76__);
/* harmony import */ var _static_images_location_type_central_authority_png__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ../static/images/location_type/central_authority.png */ "./static/images/location_type/central_authority.png");
/* harmony import */ var _static_images_location_type_central_authority_png__WEBPACK_IMPORTED_MODULE_77___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_central_authority_png__WEBPACK_IMPORTED_MODULE_77__);
/* harmony import */ var _static_images_location_type_charging_station_png__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ../static/images/location_type/charging_station.png */ "./static/images/location_type/charging_station.png");
/* harmony import */ var _static_images_location_type_charging_station_png__WEBPACK_IMPORTED_MODULE_78___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_charging_station_png__WEBPACK_IMPORTED_MODULE_78__);
/* harmony import */ var _static_images_location_type_church_png__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ../static/images/location_type/church.png */ "./static/images/location_type/church.png");
/* harmony import */ var _static_images_location_type_church_png__WEBPACK_IMPORTED_MODULE_79___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_church_png__WEBPACK_IMPORTED_MODULE_79__);
/* harmony import */ var _static_images_location_type_commercial_center_png__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ../static/images/location_type/commercial_center.png */ "./static/images/location_type/commercial_center.png");
/* harmony import */ var _static_images_location_type_commercial_center_png__WEBPACK_IMPORTED_MODULE_80___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_commercial_center_png__WEBPACK_IMPORTED_MODULE_80__);
/* harmony import */ var _static_images_location_type_court_png__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ../static/images/location_type/court.png */ "./static/images/location_type/court.png");
/* harmony import */ var _static_images_location_type_court_png__WEBPACK_IMPORTED_MODULE_81___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_court_png__WEBPACK_IMPORTED_MODULE_81__);
/* harmony import */ var _static_images_location_type_embassy_png__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ../static/images/location_type/embassy.png */ "./static/images/location_type/embassy.png");
/* harmony import */ var _static_images_location_type_embassy_png__WEBPACK_IMPORTED_MODULE_82___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_embassy_png__WEBPACK_IMPORTED_MODULE_82__);
/* harmony import */ var _static_images_location_type_forest_png__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ../static/images/location_type/forest.png */ "./static/images/location_type/forest.png");
/* harmony import */ var _static_images_location_type_forest_png__WEBPACK_IMPORTED_MODULE_83___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_forest_png__WEBPACK_IMPORTED_MODULE_83__);
/* harmony import */ var _static_images_location_type_gate_png__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ../static/images/location_type/gate.png */ "./static/images/location_type/gate.png");
/* harmony import */ var _static_images_location_type_gate_png__WEBPACK_IMPORTED_MODULE_84___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_gate_png__WEBPACK_IMPORTED_MODULE_84__);
/* harmony import */ var _static_images_location_type_golf_png__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ../static/images/location_type/golf.png */ "./static/images/location_type/golf.png");
/* harmony import */ var _static_images_location_type_golf_png__WEBPACK_IMPORTED_MODULE_85___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_golf_png__WEBPACK_IMPORTED_MODULE_85__);
/* harmony import */ var _static_images_location_type_goverment_png__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ../static/images/location_type/goverment.png */ "./static/images/location_type/goverment.png");
/* harmony import */ var _static_images_location_type_goverment_png__WEBPACK_IMPORTED_MODULE_86___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_goverment_png__WEBPACK_IMPORTED_MODULE_86__);
/* harmony import */ var _static_images_location_type_grocery_store_png__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ../static/images/location_type/grocery_store.png */ "./static/images/location_type/grocery_store.png");
/* harmony import */ var _static_images_location_type_grocery_store_png__WEBPACK_IMPORTED_MODULE_87___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_grocery_store_png__WEBPACK_IMPORTED_MODULE_87__);
/* harmony import */ var _static_images_location_type_gymnasium_png__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ../static/images/location_type/gymnasium.png */ "./static/images/location_type/gymnasium.png");
/* harmony import */ var _static_images_location_type_gymnasium_png__WEBPACK_IMPORTED_MODULE_88___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_gymnasium_png__WEBPACK_IMPORTED_MODULE_88__);
/* harmony import */ var _static_images_location_type_hotel_png__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ../static/images/location_type/hotel.png */ "./static/images/location_type/hotel.png");
/* harmony import */ var _static_images_location_type_hotel_png__WEBPACK_IMPORTED_MODULE_89___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_hotel_png__WEBPACK_IMPORTED_MODULE_89__);
/* harmony import */ var _static_images_location_type_house_number_png__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ../static/images/location_type/house_number.png */ "./static/images/location_type/house_number.png");
/* harmony import */ var _static_images_location_type_house_number_png__WEBPACK_IMPORTED_MODULE_90___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_house_number_png__WEBPACK_IMPORTED_MODULE_90__);
/* harmony import */ var _static_images_location_type_international_agency_png__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ../static/images/location_type/international_agency.png */ "./static/images/location_type/international_agency.png");
/* harmony import */ var _static_images_location_type_international_agency_png__WEBPACK_IMPORTED_MODULE_91___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_international_agency_png__WEBPACK_IMPORTED_MODULE_91__);
/* harmony import */ var _static_images_location_type_karaoke_png__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ../static/images/location_type/karaoke.png */ "./static/images/location_type/karaoke.png");
/* harmony import */ var _static_images_location_type_karaoke_png__WEBPACK_IMPORTED_MODULE_92___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_karaoke_png__WEBPACK_IMPORTED_MODULE_92__);
/* harmony import */ var _static_images_location_type_market_png__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ../static/images/location_type/market.png */ "./static/images/location_type/market.png");
/* harmony import */ var _static_images_location_type_market_png__WEBPACK_IMPORTED_MODULE_93___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_market_png__WEBPACK_IMPORTED_MODULE_93__);
/* harmony import */ var _static_images_location_type_military_png__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ../static/images/location_type/military.png */ "./static/images/location_type/military.png");
/* harmony import */ var _static_images_location_type_military_png__WEBPACK_IMPORTED_MODULE_94___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_military_png__WEBPACK_IMPORTED_MODULE_94__);
/* harmony import */ var _static_images_location_type_monument_png__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ../static/images/location_type/monument.png */ "./static/images/location_type/monument.png");
/* harmony import */ var _static_images_location_type_monument_png__WEBPACK_IMPORTED_MODULE_95___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_monument_png__WEBPACK_IMPORTED_MODULE_95__);
/* harmony import */ var _static_images_location_type_motel_room_png__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ../static/images/location_type/motel_room.png */ "./static/images/location_type/motel_room.png");
/* harmony import */ var _static_images_location_type_motel_room_png__WEBPACK_IMPORTED_MODULE_96___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_motel_room_png__WEBPACK_IMPORTED_MODULE_96__);
/* harmony import */ var _static_images_location_type_motel_png__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ../static/images/location_type/motel.png */ "./static/images/location_type/motel.png");
/* harmony import */ var _static_images_location_type_motel_png__WEBPACK_IMPORTED_MODULE_97___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_motel_png__WEBPACK_IMPORTED_MODULE_97__);
/* harmony import */ var _static_images_location_type_pagoda_png__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ../static/images/location_type/pagoda.png */ "./static/images/location_type/pagoda.png");
/* harmony import */ var _static_images_location_type_pagoda_png__WEBPACK_IMPORTED_MODULE_98___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_pagoda_png__WEBPACK_IMPORTED_MODULE_98__);
/* harmony import */ var _static_images_location_type_park_png__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ../static/images/location_type/park.png */ "./static/images/location_type/park.png");
/* harmony import */ var _static_images_location_type_park_png__WEBPACK_IMPORTED_MODULE_99___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_park_png__WEBPACK_IMPORTED_MODULE_99__);
/* harmony import */ var _static_images_location_type_port_png__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! ../static/images/location_type/port.png */ "./static/images/location_type/port.png");
/* harmony import */ var _static_images_location_type_port_png__WEBPACK_IMPORTED_MODULE_100___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_port_png__WEBPACK_IMPORTED_MODULE_100__);
/* harmony import */ var _static_images_location_type_post_office_png__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! ../static/images/location_type/post_office.png */ "./static/images/location_type/post_office.png");
/* harmony import */ var _static_images_location_type_post_office_png__WEBPACK_IMPORTED_MODULE_101___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_post_office_png__WEBPACK_IMPORTED_MODULE_101__);
/* harmony import */ var _static_images_location_type_prison_png__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! ../static/images/location_type/prison.png */ "./static/images/location_type/prison.png");
/* harmony import */ var _static_images_location_type_prison_png__WEBPACK_IMPORTED_MODULE_102___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_prison_png__WEBPACK_IMPORTED_MODULE_102__);
/* harmony import */ var _static_images_location_type_restaurant_png__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! ../static/images/location_type/restaurant.png */ "./static/images/location_type/restaurant.png");
/* harmony import */ var _static_images_location_type_restaurant_png__WEBPACK_IMPORTED_MODULE_103___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_restaurant_png__WEBPACK_IMPORTED_MODULE_103__);
/* harmony import */ var _static_images_location_type_site_png__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! ../static/images/location_type/site.png */ "./static/images/location_type/site.png");
/* harmony import */ var _static_images_location_type_site_png__WEBPACK_IMPORTED_MODULE_104___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_site_png__WEBPACK_IMPORTED_MODULE_104__);
/* harmony import */ var _static_images_location_type_spa_png__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! ../static/images/location_type/spa.png */ "./static/images/location_type/spa.png");
/* harmony import */ var _static_images_location_type_spa_png__WEBPACK_IMPORTED_MODULE_105___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_spa_png__WEBPACK_IMPORTED_MODULE_105__);
/* harmony import */ var _static_images_location_type_stadium_png__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! ../static/images/location_type/stadium.png */ "./static/images/location_type/stadium.png");
/* harmony import */ var _static_images_location_type_stadium_png__WEBPACK_IMPORTED_MODULE_106___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_stadium_png__WEBPACK_IMPORTED_MODULE_106__);
/* harmony import */ var _static_images_location_type_state_agencie_png__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(/*! ../static/images/location_type/state_agencie.png */ "./static/images/location_type/state_agencie.png");
/* harmony import */ var _static_images_location_type_state_agencie_png__WEBPACK_IMPORTED_MODULE_107___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_state_agencie_png__WEBPACK_IMPORTED_MODULE_107__);
/* harmony import */ var _static_images_location_type_station_png__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(/*! ../static/images/location_type/station.png */ "./static/images/location_type/station.png");
/* harmony import */ var _static_images_location_type_station_png__WEBPACK_IMPORTED_MODULE_108___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_station_png__WEBPACK_IMPORTED_MODULE_108__);
/* harmony import */ var _static_images_location_type_supermarket_png__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(/*! ../static/images/location_type/supermarket.png */ "./static/images/location_type/supermarket.png");
/* harmony import */ var _static_images_location_type_supermarket_png__WEBPACK_IMPORTED_MODULE_109___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_supermarket_png__WEBPACK_IMPORTED_MODULE_109__);
/* harmony import */ var _static_images_location_type_swimming_pool_png__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(/*! ../static/images/location_type/swimming_pool.png */ "./static/images/location_type/swimming_pool.png");
/* harmony import */ var _static_images_location_type_swimming_pool_png__WEBPACK_IMPORTED_MODULE_110___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_swimming_pool_png__WEBPACK_IMPORTED_MODULE_110__);
/* harmony import */ var _static_images_location_type_tennis_png__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(/*! ../static/images/location_type/tennis.png */ "./static/images/location_type/tennis.png");
/* harmony import */ var _static_images_location_type_tennis_png__WEBPACK_IMPORTED_MODULE_111___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_tennis_png__WEBPACK_IMPORTED_MODULE_111__);
/* harmony import */ var _static_images_location_type_traffic_light_png__WEBPACK_IMPORTED_MODULE_112__ = __webpack_require__(/*! ../static/images/location_type/traffic_light.png */ "./static/images/location_type/traffic_light.png");
/* harmony import */ var _static_images_location_type_traffic_light_png__WEBPACK_IMPORTED_MODULE_112___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_traffic_light_png__WEBPACK_IMPORTED_MODULE_112__);
/* harmony import */ var _static_images_location_type_train_station_png__WEBPACK_IMPORTED_MODULE_113__ = __webpack_require__(/*! ../static/images/location_type/train_station.png */ "./static/images/location_type/train_station.png");
/* harmony import */ var _static_images_location_type_train_station_png__WEBPACK_IMPORTED_MODULE_113___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_train_station_png__WEBPACK_IMPORTED_MODULE_113__);
/* harmony import */ var _static_images_location_type_treasury_png__WEBPACK_IMPORTED_MODULE_114__ = __webpack_require__(/*! ../static/images/location_type/treasury.png */ "./static/images/location_type/treasury.png");
/* harmony import */ var _static_images_location_type_treasury_png__WEBPACK_IMPORTED_MODULE_114___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_treasury_png__WEBPACK_IMPORTED_MODULE_114__);
/* harmony import */ var _static_images_location_type_tv_radio_png__WEBPACK_IMPORTED_MODULE_115__ = __webpack_require__(/*! ../static/images/location_type/tv_radio.png */ "./static/images/location_type/tv_radio.png");
/* harmony import */ var _static_images_location_type_tv_radio_png__WEBPACK_IMPORTED_MODULE_115___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_tv_radio_png__WEBPACK_IMPORTED_MODULE_115__);
/* harmony import */ var _static_images_location_type_no_type_jpg__WEBPACK_IMPORTED_MODULE_116__ = __webpack_require__(/*! ../static/images/location_type/no_type.jpg */ "./static/images/location_type/no_type.jpg");
/* harmony import */ var _static_images_location_type_no_type_jpg__WEBPACK_IMPORTED_MODULE_116___default = /*#__PURE__*/__webpack_require__.n(_static_images_location_type_no_type_jpg__WEBPACK_IMPORTED_MODULE_116__);
/* harmony import */ var _static_images_marker_png__WEBPACK_IMPORTED_MODULE_117__ = __webpack_require__(/*! ../static/images/marker.png */ "./static/images/marker.png");
/* harmony import */ var _static_images_marker_png__WEBPACK_IMPORTED_MODULE_117___default = /*#__PURE__*/__webpack_require__.n(_static_images_marker_png__WEBPACK_IMPORTED_MODULE_117__);
/* harmony import */ var _static_images_button_png__WEBPACK_IMPORTED_MODULE_118__ = __webpack_require__(/*! ../static/images/button.png */ "./static/images/button.png");
/* harmony import */ var _static_images_button_png__WEBPACK_IMPORTED_MODULE_118___default = /*#__PURE__*/__webpack_require__.n(_static_images_button_png__WEBPACK_IMPORTED_MODULE_118__);
/* harmony import */ var _static_images_bin_png__WEBPACK_IMPORTED_MODULE_119__ = __webpack_require__(/*! ../static/images/bin.png */ "./static/images/bin.png");
/* harmony import */ var _static_images_bin_png__WEBPACK_IMPORTED_MODULE_119___default = /*#__PURE__*/__webpack_require__.n(_static_images_bin_png__WEBPACK_IMPORTED_MODULE_119__);
/* harmony import */ var _static_images_bin_white_png__WEBPACK_IMPORTED_MODULE_120__ = __webpack_require__(/*! ../static/images/bin_white.png */ "./static/images/bin_white.png");
/* harmony import */ var _static_images_bin_white_png__WEBPACK_IMPORTED_MODULE_120___default = /*#__PURE__*/__webpack_require__.n(_static_images_bin_white_png__WEBPACK_IMPORTED_MODULE_120__);
/* harmony import */ var _static_images_icon_goong_png__WEBPACK_IMPORTED_MODULE_121__ = __webpack_require__(/*! ../static/images/icon_goong.png */ "./static/images/icon_goong.png");
/* harmony import */ var _static_images_icon_goong_png__WEBPACK_IMPORTED_MODULE_121___default = /*#__PURE__*/__webpack_require__.n(_static_images_icon_goong_png__WEBPACK_IMPORTED_MODULE_121__);


























































































































/* harmony default export */ __webpack_exports__["default"] = ({
  road_1: _static_images_road_1_png__WEBPACK_IMPORTED_MODULE_0___default.a,
  road_2: _static_images_road_2_png__WEBPACK_IMPORTED_MODULE_1___default.a,
  road_3: _static_images_road_3_png__WEBPACK_IMPORTED_MODULE_2___default.a,
  road_4: _static_images_road_4_png__WEBPACK_IMPORTED_MODULE_3___default.a,
  road_5: _static_images_road_5_png__WEBPACK_IMPORTED_MODULE_4___default.a,
  road_6: _static_images_road_6_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  arrow: _static_images_arrow_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  background: _static_images_background_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  clock: _static_images_clock_png__WEBPACK_IMPORTED_MODULE_8___default.a,
  cross: _static_images_cross_png__WEBPACK_IMPORTED_MODULE_9___default.a,
  gmail: _static_images_gmail_png__WEBPACK_IMPORTED_MODULE_10___default.a,
  goong_logo_mini: _static_images_goong_logo_mini_png__WEBPACK_IMPORTED_MODULE_11___default.a,
  hotel: _static_images_hotel_png__WEBPACK_IMPORTED_MODULE_12___default.a,
  ic_directions_filled_blue900_24px: _static_images_ic_directions_filled_blue900_24px_png__WEBPACK_IMPORTED_MODULE_13___default.a,
  location: _static_images_location_png__WEBPACK_IMPORTED_MODULE_14___default.a,
  more: _static_images_more_png__WEBPACK_IMPORTED_MODULE_15___default.a,
  normal_map: _static_images_normal_map_png__WEBPACK_IMPORTED_MODULE_16___default.a,
  petro: _static_images_petro_png__WEBPACK_IMPORTED_MODULE_17___default.a,
  place_outline_red600_18dp: _static_images_place_outline_red600_18dp_png__WEBPACK_IMPORTED_MODULE_18___default.a,
  restaurant: _static_images_restaurant_png__WEBPACK_IMPORTED_MODULE_19___default.a,
  roaroute_3dots_grey650_24dpd_1: _static_images_route_3dots_grey650_24dp_png__WEBPACK_IMPORTED_MODULE_20___default.a,
  satellite: _static_images_satellite_jpeg__WEBPACK_IMPORTED_MODULE_21___default.a,
  signparkingsport: _static_images_signparkingsport_png__WEBPACK_IMPORTED_MODULE_22___default.a,
  six_dots: _static_images_six_dots_png__WEBPACK_IMPORTED_MODULE_23___default.a,
  start_location_grey800_18dp: _static_images_start_location_grey800_18dp_png__WEBPACK_IMPORTED_MODULE_24___default.a,
  straight_grey800_18dp: _static_images_straight_grey800_18dp_png__WEBPACK_IMPORTED_MODULE_25___default.a,
  twitter: _static_images_twitter_png__WEBPACK_IMPORTED_MODULE_26___default.a,
  union: _static_images_union_png__WEBPACK_IMPORTED_MODULE_27___default.a,
  up_and_down: _static_images_up_and_down_png__WEBPACK_IMPORTED_MODULE_28___default.a,
  alley: _static_images_location_type_alley_png__WEBPACK_IMPORTED_MODULE_29___default.a,
  art: _static_images_location_type_art_png__WEBPACK_IMPORTED_MODULE_30___default.a,
  atm: _static_images_location_type_atm_png__WEBPACK_IMPORTED_MODULE_31___default.a,
  auto_repair: _static_images_location_type_auto_repair_png__WEBPACK_IMPORTED_MODULE_32___default.a,
  auto_showroom: _static_images_location_type_auto_showroom_png__WEBPACK_IMPORTED_MODULE_33___default.a,
  bank: _static_images_location_type_bank_png__WEBPACK_IMPORTED_MODULE_34___default.a,
  cinema: _static_images_location_type_cinema_png__WEBPACK_IMPORTED_MODULE_35___default.a,
  clinic: _static_images_location_type_clinic_png__WEBPACK_IMPORTED_MODULE_36___default.a,
  college: _static_images_location_type_college_png__WEBPACK_IMPORTED_MODULE_37___default.a,
  commune: _static_images_location_type_commune_png__WEBPACK_IMPORTED_MODULE_38___default.a,
  company: _static_images_location_type_company_png__WEBPACK_IMPORTED_MODULE_39___default.a,
  convention_center: _static_images_location_type_convention_center_png__WEBPACK_IMPORTED_MODULE_40___default.a,
  culture: _static_images_location_type_culture_png__WEBPACK_IMPORTED_MODULE_41___default.a,
  dentist: _static_images_location_type_dentist_png__WEBPACK_IMPORTED_MODULE_42___default.a,
  dicstrict: _static_images_location_type_dicstrict_png__WEBPACK_IMPORTED_MODULE_43___default.a,
  exhibition_center: _static_images_location_type_exhibition_center_png__WEBPACK_IMPORTED_MODULE_44___default.a,
  fire_station: _static_images_location_type_fire_station_png__WEBPACK_IMPORTED_MODULE_45___default.a,
  gas_station: _static_images_location_type_gas_station_png__WEBPACK_IMPORTED_MODULE_46___default.a,
  high_school: _static_images_location_type_high_school_png__WEBPACK_IMPORTED_MODULE_47___default.a,
  hospital: _static_images_location_type_hospital_png__WEBPACK_IMPORTED_MODULE_48___default.a,
  industrial_park: _static_images_location_type_industrial_park_png__WEBPACK_IMPORTED_MODULE_49___default.a,
  inter_level_school: _static_images_location_type_inter_level_school_png__WEBPACK_IMPORTED_MODULE_50___default.a,
  museum: _static_images_location_type_museum_png__WEBPACK_IMPORTED_MODULE_51___default.a,
  parking: _static_images_location_type_parking_png__WEBPACK_IMPORTED_MODULE_52___default.a,
  pharmacy: _static_images_location_type_pharmacy_png__WEBPACK_IMPORTED_MODULE_53___default.a,
  police: _static_images_location_type_police_png__WEBPACK_IMPORTED_MODULE_54___default.a,
  pre_school: _static_images_location_type_pre_school_png__WEBPACK_IMPORTED_MODULE_55___default.a,
  primary_school: _static_images_location_type_primary_school_png__WEBPACK_IMPORTED_MODULE_56___default.a,
  province: _static_images_location_type_province_png__WEBPACK_IMPORTED_MODULE_57___default.a,
  research_institute: _static_images_location_type_research_institute_png__WEBPACK_IMPORTED_MODULE_58___default.a,
  secondary_school: _static_images_location_type_secondary_school_png__WEBPACK_IMPORTED_MODULE_59___default.a,
  street: _static_images_location_type_street_png__WEBPACK_IMPORTED_MODULE_60___default.a,
  theatre: _static_images_location_type_theatre_png__WEBPACK_IMPORTED_MODULE_61___default.a,
  training_center: _static_images_location_type_training_center_png__WEBPACK_IMPORTED_MODULE_62___default.a,
  university: _static_images_location_type_university_png__WEBPACK_IMPORTED_MODULE_63___default.a,
  village: _static_images_location_type_village_png__WEBPACK_IMPORTED_MODULE_64___default.a,
  vocational_training: _static_images_location_type_vocational_training_png__WEBPACK_IMPORTED_MODULE_65___default.a,
  zoo: _static_images_location_type_zoo_png__WEBPACK_IMPORTED_MODULE_66___default.a,
  no_type: _static_images_location_type_no_type_jpg__WEBPACK_IMPORTED_MODULE_116___default.a,
  agency_of_the_ministry: _static_images_location_type_agency_of_the_ministry_png__WEBPACK_IMPORTED_MODULE_67___default.a,
  airport_ticket_agency: _static_images_location_type_airport_ticket_agency_png__WEBPACK_IMPORTED_MODULE_68___default.a,
  airport: _static_images_location_type_airport_png__WEBPACK_IMPORTED_MODULE_69___default.a,
  bar: _static_images_location_type_bar_png__WEBPACK_IMPORTED_MODULE_70___default.a,
  beach: _static_images_location_type_beach_png__WEBPACK_IMPORTED_MODULE_71___default.a,
  book_store: _static_images_location_type_book_store_png__WEBPACK_IMPORTED_MODULE_72___default.a,
  building: _static_images_location_type_building_png__WEBPACK_IMPORTED_MODULE_73___default.a,
  cafe: _static_images_location_type_cafe_png__WEBPACK_IMPORTED_MODULE_74___default.a,
  camera: _static_images_location_type_camera_png__WEBPACK_IMPORTED_MODULE_75___default.a,
  cemetery: _static_images_location_type_cemetery_png__WEBPACK_IMPORTED_MODULE_76___default.a,
  central_authority: _static_images_location_type_central_authority_png__WEBPACK_IMPORTED_MODULE_77___default.a,
  charging_station: _static_images_location_type_charging_station_png__WEBPACK_IMPORTED_MODULE_78___default.a,
  church: _static_images_location_type_church_png__WEBPACK_IMPORTED_MODULE_79___default.a,
  commercial_center: _static_images_location_type_commercial_center_png__WEBPACK_IMPORTED_MODULE_80___default.a,
  court: _static_images_location_type_court_png__WEBPACK_IMPORTED_MODULE_81___default.a,
  embassy: _static_images_location_type_embassy_png__WEBPACK_IMPORTED_MODULE_82___default.a,
  forest: _static_images_location_type_forest_png__WEBPACK_IMPORTED_MODULE_83___default.a,
  gate: _static_images_location_type_gate_png__WEBPACK_IMPORTED_MODULE_84___default.a,
  golf: _static_images_location_type_golf_png__WEBPACK_IMPORTED_MODULE_85___default.a,
  goverment: _static_images_location_type_goverment_png__WEBPACK_IMPORTED_MODULE_86___default.a,
  grocery_store: _static_images_location_type_grocery_store_png__WEBPACK_IMPORTED_MODULE_87___default.a,
  gymnasium: _static_images_location_type_gymnasium_png__WEBPACK_IMPORTED_MODULE_88___default.a,
  hotel_type: _static_images_location_type_hotel_png__WEBPACK_IMPORTED_MODULE_89___default.a,
  house_number: _static_images_location_type_house_number_png__WEBPACK_IMPORTED_MODULE_90___default.a,
  international_agency: _static_images_location_type_international_agency_png__WEBPACK_IMPORTED_MODULE_91___default.a,
  karaoke: _static_images_location_type_karaoke_png__WEBPACK_IMPORTED_MODULE_92___default.a,
  market: _static_images_location_type_market_png__WEBPACK_IMPORTED_MODULE_93___default.a,
  military: _static_images_location_type_military_png__WEBPACK_IMPORTED_MODULE_94___default.a,
  monument: _static_images_location_type_monument_png__WEBPACK_IMPORTED_MODULE_95___default.a,
  motel_room: _static_images_location_type_motel_room_png__WEBPACK_IMPORTED_MODULE_96___default.a,
  motel: _static_images_location_type_motel_png__WEBPACK_IMPORTED_MODULE_97___default.a,
  pagoda: _static_images_location_type_pagoda_png__WEBPACK_IMPORTED_MODULE_98___default.a,
  park: _static_images_location_type_park_png__WEBPACK_IMPORTED_MODULE_99___default.a,
  port: _static_images_location_type_port_png__WEBPACK_IMPORTED_MODULE_100___default.a,
  post_office: _static_images_location_type_post_office_png__WEBPACK_IMPORTED_MODULE_101___default.a,
  prison: _static_images_location_type_prison_png__WEBPACK_IMPORTED_MODULE_102___default.a,
  restaurant_type: _static_images_location_type_restaurant_png__WEBPACK_IMPORTED_MODULE_103___default.a,
  site: _static_images_location_type_site_png__WEBPACK_IMPORTED_MODULE_104___default.a,
  spa: _static_images_location_type_spa_png__WEBPACK_IMPORTED_MODULE_105___default.a,
  stadium: _static_images_location_type_stadium_png__WEBPACK_IMPORTED_MODULE_106___default.a,
  state_agencie: _static_images_location_type_state_agencie_png__WEBPACK_IMPORTED_MODULE_107___default.a,
  station: _static_images_location_type_station_png__WEBPACK_IMPORTED_MODULE_108___default.a,
  supermarket: _static_images_location_type_supermarket_png__WEBPACK_IMPORTED_MODULE_109___default.a,
  swimming_pool: _static_images_location_type_swimming_pool_png__WEBPACK_IMPORTED_MODULE_110___default.a,
  tennis: _static_images_location_type_tennis_png__WEBPACK_IMPORTED_MODULE_111___default.a,
  traffic_light: _static_images_location_type_traffic_light_png__WEBPACK_IMPORTED_MODULE_112___default.a,
  train_station: _static_images_location_type_train_station_png__WEBPACK_IMPORTED_MODULE_113___default.a,
  treasury: _static_images_location_type_treasury_png__WEBPACK_IMPORTED_MODULE_114___default.a,
  tv_radio: _static_images_location_type_tv_radio_png__WEBPACK_IMPORTED_MODULE_115___default.a,
  marker: _static_images_marker_png__WEBPACK_IMPORTED_MODULE_117___default.a,
  button: _static_images_button_png__WEBPACK_IMPORTED_MODULE_118___default.a,
  bin: _static_images_bin_png__WEBPACK_IMPORTED_MODULE_119___default.a,
  bin_white: _static_images_bin_white_png__WEBPACK_IMPORTED_MODULE_120___default.a,
  icon_goong: _static_images_icon_goong_png__WEBPACK_IMPORTED_MODULE_121___default.a
});

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

/***/ })

};;