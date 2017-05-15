exports.ids = [1];
exports.modules = {

/***/ 82:
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
	
	var _WizardMain = __webpack_require__(85);
	
	var _WizardMain2 = _interopRequireDefault(_WizardMain);
	
	var _WizardActions = __webpack_require__(38);
	
	var _WizardReducer = __webpack_require__(34);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Components
	
	
	// Import Actions
	
	// import { toggleAddPost } from '../../../App/AppActions';
	
	// Import Selectors
	// import { getShowAddPost } from '../../../App/AppReducer';
	
	
	var WizardPage = function (_Component) {
	  _inherits(WizardPage, _Component);
	
	  function WizardPage() {
	    _classCallCheck(this, WizardPage);
	
	    return _possibleConstructorReturn(this, (WizardPage.__proto__ || Object.getPrototypeOf(WizardPage)).apply(this, arguments));
	  }
	
	  _createClass(WizardPage, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.dispatch((0, _WizardActions.fetchMedicalRights)());
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
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_WizardMain2.default, null)
	      );
	    }
	  }]);
	
	  return WizardPage;
	}(_react.Component);
	
	// Actions required to provide data for this component to render in sever side.
	// PostListPage.need = [() => { return fetchPosts(); }];
	
	// Retrieve data from store as props
	
	
	function mapStateToProps(state) {
	  return {
	    // showAddPost: getShowAddPost(state),
	    medicalRights: (0, _WizardReducer.getMedicalRights)(state)
	  };
	}
	
	WizardPage.propTypes = {
	  medicalRight: _react.PropTypes.any
	  // medicalRights: PropTypes.arrayOf(PropTypes.shape({
	  //   condition: PropTypes.string.isRequired
	  // })).isRequired
	  // showAddPost: PropTypes.bool.isRequired,
	  // dispatch: PropTypes.func.isRequired,
	};
	
	WizardPage.contextTypes = {
	  router: _react2.default.PropTypes.object
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(WizardPage);

/***/ },

/***/ 83:
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
	
	var _RaisedButton = __webpack_require__(39);
	
	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
	
	var _MedicalRIghtItem = __webpack_require__(84);
	
	var _MedicalRIghtItem2 = _interopRequireDefault(_MedicalRIghtItem);
	
	var _WizardReducer = __webpack_require__(34);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Selectors
	
	
	var styles = {
	  pageStyle: {
	    maxHeight: 350,
	    overflow: 'auto'
	  },
	  medicalRightsContainer: {
	    display: 'flex'
	  }
	};
	
	var StepNumber1 = function (_Component) {
	  _inherits(StepNumber1, _Component);
	
	  function StepNumber1(props) {
	    _classCallCheck(this, StepNumber1);
	
	    var _this = _possibleConstructorReturn(this, (StepNumber1.__proto__ || Object.getPrototypeOf(StepNumber1)).call(this, props));
	
	    _this.state = {};
	
	    _this.printMedicalRights = _this.printMedicalRights.bind(_this);
	    return _this;
	  }
	
	  _createClass(StepNumber1, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	
	    // not required as this component has no forms or user entry
	    // isValidated() {}
	
	  }, {
	    key: 'printMedicalRights',
	    value: function printMedicalRights() {
	      console.log(this.props.medicalRights);
	    }
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
	            'h3',
	            null,
	            'Please choose the diagnosis'
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: styles.medicalRightsContainer },
	            this.props.medicalRights.map(function (medicalRight, i) {
	              return _react2.default.createElement(_MedicalRIghtItem2.default, { key: i, medicalRight: medicalRight });
	            })
	          )
	        )
	      );
	    }
	  }]);
	
	  return StepNumber1;
	}(_react.Component);
	
	function mapStateToProps(state) {
	  return {
	    // showAddPost: getShowAddPost(state),
	    medicalRights: (0, _WizardReducer.getMedicalRights)(state)
	  };
	}
	
	StepNumber1.propTypes = {
	  medicalRight: _react.PropTypes.any
	};
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(StepNumber1);

/***/ },

/***/ 84:
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
	
	var _MedicalRightItem = {
	  "medical-right-item": "_2OPQaFLVSkPuvLOeotACNW",
	  "medical-condition": "_-zsAwla7bqudwL3lryVKn"
	};
	
	var _MedicalRightItem2 = _interopRequireDefault(_MedicalRightItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function MedicalRightItem(props) {
	  return _react2.default.createElement(
	    'div',
	    { className: _MedicalRightItem2.default['medical-right-item'] },
	    _react2.default.createElement(
	      'h3',
	      { className: _MedicalRightItem2.default['medical-condition'] },
	      props.medicalRight.condition
	    )
	  );
	}
	
	// Import Style
	
	
	MedicalRightItem.propTypes = {
	  medicalRight: _react.PropTypes.any
	};
	
	exports.default = MedicalRightItem;

/***/ },

/***/ 85:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactStepzilla = __webpack_require__(40);
	
	var _reactStepzilla2 = _interopRequireDefault(_reactStepzilla);
	
	var _StepNumber = __webpack_require__(83);
	
	var _StepNumber2 = _interopRequireDefault(_StepNumber);
	
	var _Step = __webpack_require__(35);
	
	var _Step2 = _interopRequireDefault(_Step);
	
	var _Step3 = __webpack_require__(36);
	
	var _Step4 = _interopRequireDefault(_Step3);
	
	var _Step5 = __webpack_require__(37);
	
	var _Step6 = _interopRequireDefault(_Step5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//Steps
	function WizardMain(props) {
	  var _this = this;
	
	  var steps = [{ name: 'Diagnosis', component: _react2.default.createElement(_StepNumber2.default, { getStore: function getStore() {
	        return _this.getStore();
	      }, updateStore: function updateStore(u) {
	        _this.updateStore(u);
	      } }) }, { name: 'Info', component: _react2.default.createElement(_Step2.default, { getStore: function getStore() {
	        return _this.getStore();
	      }, updateStore: function updateStore(u) {
	        _this.updateStore(u);
	      } }) }, { name: 'Terms', component: _react2.default.createElement(_Step4.default, { getStore: function getStore() {
	        return _this.getStore();
	      }, updateStore: function updateStore(u) {
	        _this.updateStore(u);
	      } }) }, { name: 'Rights', component: _react2.default.createElement(_Step6.default, { getStore: function getStore() {
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
	// import PostListItem from '../../Post/components/PostListItem/PostListItem';
	// import styles from '../../../css/prog-tracker.css';
	
	WizardMain.propTypes = {
	  // medicalRights: PropTypes.arrayOf(PropTypes.shape({
	  //   condition: PropTypes.string.isRequired
	  // })).isRequired,
	};
	
	exports.default = WizardMain;

/***/ }

};;