/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + chunkId + ".server.bundle.js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// uncatched error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using System.import().catch()
/******/ 		});
/******/ 	};
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 69);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react-intl");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("mongoose");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("react-helmet");

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.toggleAddPost = toggleAddPost;
	// Export Constants
	var TOGGLE_ADD_POST = exports.TOGGLE_ADD_POST = 'TOGGLE_ADD_POST';
	
	// Export Actions
	function toggleAddPost() {
	  return {
	    type: TOGGLE_ADD_POST
	  };
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DELETE_POST = exports.ADD_POSTS = exports.ADD_POST = undefined;
	exports.addPost = addPost;
	exports.addPostRequest = addPostRequest;
	exports.addPosts = addPosts;
	exports.fetchPosts = fetchPosts;
	exports.fetchPost = fetchPost;
	exports.deletePost = deletePost;
	exports.deletePostRequest = deletePostRequest;
	
	var _apiCaller = __webpack_require__(10);
	
	var _apiCaller2 = _interopRequireDefault(_apiCaller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Export Constants
	var ADD_POST = exports.ADD_POST = 'ADD_POST';
	var ADD_POSTS = exports.ADD_POSTS = 'ADD_POSTS';
	var DELETE_POST = exports.DELETE_POST = 'DELETE_POST';
	
	// Export Actions
	function addPost(post) {
	  return {
	    type: ADD_POST,
	    post: post
	  };
	}
	
	function addPostRequest(post) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('posts', 'post', {
	      post: {
	        name: post.name,
	        title: post.title,
	        content: post.content
	      }
	    }).then(function (res) {
	      return dispatch(addPost(res.post));
	    });
	  };
	}
	
	function addPosts(posts) {
	  return {
	    type: ADD_POSTS,
	    posts: posts
	  };
	}
	
	function fetchPosts() {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('posts').then(function (res) {
	      dispatch(addPosts(res.posts));
	    });
	  };
	}
	
	function fetchPost(cuid) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('posts/' + cuid).then(function (res) {
	      return dispatch(addPost(res.post));
	    });
	  };
	}
	
	function deletePost(cuid) {
	  return {
	    type: DELETE_POST,
	    cuid: cuid
	  };
	}
	
	function deletePostRequest(cuid) {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('posts/' + cuid, 'delete').then(function () {
	      return dispatch(deletePost(cuid));
	    });
	  };
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getPost = exports.getPosts = undefined;
	
	var _PostActions = __webpack_require__(8);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	// Initial State
	var initialState = { data: [] };
	
	var PostReducer = function PostReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _PostActions.ADD_POST:
	      return {
	        data: [action.post].concat(_toConsumableArray(state.data))
	      };
	
	    case _PostActions.ADD_POSTS:
	      return {
	        data: action.posts
	      };
	
	    case _PostActions.DELETE_POST:
	      return {
	        data: state.data.filter(function (post) {
	          return post.cuid !== action.cuid;
	        })
	      };
	
	    default:
	      return state;
	  }
	};
	
	/* Selectors */
	
	// Get all posts
	var getPosts = exports.getPosts = function getPosts(state) {
	  return state.posts.data;
	};
	
	// Get post by cuid
	var getPost = exports.getPost = function getPost(state, cuid) {
	  return state.posts.data.filter(function (post) {
	    return post.cuid === cuid;
	  })[0];
	};
	
	// Export Reducer
	exports.default = PostReducer;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.API_URL = undefined;
	exports.default = callApi;
	
	var _isomorphicFetch = __webpack_require__(78);
	
	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);
	
	var _config = __webpack_require__(12);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var API_URL = exports.API_URL = typeof window === 'undefined' || process.env.NODE_ENV === 'test' ? process.env.BASE_URL || 'http://localhost:' + (process.env.PORT || _config2.default.port) + '/api' : '/api';
	
	function callApi(endpoint) {
	  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'get';
	  var body = arguments[2];
	
	  return (0, _isomorphicFetch2.default)(API_URL + '/' + endpoint, {
	    headers: { 'content-type': 'application/json' },
	    method: method,
	    body: JSON.stringify(body)
	  }).then(function (response) {
	    return response.json().then(function (json) {
	      return { json: json, response: response };
	    });
	  }).then(function (_ref) {
	    var json = _ref.json,
	        response = _ref.response;
	
	    if (!response.ok) {
	      return Promise.reject(json);
	    }
	
	    return json;
	  }).then(function (response) {
	    return response;
	  }, function (error) {
	    return error;
	  });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mongoose = __webpack_require__(5);
	
	var _mongoose2 = _interopRequireDefault(_mongoose);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Schema = _mongoose2.default.Schema;
	
	var schema = new Schema({
	  condition: { type: 'String', required: true },
	  rights: { type: 'Object', required: true },
	  dateAdded: { type: 'Date', default: Date.now, required: true }
	});
	
	exports.default = _mongoose2.default.model('MedicalEntry', schema);

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var config = {
	  mongoURL: 'mongodb://heroku_8tlqs9j6:ic64tk953vbvp6l9j20ftjinio@ds157380.mlab.com:57380/heroku_8tlqs9j6' || 'mongodb://localhost:27017/mern-starter',
	  //Test12345
	  // mongoURL: process.env.NODE_ENV === 'production'? 'mongodb://heroku_8tlqs9j6:ic64tk953vbvp6l9j20ftjinio@ds157380.mlab.com:57380/heroku_8tlqs9j6' : 'mongodb://localhost:27017/mern-starter',
	  port: process.env.PORT || 8000
	};
	
	exports.default = config;

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("webpack");

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("material-ui/Toggle");

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.localizationData = exports.enabledLanguages = undefined;
	
	var _reactIntl = __webpack_require__(1);
	
	var _intl = __webpack_require__(74);
	
	var _intl2 = _interopRequireDefault(_intl);
	
	var _intlLocalesSupported = __webpack_require__(75);
	
	var _intlLocalesSupported2 = _interopRequireDefault(_intlLocalesSupported);
	
	__webpack_require__(76);
	
	var _en = __webpack_require__(83);
	
	var _en2 = _interopRequireDefault(_en);
	
	var _en3 = __webpack_require__(49);
	
	var _en4 = _interopRequireDefault(_en3);
	
	__webpack_require__(77);
	
	var _fr = __webpack_require__(84);
	
	var _fr2 = _interopRequireDefault(_fr);
	
	var _fr3 = __webpack_require__(50);
	
	var _fr4 = _interopRequireDefault(_fr3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// list of available languages
	var enabledLanguages = exports.enabledLanguages = ['en', 'fr'];
	
	// this object will have language-specific data added to it which will be placed in the state when that language is active
	// if localization data get to big, stop importing in all languages and switch to using API requests to load upon switching languages
	var localizationData = exports.localizationData = {};
	
	// here you bring in 'intl' browser polyfill and language-specific polyfills
	// (needed as safari doesn't have native intl: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
	// as well as react-intl's language-specific data
	// be sure to use static imports for language or else every language will be included in your build (adds ~800 kb)
	
	
	// need Intl polyfill, Intl not supported in Safari
	
	
	if (global.Intl) {
	  // Determine if the built-in `Intl` has the locale data we need.
	  if (!(0, _intlLocalesSupported2.default)(enabledLanguages)) {
	    // `Intl` exists, but it doesn't have the data we need, so load the
	    // polyfill and patch the constructors we need with the polyfill's.
	    global.Intl.NumberFormat = _intl2.default.NumberFormat;
	    global.Intl.DateTimeFormat = _intl2.default.DateTimeFormat;
	  }
	} else {
	  // No `Intl`, so use and load the polyfill.
	  global.Intl = _intl2.default;
	}
	
	// use this to allow nested messages, taken from docs:
	// https://github.com/yahoo/react-intl/wiki/Upgrade-Guide#flatten-messages-object
	function flattenMessages() {
	  var nestedMessages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	
	  return Object.keys(nestedMessages).reduce(function (messages, key) {
	    var value = nestedMessages[key];
	    var prefixedKey = prefix ? prefix + '.' + key : key;
	
	    if (typeof value === 'string') {
	      messages[prefixedKey] = value; // eslint-disable-line no-param-reassign
	    } else {
	      Object.assign(messages, flattenMessages(value, prefixedKey));
	    }
	
	    return messages;
	  }, {});
	}
	
	// bring in intl polyfill, react-intl, and app-specific language data
	
	(0, _reactIntl.addLocaleData)(_en2.default);
	localizationData.en = _en4.default;
	localizationData.en.messages = flattenMessages(localizationData.en.messages);
	
	(0, _reactIntl.addLocaleData)(_fr2.default);
	localizationData.fr = _fr4.default;
	localizationData.fr.messages = flattenMessages(localizationData.fr.messages);

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getShowAddPost = undefined;
	
	var _AppActions = __webpack_require__(7);
	
	// Initial State
	var initialState = {
	  showAddPost: false
	}; // Import Actions
	
	
	var AppReducer = function AppReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _AppActions.TOGGLE_ADD_POST:
	      return {
	        showAddPost: !state.showAddPost
	      };
	
	    default:
	      return state;
	  }
	};
	
	/* Selectors */
	
	// Get showAddPost
	var getShowAddPost = exports.getShowAddPost = function getShowAddPost(state) {
	  return state.app.showAddPost;
	};
	
	// Export Reducer
	exports.default = AppReducer;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reduxDevtools = __webpack_require__(85);
	
	var _reduxDevtoolsLogMonitor = __webpack_require__(87);
	
	var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);
	
	var _reduxDevtoolsDockMonitor = __webpack_require__(86);
	
	var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _reduxDevtools.createDevTools)(_react2.default.createElement(
	  _reduxDevtoolsDockMonitor2.default,
	  {
	    toggleVisibilityKey: 'ctrl-h',
	    changePositionKey: 'ctrl-w',
	    defaultIsVisible: false },
	  _react2.default.createElement(_reduxDevtoolsLogMonitor2.default, null)
	));

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SWITCH_LANGUAGE = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.switchLanguage = switchLanguage;
	
	var _setup = __webpack_require__(15);
	
	// Export Constants
	var SWITCH_LANGUAGE = exports.SWITCH_LANGUAGE = 'SWITCH_LANGUAGE';
	
	function switchLanguage(newLang) {
	  return _extends({
	    type: SWITCH_LANGUAGE
	  }, _setup.localizationData[newLang]);
	}

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.IntlWrapper = IntlWrapper;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactIntl = __webpack_require__(1);
	
	var _reactRedux = __webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function IntlWrapper(props) {
	  return _react2.default.createElement(
	    _reactIntl.IntlProvider,
	    props.intl,
	    props.children
	  );
	}
	
	IntlWrapper.propTypes = {
	  children: _react.PropTypes.element.isRequired,
	  intl: _react.PropTypes.object.isRequired
	};
	
	// Retrieve data from store as props
	function mapStateToProps(store) {
	  return {
	    intl: store.intl
	  };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(IntlWrapper);

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(3);
	
	var _App = __webpack_require__(51);
	
	var _App2 = _interopRequireDefault(_App);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// require.ensure polyfill for node
	if (false) {
	  require.ensure = function requireModule(deps, callback) {
	    callback(require);
	  };
	}
	
	/* Workaround for async react routes to work with react-hot-reloader till
	  https://github.com/reactjs/react-router/issues/2182 and
	  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
	 */
	/* eslint-disable global-require */
	if (process.env.NODE_ENV !== 'production') {
	  // Require async routes only in development for react-hot-reloader to work.
	  __webpack_require__(59);
	  __webpack_require__(58);
	}
	
	// react-router setup with code-splitting
	// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
	exports.default = _react2.default.createElement(
	  _reactRouter.Route,
	  { path: '/', component: _App2.default },
	  _react2.default.createElement(_reactRouter.IndexRoute, {
	    getComponent: function getComponent(nextState, cb) {
	      __webpack_require__.e/* nsure */(2).catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	        cb(null, __webpack_require__(90).default);
	      }).bind(null, __webpack_require__));
	    }
	  }),
	  _react2.default.createElement(_reactRouter.Route, {
	    path: '/wizard',
	    getComponent: function getComponent(nextState, cb) {
	      __webpack_require__.e/* nsure */(1).catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	        cb(null, __webpack_require__(91).default);
	      }).bind(null, __webpack_require__));
	    }
	  })
	);

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.configureStore = configureStore;
	
	var _redux = __webpack_require__(19);
	
	var _reduxThunk = __webpack_require__(88);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _DevTools = __webpack_require__(17);
	
	var _DevTools2 = _interopRequireDefault(_DevTools);
	
	var _reducers = __webpack_require__(64);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Main store function
	 */
	function configureStore() {
	  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	  // Middleware and store enhancers
	  var enhancers = [(0, _redux.applyMiddleware)(_reduxThunk2.default)];
	
	  if (process.env.CLIENT && process.env.NODE_ENV === 'development') {
	    // Enable DevTools only when rendering on client and during development.
	    enhancers.push(window.devToolsExtension ? window.devToolsExtension() : _DevTools2.default.instrument());
	  }
	
	  var store = (0, _redux.createStore)(_reducers2.default, initialState, _redux.compose.apply(undefined, enhancers));
	
	  // For hot reloading reducers
	  if (false) {
	    // Enable Webpack hot module replacement for reducers
	    module.hot.accept('./reducers', function () {
	      var nextReducer = require('./reducers').default; // eslint-disable-line global-require
	      store.replaceReducer(nextReducer);
	    });
	  }
	
	  return store;
	}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  _medicalEntry2.default.count().exec(function (err, count) {
	    if (count > 0) {
	      return;
	    }
	
	    var dummyRights = {
	      "Medical_Condition": "OSA1",
	      "rights": [{
	        "Medical_Right": "hopa",
	        "Medical_Right_Description": "Bla",
	        "description": "CPAP (continuous positive airway pressure)",
	        "filters": [{
	          "name": "Age",
	          "filter_type": "date",
	          "min": 10,
	          "max": 30
	        }, {
	          "name": "Weight",
	          "filter_type": "range",
	          "min": 10,
	          "max": 30
	        }, {
	          "name": "Smoking",
	          "filter_type": "boolean",
	          "value": false
	        }, {
	          "name": "Family_Background",
	          "filter_type": "boolean",
	          "value": true
	        }]
	      }]
	    };
	
	    var me1 = new _medicalEntry2.default({ condition: 'OSA1', rights: dummyRights });
	
	    _medicalEntry2.default.create([me1], function (error) {
	      if (!error) {
	        // console.log('ready to go....');
	      }
	    });
	  });
	};
	
	var _medicalEntry = __webpack_require__(11);
	
	var _medicalEntry2 = _interopRequireDefault(_medicalEntry);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _express = __webpack_require__(4);
	
	var _medicalrights = __webpack_require__(65);
	
	var MedicalRightsController = _interopRequireWildcard(_medicalrights);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	/**
	 * Created by ziv on 22/04/2017.
	 */
	var router = new _express.Router();
	
	// Get all conditions
	router.route('/medicalConditions').get(MedicalRightsController.getAllConditions);
	
	// Get all rights
	router.route('/medicalrights').get(MedicalRightsController.getMedicalRights);
	
	// Get one post by cuid
	router.route('/medicalrights/:condition').get(MedicalRightsController.getMedicalRights);
	
	exports.default = router;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _express = __webpack_require__(4);
	
	var _populateDB = __webpack_require__(66);
	
	var PopulateDBController = _interopRequireWildcard(_populateDB);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var router = new _express.Router();
	
	// Get all rights from DB and save to DB
	router.route('/populateDB').get(PopulateDBController.populateDB);
	
	exports.default = router;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _express = __webpack_require__(4);
	
	var _post = __webpack_require__(67);
	
	var PostController = _interopRequireWildcard(_post);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var router = new _express.Router();
	
	// Get all Posts
	router.route('/posts').get(PostController.getPosts);
	
	// Get one post by cuid
	router.route('/posts/:cuid').get(PostController.getPost);
	
	// Add a new Post
	router.route('/posts').post(PostController.addPost);
	
	// Delete a post by cuid
	router.route('/posts/:cuid').delete(PostController.deletePost);
	
	exports.default = router;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fetchComponentData = fetchComponentData;
	
	var _promiseUtils = __webpack_require__(70);
	
	function fetchComponentData(store, components, params) {
	  var needs = components.reduce(function (prev, current) {
	    return (current.need || []).concat((current.WrappedComponent && current.WrappedComponent.need !== current.need ? current.WrappedComponent.need : []) || []).concat(prev);
	  }, []);
	
	  return (0, _promiseUtils.sequence)(needs, function (need) {
	    return store.dispatch(need(params, store.getState()));
	  });
	} /*
	  Utility function to fetch required data for component to render in server side.
	  This was inspired from https://github.com/caljrimmer/isomorphic-redux-app/blob/73e6e7d43ccd41e2eb557a70be79cebc494ee54b/src/common/api/fetchComponentDataBeforeRender.js
	  */

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';
	
	var webpack = __webpack_require__(13);
	var cssnext = __webpack_require__(80);
	var postcssFocus = __webpack_require__(81);
	var postcssReporter = __webpack_require__(82);
	
	module.exports = {
	  devtool: 'cheap-module-eval-source-map',
	
	  entry: {
	    app: ['eventsource-polyfill', 'webpack-hot-middleware/client', 'webpack/hot/only-dev-server', 'react-hot-loader/patch', './client/index.js'],
	    vendor: ['react', 'react-dom']
	  },
	
	  output: {
	    path: __dirname,
	    filename: 'app.js',
	    publicPath: 'http://0.0.0.0:8000/'
	  },
	
	  resolve: {
	    extensions: ['', '.js', '.jsx'],
	    modules: ['client', 'node_modules']
	  },
	
	  node: {
	    dns: 'mock',
	    net: 'mock'
	  },
	
	  module: {
	    loaders: [{
	      test: /\.css$/,
	      exclude: /node_modules/,
	      loader: 'style-loader!css-loader?localIdentName=[name]__[local]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader'
	    }, {
	      test: /\.css$/,
	      include: /node_modules/,
	      loaders: ['style-loader', 'css-loader']
	    }, {
	      test: /\.jsx*$/,
	      exclude: [/node_modules/, /.+\.config.js/],
	      loader: 'babel'
	    }, {
	      test: /\.(jpe?g|gif|png|svg)$/i,
	      loader: 'url-loader?limit=10000'
	    }, {
	      test: /\.json$/,
	      loader: 'json-loader'
	    }]
	  },
	
	  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.optimize.CommonsChunkPlugin({
	    name: 'vendor',
	    minChunks: Infinity,
	    filename: 'vendor.js'
	  }), new webpack.DefinePlugin({
	    'process.env': {
	      CLIENT: JSON.stringify(true),
	      'NODE_ENV': JSON.stringify('development')
	    }
	  })],
	
	  postcss: function postcss() {
	    return [postcssFocus(), cssnext({
	      browsers: ['last 2 versions', 'IE > 10']
	    }), postcssReporter({
	      clearMessages: true
	    })];
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = require("webpack-dev-middleware");

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = require("webpack-hot-middleware");

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getSelectedMedicalRights = exports.getMedicalRights = undefined;
	
	var _WizardActions = __webpack_require__(38);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	// Initial State
	var initialState = {
	  data: [],
	  selected: []
	};
	
	var WizardReducer = function WizardReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _WizardActions.INIT_MEDICAL_RIGHTS:
	      return {
	        data: action.medicalRights,
	        selected: []
	      };
	
	    case _WizardActions.SELECT_MEDICAL_CONDITION:
	      return {
	        data: [].concat(_toConsumableArray(state.data)),
	        selected: [action.medicalCondition].concat(_toConsumableArray(state.selected))
	      };
	
	    case _WizardActions.UNSELECT_MEDICAL_CONDITION:
	      return {
	        data: [].concat(_toConsumableArray(state.data)),
	        selected: state.selected.filter(function (item) {
	          return item.condition !== action.medicalCondition.condition;
	        })
	      };
	    // case DELETE_POST :
	    //   return {
	    //     data: state.data.filter(post => post.cuid !== action.cuid),
	    //   };
	
	    default:
	      return state;
	  }
	};
	
	/* Selectors */
	
	// Get all posts
	var getMedicalRights = exports.getMedicalRights = function getMedicalRights(state) {
	  return state.medicalRights.data;
	};
	
	var getSelectedMedicalRights = exports.getSelectedMedicalRights = function getSelectedMedicalRights(state) {
	  return state.medicalRights.data.filter(function (right) {
	    return right.isSelected;
	  });
	};
	// Get post by cuid
	// export const getPost = (state, cuid) => state.posts.data.filter(post => post.cuid === cuid)[0];
	
	// Export Reducer
	exports.default = WizardReducer;

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = require("material-ui/FlatButton");

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TERMS_AGREE = exports.UPDATE_USER = exports.INIT_USER = undefined;
	exports.initUser = initUser;
	exports.updateUser = updateUser;
	exports.fetchUser = fetchUser;
	exports.updateUserDetails = updateUserDetails;
	
	var _apiCaller = __webpack_require__(10);
	
	var _apiCaller2 = _interopRequireDefault(_apiCaller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import Cookies from 'universal-cookie';
	
	// Export Constants
	var INIT_USER = exports.INIT_USER = 'INIT_USER'; /**
	                                                  * Created by ziv on 11/05/2017.
	                                                  */
	var UPDATE_USER = exports.UPDATE_USER = 'UPDATE_USER';
	var TERMS_AGREE = exports.TERMS_AGREE = 'TERMS_AGREE';
	
	// const cookies = new Cookies();
	
	function initUser(user) {
	  return {
	    type: INIT_USER,
	    user: user
	  };
	}
	
	function updateUser(user) {
	  return {
	    type: UPDATE_USER,
	    user: user
	  };
	}
	
	function fetchUser() {
	  return function (dispatch) {
	    //try to load from cookies otherwise use default
	    // let user = cookies.get('mzr_usr');
	    var user = getDefaultUser();
	    if (!user) {
	      user = getDefaultUser();
	    }
	    // console.log(res.rights);
	    dispatch(initUser(user));
	  };
	}
	
	function updateUserDetails(userToUpdate) {
	  return function (dispatch) {
	    //try to load from cookies otherwise use default
	    // cookies.set('mzr_usr',userToUpdate);
	    dispatch(updateUser(userToUpdate));
	  };
	}
	
	function getDefaultUser() {
	  var initialDob = new Date();
	  return {
	    gender: 'female',
	    isSmoking: false,
	    dob: initialDob,
	    health_insurance: 1
	  };
	}

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.UNSELECT_MEDICAL_CONDITION = exports.SELECT_MEDICAL_CONDITION = exports.INIT_MEDICAL_RIGHTS = undefined;
	exports.fetchMedicalRights = fetchMedicalRights;
	exports.selectCondition = selectCondition;
	exports.unselectCondition = unselectCondition;
	
	var _apiCaller = __webpack_require__(10);
	
	var _apiCaller2 = _interopRequireDefault(_apiCaller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Export Constants
	var INIT_MEDICAL_RIGHTS = exports.INIT_MEDICAL_RIGHTS = 'INIT_MEDICAL_RIGHTS'; /**
	                                                                                * Created by ziv on 11/05/2017.
	                                                                                */
	var SELECT_MEDICAL_CONDITION = exports.SELECT_MEDICAL_CONDITION = 'SELECT_MEDICAL_CONDITION';
	var UNSELECT_MEDICAL_CONDITION = exports.UNSELECT_MEDICAL_CONDITION = 'UNSELECT_MEDICAL_CONDITION';
	
	function initMedicalRights(medicalRights) {
	  return {
	    type: INIT_MEDICAL_RIGHTS,
	    medicalRights: medicalRights
	  };
	}
	
	function selectMedicalCondition(medicalCondition) {
	  return {
	    type: SELECT_MEDICAL_CONDITION,
	    medicalCondition: medicalCondition
	  };
	}
	
	function unselectMedicalCondition(medicalCondition) {
	  return {
	    type: UNSELECT_MEDICAL_CONDITION,
	    medicalCondition: medicalCondition
	  };
	}
	
	function fetchMedicalRights() {
	  return function (dispatch) {
	    return (0, _apiCaller2.default)('medicalrights').then(function (res) {
	      // console.log(res.rights);
	      dispatch(initMedicalRights(res.medicalEntry));
	    });
	  };
	}
	
	function selectCondition(medicalCondition) {
	  return function (dispatch) {
	    // console.log(res.rights);
	    dispatch(selectMedicalCondition(medicalCondition));
	  };
	}
	
	function unselectCondition(medicalCondition) {
	  return function (dispatch) {
	    // console.log(res.rights);
	    dispatch(unselectMedicalCondition(medicalCondition));
	  };
	}

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = require("material-ui/CircularProgress");

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = require("material-ui/Dialog");

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = require("material-ui/RaisedButton");

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	/**
	 * Bool short logo svg
	 */
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var BoolLogoSvg = function (_Component) {
	  _inherits(BoolLogoSvg, _Component);
	
	  function BoolLogoSvg() {
	    _classCallCheck(this, BoolLogoSvg);
	
	    return _possibleConstructorReturn(this, (BoolLogoSvg.__proto__ || Object.getPrototypeOf(BoolLogoSvg)).apply(this, arguments));
	  }
	
	  _createClass(BoolLogoSvg, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          width = _props.width,
	          color = _props.color,
	          className = _props.className;
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'span',
	          null,
	          'Insu'
	        ),
	        _react2.default.createElement(
	          'span',
	          null,
	          'rights'
	        )
	      );
	    }
	  }]);
	
	  return BoolLogoSvg;
	}(_react.Component);
	
	exports.default = BoolLogoSvg;
	
	
	BoolLogoSvg.propTypes = {
	  width: _react2.default.PropTypes.number,
	  color: _react2.default.PropTypes.string,
	  className: _react2.default.PropTypes.string
	};
	
	BoolLogoSvg.defaultProps = {
	  color: '#154a99',
	  width: 200,
	  className: ''
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getUser = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _UserActions = __webpack_require__(37);
	
	// let initialDob = new Date();
	// initialDob.setFullYear(initialDob.getFullYear() - 25);
	// Initial State
	var initialState = { user: {} };
	
	var UserReducer = function UserReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _UserActions.INIT_USER:
	      return _extends({}, action.user);
	    case _UserActions.UPDATE_USER:
	      console.log('update');
	      return _extends({}, action.user);
	
	    default:
	      return state;
	  }
	};
	
	/* Selectors */
	var getUser = exports.getUser = function getUser(state) {
	  return state.user;
	};
	
	// Get post by cuid
	// export const getPost = (state, cuid) => state.posts.data.filter(post => post.cuid === cuid)[0];
	
	// Export Reducer
	exports.default = UserReducer;

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = require("material-ui/DatePicker");

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = require("material-ui/MenuItem");

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = require("material-ui/RadioButton");

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = require("material-ui/SelectField");

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = require("react-stepzilla");

/***/ },
/* 49 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  locale: 'en',
	  messages: {
	    siteTitle: 'MERN Starter Blog',
	    addPost: 'Add Post',
	    switchLanguage: 'Switch Language',
	    twitterMessage: 'We are on Twitter',
	    by: 'By',
	    deletePost: 'Delete Post',
	    createNewPost: 'Create new post',
	    authorName: 'Author\'s Name',
	    postTitle: 'Post Title',
	    postContent: 'Post Content',
	    submit: 'Submit',
	    comment: 'user {name} {value, plural,\n    \t  =0 {does not have any comments}\n    \t  =1 {has # comment}\n    \t  other {has # comments}\n    \t}',
	    HTMLComment: 'user <b style=\'font-weight: bold\'>{name} </b> {value, plural,\n    \t  =0 {does not have <i style=\'font-style: italic\'>any</i> comments}\n    \t  =1 {has <i style=\'font-style: italic\'>#</i> comment}\n    \t  other {has <i style=\'font-style: italic\'>#</i> comments}\n    \t}',
	    nestedDateComment: 'user {name} {value, plural,\n    \t  =0 {does not have any comments}\n    \t  =1 {has # comment}\n    \t  other {has # comments}\n    \t} as of {date}'
	  }
	};

/***/ },
/* 50 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  locale: 'fr',
	  messages: {
	    siteTitle: 'MERN blog de démarrage',
	    addPost: 'Ajouter Poster',
	    switchLanguage: 'Changer de langue',
	    twitterMessage: 'Nous sommes sur Twitter',
	    by: 'Par',
	    deletePost: 'Supprimer le message',
	    createNewPost: 'Créer un nouveau message',
	    authorName: 'Nom de l\'auteur',
	    postTitle: 'Titre de l\'article',
	    postContent: 'Contenu après',
	    submit: 'Soumettre',
	    comment: 'user {name} {value, plural,\n    \t  =0 {does not have any comments}\n    \t  =1 {has # comment}\n    \t  other {has # comments}\n    \t} (in real app this would be translated to French)',
	    HTMLComment: 'user <b style=\'font-weight: bold\'>{name} </b> {value, plural,\n    \t  =0 {does not have <i style=\'font-style: italic\'>any</i> comments}\n    \t  =1 {has <i style=\'font-style: italic\'>#</i> comment}\n    \t  other {has <i style=\'font-style: italic\'>#</i> comments}\n    \t} (in real app this would be translated to French)',
	    nestedDateComment: 'user {name} {value, plural,\n  \t\t  =0 {does not have any comments}\n  \t\t  =1 {has # comment}\n  \t\t  other {has # comments}\n  \t\t} as of {date} (in real app this would be translated to French)'
	  }
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.App = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(2);
	
	var _App = {
	  "container": "_4uEyKcd5WHob5qPzotT7",
	  "progtrckr": "_3Y6DQZh1IQy_Ho6ycb_ahP",
	  "progtrckr-todo": "_1N_rZ4VqyEgJwR20fEJFZ1",
	  "progtrckr-doing": "_3uNOy-0WRNUayqAfLXOFGF",
	  "progtrckr-done": "_-ZF6hpRyofG5f3ViJeGlc"
	};
	
	var _App2 = _interopRequireDefault(_App);
	
	var _reactHelmet = __webpack_require__(6);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _DevTools = __webpack_require__(17);
	
	var _DevTools2 = _interopRequireDefault(_DevTools);
	
	var _Header = __webpack_require__(53);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _Footer = __webpack_require__(52);
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	var _AppActions = __webpack_require__(7);
	
	var _IntlActions = __webpack_require__(18);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Style
	
	
	// Import Components
	
	
	// Import Actions
	
	
	var App = exports.App = function (_Component) {
	  _inherits(App, _Component);
	
	  function App(props) {
	    _classCallCheck(this, App);
	
	    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	
	    _this.toggleAddPostSection = function () {
	      _this.props.dispatch((0, _AppActions.toggleAddPost)());
	    };
	
	    _this.state = { isMounted: false };
	    return _this;
	  }
	
	  _createClass(App, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setState({ isMounted: true }); // eslint-disable-line
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && _react2.default.createElement(_DevTools2.default, null),
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(_reactHelmet2.default, {
	            title: 'MERN Starter - Blog App',
	            titleTemplate: '%s - Blog App',
	            meta: [{ charset: 'utf-8' }, {
	              'http-equiv': 'X-UA-Compatible',
	              content: 'IE=edge'
	            }, {
	              name: 'viewport',
	              content: 'width=device-width, initial-scale=1'
	            }]
	          }),
	          _react2.default.createElement(_Header2.default, {
	            switchLanguage: function switchLanguage(lang) {
	              return _this2.props.dispatch((0, _IntlActions.switchLanguage)(lang));
	            },
	            intl: this.props.intl,
	            toggleAddPost: this.toggleAddPostSection
	          }),
	          _react2.default.createElement(
	            'div',
	            { className: _App2.default.container },
	            this.props.children
	          )
	        )
	      );
	    }
	  }]);
	
	  return App;
	}(_react.Component);
	
	App.propTypes = {
	  children: _react.PropTypes.object.isRequired,
	  dispatch: _react.PropTypes.func.isRequired,
	  intl: _react.PropTypes.object.isRequired
	};
	
	// Retrieve data from store as props
	function mapStateToProps(store) {
	  return {
	    intl: store.intl
	  };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(App);

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Footer = Footer;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactIntl = __webpack_require__(1);
	
	var _Footer = {
	  "footer": "_3vPEi87A1wyh1iLR3bsBGf"
	};
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	var _headerBk = '/' + "bbaeb5f32b7042f0def39648a1d111b9.png";
	
	var _headerBk2 = _interopRequireDefault(_headerBk);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Import Style
	function Footer() {
	  return _react2.default.createElement(
	    'div',
	    { style: { background: '#FFF url(' + _headerBk2.default + ') center' }, className: _Footer2.default.footer },
	    _react2.default.createElement(
	      'p',
	      null,
	      '\xA9 2017 \xB7 Hashnode \xB7 MazorTech Inc.'
	    ),
	    _react2.default.createElement(
	      'p',
	      null,
	      _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'twitterMessage' }),
	      ' : ',
	      _react2.default.createElement(
	        'a',
	        { href: 'https://twitter.com/zikaziv1', target: '_Blank' },
	        '@Mazor'
	      )
	    )
	  );
	}
	
	// Import Images
	exports.default = Footer;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Header = Header;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(3);
	
	var _reactIntl = __webpack_require__(1);
	
	var _Header = {
	  "header": "_2sEZYfHlvDy9uXqVIXG1aM",
	  "content": "_1eavAvnySzoZc5rld6Q4pa",
	  "site-title": "UfFn6muOcOBjkVI5_yltp",
	  "add-post-button": "CkTz6a2gQTJjwXIEAlTSk",
	  "language-switcher": "_3bviQya5ZWCvWr6lGdfO9h",
	  "selected": "_3IRlmCpgSZBcTGVIGHvgaI",
	  "logo": "LNLY14D54Y1IQaktsExe3"
	};
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _IconSvg = __webpack_require__(42);
	
	var _IconSvg2 = _interopRequireDefault(_IconSvg);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Import Style
	function Header(props, context) {
	  var languageNodes = props.intl.enabledLanguages.map(function (lang) {
	    return _react2.default.createElement(
	      'li',
	      { key: lang, onClick: function onClick() {
	          return props.switchLanguage(lang);
	        }, className: lang === props.intl.locale ? _Header2.default.selected : '' },
	      lang
	    );
	  });
	
	  return _react2.default.createElement(
	    'div',
	    { className: _Header2.default.header },
	    _react2.default.createElement(
	      _reactRouter.Link,
	      { to: '/' },
	      _react2.default.createElement(
	        'div',
	        { className: _Header2.default.logo },
	        _react2.default.createElement(_IconSvg2.default, null)
	      )
	    ),
	    _react2.default.createElement('div', { className: _Header2.default['language-switcher'] })
	  );
	}
	
	Header.contextTypes = {
	  router: _react2.default.PropTypes.object
	};
	
	Header.propTypes = {
	  toggleAddPost: _react.PropTypes.func.isRequired,
	  switchLanguage: _react.PropTypes.func.isRequired,
	  intl: _react.PropTypes.object.isRequired
	};
	
	exports.default = Header;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _setup = __webpack_require__(15);
	
	var _IntlActions = __webpack_require__(18);
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var initLocale = global.navigator && global.navigator.language || 'en';
	
	var initialState = _extends({
	  locale: initLocale,
	  enabledLanguages: _setup.enabledLanguages
	}, _setup.localizationData[initLocale] || {});
	
	var IntlReducer = function IntlReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _IntlActions.SWITCH_LANGUAGE:
	      {
	        var type = action.type,
	            actionWithoutType = _objectWithoutProperties(action, ['type']); // eslint-disable-line
	
	
	        return _extends({}, state, actionWithoutType);
	      }
	
	    default:
	      return state;
	  }
	};
	
	exports.default = IntlReducer;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PostCreateWidget = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactIntl = __webpack_require__(1);
	
	var _PostCreateWidget = {
	  "form": "_1HNxVmVCIfsWU6Q22cRSd7",
	  "form-content": "VlHIHfXe5nkoruuc0N8pJ",
	  "form-title": "_32cczwmKrlcNdTsvCr-oBL",
	  "form-field": "_1srubE9zVaJuCqkgKCA3lY",
	  "post-submit-button": "_2m9Bzr_sJcQ7FK3o3X0PBL",
	  "appear": "_30KT3DYyUvGj_5sBYnixvw"
	};
	
	var _PostCreateWidget2 = _interopRequireDefault(_PostCreateWidget);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Style
	
	
	var PostCreateWidget = exports.PostCreateWidget = function (_Component) {
	  _inherits(PostCreateWidget, _Component);
	
	  function PostCreateWidget() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, PostCreateWidget);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PostCreateWidget.__proto__ || Object.getPrototypeOf(PostCreateWidget)).call.apply(_ref, [this].concat(args))), _this), _this.addPost = function () {
	      var nameRef = _this.refs.name;
	      var titleRef = _this.refs.title;
	      var contentRef = _this.refs.content;
	      if (nameRef.value && titleRef.value && contentRef.value) {
	        _this.props.addPost(nameRef.value, titleRef.value, contentRef.value);
	        nameRef.value = titleRef.value = contentRef.value = '';
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(PostCreateWidget, [{
	    key: 'render',
	    value: function render() {
	      var cls = _PostCreateWidget2.default.form + ' ' + (this.props.showAddPost ? _PostCreateWidget2.default.appear : '');
	      return _react2.default.createElement(
	        'div',
	        { className: cls },
	        _react2.default.createElement(
	          'div',
	          { className: _PostCreateWidget2.default['form-content'] },
	          _react2.default.createElement(
	            'h2',
	            { className: _PostCreateWidget2.default['form-title'] },
	            _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'createNewPost' })
	          ),
	          _react2.default.createElement('input', { placeholder: this.props.intl.messages.authorName, className: _PostCreateWidget2.default['form-field'], ref: 'name' }),
	          _react2.default.createElement('input', { placeholder: this.props.intl.messages.postTitle, className: _PostCreateWidget2.default['form-field'], ref: 'title' }),
	          _react2.default.createElement('textarea', { placeholder: this.props.intl.messages.postContent, className: _PostCreateWidget2.default['form-field'], ref: 'content' }),
	          _react2.default.createElement(
	            'a',
	            { className: _PostCreateWidget2.default['post-submit-button'], href: '#', onClick: this.addPost },
	            _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'submit' })
	          )
	        )
	      );
	    }
	  }]);
	
	  return PostCreateWidget;
	}(_react.Component);
	
	PostCreateWidget.propTypes = {
	  addPost: _react.PropTypes.func.isRequired,
	  showAddPost: _react.PropTypes.bool.isRequired,
	  intl: _reactIntl.intlShape.isRequired
	};
	
	exports.default = (0, _reactIntl.injectIntl)(PostCreateWidget);

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _PostListItem = __webpack_require__(57);
	
	var _PostListItem2 = _interopRequireDefault(_PostListItem);
	
	var _progTracker = {
	  "progtrckr": "_1gots0T1qmximnr_geso4_",
	  "progtrckr-todo": "_3ojFsatz22_d65C5w_LGhd",
	  "progtrckr-doing": "_1UpcKFdVQwIpotH0H44uYE",
	  "progtrckr-done": "_21aScf6uurGWYPvd6q37Cr"
	};
	
	var _progTracker2 = _interopRequireDefault(_progTracker);
	
	var _reactStepzilla = __webpack_require__(48);
	
	var _reactStepzilla2 = _interopRequireDefault(_reactStepzilla);
	
	var _Step = __webpack_require__(60);
	
	var _Step2 = _interopRequireDefault(_Step);
	
	var _Step3 = __webpack_require__(61);
	
	var _Step4 = _interopRequireDefault(_Step3);
	
	var _Step5 = __webpack_require__(62);
	
	var _Step6 = _interopRequireDefault(_Step5);
	
	var _Step7 = __webpack_require__(63);
	
	var _Step8 = _interopRequireDefault(_Step7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//Steps
	function PostList(props) {
	  var _this = this;
	
	  var steps = [{ name: 'Diagnosis', component: _react2.default.createElement(_Step2.default, { getStore: function getStore() {
	        return _this.getStore();
	      }, updateStore: function updateStore(u) {
	        _this.updateStore(u);
	      } }) }, { name: 'Info', component: _react2.default.createElement(_Step4.default, { getStore: function getStore() {
	        return _this.getStore();
	      }, updateStore: function updateStore(u) {
	        _this.updateStore(u);
	      } }) }, { name: 'Terms', component: _react2.default.createElement(_Step6.default, { getStore: function getStore() {
	        return _this.getStore();
	      }, updateStore: function updateStore(u) {
	        _this.updateStore(u);
	      } }) }, { name: 'Rights', component: _react2.default.createElement(_Step8.default, { getStore: function getStore() {
	        return _this.getStore();
	      }, updateStore: function updateStore(u) {
	        _this.updateStore(u);
	      } }) }];
	
	  return _react2.default.createElement(
	    'div',
	    { className: 'listView' },
	    _react2.default.createElement(
	      'div',
	      { className: 'step-progress' },
	      _react2.default.createElement(_reactStepzilla2.default, { steps: steps })
	    )
	  );
	}
	
	// Import Components
	
	
	PostList.propTypes = {
	  posts: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	    name: _react.PropTypes.string.isRequired,
	    title: _react.PropTypes.string.isRequired,
	    content: _react.PropTypes.string.isRequired,
	    slug: _react.PropTypes.string.isRequired,
	    cuid: _react.PropTypes.string.isRequired
	  })).isRequired,
	  handleDeletePost: _react.PropTypes.func.isRequired
	};
	
	exports.default = PostList;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(3);
	
	var _reactIntl = __webpack_require__(1);
	
	var _PostListItem = {
	  "single-post": "_3B15Q62CNe0LaxJ8BUZr5W",
	  "post-title": "_3mZF-WLrnBUxaWr9zFi6Q_",
	  "author-name": "_1cSDPptMi8rvUEB2tAonlW",
	  "post-desc": "_3D8Fgk2edKTkFyBDsUEZ2u",
	  "post-action": "_3S84cKmlvGO49pK1biPlXr",
	  "divider": "y2SIF3ydn02JYMgeklO7S",
	  "post-detail": "_3W9vrxIdnQ93EmH-x2UgJR"
	};
	
	var _PostListItem2 = _interopRequireDefault(_PostListItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function PostListItem(props) {
	  return _react2.default.createElement(
	    'div',
	    { className: _PostListItem2.default['single-post'] },
	    _react2.default.createElement(
	      'h3',
	      { className: _PostListItem2.default['post-title'] },
	      _react2.default.createElement(
	        _reactRouter.Link,
	        { to: '/posts/' + props.post.slug + '-' + props.post.cuid },
	        props.post.title
	      )
	    ),
	    _react2.default.createElement(
	      'p',
	      { className: _PostListItem2.default['author-name'] },
	      _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'by' }),
	      ' ',
	      props.post.name
	    ),
	    _react2.default.createElement(
	      'p',
	      { className: _PostListItem2.default['post-desc'] },
	      props.post.content
	    ),
	    _react2.default.createElement(
	      'p',
	      { className: _PostListItem2.default['post-action'] },
	      _react2.default.createElement(
	        'a',
	        { href: '#', onClick: props.onDelete },
	        _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'deletePost' })
	      )
	    ),
	    _react2.default.createElement('hr', { className: _PostListItem2.default.divider })
	  );
	}
	
	// Import Style
	
	
	PostListItem.propTypes = {
	  post: _react.PropTypes.shape({
	    name: _react.PropTypes.string.isRequired,
	    title: _react.PropTypes.string.isRequired,
	    content: _react.PropTypes.string.isRequired,
	    slug: _react.PropTypes.string.isRequired,
	    cuid: _react.PropTypes.string.isRequired
	  }).isRequired,
	  onDelete: _react.PropTypes.func.isRequired
	};
	
	exports.default = PostListItem;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PostDetailPage = PostDetailPage;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(2);
	
	var _reactHelmet = __webpack_require__(6);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _reactIntl = __webpack_require__(1);
	
	var _PostListItem = {
	  "single-post": "_3B15Q62CNe0LaxJ8BUZr5W",
	  "post-title": "_3mZF-WLrnBUxaWr9zFi6Q_",
	  "author-name": "_1cSDPptMi8rvUEB2tAonlW",
	  "post-desc": "_3D8Fgk2edKTkFyBDsUEZ2u",
	  "post-action": "_3S84cKmlvGO49pK1biPlXr",
	  "divider": "y2SIF3ydn02JYMgeklO7S",
	  "post-detail": "_3W9vrxIdnQ93EmH-x2UgJR"
	};
	
	var _PostListItem2 = _interopRequireDefault(_PostListItem);
	
	var _PostActions = __webpack_require__(8);
	
	var _PostReducer = __webpack_require__(9);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Import Actions
	function PostDetailPage(props) {
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(_reactHelmet2.default, { title: props.post.title }),
	    _react2.default.createElement(
	      'div',
	      { className: _PostListItem2.default['single-post'] + ' ' + _PostListItem2.default['post-detail'] },
	      _react2.default.createElement(
	        'h3',
	        { className: _PostListItem2.default['post-title'] },
	        props.post.title
	      ),
	      _react2.default.createElement(
	        'p',
	        { className: _PostListItem2.default['author-name'] },
	        _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'by' }),
	        ' ',
	        props.post.name
	      ),
	      _react2.default.createElement(
	        'p',
	        { className: _PostListItem2.default['post-desc'] },
	        props.post.content
	      )
	    )
	  );
	}
	
	// Actions required to provide data for this component to render in sever side.
	
	
	// Import Selectors
	
	
	// Import Style
	PostDetailPage.need = [function (params) {
	  return (0, _PostActions.fetchPost)(params.cuid);
	}];
	
	// Retrieve data from store as props
	function mapStateToProps(state, props) {
	  return {
	    post: (0, _PostReducer.getPost)(state, props.params.cuid)
	  };
	}
	
	PostDetailPage.propTypes = {
	  post: _react.PropTypes.shape({
	    name: _react.PropTypes.string.isRequired,
	    title: _react.PropTypes.string.isRequired,
	    content: _react.PropTypes.string.isRequired,
	    slug: _react.PropTypes.string.isRequired,
	    cuid: _react.PropTypes.string.isRequired
	  }).isRequired
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(PostDetailPage);

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(2);
	
	var _PostList = __webpack_require__(56);
	
	var _PostList2 = _interopRequireDefault(_PostList);
	
	var _PostCreateWidget = __webpack_require__(55);
	
	var _PostCreateWidget2 = _interopRequireDefault(_PostCreateWidget);
	
	var _PostActions = __webpack_require__(8);
	
	var _AppActions = __webpack_require__(7);
	
	var _AppReducer = __webpack_require__(16);
	
	var _PostReducer = __webpack_require__(9);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Components
	
	
	// Import Actions
	
	
	// Import Selectors
	
	
	var PostListPage = function (_Component) {
	  _inherits(PostListPage, _Component);
	
	  function PostListPage() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, PostListPage);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PostListPage.__proto__ || Object.getPrototypeOf(PostListPage)).call.apply(_ref, [this].concat(args))), _this), _this.handleDeletePost = function (post) {
	      if (confirm('Do you want to delete this post')) {
	        // eslint-disable-line
	        _this.props.dispatch((0, _PostActions.deletePostRequest)(post));
	      }
	    }, _this.handleAddPost = function (name, title, content) {
	      _this.props.dispatch((0, _AppActions.toggleAddPost)());
	      _this.props.dispatch((0, _PostActions.addPostRequest)({ name: name, title: title, content: content }));
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(PostListPage, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.dispatch((0, _PostActions.fetchPosts)());
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_PostCreateWidget2.default, { addPost: this.handleAddPost, showAddPost: this.props.showAddPost }),
	        _react2.default.createElement(_PostList2.default, { handleDeletePost: this.handleDeletePost, posts: this.props.posts })
	      );
	    }
	  }]);
	
	  return PostListPage;
	}(_react.Component);
	
	// Actions required to provide data for this component to render in sever side.
	
	
	PostListPage.need = [function () {
	  return (0, _PostActions.fetchPosts)();
	}];
	
	// Retrieve data from store as props
	function mapStateToProps(state) {
	  return {
	    showAddPost: (0, _AppReducer.getShowAddPost)(state),
	    posts: (0, _PostReducer.getPosts)(state)
	  };
	}
	
	PostListPage.propTypes = {
	  posts: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	    name: _react.PropTypes.string.isRequired,
	    title: _react.PropTypes.string.isRequired,
	    content: _react.PropTypes.string.isRequired
	  })).isRequired,
	  showAddPost: _react.PropTypes.bool.isRequired,
	  dispatch: _react.PropTypes.func.isRequired
	};
	
	PostListPage.contextTypes = {
	  router: _react2.default.PropTypes.object
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(PostListPage);

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _RaisedButton = __webpack_require__(41);
	
	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var styles = {
	  pageStyle: {
	    maxHeight: 350,
	    overflow: 'auto'
	  }
	};
	
	var Step1 = function (_Component) {
	  _inherits(Step1, _Component);
	
	  function Step1(props) {
	    _classCallCheck(this, Step1);
	
	    var _this = _possibleConstructorReturn(this, (Step1.__proto__ || Object.getPrototypeOf(Step1)).call(this, props));
	
	    _this.state = {};
	    return _this;
	  }
	
	  _createClass(Step1, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	
	    // not required as this component has no forms or user entry
	    // isValidated() {}
	
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'step step1', style: styles.pageStyle },
	        _react2.default.createElement(
	          'div',
	          { className: 'row' },
	          _react2.default.createElement(
	            'form',
	            { id: 'Form', className: 'form-horizontal' },
	            _react2.default.createElement(
	              'div',
	              { className: 'form-group' },
	              _react2.default.createElement(
	                'label',
	                { className: 'col-md-12 control-label' },
	                _react2.default.createElement(
	                  'h1',
	                  null,
	                  'Mark here the Medical diagnosis '
	                )
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'row' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'col-md-12' },
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-md-6' },
	                    _react2.default.createElement(
	                      'h3',
	                      null,
	                      'This example uses this custom config (which overwrite the default config):'
	                    ),
	                    _react2.default.createElement(
	                      'code',
	                      null,
	                      'preventEnterSubmission=true',
	                      _react2.default.createElement('br', null),
	                      'nextTextOnFinalActionStep="Save"',
	                      _react2.default.createElement('br', null),
	                      'hocValidationAppliedTo=[3]'
	                    )
	                  ),
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'col-md-6' },
	                    _react2.default.createElement(
	                      'h3',
	                      null,
	                      'The default config settings are...'
	                    ),
	                    _react2.default.createElement(
	                      'code',
	                      null,
	                      'showSteps=true',
	                      _react2.default.createElement('br', null),
	                      'showNavigation=true',
	                      _react2.default.createElement('br', null),
	                      'stepsNavigation=true',
	                      _react2.default.createElement('br', null),
	                      'prevBtnOnLastStep=true',
	                      _react2.default.createElement('br', null),
	                      'dontValidate=false',
	                      _react2.default.createElement('br', null),
	                      'preventEnterSubmission=false',
	                      _react2.default.createElement('br', null),
	                      'startAtStep=0',
	                      _react2.default.createElement('br', null),
	                      'nextButtonText=\'Next\'',
	                      _react2.default.createElement('br', null),
	                      'backButtonText=\'Previous\'',
	                      _react2.default.createElement('br', null),
	                      'nextTextOnFinalActionStep=\'[default value of nextButtonText]\'',
	                      _react2.default.createElement('br', null),
	                      'hocValidationAppliedTo: []'
	                    )
	                  )
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return Step1;
	}(_react.Component);
	
	exports.default = Step1;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _DatePicker = __webpack_require__(44);
	
	var _DatePicker2 = _interopRequireDefault(_DatePicker);
	
	var _RadioButton = __webpack_require__(46);
	
	var _SelectField = __webpack_require__(47);
	
	var _SelectField2 = _interopRequireDefault(_SelectField);
	
	var _MenuItem = __webpack_require__(45);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	var _Toggle = __webpack_require__(14);
	
	var _Toggle2 = _interopRequireDefault(_Toggle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Material design
	
	
	var styles = {
	  block: {
	    maxWidth: 250
	  },
	  radioButton: {
	    marginBottom: 16
	  },
	  toggle: {
	    marginBottom: 16
	  }
	};
	
	var Step2 = function (_Component) {
	  _inherits(Step2, _Component);
	
	  function Step2(props) {
	    _classCallCheck(this, Step2);
	
	    var _this = _possibleConstructorReturn(this, (Step2.__proto__ || Object.getPrototypeOf(Step2)).call(this, props));
	
	    _this.state = {
	      termsAgreed: false,
	      dialogOpen: false
	    };
	
	    //Binds
	    _this.handleChange = _this.handleChange.bind(_this);
	    return _this;
	  }
	
	  _createClass(Step2, [{
	    key: 'handleChange',
	    value: function handleChange(event, index, value) {
	      console.log('the new value is' + value);
	      //   this.setState({value});
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'step step2' },
	        _react2.default.createElement(
	          'div',
	          { className: 'row' },
	          _react2.default.createElement(
	            'form',
	            { id: 'Form', className: 'form-horizontal' },
	            _react2.default.createElement(
	              'div',
	              { className: 'form-group' },
	              _react2.default.createElement(
	                'label',
	                { className: 'col-md-12 control-label' },
	                _react2.default.createElement(
	                  'h1',
	                  null,
	                  'We need a few more details to help you'
	                )
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'row content' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'col-md-12' },
	                  _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                      _SelectField2.default,
	                      {
	                        floatingLabelText: 'Health insurance',
	                        value: 1,
	                        onChange: this.handleChange
	                      },
	                      _react2.default.createElement(_MenuItem2.default, { value: 1, primaryText: 'Unitedhealth Group' }),
	                      _react2.default.createElement(_MenuItem2.default, { value: 2, primaryText: 'Wellpoint Inc. Group' }),
	                      _react2.default.createElement(_MenuItem2.default, { value: 3, primaryText: 'Kaiser Foundation Group' }),
	                      _react2.default.createElement(_MenuItem2.default, { value: 4, primaryText: 'Humana Group' }),
	                      _react2.default.createElement(_MenuItem2.default, { value: 5, primaryText: 'Aetna Group' }),
	                      _react2.default.createElement(_MenuItem2.default, { value: 6, primaryText: 'HCSC Group' }),
	                      _react2.default.createElement(_MenuItem2.default, { value: 7, primaryText: 'Cigna Health Group' }),
	                      _react2.default.createElement(_MenuItem2.default, { value: 8, primaryText: 'Highmark Group' }),
	                      _react2.default.createElement(_MenuItem2.default, { value: 9, primaryText: 'Blue Cross Blue Shield Group' })
	                    )
	                  ),
	                  _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(_DatePicker2.default, { hintText: 'Date of birth' })
	                  ),
	                  _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                      _RadioButton.RadioButtonGroup,
	                      { name: 'gender', defaultSelected: 'female' },
	                      _react2.default.createElement(_RadioButton.RadioButton, {
	                        value: 'male',
	                        label: 'Male',
	                        style: styles.radioButton
	                      }),
	                      _react2.default.createElement(_RadioButton.RadioButton, {
	                        value: 'female',
	                        label: 'Female',
	                        style: styles.radioButton
	                      })
	                    )
	                  ),
	                  _react2.default.createElement(
	                    'div',
	                    { style: styles.block },
	                    _react2.default.createElement(_Toggle2.default, {
	                      label: 'Smoking',
	                      style: styles.toggle
	                    })
	                  )
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return Step2;
	}(_react.Component);
	
	exports.default = Step2;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Toggle = __webpack_require__(14);
	
	var _Toggle2 = _interopRequireDefault(_Toggle);
	
	var _Dialog = __webpack_require__(40);
	
	var _Dialog2 = _interopRequireDefault(_Dialog);
	
	var _FlatButton = __webpack_require__(36);
	
	var _FlatButton2 = _interopRequireDefault(_FlatButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var styles = {
	  pageStyle: {
	    maxHeight: 350
	  },
	  termsSection: {
	    maxHeight: 280,
	    overflow: 'auto'
	  },
	  toggle: {
	    marginBottom: 15,
	    marginTop: 15,
	    maxWidth: 250
	  }
	};
	
	var Step3 = function (_Component) {
	  _inherits(Step3, _Component);
	
	  function Step3(props) {
	    _classCallCheck(this, Step3);
	
	    var _this = _possibleConstructorReturn(this, (Step3.__proto__ || Object.getPrototypeOf(Step3)).call(this, props));
	
	    _this.handleOpen = function () {
	      _this.setState({ dialogOpen: true });
	    };
	
	    _this.handleClose = function () {
	      _this.setState({ dialogOpen: false });
	    };
	
	    _this.state = {
	      termsAgreed: false,
	      dialogOpen: false
	    };
	
	    //Binds
	    _this.stateChanged = _this.stateChanged.bind(_this);
	    _this.handleOpen = _this.handleOpen.bind(_this);
	    _this.handleClose = _this.handleClose.bind(_this);
	    return _this;
	  }
	
	  _createClass(Step3, [{
	    key: 'isValidated',
	    value: function isValidated() {
	      console.log(this.state);
	      if (!this.state.termsAgreed) {
	        this.handleOpen();
	      }
	      return this.state.termsAgreed;
	    }
	  }, {
	    key: 'stateChanged',
	    value: function stateChanged(value, isInputChecked) {
	      this.setState({ termsAgreed: isInputChecked });
	      console.log(this.state);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var actions = [_react2.default.createElement(_FlatButton2.default, {
	        label: 'Ok',
	        primary: true,
	        keyboardFocused: true,
	        onTouchTap: this.handleClose
	      })];
	
	      return _react2.default.createElement(
	        'div',
	        { style: styles.pageStyle, className: 'step' },
	        _react2.default.createElement(
	          'section',
	          { style: styles.termsSection },
	          _react2.default.createElement(
	            'h1',
	            null,
	            'Terms of Use'
	          ),
	          _react2.default.createElement(
	            'h3',
	            null,
	            'Agreement between You and Instructure'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            'Last Updated Date: August 30th, 2016'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            'PLEASE READ THIS TERMS OF USE AGREEMENT (THE ',
	            _react2.default.createElement(
	              'b',
	              null,
	              '\u201CTERMS\u201D'
	            ),
	            ') CAREFULLY. BY ACCESSING OR USING THIS WEBSITE OR ANY OTHER WEBSITES OF INSTRUCTURE, INC. (',
	            _react2.default.createElement(
	              'b',
	              null,
	              '\u201CINSTRUCTURE\u201D'
	            ),
	            ') WITH LINKS TO THIS AGREEMENT (COLLECTIVELY, THE ',
	            _react2.default.createElement(
	              'b',
	              null,
	              '\u201CWEBSITE\u201D'
	            ),
	            ') IN ANY WAY, INCLUDING USING THE SERVICES ENABLED VIA THE WEBSITE (THE ',
	            _react2.default.createElement(
	              'b',
	              null,
	              '\u201CSERVICES\u201D'
	            ),
	            ') BY INSTRUCTURE OR USERS OF THE SITE (',
	            _react2.default.createElement(
	              'b',
	              null,
	              '\u201CUSERS\u201D'
	            ),
	            '), CLICKING THE \u201CI ACCEPT\u201D CHECK BOX, OR MERELY BROWSING THE WEBSITE, YOU REPRESENT THAT YOU HAVE READ, UNDERSTAND, AND AGREE TO BE BOUND BY THE TERMS.  ',
	            _react2.default.createElement(
	              'b',
	              null,
	              'IF YOU DO NOT AGREE TO BE BOUND BY THE TERMS, YOU MAY NOT ACCESS OR USE THIS WEBSITE OR THE SERVICES.'
	            ),
	            ' '
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            'THESE TERMS INCLUDE A CLASS ACTION WAIVER AND WAIVER OF JURY TRIALS, AND REQUIRE BINDING ARBITRATION ON AN INDIVIDUAL BASIS TO RESOLVE DISPUTES.'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            'The Services include, but are not limited to, a learning management system that entities (',
	            _react2.default.createElement(
	              'b',
	              null,
	              '\u201CEntities\u201D'
	            ),
	            ') may subscribe to and provide to their instructors and learners (',
	            _react2.default.createElement(
	              'b',
	              null,
	              '\u201CInstructors\u201D'
	            ),
	            ' and ',
	            _react2.default.createElement(
	              'b',
	              null,
	              '\u201CLearners\u201D'
	            ),
	            ') in connection with courses (each, a ',
	            _react2.default.createElement(
	              'b',
	              null,
	              '\u201CCourse\u201D'
	            ),
	            '). Instructure provides an account that enables a designated User to manage the Services, manage Learner and Instructor access to the Services, and provide general support on behalf of an Entity. \u201CUser\u201D means any user of the Services, including Learners, and Instructors. '
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            'PLEASE NOTE THAT THE TERMS ARE SUBJECT TO CHANGE BY INSTRUCTURE IN ITS SOLE DISCRETION AT ANY TIME.  When changes are made, Instructure will make a new copy of the Terms available at the Website.  We will also update the \u201CLast Updated\u201D date at the top of the Terms.  If we make any material changes, and you have registered to use the Services, we will also send an e-mail to you at the last e-mail address you provided to us.  Any changes to the Terms will be effective immediately for new Users of the Website or Services and will be effective thirty (30) days after posting of notice of such changes on the Website for existing User.  Instructure may require you to provide consent to the updated Terms in a specified manner before further use of the Website or the Services is permitted.  If you do not agree to any change(s) after receiving a notice of such change(s), you shall stop using the Website and/or the Services.  Otherwise, your continued use of the Website and/or the Services constitutes your acceptance of such change(s).  PLEASE REGULARLY CHECK THE WEBSITE TO VIEW THE THEN-CURRENT TERMS. '
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              '1. Use of the Services and Instructure Properties.'
	            ),
	            '  The Website, the Services, and the information and content made available (',
	            _react2.default.createElement(
	              'b',
	              null,
	              '\u201CContent\u201D'
	            ),
	            ') by Instructure on the Website and in the Services (collectively, the ',
	            _react2.default.createElement(
	              'b',
	              null,
	              '\u201CInstructure Properties\u201D'
	            ),
	            ') are protected by copyright laws throughout the world.  Subject to the Terms, Instructure grants you a limited license to reproduce portions of the Instructure Properties for the sole purpose of using the Services for your personal purposes or, in the event you are an Instructor, your educational purposes. '
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              '1.1 Application License.'
	            ),
	            '  Instructure also provides a mobile application (the ',
	            _react2.default.createElement(
	              'b',
	              null,
	              '\u201CApplication\u201D'
	            ),
	            ') for use with the Services. Your use of the Application is governed by the End User License Agreement that accompanies the Application in the marketplace where you download it. '
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              '1.2 Certain Restrictions.'
	            ),
	            '  The rights granted to you in the Terms are subject to the following restrictions: (a) you shall not license, sell, rent, lease, transfer, assign, reproduce, distribute, host or otherwise commercially exploit the Instructure Properties, (b) you shall not use framing techniques to enclose any trademark, logo, or other Instructure Properties; (c) you shall not use any metatags or other \u201Chidden text\u201D using Instructure\u2019s name or trademarks; (d) you shall not modify, translate, adapt, merge, make derivative works of, disassemble, decompile, reverse compile or reverse engineer any part of the Instructure Properties except to the extent the foregoing restrictions are expressly prohibited by applicable law; (e) you shall not use any manual or automated software, devices, or other processes (including but not limited to spiders, robots, scrapers, crawlers, avatars, data mining tools, or the like) to \u201Cscrape\u201D or download data from any web pages contained in the Website; (f) except as expressly stated herein, no part of the Instructure Properties may be copied, reproduced, distributed, republished, downloaded, displayed, posted or transmitted in any form or by any means; and (g) you shall not remove or destroy any copyright notices or other proprietary markings contained on or in the Instructure Properties. Any future release, update or other addition to the Instructure Properties shall be subject to the Terms.  Instructure, its suppliers and service providers reserve all rights not granted in the Terms.  Any unauthorized use of the Instructure Properties terminates the licenses granted by Instructure pursuant to the Terms. '
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              '2. Registration.'
	            ),
	            ' In order to access certain features of the Instructure Properties you must create an account (',
	            _react2.default.createElement(
	              'b',
	              null,
	              '\u201CAccount\u201D'
	            ),
	            ').  Certain features are only available to Instructor Accounts.'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              '2.1 Instructor Accounts.'
	            ),
	            '  If you an Instructor, Instructure will provide you with access to an Instructor Account, provided that you (1) provide any necessary information about you and/or your school when registering the Account (',
	            _react2.default.createElement(
	              'b',
	              null,
	              '\u201CRegistration Data\u201D'
	            ),
	            ') and (2) accept the Terms. Using your Instructor Account, you may create invitations for Learner Accounts by generating invite codes that you may provide to your Students.  You will be responsible for any activities, including any violation of the Terms that occur under Student Accounts created using your Instructor Account.  '
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              '2.2 Learner Accounts.'
	            ),
	            ' To create a Learner Account, you must (1) be provided with access to an account invite code by an Instructor, (2) provide us with any Registration Data requested in the registration form, and (3) accept the Terms.'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              '2.3 Registration Data.'
	            ),
	            '  In registering for the Services, you agree to (1) provide true, current, and complete Registration Data; and (2) maintain and promptly update the Registration Data to keep it true, current, and complete. You are responsible for all activities that occur under your Account. You may not share your Account or password with anyone, and you agree to notify Instructure immediately of any unauthorized use of your password or any other breach of security.  You agree not to create or access an Account using a false identity or information, or on behalf of someone other than yourself.  You agree that you shall not have more than one Account at any given time.  You agree not to create an Account or use the Instructure Properties if you have been previously removed by Instructure, or if you have been previously banned from any of the Instructure Properties.'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              '2.4 Social Networking Services.'
	            ),
	            ' We may permit you to login to the Services with your login credentials from certain social networking sites (e.g., Facebook) (',
	            _react2.default.createElement(
	              'b',
	              null,
	              '\u201CSNS\u201D'
	            ),
	            '). If you log in or otherwise associate your Account with your login credentials from such SNS, we may receive information about you from such SNS, in accordance with the terms and conditions (e.g., terms of use and privacy policy) of the SNS (',
	            _react2.default.createElement(
	              'b',
	              null,
	              '\u201CSNS Terms\u201D'
	            ),
	            '). If you elect to share your information with these SNS, we will share information with them in accordance with your election. The SNS Terms of such SNS will apply to the information we disclose to them.'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              '2.5 Necessary Equipment and Software.'
	            ),
	            '  You must provide all equipment and software necessary to connect to the Instructure Properties, including but not limited to, a mobile device that is suitable to connect with and use the Application.  You are solely responsible for any fees, including Internet connection or mobile fees, that you incur when accessing the Instructure Properties.'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              '3. Payment Terms.'
	            ),
	            ' Some of the Courses offered as part of the Services are available to Learners in exchange for a fee. You may purchase such Courses by following the directions on the Site.  If you purchase a Course, you agree to pay the then-current applicable Course fee listed on the Site (',
	            _react2.default.createElement(
	              'b',
	              null,
	              '\u201CCourse Fees\u201D'
	            ),
	            ') and Instructure will bill the credit card or PayPal account you submit in purchasing the Course.  All payments are refundable according to Instructure\u2019s standard refund policy or the refund policy posted on the applicable Course enrollment page, if any.  In the event of a conflict between Instructure\u2019s standard refund policy and the refund policy posted on a Course enrollment page, the Course enrollment page will control. You hereby authorize Instructure to bill your credit card or PayPal account, as applicable, for the Course Fees as described above.  Course Fees are exclusive of all taxes, levies, or duties imposed by taxing authorities, and you are responsible for payment of all such taxes, levies or duties. If any Course Fee cannot be charged to your credit card or PayPal account for any reason, Instructure may provide you, via email, notice of such non-payment and a link for you to update your payment information.  If such non-payment is not remedied within seven (7) days after receiving such notice of non-payment, Instructure may terminate your access to the applicable Course'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              '4. Responsibility for Content.'
	            )
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              '4.1 Types of Content.'
	            ),
	            '  You acknowledge that all Content, including the Instructure Properties, is the sole responsibility of the party from whom such Content originated.  This means that you, and not Instructure, are entirely responsible for all Content that you upload, post, e-mail, transmit or otherwise make available (',
	            _react2.default.createElement(
	              'b',
	              null,
	              '\u201CMake Available\u201D'
	            ),
	            ') through the Instructure Properties (',
	            _react2.default.createElement(
	              'b',
	              null,
	              '\u201CYour Content\u201D'
	            ),
	            ').  Other Users of the Instructure Properties, and not Instructure, are similarly responsible for all Content such other Users Make Available through the Instructure Properties (',
	            _react2.default.createElement(
	              'b',
	              null,
	              '\u201CUser Content\u201D'
	            ),
	            ').'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              '4.2 No Obligation to Pre-Screen Content.'
	            ),
	            '  You acknowledge that Instructure has no obligation to pre-screen Content (including, but not limited to, Your Content and User Content), although Instructure reserves the right in its sole discretion to pre-screen, refuse, or remove any Content that (1) violates any law or regulation, (2) violates these Terms, including the User Code of Conduct set forth in Section 5.4 hereof, and/or (3) otherwise creates liability for Instructure.'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              '5. Ownership.'
	            )
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              '5.1 Instructure Properties.'
	            ),
	            '  Except with respect to Your Content and User Content, you agree that Instructure and its suppliers own all rights, title and interest in the Instructure Properties.  Instructure\u2019s name and other related graphics, logos, service marks and trade names used on or in connection with the Instructure Properties are the trademarks of Instructure and may not be used without permission in connection with any third-party products or services.  Other trademarks, service marks and trade names that may appear on or in the Instructure Properties are the property of their respective owners.'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              '5.2 Your Content.'
	            ),
	            ' Your Content shall at all times remain your sole property and you agree that you have no right, title or interest in or to any other Content that appears on or in the Instructure Properties. You represent that you have all necessary right, power and authority to post Your Content to the Instructure Properties. You agree to allow Instructure and its applicable contractors to freely host, reproduce, transmit, modify, display and otherwise use Your Content (in whole or in part) as reasonably necessary to provide the Services to you, and in accordance with Instructure\u2019s agreement with your Entity, if applicable.'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              '5.3 Your Account.'
	            ),
	            '  Notwithstanding anything contained herein to the contrary, by submitting Your Content to any forums, comments or any other area on or in the Instructure Properties, you hereby expressly permit Instructure to identify you by your username as the contributor of Your Content in any publication in any form, media, or technology now known or later developed in connection with Your Content. '
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              '5.4 User Code of Conduct.'
	            ),
	            '  As a condition of use, you agree not to use the Instructure Properties for any purpose that is prohibited by the Terms or by applicable law. Do not post, or permit others to post, content on the Instructure Properties or on your profile that (i) encourages illegal activities, is fraudulent, or is unlawful; (ii) insults, defames, harasses, or threatens others; (iii) violates the copyright or intellectual property or privacy rights of others; (iv) contains obscene, vulgar, pornographic, or libelous material; (v) harms or impersonates others, including other Users; or (vi) advertises or sells a product or service. Do not reproduce content from your Course or other Learners unless allowed by the express copyright terms laid out by the Instructor (e.g. Creative Commons). Do not share the solutions to assignments with others unless this is expressly authorized by the Instructor. Do not submit the work of others as your own work. Respect the privacy of other Users. Respect the diversity of opinions and cultures that will be presented by other Users. Do not attempt or engage in, any potentially harmful acts that are directed against the Instructure Properties, including but not limited to violating or attempting to violate any security features of the Instructure Properties, introducing viruses, worms, or similar harmful code into the Instructure Properties, or interfering or attempting to interfere with use of the Instructure Properties by any other user, host or network, including by means of overloading, \u201Cflooding,\u201D \u201Cspamming,\u201D \u201Cmail bombing,\u201D or \u201Ccrashing\u201D the Instructure Properties.  If you believe that someone has violated this code of conduct, begin by notifying the Instructor of the Course. If the issue is not addressed by the Instructor to your satisfaction, contact ',
	            _react2.default.createElement(
	              'a',
	              { href: 'mailto:conduct@canvas.net', target: '_blank' },
	              'conduct@canvas.net'
	            ),
	            ' with your concerns.'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              '5.5 Feedback.'
	            ),
	            '  You agree that submission of any ideas, suggestions, documents, and/or proposals to Instructure through its suggestion, feedback, wiki, forum or similar pages (',
	            _react2.default.createElement(
	              'b',
	              null,
	              '\u201CFeedback\u201D'
	            ),
	            ') is at your own risk and that Instructure has no obligations (including without limitation obligations of confidentiality) with respect to such Feedback.  You represent and warrant that you have all rights necessary to submit the Feedback.  You hereby grant to Instructure a fully paid, royalty-free, perpetual, irrevocable, worldwide, non-exclusive, and fully sublicensable right and license to use, reproduce, perform, display, distribute, adapt, modify, re-format, create derivative works of, and otherwise commercially or non-commercially exploit in any manner, any and all Feedback, and to sublicense the foregoing rights, in connection with the operation and maintenance of the Instructure Properties.'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              '6. Investigations.'
	            ),
	            '  Instructure may, but is not obligated to, monitor or review the Instructure Properties and Content at any time.  Without limiting the foregoing, Instructure shall have the right, in its sole discretion, to remove any of Your Content for any reason (or no reason), including if such Content violates the Terms or any applicable law.  Although Instructure does not generally monitor user activity occurring in connection with the Instructure Properties, if Instructure becomes aware of any possible violations by you of any provision of the Terms, Instructure reserves the right to investigate such violations, and Instructure may, at its sole discretion, terminate your license to use the Instructure Properties, or change, alter or remove Your Content, in whole or in part.'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              '7. Interactions with Other Users.'
	            )
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              '7.1 User Responsibility.'
	            ),
	            '  You are solely responsible for your interactions with other Users of the Services and any other parties with whom you interact through the Services; provided, however, that Instructure reserves the right, but has no obligation, to intercede in disputes among Users.  You agree that Instructure will not be responsible for any liabilities incurred as the result of such interaction.'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              '7.2 Content Provided by Other Users.'
	            ),
	            '  The Instructure Properties may contain User Content provided by other Users.  Instructure is not responsible for and does not control User Content.  Instructure has no obligation to review or monitor, and does not approve, endorse or make any representations or warranties with respect to User Content.  You use all User Content and interact with other Users at your own risk.'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              '8. Third-Party Websites.'
	            )
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              '8.1 Third-Party Websites.'
	            ),
	            '  The Instructure Properties may contain links to third-party websites (',
	            _react2.default.createElement(
	              'b',
	              null,
	              '\u201CThird-Party Websites\u201D'
	            ),
	            ').  When you click on a link to a Third-Party Website, we will not warn you that you have left the Instructure Properties and are subject to separate terms and conditions or privacy policies.  Such Third-Party Websites are not under the control of Instructure.  Instructure is not responsible for any Third-Party Websites and does not review, approve, monitor, endorse, warrant, or make any representations with respect to Third-Party Websites, or their products or services.  You use all links in Third-Party Websites at your own risk. You should review applicable terms and policies, including privacy and data gathering practices, of any Third-Party Websites, and should make whatever investigation you feel necessary or appropriate before proceeding with any transaction with any third-party. '
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              '8.2 App Stores.'
	            ),
	            '  You acknowledge and agree that the availability of the Application and the Services is dependent on the third-party from which you received the Application, e.g., the Apple or Android app stores.  '
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              '9. Indemnification.'
	            ),
	            ' You agree to indemnify, defend, and hold Instructure, its parents, subsidiaries, affiliates, officers, employees, agents, partners and licensors (collectively the ',
	            _react2.default.createElement(
	              'b',
	              null,
	              '\u201CInstructure Parties\u201D'
	            ),
	            ') harmless from any losses, costs, liabilities and expenses (including reasonable attorneys\u2019 fees) relating to or arising out of: (a) Your Content; (b) your use of, or inability to use, the Instructure Properties; (c) your violation of the Terms; (d) your violation of any rights of another party, including any User; or (e) your violation of any applicable laws, rules or regulations.  Instructure reserves the right, at its own cost, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which event you will fully cooperate with Instructure in asserting any available defenses.  You agree that the provisions in this section will survive any termination of your Account, the Terms, or your access to the Instructure Properties. '
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              '10. Disclaimer of Warranties.'
	            ),
	            ' YOU EXPRESSLY UNDERSTAND AND AGREE THAT TO THE EXTENT PERMITTED BY APPLICABLE LAW, YOUR USE OF THE INSTRUCTURE PROPERTIES IS AT YOUR SOLE RISK, AND THE INSTRUCTURE PROPERTIES ARE PROVIDED ON AN \u201CAS IS\u201D AND \u201CAS AVAILABLE\u201D BASIS, WITH ALL FAULTS.  INSTRUCTURE PARTIES EXPRESSLY DISCLAIM ALL WARRANTIES, REPRESENTATIONS, AND CONDITIONS OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. INSTRUCTURE PARTIES MAKE NO WARRANTY, REPRESENTATION OR CONDITION THAT: (1) THE INSTRUCTURE PROPERTIES WILL MEET YOUR REQUIREMENTS; (2) YOUR USE OF THE INSTRUCTURE PROPERTIES WILL BE UNINTERRUPTED, TIMELY, SECURE OR ERROR-FREE; (3) THE RESULTS THAT MAY BE OBTAINED FROM USE OF THE INSTRUCTURE PROPERTIES WILL BE ACCURATE OR RELIABLE; OR (4) ANY ERRORS IN THE INSTRUCTURE PROPERTIES WILL BE CORRECTED. ANY CONTENT DOWNLOADED FROM OR OTHERWISE ACCESSED THROUGH THE INSTRUCTURE PROPERTIES IS ACCESSED AT YOUR OWN RISK, AND YOU SHALL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR PROPERTY OR PERSON, INCLUDING, BUT NOT LIMITED TO, YOUR COMPUTER SYSTEM AND ANY DEVICE YOU USE TO ACCESS THE INSTRUCTURE PROPERTIES, OR ANY OTHER LOSS THAT RESULTS FROM ACCESSING SUCH CONTENT. THE SERVICES MAY BE SUBJECT TO DELAYS, CANCELLATIONS AND OTHER DISRUPTIONS.  INSTRUCTURE MAKES NO WARRANTY, REPRESENTATION OR CONDITION WITH RESPECT TO THE SERVICES, INCLUDING BUT NOT LIMITED TO, THE QUALITY, EFFECTIVENESS, REPUTATION AND OTHER CHARACTERISTICS OF THE SERVICES. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED FROM INSTRUCTURE OR THROUGH THE INSTRUCTURE PROPERTIES WILL CREATE ANY WARRANTY NOT EXPRESSLY MADE HEREIN. '
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              '11. Limitation of Liability.'
	            )
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              '11.1 Disclaimer of Certain Damages.'
	            ),
	            '  YOU UNDERSTAND AND AGREE THAT IN NO EVENT SHALL INSTRUCTURE PARTIES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES ARISING OUT OF OR IN CONNECTION WITH THE INSTRUCTURE PROPERTIES, INCLUDING, WITHOUT LIMITATION, ANY DAMAGES RESULTING FROM LOSS OF USE, DATA, OR PROFITS, WHETHER OR NOT INSTRUCTURE HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, OR FOR ANY DAMAGES FOR PERSONAL OR BODILY INJURY OR EMOTIONAL DISTRESS ARISING OUT OF OR IN CONNECTION WITH THE TERMS, OR FROM ANY COMMUNICATIONS, INTERACTIONS OR MEETINGS WITH OTHER USERS OF THE INSTRUCTURE PROPERTIES, ON ANY THEORY OF LIABILITY, RESULTING FROM: (1) THE USE OR INABILITY TO USE THE INSTRUCTURE PROPERTIES; (2) THE COST OF PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES RESULTING FROM ANY GOODS, DATA, INFORMATION OR SERVICES PURCHASED OR OBTAINED OR MESSAGES RECEIVED FOR TRANSACTIONS ENTERED INTO THROUGH THE INSTRUCTURE PROPERTIES; (3) UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR TRANSMISSIONS OR DATA; (4) STATEMENTS OR CONDUCT OF ANY THIRD-PARTY ON INSTRUCTURE PROPERTIES; OR (5) ANY OTHER MATTER RELATED TO THE INSTRUCTURE PROPERTIES, WHETHER BASED ON WARRANTY, COPYRIGHT, CONTRACT, TORT (INCLUDING NEGLIGENCE), PRODUCT LIABILITY OR ANY OTHER LEGAL THEORY.'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              '11.2 Cap on Liability.'
	            ),
	            '  UNDER NO CIRCUMSTANCES WILL INSTRUCTURE PARTIES BE LIABLE TO YOU FOR MORE THAN FIFTY DOLLARS ($50). '
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              '11.3 User Content.'
	            ),
	            '  INSTRUCTURE PARTIES ASSUME NO RESPONSIBILITY FOR THE TIMELINESS, DELETION, MIS-DELIVERY OR FAILURE TO STORE ANY CONTENT (INCLUDING, BUT NOT LIMITED TO, YOUR CONTENT AND USER CONTENT), USER COMMUNICATIONS OR PERSONALIZATION SETTINGS.'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              '11.4 No Liability for Conduct of Third Parties or Other Users.'
	            ),
	            '  YOU ACKNOWLEDGE AND AGREE THAT INSTRUCTURE PARTIES ARE NOT LIABLE, AND YOU AGREE NOT TO SEEK TO HOLD INSTRUCTURE PARTIES LIABLE, FOR THE CONDUCT OF THIRD PARTIES, INCLUDING OPERATORS OF EXTERNAL SITES, AND THAT THE RISK OF INJURY FROM SUCH THIRD PARTIES RESTS ENTIRELY WITH YOU. YOU ARE SOLELY RESPONSIBLE FOR ALL OF YOUR COMMUNICATIONS AND INTERACTIONS WITH OTHER USERS OF THE INSTRUCTURE PROPERTIES. YOU UNDERSTAND THAT INSTRUCTURE DOES NOT MAKE ANY ATTEMPT TO VERIFY THE STATEMENTS OF USERS OF THE INSTRUCTURE PROPERTIES. '
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              '11.5 Basis of the Bargain.'
	            ),
	            '  THE LIMITATIONS OF DAMAGES SET FORTH ABOVE ARE FUNDAMENTAL ELEMENTS OF THE BASIS OF THE BARGAIN BETWEEN INSTRUCTURE AND YOU. '
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              '12. Procedure for Making Claims of Copyright Infringement.'
	            ),
	            '  It is Instructure\u2019s policy to terminate membership privileges of any User who repeatedly infringes copyright upon prompt notification to Instructure by the copyright owner or the copyright owner\u2019s legal agent.  Without limiting the foregoing, if you believe that your work has been copied and posted on the Instructure Properties in a way that constitutes copyright infringement, please provide our Copyright Agent with the following information: (1) an electronic or physical signature of the person authorized to act on behalf of the owner of the copyright interest; (2) a description of the copyrighted work that you claim has been infringed; (3) a description of the location on the Instructure Properties of the material that you claim is infringing; (4) your address, telephone number and e-mail address; (5) a written statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent or the law; (6) a statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner\u2019s behalf.  Contact information for Instructure\u2019s Copyright Agent for notice of claims of copyright infringement is as follows: Howard Baik; 6330 South 3000 East, Suite 700, Salt Lake City, UT 84121; ',
	            _react2.default.createElement(
	              'a',
	              { href: 'mailto:legal@instructure.com', target: '_blank' },
	              'legal@instructure.com'
	            ),
	            '.'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              '13. Term and Termination.'
	            )
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              '13.1 Term.'
	            ),
	            '  The Terms commence on the date when you accept them (as described in the preamble above) and remain in full force and effect while you use the Instructure Properties, unless terminated earlier in accordance with the Terms.'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              '13.2 Termination of Services by Instructure.'
	            ),
	            '  If you have breached any provision of the Terms, or if Instructure is required to do so by law (e.g., where the provision of the Website, the Application, or the Services is, or becomes, unlawful), Instructure has the right to suspend or terminate any Services provided to you or to delete any of Your Content. You agree that all terminations for cause shall be made in Instructure\u2019s sole discretion and that Instructure shall not be liable to you or any third-party for any termination of your Account. Termination of any Service includes removal of access to such Service and barring of further use of the Service.  Termination of  all Services also may include deletion of your password and all related information, files and Content associated with or inside your Account (or any part thereof), including Your Content.  Upon termination of any Service, your right to use such Service will automatically terminate immediately.  Instructure will not have any liability whatsoever to you for any suspension or termination, including for deletion of Your Content.  All provisions of the Terms which by their nature should survive, shall survive termination of Services, including without limitation, ownership provisions, warranty disclaimers, and limitation of liability.'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              '14. General Provisions.'
	            )
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              '14.1 Electronic Communications.'
	            ),
	            '  The communications between you and Instructure use electronic means, whether you visit the Instructure Properties or send Instructure e-mails, or whether Instructure posts notices on the Instructure Properties or communicates with you via e-mail.  For contractual purposes, you (1) consent to receive communications from Instructure in an electronic form; and (2) agree that all terms and conditions, agreements, notices, disclosures, and other communications that Instructure provides to you electronically satisfy any legal requirement that such communications would satisfy if it were to be in writing.  The foregoing does not affect any statutory rights you may have.'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              '14.2 Release.'
	            ),
	            '  You hereby release Instructure Parties and their successors from claims, demands, any and all losses, damages, rights, and actions of any kind, including personal injuries, death, and property damage, that is either directly or indirectly related to or arises from any interactions with or conduct of other Website Users or third-party websites of any kind arising in connection with or as a result of the Terms or your use of the Instructure Properties.  If you are a California resident, you hereby waive California Civil Code Section 1542, which states, \u201CA general release does not extend to claims which the creditor does not know or suspect to exist in his favor at the time of executing the release, which, if known by him must have materially affected his settlement with the debtor.\u201D'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              '14.3 Assignment.'
	            ),
	            '  The Terms, and your rights and obligations hereunder, may not be assigned, subcontracted, delegated, or otherwise transferred by you without Instructure\u2019s prior written consent, and any attempted assignment, subcontract, delegation, or transfer in violation of the foregoing will be null and void. Instructure may assign its rights and obligations under these Terms to a third party without your consent.'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              '14.4 Force Majeure.'
	            ),
	            '  Instructure shall not be liable for any delay or failure to perform resulting from causes outside its reasonable control, including, but not limited to, acts of God, war, terrorism, riots, embargos, acts of civil or military authorities, fire, floods, accidents, strikes or shortages of transportation facilities, fuel, energy, labor or materials.'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              '14.5 Compliance.'
	            ),
	            '  If you believe that Instructure has not adhered to the Terms, please contact Instructure by emailing us at ',
	            _react2.default.createElement(
	              'a',
	              { href: 'mailto:legal@instructure.com', target: '_blank' },
	              'legal@instructure.com'
	            ),
	            '.  We will do our best to address your concerns.  If you feel that your complaint has been addressed incompletely, we invite you to let us know for further investigation.'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              '14.6 Arbitration Agreement; Class Waiver; Waiver of Trial by Jury. '
	            )
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            'Please read this Arbitration Agreement carefully.  It is part of your contract with Instructure and affects your rights.  It contains procedures for MANDATORY BINDING ARBITRATION AND A CLASS ACTION WAIVER.   '
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            '(a) Applicability of Arbitration Agreement. All claims and disputes (excluding claims for injunctive or other equitable relief as set forth below) in connection with the Terms or the use of any product or service provided by Instructure that cannot be resolved informally or in small claims court shall be resolved by binding arbitration on an individual basis under the terms of this Arbitration Agreement.  This Arbitration Agreement applies to you and Instructure, and to any subsidiaries, affiliates, agents, employees, predecessors in interest, successors, and assigns, as well as all authorized or unauthorized users or beneficiaries of services or goods provided under the Terms.'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            '(b) Notice Requirement and Informal Dispute Resolution.  Before either party may seek arbitration, the party must first send to the other party a written Notice of Dispute (\u201CNotice\u201D) describing the nature and basis of the claim or dispute, and the requested relief.  A Notice to Instructure should be sent to: Attn: Legal Department, 6330 South 3000 East, Suite 700, Salt Lake City, UT 84121.  After the Notice is received, you and Instructure may attempt to resolve the claim or dispute informally.  If you and Instructure do not resolve the claim or dispute within 30 days after the Notice is received, either party may begin an arbitration proceeding.  The amount of any settlement offer made by any party may not be disclosed to the arbitrator until after the arbitrator has determined the amount of the award, if any, to which either party is entitled.  '
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            '(c) Arbitration Rules.  Arbitration shall be initiated through the American Arbitration Association (\u201CAAA\u201D), an established alternative dispute resolution provider (\u201CADR Provider\u201D) that offers arbitration as set forth in this section.  If AAA is not available to arbitrate, the parties shall agree to select an alternative ADR Provider.  The rules of the ADR Provider shall govern all aspects of this arbitration, including but not limited to the method of initiating and/or demanding arbitration, except to the extent such rules are in conflict with the Terms. The AAA Consumer Arbitration Rules governing the arbitration are available online at www.adr.org or by calling the AAA at 1-800-778-7879.  The arbitration shall be conducted by a single, neutral arbitrator.  Any claims or disputes where the total amount of the award sought is less than Ten Thousand U.S. Dollars (US $10,000.00) may  be resolved through binding non-appearance-based arbitration, at the option of the party seeking relief.  For claims or disputes where the total amount of the award sought is Ten Thousand U.S. Dollars (US $10,000.00) or more, the right to a hearing will be determined by the Arbitration Rules.  Any hearing will be held in a location within 100 miles of your residence, unless you reside outside of the United States, and unless the parties agree otherwise.  Any judgment on the award rendered by the arbitrator may be entered in any court of competent jurisdiction. Each party shall bear its own costs (including attorney\u2019s fees) and disbursements arising out of the arbitration, and shall pay an equal share of the fees and costs of the ADR Provider.  '
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            '(d) Additional Rules for Non-appearance Based Arbitration: If non-appearance arbitration is elected, the arbitration shall be conducted by telephone, online and/or based solely on written submissions; the specific manner shall be chosen by the party initiating the arbitration.  The arbitration shall not involve any personal appearance by the parties or witnesses unless otherwise mutually agreed by the parties.'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            '(e) Time Limits.  If you or Instructure pursue arbitration, the arbitration action must be initiated and/or demanded within the statute of limitations (i.e., the legal deadline for filing a claim) and within any deadline imposed under the AAA Rules for the pertinent claim.'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            '(f) Authority of Arbitrator.  If arbitration is initiated, the arbitrator will decide the rights and liabilities, if any, of you and Instructure, and the dispute will not be consolidated with any other matters or joined with any other cases or parties.  The arbitrator shall have the authority to grant motions dispositive of all or part of any claim. The arbitrator shall have the authority to award monetary damages and to grant any non-monetary remedy or relief available to an individual under applicable law, the AAA Rules, and the Terms.  The arbitrator shall issue a written award and statement of decision describing the essential findings and conclusions on which the award is based, including the calculation of any damages awarded.  The arbitrator has the same authority to award relief on an individual basis that a judge in a court of law would have.  The award of the arbitrator is final and binding upon you and Instructure.  '
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            '(g) Waiver of Jury Trial.  THE PARTIES HEREBY WAIVE THEIR CONSTITUTIONAL AND STATUTORY RIGHTS TO GO TO COURT AND HAVE A TRIAL IN FRONT OF A JUDGE OR A JURY, instead electing that all claims and disputes shall be resolved by arbitration under this Arbitration Agreement.  Arbitration procedures are typically more limited, more efficient and less costly than rules applicable in court and are subject to very limited review by a court.  In the event any litigation should arise between you and Instructure in any state or federal court in a suit to vacate or enforce an arbitration award or otherwise, YOU AND INSTRUCTURE WAIVE ALL RIGHTS TO A JURY TRIAL, instead electing that the dispute be resolved by a judge.'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            '(h) Waiver of Class or Consolidated Actions.  ALL CLAIMS AND DISPUTES WITHIN THE SCOPE OF THIS ARBITRATION AGREEMENT MUST BE ARBITRATED OR LITIGATED ON AN INDIVIDUAL BASIS AND NOT ON A CLASS BASIS, AND CLAIMS OF MORE THAN ONE CUSTOMER OR USER CANNOT BE ARBITRATED OR LITIGATED JOINTLY OR CONSOLIDATED WITH THOSE OF ANY OTHER CUSTOMER OR USER.'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            '(i) Confidentiality. All aspects of the arbitration proceeding, including but not limited to the award of the arbitrator and compliance therewith, shall be strictly confidential. The parties agree to maintain confidentiality unless otherwise required by law.  This Paragraph shall not prevent a party from submitting to a court of law any information necessary to enforce this Agreement, to enforce an arbitration award, or to seek injunctive or equitable relief. '
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            '(j) Severability. If any part or parts of this Arbitration Agreement are found under the law to be invalid or unenforceable by a court of competent jurisdiction, then such specific part or parts shall be of no force and effect and shall be severed and the remainder of the Agreement shall continue in full force and effect.'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            '(k) Right to Waive.  Any or all of the rights and limitations set forth in this Agreement may be waived by the party against whom the claim is asserted.  Such waiver shall not waive or effect any other portion of this Agreement.'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            '(l) Survival of Agreement. This Arbitration Agreement will survive the termination of your relationship with Instructure.'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            '(m) Small Claims Court.  Notwithstanding the foregoing, either you or Instructure may bring an individual action in small claims court.'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            '(n) Emergency Equitable Relief.  Notwithstanding the foregoing, either party may seek emergency equitable relief before a state or federal court in order to maintain the status quo pending arbitration.  A request for interim measures shall not be deemed a waiver of any other rights or obligations under this Arbitration Agreement.'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            '(o) Claims Not Subject To Arbitration.  Notwithstanding the foregoing, claims of defamation, violation of the Computer Fraud and Abuse Act, and infringement or misappropriation of the other party\u2019s patent, copyright, trademark, or trade secret shall not be subject to this arbitration agreement.  '
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            '(p) Courts.  In any circumstances where the foregoing Agreement permits the parties to litigate in court, the parties hereby agree to submit to the personal jurisdiction of the courts located within Salt Lake County, Utah, for such purpose.    '
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              '14.7 Governing Law.'
	            ),
	            '  The Terms and any action related thereto will be governed and interpreted by and under the laws of the State of Utah, consistent with the Federal Arbitration Act, without giving effect to any conflicts of law principles that provide for the application of the law of another jurisdiction.  The United Nations Convention on Contracts for the International Sale of Goods does not apply to this Agreement.'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              '14.8 Notice.'
	            ),
	            '  Where Instructure requires that you provide an e-mail address to access certain features of the Instructure Properties, you are responsible for providing Instructure with your most current e-mail address.  In the event that the last e-mail address you provided to Instructure is not valid, or for any reason is not capable of delivering to you any notices required/ permitted by the Terms, Instructure\u2019s dispatch of the e-mail containing such notice will nonetheless constitute effective notice.  You may give notice to Instructure at the following address:  Attn: Legal Department, 6330 South 3000 East, Suite 700, Salt Lake City, UT 84121.  Such notice shall be deemed given when received by Instructure by letter delivered by nationally recognized overnight delivery service or first class postage prepaid mail at the above address.'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              '14.9 Waiver.'
	            ),
	            '  Any waiver or failure by Instructure to enforce any provision of the Terms on one occasion will not be deemed a waiver of any other provision or of such provision on any other occasion.'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              '14.10 Severability.'
	            ),
	            '  If any provision of the Terms is, for any reason, held to be invalid or unenforceable, the other provisions of the Terms will remain enforceable, and the invalid or unenforceable provision will be deemed modified so that it is valid and enforceable to the maximum extent permitted by law.'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              '14.11 Entire Agreement.'
	            ),
	            '  The Terms are the final, complete and exclusive agreement of the parties with respect to the subject matter hereof and supersedes and merges all prior discussions between the parties with respect to such subject matter.'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: styles.block },
	          _react2.default.createElement(_Toggle2.default, {
	            label: 'I agree',
	            style: styles.toggle,
	            onToggle: this.stateChanged
	          })
	        ),
	        _react2.default.createElement(
	          _Dialog2.default,
	          {
	            title: 'Agree terms',
	            actions: actions,
	            modal: false,
	            open: this.state.dialogOpen,
	            onRequestClose: this.handleClose
	          },
	          'You must agree in order to see your results'
	        )
	      );
	    }
	  }]);
	
	  return Step3;
	}(_react.Component);
	
	exports.default = Step3;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _CircularProgress = __webpack_require__(39);
	
	var _CircularProgress2 = _interopRequireDefault(_CircularProgress);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Step4 = function Step4(props) {
	  return _react2.default.createElement(
	    'div',
	    { className: 'step step2' },
	    _react2.default.createElement(
	      'div',
	      { className: 'row' },
	      _react2.default.createElement(_CircularProgress2.default, { size: 80, thickness: 5 }),
	      _react2.default.createElement(
	        'div',
	        null,
	        'Rights....'
	      )
	    )
	  );
	};
	
	exports.default = Step4;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(19);
	
	var _AppReducer = __webpack_require__(16);
	
	var _AppReducer2 = _interopRequireDefault(_AppReducer);
	
	var _PostReducer = __webpack_require__(9);
	
	var _PostReducer2 = _interopRequireDefault(_PostReducer);
	
	var _IntlReducer = __webpack_require__(54);
	
	var _IntlReducer2 = _interopRequireDefault(_IntlReducer);
	
	var _WizardReducer = __webpack_require__(35);
	
	var _WizardReducer2 = _interopRequireDefault(_WizardReducer);
	
	var _UserReducer = __webpack_require__(43);
	
	var _UserReducer2 = _interopRequireDefault(_UserReducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Combine all reducers into one root reducer
	/**
	 * Root Reducer
	 */
	exports.default = (0, _redux.combineReducers)({
	  app: _AppReducer2.default,
	  posts: _PostReducer2.default,
	  intl: _IntlReducer2.default,
	  medicalRights: _WizardReducer2.default,
	  user: _UserReducer2.default
	});
	
	// Import Reducers

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getMedicalRights = getMedicalRights;
	exports.getAllConditions = getAllConditions;
	
	var _medicalEntry = __webpack_require__(11);
	
	var _medicalEntry2 = _interopRequireDefault(_medicalEntry);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getMedicalRights(req, res) {
	  _medicalEntry2.default.findOne(req.params).exec(function (err, medicalEntry) {
	    if (err) {
	      res.status(500).send(err);
	    }if (medicalEntry) {
	      res.json({ medicalEntry: medicalEntry });
	    } else {
	      res.json({ medicalEntry: [] });
	    }
	  });
	}
	
	function getAllConditions(req, res) {
	  _medicalEntry2.default.find({}).select({ "condition": 1, "_id": 0 }).exec(function (err, medicalEntry) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    if (medicalEntry) {
	      res.json({ medicalEntry: medicalEntry });
	    } else {
	      res.json({ medicalEntry: [] });
	    }
	  });
	}

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.populateDB = populateDB;
	
	var _medicalEntry = __webpack_require__(11);
	
	var _medicalEntry2 = _interopRequireDefault(_medicalEntry);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function populateDB(req, res) {
	  var csv = __webpack_require__(72);
	  var hashMap = __webpack_require__(73);
	  var map = new hashMap();
	  var medRightArr = [];
	
	  csv.fromPath("C:\\mp2.csv", { headers: true }).on("data", function (data) {
	    //data is now a JSON object whereas CSV header is the parameter name, and the row is the value.
	    var med_con = data["Medical Condition"];
	    delete data["Medical Condition"];
	
	    //Manage hashmap of array values (to consolidate similar keys)
	    if (!map.has(med_con)) {
	      var arr = [];
	      map.set(med_con, arr);
	    }
	
	    map.get(med_con).push(data);
	  }).on("end", function () {
	
	    //value in the first parameter, confusing, isn't it?
	    map.forEach(function (value, key) {
	      var me = new _medicalEntry2.default({ condition: key, rights: value });
	      medRightArr.push(me);
	    });
	
	    //Create all DB rows at one shot
	    if (typeof medRightArr !== 'undefined' && medRightArr.length > 0) {
	      _medicalEntry2.default.create(medRightArr, function (error) {
	        if (error) {
	          console.log("An Error took place upon saving to DB" + error);
	        }
	      });
	    } else {
	      console.log("No Entry was updated in the DB");
	    }
	  });
	  console.log("DB update finished!");
	  var rights = [];
	  res.json({ rights: rights });
	}

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getPosts = getPosts;
	exports.addPost = addPost;
	exports.getPost = getPost;
	exports.deletePost = deletePost;
	
	var _post = __webpack_require__(68);
	
	var _post2 = _interopRequireDefault(_post);
	
	var _cuid = __webpack_require__(71);
	
	var _cuid2 = _interopRequireDefault(_cuid);
	
	var _limax = __webpack_require__(79);
	
	var _limax2 = _interopRequireDefault(_limax);
	
	var _sanitizeHtml = __webpack_require__(89);
	
	var _sanitizeHtml2 = _interopRequireDefault(_sanitizeHtml);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Get all posts
	 * @param req
	 * @param res
	 * @returns void
	 */
	function getPosts(req, res) {
	  _post2.default.find().sort('-dateAdded').exec(function (err, posts) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.json({ posts: posts });
	  });
	}
	
	/**
	 * Save a post
	 * @param reqc
	 * @param res
	 * @returns void
	 */
	function addPost(req, res) {
	  if (!req.body.post.name || !req.body.post.title || !req.body.post.content) {
	    res.status(403).end();
	  }
	
	  var newPost = new _post2.default(req.body.post);
	
	  // Let's sanitize inputs
	  newPost.title = (0, _sanitizeHtml2.default)(newPost.title);
	  newPost.name = (0, _sanitizeHtml2.default)(newPost.name);
	  newPost.content = (0, _sanitizeHtml2.default)(newPost.content);
	
	  newPost.slug = (0, _limax2.default)(newPost.title.toLowerCase(), { lowercase: true });
	  newPost.cuid = (0, _cuid2.default)();
	  newPost.save(function (err, saved) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.json({ post: saved });
	  });
	}
	
	/**
	 * Get a single post
	 * @param req
	 * @param res
	 * @returns void
	 */
	function getPost(req, res) {
	  _post2.default.findOne({ cuid: req.params.cuid }).exec(function (err, post) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.json({ post: post });
	  });
	}
	
	/**
	 * Delete a post
	 * @param req
	 * @param res
	 * @returns void
	 */
	function deletePost(req, res) {
	  _post2.default.findOne({ cuid: req.params.cuid }).exec(function (err, post) {
	    if (err) {
	      res.status(500).send(err);
	    }
	
	    post.remove(function () {
	      res.status(200).end();
	    });
	  });
	}

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mongoose = __webpack_require__(5);
	
	var _mongoose2 = _interopRequireDefault(_mongoose);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Schema = _mongoose2.default.Schema;
	
	var postSchema = new Schema({
	  name: { type: 'String', required: true },
	  title: { type: 'String', required: true },
	  content: { type: 'String', required: true },
	  slug: { type: 'String', required: true },
	  cuid: { type: 'String', required: true },
	  dateAdded: { type: 'Date', default: Date.now, required: true }
	});
	
	exports.default = _mongoose2.default.model('Post', postSchema);

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _express = __webpack_require__(4);
	
	var _express2 = _interopRequireDefault(_express);
	
	var _compression = __webpack_require__(30);
	
	var _compression2 = _interopRequireDefault(_compression);
	
	var _mongoose = __webpack_require__(5);
	
	var _mongoose2 = _interopRequireDefault(_mongoose);
	
	var _bodyParser = __webpack_require__(29);
	
	var _bodyParser2 = _interopRequireDefault(_bodyParser);
	
	var _path = __webpack_require__(31);
	
	var _path2 = _interopRequireDefault(_path);
	
	var _IntlWrapper = __webpack_require__(20);
	
	var _IntlWrapper2 = _interopRequireDefault(_IntlWrapper);
	
	var _webpack = __webpack_require__(13);
	
	var _webpack2 = _interopRequireDefault(_webpack);
	
	var _webpackConfig = __webpack_require__(28);
	
	var _webpackConfig2 = _interopRequireDefault(_webpackConfig);
	
	var _webpackDevMiddleware = __webpack_require__(33);
	
	var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);
	
	var _webpackHotMiddleware = __webpack_require__(34);
	
	var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);
	
	var _store = __webpack_require__(22);
	
	var _reactRedux = __webpack_require__(2);
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _server = __webpack_require__(32);
	
	var _reactRouter = __webpack_require__(3);
	
	var _reactHelmet = __webpack_require__(6);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _routes = __webpack_require__(21);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _fetchData = __webpack_require__(27);
	
	var _post = __webpack_require__(26);
	
	var _post2 = _interopRequireDefault(_post);
	
	var _medicalrights = __webpack_require__(24);
	
	var _medicalrights2 = _interopRequireDefault(_medicalrights);
	
	var _populateDB = __webpack_require__(25);
	
	var _populateDB2 = _interopRequireDefault(_populateDB);
	
	var _dummyData = __webpack_require__(23);
	
	var _dummyData2 = _interopRequireDefault(_dummyData);
	
	var _config = __webpack_require__(12);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Initialize the Express App
	
	
	// Webpack Requirements
	var app = new _express2.default();
	
	// Run Webpack dev server in development mode
	if (process.env.NODE_ENV === 'development') {
	  var compiler = (0, _webpack2.default)(_webpackConfig2.default);
	  app.use((0, _webpackDevMiddleware2.default)(compiler, { noInfo: true, publicPath: _webpackConfig2.default.output.publicPath }));
	  app.use((0, _webpackHotMiddleware2.default)(compiler));
	}
	
	// React And Redux Setup
	
	
	// Import required modules
	
	
	// Set native promises as mongoose promise
	_mongoose2.default.Promise = global.Promise;
	
	// MongoDB Connection
	_mongoose2.default.connect(_config2.default.mongoURL, function (error) {
	  if (error) {
	    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
	    throw error;
	  }
	
	  // feed some dummy data in DB.
	  //dummyData();
	});
	
	// Apply body Parser and server public assets and routes
	app.use((0, _compression2.default)());
	app.use(_bodyParser2.default.json({ limit: '20mb' }));
	app.use(_bodyParser2.default.urlencoded({ limit: '20mb', extended: false }));
	app.use(_express2.default.static(_path2.default.resolve(__dirname, '../dist')));
	app.use('/api', _post2.default);
	app.use('/api', _medicalrights2.default);
	app.use('/api', _populateDB2.default);
	
	// Render Initial HTML
	var renderFullPage = function renderFullPage(html, initialState) {
	  var head = _reactHelmet2.default.rewind();
	
	  // Import Manifests
	  var assetsManifest = process.env.webpackAssets && JSON.parse(process.env.webpackAssets);
	  var chunkManifest = process.env.webpackChunkAssets && JSON.parse(process.env.webpackChunkAssets);
	
	  return '\n    <!doctype html>\n    <html>\n      <head>\n        ' + head.base.toString() + '\n        ' + head.title.toString() + '\n        ' + head.meta.toString() + '\n        ' + head.link.toString() + '\n        ' + head.script.toString() + '\n\n        ' + (process.env.NODE_ENV === 'production' ? '<link rel=\'stylesheet\' href=\'' + assetsManifest['/app.css'] + '\' />' : '') + '\n        <link href=\'https://fonts.googleapis.com/css?family=Lato:400,300,700\' rel=\'stylesheet\' type=\'text/css\'/>\n        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" type=\'text/css\'>\n        <link rel="shortcut icon" href="http://res.cloudinary.com/hashnode/image/upload/v1455629445/static_imgs/mern/mern-favicon-circle-fill.png" type="image/png" />\n        <style>\n  /* local page styles */\n  html h1 {\n    font-size: 26px;\n    margin-left: 10px;\n  }\n  html h2 {\n    font-size: 22px;\n    margin-left: 10px;\n  }\n  html h3 {\n    font-size: 14px;\n    margin-left: 10px;\n  }\n  html h4 {\n    font-size: 16px;\n  }\n  .progtrckr {\n    text-align: center;\n    padding-bottom: 16px;\n    // border-bottom: solid 1px;\n  }\n  .progtrckr li {\n    margin-bottom: 10px;\n  }\n  .val-err-tooltip {\n    background-color: red;\n    padding: 3px 5px 3px 10px;\n    font-size: 14px;\n    color: #fff;\n  }\n  .step {\n    // background-color: #ccc;\n    border:1px solid #e5e5e5;\n    min-height: 400px;\n    padding: 10px;\n    max-width: 815px;\n    min-width: 366px\n  }\n  html .row, html .form-horizontal .form-group {\n    margin: 0;\n  }\n  .footer-buttons {\n    margin-top: 10px;\n    margin-bottom: 50px;\n  }\n  html .step3 label, html .step4 label {\n    font-size: 20px;\n    text-align: left;\n  }\n  html .form-horizontal .control-label {\n    text-align: left;\n  }\n  .review .txt {\n    font-size: 20px;\n    text-align: left;\n    margin: 0;\n    padding: 0;\n  }\n  html body .saving {\n    background-color: #5cb85c;\n    width: 90%;\n    padding: 5px;\n    font-size: 16px;\n  }\n  code {\n    position: relative;\n    left: 12px;\n    line-height: 25px;\n  }\n  .eg-jump-lnk {\n    margin-top: 50px;\n    font-style: italic;\n  }\n  .lib-version {\n    font-size: 12px;\n    background-color: rgba(255, 255, 0, 0.38);\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    padding: 5px;\n  }\n  html .content {\n    margin-left: 10px;\n  }\n  span.red {\n    color: #d9534f;\n  }\n  span.green {\n    color: #3c763d;\n  }\n  span.bold {\n    font-weight: bold;\n  }\n  html .hoc-alert {\n    margin-top: 20px;\n  }\n  html .form-block-holder {\n    margin-top: 20px !important;\n  }\n  ol.progtrckr {\n  margin: 0;\n  padding-bottom: 2.2rem;\n  list-style-type: none;\n}\nol.progtrckr li {\n  display: inline-block;\n  text-align: center;\n  line-height: 4.5rem;\n  padding: 0 0.7rem;\n  cursor: pointer;\n}\nol.progtrckr li span {\n  padding: 0 1.5rem;\n}\n@media (max-width: 650px) {\n  .progtrckr li span {\n    display: none;\n  }\n}\n.progtrckr em {\n  display: none;\n  font-weight: 700;\n  padding-left: 1rem;\n}\n@media (max-width: 650px) {\n  .progtrckr em {\n    display: inline;\n  // }border-bottom: solid 1px;\n}\n\n\n\n\n\n}\n\nol.progtrckr li.progtrckr-todo {\n  color: silver;\n  border-bottom: 4px solid silver;\n}\nol.progtrckr li.progtrckr-doing {\n  color: black;\n  border-bottom: 4px solid #33C3F0;\n}\nol.progtrckr li.progtrckr-done {\n  color: black;\n  border-bottom: 4px solid #33C3F0;\n}\nol.progtrckr li:after {\n  content: "\\00a0\\00a0";\n}\nol.progtrckr li:before {\n  position: relative;\n  bottom: -3.7rem;\n  float: left;\n  left: 50%;\n}\nol.progtrckr li.progtrckr-todo:before {\n  content: "\\039F";\n  color: silver;\n  background-color: white;\n  width: 1.2em;\n  line-height: 1.4em;\n}\nol.progtrckr li.progtrckr-todo:hover:before {\n  color: #0FA0CE;\n}\n\nol.progtrckr li.progtrckr-doing:before {\n  content: "\\2022";\n  color: white;\n  background-color: #33C3F0;\n  width: 1.2em;\n  line-height: 1.2em;\n  border-radius: 1.2em;\n}\nol.progtrckr li.progtrckr-doing:hover:before {\n  color: #0FA0CE;\n}\n\nol.progtrckr li.progtrckr-done:before {\n  content: "\\2713";\n  color: white;\n  background-color: #33C3F0;\n  width: 1.2em;\n  line-height: 1.2em;\n  border-radius: 1.2em;\n}\nol.progtrckr li.progtrckr-done:hover:before {\n  color: #0FA0CE;\n}\n\n  </style>\n      </head>\n      <body>\n        <div id="root">' + html + '</div>\n        <script>\n          window.__INITIAL_STATE__ = ' + JSON.stringify(initialState) + ';\n          ' + (process.env.NODE_ENV === 'production' ? '//<![CDATA[\n          window.webpackManifest = ' + JSON.stringify(chunkManifest) + ';\n          //]]>' : '') + '\n        </script>\n        <script src=\'' + (process.env.NODE_ENV === 'production' ? assetsManifest['/vendor.js'] : '/vendor.js') + '\'></script>\n        <script src=\'' + (process.env.NODE_ENV === 'production' ? assetsManifest['/app.js'] : '/app.js') + '\'></script>\n      </body>\n    </html>\n  ';
	};
	
	var renderError = function renderError(err) {
	  var softTab = '&#32;&#32;&#32;&#32;';
	  var errTrace = process.env.NODE_ENV !== 'production' ? ':<br><br><pre style="color:red">' + softTab + err.stack.replace(/\n/g, '<br>' + softTab) + '</pre>' : '';
	  return renderFullPage('Server Error' + errTrace, {});
	};
	
	// Server Side Rendering based on routes matched by React-router.
	app.use(function (req, res, next) {
	  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirectLocation, renderProps) {
	    if (err) {
	      return res.status(500).end(renderError(err));
	    }
	
	    if (redirectLocation) {
	      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
	    }
	
	    if (!renderProps) {
	      return next();
	    }
	
	    var store = (0, _store.configureStore)();
	
	    return (0, _fetchData.fetchComponentData)(store, renderProps.components, renderProps.params).then(function () {
	      var initialView = (0, _server.renderToString)(_react2.default.createElement(
	        _reactRedux.Provider,
	        { store: store },
	        _react2.default.createElement(
	          _IntlWrapper2.default,
	          null,
	          _react2.default.createElement(_reactRouter.RouterContext, renderProps)
	        )
	      ));
	      var finalState = store.getState();
	
	      res.set('Content-Type', 'text/html').status(200).end(renderFullPage(initialView, finalState));
	    }).catch(function (error) {
	      return next(error);
	    });
	  });
	});
	
	// start app
	app.listen(_config2.default.port, function (error) {
	  if (!error) {
	    console.log('MERN is running on port: ' + _config2.default.port + '! Build something amazing!'); // eslint-disable-line
	  }
	});
	
	exports.default = app;
	/* WEBPACK VAR INJECTION */}.call(exports, "server"))

/***/ },
/* 70 */
/***/ function(module, exports) {

	"use strict";
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.sequence = sequence;
	/**
	 * Throw an array to it and a function which can generate promises
	 * and it will call them sequentially, one after another
	 */
	function sequence(items, consumer) {
	  var results = [];
	  var runner = function runner() {
	    var item = items.shift();
	    if (item) {
	      return consumer(item).then(function (result) {
	        results.push(result);
	      }).then(runner);
	    }
	
	    return Promise.resolve(results);
	  };
	
	  return runner();
	}

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = require("cuid");

/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = require("fast-csv");

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = require("hashmap");

/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = require("intl");

/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = require("intl-locales-supported");

/***/ },
/* 76 */
/***/ function(module, exports) {

	module.exports = require("intl/locale-data/jsonp/en");

/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = require("intl/locale-data/jsonp/fr");

/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = require("isomorphic-fetch");

/***/ },
/* 79 */
/***/ function(module, exports) {

	module.exports = require("limax");

/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports = require("postcss-cssnext");

/***/ },
/* 81 */
/***/ function(module, exports) {

	module.exports = require("postcss-focus");

/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = require("postcss-reporter");

/***/ },
/* 83 */
/***/ function(module, exports) {

	module.exports = require("react-intl/locale-data/en");

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = require("react-intl/locale-data/fr");

/***/ },
/* 85 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools");

/***/ },
/* 86 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools-dock-monitor");

/***/ },
/* 87 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools-log-monitor");

/***/ },
/* 88 */
/***/ function(module, exports) {

	module.exports = require("redux-thunk");

/***/ },
/* 89 */
/***/ function(module, exports) {

	module.exports = require("sanitize-html");

/***/ },
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */
/***/ function(module, exports) {

	module.exports = require("material-ui/Checkbox");

/***/ },
/* 101 */
/***/ function(module, exports) {

	module.exports = require("material-ui/styles/baseThemes/lightBaseTheme");

/***/ },
/* 102 */
/***/ function(module, exports) {

	module.exports = require("material-ui/styles/getMuiTheme");

/***/ },
/* 103 */
/***/ function(module, exports) {

	module.exports = require("material-ui/Card");

/***/ },
/* 104 */
/***/ function(module, exports) {

	module.exports = require("material-ui/TextField");

/***/ },
/* 105 */
/***/ function(module, exports) {

	module.exports = require("react-search-input");

/***/ }
/******/ ]);