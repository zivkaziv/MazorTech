exports.ids = [3];
exports.modules = {

/***/ 102:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(3);
	
	var _reactRedux = __webpack_require__(1);
	
	var _RaisedButton = __webpack_require__(44);
	
	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
	
	var _getMuiTheme = __webpack_require__(46);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	var _lightBaseTheme = __webpack_require__(45);
	
	var _lightBaseTheme2 = _interopRequireDefault(_lightBaseTheme);
	
	var _IconSvg = __webpack_require__(51);
	
	var _IconSvg2 = _interopRequireDefault(_IconSvg);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Material
	
	
	// Import Components
	// import PostList from '../../components/PostList';
	
	// Import Actions
	// import { toggleAddPost } from '../../../App/AppActions';
	
	// Import Selectors
	// import { getShowAddPost } from '../../../App/AppReducer';
	// import { getPosts } from '../../PostReducer';
	
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
	
	var HomePage = function (_Component) {
	  _inherits(HomePage, _Component);
	
	  function HomePage(props) {
	    _classCallCheck(this, HomePage);
	
	    var _this = _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call(this, props));
	
	    _this.state = {};
	
	    _this.componentDidMount = _this.componentDidMount.bind(_this);
	    _this.goToWizard = _this.goToWizard.bind(_this);
	    return _this;
	  }
	
	  _createClass(HomePage, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        muiTheme: (0, _getMuiTheme2.default)(_lightBaseTheme2.default)
	      };
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.context.mixpanel.track('Homepage login');
	    }
	    //
	    // handleDeletePost = post => {
	    //   if (confirm('Do you want to delete this post')) { // eslint-disable-line
	    //     this.props.dispatch(deletePostRequest(post));
	    //   }
	    // };
	    //
	    // handleAddPost = (name, title, content) => {
	    //   this.props.dispatch(toggleAddPost());
	    //   this.props.dispatch(addPostRequest({ name, title, content }));
	    // };
	
	  }, {
	    key: 'goToWizard',
	    value: function goToWizard() {
	      this.context.mixpanel.track('Homepage button click', {
	        'button_name': 'start wizard'
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { style: styles.homePageContainer },
	        _react2.default.createElement(
	          'div',
	          { style: styles.logo },
	          _react2.default.createElement(_IconSvg2.default, null)
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: styles.homePageTextContainer },
	          _react2.default.createElement(
	            'div',
	            { style: styles.homePageTextTitle },
	            'Find your medical rights now'
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: styles.homePageTextSubTitle },
	            'Don\'t waste your time to analyze your medical insurance, ',
	            _react2.default.createElement('br', null),
	            'Just mark what the doctor said'
	          ),
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/wizard' },
	            _react2.default.createElement(_RaisedButton2.default, {
	              labelPosition: 'before',
	              style: styles.button,
	              containerElement: 'label',
	              label: 'Get Started Now',
	              onTouchTap: this.goToWizard
	            })
	          )
	        )
	      );
	    }
	  }]);
	
	  return HomePage;
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
	
	HomePage.propTypes = {
	  // posts: PropTypes.arrayOf(PropTypes.shape({
	  //   name: PropTypes.string.isRequired,
	  //   title: PropTypes.string.isRequired,
	  //   content: PropTypes.string.isRequired,
	  // })).isRequired,
	  // showAddPost: PropTypes.bool.isRequired,
	  // dispatch: PropTypes.func.isRequired,
	};
	HomePage.childContextTypes = {
	  muiTheme: _react2.default.PropTypes.object
	};
	
	HomePage.contextTypes = {
	  router: _react2.default.PropTypes.object,
	  mixpanel: _react.PropTypes.object.isRequired
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(HomePage);

/***/ }

};;