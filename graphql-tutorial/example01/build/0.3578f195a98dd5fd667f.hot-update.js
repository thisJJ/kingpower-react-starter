exports.id = 0;
exports.modules = {

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom_server__ = __webpack_require__("react-dom/server");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Document__ = __webpack_require__("./src/Document.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__store_configuredStore__ = __webpack_require__("./src/store/configuredStore.js");



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

            store = Object(__WEBPACK_IMPORTED_MODULE_9__store_configuredStore__["a" /* default */])(preloadedState);

            // Grab the initial state from our Redux store

            serverState = store.getState();

            customRenderer = function customRenderer(node) {
              var App = __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_5_react_redux__["Provider"],
                { store: store, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
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
              routes: __WEBPACK_IMPORTED_MODULE_6__routes__["a" /* default */],
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

/***/ })

};
//# sourceMappingURL=0.3578f195a98dd5fd667f.hot-update.js.map