exports.ids = [1];
exports.modules = {

/***/ 100:
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
	
	var _WizardMain = __webpack_require__(102);
	
	var _WizardMain2 = _interopRequireDefault(_WizardMain);
	
	var _WizardActions = __webpack_require__(18);
	
	var _UserActions = __webpack_require__(17);
	
	var _WizardReducer = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Components
	
	
	// Import Actions
	
	// import { toggleAddPost } from '../../../App/AppActions';
	
	// Import Selectors
	// import { getShowAddPost } from '../../../App/AppReducer';
	
	
	var styles = {
	  wizardContainer: {
	    width: '100%'
	  }
	};
	
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
	      this.props.dispatch((0, _UserActions.fetchUser)());
	      this.context.mixpanel.track('Wizard login');
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
	      return _react2.default.createElement(_WizardMain2.default, null);
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
	  router: _react2.default.PropTypes.object,
	  mixpanel: _react.PropTypes.object.isRequired
	};
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(WizardPage);

/***/ },

/***/ 101:
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
	
	var _CircularProgress = __webpack_require__(51);
	
	var _CircularProgress2 = _interopRequireDefault(_CircularProgress);
	
	var _MedicalRIghtItem = __webpack_require__(50);
	
	var _MedicalRIghtItem2 = _interopRequireDefault(_MedicalRIghtItem);
	
	var _WizardReducer = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Selectors
	
	
	var styles = {
	  medicalRightsContainer: {
	    overflow: 'auto'
	  }
	};
	
	var StepNumber5 = function (_Component) {
	  _inherits(StepNumber5, _Component);
	
	  function StepNumber5(props) {
	    _classCallCheck(this, StepNumber5);
	
	    var _this = _possibleConstructorReturn(this, (StepNumber5.__proto__ || Object.getPrototypeOf(StepNumber5)).call(this, props));
	
	    _this.state = {};
	
	    return _this;
	  }
	
	  _createClass(StepNumber5, [{
	    key: 'render',
	    value: function render() {
	      var medicalConditions = this.props.medicalConditions;
	
	      console.log(medicalConditions);
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'step', style: styles.wizardStepPageStyle },
	        _react2.default.createElement(
	          'div',
	          { className: 'row' },
	          _react2.default.createElement(
	            'section',
	            null,
	            _react2.default.createElement(
	              'h2',
	              null,
	              'Summary'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            null,
	            'We\'ve found for you 5 rights.. we are still under beta and what to know from you what kind of thins you want to have.. please help us with that'
	          )
	        )
	      );
	    }
	  }]);
	
	  return StepNumber5;
	}(_react.Component);
	
	function mapStateToProps(state) {
	  return {
	    // showAddPost: getShowAddPost(state),
	    medicalConditions: (0, _WizardReducer.getSelectedMedicalRights)(state)
	  };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(StepNumber5);

/***/ },

/***/ 102:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactStepzilla = __webpack_require__(52);
	
	var _reactStepzilla2 = _interopRequireDefault(_reactStepzilla);
	
	var _StepNumber = __webpack_require__(46);
	
	var _StepNumber2 = _interopRequireDefault(_StepNumber);
	
	var _StepNumber3 = __webpack_require__(47);
	
	var _StepNumber4 = _interopRequireDefault(_StepNumber3);
	
	var _StepNumber5 = __webpack_require__(48);
	
	var _StepNumber6 = _interopRequireDefault(_StepNumber5);
	
	var _StepNumber7 = __webpack_require__(49);
	
	var _StepNumber8 = _interopRequireDefault(_StepNumber7);
	
	var _StepNumber9 = __webpack_require__(101);
	
	var _StepNumber10 = _interopRequireDefault(_StepNumber9);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	({
	  "progtrckr": "_1T2D5xuQAzMIscEjI2nghz",
	  "val-err-tooltip": "_26s78mC1TlJwIeHL6_3T04",
	  "step": "_1LsG1_aQ2RSuPpA8BUgQzD",
	  "row": "YCmkvEtoQTgnkqZkV3KjA",
	  "form-horizontal": "vFRtZyLC_JSGYTB8ZNp9L",
	  "form-group": "_3dlrtOMwBkuI7pch-Bh2XM",
	  "footer-buttons": "vl9sepLxLhjaOumNvMGJu",
	  "step3": "jK2gRvchHCbebUwqQlyJV",
	  "step4": "_2LsxfDg-ozr6rp45JIcvR-",
	  "control-label": "_293qLqtMLuu0AncbayrNUn",
	  "review": "_1TThIY09qLr5Wfk80vP-qp",
	  "txt": "SSuOYzX0RxznwJiDrGboH",
	  "saving": "_31Is94zhKTCFBbXE3PfPxb",
	  "eg-jump-lnk": "_1jqBWnm1cdnu57XIYaEdrW",
	  "lib-version": "_1Vr7MgDfp2ylHVa3ryYMfJ",
	  "content": "_1u_fguEXmTnrJge1d1iz9C",
	  "red": "_9JyYUHPUFav3UOjbxJIfD",
	  "green": "_1YKtRyM4nU-ynOll96lla4",
	  "bold": "_1f9bz_Z7Jv1Ae6rkj6eLCm",
	  "hoc-alert": "_2SgTM_M73TmeYVq5XbDywY",
	  "form-block-holder": "_2NqFL78VnXh6Hc8sN2yjLW",
	  "progtrckr-todo": "_1hJePpQfJYCAqZPfgEDeiI",
	  "progtrckr-doing": "_1bAEdbbdwOsDMca2Er-enQ",
	  "progtrckr-done": "_1gy7LmBVkqoqrsnTTKTuWz"
	});
	
	// Import Components
	// import PostListItem from '../../Post/components/PostListItem/PostListItem';
	// import styles from '../../../css/prog-tracker.css';
	
	//Steps
	
	
	function WizardMain(props) {
	  var _this = this;
	
	  var steps = [{ name: 'Medical Diagnosis', component: _react2.default.createElement(_StepNumber2.default, { getStore: function getStore() {
	        return _this.getStore();
	      }, updateStore: function updateStore(u) {
	        _this.updateStore(u);
	      } }) }, { name: 'Personal Info', component: _react2.default.createElement(_StepNumber4.default, { getStore: function getStore() {
	        return _this.getStore();
	      }, updateStore: function updateStore(u) {
	        _this.updateStore(u);
	      } }) }, { name: 'Terms', component: _react2.default.createElement(_StepNumber6.default, { getStore: function getStore() {
	        return _this.getStore();
	      }, updateStore: function updateStore(u) {
	        _this.updateStore(u);
	      } }) }, { name: 'Your Medical Rights', component: _react2.default.createElement(_StepNumber8.default, { getStore: function getStore() {
	        return _this.getStore();
	      }, updateStore: function updateStore(u) {
	        _this.updateStore(u);
	      } })
	    // {name: 'Summary', component: <Step5 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />}
	  }];
	
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'div',
	      { className: 'step-progress' },
	      _react2.default.createElement(_reactStepzilla2.default, { steps: steps,
	        dontValidate: false,
	        stepsNavigation: false,
	        nextTextOnFinalActionStep: "See my medical rights" })
	    )
	  );
	}
	
	WizardMain.propTypes = {
	  // medicalRights: PropTypes.arrayOf(PropTypes.shape({
	  //   condition: PropTypes.string.isRequired
	  // })).isRequired,
	};
	
	exports.default = WizardMain;

/***/ }

};;