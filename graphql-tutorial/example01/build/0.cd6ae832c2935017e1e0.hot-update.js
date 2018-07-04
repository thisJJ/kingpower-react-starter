exports.id = 0;
exports.modules = {

/***/ "./src/actions/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCREMENT_COUNTER", function() { return INCREMENT_COUNTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_COUNTER", function() { return LOAD_COUNTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECREMENT_COUNTER", function() { return DECREMENT_COUNTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECREMENT_COUNTER_SUCCESS", function() { return DECREMENT_COUNTER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increment", function() { return increment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCount", function() { return loadCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrement", function() { return decrement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrementSuccess", function() { return decrementSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incrementAsync", function() { return incrementAsync; });
var INCREMENT_COUNTER = 'INCREMENT_COUNTER';
var LOAD_COUNTER = 'LOAD_COUNTER';
var DECREMENT_COUNTER = 'DECREMENT_COUNTER';
var DECREMENT_COUNTER_SUCCESS = 'DECREMENT_COUNTER_SUCCESS';

var increment = function increment() {
  return {
    type: INCREMENT_COUNTER
  };
};

var loadCount = function loadCount() {
  return {
    type: LOAD_COUNTER
  };
};

var decrement = function decrement() {
  return {
    type: DECREMENT_COUNTER
  };
};

var decrementSuccess = function decrementSuccess(count) {
  return {
    type: DECREMENT_COUNTER_SUCCESS,
    count: count
  };
};

var incrementAsync = function incrementAsync() {
  var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
  return function (dispatch) {
    setTimeout(function () {
      dispatch(increment());
    }, delay);
  };
};

/***/ })

};
//# sourceMappingURL=0.cd6ae832c2935017e1e0.hot-update.js.map