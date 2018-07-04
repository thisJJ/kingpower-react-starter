exports.id = 0;
exports.modules = {

/***/ "./node_modules/css-loader/lib/css-base.js":
false,

/***/ "./src/actions/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return INCREMENT_COUNTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DECREMENT_COUNTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DECREMENT_COUNTER_SUCCESS; });
/* unused harmony export increment */
/* unused harmony export decrement */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return decrementSuccess; });
/* unused harmony export incrementAsync */
var INCREMENT_COUNTER = 'INCREMENT_COUNTER';
var DECREMENT_COUNTER = 'DECREMENT_COUNTER';
var DECREMENT_COUNTER_SUCCESS = 'DECREMENT_COUNTER_SUCCESS';

var increment = function increment() {
  return {
    type: INCREMENT_COUNTER
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

/***/ }),

/***/ "./src/config/store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension_developmentOnly__ = __webpack_require__("redux-devtools-extension/developmentOnly");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension_developmentOnly___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension_developmentOnly__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_saga__ = __webpack_require__("redux-saga");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_saga___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_saga__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sagas__ = __webpack_require__("./src/sagas/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducers__ = __webpack_require__("./src/reducers/index.js");






/* harmony default export */ __webpack_exports__["a"] = (function () {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var sagaMiddleware = __WEBPACK_IMPORTED_MODULE_2_redux_saga___default()();

  var configuredStore = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_4__reducers__["a" /* default */], initialState, Object(__WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension_developmentOnly__["composeWithDevTools"])(Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(sagaMiddleware)));
  configuredStore.sagaTask = sagaMiddleware.run(__WEBPACK_IMPORTED_MODULE_3__sagas__["a" /* default */]);

  return configuredStore;
});

/***/ }),

/***/ "./src/containers/About/container.js":
false,

/***/ "./src/containers/App/container.js":
false,

/***/ "./src/reducers/counter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__("babel-runtime/core-js/object/assign");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__("./src/actions/index.js");



var initialState = {
  count: 0
};

/* harmony default export */ __webpack_exports__["a"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, initialState);
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_1__actions__["c" /* INCREMENT_COUNTER */]:
      return {
        count: state.count + 1
      };
    case __WEBPACK_IMPORTED_MODULE_1__actions__["a" /* DECREMENT_COUNTER */]:
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, state);
    case __WEBPACK_IMPORTED_MODULE_1__actions__["b" /* DECREMENT_COUNTER_SUCCESS */]:
      state.count -= action.count;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, state);
    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducers/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__counter__ = __webpack_require__("./src/reducers/counter.js");



var rootReducer = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  counter: __WEBPACK_IMPORTED_MODULE_1__counter__["a" /* default */]
});

/* harmony default export */ __webpack_exports__["a"] = (rootReducer);

/***/ }),

/***/ "./src/routes.js":
/***/ (function(module, __webpack_exports__) {

"use strict";
// import App from '~/containers/App/container'
// // import About from '~/containers/About/container'
// export default [
//   {
//     path: '/',
//     component: App,
//   },
//   // {
//   //   path: '/:about',
//   //   component: App,
//   // },
//   // {
//   //   path: '/:about/:conponent',
//   //   component: App,
//   // },
// ];

/***/ }),

/***/ "./src/sagas/counter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export counter */
/* harmony export (immutable) */ __webpack_exports__["a"] = counterSaga;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__ = __webpack_require__("redux-saga/effects");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga_effects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__("./src/actions/index.js");


var _marked = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(counter),
    _marked2 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(counterSaga);




function counter() {
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function counter$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["put"])(Object(__WEBPACK_IMPORTED_MODULE_2__actions__["d" /* decrementSuccess */])(1));

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

function counterSaga() {
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function counterSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["takeEvery"])(__WEBPACK_IMPORTED_MODULE_2__actions__["a" /* DECREMENT_COUNTER */], counter);

        case 2:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

/***/ }),

/***/ "./src/server.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express__ = __webpack_require__("express");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jaredpalmer_after__ = __webpack_require__("@jaredpalmer/after");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jaredpalmer_after___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__jaredpalmer_after__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes__ = __webpack_require__("./src/routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom_server__ = __webpack_require__("react-dom/server");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Document__ = __webpack_require__("./src/Document.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__config_store__ = __webpack_require__("./src/config/store.js");



var _jsxFileName = '/Users/tj/Projects/kpc-react-starter-kit/react-router-tutorial/example01/src/server.js',
    _this = this;







// import qs from 'qs';


var assets = __webpack_require__("./build/assets.json");

var server = __WEBPACK_IMPORTED_MODULE_3_express___default()();
server.disable('x-powered-by').use(__WEBPACK_IMPORTED_MODULE_3_express___default.a.static("/Users/tj/Projects/kpc-react-starter-kit/react-router-tutorial/example01/public")).get('/*', function () {
  var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
    var preloadedState, store, serverState, customRenderer, html;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            // Read the counter from the request, if provided
            // const params = qs.parse(req.query);
            // console.log(req)
            // console.log(res)
            // const counter = parseInt(params.counter, 10) || 0;

            // Compile initial state
            preloadedState = {};

            // Create a new Redux store instance

            store = Object(__WEBPACK_IMPORTED_MODULE_9__config_store__["a" /* default */])(preloadedState);

            // Grab the initial state from our Redux store

            serverState = store.getState();

            customRenderer = function customRenderer(node) {
              var App = __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_5_react_redux__["Provider"],
                { store: store, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                  }
                },
                node
              );
              return {
                html: Object(__WEBPACK_IMPORTED_MODULE_7_react_dom_server__["renderToString"])(App),
                // Anything else you add here will be made available
                // within document's this.props
                // e.g a redux store...
                serverState: serverState
              };
            };

            _context.next = 7;
            return Object(__WEBPACK_IMPORTED_MODULE_4__jaredpalmer_after__["render"])({
              req: req,
              res: res,
              routes: __WEBPACK_IMPORTED_MODULE_6__routes___default.a,
              assets: assets,
              document: __WEBPACK_IMPORTED_MODULE_8__Document__["a" /* default */],
              customRenderer: customRenderer
            });

          case 7:
            html = _context.sent;

            res.send(html);
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context['catch'](0);

            res.json(_context.t0);

          case 14:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[0, 11]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

/* harmony default export */ __webpack_exports__["default"] = (server);

/***/ }),

/***/ "./src/static/Home.css":
false,

/***/ "./src/static/react.svg":
false,

/***/ "antd":
false,

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
false,

/***/ "redux":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ })

};
//# sourceMappingURL=0.5bd354b1ed40b7bc53f7.hot-update.js.map