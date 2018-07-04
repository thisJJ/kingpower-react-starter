exports.id = 0;
exports.modules = {

/***/ "./src/containers/About/container.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_antd__ = __webpack_require__("antd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__actions__ = __webpack_require__("./src/actions/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__static_react_svg__ = __webpack_require__("./src/static/react.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__static_react_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__static_react_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__static_Home_css__ = __webpack_require__("./src/static/Home.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__static_Home_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__static_Home_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_react_router_dom__);







var _jsxFileName = '/Users/tj/Projects/kpc-react-starter-kit/react-router-tutorial/example01/src/containers/About/container.js';












var About = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(About, _React$Component);

  function About() {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, About);

    return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (About.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(About)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(About, [{
    key: 'render',
    value: function render() {
      console.log('Home props', this.props);
      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        'div',
        { className: 'Home', __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          }
        },
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          'div',
          { className: 'Home-header', __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            }
          },
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement('img', { src: __WEBPACK_IMPORTED_MODULE_12__static_react_svg___default.a, className: 'Home-logo', alt: 'logo', __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            }
          }),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'h2',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              }
            },
            'Welcome to Razzle'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          'ul',
          { className: 'Home-resources', __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            }
          },
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'li',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 28
              }
            },
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_14_react_router_dom__["NavLink"],
              { to: '/', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 29
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
                lineNumber: 31
              }
            },
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_14_react_router_dom__["NavLink"],
              { to: '/about', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 32
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
                lineNumber: 34
              }
            },
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_14_react_router_dom__["NavLink"],
              { to: '/about/test', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 35
                }
              },
              'About and id'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            }
          },
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14_react_router_dom__["Route"], {
            path: '/about/:id',
            exact: true,
            render: function render() {
              return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                'div',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                  }
                },
                'Is about and ID page'
              );
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            }
          }),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_8_antd__["Button"],
            { onClick: this.props.increment, type: 'primary', __source: {
                fileName: _jsxFileName,
                lineNumber: 44
              }
            },
            '+'
          ),
          this.props.count,
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_8_antd__["Button"],
            { onClick: this.props.decrement, type: 'primary', __source: {
                fileName: _jsxFileName,
                lineNumber: 46
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
                console.log('res', res);
                console.log('store ', match);
                return _context.abrupt('return', {});

              case 3:
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

  return About;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    count: state.counter.count
  };
};

function mapDispatchToProps(dispatch) {
  return Object(__WEBPACK_IMPORTED_MODULE_9_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_11__actions__, dispatch);
}

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_10_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(About));

/***/ })

};
//# sourceMappingURL=0.a56a4067079f0500b9ac.hot-update.js.map