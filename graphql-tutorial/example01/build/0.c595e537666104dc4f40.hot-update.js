exports.id = 0;
exports.modules = {

/***/ "./src/reducers/counter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__("babel-runtime/core-js/object/assign");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__("./src/actions/index.js");



var initialState = {
  count: 999
};

/* harmony default export */ __webpack_exports__["a"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, initialState);
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_1__actions__["INCREMENT_COUNTER"]:
      return {
        count: state.count + 1
      };
    case __WEBPACK_IMPORTED_MODULE_1__actions__["DECREMENT_COUNTER"]:
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, state);
    case __WEBPACK_IMPORTED_MODULE_1__actions__["DECREMENT_COUNTER_SUCCESS"]:
      state.count -= action.count;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, state);
    default:
      return state;
  }
});

/***/ })

};
//# sourceMappingURL=0.c595e537666104dc4f40.hot-update.js.map