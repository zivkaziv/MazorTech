exports.ids = [3];
exports.modules = {

/***/ 99:
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
	
	var _reactRouter = __webpack_require__(3);
	
	var _reactRedux = __webpack_require__(1);
	
	var _landricksComponents = __webpack_require__(104);
	
	var _background = '/' + "588dd433b0d32f56235d81ba17f0a11c.jpg";
	
	var _background2 = _interopRequireDefault(_background);
	
	var _RaisedButton = __webpack_require__(43);
	
	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
	
	var _getMuiTheme = __webpack_require__(45);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	var _lightBaseTheme = __webpack_require__(44);
	
	var _lightBaseTheme2 = _interopRequireDefault(_lightBaseTheme);
	
	var _IconSvg = __webpack_require__(42);
	
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
	  backgroundImage: '' + _background2.default
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
	              title: 'Feature 1',
	              description: 'bla bla bla bla bla'
	            }),
	            _react2.default.createElement(_landricksComponents.FeatureItem, {
	              icon: 'rocket',
	              title: 'Feature 2',
	              description: 'bla bla bla bla bla'
	            }),
	            _react2.default.createElement(_landricksComponents.FeatureItem, {
	              icon: 'rocket',
	              title: 'Feature 3',
	              description: 'bla bla bla bla bla'
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
	            title: 'Join our Newsletter',
	            subtitle: 'To get updates about what we want you to know about',
	            theme: HEAVY_BAND_THEME,
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

/***/ }

};;