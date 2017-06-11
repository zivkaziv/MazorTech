webpackJsonp([2],{

/***/ 747:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	// Import Images
	
	
	// Material
	
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(93);
	
	var _reactRedux = __webpack_require__(65);
	
	var _landricksComponents = __webpack_require__(765);
	
	var _background_city = __webpack_require__(932);
	
	var _background_city2 = _interopRequireDefault(_background_city);
	
	var _RaisedButton = __webpack_require__(772);
	
	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
	
	var _getMuiTheme = __webpack_require__(154);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	var _lightBaseTheme = __webpack_require__(153);
	
	var _lightBaseTheme2 = _interopRequireDefault(_lightBaseTheme);
	
	var _IconSvg = __webpack_require__(271);
	
	var _IconSvg2 = _interopRequireDefault(_IconSvg);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Components
	// import PostList from '../../components/PostList';
	
	// Import Actions
	// import { toggleAddPost } from '../../../App/AppActions';
	
	// Import Selectors
	// import { getShowAddPost } from '../../../App/AppReducer';
	// import { getPosts } from '../../PostReducer';
	
	var BASE_THEME = {
	  fontFamily: 'Lato',
	  baseFontSize: '18px'
	};
	
	var HEADER_BAND_THEME = _extends({}, BASE_THEME, {
	  baseFontSize: '18px',
	  backgroundColor: '#71A2B6',
	  textColor: '#FFFFFF',
	  primaryColor: '#FFFFFF',
	  primaryContrastColor: '#71A2B6',
	  objectDesign: 'square-solid',
	  backgroundImage: '' + _background_city2.default
	});
	
	var HEAVY_BAND_THEME = _extends({}, BASE_THEME, {
	  backgroundColor: '#29D9C2',
	  textColor: '#FFFFFF',
	  primaryColor: '#FFFFFF',
	  primaryContrastColor: '#000000',
	  secondaryColor: '#C99DA3',
	  objectDesign: 'square-outline'
	});
	
	var styles = {
	  homePageContainer: {
	    background: 'url("http://wallpapercave.com/wp/2N8Zebr.jpg") no-repeat fixed center',
	    position: 'fixed',
	    top: 0,
	    left: 0,
	    right: 0,
	    bottom: 0
	  },
	  logo: {
	    position: 'fixed',
	    top: '10px',
	    left: '15px',
	    color: 'white'
	  },
	  homePageTextContainer: {
	    position: 'relative',
	    top: '26%',
	    textAlign: 'center',
	    color: 'white'
	  },
	  homePageTextTitle: {
	    fontSize: '30px',
	    fontWeight: "bold",
	    marginBottom: "10px"
	  },
	  homePageTextSubTitle: {
	    fontSize: '18px',
	    marginBottom: "15px"
	  },
	  button: {
	    textAlign: 'center',
	    display: 'inline-flex',
	    fontSize: "24px"
	    // fontWeight:"bold"
	  }
	
	};
	
	var LIGHT_BAND_THEME = _extends({}, BASE_THEME, {
	  backgroundColor: '#FAFAFA',
	  textColor: '#888888',
	  primaryColor: '#996888',
	  secondaryColor: '#C99DA3'
	});
	
	var LandingPage = function (_Component) {
	  _inherits(LandingPage, _Component);
	
	  function LandingPage() {
	    _classCallCheck(this, LandingPage);
	
	    return _possibleConstructorReturn(this, (LandingPage.__proto__ || Object.getPrototypeOf(LandingPage)).apply(this, arguments));
	  }
	
	  _createClass(LandingPage, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        muiTheme: (0, _getMuiTheme2.default)(_lightBaseTheme2.default)
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _landricksComponents.LandingCanvas,
	          null,
	          _react2.default.createElement(_landricksComponents.StrongMessageBrick, {
	            theme: HEADER_BAND_THEME,
	            messageLevel1: 'A beautiful message, but not so long',
	            messageLevel2: 'A related but not so important concept, that usually is a little bit longer than the previous',
	            CTAs: _react2.default.createElement(_landricksComponents.CallToAction, { label: 'sign up' }),
	            styles: styles.homePageContainer
	          }),
	          _react2.default.createElement(
	            _landricksComponents.DoubleContentBrick,
	            { theme: HEAVY_BAND_THEME, hasHeader: false },
	            _react2.default.createElement(
	              _landricksComponents.ThemePropagator,
	              null,
	              _react2.default.createElement(
	                'h1',
	                null,
	                'Our product highlight'
	              ),
	              _react2.default.createElement(
	                'p',
	                null,
	                'you wont find a better product anywhere in the universe.'
	              ),
	              _react2.default.createElement(_landricksComponents.CallToAction, { label: 'buy' }),
	              _react2.default.createElement(_landricksComponents.CallToAction, { label: 'learn more' })
	            ),
	            _react2.default.createElement(_landricksComponents.PlaceHolder, null)
	          ),
	          _react2.default.createElement(
	            _landricksComponents.GenericBrick,
	            {
	              theme: LIGHT_BAND_THEME,
	              title: 'Yes, we can!',
	              subtitle: 'if you think you can do it',
	              contentStyle: { textAlign: 'center' } },
	            _react2.default.createElement(_landricksComponents.PlaceHolder, null)
	          ),
	          _react2.default.createElement(
	            _landricksComponents.EnumerationBrick,
	            {
	              theme: HEAVY_BAND_THEME,
	              title: 'Awesome features',
	              subtitle: 'You can add any number of them' },
	            _react2.default.createElement(_landricksComponents.FeatureItem, {
	              icon: 'rocket',
	              title: 'Feature 1'
	              // description="bla bla bla bla bla"
	            }),
	            _react2.default.createElement(_landricksComponents.FeatureItem, {
	              icon: 'rocket',
	              title: 'Feature 2'
	              // description="bla bla bla bla bla"
	            }),
	            _react2.default.createElement(_landricksComponents.FeatureItem, {
	              icon: 'rocket',
	              title: 'Feature 3'
	              // description="bla bla bla bla bla"
	            })
	          ),
	          _react2.default.createElement(
	            _landricksComponents.DoubleContentBrick,
	            { theme: LIGHT_BAND_THEME, hasHeader: false },
	            _react2.default.createElement(_landricksComponents.PlaceHolder, { useLoremIpsum: true }),
	            _react2.default.createElement(_landricksComponents.PlaceHolder, { label: 'image placeholder' })
	          ),
	          _react2.default.createElement(
	            _landricksComponents.DoubleContentBrick,
	            { theme: LIGHT_BAND_THEME, hasHeader: false },
	            _react2.default.createElement(_landricksComponents.PlaceHolder, { label: 'image placeholder' }),
	            _react2.default.createElement(_landricksComponents.PlaceHolder, { useLoremIpsum: true })
	          ),
	          _react2.default.createElement(
	            _landricksComponents.DoubleContentBrick,
	            { theme: LIGHT_BAND_THEME, hasHeader: false },
	            _react2.default.createElement(_landricksComponents.PlaceHolder, { useLoremIpsum: true }),
	            _react2.default.createElement(_landricksComponents.PlaceHolder, { label: 'image placeholder' })
	          ),
	          _react2.default.createElement(_landricksComponents.EmailSqueezeBrick, {
	            title: 'Join our Newsletter'
	            // subtitle="To get updates about what we want you to know about"
	            , theme: HEAVY_BAND_THEME,
	            buttonLabel: 'Join',
	            placeholder: 'Enter your email'
	          })
	        )
	      );
	    }
	  }]);
	
	  return LandingPage;
	}(_react.Component);
	
	// Actions required to provide data for this component to render in sever side.
	// PostListPage.need = [() => { return fetchPosts(); }];
	
	// Retrieve data from store as props
	
	
	function mapStateToProps(state) {
	  return {
	    // showAddPost: getShowAddPost(state),
	    // posts: getPosts(state),
	  };
	}
	
	LandingPage.propTypes = {
	  // posts: PropTypes.arrayOf(PropTypes.shape({
	  //   name: PropTypes.string.isRequired,
	  //   title: PropTypes.string.isRequired,
	  //   content: PropTypes.string.isRequired,
	  // })).isRequired,
	  // showAddPost: PropTypes.bool.isRequired,
	  // dispatch: PropTypes.func.isRequired,
	};
	LandingPage.childContextTypes = {
	  muiTheme: _react2.default.PropTypes.object
	};
	
	LandingPage.contextTypes = {
	  router: _react2.default.PropTypes.object
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(LandingPage);

/***/ },

/***/ 750:
/***/ function(module, exports) {

	module.exports = function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	  return target;
	};


/***/ },

/***/ 751:
/***/ function(module, exports) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	
	  easeOutFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
	  easeInOutFunction: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
	
	  easeOut: function easeOut(duration, property, delay, easeFunction) {
	    easeFunction = easeFunction || this.easeOutFunction;
	
	    if (property && Object.prototype.toString.call(property) === '[object Array]') {
	      var transitions = '';
	      for (var i = 0; i < property.length; i++) {
	        if (transitions) transitions += ',';
	        transitions += this.create(duration, property[i], delay, easeFunction);
	      }
	
	      return transitions;
	    } else {
	      return this.create(duration, property, delay, easeFunction);
	    }
	  },
	  create: function create(duration, property, delay, easeFunction) {
	    duration = duration || '450ms';
	    property = property || 'all';
	    delay = delay || '0ms';
	    easeFunction = easeFunction || 'linear';
	
	    return property + ' ' + duration + ' ' + easeFunction + ' ' + delay;
	  }
	};

/***/ },

/***/ 752:
/***/ function(module, exports) {

	"use strict";
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  set: function set(style, key, value) {
	    style[key] = value;
	  }
	};

/***/ },

/***/ 753:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	exports.__esModule = true;
	
	var _shallowEqual = __webpack_require__(92);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _shallowEqual2.default;

/***/ },

/***/ 754:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Paper = __webpack_require__(770);
	
	var _Paper2 = _interopRequireDefault(_Paper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Paper2.default;

/***/ },

/***/ 755:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var horizontal = _propTypes2.default.oneOf(['left', 'middle', 'right']);
	var vertical = _propTypes2.default.oneOf(['top', 'center', 'bottom']);
	
	exports.default = {
	
	  corners: _propTypes2.default.oneOf(['bottom-left', 'bottom-right', 'top-left', 'top-right']),
	
	  horizontal: horizontal,
	
	  vertical: vertical,
	
	  origin: _propTypes2.default.shape({
	    horizontal: horizontal,
	    vertical: vertical
	  }),
	
	  cornersAndCenter: _propTypes2.default.oneOf(['bottom-center', 'bottom-left', 'bottom-right', 'top-center', 'top-left', 'top-right']),
	
	  stringOrNumber: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
	
	  zDepth: _propTypes2.default.oneOf([0, 1, 2, 3, 4, 5])
	
	};

/***/ },

/***/ 756:
/***/ function(module, exports) {

	// Source: http://jsfiddle.net/vWx8V/
	// http://stackoverflow.com/questions/5603195/full-list-of-javascript-keycodes
	
	/**
	 * Conenience method returns corresponding value for given keyName or keyCode.
	 *
	 * @param {Mixed} keyCode {Number} or keyName {String}
	 * @return {Mixed}
	 * @api public
	 */
	
	exports = module.exports = function(searchInput) {
	  // Keyboard Events
	  if (searchInput && 'object' === typeof searchInput) {
	    var hasKeyCode = searchInput.which || searchInput.keyCode || searchInput.charCode
	    if (hasKeyCode) searchInput = hasKeyCode
	  }
	
	  // Numbers
	  if ('number' === typeof searchInput) return names[searchInput]
	
	  // Everything else (cast to string)
	  var search = String(searchInput)
	
	  // check codes
	  var foundNamedKey = codes[search.toLowerCase()]
	  if (foundNamedKey) return foundNamedKey
	
	  // check aliases
	  var foundNamedKey = aliases[search.toLowerCase()]
	  if (foundNamedKey) return foundNamedKey
	
	  // weird character?
	  if (search.length === 1) return search.charCodeAt(0)
	
	  return undefined
	}
	
	/**
	 * Get by name
	 *
	 *   exports.code['enter'] // => 13
	 */
	
	var codes = exports.code = exports.codes = {
	  'backspace': 8,
	  'tab': 9,
	  'enter': 13,
	  'shift': 16,
	  'ctrl': 17,
	  'alt': 18,
	  'pause/break': 19,
	  'caps lock': 20,
	  'esc': 27,
	  'space': 32,
	  'page up': 33,
	  'page down': 34,
	  'end': 35,
	  'home': 36,
	  'left': 37,
	  'up': 38,
	  'right': 39,
	  'down': 40,
	  'insert': 45,
	  'delete': 46,
	  'command': 91,
	  'left command': 91,
	  'right command': 93,
	  'numpad *': 106,
	  'numpad +': 107,
	  'numpad -': 109,
	  'numpad .': 110,
	  'numpad /': 111,
	  'num lock': 144,
	  'scroll lock': 145,
	  'my computer': 182,
	  'my calculator': 183,
	  ';': 186,
	  '=': 187,
	  ',': 188,
	  '-': 189,
	  '.': 190,
	  '/': 191,
	  '`': 192,
	  '[': 219,
	  '\\': 220,
	  ']': 221,
	  "'": 222
	}
	
	// Helper aliases
	
	var aliases = exports.aliases = {
	  'windows': 91,
	  '⇧': 16,
	  '⌥': 18,
	  '⌃': 17,
	  '⌘': 91,
	  'ctl': 17,
	  'control': 17,
	  'option': 18,
	  'pause': 19,
	  'break': 19,
	  'caps': 20,
	  'return': 13,
	  'escape': 27,
	  'spc': 32,
	  'pgup': 33,
	  'pgdn': 34,
	  'ins': 45,
	  'del': 46,
	  'cmd': 91
	}
	
	
	/*!
	 * Programatically add the following
	 */
	
	// lower case chars
	for (i = 97; i < 123; i++) codes[String.fromCharCode(i)] = i - 32
	
	// numbers
	for (var i = 48; i < 58; i++) codes[i - 48] = i
	
	// function keys
	for (i = 1; i < 13; i++) codes['f'+i] = i + 111
	
	// numpad keys
	for (i = 0; i < 10; i++) codes['numpad '+i] = i + 96
	
	/**
	 * Get by code
	 *
	 *   exports.name[13] // => 'Enter'
	 */
	
	var names = exports.names = exports.title = {} // title for backward compat
	
	// Create reverse mapping
	for (i in codes) names[codes[i]] = i
	
	// Add aliases
	for (var alias in aliases) {
	  codes[alias] = aliases[alias]
	}


/***/ },

/***/ 757:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createChildFragment = createChildFragment;
	exports.extendChildren = extendChildren;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ReactFragment = __webpack_require__(773);
	
	var _ReactFragment2 = _interopRequireDefault(_ReactFragment);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function createChildFragment(fragments) {
	  var newFragments = {};
	  var validChildrenCount = 0;
	  var firstKey = void 0;
	
	  // Only create non-empty key fragments
	  for (var key in fragments) {
	    var currentChild = fragments[key];
	
	    if (currentChild) {
	      if (validChildrenCount === 0) firstKey = key;
	      newFragments[key] = currentChild;
	      validChildrenCount++;
	    }
	  }
	
	  if (validChildrenCount === 0) return undefined;
	  if (validChildrenCount === 1) return newFragments[firstKey];
	  return (0, _ReactFragment2.default)(newFragments);
	}
	
	function extendChildren(children, extendedProps, extendedChildren) {
	  return _react2.default.Children.map(children, function (child) {
	    if (!_react2.default.isValidElement(child)) {
	      return child;
	    }
	
	    var newProps = typeof extendedProps === 'function' ? extendedProps(child) : extendedProps;
	
	    var newChildren = typeof extendedChildren === 'function' ? extendedChildren(child) : extendedChildren ? extendedChildren : child.props.children;
	
	    return _react2.default.cloneElement(child, newProps, newChildren);
	  });
	}

/***/ },

/***/ 758:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _chainFunction = __webpack_require__(769);
	
	var _chainFunction2 = _interopRequireDefault(_chainFunction);
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _warning = __webpack_require__(66);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _ChildMapping = __webpack_require__(777);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  component: _propTypes2.default.any,
	  childFactory: _propTypes2.default.func,
	  children: _propTypes2.default.node
	};
	
	var defaultProps = {
	  component: 'span',
	  childFactory: function childFactory(child) {
	    return child;
	  }
	};
	
	var TransitionGroup = function (_React$Component) {
	  _inherits(TransitionGroup, _React$Component);
	
	  function TransitionGroup(props, context) {
	    _classCallCheck(this, TransitionGroup);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));
	
	    _this.performAppear = function (key) {
	      _this.currentlyTransitioningKeys[key] = true;
	
	      var component = _this.childRefs[key];
	
	      if (component.componentWillAppear) {
	        component.componentWillAppear(_this._handleDoneAppearing.bind(_this, key));
	      } else {
	        _this._handleDoneAppearing(key);
	      }
	    };
	
	    _this._handleDoneAppearing = function (key) {
	      var component = _this.childRefs[key];
	      if (component && component.componentDidAppear) {
	        component.componentDidAppear();
	      }
	
	      delete _this.currentlyTransitioningKeys[key];
	
	      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);
	
	      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
	        // This was removed before it had fully appeared. Remove it.
	        _this.performLeave(key);
	      }
	    };
	
	    _this.performEnter = function (key) {
	      _this.currentlyTransitioningKeys[key] = true;
	
	      var component = _this.childRefs[key];
	
	      if (component.componentWillEnter) {
	        component.componentWillEnter(_this._handleDoneEntering.bind(_this, key));
	      } else {
	        _this._handleDoneEntering(key);
	      }
	    };
	
	    _this._handleDoneEntering = function (key) {
	      var component = _this.childRefs[key];
	      if (component && component.componentDidEnter) {
	        component.componentDidEnter();
	      }
	
	      delete _this.currentlyTransitioningKeys[key];
	
	      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);
	
	      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
	        // This was removed before it had fully entered. Remove it.
	        _this.performLeave(key);
	      }
	    };
	
	    _this.performLeave = function (key) {
	      _this.currentlyTransitioningKeys[key] = true;
	
	      var component = _this.childRefs[key];
	      if (component.componentWillLeave) {
	        component.componentWillLeave(_this._handleDoneLeaving.bind(_this, key));
	      } else {
	        // Note that this is somewhat dangerous b/c it calls setState()
	        // again, effectively mutating the component before all the work
	        // is done.
	        _this._handleDoneLeaving(key);
	      }
	    };
	
	    _this._handleDoneLeaving = function (key) {
	      var component = _this.childRefs[key];
	
	      if (component && component.componentDidLeave) {
	        component.componentDidLeave();
	      }
	
	      delete _this.currentlyTransitioningKeys[key];
	
	      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);
	
	      if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
	        // This entered again before it fully left. Add it again.
	        _this.performEnter(key);
	      } else {
	        _this.setState(function (state) {
	          var newChildren = _extends({}, state.children);
	          delete newChildren[key];
	          return { children: newChildren };
	        });
	      }
	    };
	
	    _this.childRefs = Object.create(null);
	
	    _this.state = {
	      children: (0, _ChildMapping.getChildMapping)(props.children)
	    };
	    return _this;
	  }
	
	  TransitionGroup.prototype.componentWillMount = function componentWillMount() {
	    this.currentlyTransitioningKeys = {};
	    this.keysToEnter = [];
	    this.keysToLeave = [];
	  };
	
	  TransitionGroup.prototype.componentDidMount = function componentDidMount() {
	    var initialChildMapping = this.state.children;
	    for (var key in initialChildMapping) {
	      if (initialChildMapping[key]) {
	        this.performAppear(key);
	      }
	    }
	  };
	
	  TransitionGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    var nextChildMapping = (0, _ChildMapping.getChildMapping)(nextProps.children);
	    var prevChildMapping = this.state.children;
	
	    this.setState({
	      children: (0, _ChildMapping.mergeChildMappings)(prevChildMapping, nextChildMapping)
	    });
	
	    for (var key in nextChildMapping) {
	      var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
	      if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
	        this.keysToEnter.push(key);
	      }
	    }
	
	    for (var _key in prevChildMapping) {
	      var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(_key);
	      if (prevChildMapping[_key] && !hasNext && !this.currentlyTransitioningKeys[_key]) {
	        this.keysToLeave.push(_key);
	      }
	    }
	
	    // If we want to someday check for reordering, we could do it here.
	  };
	
	  TransitionGroup.prototype.componentDidUpdate = function componentDidUpdate() {
	    var keysToEnter = this.keysToEnter;
	    this.keysToEnter = [];
	    keysToEnter.forEach(this.performEnter);
	
	    var keysToLeave = this.keysToLeave;
	    this.keysToLeave = [];
	    keysToLeave.forEach(this.performLeave);
	  };
	
	  TransitionGroup.prototype.render = function render() {
	    var _this2 = this;
	
	    // TODO: we could get rid of the need for the wrapper node
	    // by cloning a single child
	    var childrenToRender = [];
	
	    var _loop = function _loop(key) {
	      var child = _this2.state.children[key];
	      if (child) {
	        var isCallbackRef = typeof child.ref !== 'string';
	        var factoryChild = _this2.props.childFactory(child);
	        var ref = function ref(r) {
	          _this2.childRefs[key] = r;
	        };
	
	         false ? (0, _warning2.default)(isCallbackRef, 'string refs are not supported on children of TransitionGroup and will be ignored. ' + 'Please use a callback ref instead: https://facebook.github.io/react/docs/refs-and-the-dom.html#the-ref-callback-attribute') : void 0;
	
	        // Always chaining the refs leads to problems when the childFactory
	        // wraps the child. The child ref callback gets called twice with the
	        // wrapper and the child. So we only need to chain the ref if the
	        // factoryChild is not different from child.
	        if (factoryChild === child && isCallbackRef) {
	          ref = (0, _chainFunction2.default)(child.ref, ref);
	        }
	
	        // You may need to apply reactive updates to a child as it is leaving.
	        // The normal React way to do it won't work since the child will have
	        // already been removed. In case you need this behavior you can provide
	        // a childFactory function to wrap every child, even the ones that are
	        // leaving.
	        childrenToRender.push(_react2.default.cloneElement(factoryChild, {
	          key: key,
	          ref: ref
	        }));
	      }
	    };
	
	    for (var key in this.state.children) {
	      _loop(key);
	    }
	
	    // Do not forward TransitionGroup props to primitive DOM nodes
	    var props = _extends({}, this.props);
	    delete props.transitionLeave;
	    delete props.transitionName;
	    delete props.transitionAppear;
	    delete props.transitionEnter;
	    delete props.childFactory;
	    delete props.transitionLeaveTimeout;
	    delete props.transitionEnterTimeout;
	    delete props.transitionAppearTimeout;
	    delete props.component;
	
	    return _react2.default.createElement(this.props.component, props, childrenToRender);
	  };
	
	  return TransitionGroup;
	}(_react2.default.Component);
	
	TransitionGroup.displayName = 'TransitionGroup';
	
	
	TransitionGroup.propTypes = propTypes;
	TransitionGroup.defaultProps = defaultProps;
	
	exports.default = TransitionGroup;
	module.exports = exports['default'];

/***/ },

/***/ 759:
/***/ function(module, exports) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.safeThemeFromProps = safeThemeFromProps;
	var DEFAULT_THEME = exports.DEFAULT_THEME = {
	  fontFamily: 'Lato',
	  baseFontSize: '20px',
	  backgroundColor: '#4051B5',
	  primaryColor: '#E91C63',
	  textColor: '#FFFFFF'
	};
	
	function safeThemeFromProps(props) {
	  return props.theme || DEFAULT_THEME;
	}

/***/ },

/***/ 761:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(15);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(54);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(266);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(53);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(265);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(64);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(63);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(750);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _childUtils = __webpack_require__(757);
	
	var _events = __webpack_require__(763);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _keycode = __webpack_require__(756);
	
	var _keycode2 = _interopRequireDefault(_keycode);
	
	var _FocusRipple = __webpack_require__(766);
	
	var _FocusRipple2 = _interopRequireDefault(_FocusRipple);
	
	var _TouchRipple = __webpack_require__(767);
	
	var _TouchRipple2 = _interopRequireDefault(_TouchRipple);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var styleInjected = false;
	var listening = false;
	var tabPressed = false;
	
	function injectStyle() {
	  if (!styleInjected) {
	    // Remove inner padding and border in Firefox 4+.
	    var style = document.createElement('style');
	    style.innerHTML = '\n      button::-moz-focus-inner,\n      input::-moz-focus-inner {\n        border: 0;\n        padding: 0;\n      }\n    ';
	
	    document.body.appendChild(style);
	    styleInjected = true;
	  }
	}
	
	function listenForTabPresses() {
	  if (!listening) {
	    _events2.default.on(window, 'keydown', function (event) {
	      tabPressed = (0, _keycode2.default)(event) === 'tab';
	    });
	    listening = true;
	  }
	}
	
	var EnhancedButton = function (_Component) {
	  (0, _inherits3.default)(EnhancedButton, _Component);
	
	  function EnhancedButton() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, EnhancedButton);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = EnhancedButton.__proto__ || (0, _getPrototypeOf2.default)(EnhancedButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      isKeyboardFocused: false
	    }, _this.handleKeyDown = function (event) {
	      if (!_this.props.disabled && !_this.props.disableKeyboardFocus) {
	        if ((0, _keycode2.default)(event) === 'enter' && _this.state.isKeyboardFocused) {
	          _this.handleTouchTap(event);
	        }
	        if ((0, _keycode2.default)(event) === 'esc' && _this.state.isKeyboardFocused) {
	          _this.removeKeyboardFocus(event);
	        }
	      }
	      _this.props.onKeyDown(event);
	    }, _this.handleKeyUp = function (event) {
	      if (!_this.props.disabled && !_this.props.disableKeyboardFocus) {
	        if ((0, _keycode2.default)(event) === 'space' && _this.state.isKeyboardFocused) {
	          _this.handleTouchTap(event);
	        }
	      }
	      _this.props.onKeyUp(event);
	    }, _this.handleBlur = function (event) {
	      _this.cancelFocusTimeout();
	      _this.removeKeyboardFocus(event);
	      _this.props.onBlur(event);
	    }, _this.handleFocus = function (event) {
	      if (event) event.persist();
	      if (!_this.props.disabled && !_this.props.disableKeyboardFocus) {
	        // setTimeout is needed because the focus event fires first
	        // Wait so that we can capture if this was a keyboard focus
	        // or touch focus
	        _this.focusTimeout = setTimeout(function () {
	          if (tabPressed) {
	            _this.setKeyboardFocus(event);
	            tabPressed = false;
	          }
	        }, 150);
	
	        _this.props.onFocus(event);
	      }
	    }, _this.handleClick = function (event) {
	      if (!_this.props.disabled) {
	        tabPressed = false;
	        _this.props.onClick(event);
	      }
	    }, _this.handleTouchTap = function (event) {
	      _this.cancelFocusTimeout();
	      if (!_this.props.disabled) {
	        tabPressed = false;
	        _this.removeKeyboardFocus(event);
	        _this.props.onTouchTap(event);
	      }
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(EnhancedButton, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _props = this.props,
	          disabled = _props.disabled,
	          disableKeyboardFocus = _props.disableKeyboardFocus,
	          keyboardFocused = _props.keyboardFocused;
	
	      if (!disabled && keyboardFocused && !disableKeyboardFocus) {
	        this.setState({ isKeyboardFocused: true });
	      }
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      injectStyle();
	      listenForTabPresses();
	      if (this.state.isKeyboardFocused) {
	        this.button.focus();
	        this.props.onKeyboardFocus(null, true);
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if ((nextProps.disabled || nextProps.disableKeyboardFocus) && this.state.isKeyboardFocused) {
	        this.setState({ isKeyboardFocused: false });
	        if (nextProps.onKeyboardFocus) {
	          nextProps.onKeyboardFocus(null, false);
	        }
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this.focusTimeout) {
	        clearTimeout(this.focusTimeout);
	      }
	    }
	  }, {
	    key: 'isKeyboardFocused',
	    value: function isKeyboardFocused() {
	      return this.state.isKeyboardFocused;
	    }
	  }, {
	    key: 'removeKeyboardFocus',
	    value: function removeKeyboardFocus(event) {
	      if (this.state.isKeyboardFocused) {
	        this.setState({ isKeyboardFocused: false });
	        this.props.onKeyboardFocus(event, false);
	      }
	    }
	  }, {
	    key: 'setKeyboardFocus',
	    value: function setKeyboardFocus(event) {
	      if (!this.state.isKeyboardFocused) {
	        this.setState({ isKeyboardFocused: true });
	        this.props.onKeyboardFocus(event, true);
	      }
	    }
	  }, {
	    key: 'cancelFocusTimeout',
	    value: function cancelFocusTimeout() {
	      if (this.focusTimeout) {
	        clearTimeout(this.focusTimeout);
	        this.focusTimeout = null;
	      }
	    }
	  }, {
	    key: 'createButtonChildren',
	    value: function createButtonChildren() {
	      var _props2 = this.props,
	          centerRipple = _props2.centerRipple,
	          children = _props2.children,
	          disabled = _props2.disabled,
	          disableFocusRipple = _props2.disableFocusRipple,
	          disableKeyboardFocus = _props2.disableKeyboardFocus,
	          disableTouchRipple = _props2.disableTouchRipple,
	          focusRippleColor = _props2.focusRippleColor,
	          focusRippleOpacity = _props2.focusRippleOpacity,
	          touchRippleColor = _props2.touchRippleColor,
	          touchRippleOpacity = _props2.touchRippleOpacity;
	      var isKeyboardFocused = this.state.isKeyboardFocused;
	
	      // Focus Ripple
	
	      var focusRipple = isKeyboardFocused && !disabled && !disableFocusRipple && !disableKeyboardFocus ? _react2.default.createElement(_FocusRipple2.default, {
	        color: focusRippleColor,
	        opacity: focusRippleOpacity,
	        show: isKeyboardFocused
	      }) : undefined;
	
	      // Touch Ripple
	      var touchRipple = !disabled && !disableTouchRipple ? _react2.default.createElement(
	        _TouchRipple2.default,
	        {
	          centerRipple: centerRipple,
	          color: touchRippleColor,
	          opacity: touchRippleOpacity
	        },
	        children
	      ) : undefined;
	
	      return (0, _childUtils.createChildFragment)({
	        focusRipple: focusRipple,
	        touchRipple: touchRipple,
	        children: touchRipple ? undefined : children
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props3 = this.props,
	          centerRipple = _props3.centerRipple,
	          children = _props3.children,
	          containerElement = _props3.containerElement,
	          disabled = _props3.disabled,
	          disableFocusRipple = _props3.disableFocusRipple,
	          disableKeyboardFocus = _props3.disableKeyboardFocus,
	          disableTouchRipple = _props3.disableTouchRipple,
	          focusRippleColor = _props3.focusRippleColor,
	          focusRippleOpacity = _props3.focusRippleOpacity,
	          href = _props3.href,
	          keyboardFocused = _props3.keyboardFocused,
	          touchRippleColor = _props3.touchRippleColor,
	          touchRippleOpacity = _props3.touchRippleOpacity,
	          onBlur = _props3.onBlur,
	          onClick = _props3.onClick,
	          onFocus = _props3.onFocus,
	          onKeyUp = _props3.onKeyUp,
	          onKeyDown = _props3.onKeyDown,
	          onKeyboardFocus = _props3.onKeyboardFocus,
	          onTouchTap = _props3.onTouchTap,
	          style = _props3.style,
	          tabIndex = _props3.tabIndex,
	          type = _props3.type,
	          other = (0, _objectWithoutProperties3.default)(_props3, ['centerRipple', 'children', 'containerElement', 'disabled', 'disableFocusRipple', 'disableKeyboardFocus', 'disableTouchRipple', 'focusRippleColor', 'focusRippleOpacity', 'href', 'keyboardFocused', 'touchRippleColor', 'touchRippleOpacity', 'onBlur', 'onClick', 'onFocus', 'onKeyUp', 'onKeyDown', 'onKeyboardFocus', 'onTouchTap', 'style', 'tabIndex', 'type']);
	      var _context$muiTheme = this.context.muiTheme,
	          prepareStyles = _context$muiTheme.prepareStyles,
	          enhancedButton = _context$muiTheme.enhancedButton;
	
	
	      var mergedStyles = (0, _simpleAssign2.default)({
	        border: 10,
	        boxSizing: 'border-box',
	        display: 'inline-block',
	        fontFamily: this.context.muiTheme.baseTheme.fontFamily,
	        WebkitTapHighlightColor: enhancedButton.tapHighlightColor, // Remove mobile color flashing (deprecated)
	        cursor: disabled ? 'default' : 'pointer',
	        textDecoration: 'none',
	        margin: 0,
	        padding: 0,
	        outline: 'none',
	        fontSize: 'inherit',
	        fontWeight: 'inherit',
	        position: 'relative', // This is needed so that ripples do not bleed past border radius.
	        verticalAlign: href ? 'middle' : null,
	        zIndex: 1 }, style);
	
	      // Passing both background:none & backgroundColor can break due to object iteration order
	      if (!mergedStyles.backgroundColor && !mergedStyles.background) {
	        mergedStyles.background = 'none';
	      }
	
	      if (disabled && href) {
	        return _react2.default.createElement(
	          'span',
	          (0, _extends3.default)({}, other, {
	            style: mergedStyles
	          }),
	          children
	        );
	      }
	
	      var buttonProps = (0, _extends3.default)({}, other, {
	        style: prepareStyles(mergedStyles),
	        ref: function ref(node) {
	          return _this2.button = node;
	        },
	        disabled: disabled,
	        href: href,
	        onBlur: this.handleBlur,
	        onClick: this.handleClick,
	        onFocus: this.handleFocus,
	        onKeyUp: this.handleKeyUp,
	        onKeyDown: this.handleKeyDown,
	        onTouchTap: this.handleTouchTap,
	        tabIndex: disabled || disableKeyboardFocus ? -1 : tabIndex
	      });
	
	      var buttonChildren = this.createButtonChildren();
	
	      if (_react2.default.isValidElement(containerElement)) {
	        return _react2.default.cloneElement(containerElement, buttonProps, buttonChildren);
	      }
	
	      if (!href && containerElement === 'button') {
	        buttonProps.type = type;
	      }
	
	      return _react2.default.createElement(href ? 'a' : containerElement, buttonProps, buttonChildren);
	    }
	  }]);
	  return EnhancedButton;
	}(_react.Component);
	
	EnhancedButton.defaultProps = {
	  containerElement: 'button',
	  onBlur: function onBlur() {},
	  onClick: function onClick() {},
	  onFocus: function onFocus() {},
	  onKeyDown: function onKeyDown() {},
	  onKeyUp: function onKeyUp() {},
	  onKeyboardFocus: function onKeyboardFocus() {},
	  onTouchTap: function onTouchTap() {},
	  tabIndex: 0,
	  type: 'button'
	};
	EnhancedButton.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	 false ? EnhancedButton.propTypes = {
	  centerRipple: _propTypes2.default.bool,
	  children: _propTypes2.default.node,
	  containerElement: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
	  disableFocusRipple: _propTypes2.default.bool,
	  disableKeyboardFocus: _propTypes2.default.bool,
	  disableTouchRipple: _propTypes2.default.bool,
	  disabled: _propTypes2.default.bool,
	  focusRippleColor: _propTypes2.default.string,
	  focusRippleOpacity: _propTypes2.default.number,
	  href: _propTypes2.default.string,
	  keyboardFocused: _propTypes2.default.bool,
	  onBlur: _propTypes2.default.func,
	  onClick: _propTypes2.default.func,
	  onFocus: _propTypes2.default.func,
	  onKeyDown: _propTypes2.default.func,
	  onKeyUp: _propTypes2.default.func,
	  onKeyboardFocus: _propTypes2.default.func,
	  onTouchTap: _propTypes2.default.func,
	  style: _propTypes2.default.object,
	  tabIndex: _propTypes2.default.number,
	  touchRippleColor: _propTypes2.default.string,
	  touchRippleOpacity: _propTypes2.default.number,
	  type: _propTypes2.default.string
	} : void 0;
	exports.default = EnhancedButton;

/***/ },

/***/ 763:
/***/ function(module, exports) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  once: function once(el, type, callback) {
	    var typeArray = type ? type.split(' ') : [];
	    var recursiveFunction = function recursiveFunction(event) {
	      event.target.removeEventListener(event.type, recursiveFunction);
	      return callback(event);
	    };
	
	    for (var i = typeArray.length - 1; i >= 0; i--) {
	      this.on(el, typeArray[i], recursiveFunction);
	    }
	  },
	  on: function on(el, type, callback) {
	    if (el.addEventListener) {
	      el.addEventListener(type, callback);
	    } else {
	      // IE8+ Support
	      el.attachEvent('on' + type, function () {
	        callback.call(el);
	      });
	    }
	  },
	  off: function off(el, type, callback) {
	    if (el.removeEventListener) {
	      el.removeEventListener(type, callback);
	    } else {
	      // IE8+ Support
	      el.detachEvent('on' + type, callback);
	    }
	  },
	  isKeyboard: function isKeyboard(event) {
	    return ['keydown', 'keypress', 'keyup'].indexOf(event.type) !== -1;
	  }
	};

/***/ },

/***/ 764:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	"use strict";
	
	exports.__esModule = true;
	
	var _from = __webpack_require__(269);
	
	var _from2 = _interopRequireDefault(_from);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (arr) {
	  return Array.isArray(arr) ? arr : (0, _from2.default)(arr);
	};

/***/ },

/***/ 765:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.styleHelpers = exports.PlaceHolder = exports.FeatureItem = exports.CallToAction = exports.NavigationBrick = exports.TripleContentBrick = exports.DoubleContentBrick = exports.GenericBrick = exports.StrongMessageBrick = exports.EmailSqueezeBrick = exports.GalleryBrick = exports.FooterBrick = exports.EnumerationBrick = exports.LandingCanvas = exports.ThemePropagator = undefined;
	
	var _ThemePropagator = __webpack_require__(839);
	
	var _ThemePropagator2 = _interopRequireDefault(_ThemePropagator);
	
	var _LandingCanvas = __webpack_require__(832);
	
	var _LandingCanvas2 = _interopRequireDefault(_LandingCanvas);
	
	var _EnumerationBrick = __webpack_require__(823);
	
	var _EnumerationBrick2 = _interopRequireDefault(_EnumerationBrick);
	
	var _FooterBrick = __webpack_require__(827);
	
	var _FooterBrick2 = _interopRequireDefault(_FooterBrick);
	
	var _EmailSqueezeBrick = __webpack_require__(821);
	
	var _EmailSqueezeBrick2 = _interopRequireDefault(_EmailSqueezeBrick);
	
	var _StrongMessageBrick = __webpack_require__(837);
	
	var _StrongMessageBrick2 = _interopRequireDefault(_StrongMessageBrick);
	
	var _GenericBrick = __webpack_require__(830);
	
	var _GenericBrick2 = _interopRequireDefault(_GenericBrick);
	
	var _DoubleContentBrick = __webpack_require__(819);
	
	var _DoubleContentBrick2 = _interopRequireDefault(_DoubleContentBrick);
	
	var _TripleContentBrick = __webpack_require__(840);
	
	var _TripleContentBrick2 = _interopRequireDefault(_TripleContentBrick);
	
	var _NavigationBrick = __webpack_require__(833);
	
	var _NavigationBrick2 = _interopRequireDefault(_NavigationBrick);
	
	var _GalleryBrick = __webpack_require__(828);
	
	var _GalleryBrick2 = _interopRequireDefault(_GalleryBrick);
	
	var _CallToAction = __webpack_require__(817);
	
	var _CallToAction2 = _interopRequireDefault(_CallToAction);
	
	var _FeatureItem = __webpack_require__(825);
	
	var _FeatureItem2 = _interopRequireDefault(_FeatureItem);
	
	var _PlaceHolder = __webpack_require__(835);
	
	var _PlaceHolder2 = _interopRequireDefault(_PlaceHolder);
	
	var _styleHelpers = __webpack_require__(759);
	
	var _styleHelpers2 = _interopRequireDefault(_styleHelpers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.ThemePropagator = _ThemePropagator2.default;
	exports.LandingCanvas = _LandingCanvas2.default;
	exports.EnumerationBrick = _EnumerationBrick2.default;
	exports.FooterBrick = _FooterBrick2.default;
	exports.GalleryBrick = _GalleryBrick2.default;
	exports.EmailSqueezeBrick = _EmailSqueezeBrick2.default;
	exports.StrongMessageBrick = _StrongMessageBrick2.default;
	exports.GenericBrick = _GenericBrick2.default;
	exports.DoubleContentBrick = _DoubleContentBrick2.default;
	exports.TripleContentBrick = _TripleContentBrick2.default;
	exports.NavigationBrick = _NavigationBrick2.default;
	exports.CallToAction = _CallToAction2.default;
	exports.FeatureItem = _FeatureItem2.default;
	exports.PlaceHolder = _PlaceHolder2.default;
	exports.styleHelpers = _styleHelpers2.default;

/***/ },

/***/ 766:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(266);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(53);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(265);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(64);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(63);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(750);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(89);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _shallowEqual = __webpack_require__(753);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var _autoPrefix = __webpack_require__(752);
	
	var _autoPrefix2 = _interopRequireDefault(_autoPrefix);
	
	var _transitions = __webpack_require__(751);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _ScaleIn = __webpack_require__(775);
	
	var _ScaleIn2 = _interopRequireDefault(_ScaleIn);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var pulsateDuration = 750;
	
	var FocusRipple = function (_Component) {
	  (0, _inherits3.default)(FocusRipple, _Component);
	
	  function FocusRipple() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, FocusRipple);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FocusRipple.__proto__ || (0, _getPrototypeOf2.default)(FocusRipple)).call.apply(_ref, [this].concat(args))), _this), _this.pulsate = function () {
	      var innerCircle = _reactDom2.default.findDOMNode(_this.refs.innerCircle);
	      if (!innerCircle) return;
	
	      var startScale = 'scale(1)';
	      var endScale = 'scale(0.85)';
	      var currentScale = innerCircle.style.transform || startScale;
	      var nextScale = currentScale === startScale ? endScale : startScale;
	
	      _autoPrefix2.default.set(innerCircle.style, 'transform', nextScale);
	      _this.timeout = setTimeout(_this.pulsate, pulsateDuration);
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(FocusRipple, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.show) {
	        this.setRippleSize();
	        this.pulsate();
	      }
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      if (this.props.show) {
	        this.setRippleSize();
	        this.pulsate();
	      } else {
	        if (this.timeout) clearTimeout(this.timeout);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.timeout);
	    }
	  }, {
	    key: 'getRippleElement',
	    value: function getRippleElement(props) {
	      var color = props.color,
	          innerStyle = props.innerStyle,
	          opacity = props.opacity;
	      var _context$muiTheme = this.context.muiTheme,
	          prepareStyles = _context$muiTheme.prepareStyles,
	          ripple = _context$muiTheme.ripple;
	
	
	      var innerStyles = (0, _simpleAssign2.default)({
	        position: 'absolute',
	        height: '100%',
	        width: '100%',
	        borderRadius: '50%',
	        opacity: opacity ? opacity : 0.16,
	        backgroundColor: color || ripple.color,
	        transition: _transitions2.default.easeOut(pulsateDuration + 'ms', 'transform', null, _transitions2.default.easeInOutFunction)
	      }, innerStyle);
	
	      return _react2.default.createElement('div', { ref: 'innerCircle', style: prepareStyles((0, _simpleAssign2.default)({}, innerStyles)) });
	    }
	  }, {
	    key: 'setRippleSize',
	    value: function setRippleSize() {
	      var el = _reactDom2.default.findDOMNode(this.refs.innerCircle);
	      var height = el.offsetHeight;
	      var width = el.offsetWidth;
	      var size = Math.max(height, width);
	
	      var oldTop = 0;
	      // For browsers that don't support endsWith()
	      if (el.style.top.indexOf('px', el.style.top.length - 2) !== -1) {
	        oldTop = parseInt(el.style.top);
	      }
	      el.style.height = size + 'px';
	      el.style.top = height / 2 - size / 2 + oldTop + 'px';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          show = _props.show,
	          style = _props.style;
	
	
	      var mergedRootStyles = (0, _simpleAssign2.default)({
	        height: '100%',
	        width: '100%',
	        position: 'absolute',
	        top: 0,
	        left: 0
	      }, style);
	
	      var ripple = show ? this.getRippleElement(this.props) : null;
	
	      return _react2.default.createElement(
	        _ScaleIn2.default,
	        {
	          maxScale: 0.85,
	          style: mergedRootStyles
	        },
	        ripple
	      );
	    }
	  }]);
	  return FocusRipple;
	}(_react.Component);
	
	FocusRipple.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	 false ? FocusRipple.propTypes = {
	  color: _propTypes2.default.string,
	  innerStyle: _propTypes2.default.object,
	  opacity: _propTypes2.default.number,
	  show: _propTypes2.default.bool,
	  style: _propTypes2.default.object
	} : void 0;
	exports.default = FocusRipple;

/***/ },

/***/ 767:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _toConsumableArray2 = __webpack_require__(267);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _getPrototypeOf = __webpack_require__(266);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(53);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(265);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(64);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(63);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _toArray2 = __webpack_require__(764);
	
	var _toArray3 = _interopRequireDefault(_toArray2);
	
	var _simpleAssign = __webpack_require__(750);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(89);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _TransitionGroup = __webpack_require__(758);
	
	var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);
	
	var _dom = __webpack_require__(768);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _CircleRipple = __webpack_require__(774);
	
	var _CircleRipple2 = _interopRequireDefault(_CircleRipple);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Remove the first element of the array
	var shift = function shift(_ref) {
	  var _ref2 = (0, _toArray3.default)(_ref),
	      newArray = _ref2.slice(1);
	
	  return newArray;
	};
	
	var TouchRipple = function (_Component) {
	  (0, _inherits3.default)(TouchRipple, _Component);
	
	  function TouchRipple(props, context) {
	    (0, _classCallCheck3.default)(this, TouchRipple);
	
	    // Touch start produces a mouse down event for compat reasons. To avoid
	    // showing ripples twice we skip showing a ripple for the first mouse down
	    // after a touch start. Note we don't store ignoreNextMouseDown in this.state
	    // to avoid re-rendering when we change it.
	    var _this = (0, _possibleConstructorReturn3.default)(this, (TouchRipple.__proto__ || (0, _getPrototypeOf2.default)(TouchRipple)).call(this, props, context));
	
	    _this.handleMouseDown = function (event) {
	      // only listen to left clicks
	      if (event.button === 0) {
	        _this.start(event, false);
	      }
	    };
	
	    _this.handleMouseUp = function () {
	      _this.end();
	    };
	
	    _this.handleMouseLeave = function () {
	      _this.end();
	    };
	
	    _this.handleTouchStart = function (event) {
	      event.stopPropagation();
	      // If the user is swiping (not just tapping), save the position so we can
	      // abort ripples if the user appears to be scrolling.
	      if (_this.props.abortOnScroll && event.touches) {
	        _this.startListeningForScrollAbort(event);
	        _this.startTime = Date.now();
	      }
	      _this.start(event, true);
	    };
	
	    _this.handleTouchEnd = function () {
	      _this.end();
	    };
	
	    _this.handleTouchMove = function (event) {
	      // Stop trying to abort if we're already 300ms into the animation
	      var timeSinceStart = Math.abs(Date.now() - _this.startTime);
	      if (timeSinceStart > 300) {
	        _this.stopListeningForScrollAbort();
	        return;
	      }
	
	      // If the user is scrolling...
	      var deltaY = Math.abs(event.touches[0].clientY - _this.firstTouchY);
	      var deltaX = Math.abs(event.touches[0].clientX - _this.firstTouchX);
	      // Call it a scroll after an arbitrary 6px (feels reasonable in testing)
	      if (deltaY > 6 || deltaX > 6) {
	        var currentRipples = _this.state.ripples;
	        var ripple = currentRipples[0];
	        // This clone will replace the ripple in ReactTransitionGroup with a
	        // version that will disappear immediately when removed from the DOM
	        var abortedRipple = _react2.default.cloneElement(ripple, { aborted: true });
	        // Remove the old ripple and replace it with the new updated one
	        currentRipples = shift(currentRipples);
	        currentRipples = [].concat((0, _toConsumableArray3.default)(currentRipples), [abortedRipple]);
	        _this.setState({ ripples: currentRipples }, function () {
	          // Call end after we've set the ripple to abort otherwise the setState
	          // in end() merges with this and the ripple abort fails
	          _this.end();
	        });
	      }
	    };
	
	    _this.ignoreNextMouseDown = false;
	
	    _this.state = {
	      // This prop allows us to only render the ReactTransitionGroup
	      // on the first click of the component, making the inital render faster.
	      hasRipples: false,
	      nextKey: 0,
	      ripples: []
	    };
	    return _this;
	  }
	
	  (0, _createClass3.default)(TouchRipple, [{
	    key: 'start',
	    value: function start(event, isRippleTouchGenerated) {
	      var theme = this.context.muiTheme.ripple;
	
	      if (this.ignoreNextMouseDown && !isRippleTouchGenerated) {
	        this.ignoreNextMouseDown = false;
	        return;
	      }
	
	      var ripples = this.state.ripples;
	
	      // Add a ripple to the ripples array
	      ripples = [].concat((0, _toConsumableArray3.default)(ripples), [_react2.default.createElement(_CircleRipple2.default, {
	        key: this.state.nextKey,
	        style: !this.props.centerRipple ? this.getRippleStyle(event) : {},
	        color: this.props.color || theme.color,
	        opacity: this.props.opacity,
	        touchGenerated: isRippleTouchGenerated
	      })]);
	
	      this.ignoreNextMouseDown = isRippleTouchGenerated;
	      this.setState({
	        hasRipples: true,
	        nextKey: this.state.nextKey + 1,
	        ripples: ripples
	      });
	    }
	  }, {
	    key: 'end',
	    value: function end() {
	      var currentRipples = this.state.ripples;
	      this.setState({
	        ripples: shift(currentRipples)
	      });
	      if (this.props.abortOnScroll) {
	        this.stopListeningForScrollAbort();
	      }
	    }
	
	    // Check if the user seems to be scrolling and abort the animation if so
	
	  }, {
	    key: 'startListeningForScrollAbort',
	    value: function startListeningForScrollAbort(event) {
	      this.firstTouchY = event.touches[0].clientY;
	      this.firstTouchX = event.touches[0].clientX;
	      // Note that when scolling Chrome throttles this event to every 200ms
	      // Also note we don't listen for scroll events directly as there's no general
	      // way to cover cases like scrolling within containers on the page
	      document.body.addEventListener('touchmove', this.handleTouchMove);
	    }
	  }, {
	    key: 'stopListeningForScrollAbort',
	    value: function stopListeningForScrollAbort() {
	      document.body.removeEventListener('touchmove', this.handleTouchMove);
	    }
	  }, {
	    key: 'getRippleStyle',
	    value: function getRippleStyle(event) {
	      var el = _reactDom2.default.findDOMNode(this);
	      var elHeight = el.offsetHeight;
	      var elWidth = el.offsetWidth;
	      var offset = _dom2.default.offset(el);
	      var isTouchEvent = event.touches && event.touches.length;
	      var pageX = isTouchEvent ? event.touches[0].pageX : event.pageX;
	      var pageY = isTouchEvent ? event.touches[0].pageY : event.pageY;
	      var pointerX = pageX - offset.left;
	      var pointerY = pageY - offset.top;
	      var topLeftDiag = this.calcDiag(pointerX, pointerY);
	      var topRightDiag = this.calcDiag(elWidth - pointerX, pointerY);
	      var botRightDiag = this.calcDiag(elWidth - pointerX, elHeight - pointerY);
	      var botLeftDiag = this.calcDiag(pointerX, elHeight - pointerY);
	      var rippleRadius = Math.max(topLeftDiag, topRightDiag, botRightDiag, botLeftDiag);
	      var rippleSize = rippleRadius * 2;
	      var left = pointerX - rippleRadius;
	      var top = pointerY - rippleRadius;
	
	      return {
	        directionInvariant: true,
	        height: rippleSize,
	        width: rippleSize,
	        top: top,
	        left: left
	      };
	    }
	  }, {
	    key: 'calcDiag',
	    value: function calcDiag(a, b) {
	      return Math.sqrt(a * a + b * b);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          children = _props.children,
	          style = _props.style;
	      var _state = this.state,
	          hasRipples = _state.hasRipples,
	          ripples = _state.ripples;
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	
	      var rippleGroup = void 0;
	
	      if (hasRipples) {
	        var mergedStyles = (0, _simpleAssign2.default)({
	          height: '100%',
	          width: '100%',
	          position: 'absolute',
	          top: 0,
	          left: 0,
	          overflow: 'hidden',
	          pointerEvents: 'none'
	        }, style);
	
	        rippleGroup = _react2.default.createElement(
	          _TransitionGroup2.default,
	          { style: prepareStyles(mergedStyles) },
	          ripples
	        );
	      }
	
	      return _react2.default.createElement(
	        'div',
	        {
	          onMouseUp: this.handleMouseUp,
	          onMouseDown: this.handleMouseDown,
	          onMouseLeave: this.handleMouseLeave,
	          onTouchStart: this.handleTouchStart,
	          onTouchEnd: this.handleTouchEnd
	        },
	        rippleGroup,
	        children
	      );
	    }
	  }]);
	  return TouchRipple;
	}(_react.Component);
	
	TouchRipple.defaultProps = {
	  abortOnScroll: true
	};
	TouchRipple.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	 false ? TouchRipple.propTypes = {
	  abortOnScroll: _propTypes2.default.bool,
	  centerRipple: _propTypes2.default.bool,
	  children: _propTypes2.default.node,
	  color: _propTypes2.default.string,
	  opacity: _propTypes2.default.number,
	  style: _propTypes2.default.object
	} : void 0;
	exports.default = TouchRipple;

/***/ },

/***/ 768:
/***/ function(module, exports) {

	"use strict";
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  isDescendant: function isDescendant(parent, child) {
	    var node = child.parentNode;
	
	    while (node !== null) {
	      if (node === parent) return true;
	      node = node.parentNode;
	    }
	
	    return false;
	  },
	  offset: function offset(el) {
	    var rect = el.getBoundingClientRect();
	    return {
	      top: rect.top + document.body.scrollTop,
	      left: rect.left + document.body.scrollLeft
	    };
	  }
	};

/***/ },

/***/ 769:
/***/ function(module, exports) {

	
	module.exports = function chain(){
	  var len = arguments.length
	  var args = [];
	
	  for (var i = 0; i < len; i++)
	    args[i] = arguments[i]
	
	  args = args.filter(function(fn){ return fn != null })
	
	  if (args.length === 0) return undefined
	  if (args.length === 1) return args[0]
	
	  return args.reduce(function(current, next){
	    return function chainedFunction() {
	      current.apply(this, arguments);
	      next.apply(this, arguments);
	    };
	  })
	}


/***/ },

/***/ 770:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(15);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(54);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(266);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(53);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(265);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(64);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(63);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(750);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _propTypes3 = __webpack_require__(755);
	
	var _propTypes4 = _interopRequireDefault(_propTypes3);
	
	var _transitions = __webpack_require__(751);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getStyles(props, context) {
	  var rounded = props.rounded,
	      circle = props.circle,
	      transitionEnabled = props.transitionEnabled,
	      zDepth = props.zDepth;
	  var _context$muiTheme = context.muiTheme,
	      baseTheme = _context$muiTheme.baseTheme,
	      paper = _context$muiTheme.paper,
	      borderRadius = _context$muiTheme.borderRadius;
	
	
	  return {
	    root: {
	      color: paper.color,
	      backgroundColor: paper.backgroundColor,
	      transition: transitionEnabled && _transitions2.default.easeOut(),
	      boxSizing: 'border-box',
	      fontFamily: baseTheme.fontFamily,
	      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
	      boxShadow: paper.zDepthShadows[zDepth - 1], // No shadow for 0 depth papers
	      borderRadius: circle ? '50%' : rounded ? borderRadius : '0px'
	    }
	  };
	}
	
	var Paper = function (_Component) {
	  (0, _inherits3.default)(Paper, _Component);
	
	  function Paper() {
	    (0, _classCallCheck3.default)(this, Paper);
	    return (0, _possibleConstructorReturn3.default)(this, (Paper.__proto__ || (0, _getPrototypeOf2.default)(Paper)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(Paper, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          children = _props.children,
	          circle = _props.circle,
	          rounded = _props.rounded,
	          style = _props.style,
	          transitionEnabled = _props.transitionEnabled,
	          zDepth = _props.zDepth,
	          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'circle', 'rounded', 'style', 'transitionEnabled', 'zDepth']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context);
	
	      return _react2.default.createElement(
	        'div',
	        (0, _extends3.default)({}, other, { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }),
	        children
	      );
	    }
	  }]);
	  return Paper;
	}(_react.Component);
	
	Paper.defaultProps = {
	  circle: false,
	  rounded: true,
	  transitionEnabled: true,
	  zDepth: 1
	};
	Paper.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	 false ? Paper.propTypes = {
	  /**
	   * Children passed into the paper element.
	   */
	  children: _propTypes2.default.node,
	  /**
	   * Set to true to generate a circlular paper container.
	   */
	  circle: _propTypes2.default.bool,
	  /**
	   * By default, the paper container will have a border radius.
	   * Set this to false to generate a container with sharp corners.
	   */
	  rounded: _propTypes2.default.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object,
	  /**
	   * Set to false to disable CSS transitions for the paper element.
	   */
	  transitionEnabled: _propTypes2.default.bool,
	  /**
	   * This number represents the zDepth of the paper shadow.
	   */
	  zDepth: _propTypes4.default.zDepth
	} : void 0;
	exports.default = Paper;

/***/ },

/***/ 771:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(15);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(54);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(266);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(53);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(265);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(64);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(63);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(750);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _transitions = __webpack_require__(751);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _colorManipulator = __webpack_require__(90);
	
	var _childUtils = __webpack_require__(757);
	
	var _EnhancedButton = __webpack_require__(761);
	
	var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);
	
	var _Paper = __webpack_require__(754);
	
	var _Paper2 = _interopRequireDefault(_Paper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function validateLabel(props, propName, componentName) {
	  if (false) {
	    if (!props.children && props.label !== 0 && !props.label && !props.icon) {
	      return new Error('Required prop label or children or icon was not specified in ' + componentName + '.');
	    }
	  }
	}
	
	function getStyles(props, context, state) {
	  var _context$muiTheme = context.muiTheme,
	      baseTheme = _context$muiTheme.baseTheme,
	      button = _context$muiTheme.button,
	      raisedButton = _context$muiTheme.raisedButton,
	      borderRadius = _context$muiTheme.borderRadius;
	  var disabled = props.disabled,
	      disabledBackgroundColor = props.disabledBackgroundColor,
	      disabledLabelColor = props.disabledLabelColor,
	      fullWidth = props.fullWidth,
	      icon = props.icon,
	      label = props.label,
	      labelPosition = props.labelPosition,
	      primary = props.primary,
	      secondary = props.secondary,
	      style = props.style;
	
	
	  var amount = primary || secondary ? 0.4 : 0.08;
	
	  var backgroundColor = raisedButton.color;
	  var labelColor = raisedButton.textColor;
	
	  if (disabled) {
	    backgroundColor = disabledBackgroundColor || raisedButton.disabledColor;
	    labelColor = disabledLabelColor || raisedButton.disabledTextColor;
	  } else if (primary) {
	    backgroundColor = raisedButton.primaryColor;
	    labelColor = raisedButton.primaryTextColor;
	  } else if (secondary) {
	    backgroundColor = raisedButton.secondaryColor;
	    labelColor = raisedButton.secondaryTextColor;
	  } else {
	    if (props.backgroundColor) {
	      backgroundColor = props.backgroundColor;
	    }
	    if (props.labelColor) {
	      labelColor = props.labelColor;
	    }
	  }
	
	  var buttonHeight = style && style.height || button.height;
	
	  return {
	    root: {
	      display: 'inline-block',
	      transition: _transitions2.default.easeOut(),
	      minWidth: fullWidth ? '100%' : button.minWidth
	    },
	    button: {
	      height: buttonHeight,
	      lineHeight: buttonHeight + 'px',
	      width: '100%',
	      padding: 0,
	      borderRadius: borderRadius,
	      transition: _transitions2.default.easeOut(),
	      backgroundColor: backgroundColor,
	      // That's the default value for a button but not a link
	      textAlign: 'center'
	    },
	    label: {
	      position: 'relative',
	      opacity: 1,
	      fontSize: raisedButton.fontSize,
	      letterSpacing: 0,
	      textTransform: raisedButton.textTransform || button.textTransform || 'uppercase',
	      fontWeight: raisedButton.fontWeight,
	      margin: 0,
	      userSelect: 'none',
	      paddingLeft: icon && labelPosition !== 'before' ? 8 : baseTheme.spacing.desktopGutterLess,
	      paddingRight: icon && labelPosition === 'before' ? 8 : baseTheme.spacing.desktopGutterLess,
	      color: labelColor
	    },
	    icon: {
	      verticalAlign: 'middle',
	      marginLeft: label && labelPosition !== 'before' ? 12 : 0,
	      marginRight: label && labelPosition === 'before' ? 12 : 0
	    },
	    overlay: {
	      height: buttonHeight,
	      borderRadius: borderRadius,
	      backgroundColor: (state.keyboardFocused || state.hovered) && !disabled && (0, _colorManipulator.fade)(labelColor, amount),
	      transition: _transitions2.default.easeOut(),
	      top: 0
	    },
	    ripple: {
	      color: labelColor,
	      opacity: !(primary || secondary) ? 0.1 : 0.16
	    }
	  };
	}
	
	var RaisedButton = function (_Component) {
	  (0, _inherits3.default)(RaisedButton, _Component);
	
	  function RaisedButton() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, RaisedButton);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RaisedButton.__proto__ || (0, _getPrototypeOf2.default)(RaisedButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      hovered: false,
	      keyboardFocused: false,
	      touched: false,
	      initialZDepth: 0,
	      zDepth: 0
	    }, _this.handleMouseDown = function (event) {
	      // only listen to left clicks
	      if (event.button === 0) {
	        _this.setState({
	          zDepth: _this.state.initialZDepth + 1
	        });
	      }
	      if (_this.props.onMouseDown) {
	        _this.props.onMouseDown(event);
	      }
	    }, _this.handleMouseUp = function (event) {
	      _this.setState({
	        zDepth: _this.state.initialZDepth
	      });
	      if (_this.props.onMouseUp) {
	        _this.props.onMouseUp(event);
	      }
	    }, _this.handleMouseLeave = function (event) {
	      if (!_this.state.keyboardFocused) {
	        _this.setState({
	          zDepth: _this.state.initialZDepth,
	          hovered: false
	        });
	      }
	      if (_this.props.onMouseLeave) {
	        _this.props.onMouseLeave(event);
	      }
	    }, _this.handleMouseEnter = function (event) {
	      if (!_this.state.keyboardFocused && !_this.state.touched) {
	        _this.setState({
	          hovered: true
	        });
	      }
	      if (_this.props.onMouseEnter) {
	        _this.props.onMouseEnter(event);
	      }
	    }, _this.handleTouchStart = function (event) {
	      _this.setState({
	        touched: true,
	        zDepth: _this.state.initialZDepth + 1
	      });
	
	      if (_this.props.onTouchStart) {
	        _this.props.onTouchStart(event);
	      }
	    }, _this.handleTouchEnd = function (event) {
	      _this.setState({
	        touched: true,
	        zDepth: _this.state.initialZDepth
	      });
	
	      if (_this.props.onTouchEnd) {
	        _this.props.onTouchEnd(event);
	      }
	    }, _this.handleKeyboardFocus = function (event, keyboardFocused) {
	      var zDepth = keyboardFocused && !_this.props.disabled ? _this.state.initialZDepth + 1 : _this.state.initialZDepth;
	
	      _this.setState({
	        zDepth: zDepth,
	        keyboardFocused: keyboardFocused
	      });
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(RaisedButton, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var zDepth = this.props.disabled ? 0 : 1;
	      this.setState({
	        zDepth: zDepth,
	        initialZDepth: zDepth
	      });
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var zDepth = nextProps.disabled ? 0 : 1;
	      var nextState = {
	        zDepth: zDepth,
	        initialZDepth: zDepth
	      };
	
	      if (nextProps.disabled) {
	        nextState.hovered = false;
	      }
	
	      this.setState(nextState);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          backgroundColor = _props.backgroundColor,
	          buttonStyle = _props.buttonStyle,
	          children = _props.children,
	          className = _props.className,
	          disabled = _props.disabled,
	          disabledBackgroundColor = _props.disabledBackgroundColor,
	          disabledLabelColor = _props.disabledLabelColor,
	          fullWidth = _props.fullWidth,
	          icon = _props.icon,
	          label = _props.label,
	          labelColor = _props.labelColor,
	          labelPosition = _props.labelPosition,
	          labelStyle = _props.labelStyle,
	          overlayStyle = _props.overlayStyle,
	          primary = _props.primary,
	          rippleStyle = _props.rippleStyle,
	          secondary = _props.secondary,
	          style = _props.style,
	          other = (0, _objectWithoutProperties3.default)(_props, ['backgroundColor', 'buttonStyle', 'children', 'className', 'disabled', 'disabledBackgroundColor', 'disabledLabelColor', 'fullWidth', 'icon', 'label', 'labelColor', 'labelPosition', 'labelStyle', 'overlayStyle', 'primary', 'rippleStyle', 'secondary', 'style']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context, this.state);
	      var mergedRippleStyles = (0, _simpleAssign2.default)({}, styles.ripple, rippleStyle);
	
	      var buttonEventHandlers = disabled ? {} : {
	        onMouseDown: this.handleMouseDown,
	        onMouseUp: this.handleMouseUp,
	        onMouseLeave: this.handleMouseLeave,
	        onMouseEnter: this.handleMouseEnter,
	        onTouchStart: this.handleTouchStart,
	        onTouchEnd: this.handleTouchEnd,
	        onKeyboardFocus: this.handleKeyboardFocus
	      };
	
	      var labelElement = label && _react2.default.createElement(
	        'span',
	        { style: prepareStyles((0, _simpleAssign2.default)(styles.label, labelStyle)) },
	        label
	      );
	
	      var iconCloned = icon && (0, _react.cloneElement)(icon, {
	        color: icon.props.color || styles.label.color,
	        style: (0, _simpleAssign2.default)(styles.icon, icon.props.style)
	      });
	
	      // Place label before or after children.
	      var childrenFragment = labelPosition === 'before' ? {
	        labelElement: labelElement,
	        iconCloned: iconCloned,
	        children: children
	      } : {
	        children: children,
	        iconCloned: iconCloned,
	        labelElement: labelElement
	      };
	
	      var enhancedButtonChildren = (0, _childUtils.createChildFragment)(childrenFragment);
	
	      return _react2.default.createElement(
	        _Paper2.default,
	        {
	          className: className,
	          style: (0, _simpleAssign2.default)(styles.root, style),
	          zDepth: this.state.zDepth
	        },
	        _react2.default.createElement(
	          _EnhancedButton2.default,
	          (0, _extends3.default)({}, other, buttonEventHandlers, {
	            ref: 'container',
	            disabled: disabled,
	            style: (0, _simpleAssign2.default)(styles.button, buttonStyle),
	            focusRippleColor: mergedRippleStyles.color,
	            touchRippleColor: mergedRippleStyles.color,
	            focusRippleOpacity: mergedRippleStyles.opacity,
	            touchRippleOpacity: mergedRippleStyles.opacity
	          }),
	          _react2.default.createElement(
	            'div',
	            {
	              ref: 'overlay',
	              style: prepareStyles((0, _simpleAssign2.default)(styles.overlay, overlayStyle))
	            },
	            enhancedButtonChildren
	          )
	        )
	      );
	    }
	  }]);
	  return RaisedButton;
	}(_react.Component);
	
	RaisedButton.muiName = 'RaisedButton';
	RaisedButton.defaultProps = {
	  disabled: false,
	  labelPosition: 'after',
	  fullWidth: false,
	  primary: false,
	  secondary: false
	};
	RaisedButton.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	 false ? RaisedButton.propTypes = {
	  /**
	   * Override the default background color for the button,
	   * but not the default disabled background color
	   * (use `disabledBackgroundColor` for this).
	   */
	  backgroundColor: _propTypes2.default.string,
	  /**
	   * Override the inline-styles of the button element.
	   */
	  buttonStyle: _propTypes2.default.object,
	  /**
	   * The content of the button.
	   * If a label is provided via the `label` prop, the text within the label
	   * will be displayed in addition to the content provided here.
	   */
	  children: _propTypes2.default.node,
	  /**
	   * The CSS class name of the root element.
	   */
	  className: _propTypes2.default.string,
	  /**
	    * The element to use as the container for the RaisedButton. Either a string to
	    * use a DOM element or a ReactElement. This is useful for wrapping the
	    * RaisedButton in a custom Link component. If a ReactElement is given, ensure
	    * that it passes all of its given props through to the underlying DOM
	    * element and renders its children prop for proper integration.
	    */
	  containerElement: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
	  /**
	   * If true, the element's ripple effect will be disabled.
	   */
	  disableTouchRipple: _propTypes2.default.bool,
	  /**
	   * If true, the button will be disabled.
	   */
	  disabled: _propTypes2.default.bool,
	  /**
	   * Override the default background color for the button
	   * when it is disabled.
	   */
	  disabledBackgroundColor: _propTypes2.default.string,
	  /**
	   * The color of the button's label when the button is disabled.
	   */
	  disabledLabelColor: _propTypes2.default.string,
	  /**
	   * If true, the button will take up the full width of its container.
	   */
	  fullWidth: _propTypes2.default.bool,
	  /**
	   * The URL to link to when the button is clicked.
	   */
	  href: _propTypes2.default.string,
	  /**
	   * An icon to be displayed within the button.
	   */
	  icon: _propTypes2.default.node,
	  /**
	   * The label to be displayed within the button.
	   * If content is provided via the `children` prop, that content will be
	   * displayed in addition to the label provided here.
	   */
	  label: validateLabel,
	  /**
	   * The color of the button's label.
	   */
	  labelColor: _propTypes2.default.string,
	  /**
	   * The position of the button's label relative to the button's `children`.
	   */
	  labelPosition: _propTypes2.default.oneOf(['before', 'after']),
	  /**
	   * Override the inline-styles of the button's label element.
	   */
	  labelStyle: _propTypes2.default.object,
	  /** @ignore */
	  onMouseDown: _propTypes2.default.func,
	  /** @ignore */
	  onMouseEnter: _propTypes2.default.func,
	  /** @ignore */
	  onMouseLeave: _propTypes2.default.func,
	  /** @ignore */
	  onMouseUp: _propTypes2.default.func,
	  /** @ignore */
	  onTouchEnd: _propTypes2.default.func,
	  /** @ignore */
	  onTouchStart: _propTypes2.default.func,
	  /**
	   * Callback function fired when the button is touch-tapped.
	   *
	   * @param {object} event TouchTap event targeting the button.
	   */
	  onTouchTap: _propTypes2.default.func,
	  /**
	   * Override the inline style of the button overlay.
	   */
	  overlayStyle: _propTypes2.default.object,
	  /**
	   * If true, the button will use the theme's primary color.
	   */
	  primary: _propTypes2.default.bool,
	  /**
	   * Override the inline style of the ripple element.
	   */
	  rippleStyle: _propTypes2.default.object,
	  /**
	   * If true, the button will use the theme's secondary color.
	   * If both `secondary` and `primary` are true, the button will use
	   * the theme's primary color.
	   */
	  secondary: _propTypes2.default.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object
	} : void 0;
	exports.default = RaisedButton;

/***/ },

/***/ 772:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _RaisedButton = __webpack_require__(771);
	
	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _RaisedButton2.default;

/***/ },

/***/ 773:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof2 = __webpack_require__(91);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _reactProdInvariant = __webpack_require__(36);
	
	var _reactProdInvariant2 = _interopRequireDefault(_reactProdInvariant);
	
	var _ReactChildren = __webpack_require__(270);
	
	var _ReactChildren2 = _interopRequireDefault(_ReactChildren);
	
	var _ReactElement = __webpack_require__(35);
	
	var _ReactElement2 = _interopRequireDefault(_ReactElement);
	
	var _emptyFunction = __webpack_require__(11);
	
	var _emptyFunction2 = _interopRequireDefault(_emptyFunction);
	
	var _invariant = __webpack_require__(1);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _warning = __webpack_require__(2);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * We used to allow keyed objects to serve as a collection of ReactElements,
	 * or nested sets. This allowed us a way to explicitly key a set or fragment of
	 * components. This is now being replaced with an opaque data structure.
	 * The upgrade path is to call React.addons.createFragment({ key: value }) to
	 * create a keyed fragment. The resulting data structure is an array.
	 */
	
	/**
	 * Copyright 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	/**
	 * Copied from react/lib/ReactFragment in React 15.5.4
	 * because this file does not exist anymore in React 16.
	 * Modified to match code style.
	 */
	
	var numericPropertyRegex = /^\d+$/;
	
	var warnedAboutNumeric = false;
	
	var ReactFragment = {
	  /**
	   * Wrap a keyed object in an opaque proxy that warns you if you access any
	   * of its properties.
	   * See https://facebook.github.io/react/docs/create-fragment.html
	   */
	  create: function create(object) {
	    if ((typeof object === 'undefined' ? 'undefined' : (0, _typeof3.default)(object)) !== 'object' || !object || Array.isArray(object)) {
	      if (false) {
	        process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'React.addons.createFragment only accepts a single object. Got: %s', object) : void 0;
	      }
	
	      return object;
	    }
	    if (_ReactElement2.default.isValidElement(object)) {
	      if (false) {
	        process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'React.addons.createFragment does not accept a ReactElement ' + 'without a wrapper object.') : void 0;
	      }
	      return object;
	    }
	
	    if (!(object.nodeType !== 1)) {
	      if (false) {
	        (0, _invariant2.default)(false, 'React.addons.createFragment(...): Encountered an invalid child; ' + 'DOM elements are not valid children of React components.');
	      } else {
	        (0, _reactProdInvariant2.default)('0');
	      }
	    }
	
	    var result = [];
	
	    for (var key in object) {
	      if (false) {
	        if (!warnedAboutNumeric && numericPropertyRegex.test(key)) {
	          process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'React.addons.createFragment(...): ' + 'Child objects should have ' + 'non-numeric keys so ordering is preserved.') : void 0;
	          warnedAboutNumeric = true;
	        }
	      }
	      _ReactChildren2.default.mapIntoWithKeyPrefixInternal(object[key], result, key, _emptyFunction2.default.thatReturnsArgument);
	    }
	
	    return result;
	  }
	};
	
	exports.default = ReactFragment.create;

/***/ },

/***/ 774:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(15);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(54);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(266);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(53);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(265);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(64);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(63);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(750);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(89);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _shallowEqual = __webpack_require__(753);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var _autoPrefix = __webpack_require__(752);
	
	var _autoPrefix2 = _interopRequireDefault(_autoPrefix);
	
	var _transitions = __webpack_require__(751);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CircleRipple = function (_Component) {
	  (0, _inherits3.default)(CircleRipple, _Component);
	
	  function CircleRipple() {
	    (0, _classCallCheck3.default)(this, CircleRipple);
	    return (0, _possibleConstructorReturn3.default)(this, (CircleRipple.__proto__ || (0, _getPrototypeOf2.default)(CircleRipple)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(CircleRipple, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      return !(0, _shallowEqual2.default)(this.props, nextProps);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.enterTimer);
	      clearTimeout(this.leaveTimer);
	    }
	  }, {
	    key: 'componentWillAppear',
	    value: function componentWillAppear(callback) {
	      this.initializeAnimation(callback);
	    }
	  }, {
	    key: 'componentWillEnter',
	    value: function componentWillEnter(callback) {
	      this.initializeAnimation(callback);
	    }
	  }, {
	    key: 'componentDidAppear',
	    value: function componentDidAppear() {
	      this.animate();
	    }
	  }, {
	    key: 'componentDidEnter',
	    value: function componentDidEnter() {
	      this.animate();
	    }
	  }, {
	    key: 'componentWillLeave',
	    value: function componentWillLeave(callback) {
	      var style = _reactDom2.default.findDOMNode(this).style;
	      style.opacity = 0;
	      // If the animation is aborted, remove from the DOM immediately
	      var removeAfter = this.props.aborted ? 0 : 2000;
	      this.enterTimer = setTimeout(callback, removeAfter);
	    }
	  }, {
	    key: 'animate',
	    value: function animate() {
	      var style = _reactDom2.default.findDOMNode(this).style;
	      var transitionValue = _transitions2.default.easeOut('2s', 'opacity') + ', ' + _transitions2.default.easeOut('1s', 'transform');
	      _autoPrefix2.default.set(style, 'transition', transitionValue);
	      _autoPrefix2.default.set(style, 'transform', 'scale(1)');
	    }
	  }, {
	    key: 'initializeAnimation',
	    value: function initializeAnimation(callback) {
	      var style = _reactDom2.default.findDOMNode(this).style;
	      style.opacity = this.props.opacity;
	      _autoPrefix2.default.set(style, 'transform', 'scale(0)');
	      this.leaveTimer = setTimeout(callback, 0);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          aborted = _props.aborted,
	          color = _props.color,
	          opacity = _props.opacity,
	          style = _props.style,
	          touchGenerated = _props.touchGenerated,
	          other = (0, _objectWithoutProperties3.default)(_props, ['aborted', 'color', 'opacity', 'style', 'touchGenerated']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	
	      var mergedStyles = (0, _simpleAssign2.default)({
	        position: 'absolute',
	        top: 0,
	        left: 0,
	        height: '100%',
	        width: '100%',
	        borderRadius: '50%',
	        backgroundColor: color
	      }, style);
	
	      return _react2.default.createElement('div', (0, _extends3.default)({}, other, { style: prepareStyles(mergedStyles) }));
	    }
	  }]);
	  return CircleRipple;
	}(_react.Component);
	
	CircleRipple.defaultProps = {
	  opacity: 0.1,
	  aborted: false
	};
	CircleRipple.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	 false ? CircleRipple.propTypes = {
	  aborted: _propTypes2.default.bool,
	  color: _propTypes2.default.string,
	  opacity: _propTypes2.default.number,
	  style: _propTypes2.default.object,
	  touchGenerated: _propTypes2.default.bool
	} : void 0;
	exports.default = CircleRipple;

/***/ },

/***/ 775:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(15);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(54);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(266);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(53);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(265);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(64);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(63);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(750);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _TransitionGroup = __webpack_require__(758);
	
	var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);
	
	var _ScaleInChild = __webpack_require__(776);
	
	var _ScaleInChild2 = _interopRequireDefault(_ScaleInChild);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ScaleIn = function (_Component) {
	  (0, _inherits3.default)(ScaleIn, _Component);
	
	  function ScaleIn() {
	    (0, _classCallCheck3.default)(this, ScaleIn);
	    return (0, _possibleConstructorReturn3.default)(this, (ScaleIn.__proto__ || (0, _getPrototypeOf2.default)(ScaleIn)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(ScaleIn, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          children = _props.children,
	          childStyle = _props.childStyle,
	          enterDelay = _props.enterDelay,
	          maxScale = _props.maxScale,
	          minScale = _props.minScale,
	          style = _props.style,
	          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'childStyle', 'enterDelay', 'maxScale', 'minScale', 'style']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	
	      var mergedRootStyles = (0, _simpleAssign2.default)({}, {
	        position: 'relative',
	        overflow: 'hidden',
	        height: '100%'
	      }, style);
	
	      var newChildren = _react2.default.Children.map(children, function (child) {
	        return _react2.default.createElement(
	          _ScaleInChild2.default,
	          {
	            key: child.key,
	            enterDelay: enterDelay,
	            maxScale: maxScale,
	            minScale: minScale,
	            style: childStyle
	          },
	          child
	        );
	      });
	
	      return _react2.default.createElement(
	        _TransitionGroup2.default,
	        (0, _extends3.default)({}, other, {
	          style: prepareStyles(mergedRootStyles),
	          component: 'div'
	        }),
	        newChildren
	      );
	    }
	  }]);
	  return ScaleIn;
	}(_react.Component);
	
	ScaleIn.defaultProps = {
	  enterDelay: 0
	};
	ScaleIn.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	 false ? ScaleIn.propTypes = {
	  childStyle: _propTypes2.default.object,
	  children: _propTypes2.default.node,
	  enterDelay: _propTypes2.default.number,
	  maxScale: _propTypes2.default.number,
	  minScale: _propTypes2.default.number,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _propTypes2.default.object
	} : void 0;
	exports.default = ScaleIn;

/***/ },

/***/ 776:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(15);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(54);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(266);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(53);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(265);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(64);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(63);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(750);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(89);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _autoPrefix = __webpack_require__(752);
	
	var _autoPrefix2 = _interopRequireDefault(_autoPrefix);
	
	var _transitions = __webpack_require__(751);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ScaleInChild = function (_Component) {
	  (0, _inherits3.default)(ScaleInChild, _Component);
	
	  function ScaleInChild() {
	    (0, _classCallCheck3.default)(this, ScaleInChild);
	    return (0, _possibleConstructorReturn3.default)(this, (ScaleInChild.__proto__ || (0, _getPrototypeOf2.default)(ScaleInChild)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(ScaleInChild, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.enterTimer);
	      clearTimeout(this.leaveTimer);
	    }
	  }, {
	    key: 'componentWillAppear',
	    value: function componentWillAppear(callback) {
	      this.initializeAnimation(callback);
	    }
	  }, {
	    key: 'componentWillEnter',
	    value: function componentWillEnter(callback) {
	      this.initializeAnimation(callback);
	    }
	  }, {
	    key: 'componentDidAppear',
	    value: function componentDidAppear() {
	      this.animate();
	    }
	  }, {
	    key: 'componentDidEnter',
	    value: function componentDidEnter() {
	      this.animate();
	    }
	  }, {
	    key: 'componentWillLeave',
	    value: function componentWillLeave(callback) {
	      var style = _reactDom2.default.findDOMNode(this).style;
	
	      style.opacity = '0';
	      _autoPrefix2.default.set(style, 'transform', 'scale(' + this.props.minScale + ')');
	
	      this.leaveTimer = setTimeout(callback, 450);
	    }
	  }, {
	    key: 'animate',
	    value: function animate() {
	      var style = _reactDom2.default.findDOMNode(this).style;
	
	      style.opacity = '1';
	      _autoPrefix2.default.set(style, 'transform', 'scale(' + this.props.maxScale + ')');
	    }
	  }, {
	    key: 'initializeAnimation',
	    value: function initializeAnimation(callback) {
	      var style = _reactDom2.default.findDOMNode(this).style;
	
	      style.opacity = '0';
	      _autoPrefix2.default.set(style, 'transform', 'scale(0)');
	
	      this.enterTimer = setTimeout(callback, this.props.enterDelay);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          children = _props.children,
	          enterDelay = _props.enterDelay,
	          maxScale = _props.maxScale,
	          minScale = _props.minScale,
	          style = _props.style,
	          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'enterDelay', 'maxScale', 'minScale', 'style']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	
	      var mergedRootStyles = (0, _simpleAssign2.default)({}, {
	        position: 'absolute',
	        height: '100%',
	        width: '100%',
	        top: 0,
	        left: 0,
	        transition: _transitions2.default.easeOut(null, ['transform', 'opacity'])
	      }, style);
	
	      return _react2.default.createElement(
	        'div',
	        (0, _extends3.default)({}, other, { style: prepareStyles(mergedRootStyles) }),
	        children
	      );
	    }
	  }]);
	  return ScaleInChild;
	}(_react.Component);
	
	ScaleInChild.defaultProps = {
	  enterDelay: 0,
	  maxScale: 1,
	  minScale: 0
	};
	ScaleInChild.contextTypes = {
	  muiTheme: _propTypes2.default.object.isRequired
	};
	 false ? ScaleInChild.propTypes = {
	  children: _propTypes2.default.node,
	  enterDelay: _propTypes2.default.number,
	  maxScale: _propTypes2.default.number,
	  minScale: _propTypes2.default.number,
	  style: _propTypes2.default.object
	} : void 0;
	exports.default = ScaleInChild;

/***/ },

/***/ 777:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	exports.__esModule = true;
	exports.getChildMapping = getChildMapping;
	exports.mergeChildMappings = mergeChildMappings;
	
	var _react = __webpack_require__(0);
	
	/**
	 * Given `this.props.children`, return an object mapping key to child.
	 *
	 * @param {*} children `this.props.children`
	 * @return {object} Mapping of key to child
	 */
	function getChildMapping(children) {
	  if (!children) {
	    return children;
	  }
	  var result = {};
	  _react.Children.map(children, function (child) {
	    return child;
	  }).forEach(function (child) {
	    result[child.key] = child;
	  });
	  return result;
	}
	
	/**
	 * When you're adding or removing children some may be added or removed in the
	 * same render pass. We want to show *both* since we want to simultaneously
	 * animate elements in and out. This function takes a previous set of keys
	 * and a new set of keys and merges them with its best guess of the correct
	 * ordering. In the future we may expose some of the utilities in
	 * ReactMultiChild to make this easy, but for now React itself does not
	 * directly have this concept of the union of prevChildren and nextChildren
	 * so we implement it here.
	 *
	 * @param {object} prev prev children as returned from
	 * `ReactTransitionChildMapping.getChildMapping()`.
	 * @param {object} next next children as returned from
	 * `ReactTransitionChildMapping.getChildMapping()`.
	 * @return {object} a key set that contains all keys in `prev` and all keys
	 * in `next` in a reasonable order.
	 */
	function mergeChildMappings(prev, next) {
	  prev = prev || {};
	  next = next || {};
	
	  function getValueForKey(key) {
	    if (next.hasOwnProperty(key)) {
	      return next[key];
	    }
	
	    return prev[key];
	  }
	
	  // For each key of `next`, the list of keys to insert before that key in
	  // the combined list
	  var nextKeysPending = {};
	
	  var pendingKeys = [];
	  for (var prevKey in prev) {
	    if (next.hasOwnProperty(prevKey)) {
	      if (pendingKeys.length) {
	        nextKeysPending[prevKey] = pendingKeys;
	        pendingKeys = [];
	      }
	    } else {
	      pendingKeys.push(prevKey);
	    }
	  }
	
	  var i = void 0;
	  var childMapping = {};
	  for (var nextKey in next) {
	    if (nextKeysPending.hasOwnProperty(nextKey)) {
	      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
	        var pendingNextKey = nextKeysPending[nextKey][i];
	        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
	      }
	    }
	    childMapping[nextKey] = getValueForKey(nextKey);
	  }
	
	  // Finally, add the keys which didn't appear before any key in `next`
	  for (i = 0; i < pendingKeys.length; i++) {
	    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
	  }
	
	  return childMapping;
	}

/***/ },

/***/ 780:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.LandricksPropTypes = undefined;
	
	var _React$PropTypes$shap;
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var LandricksPropTypes = exports.LandricksPropTypes = {
	  brickTheme: _react2.default.PropTypes.shape((_React$PropTypes$shap = {
	    fontFamily: _react2.default.PropTypes.string,
	    baseFontSize: _react2.default.PropTypes.string
	  }, _defineProperty(_React$PropTypes$shap, 'baseFontSize', _react2.default.PropTypes.string), _defineProperty(_React$PropTypes$shap, 'backgroundImage', _react2.default.PropTypes.string), _defineProperty(_React$PropTypes$shap, 'backgroundColor', _react2.default.PropTypes.string), _defineProperty(_React$PropTypes$shap, 'textColor', _react2.default.PropTypes.string), _defineProperty(_React$PropTypes$shap, 'primaryColor', _react2.default.PropTypes.string), _defineProperty(_React$PropTypes$shap, 'primaryContrastColor', _react2.default.PropTypes.string), _defineProperty(_React$PropTypes$shap, 'objectDesign', _react2.default.PropTypes.oneOf(['square-solid', 'square-outline', 'rounded-solid', 'rounded-outline', 'bump'])), _React$PropTypes$shap))
	};

/***/ },

/***/ 782:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _screenReaderStyles = __webpack_require__(928);
	
	var _screenReaderStyles2 = _interopRequireDefault(_screenReaderStyles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * A React component for the font-awesome icon library.
	 *
	 * @param {String} [ariaLabel] An extra accessibility label to put on the icon
	 * @param {Boolean} [border=false] Whether or not to show a border radius
	 * @param {String} [className] An extra set of CSS classes to add to the component
	 * @param {Object} [cssModule] Option to pass FontAwesome CSS as a module
	 * @param {Boolean} [fixedWidth=false] Make buttons fixed width
	 * @param {String} [flip=false] Flip the icon's orientation.
	 * @param {Boolean} [inverse=false]Inverse the icon's color
	 * @param {String} name Name of the icon to use
	 * @param {Boolean} [pulse=false] Rotate icon with 8 steps, rather than smoothly
	 * @param {Number} [rotate] The degress to rotate the icon by
	 * @param {String} [size] The icon scaling size
	 * @param {Boolean} [spin=false] Spin the icon
	 * @param {String} [stack] Stack an icon on top of another
	 * @param {String} [tag=span] The HTML tag to use as a string, eg 'i' or 'em'
	 * @module FontAwesome
	 * @type {ReactClass}
	 */
	var FontAwesome = function (_React$Component) {
	  _inherits(FontAwesome, _React$Component);
	
	  function FontAwesome() {
	    _classCallCheck(this, FontAwesome);
	
	    var _this = _possibleConstructorReturn(this, (FontAwesome.__proto__ || Object.getPrototypeOf(FontAwesome)).call(this));
	
	    _this.displayName = 'FontAwesome';
	    return _this;
	  }
	
	  _createClass(FontAwesome, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          border = _props.border,
	          cssModule = _props.cssModule,
	          className = _props.className,
	          fixedWidth = _props.fixedWidth,
	          flip = _props.flip,
	          inverse = _props.inverse,
	          name = _props.name,
	          pulse = _props.pulse,
	          rotate = _props.rotate,
	          size = _props.size,
	          spin = _props.spin,
	          stack = _props.stack,
	          _props$tag = _props.tag,
	          tag = _props$tag === undefined ? 'span' : _props$tag,
	          ariaLabel = _props.ariaLabel,
	          props = _objectWithoutProperties(_props, ['border', 'cssModule', 'className', 'fixedWidth', 'flip', 'inverse', 'name', 'pulse', 'rotate', 'size', 'spin', 'stack', 'tag', 'ariaLabel']);
	
	      var classNames = [];
	
	      if (cssModule) {
	        classNames.push(cssModule['fa']);
	        classNames.push(cssModule['fa-' + name]);
	        size && classNames.push(cssModule['fa-' + size]);
	        spin && classNames.push(cssModule['fa-spin']);
	        pulse && classNames.push(cssModule['fa-pulse']);
	        border && classNames.push(cssModule['fa-border']);
	        fixedWidth && classNames.push(cssModule['fa-fw']);
	        inverse && classNames.push(cssModule['fa-inverse']);
	        flip && classNames.push(cssModule['fa-flip-' + flip]);
	        rotate && classNames.push(cssModule['fa-rotate-' + rotate]);
	        stack && classNames.push(cssModule['fa-stack-' + stack]);
	      } else {
	        classNames.push('fa');
	        classNames.push('fa-' + name);
	        size && classNames.push('fa-' + size);
	        spin && classNames.push('fa-spin');
	        pulse && classNames.push('fa-pulse');
	        border && classNames.push('fa-border');
	        fixedWidth && classNames.push('fa-fw');
	        inverse && classNames.push('fa-inverse');
	        flip && classNames.push('fa-flip-' + flip);
	        rotate && classNames.push('fa-rotate-' + rotate);
	        stack && classNames.push('fa-stack-' + stack);
	      }
	
	      // Add any custom class names at the end.
	      className && classNames.push(className);
	      return _react2.default.createElement(tag, _extends({}, props, { 'aria-hidden': true, className: classNames.join(' ') }), ariaLabel ? _react2.default.createElement('span', { style: _screenReaderStyles2.default }, ariaLabel) : null);
	    }
	  }]);
	
	  return FontAwesome;
	}(_react2.default.Component);
	
	FontAwesome.propTypes = {
	  ariaLabel: _propTypes2.default.string,
	  border: _propTypes2.default.bool,
	  className: _propTypes2.default.string,
	  cssModule: _propTypes2.default.object,
	  fixedWidth: _propTypes2.default.bool,
	  flip: _propTypes2.default.oneOf(['horizontal', 'vertical']),
	  inverse: _propTypes2.default.bool,
	  name: _propTypes2.default.string.isRequired,
	  pulse: _propTypes2.default.bool,
	  rotate: _propTypes2.default.oneOf([90, 180, 270]),
	  size: _propTypes2.default.oneOf(['lg', '2x', '3x', '4x', '5x']),
	  spin: _propTypes2.default.bool,
	  stack: _propTypes2.default.oneOf(['1x', '2x']),
	  tag: _propTypes2.default.string
	};
	
	exports.default = FontAwesome;
	module.exports = exports['default'];

/***/ },

/***/ 817:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactFontawesome = __webpack_require__(782);
	
	var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);
	
	var _styles = __webpack_require__(818);
	
	var _styles2 = _interopRequireDefault(_styles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CallToAction = function (_Component) {
	  _inherits(CallToAction, _Component);
	
	  function CallToAction() {
	    _classCallCheck(this, CallToAction);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CallToAction).apply(this, arguments));
	  }
	
	  _createClass(CallToAction, [{
	    key: 'renderLabel',
	    value: function renderLabel(style, props) {
	
	      if (props.renderLabel) {
	        return props.renderLabel(style, props);
	      }
	
	      if (!props.label) {
	        return null;
	      }
	
	      return _react2.default.createElement(
	        'span',
	        { style: style.label },
	        props.label
	      );
	    }
	  }, {
	    key: 'renderIcon',
	    value: function renderIcon(style, props) {
	
	      if (props.renderIcon) {
	        return props.renderIcon(style, props);
	      }
	
	      if (!props.icon) {
	        return null;
	      }
	
	      return _react2.default.createElement(_reactFontawesome2.default, { name: props.icon, style: style.icon });
	    }
	  }, {
	    key: 'renderButton',
	    value: function renderButton(style, props) {
	
	      if (props.renderButton) {
	        return props.renderButton(style, props);
	      }
	
	      return _react2.default.createElement(
	        'button',
	        { onClick: props.onClick, style: style.wrapper },
	        this.renderIcon(style, props),
	        ' ',
	        this.renderLabel(style, props)
	      );
	    }
	  }, {
	    key: 'renderAnchor',
	    value: function renderAnchor(style, props) {
	
	      if (props.renderAnchor) {
	        return props.renderAnchor(style, props);
	      }
	
	      return _react2.default.createElement(
	        'a',
	        { href: props.href, target: props.target | '_self', style: style.wrapper },
	        this.renderIcon(style, props),
	        ' ',
	        this.renderLabel(style, props)
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	
	      var s = (0, _styles2.default)(this.props);
	
	      if (this.props.href) {
	        return this.renderAnchor(s, this.props);
	      } else {
	        return this.renderButton(s, this.props);
	      }
	    }
	  }]);
	
	  return CallToAction;
	}(_react.Component);
	
	CallToAction.propTypes = {
	  href: _react2.default.PropTypes.string,
	  target: _react2.default.PropTypes.string,
	  icon: _react2.default.PropTypes.string,
	  label: _react2.default.PropTypes.string,
	  onClick: _react2.default.PropTypes.func
	};
	
	exports.default = CallToAction;

/***/ },

/***/ 818:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = function (props) {
	  var _safeThemeFromProps2 = (0, _styleHelpers.safeThemeFromProps)(props);
	
	  var textColor = _safeThemeFromProps2.textColor;
	  var primaryColor = _safeThemeFromProps2.primaryColor;
	  var wrapperStyle = props.wrapperStyle;
	  var iconStyle = props.iconStyle;
	  var labelStyle = props.labelStyle;
	
	
	  var styles = {
	    wrapper: _extends({}, getWrapperForDesign(props), {
	      padding: '1.7%',
	      textDecoration: 'none',
	      display: 'inline-block',
	      margin: '1%',
	      fontSize: 'inherit'
	    }, wrapperStyle),
	    icon: _extends({
	      fontSize: '1em'
	    }, iconStyle),
	    label: _extends({
	      fontSize: '1em',
	      fontWeight: 'bold'
	    }, labelStyle)
	  };
	
	  return styles;
	};
	
	var _styleHelpers = __webpack_require__(759);
	
	function getWrapperForDesign(props) {
	  var _safeThemeFromProps = (0, _styleHelpers.safeThemeFromProps)(props);
	
	  var textColor = _safeThemeFromProps.textColor;
	  var primaryColor = _safeThemeFromProps.primaryColor;
	  var primaryContrastColor = _safeThemeFromProps.primaryContrastColor;
	  var objectDesign = _safeThemeFromProps.objectDesign;
	
	
	  switch (objectDesign) {
	    case 'rounded-solid':
	      return {
	        backgroundColor: primaryColor,
	        color: primaryContrastColor,
	        borderStyle: 'none',
	        borderRadius: '30px'
	      };
	    case 'rounded-outline':
	      return {
	        backgroundColor: 'transparent',
	        borderWidth: 3,
	        borderColor: primaryColor,
	        color: primaryColor,
	        borderStyle: 'solid',
	        borderRadius: '30px'
	      };
	    case 'square-outline':
	      return {
	        backgroundColor: 'transparent',
	        borderWidth: 3,
	        borderColor: primaryColor,
	        color: primaryColor,
	        borderStyle: 'solid',
	        borderRadius: 0
	      };
	    default:
	      //square-solid
	      return {
	        backgroundColor: primaryColor,
	        color: primaryContrastColor,
	        borderStyle: 'none',
	        borderRadius: 0
	      };
	  }
	}

/***/ },

/***/ 819:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styles = __webpack_require__(820);
	
	var _styles2 = _interopRequireDefault(_styles);
	
	var _ = __webpack_require__(765);
	
	var _conventions = __webpack_require__(780);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DoubleContentBrick = function (_Component) {
	  _inherits(DoubleContentBrick, _Component);
	
	  function DoubleContentBrick() {
	    _classCallCheck(this, DoubleContentBrick);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(DoubleContentBrick).apply(this, arguments));
	  }
	
	  _createClass(DoubleContentBrick, [{
	    key: 'renderFirstContent',
	    value: function renderFirstContent(firstChild, parentStyles, parentProps) {
	
	      if (parentProps.renderFirstContent) {
	        return parentProps.renderFirstContent(firstChild, parentStyles, parentProps);
	      }
	
	      return _react2.default.createElement(
	        _.ThemePropagator,
	        _extends({}, parentProps, { wrapperStyle: { flex: 1 } }),
	        firstChild
	      );
	    }
	  }, {
	    key: 'renderSecondContent',
	    value: function renderSecondContent(secondChild, parentStyles, parentProps) {
	
	      if (parentProps.renderSecondContent) {
	        return parentProps.renderSecondContent(secondChild, parentStyles, parentProps);
	      }
	
	      return _react2.default.createElement(
	        _.ThemePropagator,
	        _extends({}, parentProps, { wrapperStyle: { flex: 1 } }),
	        secondChild
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	
	      var s = (0, _styles2.default)(this.props);
	
	      var _React$Children$toArr = _react2.default.Children.toArray(this.props.children);
	
	      var _React$Children$toArr2 = _slicedToArray(_React$Children$toArr, 2);
	
	      var firstChild = _React$Children$toArr2[0];
	      var secondChild = _React$Children$toArr2[1];
	
	
	      return _react2.default.createElement(
	        _.GenericBrick,
	        this.props,
	        _react2.default.createElement(
	          'div',
	          { style: { display: 'flex', flexDirection: 'row', flexWrap: 'wrap' } },
	          this.renderFirstContent(firstChild, s, this.props),
	          this.renderSecondContent(secondChild, s, this.props)
	        )
	      );
	    }
	  }]);
	
	  return DoubleContentBrick;
	}(_react.Component);
	
	DoubleContentBrick.propTypes = {
	  hasHeader: _react2.default.PropTypes.bool,
	  title: _react2.default.PropTypes.string,
	  subtitle: _react2.default.PropTypes.string,
	  theme: _conventions.LandricksPropTypes.brickTheme,
	  wrapperStyle: _react2.default.PropTypes.object,
	  contentStyle: _react2.default.PropTypes.object,
	  headerStyle: _react2.default.PropTypes.object,
	  titleStyle: _react2.default.PropTypes.object,
	  subtitleStyle: _react2.default.PropTypes.object,
	  renderHeader: _react2.default.PropTypes.func,
	  children: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.element)
	};
	
	exports.default = DoubleContentBrick;

/***/ },

/***/ 820:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (props) {
	
	  var styles = {};
	
	  return styles;
	};
	
	var _styleHelpers = __webpack_require__(759);

/***/ },

/***/ 821:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styles = __webpack_require__(822);
	
	var _styles2 = _interopRequireDefault(_styles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var inputValue = null;
	
	function handleSubmit(onClick) {
	  return function (event) {
	    event.preventDefault();
	    onClick({ email: inputValue });
	  };
	}
	
	function handleInputChange(event) {
	  inputValue = event.target.value;
	}
	
	var EmailSqueezeBrick = function EmailSqueezeBrick(props) {
	
	  var s = (0, _styles2.default)(props);
	
	  return _react2.default.createElement(
	    'section',
	    { style: s.box },
	    _react2.default.createElement(
	      'h1',
	      { style: s.h1 },
	      props.title
	    ),
	    _react2.default.createElement(
	      'h2',
	      { style: s.h2 },
	      props.subtitle
	    ),
	    _react2.default.createElement(
	      'form',
	      { style: s.form, onSubmit: handleSubmit(props.onSubmit) },
	      _react2.default.createElement('input', { type: 'email', style: s.input, placeholder: props.placeholder, required: true, onChange: handleInputChange }),
	      _react2.default.createElement(
	        'button',
	        { type: 'submit', style: s.button },
	        props.buttonLabel
	      )
	    ),
	    _react2.default.createElement(
	      'small',
	      { style: s.small },
	      props.smallText
	    )
	  );
	};
	
	EmailSqueezeBrick.propTypes = {
	  buttonLabel: _react2.default.PropTypes.string,
	  placeholder: _react2.default.PropTypes.string
	};
	
	exports.default = EmailSqueezeBrick;

/***/ },

/***/ 822:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = function (props) {
	  var _safeThemeFromProps = (0, _styleHelpers.safeThemeFromProps)(props);
	
	  var backgroundColor = _safeThemeFromProps.backgroundColor;
	  var textColor = _safeThemeFromProps.textColor;
	  var activeColor = _safeThemeFromProps.activeColor;
	  var contentStyle = _safeThemeFromProps.contentStyle;
	  var titleStyle = _safeThemeFromProps.titleStyle;
	  var subtitleStyle = _safeThemeFromProps.subtitleStyle;
	  var buttonStyle = _safeThemeFromProps.buttonStyle;
	  var inputStyle = _safeThemeFromProps.inputStyle;
	  var smallStyle = _safeThemeFromProps.smallStyle;
	  var mode = props.mode;
	
	
	  var styles = {
	    box: _extends({
	      background: backgroundColor,
	      color: textColor,
	      padding: '5%',
	      textAlign: 'center'
	    }, contentStyle, props.contentStyle),
	    h1: _extends({
	      fontSize: '3rem',
	      fontWeight: 'bold',
	      marginBottom: '1.5rem'
	    }, titleStyle, props.titleStyle),
	    h2: _extends({
	      fontSize: '1rem',
	      fontWeight: 'normal',
	      marginBottom: '4rem'
	    }, subtitleStyle, props.subtitleStyle),
	    form: {
	      flexDirection: 'row',
	      justifyContent: 'center',
	      display: 'block',
	      padding: '0 5%',
	      marginBottom: '10px'
	    },
	    input: _extends({
	      flex: '1',
	      minWidth: '45%',
	      fontSize: '1.2rem',
	      background: 'rgba(0,0,0,0)',
	      border: '2px solid ' + (textColor || '#FFF'),
	      color: textColor || '#FFF',
	      padding: '.3rem .4rem .25rem'
	    }, inputStyle, props.inputStyle),
	    button: _extends({
	      flex: '1',
	      minWidth: '10%',
	      fontSize: '1.2rem',
	      background: activeColor,
	      border: '2px solid rgba(0,0,0,0)',
	      color: textColor,
	      padding: '.3rem .8rem .25rem',
	      cursor: 'pointer'
	    }, buttonStyle, props.buttonStyle),
	    small: _extends({}, smallStyle, props.smallStyle)
	  };
	
	  if (mode === 'TEXT_ON_LEFT') {
	    styles.box.textAlign = 'left';
	  }
	
	  if (mode === 'TEXT_ON_RIGHT') {
	    styles.box.textAlign = 'right';
	  }
	
	  return styles;
	};
	
	var _styleHelpers = __webpack_require__(759);

/***/ },

/***/ 823:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styles = __webpack_require__(824);
	
	var _styles2 = _interopRequireDefault(_styles);
	
	var _reactFontawesome = __webpack_require__(782);
	
	var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);
	
	var _ = __webpack_require__(765);
	
	var _conventions = __webpack_require__(780);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var EnumerationBrick = function EnumerationBrick(props) {
	
	  var s = (0, _styles2.default)(props);
	
	  return _react2.default.createElement(
	    _.GenericBrick,
	    _extends({}, props, { contentStyle: s.container }),
	    props.children
	  );
	};
	
	EnumerationBrick.propTypes = {
	  hasHeader: _react2.default.PropTypes.bool,
	  title: _react2.default.PropTypes.string,
	  subtitle: _react2.default.PropTypes.string,
	  theme: _conventions.LandricksPropTypes.brickTheme,
	  wrapperStyle: _react2.default.PropTypes.object,
	  contentStyle: _react2.default.PropTypes.object,
	  headerStyle: _react2.default.PropTypes.object,
	  titleStyle: _react2.default.PropTypes.object,
	  subtitleStyle: _react2.default.PropTypes.object,
	  renderHeader: _react2.default.PropTypes.func,
	  children: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.element)
	};
	
	exports.default = EnumerationBrick;

/***/ },

/***/ 824:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = function (props) {
	  var _safeThemeFromProps = (0, _styleHelpers.safeThemeFromProps)(props);
	
	  var backgroundColor = _safeThemeFromProps.backgroundColor;
	  var textColor = _safeThemeFromProps.textColor;
	  var contentStyle = props.contentStyle;
	  var titleStyle = props.titleStyle;
	  var subtitleStyle = props.subtitleStyle;
	  var itemStyle = props.itemStyle;
	  var itemTextStyle = props.itemTextStyle;
	  var itemIconStyle = props.itemIconStyle;
	  var itemImageStyle = props.itemImageStyle;
	
	
	  var styles = {
	    container: _extends({
	      display: 'flex',
	      flexDirection: 'row',
	      justifyContent: 'space-around',
	      alignItems: 'center',
	      flexWrap: 'wrap'
	    }, contentStyle)
	  };
	
	  return styles;
	};
	
	var _styleHelpers = __webpack_require__(759);

/***/ },

/***/ 825:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactFontawesome = __webpack_require__(782);
	
	var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);
	
	var _styles = __webpack_require__(826);
	
	var _styles2 = _interopRequireDefault(_styles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FeatureItem = function (_Component) {
	  _inherits(FeatureItem, _Component);
	
	  function FeatureItem() {
	    _classCallCheck(this, FeatureItem);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(FeatureItem).apply(this, arguments));
	  }
	
	  _createClass(FeatureItem, [{
	    key: 'renderLabel',
	    value: function renderLabel(style, props) {
	
	      if (props.renderLabel) {
	        return props.renderLabel(style, props);
	      }
	
	      if (!props.label) {
	        return null;
	      }
	
	      return _react2.default.createElement(
	        'span',
	        { style: style.label },
	        props.label
	      );
	    }
	  }, {
	    key: 'renderIcon',
	    value: function renderIcon(style, props) {
	
	      if (props.renderIcon) {
	        return props.renderIcon(style, props);
	      }
	
	      if (!props.icon) {
	        return null;
	      }
	
	      return _react2.default.createElement(_reactFontawesome2.default, { name: props.icon, style: style.icon });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	
	      var s = (0, _styles2.default)(this.props);
	
	      var _props = this.props;
	      var icon = _props.icon;
	      var image = _props.image;
	      var title = _props.title;
	      var description = _props.description;
	
	
	      return _react2.default.createElement(
	        'div',
	        _extends({}, this.props, { style: s.wrapper }),
	        icon ? _react2.default.createElement(_reactFontawesome2.default, { name: icon, style: s.icon }) : null,
	        image ? _react2.default.createElement('img', { src: image, style: s.image }) : null,
	        _react2.default.createElement(
	          'h5',
	          { style: s.title },
	          title
	        ),
	        _react2.default.createElement(
	          'p',
	          { style: s.description },
	          description
	        )
	      );
	    }
	  }]);
	
	  return FeatureItem;
	}(_react.Component);
	
	FeatureItem.propTypes = {
	  icon: _react2.default.PropTypes.string,
	  image: _react2.default.PropTypes.string,
	  title: _react2.default.PropTypes.string,
	  description: _react2.default.PropTypes.string
	};
	
	exports.default = FeatureItem;

/***/ },

/***/ 826:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = function (props) {
	  var _safeThemeFromProps2 = (0, _styleHelpers.safeThemeFromProps)(props);
	
	  var textColor = _safeThemeFromProps2.textColor;
	  var primaryColor = _safeThemeFromProps2.primaryColor;
	  var wrapperStyle = props.wrapperStyle;
	  var iconStyle = props.iconStyle;
	  var titleStyle = props.titleStyle;
	  var descriptionStyle = props.descriptionStyle;
	  var imageStyle = props.imageStyle;
	
	
	  var styles = {
	    wrapper: _extends({}, getWrapperForDesign(props), {
	      padding: '1.7%',
	      margin: '1%',
	      textAlign: 'center',
	      minWidth: '200px',
	      flex: 1
	    }, wrapperStyle),
	    icon: _extends({
	      fontSize: '3em'
	    }, iconStyle),
	    image: _extends({
	      width: '6em'
	    }, imageStyle),
	    title: _extends({
	      fontSize: '1em',
	      fontWeight: 'bold',
	      margin: '0.5%'
	    }, titleStyle),
	    description: _extends({
	      fontSize: '0.8em',
	      fontWeight: 'normal',
	      margin: '0.5%'
	    }, descriptionStyle)
	  };
	
	  return styles;
	};
	
	var _styleHelpers = __webpack_require__(759);
	
	function getWrapperForDesign(props) {
	  var _safeThemeFromProps = (0, _styleHelpers.safeThemeFromProps)(props);
	
	  var textColor = _safeThemeFromProps.textColor;
	  var primaryColor = _safeThemeFromProps.primaryColor;
	  var primaryContrastColor = _safeThemeFromProps.primaryContrastColor;
	  var objectDesign = _safeThemeFromProps.objectDesign;
	
	
	  switch (objectDesign) {
	    case 'rounded-solid':
	      return {
	        backgroundColor: primaryColor,
	        color: primaryContrastColor,
	        borderStyle: 'none',
	        borderRadius: '30px'
	      };
	    case 'rounded-outline':
	      return {
	        backgroundColor: 'transparent',
	        borderWidth: 3,
	        borderColor: primaryColor,
	        color: primaryColor,
	        borderStyle: 'solid',
	        borderRadius: '30px'
	      };
	    case 'square-outline':
	      return {
	        backgroundColor: 'transparent',
	        borderWidth: 3,
	        borderColor: primaryColor,
	        color: primaryColor,
	        borderStyle: 'solid',
	        borderRadius: 0
	      };
	    default:
	      //square-solid
	      return {
	        backgroundColor: primaryColor,
	        color: primaryContrastColor,
	        borderStyle: 'none',
	        borderRadius: 0
	      };
	  }
	}

/***/ },

/***/ 827:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ = __webpack_require__(765);
	
	var _conventions = __webpack_require__(780);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FooterBrick = function (_Component) {
	  _inherits(FooterBrick, _Component);
	
	  function FooterBrick() {
	    _classCallCheck(this, FooterBrick);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(FooterBrick).apply(this, arguments));
	  }
	
	  _createClass(FooterBrick, [{
	    key: 'render',
	    value: function render() {
	      var _React$Children$toArr = _react2.default.Children.toArray(this.props.children);
	
	      var _React$Children$toArr2 = _slicedToArray(_React$Children$toArr, 3);
	
	      var firstChild = _React$Children$toArr2[0];
	      var secondChild = _React$Children$toArr2[1];
	      var thirdChild = _React$Children$toArr2[2];
	
	
	      return _react2.default.createElement(
	        _.TripleContentBrick,
	        _extends({}, this.props, { theme: this.props.theme, hasHeader: false }),
	        firstChild,
	        secondChild,
	        thirdChild
	      );
	    }
	  }]);
	
	  return FooterBrick;
	}(_react.Component);
	
	FooterBrick.propTypes = {
	  theme: _conventions.LandricksPropTypes.brickTheme,
	  children: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.element)
	};
	
	exports.default = FooterBrick;

/***/ },

/***/ 828:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactFontawesome = __webpack_require__(782);
	
	var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);
	
	var _ = __webpack_require__(765);
	
	var _styles = __webpack_require__(829);
	
	var _styles2 = _interopRequireDefault(_styles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var GalleryBrick = function (_Component) {
	  _inherits(GalleryBrick, _Component);
	
	  function GalleryBrick(props) {
	    _classCallCheck(this, GalleryBrick);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(GalleryBrick).call(this, props));
	
	    _this.state = { currentPage: 1 };
	    return _this;
	  }
	
	  _createClass(GalleryBrick, [{
	    key: 'calculatePages',
	    value: function calculatePages() {
	      var _props = this.props;
	      var children = _props.children;
	      var itemsPerPage = _props.itemsPerPage;
	
	
	      var pages = parseInt(children.length / itemsPerPage);
	
	      return children.length % itemsPerPage > 0 ? pages + 1 : pages;
	    }
	  }, {
	    key: 'renderItem',
	    value: function renderItem(item, key, style) {
	      return item;
	    }
	  }, {
	    key: 'renderPageOfItems',
	    value: function renderPageOfItems(items, style) {
	      var _this2 = this;
	
	      if (!items) return null;
	
	      var initial = (this.state.currentPage - 1) * this.props.itemsPerPage;
	
	      var boxItems = items.slice(initial, initial + this.props.itemsPerPage);
	
	      return boxItems.map(function (item, key) {
	        return _this2.renderItem(item, key, style);
	      });
	    }
	  }, {
	    key: 'renderPrevBtn',
	    value: function renderPrevBtn(style) {
	      var _this3 = this;
	
	      var styleCustom = {};
	      if (this.state.currentPage === 1) styleCustom = { opacity: '0', pointerEvents: 'none' };
	      return _react2.default.createElement(
	        'a',
	        {
	          style: _extends({}, style.controls, styleCustom),
	          onClick: function onClick() {
	            return _this3.setState({ currentPage: _this3.state.currentPage - 1 });
	          } },
	        _react2.default.createElement(_reactFontawesome2.default, { name: 'chevron-left' })
	      );
	    }
	  }, {
	    key: 'renderNextBtn',
	    value: function renderNextBtn(style) {
	      var _this4 = this;
	
	      var styleCustom = {};
	      if (this.state.currentPage >= this.calculatePages()) styleCustom = { opacity: '0', pointerEvents: 'none' };
	      return _react2.default.createElement(
	        'a',
	        {
	          style: _extends({}, style.controls, styleCustom),
	          onClick: function onClick() {
	            return _this4.setState({ currentPage: _this4.state.currentPage + 1 });
	          } },
	        _react2.default.createElement(_reactFontawesome2.default, { name: 'chevron-right' })
	      );
	    }
	  }, {
	    key: 'renderIndicators',
	    value: function renderIndicators(style) {
	      var _this5 = this;
	
	      var currentPage = this.state.currentPage;
	
	      var count = [].concat(_toConsumableArray(Array(this.calculatePages()).keys()));
	
	      if (this.calculatePages() < 2) return null;
	
	      return count.map(function (item) {
	        return _react2.default.createElement(_reactFontawesome2.default, {
	          style: style.indicator,
	          onClick: function onClick() {
	            return _this5.setState({ currentPage: item + 1 });
	          },
	          name: currentPage === item + 1 ? 'circle' : 'circle-o'
	        });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var style = (0, _styles2.default)(this.props);
	
	      var items = this.props.children;
	
	      return _react2.default.createElement(
	        _.GenericBrick,
	        _extends({}, this.props, { contentStyle: style.container }),
	        _react2.default.createElement(
	          'div',
	          { style: style.wrapper },
	          this.renderPrevBtn(style),
	          _react2.default.createElement(
	            'div',
	            { style: style.pageWrapper },
	            this.renderPageOfItems(items, style)
	          ),
	          this.renderNextBtn(style)
	        ),
	        this.renderIndicators(style)
	      );
	    }
	  }]);
	
	  return GalleryBrick;
	}(_react.Component);
	
	GalleryBrick.propTypes = {
	  title: _react2.default.PropTypes.string,
	  subtitle: _react2.default.PropTypes.string,
	  items: _react2.default.PropTypes.array,
	  itemsPerPage: _react2.default.PropTypes.number
	};
	
	exports.default = GalleryBrick;

/***/ },

/***/ 829:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = function (props) {
	  var _safeThemeFromProps2 = (0, _styleHelpers.safeThemeFromProps)(props);
	
	  var textColor = _safeThemeFromProps2.textColor;
	  var primaryColor = _safeThemeFromProps2.primaryColor;
	  var fontSize = _safeThemeFromProps2.fontSize;
	  var indicatorColor = _safeThemeFromProps2.indicatorColor;
	  var controlsColor = _safeThemeFromProps2.controlsColor;
	  var wrapperStyle = props.wrapperStyle;
	  var iconStyle = props.iconStyle;
	  var titleStyle = props.titleStyle;
	  var descriptionStyle = props.descriptionStyle;
	  var itemStyle = props.itemStyle;
	  var pageWrapperStyle = props.pageWrapperStyle;
	
	
	  var styles = {
	    wrapper: _extends({}, getWrapperForDesign(props), {
	      textAlign: 'center',
	      minHeigh: '200px',
	      display: 'flex',
	      padding: '2%',
	      flexDirection: 'row',
	      flex: 1
	    }, wrapperStyle),
	    container: {
	      flexDirection: 'column',
	      textAlign: 'center',
	      backgroundColor: primaryColor || '#fff'
	    },
	    pageWrapper: _extends({
	      flex: 5,
	      display: 'flex'
	    }, pageWrapperStyle),
	    controls: {
	      alignSelf: 'center',
	      margin: '0 15px',
	      fontSize: '2.5rem',
	      color: controlsColor || '#000'
	    },
	    itemWrapper: {
	      flex: 1,
	      margin: '20px',
	      flexGrow: 1,
	      flexBasis: 'auto',
	      alignSelf: 'center'
	    },
	    item: _extends({
	      maxWidth: '100%',
	      maxHeight: '100%',
	      minHeight: 100,
	      minWidth: 100
	    }, itemStyle),
	    center: _defineProperty({
	      textAlign: 'center',
	      alignSelf: 'center',
	      padding: '25px',
	      backgroundColor: primaryColor || '#fff'
	    }, 'padding', 0),
	    indicator: {
	      margin: '0 5px',
	      color: indicatorColor || "#000"
	    }
	  };
	
	  return styles;
	};
	
	var _styleHelpers = __webpack_require__(759);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function getWrapperForDesign(props) {
	  var _safeThemeFromProps = (0, _styleHelpers.safeThemeFromProps)(props);
	
	  var textColor = _safeThemeFromProps.textColor;
	  var primaryColor = _safeThemeFromProps.primaryColor;
	  var primaryContrastColor = _safeThemeFromProps.primaryContrastColor;
	  var objectDesign = _safeThemeFromProps.objectDesign;
	
	
	  switch (objectDesign) {
	    case 'rounded-solid':
	      return {
	        backgroundColor: primaryColor,
	        color: primaryContrastColor,
	        borderStyle: 'none',
	        borderRadius: '30px'
	      };
	    case 'rounded-outline':
	      return {
	        backgroundColor: 'transparent',
	        borderWidth: 3,
	        borderColor: primaryColor,
	        color: primaryColor,
	        borderStyle: 'solid',
	        borderRadius: '30px'
	      };
	    case 'square-outline':
	      return {
	        backgroundColor: 'transparent',
	        borderWidth: 3,
	        borderColor: primaryColor,
	        color: primaryColor,
	        borderStyle: 'solid',
	        borderRadius: 0
	      };
	    default:
	      //square-solid
	      return {
	        backgroundColor: primaryColor,
	        color: primaryContrastColor,
	        borderStyle: 'none',
	        borderRadius: 0
	      };
	  }
	}

/***/ },

/***/ 830:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ = __webpack_require__(765);
	
	var _conventions = __webpack_require__(780);
	
	var _styles = __webpack_require__(831);
	
	var _styles2 = _interopRequireDefault(_styles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var GenericBrick = function (_Component) {
	  _inherits(GenericBrick, _Component);
	
	  function GenericBrick() {
	    _classCallCheck(this, GenericBrick);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(GenericBrick).apply(this, arguments));
	  }
	
	  _createClass(GenericBrick, [{
	    key: 'renderHeader',
	    value: function renderHeader(styles, props) {
	
	      if (!props.hasHeader) {
	        return null;
	      }
	
	      if (props.renderHeader) {
	        return props.renderHeader(styles, props);
	      }
	
	      return _react2.default.createElement(
	        'div',
	        { style: styles.header },
	        _react2.default.createElement(
	          'h3',
	          { style: styles.title },
	          props.title
	        ),
	        _react2.default.createElement(
	          'p',
	          { style: styles.subtitle },
	          props.subtitle
	        )
	      );
	    }
	  }, {
	    key: 'renderContent',
	    value: function renderContent(styles, props) {
	
	      if (props.renderContent) {
	        return props.renderContent(styles, props);
	      }
	
	      return _react2.default.createElement(
	        _.ThemePropagator,
	        _extends({}, props, { wrapperStyle: styles.content }),
	        props.children
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	
	      var s = (0, _styles2.default)(this.props);
	
	      return _react2.default.createElement(
	        'section',
	        _extends({}, this.props, { style: s.wrapper }),
	        _react2.default.createElement(
	          'div',
	          { style: s.canvas },
	          this.renderHeader(s, this.props),
	          this.renderContent(s, this.props)
	        )
	      );
	    }
	  }]);
	
	  return GenericBrick;
	}(_react.Component);
	
	GenericBrick.propTypes = {
	  hasHeader: _react2.default.PropTypes.bool,
	  title: _react2.default.PropTypes.string,
	  subtitle: _react2.default.PropTypes.string,
	  theme: _conventions.LandricksPropTypes.brickTheme,
	  wrapperStyle: _react2.default.PropTypes.object,
	  contentStyle: _react2.default.PropTypes.object,
	  headerStyle: _react2.default.PropTypes.object,
	  titleStyle: _react2.default.PropTypes.object,
	  subtitleStyle: _react2.default.PropTypes.object,
	  renderContent: _react2.default.PropTypes.func,
	  renderHeader: _react2.default.PropTypes.func
	};
	
	GenericBrick.defaultProps = {
	  hasHeader: true
	};
	
	exports.default = GenericBrick;

/***/ },

/***/ 831:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = function (props) {
	  var _safeThemeFromProps = (0, _styleHelpers.safeThemeFromProps)(props);
	
	  var fontFamily = _safeThemeFromProps.fontFamily;
	  var baseFontSize = _safeThemeFromProps.baseFontSize;
	  var backgroundColor = _safeThemeFromProps.backgroundColor;
	  var textColor = _safeThemeFromProps.textColor;
	  var backgroundImage = props.backgroundImage;
	  var wrapperStyle = props.wrapperStyle;
	  var contentStyle = props.contentStyle;
	  var headerStyle = props.headerStyle;
	  var titleStyle = props.titleStyle;
	  var subtitleStyle = props.subtitleStyle;
	
	
	  var styles = {
	    wrapper: _extends({
	      fontFamily: fontFamily,
	      fontSize: baseFontSize,
	      backgroundColor: backgroundColor,
	      backgroundImage: 'url(' + backgroundImage + ')',
	      backgroundSize: 'cover',
	      color: textColor,
	      padding: '5%'
	    }, wrapperStyle),
	    content: _extends({}, contentStyle),
	    header: _extends({
	      textAlign: 'center'
	    }, headerStyle),
	    title: _extends({
	      margin: '1%',
	      fontSize: '1.2rem',
	      fontWeight: 'bold'
	    }, titleStyle),
	    subtitle: _extends({
	      margin: '1%',
	      fontSize: '1rem',
	      fontWeight: 'normal',
	      marginBottom: '2rem'
	    }, subtitleStyle)
	  };
	
	  return styles;
	};
	
	var _styleHelpers = __webpack_require__(759);

/***/ },

/***/ 832:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactHelmet = __webpack_require__(278);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function calculateViewportFromWindow() {
	  if (typeof window !== 'undefined') {
	    var size = window.innerWidth;
	    if (size < 544) return 'xs';
	    if (size >= 544 && size < 768) return 'sm';
	    if (size >= 768 && size < 992) return 'md';
	    if (size >= 992 && size < 1200) return 'lg';
	    if (size >= 1200) return 'xl';
	  } else {
	    return null;
	  }
	}
	
	function renderAugmentedChildren(props) {
	  return _react2.default.Children.map(props.children, function (child) {
	    if (!child) return null;
	    return _react2.default.cloneElement(child, { viewport: calculateViewportFromWindow() });
	  });
	}
	
	var LandingCanvas = function LandingCanvas(props) {
	  return _react2.default.createElement(
	    'div',
	    { style: props.wrapperStyle },
	    _react2.default.createElement(_reactHelmet2.default, {
	      link: [{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato' }, { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css' }]
	    }),
	    renderAugmentedChildren(props)
	  );
	};
	
	exports.default = LandingCanvas;

/***/ },

/***/ 833:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactFontawesome = __webpack_require__(782);
	
	var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);
	
	var _styler = __webpack_require__(834);
	
	var _styler2 = _interopRequireDefault(_styler);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var NavigationBrick = function (_Component) {
		_inherits(NavigationBrick, _Component);
	
		function NavigationBrick(props) {
			_classCallCheck(this, NavigationBrick);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NavigationBrick).call(this, props));
	
			_this.state = {
				open: false
			};
			return _this;
		}
	
		_createClass(NavigationBrick, [{
			key: 'renderItem',
			value: function renderItem(item, index, style) {
				var _this2 = this;
	
				return _react2.default.createElement(
					'li',
					{ onClick: function onClick() {
							return _this2.setState({ open: false });
						}, style: item.highlight ? style.itemHighlight : style.item, key: index },
					item.href ? _react2.default.createElement(
						'a',
						{ style: style.itemLink, href: item.href },
						item.label
					) : null,
					item.onClick ? _react2.default.createElement(
						'button',
						{ style: style.itemLink, onClick: function onClick() {
								return item.onClick();
							} },
						item.label
					) : null
				);
			}
		}, {
			key: 'renderItems',
			value: function renderItems(style, items) {
				var _this3 = this;
	
				if (!items) return null;
				return items.map(function (item, index) {
					return _this3.renderItem(item, index, style);
				});
			}
		}, {
			key: 'renderNavigation',
			value: function renderNavigation(style, items, isCollapsed) {
				return _react2.default.createElement(
					'ul',
					{ style: _extends({}, style.navigationContainer, isCollapsed ? style.collapsedContainer : {}) },
					this.renderItems(style, items)
				);
			}
		}, {
			key: 'renderLogo',
			value: function renderLogo(style) {
				var _props = this.props;
				var logo = _props.logo;
				var brand = _props.brand;
	
				return _react2.default.createElement(
					'span',
					{ style: style.collapsedHeader },
					logo ? _react2.default.createElement('img', { style: style.logo, src: logo }) : null,
					brand ? _react2.default.createElement(
						'span',
						{ style: style.brand },
						brand
					) : null
				);
			}
		}, {
			key: 'renderFullWidth',
			value: function renderFullWidth(style) {
				return _react2.default.createElement(
					'nav',
					{ style: style.box },
					_react2.default.createElement(
						'div',
						{ style: style.boxContent },
						_react2.default.createElement(
							'ul',
							{ style: style.logoContainer },
							this.renderLogo(style)
						),
						this.renderNavigation(style, this.props.items, false)
					)
				);
			}
		}, {
			key: 'renderCollapsed',
			value: function renderCollapsed(style) {
				var _this4 = this;
	
				return _react2.default.createElement(
					'nav',
					{ style: style.collapsed.box },
					_react2.default.createElement(_reactFontawesome2.default, { name: this.state.open ? 'times' : 'bars', style: style.menuIcon, onClick: function onClick() {
							return _this4.setState({ open: !_this4.state.open });
						} }),
					this.renderLogo(style),
					this.renderCollapsedContent(style)
				);
			}
		}, {
			key: 'renderCollapsedContent',
			value: function renderCollapsedContent(style) {
				var visible = _extends({}, style.menuContent, this.state.open ? style.menuOpen : '');
				return _react2.default.createElement(
					'div',
					{ style: visible },
					this.renderNavigation(style, this.props.items, true)
				);
			}
		}, {
			key: 'render',
			value: function render() {
				var style = (0, _styler2.default)(this.props);
				var viewport = this.props.viewport;
	
	
				return viewport == 'xs' || viewport == 'sm' ? this.renderCollapsed(style) : this.renderFullWidth(style);
			}
		}]);
	
		return NavigationBrick;
	}(_react.Component);
	
	exports.default = NavigationBrick;

/***/ },

/***/ 834:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = function (props) {
	  var _safeThemeFromProps = (0, _styleHelpers.safeThemeFromProps)(props);
	
	  var backgroundColor = _safeThemeFromProps.backgroundColor;
	  var textColor = _safeThemeFromProps.textColor;
	  var activeColor = _safeThemeFromProps.activeColor;
	  var contentStyle = _safeThemeFromProps.contentStyle;
	  var itemStyle = _safeThemeFromProps.itemStyle;
	  var itemHighlightStyle = _safeThemeFromProps.itemHighlightStyle;
	  var logoStyle = _safeThemeFromProps.logoStyle;
	  var brandStyle = _safeThemeFromProps.brandStyle;
	  var mode = props.mode;
	  var barContentStyle = props.barContentStyle;
	
	
	  var styles = {
	    box: {
	      position: 'fixed',
	      top: 0,
	      left: 0,
	      width: '100%',
	      height: 'auto',
	      zIndex: 1000
	    },
	    boxContent: _extends({
	      background: backgroundColor || 'rgba(0,0,0,0)',
	      color: textColor,
	      padding: '0 5%',
	      display: 'flex',
	      flexDirection: 'row',
	      justifyContent: 'space-between',
	      alignItems: 'center'
	    }, contentStyle, props.contentStyle),
	    logoContainer: {
	      margin: 0,
	      padding: 0,
	      listStyle: 'none',
	      flex: '0 1 auto'
	    },
	    navigationContainer: {
	      margin: 0,
	      padding: 0,
	      listStyle: 'none',
	      flex: '0 1 auto',
	      textAlign: 'right'
	    },
	    item: _extends({
	      display: 'inline-block',
	      padding: '15px',
	      fontSize: '16px'
	    }, itemStyle, props.itemStyle),
	    itemHighlight: _extends({
	      display: 'inline-block',
	      padding: '7px 12px',
	      fontSize: '16px',
	      margin: '8px',
	      background: activeColor,
	      borderRadius: '2px'
	    }, itemHighlightStyle, props.itemHighlightStyle),
	    itemLink: {
	      color: textColor,
	      textDecoration: 'none',
	      border: 'none',
	      background: 'transparent'
	    },
	    logo: _extends({
	      height: '50px',
	      width: 'auto',
	      float: 'left'
	    }, logoStyle, props.logoStyle),
	    brand: _extends({
	      fontSize: '18px',
	      fontWeight: 'bold',
	      lineHeight: '50px',
	      display: 'inline-block',
	      marginLeft: '10px'
	    }, brandStyle, props.brandStyle),
	    collapsed: {
	      box: _extends({
	        position: 'fixed',
	        top: 0,
	        left: 0,
	        width: '100%',
	        height: '10vh',
	        zIndex: 1000,
	        background: backgroundColor || '#37474f',
	        display: 'flex'
	      }, props.contentStyle)
	    },
	    menuContent: {
	      position: 'fixed',
	      height: '90vh',
	      top: '10vh',
	      width: '60%',
	      left: '-60%',
	      transition: 'left .5s',
	      backgroundColor: backgroundColor || '#37474f'
	    },
	    collapsedContainer: {
	      display: 'flex',
	      flexDirection: 'column',
	      textAlign: 'center',
	      paddingTop: '5vh'
	    },
	    menuOpen: {
	      left: 0
	    },
	    menuIcon: _extends({
	      color: textColor || '#fff',
	      fontSize: '1.8rem',
	      margin: 15,
	      position: 'absolute',
	      top: 0
	    }, props.iconStyle),
	    collapsedHeader: _extends({
	      display: 'flex',
	      justifyContent: 'center',
	      alignItems: 'center',
	      width: '100%'
	    }, barContentStyle)
	  };
	
	  return styles;
	};
	
	var _styleHelpers = __webpack_require__(759);

/***/ },

/***/ 835:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styles = __webpack_require__(836);
	
	var _styles2 = _interopRequireDefault(_styles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var PlaceHolder = function PlaceHolder(props) {
	
	  var s = (0, _styles2.default)(props);
	
	  if (props.useLoremIpsum) {
	    return _react2.default.createElement(
	      'p',
	      { style: { padding: '10%' } },
	      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a augue ex. Donec tortor erat, placerat non dolor quis, porta vestibulum massa. Suspendisse potenti. Etiam bibendum vel magna ac molestie. In lacinia dui vitae sem suscipit, ut fermentum nulla scelerisque. In sollicitudin placerat purus sit amet porttitor. Aenean id quam augue. In maximus ultrices pretium. Aliquam erat volutpat.'
	    );
	  }
	
	  return _react2.default.createElement(
	    'div',
	    { style: s.wrapper },
	    _react2.default.createElement(
	      'div',
	      null,
	      props.label
	    )
	  );
	};
	
	PlaceHolder.propTypes = {
	  wrapperStyle: _react2.default.PropTypes.object,
	  label: _react2.default.PropTypes.string,
	  useLoremIpsum: _react2.default.PropTypes.bool
	};
	
	PlaceHolder.defaultProps = {
	  label: 'content placeholder',
	  useLoremIpsum: false
	};
	
	exports.default = PlaceHolder;

/***/ },

/***/ 836:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _styleHelpers = __webpack_require__(759);
	
	exports.default = function (props) {
	  var _safeThemeFromProps = (0, _styleHelpers.safeThemeFromProps)(props);
	
	  var primaryColor = _safeThemeFromProps.primaryColor;
	  var wrapperStyle = props.wrapperStyle;
	
	
	  return {
	    wrapper: _extends({
	      borderStyle: 'dashed',
	      borderWidth: 3,
	      borderColor: primaryColor,
	      display: 'flex',
	      width: '100%',
	      height: '100%',
	      minHeight: '200px',
	      justifyContent: 'center',
	      alignItems: 'center'
	    }, wrapperStyle)
	  };
	};

/***/ },

/***/ 837:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styles = __webpack_require__(838);
	
	var _styles2 = _interopRequireDefault(_styles);
	
	var _ = __webpack_require__(765);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var StrongMessageBrick = function (_Component) {
	  _inherits(StrongMessageBrick, _Component);
	
	  function StrongMessageBrick() {
	    _classCallCheck(this, StrongMessageBrick);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(StrongMessageBrick).apply(this, arguments));
	  }
	
	  _createClass(StrongMessageBrick, [{
	    key: 'renderMessageLevel1',
	    value: function renderMessageLevel1(styles, props) {
	
	      if (props.renderMessageLevel1) {
	        return props.renderMessageLevel1(styles, props);
	      }
	
	      return _react2.default.createElement(
	        'h1',
	        { style: styles.messageLevel1 },
	        props.messageLevel1
	      );
	    }
	  }, {
	    key: 'renderMessageLevel2',
	    value: function renderMessageLevel2(styles, props) {
	
	      if (!props.messageLevel2) {
	        return null;
	      }
	
	      if (props.renderMessageLevel2) {
	        return props.renderMessageLevel2(styles, props);
	      }
	
	      return _react2.default.createElement(
	        'h2',
	        { style: styles.messageLevel2 },
	        props.messageLevel2
	      );
	    }
	  }, {
	    key: 'renderCTAs',
	    value: function renderCTAs(styles, props) {
	
	      if (props.renderCTAs) {
	        return props.renderCTAs(styles, props);
	      }
	
	      if (!props.CTAs) {
	        return null;
	      }
	
	      return _react2.default.createElement(
	        _.ThemePropagator,
	        null,
	        props.CTAs
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	
	      var s = (0, _styles2.default)(this.props);
	
	      return _react2.default.createElement(
	        _.GenericBrick,
	        _extends({}, this.props, { contentStyle: s.content, hasHeader: false }),
	        this.renderMessageLevel1(s, this.props),
	        this.renderMessageLevel2(s, this.props),
	        this.renderCTAs(s, this.props)
	      );
	    }
	  }]);
	
	  return StrongMessageBrick;
	}(_react.Component);
	
	StrongMessageBrick.propTypes = {
	  messageLevel1: _react2.default.PropTypes.string.isRequired,
	  messageLevel2: _react2.default.PropTypes.string
	};
	
	StrongMessageBrick.defaultProps = {
	  messageLevel1: 'This is my Strong Message'
	};
	
	exports.default = StrongMessageBrick;

/***/ },

/***/ 838:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = function (props) {
	  var _safeThemeFromProps = (0, _styleHelpers.safeThemeFromProps)(props);
	
	  var textColor = _safeThemeFromProps.textColor;
	  var messageLevel1Style = props.messageLevel1Style;
	  var messageLevel2Style = props.messageLevel2Style;
	  var contentStyle = props.contentStyle;
	
	
	  var styles = {
	    messageLevel1: _extends({
	      fontSize: '2.25em',
	      fontWeight: 'bold',
	      margin: '1.5%',
	      color: textColor
	    }, messageLevel1Style),
	    messageLevel2: _extends({
	      fontSize: '1.2em',
	      fontWeight: 'normal',
	      lineHeight: '1.5rem',
	      margin: '1.5%',
	      color: textColor
	    }, messageLevel2Style),
	    content: _extends({
	      textAlign: 'center'
	    }, contentStyle)
	  };
	
	  return styles;
	};
	
	var _styleHelpers = __webpack_require__(759);

/***/ },

/***/ 839:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function renderThemedChildren(props) {
	  return _react2.default.Children.map(props.children, function (child) {
	    if (!child) return null;
	    return _react2.default.cloneElement(child, { theme: props.theme });
	  });
	}
	
	var ThemePropagator = function ThemePropagator(props) {
	  return _react2.default.createElement(
	    'div',
	    { style: props.wrapperStyle },
	    renderThemedChildren(props)
	  );
	};
	
	ThemePropagator.propTypes = {
	  wrapperStyle: _react2.default.PropTypes.object,
	  children: _react2.default.PropTypes.node
	};
	
	exports.default = ThemePropagator;

/***/ },

/***/ 840:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styles = __webpack_require__(841);
	
	var _styles2 = _interopRequireDefault(_styles);
	
	var _ = __webpack_require__(765);
	
	var _conventions = __webpack_require__(780);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TripleContentBrick = function (_Component) {
	  _inherits(TripleContentBrick, _Component);
	
	  function TripleContentBrick() {
	    _classCallCheck(this, TripleContentBrick);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(TripleContentBrick).apply(this, arguments));
	  }
	
	  _createClass(TripleContentBrick, [{
	    key: 'renderFirstContent',
	    value: function renderFirstContent(firstChild, parentStyles, parentProps) {
	
	      if (parentProps.renderFirstContent) {
	        return parentProps.renderFirstContent(firstChild, parentStyles, parentProps);
	      }
	
	      return _react2.default.createElement(
	        _.ThemePropagator,
	        _extends({}, parentProps, { wrapperStyle: { flex: 1 } }),
	        firstChild
	      );
	    }
	  }, {
	    key: 'renderSecondContent',
	    value: function renderSecondContent(secondChild, parentStyles, parentProps) {
	
	      if (parentProps.renderSecondContent) {
	        return parentProps.renderSecondContent(secondChild, parentStyles, parentProps);
	      }
	
	      return _react2.default.createElement(
	        _.ThemePropagator,
	        _extends({}, parentProps, { wrapperStyle: { flex: 1 } }),
	        secondChild
	      );
	    }
	  }, {
	    key: 'renderThirdContent',
	    value: function renderThirdContent(thirdChild, parentStyles, parentProps) {
	
	      if (parentProps.renderSecondContent) {
	        return parentProps.renderSecondContent(thirdChild, parentStyles, parentProps);
	      }
	
	      return _react2.default.createElement(
	        _.ThemePropagator,
	        _extends({}, parentProps, { wrapperStyle: { flex: 1 } }),
	        thirdChild
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	
	      var s = (0, _styles2.default)(this.props);
	
	      var _React$Children$toArr = _react2.default.Children.toArray(this.props.children);
	
	      var _React$Children$toArr2 = _slicedToArray(_React$Children$toArr, 3);
	
	      var firstChild = _React$Children$toArr2[0];
	      var secondChild = _React$Children$toArr2[1];
	      var thirdChild = _React$Children$toArr2[2];
	
	
	      return _react2.default.createElement(
	        _.GenericBrick,
	        this.props,
	        _react2.default.createElement(
	          'div',
	          { style: { display: 'flex', flexDirection: 'row', flexWrap: 'wrap' } },
	          this.renderFirstContent(firstChild, s, this.props),
	          this.renderSecondContent(secondChild, s, this.props),
	          this.renderThirdContent(thirdChild, s, this.props)
	        )
	      );
	    }
	  }]);
	
	  return TripleContentBrick;
	}(_react.Component);
	
	TripleContentBrick.propTypes = {
	  hasHeader: _react2.default.PropTypes.bool,
	  title: _react2.default.PropTypes.string,
	  subtitle: _react2.default.PropTypes.string,
	  theme: _conventions.LandricksPropTypes.brickTheme,
	  wrapperStyle: _react2.default.PropTypes.object,
	  contentStyle: _react2.default.PropTypes.object,
	  headerStyle: _react2.default.PropTypes.object,
	  titleStyle: _react2.default.PropTypes.object,
	  subtitleStyle: _react2.default.PropTypes.object,
	  renderHeader: _react2.default.PropTypes.func,
	  children: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.element)
	};
	
	exports.default = TripleContentBrick;

/***/ },

/***/ 841:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (props) {
	
	  var styles = {};
	
	  return styles;
	};
	
	var _styleHelpers = __webpack_require__(759);

/***/ },

/***/ 928:
/***/ function(module, exports) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  position: 'absolute',
	  width: '1px',
	  height: '1px',
	  padding: '0px',
	  margin: '-1px',
	  overflow: 'hidden',
	  clip: 'rect(0px, 0px, 0px, 0px)',
	  border: '0px'
	};
	module.exports = exports['default'];

/***/ },

/***/ 932:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "588dd433b0d32f56235d81ba17f0a11c.jpg";

/***/ }

});