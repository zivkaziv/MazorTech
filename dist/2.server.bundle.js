exports.ids = [2];
exports.modules = {

/***/ 103:
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
	
	
	// Import Components
	// import PostList from '../../components/PostList';
	
	// Import Actions
	// import { toggleAddPost } from '../../../App/AppActions';
	
	// Import Selectors
	// import { getShowAddPost } from '../../../App/AppReducer';
	// import { getPosts } from '../../PostReducer';
	
	//images
	// Import Images
	
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(3);
	
	var _reactRedux = __webpack_require__(1);
	
	var _landricksComponents = __webpack_require__(111);
	
	var _background_city = '/' + "588dd433b0d32f56235d81ba17f0a11c.jpg";
	
	var _background_city2 = _interopRequireDefault(_background_city);
	
	var _RaisedButton = __webpack_require__(44);
	
	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
	
	var _getMuiTheme = __webpack_require__(46);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	var _lightBaseTheme = __webpack_require__(45);
	
	var _lightBaseTheme2 = _interopRequireDefault(_lightBaseTheme);
	
	var _IconSvg = __webpack_require__(51);
	
	var _IconSvg2 = _interopRequireDefault(_IconSvg);
	
	var _owl_logo_white = "data:image/png;base64,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";
	
	var _owl_logo_white2 = _interopRequireDefault(_owl_logo_white);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
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
	  backgroundColor: '#699aad',
	  textColor: '#FFFFFF',
	  primaryColor: '#FFFFFF',
	  primaryContrastColor: '#000000',
	  secondaryColor: '#C99DA3',
	  objectDesign: 'square-outline'
	});
	
	var LIGHT_BAND_THEME = _extends({}, BASE_THEME, {
	  backgroundColor: '#8fcfe8',
	  // textColor: '#888888',
	  textColor: '#FFFFFF',
	  primaryColor: '#996888',
	  secondaryColor: '#C99DA3'
	});
	
	var styles = {
	  homePageContainer: {
	    background: 'url("http://wallpapercave.com/wp/2N8Zebr.jpg") no-repeat center',
	    textAlign: 'center',
	    height: '100%',
	    paddingTop: '5%'
	    // position:'fixed',
	    // top:0,
	    // left:0,
	    // right:0,
	    // bottom:0
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
	  },
	  callForAction: {
	    color: '#71A2B6'
	  },
	  callForActionContainer: {
	    marginTop: '60px'
	  },
	  logoContainer: {},
	  logoTitleContainer: {
	    display: 'flex',
	    alignItems: 'center',
	    justifyContent: 'center'
	  },
	  logoImage: {
	    height: '90px',
	    marginRight: '20px'
	  },
	  logoTitle: {
	    fontSize: '25px',
	    fontWeight: 'bold'
	  },
	  logoTagline: {
	    marginTop: '10px',
	    fontSize: '14px'
	  }
	};
	
	var LandingPage = function (_Component) {
	  _inherits(LandingPage, _Component);
	
	  function LandingPage(props) {
	    _classCallCheck(this, LandingPage);
	
	    var _this = _possibleConstructorReturn(this, (LandingPage.__proto__ || Object.getPrototypeOf(LandingPage)).call(this, props));
	
	    _this.state = {};
	
	    _this.goToWizard = _this.goToWizard.bind(_this);
	    return _this;
	  }
	
	  _createClass(LandingPage, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        muiTheme: (0, _getMuiTheme2.default)(_lightBaseTheme2.default)
	      };
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.context.mixpanel.track('Homepage login', { 'ab_version': 'v1' });
	    }
	  }, {
	    key: 'goToWizard',
	    value: function goToWizard() {
	      this.context.mixpanel.track('Homepage login');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _landricksComponents.LandingCanvas,
	        { wrapperStyle: {
	            width: '100%'
	          } },
	        _react2.default.createElement(
	          _landricksComponents.GenericBrick,
	          {
	            theme: HEADER_BAND_THEME,
	            wrapperStyle: styles.homePageContainer },
	          _react2.default.createElement(
	            _landricksComponents.ThemePropagator,
	            null,
	            _react2.default.createElement(
	              'div',
	              { style: styles.logoContainer },
	              _react2.default.createElement(
	                'div',
	                { style: styles.logoTitleContainer },
	                _react2.default.createElement('img', { src: _owl_logo_white2.default, style: styles.logoImage }),
	                _react2.default.createElement(
	                  'span',
	                  { style: styles.logoTitle },
	                  'Insurights'
	                )
	              ),
	              _react2.default.createElement(
	                'div',
	                { style: styles.logoTagline },
	                'Be informed. Be healthier'
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { style: styles.callForActionContainer },
	              _react2.default.createElement(
	                'div',
	                { style: {
	                    fontSize: '30px'
	                  } },
	                'Find your medical rights'
	              ),
	              _react2.default.createElement(
	                'div',
	                { style: {
	                    fontSize: '20px',
	                    marginBottom: '20px'
	                  } },
	                'Easy way to see your medical rights based on your Doctor\'s diagnostic'
	              ),
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: '/wizard', style: styles.callForAction },
	                _react2.default.createElement(_landricksComponents.CallToAction, {
	                  wrapperStyle: {
	                    backgroundColor: 'white',
	                    color: '#71A2B6'
	                  },
	                  label: 'Get started',
	                  onClick: this.goToWizard })
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _landricksComponents.DoubleContentBrick,
	          { theme: HEAVY_BAND_THEME, hasHeader: false },
	          _react2.default.createElement(
	            _landricksComponents.ThemePropagator,
	            null,
	            _react2.default.createElement(
	              'h1',
	              null,
	              'Our vision'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              'We aim to improve human health by being the most accessible platform for dependable and accurate medical rights information.'
	            )
	          ),
	          _react2.default.createElement(_landricksComponents.PlaceHolder, {
	            label: '',
	            wrapperStyle: {
	              background: 'url("http://www.freepngimg.com/thumb/vision/3-2-vision-free-download-png-thumb.png") no-repeat center',
	              border: 'none'
	            } })
	        ),
	        _react2.default.createElement(
	          _landricksComponents.DoubleContentBrick,
	          { theme: LIGHT_BAND_THEME, hasHeader: false },
	          _react2.default.createElement(_landricksComponents.PlaceHolder, {
	            label: '',
	            wrapperStyle: {
	              background: 'url("https://nelioabtesting.com/wp-content/uploads/2014/07/goal-icon.png") no-repeat center',
	              border: 'none'
	            } }),
	          _react2.default.createElement(
	            _landricksComponents.ThemePropagator,
	            { wrapperStyle: { marginLeft: '20px' } },
	            _react2.default.createElement(
	              'h1',
	              null,
	              'Our goal'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              'Every insurance policy is different and often very hard to interpret - We want to improve your health by rising your awareness to your medical rights..'
	            )
	          )
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
	  router: _react2.default.PropTypes.object,
	  mixpanel: _react2.default.PropTypes.object
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(LandingPage);

/***/ }

};;