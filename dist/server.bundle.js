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
/******/ 	return __webpack_require__(__webpack_require__.s = 74);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react-intl");

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

	module.exports = require("material-ui/FlatButton");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getUser = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _UserActions = __webpack_require__(20);
	
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
/* 7 */
/***/ function(module, exports) {

	module.exports = require("prop-types");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("mongoose");

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("react-helmet");

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("material-ui/TextField");

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getMedicalRightsForUser = exports.getSelectedMedicalRights = exports.getMedicalRights = undefined;
	
	var _WizardActions = __webpack_require__(21);
	
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
	  return state.medicalRights.selected;
	};
	
	var getMedicalRightsForUser = exports.getMedicalRightsForUser = function getMedicalRightsForUser(state) {
	  var userMedicalRights = [];
	  state.medicalRights.selected.filter(function (selected) {
	    selected.rights.filter(function (right) {
	      isRelevantForUser(right, state.user) ? addMedicalRight(userMedicalRights, right) : '';
	    });
	  });
	  console.log(userMedicalRights);
	  return userMedicalRights;
	};
	
	function addMedicalRight(rights, rightToAdd) {
	  var isAlreadyExist = false;
	  rights.forEach(function (right) {
	    if (right['Medical Right'] === rightToAdd['Medical Right']) {
	      isAlreadyExist = true;
	      right.condition += ' & ' + rightToAdd.condition;
	    }
	  });
	  if (!isAlreadyExist) {
	    rights.push(rightToAdd);
	  }
	}
	
	function isRelevantForUser(right, user) {
	  var isRelevant = false;
	  // console.log(right);
	  // console.log(user);
	  //Medical health provider
	  if (right['Insurance Provider'] === user.healthInsurance) {
	    isRelevant = true;
	    //Smoking condition
	    if (right['Smoking']) {
	      if (right['Smoking'] === 'TRUE' && user.isSmoking) {
	        console.log('Smoking condition ' + right['Medical Right'] + ' - pass');
	      } else {
	        console.log('Smoking condition ' + right['Medical Right'] + ' - failed');
	        return false;
	      }
	    } else {
	      console.log('No smoking condition ' + right['Medical Right']);
	    }
	
	    //Age condition
	    if (right['Age']) {
	      if (right['Age'].min && right['Age'].min <= user.age && right['Age'].max && right['Age'].max >= user.age) {
	        console.log('Age condition ' + right['Medical Right'] + ' - pass');
	      } else {
	        console.log('Age condition ' + right['Medical Right'] + ' - failed');
	        return false;
	      }
	    } else {
	      console.log('No age condition ' + right['Medical Right']);
	    }
	  }
	  return isRelevant;
	}
	
	// Get post by cuid
	// export const getPost = (state, cuid) => state.posts.data.filter(post => post.cuid === cuid)[0];
	
	// Export Reducer
	exports.default = WizardReducer;

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.toggleAddPost = toggleAddPost;
	// Export Constants
	var TOGGLE_ADD_POST = exports.TOGGLE_ADD_POST = 'TOGGLE_ADD_POST';
	var FETCH_DEVICE = exports.FETCH_DEVICE = 'FETCH_DEVICE';
	
	// Export Actions
	function toggleAddPost() {
	  return {
	    type: TOGGLE_ADD_POST
	  };
	}

/***/ },
/* 13 */
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
	
	var _apiCaller = __webpack_require__(15);
	
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getPost = exports.getPosts = undefined;
	
	var _PostActions = __webpack_require__(13);
	
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.API_URL = undefined;
	exports.default = callApi;
	
	var _isomorphicFetch = __webpack_require__(83);
	
	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);
	
	var _config = __webpack_require__(17);
	
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mongoose = __webpack_require__(8);
	
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
/* 17 */
/***/ function(module, exports) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var config = {
	  mongoURL: 'mongodb://heroku_8tlqs9j6:ic64tk953vbvp6l9j20ftjinio@ds157380.mlab.com:57380/heroku_8tlqs9j6' || 'mongodb://localhost:27017/mern-starter',
	  //Test12345
	  // mongoURL: process.env.MONGODB_URI || 'mongodb://localhost:27017/mazor',
	  port: process.env.PORT || 8000
	};
	
	exports.default = config;

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = require("webpack");

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getDevice = exports.getShowAddPost = undefined;
	
	var _AppActions = __webpack_require__(12);
	
	var _mobileDetect = __webpack_require__(89);
	
	var _mobileDetect2 = _interopRequireDefault(_mobileDetect);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// var mobileDetect = new MobileDetect(window.navigator.userAgent);
	//How to check if the device is mobile or not
	// console.log(mobileDetect.mobile());
	
	// Initial State
	// Import Actions
	var initialState = {
	  showAddPost: false,
	  isMobile: false
	};
	
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
	var getDevice = exports.getDevice = function getDevice(state, userAgent) {
	  if (userAgent) {
	    var mobileDetect = new _mobileDetect2.default(userAgent);
	    state.app.isMobile = mobileDetect.mobile() !== null;
	  } else {
	    state.app.isMobile = false;
	  }
	  return state.app.isMobile;
	};
	
	// Export Reducer
	exports.default = AppReducer;

/***/ },
/* 20 */
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
	exports.getAge = getAge;
	
	var _apiCaller = __webpack_require__(15);
	
	var _apiCaller2 = _interopRequireDefault(_apiCaller);
	
	var _universalCookie = __webpack_require__(101);
	
	var _universalCookie2 = _interopRequireDefault(_universalCookie);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Export Constants
	/**
	 * Created by ziv on 11/05/2017.
	 */
	var INIT_USER = exports.INIT_USER = 'INIT_USER';
	var UPDATE_USER = exports.UPDATE_USER = 'UPDATE_USER';
	var TERMS_AGREE = exports.TERMS_AGREE = 'TERMS_AGREE';
	
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
	    var cookies = new _universalCookie2.default();
	    var user = cookies.get('mzr_usr');
	    if (!user) {
	      user = getDefaultUser();
	    }
	    if (!user.age) {
	      user.age = getAge(user.dob);
	    }
	    dispatch(initUser(user));
	  };
	}
	
	function updateUserDetails(userToUpdate) {
	  return function (dispatch) {
	    //try to load from cookies otherwise use default
	    var cookies = new _universalCookie2.default();
	    cookies.set('mzr_usr', userToUpdate);
	    userToUpdate.age = getAge(userToUpdate.dob);
	    dispatch(updateUser(userToUpdate));
	  };
	}
	
	function getDefaultUser() {
	  var initialDob = new Date();
	  initialDob.setFullYear(initialDob.getFullYear() - 40);
	  return {
	    gender: 'female',
	    isSmoking: false,
	    dob: initialDob,
	    healthInsurance: 'MEDICARE',
	    weight: 150,
	    agreed_terms: false
	  };
	}
	
	function getAge(dateString) {
	  var today = new Date();
	  var birthDate = new Date(dateString);
	  var age = today.getFullYear() - birthDate.getFullYear();
	  var m = today.getMonth() - birthDate.getMonth();
	  if (m < 0 || m === 0 && today.getDate() < birthDate.getDate()) {
	    age--;
	  }
	  return age;
	}

/***/ },
/* 21 */
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
	
	var _apiCaller = __webpack_require__(15);
	
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
	      res.medicalEntry.map(function (conditionEntry) {
	        conditionEntry.rights.map(function (medicalRight) {
	          medicalRight.condition = conditionEntry.condition;
	        });
	      });
	      res.medicalEntry.sort();
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.localizationData = exports.enabledLanguages = undefined;
	
	var _reactIntl = __webpack_require__(2);
	
	var _intl = __webpack_require__(79);
	
	var _intl2 = _interopRequireDefault(_intl);
	
	var _intlLocalesSupported = __webpack_require__(80);
	
	var _intlLocalesSupported2 = _interopRequireDefault(_intlLocalesSupported);
	
	__webpack_require__(81);
	
	var _en = __webpack_require__(93);
	
	var _en2 = _interopRequireDefault(_en);
	
	var _en3 = __webpack_require__(58);
	
	var _en4 = _interopRequireDefault(_en3);
	
	__webpack_require__(82);
	
	var _fr = __webpack_require__(94);
	
	var _fr2 = _interopRequireDefault(_fr);
	
	var _fr3 = __webpack_require__(59);
	
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reduxDevtools = __webpack_require__(96);
	
	var _reduxDevtoolsLogMonitor = __webpack_require__(98);
	
	var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);
	
	var _reduxDevtoolsDockMonitor = __webpack_require__(97);
	
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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SWITCH_LANGUAGE = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.switchLanguage = switchLanguage;
	
	var _setup = __webpack_require__(22);
	
	// Export Constants
	var SWITCH_LANGUAGE = exports.SWITCH_LANGUAGE = 'SWITCH_LANGUAGE';
	
	function switchLanguage(newLang) {
	  return _extends({
	    type: SWITCH_LANGUAGE
	  }, _setup.localizationData[newLang]);
	}

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = require("material-ui/Checkbox");

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = require("material-ui/Dialog");

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = require("material-ui/RadioButton");

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.IntlWrapper = IntlWrapper;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactIntl = __webpack_require__(2);
	
	var _reactRedux = __webpack_require__(1);
	
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
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(3);
	
	var _App = __webpack_require__(60);
	
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
	  __webpack_require__(67);
	  __webpack_require__(66);
	}
	
	// react-router setup with code-splitting
	// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
	exports.default = _react2.default.createElement(
	  _reactRouter.Route,
	  { path: '/', component: _App2.default },
	  _react2.default.createElement(_reactRouter.IndexRoute, {
	    getComponent: function getComponent(nextState, cb) {
	      __webpack_require__.e/* nsure */(2).catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	        cb(null, __webpack_require__(103).default);
	      }).bind(null, __webpack_require__));
	    }
	  }),
	  _react2.default.createElement(_reactRouter.Route, {
	    path: '/wizard',
	    getComponent: function getComponent(nextState, cb) {
	      __webpack_require__.e/* nsure */(1).catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	        cb(null, __webpack_require__(104).default);
	      }).bind(null, __webpack_require__));
	    }
	  }),
	  _react2.default.createElement(_reactRouter.Route, {
	    path: '/landing',
	    getComponent: function getComponent(nextState, cb) {
	      __webpack_require__.e/* nsure */(3).catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
	        cb(null, __webpack_require__(102).default);
	      }).bind(null, __webpack_require__));
	    }
	  })
	);

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.configureStore = configureStore;
	
	var _redux = __webpack_require__(28);
	
	var _reduxThunk = __webpack_require__(99);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _DevTools = __webpack_require__(23);
	
	var _DevTools2 = _interopRequireDefault(_DevTools);
	
	var _reducers = __webpack_require__(69);
	
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
/* 32 */
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
	
	var _medicalEntry = __webpack_require__(16);
	
	var _medicalEntry2 = _interopRequireDefault(_medicalEntry);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _express = __webpack_require__(4);
	
	var _medicalrights = __webpack_require__(70);
	
	var MedicalRightsController = _interopRequireWildcard(_medicalrights);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	/**
	 * Created by ziv on 22/04/2017.
	 */
	var router = new _express.Router();
	
	// Get all conditions
	router.route('/medicalConditions').get(MedicalRightsController.getAllConditions);
	
	// Get all rights
	router.route('/medicalright').get(MedicalRightsController.getMedicalRight);
	router.route('/medicalrights').get(MedicalRightsController.getMedicalRights);
	router.route('/medicalrightsmock').get(MedicalRightsController.getMedicalRightsMock);
	
	// Get one post by cuid
	router.route('/medicalrights/:condition').get(MedicalRightsController.getMedicalRights);
	
	exports.default = router;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _express = __webpack_require__(4);
	
	var _populateDB = __webpack_require__(71);
	
	var PopulateDBController = _interopRequireWildcard(_populateDB);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var router = new _express.Router();
	
	// Get all rights from DB and save to DB
	router.route('/populateDB').get(PopulateDBController.populateDB);
	
	exports.default = router;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _express = __webpack_require__(4);
	
	var _post = __webpack_require__(72);
	
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
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fetchComponentData = fetchComponentData;
	
	var _promiseUtils = __webpack_require__(75);
	
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
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';
	
	var webpack = __webpack_require__(18);
	var cssnext = __webpack_require__(90);
	var postcssFocus = __webpack_require__(91);
	var postcssReporter = __webpack_require__(92);
	
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
/* 38 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = require("webpack-dev-middleware");

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = require("webpack-hot-middleware");

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = require("material-ui/RaisedButton");

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = require("material-ui/styles/baseThemes/lightBaseTheme");

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = require("material-ui/styles/getMuiTheme");

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(7);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactRedux = __webpack_require__(1);
	
	var _MedicalDiagnosticItem = __webpack_require__(68);
	
	var _MedicalDiagnosticItem2 = _interopRequireDefault(_MedicalDiagnosticItem);
	
	var _reactSearchInput = __webpack_require__(95);
	
	var _reactSearchInput2 = _interopRequireDefault(_reactSearchInput);
	
	var _FlatButton = __webpack_require__(5);
	
	var _FlatButton2 = _interopRequireDefault(_FlatButton);
	
	var _RaisedButton = __webpack_require__(44);
	
	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
	
	var _Dialog = __webpack_require__(26);
	
	var _Dialog2 = _interopRequireDefault(_Dialog);
	
	var _TextField = __webpack_require__(10);
	
	var _TextField2 = _interopRequireDefault(_TextField);
	
	var _getMuiTheme = __webpack_require__(46);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	var _lightBaseTheme = __webpack_require__(45);
	
	var _lightBaseTheme2 = _interopRequireDefault(_lightBaseTheme);
	
	var _WizardReducer = __webpack_require__(11);
	
	var _StepNumber = {
	  "search-input": "_8botdKKhaM9xtYcWvL4jG"
	};
	
	var _StepNumber2 = _interopRequireDefault(_StepNumber);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	//  Material
	
	
	// Import Selectors
	
	
	// Styles
	
	
	var styles = {
	  wizardStepPageStyle: {
	    maxHeight: 350
	    // maxWidth: 679,
	    // overflow:'auto',
	  },
	  medicalDiagnosticsContainer: {
	    display: 'flex'
	  },
	  searchContainer: {
	    height: 383,
	    overflow: 'auto'
	  },
	  cantFindContainer: {
	    textAlign: 'center',
	    width: '100%'
	  },
	  dialogContentStyle: {
	    width: '50%',
	    maxWidth: 'none'
	  }
	};
	
	var KEYS_TO_FILTERS = ['condition'];
	
	var StepNumber1 = function (_Component) {
	  _inherits(StepNumber1, _Component);
	
	  function StepNumber1(props) {
	    _classCallCheck(this, StepNumber1);
	
	    var _this = _possibleConstructorReturn(this, (StepNumber1.__proto__ || Object.getPrototypeOf(StepNumber1)).call(this, props));
	
	    _this.handleOpen = function () {
	      _this.setState({ dialogOpen: true });
	    };
	
	    _this.handleClose = function () {
	      _this.setState({ dialogOpen: false });
	    };
	
	    _this.handleCantFindDialogOpen = function () {
	      _this.context.mixpanel.track('Wizard step button', { 'ab_version': 'v1', 'step': '1', 'button': "can't find" });
	      _this.setState({ cantFindDialogOpen: true });
	    };
	
	    _this.handleCantFindDialogClose = function () {
	      _this.setState({ cantFindDialogOpen: false });
	    };
	
	    _this.state = {
	      searchTerm: '',
	      dialogOpen: false,
	      cantFindDialogOpen: false
	    };
	
	    _this.searchUpdated = _this.searchUpdated.bind(_this);
	    _this.handleOpen = _this.handleOpen.bind(_this);
	    _this.handleClose = _this.handleClose.bind(_this);
	    _this.handleCantFindDialogOpen = _this.handleCantFindDialogOpen.bind(_this);
	    _this.handleCantFindDialogClose = _this.handleCantFindDialogClose.bind(_this);
	    _this.isValidated = _this.isValidated.bind(_this);
	    return _this;
	  }
	
	  _createClass(StepNumber1, [{
	    key: 'isValidated',
	    value: function isValidated() {
	      console.log('check is validate');
	      var isValid = false;
	      for (var index = 0; index < this.props.medicalRights.length; index++) {
	        if (this.props.medicalRights[index].isSelected) {
	          isValid = true;
	          break;
	        }
	      }
	      if (!isValid) {
	        this.handleOpen();
	      }
	
	      return isValid;
	    }
	  }, {
	    key: 'searchUpdated',
	    value: function searchUpdated(term) {
	      console.log(term);
	      this.setState({ searchTerm: term });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.context.mixpanel.track('Wizard step open', { 'ab_version': 'v1', 'step': '1' });
	    }
	  }, {
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        muiTheme: (0, _getMuiTheme2.default)(_lightBaseTheme2.default)
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var filteredMedicalDiagnostics = this.props.medicalRights.filter((0, _reactSearchInput.createFilter)(this.state.searchTerm, KEYS_TO_FILTERS));
	
	      var actions = [_react2.default.createElement(_FlatButton2.default, {
	        label: 'Ok',
	        primary: true,
	        keyboardFocused: true,
	        onTouchTap: this.handleClose
	      })];
	
	      var actionsCantFind = [_react2.default.createElement(_FlatButton2.default, {
	        label: 'OK',
	        primary: true,
	        keyboardFocused: true,
	        onTouchTap: this.handleCantFindDialogClose
	      })];
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'step step1', style: styles.wizardStepPageStyle },
	        _react2.default.createElement(
	          'div',
	          { className: 'row' },
	          _react2.default.createElement(
	            'div',
	            { className: 'row', style: styles.searchContainer },
	            _react2.default.createElement(_reactSearchInput2.default, { placeholder: 'Search for your medical diagnostic',
	              className: _StepNumber2.default['search-input'],
	              onChange: this.searchUpdated }),
	            filteredMedicalDiagnostics.map(function (medicalRight, i) {
	              return _react2.default.createElement(_MedicalDiagnosticItem2.default, { key: i, medicalRight: medicalRight });
	            })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'row', style: styles.cantFindContainer },
	            _react2.default.createElement(_FlatButton2.default, {
	              label: 'Can\'t find proper diagnostic',
	              primary: true,
	              fullWidth: true,
	              keyboardFocused: false,
	              contentStyle: styles.dialogContentStyle,
	              onTouchTap: this.handleCantFindDialogOpen
	            })
	          ),
	          _react2.default.createElement(
	            _Dialog2.default,
	            {
	              title: 'Can\'t find',
	              actions: actionsCantFind,
	              modal: true,
	              open: this.state.cantFindDialogOpen,
	              contentStyle: styles.dialogContentStyle,
	              onRequestClose: this.handleCantFindDialogClose },
	            'Sorry, but we aren\'t support it yet...'
	          ),
	          _react2.default.createElement(
	            _Dialog2.default,
	            {
	              title: 'Please choose',
	              actions: actions,
	              modal: true,
	              open: this.state.dialogOpen,
	              onRequestClose: this.handleClose
	            },
	            'You must select at least one medical diagnostic'
	          )
	        )
	      );
	    }
	  }]);
	
	  return StepNumber1;
	}(_react.Component);
	
	function mapStateToProps(state) {
	  return {
	    medicalRights: (0, _WizardReducer.getMedicalRights)(state)
	  };
	}
	
	StepNumber1.propTypes = {
	  medicalRight: _propTypes2.default.any
	};
	
	StepNumber1.childContextTypes = {
	  muiTheme: _react2.default.PropTypes.object
	};
	
	StepNumber1.contextTypes = {
	  router: _react2.default.PropTypes.object,
	  mixpanel: _propTypes2.default.any
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, null, null, { withRef: true })(StepNumber1);

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(7);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactRedux = __webpack_require__(1);
	
	var _DatePicker = __webpack_require__(86);
	
	var _DatePicker2 = _interopRequireDefault(_DatePicker);
	
	var _RadioButton = __webpack_require__(27);
	
	var _SelectField = __webpack_require__(56);
	
	var _SelectField2 = _interopRequireDefault(_SelectField);
	
	var _MenuItem = __webpack_require__(55);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	var _Checkbox = __webpack_require__(25);
	
	var _Checkbox2 = _interopRequireDefault(_Checkbox);
	
	var _TextField = __webpack_require__(10);
	
	var _TextField2 = _interopRequireDefault(_TextField);
	
	var _UserReducer = __webpack_require__(6);
	
	var _UserActions = __webpack_require__(20);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Material design
	
	
	// Import Selectors
	
	
	// Import Actions
	
	
	// Styles
	var styles = {
	  wizardStepPageStyle: {
	    maxHeight: 350,
	    // maxWidth: 679,
	    overflow: 'auto'
	  },
	  title: {
	    display: 'inline-flex',
	    width: '100%'
	  },
	  personalDetails: {
	    display: 'inline-flex',
	    width: '100%',
	    flexDirection: 'column'
	  },
	  block: {
	    maxWidth: 250
	  },
	  radioButton: {
	    marginBottom: 16
	  },
	  toggle: {
	    marginBottom: 16
	  },
	
	  userDetailSection: {
	    display: 'flex',
	    borderBottom: '1px solid #AAA',
	    padding: '7px 0px',
	    fontSize: '16px',
	    alignItems: 'center'
	  },
	
	  userDetailSectionWithNoAlign: {
	    display: 'flex',
	    borderBottom: '1px solid #AAA',
	    padding: '4px 0px',
	    fontSize: '16px'
	  },
	
	  userDetailText: {
	    minWidth: '25%',
	    fontWeight: 'bold',
	    position: 'relative',
	    top: '2px'
	  },
	
	  userDetailNote: {
	    fontSize: '8px'
	  },
	
	  // Gender
	  genderRadioButton: {
	    // display:'flex'
	  }
	};
	
	var StepNumber2 = function (_Component) {
	  _inherits(StepNumber2, _Component);
	
	  function StepNumber2(props) {
	    _classCallCheck(this, StepNumber2);
	
	    var _this = _possibleConstructorReturn(this, (StepNumber2.__proto__ || Object.getPrototypeOf(StepNumber2)).call(this, props));
	
	    _this.sendUserDetails = function () {
	      _this.context.mixpanel.track('User details', {
	        'gender': _this.props.user.gender,
	        'is_smoking': _this.props.user.isSmoking,
	        'dob': new Date(_this.props.user.dob),
	        'health_insurance': _this.props.user.healthInsurance,
	        'weight': _this.props.user.weight
	      });
	    };
	
	    _this.state = {};
	
	    //Binds
	    _this.handleHealthInsuranceChange = _this.handleHealthInsuranceChange.bind(_this);
	    _this.handleGenderChange = _this.handleGenderChange.bind(_this);
	    _this.handleDOBChange = _this.handleDOBChange.bind(_this);
	    _this.isValidated = _this.isValidated.bind(_this);
	    _this.updateState = _this.updateState.bind(_this);
	    _this.handleWeightChange = _this.handleWeightChange.bind(_this);
	    return _this;
	  }
	
	  _createClass(StepNumber2, [{
	    key: 'isValidated',
	    value: function isValidated() {
	      (0, _UserActions.updateUserDetails)();
	      //send them with mixpanel
	      this.sendUserDetails();
	      return true;
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.context.mixpanel.track('Wizard step open', { 'ab_version': 'v1', 'step': '2' });
	    }
	  }, {
	    key: 'handleHealthInsuranceChange',
	    value: function handleHealthInsuranceChange(event, index, value) {
	      console.log('the new value is' + value);
	      this.props.user.healthInsurance = value;
	      this.updateState();
	    }
	  }, {
	    key: 'handleGenderChange',
	    value: function handleGenderChange(event, value) {
	      console.log('the new value is' + value);
	      this.props.user.gender = value;
	      this.updateState();
	    }
	  }, {
	    key: 'handleDOBChange',
	    value: function handleDOBChange(event, value) {
	      console.log('the new value is' + value);
	      this.props.user.dob = value;
	      this.updateState();
	    }
	  }, {
	    key: 'updateState',
	    value: function updateState() {
	      this.props.dispatch((0, _UserActions.updateUserDetails)(this.props.user));
	      this.setState({ user: this.props.user });
	    }
	  }, {
	    key: 'handleIsSmokingChange',
	    value: function handleIsSmokingChange(e, checked) {
	      this.props.user.isSmoking = !this.props.user.isSmoking;
	      this.updateState();
	    }
	  }, {
	    key: 'handleWeightChange',
	    value: function handleWeightChange(e, value) {
	      console.log('the new weight is' + value);
	      this.props.user.weight = value;
	      console.log(this.props.user);
	      this.updateState();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'step step2', style: styles.wizardStepPageStyle },
	        _react2.default.createElement(
	          'section',
	          { style: styles.title },
	          _react2.default.createElement(
	            'h2',
	            null,
	            'We need a few more details to help you'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'col-md-12', style: styles.personalDetails },
	          _react2.default.createElement(
	            'div',
	            { className: 'user-detail-section', style: styles.userDetailSectionWithNoAlign },
	            _react2.default.createElement(
	              'div',
	              { className: 'user-detail-text', style: styles.userDetailText },
	              'Gender'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'user-detail-input' },
	              _react2.default.createElement(
	                _RadioButton.RadioButtonGroup,
	                { name: 'gender',
	                  defaultSelected: this.props.user.gender,
	                  valueSelected: this.props.user.gender,
	                  style: styles.genderRadioButton,
	                  onChange: this.handleGenderChange },
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
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'user-detail-section', style: styles.userDetailSection },
	            _react2.default.createElement(
	              'div',
	              { className: 'user-detail-text', style: styles.userDetailText },
	              'Date of birth'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'user-detail-input' },
	              _react2.default.createElement(_DatePicker2.default, {
	                hintText: 'Select your birth date',
	                defaultDate: new Date(this.props.user.dob),
	                onChange: this.handleDOBChange,
	                formatDate: null
	              })
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'user-detail-section', style: styles.userDetailSection },
	            _react2.default.createElement(
	              'div',
	              { className: 'user-detail-text', style: styles.userDetailText },
	              'Health insurance'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'user-detail-input' },
	              _react2.default.createElement(
	                _SelectField2.default
	                // floatingLabelText="Health insurance"
	                ,
	                { value: this.props.user.healthInsurance,
	                  onChange: this.handleHealthInsuranceChange
	                },
	                _react2.default.createElement(_MenuItem2.default, { value: 'MEDICARE', primaryText: 'Medicare' }),
	                _react2.default.createElement(_MenuItem2.default, { value: 'BLUE_CROSS_SHILD', primaryText: 'Blue Cross Blue Shield Group' }),
	                _react2.default.createElement(_MenuItem2.default, { value: 'UNITED_HEALTH', primaryText: 'Unitedhealth Group' }),
	                _react2.default.createElement(_MenuItem2.default, { value: 'WELL_POINT', primaryText: 'Wellpoint Inc. Group' }),
	                _react2.default.createElement(_MenuItem2.default, { value: 'KAISER', primaryText: 'Kaiser Foundation Group' }),
	                _react2.default.createElement(_MenuItem2.default, { value: 'HUMANA', primaryText: 'Humana Group' }),
	                _react2.default.createElement(_MenuItem2.default, { value: 'AETNA', primaryText: 'Aetna Group' }),
	                _react2.default.createElement(_MenuItem2.default, { value: 'HCSC', primaryText: 'HCSC Group' }),
	                _react2.default.createElement(_MenuItem2.default, { value: 'CIGNA_HEALTH', primaryText: 'Cigna Health Group' }),
	                _react2.default.createElement(_MenuItem2.default, { value: 'HIGHMARK', primaryText: 'Highmark Group' })
	              ),
	              _react2.default.createElement(
	                'div',
	                { style: styles.userDetailNote },
	                'If you can\'t find your insurance company it\'s must be because we are still working on analyze this data...'
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'user-detail-section', style: styles.userDetailSectionWithNoAlign },
	            _react2.default.createElement(
	              'div',
	              { className: 'user-detail-text', style: styles.userDetailText },
	              'Critical information'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'user-detail-input' },
	              _react2.default.createElement(
	                'div',
	                { style: styles.block },
	                _react2.default.createElement(_Checkbox2.default, {
	                  label: 'Smoking',
	                  checked: !!this.props.user.isSmoking,
	                  onCheck: function onCheck(e, checked) {
	                    return _this2.handleIsSmokingChange(e, checked);
	                  } })
	              ),
	              _react2.default.createElement(
	                'div',
	                { style: styles.block },
	                _react2.default.createElement(_TextField2.default, {
	                  floatingLabelText: 'Your weight in lb',
	                  hintText: 'Weight',
	                  value: this.props.user.weight,
	                  onChange: this.handleWeightChange
	                })
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return StepNumber2;
	}(_react.Component);
	
	function mapStateToProps(state) {
	  return {
	    // showAddPost: getShowAddPost(state),
	    user: (0, _UserReducer.getUser)(state)
	  };
	}
	
	StepNumber2.propTypes = {
	  user: _propTypes2.default.any
	};
	
	StepNumber2.contextTypes = {
	  mixpanel: _propTypes2.default.any
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, null, null, { withRef: true })(StepNumber2);

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(7);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactRedux = __webpack_require__(1);
	
	var _UserReducer = __webpack_require__(6);
	
	var _Toggle = __webpack_require__(88);
	
	var _Toggle2 = _interopRequireDefault(_Toggle);
	
	var _Dialog = __webpack_require__(26);
	
	var _Dialog2 = _interopRequireDefault(_Dialog);
	
	var _FlatButton = __webpack_require__(5);
	
	var _FlatButton2 = _interopRequireDefault(_FlatButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Selectors
	
	
	// Material
	
	
	var styles = {
	  wizardStepPageStyle: {
	    maxHeight: 350,
	    minWidth: 317
	    // maxWidth: 679,
	    // overflow:'auto',
	  },
	  termsSection: {
	    maxHeight: 383,
	    overflow: 'auto',
	    display: 'inline-flex',
	    width: '100%',
	    flexDirection: 'column'
	  },
	  toggle: {
	    // marginBottom: 15,
	    marginTop: 15,
	    maxWidth: 250,
	    display: 'inline-flex',
	    width: '100%'
	  }
	};
	
	var StepNumber3 = function (_Component) {
	  _inherits(StepNumber3, _Component);
	
	  function StepNumber3(props) {
	    _classCallCheck(this, StepNumber3);
	
	    var _this = _possibleConstructorReturn(this, (StepNumber3.__proto__ || Object.getPrototypeOf(StepNumber3)).call(this, props));
	
	    _this.handleOpen = function () {
	      _this.setState({ dialogOpen: true });
	    };
	
	    _this.handleClose = function () {
	      _this.setState({ dialogOpen: false });
	    };
	
	    _this.state = {
	      dialogOpen: false
	    };
	
	    //Binds
	    _this.stateChanged = _this.stateChanged.bind(_this);
	    _this.handleOpen = _this.handleOpen.bind(_this);
	    _this.handleClose = _this.handleClose.bind(_this);
	    _this.isValidated = _this.isValidated.bind(_this);
	    return _this;
	  }
	
	  _createClass(StepNumber3, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.context.mixpanel.track('Wizard step open', { 'ab_version': 'v1', 'step': '3' });
	    }
	  }, {
	    key: 'isValidated',
	    value: function isValidated() {
	      console.log(this.state);
	      if (!this.props.user.agreed_terms) {
	        this.handleOpen();
	      }
	      return this.props.user.agreed_terms;
	    }
	  }, {
	    key: 'stateChanged',
	    value: function stateChanged(value, isInputChecked) {
	      this.props.user.agreed_terms = isInputChecked;
	      this.setState({ user: this.props.user });
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
	        { className: 'step step2', style: styles.wizardStepPageStyle },
	        _react2.default.createElement(
	          'section',
	          { style: styles.termsSection },
	          _react2.default.createElement(
	            'h2',
	            null,
	            'Privacy Policy'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-md-12' },
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'span',
	                null,
	                'Last modified: January 3, 2018'
	              )
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'em',
	                null,
	                _react2.default.createElement(
	                  'u',
	                  null,
	                  _react2.default.createElement(
	                    'span',
	                    null,
	                    'Introduction\xA0 '
	                  )
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'span',
	                null,
	                'Insurights, Inc. \xA0(\u201CCompany\u201D or \u201CWe\u201D) respect your privacy and are committed to protecting it through our compliance with this policy.'
	              )
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'span',
	                null,
	                '\xA0\xA0\xA0 This policy describes the types of information we may collect from you or that you may provide when you visit the website ('
	              ),
	              _react2.default.createElement(
	                'a',
	                { href: 'http://www.insurights.com' },
	                _react2.default.createElement(
	                  'span',
	                  null,
	                  'www.insurights.com'
	                )
	              ),
	              _react2.default.createElement(
	                'span',
	                null,
	                ') (our \u201CWebsite\u201D) and our practices for collecting, using, maintaining, protecting, and disclosing that information.'
	              )
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'span',
	                null,
	                '\xA0\xA0\xA0 This policy applies to information we collect on this website only. Please read this policy carefully to understand our policies and practices regarding your information and how we will treat it. If you do not agree with our policies and practices, your choice is not to use our Website. By accessing or using this Website, you agree to this privacy policy. This policy may change from time to time (see Changes to Our Privacy Policy). Your continued use of this Website after we make changes is deemed to be acceptance of those changes, so please check the policy periodically for updates.'
	              )
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'em',
	                null,
	                _react2.default.createElement(
	                  'u',
	                  null,
	                  _react2.default.createElement(
	                    'span',
	                    null,
	                    'Children Under the Age of 13\xA0 '
	                  )
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'span',
	                null,
	                '\xA0\xA0\xA0 Our Website is not intended for children under 13 years of age. No one under age 13 may provide any information to or on the Website. We do not knowingly collect personal information from children under 13. If we learn we have collected or received personal information from a child under 13 without verification of parental consent, we will delete that information. '
	              )
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'em',
	                null,
	                _react2.default.createElement(
	                  'u',
	                  null,
	                  _react2.default.createElement(
	                    'span',
	                    null,
	                    'Information We Collect About You and How We Collect It\xA0 '
	                  )
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'span',
	                null,
	                '\xA0\xA0\xA0 We collect several types of information from and about users of our Website, including information: (i) by which you may be personally identified, such as name, postal address, e-mail address, telephone number or any other identifier by which you may be contacted online or offline (\u201Cpersonal information\u201D); (ii) that is about you but individually does not identify you; and (iii) about your internet connection, the equipment you use to access our Website and usage details.'
	              )
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'span',
	                null,
	                '\xA0\xA0\xA0 We collect this information: (i) directly from you when you provide it to us, and (ii) automatically as you navigate through the site. Information collected automatically may include usage details, IP addresses, and information collected through cookies, web beacons, and other tracking technologies.'
	              )
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'em',
	                null,
	                _react2.default.createElement(
	                  'u',
	                  null,
	                  _react2.default.createElement(
	                    'span',
	                    null,
	                    'Information You Provide to Us'
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                'span',
	                null,
	                '. '
	              )
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'span',
	                null,
	                'The information we collect on or through our Website may include: (i) information that you provide by filling in forms on our Website, (ii) records and copies of your correspondence (including email addresses), if you contact us, and (iii) your search queries on the Website.'
	              )
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'em',
	                null,
	                _react2.default.createElement(
	                  'u',
	                  null,
	                  _react2.default.createElement(
	                    'span',
	                    null,
	                    'Information We Collect Through Automatic Data Collection Technologies'
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                'span',
	                null,
	                '. '
	              )
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'span',
	                null,
	                'As you navigate through and interact with our Website, we may use automatic data collection technologies to collect certain information about your equipment, browsing actions, and patterns, including: (i) details of your visits to our Website, including traffic data, location data, logs, and other communication data and the resources that you access and use on the Website, (ii) information about your computer and internet connection, including your IP address, operating system, and browser type, (iii) the information we collect automatically is statistical data and does not include personal information. '
	              )
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'span',
	                null,
	                'It helps us to improve our Website and to deliver a better and more personalized service, including by enabling us to: (i) estimate our audience size and usage patterns, (ii) store information about your preferences, allowing us to customize our Website according to your individual interests, (iii) speed up your searches, and (iv) recognize you when you return to our Website.'
	              )
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'span',
	                null,
	                'The technologies we use for this automatic data collection may include:'
	              )
	            ),
	            _react2.default.createElement(
	              'ul',
	              null,
	              _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement(
	                  'span',
	                  null,
	                  ' Cookies (or browser cookies). A cookie is a small file placed on the hard drive of your computer. You may refuse to accept browser cookies by activating the appropriate setting on your browser. However, if you select this setting you may be unable to access certain parts of our Website. Unless you have adjusted your browser setting so that it will refuse cookies, our system will issue cookies when you direct your browser to our Website.'
	                )
	              ),
	              _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement(
	                  'span',
	                  null,
	                  ' Flash Cookies. Certain features of our Website may use local stored objects (or Flash cookies) to collect and store information about your preferences and navigation to, from, and on our Website. Flash cookies are not managed by the same browser settings as are used for browser cookies. '
	                )
	              ),
	              _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement(
	                  'span',
	                  null,
	                  ' Web Beacons. Pages of our Website and our e-mails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of certain website content and verifying system and server integrity).'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'em',
	                null,
	                _react2.default.createElement(
	                  'u',
	                  null,
	                  _react2.default.createElement(
	                    'span',
	                    null,
	                    'How We Use Your Information\xA0 '
	                  )
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'span',
	                null,
	                '\xA0\xA0\xA0 We use information that we collect about you or that you provide to us, including any personal information: (i) to present our Website and its contents to you, (ii) to provide you with information that you request from us, (iii) to fulfill any other purpose for which you provide it, (iv) to notify you about changes to our Website or any services we offer or provide though it, (v) in any other way we may describe when you provide the information, and (vi) for any other purpose with your consent.'
	              )
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'span',
	                null,
	                '\xA0\xA0\xA0 We may disclose personal information that we collect or you provide as described in this privacy policy: (i) to our subsidiaries and affiliates, (ii) to contractors, service providers, and other third parties we use to support our business, (iii) to a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of the Company\u2019s assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which personal information held by the Company about our Website users is among the assets transferred, (iv) to fulfill the purpose for which you provide it, (v) for any other purpose disclosed by us when you provide the information, (vi) to comply with any court order, law, or legal process, including to respond to any government or regulatory request, and (vii) to enforce or apply our terms of use.'
	              )
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'em',
	                null,
	                _react2.default.createElement(
	                  'u',
	                  null,
	                  _react2.default.createElement(
	                    'span',
	                    null,
	                    'Data Security\xA0 '
	                  )
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'span',
	                null,
	                '\xA0\xA0\xA0 We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on our secure servers behind firewalls. '
	              )
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'span',
	                null,
	                '\xA0\xA0\xA0 The safety and security of your information also depends on you. Where we have given you (or where you have chosen) a password for access to certain parts of our Website, you are responsible for keeping this password confidential. We ask you not to share your password with anyone.'
	              )
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'span',
	                null,
	                '\xA0\xA0\xA0 Unfortunately, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our Website. Any transmission of personal information is at your own risk. We are not responsible for circumvention of any privacy settings or security measures contained on the Website.'
	              )
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'em',
	                null,
	                _react2.default.createElement(
	                  'u',
	                  null,
	                  _react2.default.createElement(
	                    'span',
	                    null,
	                    'Changes to Our Privacy Policy\xA0 '
	                  )
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'span',
	                null,
	                '\xA0\xA0\xA0 It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users\u2019 personal information, we will notify you by a notice on the Website home page. The date the privacy policy was last revised is identified at the top of the page. You are responsible for ensuring we have an up-to-date active and deliverable email address for you, and for periodically visiting our Website and this privacy policy to check for any changes.'
	              )
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'span',
	                null,
	                '\xA0'
	              )
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'span',
	                null,
	                '\xA0'
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: styles.block, className: 'col-md-12' },
	          _react2.default.createElement(_Toggle2.default, {
	            label: 'I agree',
	            style: styles.toggle,
	            onToggle: this.stateChanged,
	            toggled: this.props.user.agreed_terms
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
	
	  return StepNumber3;
	}(_react.Component);
	
	function mapStateToProps(state) {
	  return {
	    user: (0, _UserReducer.getUser)(state)
	  };
	}
	
	StepNumber3.propTypes = {
	  user: _propTypes2.default.any
	};
	
	StepNumber3.contextTypes = {
	  mixpanel: _propTypes2.default.any
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, null, null, { withRef: true })(StepNumber3);

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(7);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactRedux = __webpack_require__(1);
	
	var _TextField = __webpack_require__(10);
	
	var _TextField2 = _interopRequireDefault(_TextField);
	
	var _FlatButton = __webpack_require__(5);
	
	var _FlatButton2 = _interopRequireDefault(_FlatButton);
	
	var _CircularProgress = __webpack_require__(54);
	
	var _CircularProgress2 = _interopRequireDefault(_CircularProgress);
	
	var _MedicalRIghtItem = __webpack_require__(53);
	
	var _MedicalRIghtItem2 = _interopRequireDefault(_MedicalRIghtItem);
	
	var _WizardReducer = __webpack_require__(11);
	
	var _UserReducer = __webpack_require__(6);
	
	var _onwork = '/' + "df4c810f4fde7a200fbc980b2ea5f232.png";
	
	var _onwork2 = _interopRequireDefault(_onwork);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Selectors
	
	
	//images
	// Import Images
	
	
	var styles = {
	  wizardStepPageStyle: {
	    maxHeight: 350,
	    // maxWidth: 679,
	    minWidth: 318,
	    overflow: 'auto'
	  },
	  medicalRightsTitle: {
	    display: 'inline-flex',
	    width: '100%'
	  },
	  medicalRightsContainer: {
	    // overflow:'auto',
	    display: 'inline-flex',
	    width: '100%',
	    flexDirection: 'column'
	  },
	  brokenServerContainer: {
	    textAlign: 'center',
	    marginTop: '10%',
	    // display:'inline-flex',
	    width: '100%',
	    flexDirection: 'column'
	  },
	  brokenServerImg: {
	    height: 120
	  },
	  brokenServerText: {
	    fontSize: 20,
	    fontWeight: 'bold'
	  },
	  errorSection: {
	    width: '100%',
	    // display:'inline-flex',
	    flexDirection: 'column'
	  },
	  spacer: {
	    width: '100%',
	    display: 'inline-flex'
	  }
	};
	
	var StepNumber4 = function (_Component) {
	  _inherits(StepNumber4, _Component);
	
	  function StepNumber4(props) {
	    _classCallCheck(this, StepNumber4);
	
	    var _this = _possibleConstructorReturn(this, (StepNumber4.__proto__ || Object.getPrototypeOf(StepNumber4)).call(this, props));
	
	    _this.emailHasChanged = function (email) {
	      _this.state.email = email;
	    };
	
	    _this.submitEmail = function () {
	      var selected = _this.props.selectedDiagnostics.map(function (x) {
	        return x.condition;
	      }).join(',');
	
	      _this.context.mixpanel.track('No rights - But update me', {
	        'ab_version': 'v1',
	        'email': _this.state.email,
	        'selected': selected,
	        'user': JSON.stringify(_this.props.user)
	      });
	
	      _this.setState({ isEmailSubmitted: true });
	    };
	
	    _this.state = {
	      isEmailSubmitted: false,
	      email: ''
	    };
	
	    return _this;
	  }
	
	  _createClass(StepNumber4, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.context.mixpanel.track('Wizard step open', { 'ab_version': 'v1', 'step': '4' });
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.context.mixpanel.track('Medical right results', {
	        'num_of_rights_found': this.props.medicalRights.length,
	        'num_of_selected_medical_conditions': this.props.selectedDiagnostics.length,
	        'selected': this.props.selectedDiagnostics.map(function (x) {
	          return x.condition;
	        }).join(','),
	        'user': JSON.stringify(this.props.user)
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var medicalRights = this.props.medicalRights;
	
	      console.log(medicalRights);
	
	      var results = null;
	      if (this.props.medicalRights.length > 0) {
	        results = _react2.default.createElement(
	          'div',
	          { className: 'step', style: styles.wizardStepPageStyle },
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'section',
	              { style: styles.medicalRightsTitle },
	              _react2.default.createElement(
	                'h2',
	                null,
	                'Based on your input, these are your medical rights:'
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { style: styles.medicalRightsContainer },
	              this.props.medicalRights.map(function (medicalRight, i) {
	                // console.log(selectedConditions);
	                return _react2.default.createElement(_MedicalRIghtItem2.default, { key: i, medicalRight: medicalRight });
	              })
	            )
	          )
	        );
	        //Display server error
	      } else {
	        results = _react2.default.createElement(
	          'div',
	          { className: 'step', style: styles.wizardStepPageStyle },
	          _react2.default.createElement(
	            'div',
	            { className: 'row', style: styles.errorSection },
	            _react2.default.createElement(
	              'div',
	              { style: styles.brokenServerContainer },
	              _react2.default.createElement('img', { src: _onwork2.default, style: styles.brokenServerImg }),
	              _react2.default.createElement(
	                'div',
	                { style: styles.brokenServerText },
	                'We didn\'t find any medical rights for you..',
	                _react2.default.createElement('br', null),
	                'Our insurance experts are working on it.',
	                _react2.default.createElement('br', null),
	                'If you wanna stay updated, we can send you an email when it will be ready',
	                _react2.default.createElement('br', null),
	                _react2.default.createElement(_TextField2.default, {
	                  hintText: 'Email',
	                  onChange: this.emailHasChanged()
	                }),
	                function (showMe) {
	                  if (showMe) {
	                    return _react2.default.createElement(
	                      'div',
	                      null,
	                      _react2.default.createElement(_FlatButton2.default, {
	                        style: { marginTop: 30 },
	                        label: 'Sent',
	                        disabled: true,
	                        primary: true,
	                        keyboardFocused: false
	                      })
	                    );
	                  }
	                }(this.state.isEmailSubmitted),
	                function (showMe, submit) {
	                  if (showMe) {
	                    return _react2.default.createElement(
	                      'div',
	                      null,
	                      _react2.default.createElement(_FlatButton2.default, {
	                        style: { marginTop: 30 },
	                        label: 'Send',
	                        primary: true,
	                        keyboardFocused: false,
	                        onTouchTap: submit
	                      })
	                    );
	                  }
	                }(!this.state.isEmailSubmitted, this.submitEmail)
	              ),
	              _react2.default.createElement('span', { style: styles.spacer })
	            )
	          )
	        );
	      }
	
	      return results;
	    }
	  }]);
	
	  return StepNumber4;
	}(_react.Component);
	
	function mapStateToProps(state) {
	  return {
	    medicalRights: (0, _WizardReducer.getMedicalRightsForUser)(state),
	    selectedDiagnostics: (0, _WizardReducer.getSelectedMedicalRights)(state),
	    user: (0, _UserReducer.getUser)(state)
	  };
	}
	
	StepNumber4.contextTypes = {
	  mixpanel: _propTypes2.default.any
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(StepNumber4);

/***/ },
/* 51 */
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
	
	var _owl_logo_white = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAClCAYAAACa2klkAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAB1WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOkNvbXByZXNzaW9uPjE8L3RpZmY6Q29tcHJlc3Npb24+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb24+MjwvdGlmZjpQaG90b21ldHJpY0ludGVycHJldGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KAtiABQAAEsVJREFUeAHtnf9x48ixxy3X+9vFS+CMTcCPl4AXisC8BGwogtMl8FzrBLjlBKB7CUh2AuA6AckvAaA2ASmDfZ8vD0MPwRkQvzEU0VW9M+jpH9/ungEgUdL+5jcLXWUFbkzW3759y8x8Gd9dBV5ubm5+trP6L+situbL9J1X4LfvPL8lPU8FlsZ7CvPexUvj33uHPfktjfcU5r2Ll8a/9w578lsa7ynMexfbX87dDpTsFj/rgXxdqxt9zf1Sk7zqqzq7yGX7VlU8NJ4v8HfVxS7XfCPoJEgXP1duo2+47Hw1oMa+JclrbY3hcqs3lbiycWn8lTXcpLs03lTiysal8VfWcJPu0nhTiSsbl8ZfWcNNukvjTSWubFwaf2UNN+kujTeVuLJxafyVNdykuzTeVOLKxqXxV9Zwk+7SeFOJKxuXxl9Zw026S+NNJa5sXBp/ZQ036S6NN5UIeNRvOcEHAmrdbz1lB8Vv32JfWkvjfZWZV64frRqVlsaPWt7Ozkf/8bWl8Z17M6phMap3nC+NH7vCgfpfGh9oY8aGtTR+7AoH6n+Mxr8EmuulwCoAenkvd+VfXvgO8D/CD3ABL9S8Ap+o4eiH5/CbNM1xndcEuHbsk5hvJqwYc1jjQr9WoGDYwREcw4ZM3cz1aOMYt/ojsOUm+PuRcLnQofg3HFdKodOu5o9Ohz9+NHYkTv4rMa7p1KuBBbyGm5B+5+0HlyK107doY9faGdktPncundFPvIICPGGoa7qK9Bn+ACv5v8E7+NKoALDyUMG/g5WLclI+BVxHa+q0qVO4qDWSUUKvsI+2LKxcSUkOb+AUzuEQKQPUPRy5crBlpV5dLbR24gdZBneh2I4/6Ry0zx7Ekq/bgEE/glXkR3guUnNSOIGdG7YuJ9nAGeyjk0/eUMx8ymfksQ/LqM94QN0T2PUL/E/I77gVvvmAGTk+1sxXcIF+YeQaWdswfIRjWHpj0QuOd/AvYNC8N4Fddbn3OLojzoNZQzdhrkdGW0rxU7Q16qUPWO1snY4qpeccY7CG86phea07xRY+ajTXuhvoFD7CrriIW5H86O4S1eFlXVhsUmzZnr0jlDq2rZnnTFZ1cYNdA/gnk4U1PjcFjE1u2fmmGQtHG8D4lxwWhme4KUl3A7cqOvpqtoskFwavP9ZS2EWfTC4XNZJJtRi69hagmhy6W1c1PLLaImGTeexssfBFVRxNrrHLbEeOeY7MuUHln7Vnl02T2EHpkIRuc1VK2oDEOK06OHPtfYRgFzls1Wib7tvgs3VxktmOPHPFczZfco/Nxo4T/JwkHiuJ5G1AY7uCq42puHReepuHduq0+FXoxMeScKzqsLPu2lS/ej39t6756an6t8e62EGtAV7FqlLSBiTG1Y1T9Vd3HbliYVDXICc+bLbwM+xsvuTlOkNjcr7nYO3C9+rKJUgZCWwcJTgpHDoqaAIf1pjLVvI+5D0lOPX5PmAwRUXXbkTO9dHm4FpYJe9CR76smC58sVkPeqQK1bf5rAoYHdfm6FJAn81JI4XBgU32J/hK3Xuf8wHkzs2J32rtFKr2xbVa26bXY3yv/o+V4P+qXOvyo0M2pCj2OHM12YVP5n/y+BhCvPE4eXbI/+CQ9RaN0fh1A1RNdBq48ao4P+XyarsXYrd4GCkn2eX/zeE9csh6i8Zo/KqCynXKKiqTXboKGxI+VyFGOSSDNp5dHDmQjwLcEaeJqLopZRMSviY5DKIzaONBFDlQfeeQFQ7ZkKK8hTMXPpm/tPDRWpUPT3ZNjThQg2/OoRvvysX1cvLFpTigbOfx5SqgC5/MfT48rluJfZvq1uNl5ZF3Fk/R+NiB7gnZm0M+hGhX81HkR0eA2CGT6BePfAixz7dvEw4RczwfelOFXbSpRkXJ9TWry7atLK7G0jVOVjWOTvCVNlmNTdelVwxXVYyS1TiMq/p9r6c48cL4UxUop/KvyF6q8p7XDzXPzp9rfJ/gK3XvGN9q7Los3YHR5bMOX5c409mwY30nXps5riJBFsE6AUOQvt15cpIUU3L4XJwTfKXtuoEtKo0okc8qYXkOX1y1CeqaBOoa7/qulJqi5qtpfegRY2fTVSDWtpZzxdJjRiw7Q058pf0QzU/ky0UASA0Izxi77IKRAVpNrKOtCywG2vFdnvmv2N27fBoZ6wlsKDFyM7JgbzwnPumiJ4wp3JYyDNYmXnVkzcZnfOdmorFqE+S1DdgzT3zA0VcTtAFyuI50au9h7ylXDNbtk+rdIOgprjaRyIuv9CndLZzDPpKvFI5l4yPWbXxc7km+DZa9wGcflByk+R7tf/5J/zM9zJJzoNHUCYtLVpPNvLbZxi/6dlFfjdw3op/ChhKfni1HWZvA4DJjZOv45qXdUYORPcPK26bM5yMoOYgfbdTMVZCsItNlCjdqYtsE8auNYlPORW0s1re2AfMUrrVpi8vo47eKD9H+wKjpG11YlBq7oEcAV5PSrVsJaTdXKUcQD5UQvnQCM9hF+9PkioVy4jJAlsNT4FOctbAxVjdgInnwpARgmw5vywhTe8GaZ8zjrslhq5gp7CI1PC0XTpqP3MablXrVQfIx8R3uLMTJYZuirnWZ3A7UuY2c+QE883v4tbJuLnMm2vEb+FAMVwKs6xGiu4ma6SP52vthNHoajUxNf4VFj4rDOCk+OzdiC49Nh0Nj6wU7B7kKbtPWBstCBD/aCp65mpJVOOf6HOUoxI6YpsnPrAuD9EQ5fNhozMfGp/hH+IQVWQrbdG/nEPwc5CqcTSr4obAmAWQx/Ggr9pyroInxXx1Z053EReuqrq5RnAwfsVYOYJELV9AyksgqiXzyAUZPG0W32AxuS2r2FnY2rxqz1LVjeHEZW5RHx+fANerb/I1JbuiRRGJ82l+DvnH9Ax9QFIy1VNqqkfohid/BpqkF86+wSL71VyTktxXhX89O+dRHuLetjFEeGh/+ItzmFRwvXO/gf2tsUjf0wiASymCb9i9Qc6MDkE5wDq/mxqL44Mjgc6Q7m+6KUQiYazEA0vVMTWqNrmyxbCZDK3pEOw6uVIDSi0oCa5dW6RWBbrNXT6pDtTgtrzP049kLCQjdQlNYza2jnMUgbrNzFU35w+fqhEoj2qI1fT0Jqp2bwW3oGeXpwc7VaSuu8oaV/5CU42yaOymBlIB2W1e6uuZTqDGabtc/sfbY8FMixXBuR+w4V/On2anDl6GVR+UJv3asUxuzpBWwpsoguG+DooGuirFpGv8S9chPL7tTNN2UOxm0TnhNjecRxi0+39VzX/nAjyPUqonLYQ4TkdIm0Xrq5NgPA3jQLd/eGXlMfcqrpdcdJmqP3LLAgU7jlJQRLLYgXMxUuGHhD4Hsb5u3qyHoNzNmkBH7IjZAWSfhdZFO39SHx+BI2nUcbSwjWKDnphwAeqkM6h0APKqPcOWwj1IWpJfDc5D6165uGGQzID230R7BpGJHrXfyAAaKW8Z/ZqyjjMW1QjJ2+b2BOt9t1+7t1Gs/lsVzjHL3Z4Qdqd38BXV9Tv4XeHPGtGB9B3+B9TGtbAelsg5rnP43HMMRXEcPLP4Clp2UsI8Yqh+7amlKKsDzwQS8MRPXCGA1PXatTSD7DNCfy6LdEe/PcNQwrpr/Bv+r1FfRi3JeN0QsmuL8kfkKVsObUIHS/8InfzF65jra2H+kpk8SeBsP2Jh1NX5OugXozgAoMf2J6w0cGfmMY0FsFfIfNk4bTyB1NJAewHmni7rGp6wnUpqRjm5PNg4KqpMYwx/LccU4Nr0RYAd/0UgRXxhrCZw6PHGt0nSLb2DWTzXVNv6V9SmKeS7tvwH2r+eUKHCEjvgW/r6c61rclgoMDH9lruZpE0rWmAI77Qa3fvzt5cZc2WNggHXKGv2snp1DdU5O2sTrqty67vTze5b9yZSYIZ12g++Oxj/4/sNBnZpQSA3Tib/rA4hktYF2fXy0saXp2mRxG5uJdD8ozm89wfRGGxIlZSFDwnQOy0/nFGZa3/fW1/i6W+JMeJ3/qdFcWGrjlo+VpFZp5kVf43V7DY1iChqFBsqDZ+ORhyCOBeKk8YHfUs++3YdQWTCEeps/lOek8ayEeNoNYD3rI3MR4ljiC/FReVQuV+OPFAK86PV2P0E+8QQxeoe4xMb/uXfW4zrQt5SDp0tsfMTtNA64siFjO5TtEhsv8H85ZBDQpNyQIb8jqVov+udSG78R+AAp+Jc6avamup00nm9t7rQQOK04XSEW+WPgdRM8d+MvALiB+KOZBDRGAWHxQfk/LZyc+FL7xWcVkHz/PeeA8AhKiHehaolyCXyNL6raAV7HIWEK9NHjKlEhoa/x+9uByyokWWBf1q1Cqo0Pi3mH8zU+8xkGJg/p1hoFVhsXnMMj3Nf4g4LLOiDZ7wPCsv8Bh4DwuKAc+upsfPnTKgcll4dAZOtAcFwKjC8GqLPx5eLOKAU8RgFjCxHazoCqa/xhdxjlAMcoQEyhQjr6KeG6xu9CzcDGxZv9yr6ecf79jLGbhN7ZSt7Gl8/5J1s50PnynG/WmH/Yat7Gl0qXcLu385lz/nXO4A1i72ydc42/hBNv57PM3RV4Ku/gh9XaxqNcoLk7aC+TS63A0W1eSdQ2vszyl0vNdsF9qMDJnbtJ40+MDu6WySVU4OQ2L9BnG18+Gx4uIcOZMe4/7pwZgyv8yW1eSmcbX3pabveukh7LiuPLIK70+/APLiSNGo/xDuPC5WCRBV0B72O6UePL1D4FneLM4MrDMTOKk/DenrVpvHbP24nrRRBqBfSnWgofuMaNx4ma/nefo0W+r8AuoDp4T7swNm58mdCWMbRT/1JiC2EoQgABBn0St6vD0qrxIZ76ElNdjlOufZ0yWE2s2tMuu5saY+dS+TGovmZdORUmFtL41jmMBbH84c+5f15Rp/3DuRxbnXg5K09YKM/63bkEJ14vJo7nCnf2tMuodePLSKE864N63+BQFNRHPBfpT7Y9NAneqfHlqW+0s5qA6KET4s//z/my+XPTWnZqvJzT/M8McyYpGCF+f/yLgM1A+jBm1zRu58aXARrvsKaAWuoVLfWnUN9NEcQRo1UvejW+3GE6+bNQmx0+FUAw6S74NlW8Mo7+3m/RJuZNG2WX7oxf3ulF5gcXprll1CQFQzIRjkZfvlWx9Drxckbxtbvvqo4nuNbJCpWmfM53qn3vxqvyNP+J4fPEXZiyuG1TUz2moM/Uftcl0E0XI5dNect/Zi1yrY8g+0DSxQh+j1yWecUI9Vj5A7yCDRVMvsJZtQHYPSLfwGNROI86kl3DU1Dtl3EA0N+93XPXqmO/gfW/XTUl/c9ZKRwpJmMCj0WKte6a2yh2ANJ/CzY26eVpTwSKYMVUk1QQF0mewdKLSlPnwPoazuA+tMVYuMaixAl+biHZpmNlXPrVaVJh0/K67SC7qFonZENu2hx/z/DQdNj0VfyzX5PpCh4jaVNEnaghSJ857Aln6RAOR/ahd6hBaLCXuyoaCqCXID2L7ZehqloI1y+A+Cf8PzVg3lh7gvWVRAEbumWiF76NEYw4CoNeaDX2ptEaL2Q0f82QwStdT0g7K1ZszdtOVWR9BL2tKzh5RtKBN/AYJBy3YHgZw/koPtV8eApKCRK7kkAuDFpvQ3pUrV3+fDL09e4xBjnz8uEIRk4lxiqIity4QejqhbDJu8creq2aboqN3ZAviLj7lhjfFzkqAWUxMKmJq7YFwSY9g+O+rU9bH9/ZGf9NlxPb78XOyXbI5utUtm66iic7OId91MmvaQxOh8gzMf7exThQUdSwvqfS1xy9jPYisGlj9aGkF4BQjanIBtaJ7UO9TqVq4wneu/E1vpvknMj+3RJFX8NNCuHszxCFwfGzw7m+99CL8Bk7/Eq0hXNNHKRarHsFvhRjJQq7iu+oy7FoiBzxqGK7KO7jH4dqsIu0IXS3q5JqcB1NN4Ul4RX8WK1Eg+tehcJ/VBOj8+0en9rMLnq1cs4sBeXe+7FlfF/cSPKfrGLY08S+sOZpnyTxk1q+XNPW/nGiTazT66KDPxa16V7h+z45vBtbCqFbYQ4b2heLCxXJRUmX5HGkOE2o8WnEWRW77V/4oy5Yr8aGAunUbGEVa38LZPTdDaSTtCkO+mqQ7JqSdLew89GCfANncB0tJ7tpk6jivunS1xzOYR+lLER1vlk3G8rno6k8Q1Gcw03ocIuvwzf12qifzg2ZDBXWiTv3efQTOvq1qsyKLbuP8MaSuaZ3CH+CpT8UPfCJmvwu1KcCND9pcsQ66CTChd1Qd4XWj6A+dbkKW5rT9hldtw/UoJM7QRkjqzP0rMlfCq+uohlTJ6nClgVm6EyPWEZ12LUO38MZ7KOcBfnS3WhpeF1Bh1qj0Gs4hXXSmlKKYtwVg2xLHvJdoCucznYX83J3LsOymbfofQ9Hln7B3PlLD5bO1U3/H+tEkSDzLR8uAAAAAElFTkSuQmCC";
	
	var _owl_logo_white2 = _interopRequireDefault(_owl_logo_white);
	
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
	        _react2.default.createElement('img', { src: _owl_logo_white2.default, style: {
	            height: '30px',
	            marginRight: '10px'
	          } }),
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
/* 52 */
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
	
	var _reactIntl = __webpack_require__(2);
	
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
	
	var _IconSvg = __webpack_require__(51);
	
	var _IconSvg2 = _interopRequireDefault(_IconSvg);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Import Style
	function Header(props, context) {
	  // const languageNodes = props.intl.enabledLanguages.map(
	  //   lang => <li key={lang} onClick={() => props.switchLanguage(lang)} className={lang === props.intl.locale ? styles.selected : ''}>{lang}</li>
	  // );
	
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
	  toggleAddPost: _react.PropTypes.any,
	  switchLanguage: _react.PropTypes.any,
	  intl: _react.PropTypes.any
	};
	
	exports.default = Header;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Card = __webpack_require__(85);
	
	var _FlatButton = __webpack_require__(5);
	
	var _FlatButton2 = _interopRequireDefault(_FlatButton);
	
	var _RadioButton = __webpack_require__(27);
	
	var _RadioButton2 = _interopRequireDefault(_RadioButton);
	
	var _FontIcon = __webpack_require__(87);
	
	var _FontIcon2 = _interopRequireDefault(_FontIcon);
	
	var _MedicalRightItem = {
	  "medical-right-item": "_2OPQaFLVSkPuvLOeotACNW",
	  "medical-condition": "_-zsAwla7bqudwL3lryVKn",
	  "radioButtonKnew": "_2gY4EkWSl0gbnoPy9jdX0c"
	};
	
	var _MedicalRightItem2 = _interopRequireDefault(_MedicalRightItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function MedicalRightItem(props) {
	  var medicalRightTitle = props.medicalRight['Medical Right Category'] ? props.medicalRight['Medical Right Category'] + ' - ' + props.medicalRight['Medical Right'] : props.medicalRight['Medical Right'];
	  return _react2.default.createElement(
	    _Card.Card,
	    null,
	    _react2.default.createElement(_Card.CardHeader, {
	      title: medicalRightTitle,
	      subtitle: props.medicalRight.condition,
	      actAsExpander: true,
	      showExpandableButton: true
	    }),
	    _react2.default.createElement(
	      _Card.CardActions,
	      null,
	      _react2.default.createElement(
	        _RadioButton.RadioButtonGroup,
	        {
	          name: 'userRightKnowledgeStatus' },
	        _react2.default.createElement(_RadioButton.RadioButton, {
	          value: 'DIDNT_KNOW',
	          label: 'I didn\'t know'
	        }),
	        _react2.default.createElement(_RadioButton.RadioButton, {
	          value: 'ALREADY_KNOW',
	          label: 'Already knew'
	        })
	      ),
	      _react2.default.createElement(_FlatButton2.default, { primary: true,
	        label: 'Chat with us'
	        // href="https://www.facebook.com/sharer.php?u=http://www.ynet.co.il/articles/0,7340,L-4970913,00.html"
	        // target="_blank"
	        , icon: _react2.default.createElement(_FontIcon2.default, { className: 'muidocs-icon-custom-github' })
	      })
	    ),
	    _react2.default.createElement(
	      _Card.CardText,
	      { expandable: true },
	      function (showMe) {
	        if (showMe) {
	          return _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              'Description:'
	            ),
	            '  ',
	            props.medicalRight['Medical Right Description']
	          );
	        }
	      }(props.medicalRight['Medical Right Description']),
	      function (showMe) {
	        if (showMe) {
	          return _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              'Comments:'
	            ),
	            '  ',
	            props.medicalRight['Comments']
	          );
	        }
	      }(props.medicalRight['Comments']),
	      function (showMe) {
	        if (showMe) {
	          return _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              'b',
	              null,
	              'Family Background:'
	            ),
	            '  ',
	            props.medicalRight['Family Background']
	          );
	        }
	      }(props.medicalRight['Family Background'])
	    )
	  );
	}
	
	// Import Style
	
	
	MedicalRightItem.propTypes = {
	  medicalRight: _react.PropTypes.any
	};
	
	exports.default = MedicalRightItem;

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = require("material-ui/CircularProgress");

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = require("material-ui/MenuItem");

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = require("material-ui/SelectField");

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = require("react-stepzilla");

/***/ },
/* 58 */
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
/* 59 */
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
/* 60 */
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
	
	var _reactRedux = __webpack_require__(1);
	
	var _App = {
	  "container": "_4uEyKcd5WHob5qPzotT7",
	  "progtrckr": "_3Y6DQZh1IQy_Ho6ycb_ahP",
	  "progtrckr-todo": "_1N_rZ4VqyEgJwR20fEJFZ1",
	  "progtrckr-doing": "_3uNOy-0WRNUayqAfLXOFGF",
	  "progtrckr-done": "_-ZF6hpRyofG5f3ViJeGlc"
	};
	
	var _App2 = _interopRequireDefault(_App);
	
	var _reactHelmet = __webpack_require__(9);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _DevTools = __webpack_require__(23);
	
	var _DevTools2 = _interopRequireDefault(_DevTools);
	
	var _Header = __webpack_require__(52);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _Footer = __webpack_require__(61);
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	var _AppActions = __webpack_require__(12);
	
	var _IntlActions = __webpack_require__(24);
	
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
	      return _react2.default.createElement(
	        'div',
	        null,
	        this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && _react2.default.createElement(_DevTools2.default, null),
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(_reactHelmet2.default, {
	            title: 'Insurights',
	            titleTemplate: '%s - Know your rights',
	            meta: [{ charset: 'utf-8' }, {
	              'http-equiv': 'X-UA-Compatible',
	              content: 'IE=edge'
	            }, {
	              name: 'viewport',
	              content: 'width=device-width, initial-scale=1'
	            }]
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
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Footer = Footer;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactIntl = __webpack_require__(2);
	
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
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _setup = __webpack_require__(22);
	
	var _IntlActions = __webpack_require__(24);
	
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
/* 63 */
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
	
	var _reactIntl = __webpack_require__(2);
	
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
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _PostListItem = __webpack_require__(65);
	
	var _PostListItem2 = _interopRequireDefault(_PostListItem);
	
	var _progTracker = {
	  "progtrckr": "_1gots0T1qmximnr_geso4_",
	  "val-err-tooltip": "_9vCWgvVPszZxQNscac2Ic",
	  "step": "_1Lw7KWNcw1KcP4MogUxDao",
	  "row": "_1A0QsO2w5NaRQ1G9oYcU3c",
	  "form-horizontal": "_3t_6TlM0CU-IisvGk9NK_y",
	  "form-group": "_1xMhoS_wFX3PDFN6THuRiq",
	  "footer-buttons": "_3cHwoF0oTMYhUOY_AVxIc1",
	  "step3": "_33jkjCKn4b9H8dFr-OmDco",
	  "step4": "_25JJ0qY_sVAf94SdmFzzUc",
	  "control-label": "VkflfFTpn4gmWEjpfgmN6",
	  "review": "WcHoTG7viE6JzKImJwJkt",
	  "txt": "_2DSVPD_z8OekWJPFr5Ujkt",
	  "saving": "HMvG0YAmEQQck0GZo6Yjn",
	  "eg-jump-lnk": "_1mqogYJsRWO_p1owkPkKBp",
	  "lib-version": "_GRxm4KrXd1_JhsPoR7uo",
	  "content": "_1vKtlU1rl8N2NCVRsmsyp8",
	  "red": "_1ZjFff1GaWnOAAEtd87glv",
	  "green": "_3tgNwq-qgolFUVj6lS-DqJ",
	  "bold": "_1bJvCGENAbkau4FdN7nAlF",
	  "hoc-alert": "_1xGGQMpWFglkUzMznl314f",
	  "form-block-holder": "_1xQyqqV63sg3I0HCeTAJfQ",
	  "progtrckr-todo": "_3ojFsatz22_d65C5w_LGhd",
	  "progtrckr-doing": "_1UpcKFdVQwIpotH0H44uYE",
	  "progtrckr-done": "_21aScf6uurGWYPvd6q37Cr"
	};
	
	var _progTracker2 = _interopRequireDefault(_progTracker);
	
	var _reactStepzilla = __webpack_require__(57);
	
	var _reactStepzilla2 = _interopRequireDefault(_reactStepzilla);
	
	var _StepNumber = __webpack_require__(47);
	
	var _StepNumber2 = _interopRequireDefault(_StepNumber);
	
	var _StepNumber3 = __webpack_require__(48);
	
	var _StepNumber4 = _interopRequireDefault(_StepNumber3);
	
	var _StepNumber5 = __webpack_require__(49);
	
	var _StepNumber6 = _interopRequireDefault(_StepNumber5);
	
	var _StepNumber7 = __webpack_require__(50);
	
	var _StepNumber8 = _interopRequireDefault(_StepNumber7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//Steps
	function PostList(props) {
	  var _this = this;
	
	  var steps = [{ name: 'Diagnosis', component: _react2.default.createElement(_StepNumber2.default, { getStore: function getStore() {
	        return _this.getStore();
	      }, updateStore: function updateStore(u) {
	        _this.updateStore(u);
	      } }) }, { name: 'Info', component: _react2.default.createElement(_StepNumber4.default, { getStore: function getStore() {
	        return _this.getStore();
	      }, updateStore: function updateStore(u) {
	        _this.updateStore(u);
	      } }) }, { name: 'Terms', component: _react2.default.createElement(_StepNumber6.default, { getStore: function getStore() {
	        return _this.getStore();
	      }, updateStore: function updateStore(u) {
	        _this.updateStore(u);
	      } }) }, { name: 'Rights', component: _react2.default.createElement(_StepNumber8.default, { getStore: function getStore() {
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
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(3);
	
	var _reactIntl = __webpack_require__(2);
	
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
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PostDetailPage = PostDetailPage;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(1);
	
	var _reactHelmet = __webpack_require__(9);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _reactIntl = __webpack_require__(2);
	
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
	
	var _PostActions = __webpack_require__(13);
	
	var _PostReducer = __webpack_require__(14);
	
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
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(1);
	
	var _PostList = __webpack_require__(64);
	
	var _PostList2 = _interopRequireDefault(_PostList);
	
	var _PostCreateWidget = __webpack_require__(63);
	
	var _PostCreateWidget2 = _interopRequireDefault(_PostCreateWidget);
	
	var _PostActions = __webpack_require__(13);
	
	var _AppActions = __webpack_require__(12);
	
	var _AppReducer = __webpack_require__(19);
	
	var _PostReducer = __webpack_require__(14);
	
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
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MedicalDiagnosticItem = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(1);
	
	var _reactRouter = __webpack_require__(3);
	
	var _reactIntl = __webpack_require__(2);
	
	var _Checkbox = __webpack_require__(25);
	
	var _Checkbox2 = _interopRequireDefault(_Checkbox);
	
	var _MedicalDiagnosticItem = {
	  "medical-diagnostic-item": "_Uhygq52TmiRQTOLmE_0"
	};
	
	var _MedicalDiagnosticItem2 = _interopRequireDefault(_MedicalDiagnosticItem);
	
	var _WizardActions = __webpack_require__(21);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Style
	
	
	var MedicalDiagnosticItem = exports.MedicalDiagnosticItem = function (_Component) {
	  _inherits(MedicalDiagnosticItem, _Component);
	
	  function MedicalDiagnosticItem(props) {
	    _classCallCheck(this, MedicalDiagnosticItem);
	
	    var _this = _possibleConstructorReturn(this, (MedicalDiagnosticItem.__proto__ || Object.getPrototypeOf(MedicalDiagnosticItem)).call(this, props));
	
	    _this.state = {};
	
	    //Bind
	    _this.onCheck = _this.onCheck.bind(_this);
	    return _this;
	  }
	
	  _createClass(MedicalDiagnosticItem, [{
	    key: 'onCheck',
	    value: function onCheck(e, checked) {
	      this.props.medicalRight.isSelected = !this.props.medicalRight.isSelected;
	
	      this.props.medicalRight.isSelected ? this.props.dispatch((0, _WizardActions.selectCondition)(this.props.medicalRight)) : this.props.dispatch((0, _WizardActions.unselectCondition)(this.props.medicalRight));
	
	      this.setState({ medicalRight: this.props.medicalRight });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        'div',
	        { className: _MedicalDiagnosticItem2.default['medical-diagnostic-item'] },
	        _react2.default.createElement(_Checkbox2.default, { className: _MedicalDiagnosticItem2.default['medical-diagnostic'],
	          label: this.props.medicalRight.condition,
	          checked: !!this.props.medicalRight.isSelected,
	          onCheck: function onCheck(e, checked) {
	            return _this2.onCheck(e, checked);
	          } })
	      );
	    }
	  }]);
	
	  return MedicalDiagnosticItem;
	}(_react.Component);
	
	MedicalDiagnosticItem.propTypes = {
	  medicalRight: _react.PropTypes.any
	};
	
	function mapStateToProps(state) {
	  return {};
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(MedicalDiagnosticItem);

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(28);
	
	var _AppReducer = __webpack_require__(19);
	
	var _AppReducer2 = _interopRequireDefault(_AppReducer);
	
	var _PostReducer = __webpack_require__(14);
	
	var _PostReducer2 = _interopRequireDefault(_PostReducer);
	
	var _IntlReducer = __webpack_require__(62);
	
	var _IntlReducer2 = _interopRequireDefault(_IntlReducer);
	
	var _WizardReducer = __webpack_require__(11);
	
	var _WizardReducer2 = _interopRequireDefault(_WizardReducer);
	
	var _UserReducer = __webpack_require__(6);
	
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
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getMedicalRights = getMedicalRights;
	exports.getMedicalRight = getMedicalRight;
	exports.getMedicalRightsMock = getMedicalRightsMock;
	exports.getAllConditions = getAllConditions;
	
	var _medicalEntry = __webpack_require__(16);
	
	var _medicalEntry2 = _interopRequireDefault(_medicalEntry);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var right1 = {
	  "condition": "OSA",
	  "rights": [{
	    "name": "CPAP (continuous positive airway pressure)",
	    "description": "3 months of CPAP theapry. (meet cover it longer,depends on your doctor).you pay 20% of the medcial approved amount ofr rental of he machine and purchase of the related supplies (like mask and tubing). Medicare pays the supplier to rent the machine for 13 months if you've been using it without interruption. After you've rented the machine for 13 months, you own it",
	    "family_history": "",
	    "general_condition": "",
	    "filters": [{
	      "name": "age",
	      "is_relevant": true,
	      "min": 10,
	      "max": 30
	    }, {
	      "name": "weight",
	      "is_relevant": true,
	      "min": 10,
	      "max": 30
	    }, {
	      "name": "race",
	      "is_relevant": true,
	      "value": "black"
	    }, {
	      "name": "smoking",
	      "is_relevant": true,
	      "value": false
	    }]
	  }]
	};
	var right2 = {
	  "condition": "OSA1",
	  "rights": [{
	    "name": "CPAP (continuous positive airway pressure)",
	    "description": "3 months of CPAP theapry. (meet cover it longer,depends on your doctor).you pay 20% of the medcial approved amount ofr rental of he machine and purchase of the related supplies (like mask and tubing). Medicare pays the supplier to rent the machine for 13 months if you've been using it without interruption. After you've rented the machine for 13 months, you own it",
	    "family_history": "",
	    "general_condition": "",
	    "filters": [{
	      "name": "age",
	      "is_relevant": true,
	      "min": 10,
	      "max": 30
	    }, {
	      "name": "weight",
	      "is_relevant": true,
	      "min": 10,
	      "max": 30
	    }, {
	      "name": "race",
	      "is_relevant": true,
	      "value": "black"
	    }, {
	      "name": "smoking",
	      "is_relevant": true,
	      "value": false
	    }]
	  }]
	};
	var right3 = {
	  "condition": "OSA2",
	  "rights": [{
	    "name": "CPAP (continuous positive airway pressure)",
	    "description": "3 months of CPAP theapry. (meet cover it longer,depends on your doctor).you pay 20% of the medcial approved amount ofr rental of he machine and purchase of the related supplies (like mask and tubing). Medicare pays the supplier to rent the machine for 13 months if you've been using it without interruption. After you've rented the machine for 13 months, you own it",
	    "family_history": "",
	    "general_condition": "",
	    "filters": [{
	      "name": "age",
	      "is_relevant": true,
	      "min": 10,
	      "max": 30
	    }, {
	      "name": "weight",
	      "is_relevant": true,
	      "min": 10,
	      "max": 30
	    }, {
	      "name": "race",
	      "is_relevant": true,
	      "value": "black"
	    }, {
	      "name": "smoking",
	      "is_relevant": true,
	      "value": false
	    }]
	  }]
	};
	var right4 = {
	  "condition": "OSA3",
	  "rights": [{
	    "name": "CPAP (continuous positive airway pressure)",
	    "description": "3 months of CPAP theapry. (meet cover it longer,depends on your doctor).you pay 20% of the medcial approved amount ofr rental of he machine and purchase of the related supplies (like mask and tubing). Medicare pays the supplier to rent the machine for 13 months if you've been using it without interruption. After you've rented the machine for 13 months, you own it",
	    "family_history": "",
	    "general_condition": "",
	    "filters": [{
	      "name": "age",
	      "is_relevant": true,
	      "min": 10,
	      "max": 30
	    }, {
	      "name": "weight",
	      "is_relevant": true,
	      "min": 10,
	      "max": 30
	    }, {
	      "name": "race",
	      "is_relevant": true,
	      "value": "black"
	    }, {
	      "name": "smoking",
	      "is_relevant": true,
	      "value": false
	    }]
	  }]
	};
	var right5 = {
	  "condition": "OSA4",
	  "rights": [{
	    "name": "CPAP (continuous positive airway pressure)",
	    "description": "3 months of CPAP theapry. (meet cover it longer,depends on your doctor).you pay 20% of the medcial approved amount ofr rental of he machine and purchase of the related supplies (like mask and tubing). Medicare pays the supplier to rent the machine for 13 months if you've been using it without interruption. After you've rented the machine for 13 months, you own it",
	    "family_history": "",
	    "general_condition": "",
	    "filters": [{
	      "name": "age",
	      "is_relevant": true,
	      "min": 10,
	      "max": 30
	    }, {
	      "name": "weight",
	      "is_relevant": true,
	      "min": 10,
	      "max": 30
	    }, {
	      "name": "race",
	      "is_relevant": true,
	      "value": "black"
	    }, {
	      "name": "smoking",
	      "is_relevant": true,
	      "value": false
	    }]
	  }]
	};
	var right6 = {
	  "condition": "OSA5",
	  "rights": [{
	    "name": "CPAP (continuous positive airway pressure)",
	    "description": "3 months of CPAP theapry. (meet cover it longer,depends on your doctor).you pay 20% of the medcial approved amount ofr rental of he machine and purchase of the related supplies (like mask and tubing). Medicare pays the supplier to rent the machine for 13 months if you've been using it without interruption. After you've rented the machine for 13 months, you own it",
	    "family_history": "",
	    "general_condition": "",
	    "filters": [{
	      "name": "age",
	      "is_relevant": true,
	      "min": 10,
	      "max": 30
	    }, {
	      "name": "weight",
	      "is_relevant": true,
	      "min": 10,
	      "max": 30
	    }, {
	      "name": "race",
	      "is_relevant": true,
	      "value": "black"
	    }, {
	      "name": "smoking",
	      "is_relevant": true,
	      "value": false
	    }]
	  }]
	};
	var right7 = {
	  "condition": "OSA6",
	  "rights": [{
	    "name": "CPAP (continuous positive airway pressure)",
	    "description": "3 months of CPAP theapry. (meet cover it longer,depends on your doctor).you pay 20% of the medcial approved amount ofr rental of he machine and purchase of the related supplies (like mask and tubing). Medicare pays the supplier to rent the machine for 13 months if you've been using it without interruption. After you've rented the machine for 13 months, you own it",
	    "family_history": "",
	    "general_condition": "",
	    "filters": [{
	      "name": "age",
	      "is_relevant": true,
	      "min": 10,
	      "max": 30
	    }, {
	      "name": "weight",
	      "is_relevant": true,
	      "min": 10,
	      "max": 30
	    }, {
	      "name": "race",
	      "is_relevant": true,
	      "value": "black"
	    }, {
	      "name": "smoking",
	      "is_relevant": true,
	      "value": false
	    }]
	  }]
	};
	var right8 = {
	  "condition": "OSA7",
	  "rights": [{
	    "name": "CPAP (continuous positive airway pressure)",
	    "description": "3 months of CPAP theapry. (meet cover it longer,depends on your doctor).you pay 20% of the medcial approved amount ofr rental of he machine and purchase of the related supplies (like mask and tubing). Medicare pays the supplier to rent the machine for 13 months if you've been using it without interruption. After you've rented the machine for 13 months, you own it",
	    "family_history": "",
	    "general_condition": "",
	    "filters": [{
	      "name": "age",
	      "is_relevant": true,
	      "min": 10,
	      "max": 30
	    }, {
	      "name": "weight",
	      "is_relevant": true,
	      "min": 10,
	      "max": 30
	    }, {
	      "name": "race",
	      "is_relevant": true,
	      "value": "black"
	    }, {
	      "name": "smoking",
	      "is_relevant": true,
	      "value": false
	    }]
	  }]
	};
	var right9 = {
	  "condition": "OSA8",
	  "rights": [{
	    "name": "CPAP (continuous positive airway pressure)",
	    "description": "3 months of CPAP theapry. (meet cover it longer,depends on your doctor).you pay 20% of the medcial approved amount ofr rental of he machine and purchase of the related supplies (like mask and tubing). Medicare pays the supplier to rent the machine for 13 months if you've been using it without interruption. After you've rented the machine for 13 months, you own it",
	    "family_history": "",
	    "general_condition": "",
	    "filters": [{
	      "name": "age",
	      "is_relevant": true,
	      "min": 10,
	      "max": 30
	    }, {
	      "name": "weight",
	      "is_relevant": true,
	      "min": 10,
	      "max": 30
	    }, {
	      "name": "race",
	      "is_relevant": true,
	      "value": "black"
	    }, {
	      "name": "smoking",
	      "is_relevant": true,
	      "value": false
	    }]
	  }]
	};
	
	var medicalEntry = [];
	medicalEntry.push(right1, right2, right3, right4, right5, right6, right7, right8, right9);
	
	function getMedicalRights(req, res) {
	  _medicalEntry2.default.find({}).exec(function (err, medicalEntry) {
	    if (err) {
	      res.status(500).send(err);
	    }if (medicalEntry) {
	      res.json({ medicalEntry: medicalEntry });
	    } else {
	      res.json({ medicalEntry: [] });
	    }
	  });
	}
	
	function getMedicalRight(req, res) {
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
	
	function getMedicalRightsMock(req, res) {
	  res.json({ medicalEntry: medicalEntry });
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
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.populateDB = populateDB;
	
	var _medicalEntry = __webpack_require__(16);
	
	var _medicalEntry2 = _interopRequireDefault(_medicalEntry);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function populateDB(req, res) {
	  var csv = __webpack_require__(77);
	  var hashMap = __webpack_require__(78);
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
	
	    for (var key in data) {
	      if (!data[key]) {
	        delete data[key];
	      } else if (data.Age) {
	        var rangeStr = data.Age + "";
	        var range = rangeStr.split(";");
	        var age = {};
	        for (var index = 0; index < range.length; index++) {
	          console.log("str: " + rangeStr);
	          var sign = range[index].substring(0, 1);
	          if (sign === "<") {
	            age.max = range[index].substring(1);
	            data.Age = age;
	          }
	          if (sign === ">") {
	            age.min = range[index].substring(1);
	            data.Age = age;
	          }
	        }
	      }
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
/* 72 */
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
	
	var _post = __webpack_require__(73);
	
	var _post2 = _interopRequireDefault(_post);
	
	var _cuid = __webpack_require__(76);
	
	var _cuid2 = _interopRequireDefault(_cuid);
	
	var _limax = __webpack_require__(84);
	
	var _limax2 = _interopRequireDefault(_limax);
	
	var _sanitizeHtml = __webpack_require__(100);
	
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
	 * @param req
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
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mongoose = __webpack_require__(8);
	
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
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _express = __webpack_require__(4);
	
	var _express2 = _interopRequireDefault(_express);
	
	var _compression = __webpack_require__(39);
	
	var _compression2 = _interopRequireDefault(_compression);
	
	var _mongoose = __webpack_require__(8);
	
	var _mongoose2 = _interopRequireDefault(_mongoose);
	
	var _bodyParser = __webpack_require__(38);
	
	var _bodyParser2 = _interopRequireDefault(_bodyParser);
	
	var _path = __webpack_require__(40);
	
	var _path2 = _interopRequireDefault(_path);
	
	var _IntlWrapper = __webpack_require__(29);
	
	var _IntlWrapper2 = _interopRequireDefault(_IntlWrapper);
	
	var _webpack = __webpack_require__(18);
	
	var _webpack2 = _interopRequireDefault(_webpack);
	
	var _webpackConfig = __webpack_require__(37);
	
	var _webpackConfig2 = _interopRequireDefault(_webpackConfig);
	
	var _webpackDevMiddleware = __webpack_require__(42);
	
	var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);
	
	var _webpackHotMiddleware = __webpack_require__(43);
	
	var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);
	
	var _store = __webpack_require__(31);
	
	var _reactRedux = __webpack_require__(1);
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _server = __webpack_require__(41);
	
	var _reactRouter = __webpack_require__(3);
	
	var _reactHelmet = __webpack_require__(9);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _routes = __webpack_require__(30);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _fetchData = __webpack_require__(36);
	
	var _post = __webpack_require__(35);
	
	var _post2 = _interopRequireDefault(_post);
	
	var _medicalrights = __webpack_require__(33);
	
	var _medicalrights2 = _interopRequireDefault(_medicalrights);
	
	var _populateDB = __webpack_require__(34);
	
	var _populateDB2 = _interopRequireDefault(_populateDB);
	
	var _dummyData = __webpack_require__(32);
	
	var _dummyData2 = _interopRequireDefault(_dummyData);
	
	var _config = __webpack_require__(17);
	
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
	
	  return '\n    <!doctype html>\n    <html>\n      <head>\n        ' + head.base.toString() + '\n        ' + head.title.toString() + '\n        ' + head.meta.toString() + '\n        ' + head.link.toString() + '\n        ' + head.script.toString() + '\n\n        ' + (process.env.NODE_ENV === 'production' ? '<link rel=\'stylesheet\' href=\'' + assetsManifest['/app.css'] + '\' />' : '') + '\n        <link href=\'https://fonts.googleapis.com/css?family=Lato:400,300,700\' rel=\'stylesheet\' type=\'text/css\'/>\n        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" type=\'text/css\'>\n        <link rel="shortcut icon" href="http://res.cloudinary.com/hashnode/image/upload/v1455629445/static_imgs/mern/mern-favicon-circle-fill.png" type="image/png" />\n        <style>\n  /* local page styles */\n  html h1 {\n    font-size: 26px;\n    margin-left: 10px;\n  }\n  html h2 {\n    font-size: 22px;\n    margin-left: 10px;\n  }\n  html h3 {\n    font-size: 14px;\n    margin-left: 10px;\n  }\n  html h4 {\n    font-size: 16px;\n  }\n  .progtrckr {\n    text-align: center;\n    padding-bottom: 16px;\n    // border-bottom: solid 1px;\n  }\n  .progtrckr li {\n    margin-bottom: 10px;\n  }\n  .val-err-tooltip {\n    background-color: red;\n    padding: 3px 5px 3px 10px;\n    font-size: 14px;\n    color: #fff;\n  }\n  .step {\n    // background-color: #ccc;\n    border:1px solid #e5e5e5;\n    min-height: 437px;\n    padding: 10px;\n    max-width: 815px;\n  }\n  html .row, html .form-horizontal .form-group {\n    margin: 0;\n  }\n  .footer-buttons {\n    margin-top: 10px;\n    margin-bottom: 50px;\n  }\n  html .step3 label, html .step4 label {\n    font-size: 20px;\n    text-align: left;\n  }\n  html .form-horizontal .control-label {\n    text-align: left;\n  }\n  .review .txt {\n    font-size: 20px;\n    text-align: left;\n    margin: 0;\n    padding: 0;\n  }\n  html body .saving {\n    background-color: #5cb85c;\n    width: 90%;\n    padding: 5px;\n    font-size: 16px;\n  }\n  code {\n    position: relative;\n    left: 12px;\n    line-height: 25px;\n  }\n  .eg-jump-lnk {\n    margin-top: 50px;\n    font-style: italic;\n  }\n  .lib-version {\n    font-size: 12px;\n    background-color: rgba(255, 255, 0, 0.38);\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    padding: 5px;\n  }\n  html .content {\n    margin-left: 10px;\n  }\n  span.red {\n    color: #d9534f;\n  }\n  span.green {\n    color: #3c763d;\n  }\n  span.bold {\n    font-weight: bold;\n  }\n  html .hoc-alert {\n    margin-top: 20px;\n  }\n  html .form-block-holder {\n    margin-top: 20px !important;\n  }\n  ol.progtrckr {\n  margin: 0;\n  padding-bottom: 2.2rem;\n  list-style-type: none;\n}\nol.progtrckr li {\n  display: inline-block;\n  text-align: center;\n  line-height: 4.5rem;\n  padding: 0 0.7rem;\n  cursor: pointer;\n}\nol.progtrckr li span {\n  padding: 0 1.5rem;\n}\n@media (max-width: 650px) {\n  .progtrckr li span {\n    display: none;\n  }\n}\n.progtrckr em {\n  display: none;\n  font-weight: 700;\n  padding-left: 1rem;\n}\n@media (max-width: 650px) {\n  .progtrckr em {\n    display: inline;\n  }\n  border-bottom: solid 1px;\n}\n\n@media (max-width: 650px) {\n .step {\n    max-height=320px;\n    min-height=437px;\n    min-width=300px;\n  }\n}\n\n\n\n\n\n}\n\nol.progtrckr li.progtrckr-todo {\n  color: silver;\n  border-bottom: 4px solid silver;\n}\nol.progtrckr li.progtrckr-doing {\n  color: black;\n  border-bottom: 4px solid #33C3F0;\n}\nol.progtrckr li.progtrckr-done {\n  color: black;\n  border-bottom: 4px solid #33C3F0;\n}\nol.progtrckr li:after {\n  content: "\\00a0\\00a0";\n}\nol.progtrckr li:before {\n  position: relative;\n  bottom: -3.7rem;\n  float: left;\n  left: 50%;\n}\nol.progtrckr li.progtrckr-todo:before {\n  content: "\\039F";\n  color: silver;\n  background-color: white;\n  width: 1.2em;\n  line-height: 1.4em;\n}\nol.progtrckr li.progtrckr-todo:hover:before {\n  color: #0FA0CE;\n}\n\nol.progtrckr li.progtrckr-doing:before {\n  content: "\\2022";\n  color: white;\n  background-color: #33C3F0;\n  width: 1.2em;\n  line-height: 1.2em;\n  border-radius: 1.2em;\n}\nol.progtrckr li.progtrckr-doing:hover:before {\n  color: #0FA0CE;\n}\n\nol.progtrckr li.progtrckr-done:before {\n  content: "\\2713";\n  color: white;\n  background-color: #33C3F0;\n  width: 1.2em;\n  line-height: 1.2em;\n  border-radius: 1.2em;\n}\nol.progtrckr li.progtrckr-done:hover:before {\n  color: #0FA0CE;\n}\n\n  </style>\n      </head>\n      <body>\n        <div id="root">' + html + '</div>\n        <script>\n          window.__INITIAL_STATE__ = ' + JSON.stringify(initialState) + ';\n          ' + (process.env.NODE_ENV === 'production' ? '//<![CDATA[\n          window.webpackManifest = ' + JSON.stringify(chunkManifest) + ';\n          //]]>' : '') + '\n        </script>\n        <script src=\'' + (process.env.NODE_ENV === 'production' ? assetsManifest['/vendor.js'] : '/vendor.js') + '\'></script>\n        <script src=\'' + (process.env.NODE_ENV === 'production' ? assetsManifest['/app.js'] : '/app.js') + '\'></script>\n      </body>\n    </html>\n  ';
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
/* 75 */
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
/* 76 */
/***/ function(module, exports) {

	module.exports = require("cuid");

/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = require("fast-csv");

/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = require("hashmap");

/***/ },
/* 79 */
/***/ function(module, exports) {

	module.exports = require("intl");

/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports = require("intl-locales-supported");

/***/ },
/* 81 */
/***/ function(module, exports) {

	module.exports = require("intl/locale-data/jsonp/en");

/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = require("intl/locale-data/jsonp/fr");

/***/ },
/* 83 */
/***/ function(module, exports) {

	module.exports = require("isomorphic-fetch");

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = require("limax");

/***/ },
/* 85 */
/***/ function(module, exports) {

	module.exports = require("material-ui/Card");

/***/ },
/* 86 */
/***/ function(module, exports) {

	module.exports = require("material-ui/DatePicker");

/***/ },
/* 87 */
/***/ function(module, exports) {

	module.exports = require("material-ui/FontIcon");

/***/ },
/* 88 */
/***/ function(module, exports) {

	module.exports = require("material-ui/Toggle");

/***/ },
/* 89 */
/***/ function(module, exports) {

	module.exports = require("mobile-detect");

/***/ },
/* 90 */
/***/ function(module, exports) {

	module.exports = require("postcss-cssnext");

/***/ },
/* 91 */
/***/ function(module, exports) {

	module.exports = require("postcss-focus");

/***/ },
/* 92 */
/***/ function(module, exports) {

	module.exports = require("postcss-reporter");

/***/ },
/* 93 */
/***/ function(module, exports) {

	module.exports = require("react-intl/locale-data/en");

/***/ },
/* 94 */
/***/ function(module, exports) {

	module.exports = require("react-intl/locale-data/fr");

/***/ },
/* 95 */
/***/ function(module, exports) {

	module.exports = require("react-search-input");

/***/ },
/* 96 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools");

/***/ },
/* 97 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools-dock-monitor");

/***/ },
/* 98 */
/***/ function(module, exports) {

	module.exports = require("redux-devtools-log-monitor");

/***/ },
/* 99 */
/***/ function(module, exports) {

	module.exports = require("redux-thunk");

/***/ },
/* 100 */
/***/ function(module, exports) {

	module.exports = require("sanitize-html");

/***/ },
/* 101 */
/***/ function(module, exports) {

	module.exports = require("universal-cookie");

/***/ },
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */
/***/ function(module, exports) {

	module.exports = require("material-ui/Stepper");

/***/ },
/* 110 */
/***/ function(module, exports) {

	module.exports = require("material-ui/internal/ExpandTransition");

/***/ },
/* 111 */
/***/ function(module, exports) {

	module.exports = require("landricks-components");

/***/ },
/* 112 */
/***/ function(module, exports) {

	module.exports = require("react-scroll");

/***/ },
/* 113 */
/***/ function(module, exports) {

	module.exports = require("react-stars");

/***/ },
/* 114 */
/***/ function(module, exports) {

	module.exports = require("window-or-global");

/***/ }
/******/ ]);