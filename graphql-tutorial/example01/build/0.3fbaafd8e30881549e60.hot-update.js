exports.id = 0;
exports.modules = {

/***/ "./src/config/store.js":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/containers/Home/container.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_antd__ = __webpack_require__("antd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__actions__ = __webpack_require__("./src/actions/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__static_react_svg__ = __webpack_require__("./src/static/react.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__static_react_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__static_react_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__static_Home_css__ = __webpack_require__("./src/static/Home.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__static_Home_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__static_Home_css__);







var _jsxFileName = '/Users/tj/Projects/kpc-react-starter-kit/react-router-tutorial/example01/src/containers/Home/container.js';











var Home = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Home, _React$Component);

  function Home() {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Home);

    return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Home.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(Home)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Home, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        'div',
        { className: 'Home', __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        },
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          'div',
          { className: 'Home-header', __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            }
          },
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement('img', { src: __WEBPACK_IMPORTED_MODULE_13__static_react_svg___default.a, className: 'Home-logo', alt: 'logo', __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            }
          }),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'h2',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              }
            },
            'Welcome to Razzle'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          'ul',
          { className: 'Home-resources', __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            }
          },
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'li',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              }
            },
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_8_react_router_dom__["Link"],
              { to: '/about', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 26
                }
              },
              'About'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            }
          },
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_9_antd__["Button"],
            { onClick: this.props.increment, type: 'primary', __source: {
                fileName: _jsxFileName,
                lineNumber: 30
              }
            },
            '+'
          ),
          this.props.count,
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_9_antd__["Button"],
            { onClick: this.props.decrement, type: 'primary', __source: {
                fileName: _jsxFileName,
                lineNumber: 32
              }
            },
            '-'
          )
        )
      );
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var req = _ref.req,
            res = _ref.res,
            match = _ref.match;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('store ', match);
                return _context.abrupt('return', {});

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    count: state.counter.count
  };
};

function mapDispatchToProps(dispatch) {
  return Object(__WEBPACK_IMPORTED_MODULE_10_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_12__actions__, dispatch);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_11_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(Home));

/***/ }),

/***/ "./src/reducers/counter.js":
false,

/***/ "./src/reducers/index.js":
false,

/***/ "./src/sagas/counter.js":
false,

/***/ "./src/sagas/index.js":
false,

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__config_store__ = __webpack_require__("./src/config/store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__config_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__config_store__);



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

            store = __WEBPACK_IMPORTED_MODULE_9__config_store___default()(preloadedState);

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

/***/ }),

/***/ "./src/store/configuredStore.js":
false,

/***/ "redux":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension/developmentOnly":
false,

/***/ "redux-saga":
false,

/***/ "redux-saga/effects":
false

};
//# sourceMappingURL=0.3fbaafd8e30881549e60.hot-update.js.map