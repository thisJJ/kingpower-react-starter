exports.id = 0;
exports.modules = {

/***/ "./src/App.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__actions__ = __webpack_require__("./src/actions/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__static_react_svg__ = __webpack_require__("./src/static/react.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__static_react_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__static_react_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__static_Home_css__ = __webpack_require__("./src/static/Home.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__static_Home_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__static_Home_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__containers_About_container__ = __webpack_require__("./src/containers/About/container.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_react_router_dom__);







var _jsxFileName = '/Users/tj/Projects/kpc-react-starter-kit/react-router-tutorial/example01/src/App.js';

// import { Button } from 'antd'










var App = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(App, _React$Component);

  function App() {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, App);

    return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (App.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(App)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(App, [{
    key: 'render',
    value: function render() {
      console.log('App props', this.props);
      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        'div',
        { className: 'Home', __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          }
        },
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          'div',
          { className: 'Home-header', __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            }
          },
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement('img', { src: __WEBPACK_IMPORTED_MODULE_11__static_react_svg___default.a, className: 'Home-logo', alt: 'logo', __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            }
          }),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'h2',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 27
              }
            },
            'Welcome to Razzle'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          'ul',
          { className: 'Home-resources', __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            }
          },
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'li',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 30
              }
            },
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_14_react_router_dom__["NavLink"],
              { to: '/', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 31
                }
              },
              'Home'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'li',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 33
              }
            },
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_14_react_router_dom__["NavLink"],
              { to: '/about', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 34
                }
              },
              'About'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'li',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 36
              }
            },
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_14_react_router_dom__["NavLink"],
              { to: '/about/component', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 37
                }
              },
              'About and Home Container'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            }
          },
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_14_react_router_dom__["Switch"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 41
              }
            },
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14_react_router_dom__["Route"], {
              path: '/',
              exact: true,
              render: function render() {
                return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                  'div',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 45
                    }
                  },
                  'Is home'
                );
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 42
              }
            }),
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14_react_router_dom__["Route"], {
              path: '/:about',
              exact: true,
              render: function render() {
                return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                  'div',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 50
                    }
                  },
                  'Is about'
                );
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 47
              }
            }),
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14_react_router_dom__["Route"], {
              path: '/:about/:component',
              exact: true,
              component: __WEBPACK_IMPORTED_MODULE_13__containers_About_container__["a" /* default */],
              __source: {
                fileName: _jsxFileName,
                lineNumber: 52
              }
            })
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
                // console.log('res', res)
                // console.log('store ', match)

                console.log('App getInitialProps', match);

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

  return App;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    count: state.counter.count
  };
};

function mapDispatchToProps(dispatch) {
  return Object(__WEBPACK_IMPORTED_MODULE_8_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_10__actions__, dispatch);
}

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_9_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(App));

/***/ })

};
//# sourceMappingURL=0.21939cf5ced3276120b9.hot-update.js.map