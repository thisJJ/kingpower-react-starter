exports.id = 0;
exports.modules = {

/***/ "./node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./src/actions/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCREMENT_COUNTER", function() { return INCREMENT_COUNTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECREMENT_COUNTER", function() { return DECREMENT_COUNTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECREMENT_COUNTER_SUCCESS", function() { return DECREMENT_COUNTER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increment", function() { return increment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrement", function() { return decrement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrementSuccess", function() { return decrementSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incrementAsync", function() { return incrementAsync; });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__static_Home_css__ = __webpack_require__("./src/static/Home.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__static_Home_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__static_Home_css__);







var _jsxFileName = '/Users/tj/Projects/kpc-react-starter-kit/react-router-tutorial/example01/src/containers/About/container.js';







// import logo from '~/static/react.svg';


// import { Link, Route, Switch } from 'react-router-dom';
// import Home from '~/containers/Home/container'

var About = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(About, _React$Component);

  function About() {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, About);

    return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (About.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(About)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(About, [{
    key: 'render',
    value: function render() {
      console.log('About props', this.props);
      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        },
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_8_antd__["Button"],
          { onClick: this.props.increment, type: 'primary', __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            }
          },
          '+'
        ),
        this.props.count,
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_8_antd__["Button"],
          { onClick: this.props.decrement, type: 'primary', __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            }
          },
          '-'
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

                console.log('About getInitialProps');

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

/***/ }),

/***/ "./src/containers/App/container.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__About_container__ = __webpack_require__("./src/containers/About/container.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_react_router_dom__);







var _jsxFileName = '/Users/tj/Projects/kpc-react-starter-kit/react-router-tutorial/example01/src/containers/App/container.js';












var Home = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Home, _React$Component);

  function Home() {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Home);

    return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Home.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(Home)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Home, [{
    key: 'render',
    value: function render() {
      console.log('Home props', this.props);
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
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement('img', { src: __WEBPACK_IMPORTED_MODULE_12__static_react_svg___default.a, className: 'Home-logo', alt: 'logo', __source: {
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
              __WEBPACK_IMPORTED_MODULE_15_react_router_dom__["NavLink"],
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
              __WEBPACK_IMPORTED_MODULE_15_react_router_dom__["NavLink"],
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
              __WEBPACK_IMPORTED_MODULE_15_react_router_dom__["NavLink"],
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
            __WEBPACK_IMPORTED_MODULE_15_react_router_dom__["Switch"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 41
              }
            },
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15_react_router_dom__["Route"], {
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
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15_react_router_dom__["Route"], {
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
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15_react_router_dom__["Route"], {
              path: '/:about/:component',
              exact: true,
              component: __WEBPACK_IMPORTED_MODULE_14__About_container__["a" /* default */],
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

                console.log('About getInitialProps');

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
  return Object(__WEBPACK_IMPORTED_MODULE_9_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_11__actions__, dispatch);
}

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_10_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(Home));

/***/ }),

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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__containers_App_container__ = __webpack_require__("./src/containers/App/container.js");

/* harmony default export */ __webpack_exports__["a"] = ([{
  path: '/',
  component: __WEBPACK_IMPORTED_MODULE_0__containers_App_container__["a" /* default */]
}]);

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
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["put"])(Object(__WEBPACK_IMPORTED_MODULE_2__actions__["decrementSuccess"])(1));

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
          return Object(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["takeEvery"])(__WEBPACK_IMPORTED_MODULE_2__actions__["DECREMENT_COUNTER"], counter);

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

/***/ "./src/static/Home.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".Home {\n  text-align: center;\n}\n\n.Home-logo {\n  animation: Home-logo-spin infinite 20s linear;\n  height: 80px;\n}\n\n.Home-header {\n  background-color: #222;\n  height: 150px;\n  padding: 20px;\n  color: white;\n}\n\n.Home-intro {\n  font-size: large;\n}\n\n.Home-resources {\n  list-style: none;\n}\n\n.Home-resources > li {\n  display: inline-block;\n  padding: 1rem;\n}\n\n@keyframes Home-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/static/react.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/react.9a28da9f.svg";

/***/ }),

/***/ "antd":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ })

};
//# sourceMappingURL=0.ec3d9c839bc9d6bdf136.hot-update.js.map