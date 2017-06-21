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
	
	var _WizardActions = __webpack_require__(19);
	
	var _UserActions = __webpack_require__(18);
	
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
	
	var _TextField = __webpack_require__(17);
	
	var _TextField2 = _interopRequireDefault(_TextField);
	
	var _FlatButton = __webpack_require__(8);
	
	var _FlatButton2 = _interopRequireDefault(_FlatButton);
	
	var _SelectField = __webpack_require__(53);
	
	var _SelectField2 = _interopRequireDefault(_SelectField);
	
	var _MenuItem = __webpack_require__(52);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	var _reactStars = __webpack_require__(107);
	
	var _reactStars2 = _interopRequireDefault(_reactStars);
	
	var _WizardReducer = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Material
	
	
	// Import Selectors
	
	
	var styles = {
	  question: {
	    display: 'flex',
	    alignItems: 'center'
	  }
	};
	
	var StepSurvey = function (_Component) {
	  _inherits(StepSurvey, _Component);
	
	  function StepSurvey(props) {
	    _classCallCheck(this, StepSurvey);
	
	    var _this = _possibleConstructorReturn(this, (StepSurvey.__proto__ || Object.getPrototypeOf(StepSurvey)).call(this, props));
	
	    _this.handleChange = function (event, index, value) {
	      return _this.setState({ moreFeatures: value });
	    };
	
	    _this.textFieldChange = function (event, text) {
	      return _this.setState({ freeText: text });
	    };
	
	    _this.state = {
	      generalRating: 0,
	      isSubmitted: false,
	      moreFeatures: '',
	      freeText: ''
	    };
	
	    _this.ratingChanged = _this.ratingChanged.bind(_this);
	    _this.submitFeedback = _this.submitFeedback.bind(_this);
	    return _this;
	  }
	
	  _createClass(StepSurvey, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.context.mixpanel.track('Wizard step open', { 'ab_version': 'v1', 'step': 'survey' });
	    }
	  }, {
	    key: 'ratingChanged',
	    value: function ratingChanged(newRating) {
	      console.log(newRating);
	      this.state.generalRating = newRating;
	    }
	  }, {
	    key: 'submitFeedback',
	    value: function submitFeedback() {
	      this.context.mixpanel.track('Feedback', {
	        'ab_version': 'v1',
	        'general_rating': this.state.generalRating,
	        'more_features': this.state.moreFeatures,
	        'free_text': this.state.freeText
	      });
	
	      this.setState({ isSubmitted: true });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var results = null;
	      if (!this.state.isSubmitted) {
	        results = _react2.default.createElement(
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
	                'Help us to get improve'
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-md-12' },
	              _react2.default.createElement('br', null),
	              _react2.default.createElement('br', null),
	              _react2.default.createElement(
	                'div',
	                { style: styles.question },
	                _react2.default.createElement(
	                  'span',
	                  { style: { marginRight: 20 } },
	                  'Did you like the idea of our wizard?'
	                ),
	                _react2.default.createElement(_reactStars2.default, {
	                  count: 5,
	                  onChange: this.ratingChanged,
	                  size: 24,
	                  color2: '#ffd700' })
	              ),
	              _react2.default.createElement(
	                'div',
	                { style: styles.question },
	                _react2.default.createElement(
	                  _SelectField2.default,
	                  {
	                    style: { minWidth: 350 },
	                    floatingLabelText: 'What else will really help you?',
	                    value: this.state.moreFeatures,
	                    onChange: this.handleChange
	                  },
	                  _react2.default.createElement(_MenuItem2.default, { value: 'more_rights', primaryText: 'Get more rights' }),
	                  _react2.default.createElement(_MenuItem2.default, { value: 'help_to_get_them', primaryText: 'Someone that will help me to get them' }),
	                  _react2.default.createElement(_MenuItem2.default, { value: 'comparison', primaryText: 'Insurance comparison' }),
	                  _react2.default.createElement(_MenuItem2.default, { value: 'smart_recommendation', primaryText: 'Recommend me on other insurance programs' })
	                )
	              ),
	              _react2.default.createElement(_TextField2.default, {
	                hintText: 'Free text for everything you want',
	                floatingLabelText: 'feel free to write any review',
	                multiLine: true,
	                onChange: this.textFieldChange
	              }),
	              _react2.default.createElement('br', null),
	              _react2.default.createElement(_FlatButton2.default, {
	                style: { marginTop: 30 },
	                label: 'Submit',
	                primary: true,
	                keyboardFocused: false,
	                onTouchTap: this.submitFeedback
	              })
	            )
	          )
	        );
	      } else {
	        results = _react2.default.createElement(
	          'div',
	          { className: 'step', style: styles.wizardStepPageStyle },
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'h1',
	              { style: {
	                  display: 'flex',
	                  justifyContent: 'center',
	                  color: '#00bcd4',
	                  textAlign: 'center'
	                } },
	              'Thanks..',
	              _react2.default.createElement('br', null),
	              'you really helped us'
	            )
	          )
	        );
	      }
	
	      return results;
	    }
	  }]);
	
	  return StepSurvey;
	}(_react.Component);
	
	exports.default = StepSurvey;
	
	
	StepSurvey.contextTypes = {
	  mixpanel: _react.PropTypes.object.isRequired
	};

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
	
	var _WizardMain = {
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
	  "progtrckr-done": "_1gy7LmBVkqoqrsnTTKTuWz",
	  "wizard-spacer": "_1dldT6inotw2Mi2tu7jfkW"
	};
	
	var _WizardMain2 = _interopRequireDefault(_WizardMain);
	
	var _reactStepzilla = __webpack_require__(54);
	
	var _reactStepzilla2 = _interopRequireDefault(_reactStepzilla);
	
	var _WizardMainStepper = __webpack_require__(103);
	
	var _WizardMainStepper2 = _interopRequireDefault(_WizardMainStepper);
	
	var _StepNumber = __webpack_require__(46);
	
	var _StepNumber2 = _interopRequireDefault(_StepNumber);
	
	var _StepNumber3 = __webpack_require__(47);
	
	var _StepNumber4 = _interopRequireDefault(_StepNumber3);
	
	var _StepNumber5 = __webpack_require__(48);
	
	var _StepNumber6 = _interopRequireDefault(_StepNumber5);
	
	var _StepNumber7 = __webpack_require__(49);
	
	var _StepNumber8 = _interopRequireDefault(_StepNumber7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//Steps
	
	
	// Import Components
	// import PostListItem from '../../Post/components/PostListItem/PostListItem';
	// import styles from '../../../css/prog-tracker.css';
	
	function WizardMain(props) {
	  var _this = this;
	
	  var steps = [{ name: 'Doctor Diagnosis', component: _react2.default.createElement(_StepNumber2.default, { getStore: function getStore() {
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
	      } }) }];
	
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'div',
	      { className: 'step-progress', style: {
	          width: '100%',
	          display: 'inline-flex',
	          flexDirection: 'column',
	          margin: 'auto',
	          maxWidth: 1000
	        } },
	      _react2.default.createElement(_WizardMainStepper2.default, null),
	      _react2.default.createElement(
	        'span',
	        { className: _WizardMain2.default['wizard-spacer'], style: {
	            // width:'100%',
	            display: 'inline-flex',
	            margin: 'auto',
	            maxWidth: 1000
	            // visibility:'hidden'
	          } },
	        'spacer'
	      )
	    )
	  );
	}
	
	WizardMain.propTypes = {
	  // medicalRights: PropTypes.arrayOf(PropTypes.shape({
	  //   condition: PropTypes.string.isRequired
	  // })).isRequired,
	};
	
	exports.default = WizardMain;

/***/ },

/***/ 103:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Stepper = __webpack_require__(105);
	
	var _RaisedButton = __webpack_require__(42);
	
	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
	
	var _FlatButton = __webpack_require__(8);
	
	var _FlatButton2 = _interopRequireDefault(_FlatButton);
	
	var _ExpandTransition = __webpack_require__(106);
	
	var _ExpandTransition2 = _interopRequireDefault(_ExpandTransition);
	
	var _TextField = __webpack_require__(17);
	
	var _TextField2 = _interopRequireDefault(_TextField);
	
	var _getMuiTheme = __webpack_require__(44);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	var _lightBaseTheme = __webpack_require__(43);
	
	var _lightBaseTheme2 = _interopRequireDefault(_lightBaseTheme);
	
	var _StepNumber = __webpack_require__(46);
	
	var _StepNumber2 = _interopRequireDefault(_StepNumber);
	
	var _StepNumber3 = __webpack_require__(47);
	
	var _StepNumber4 = _interopRequireDefault(_StepNumber3);
	
	var _StepNumber5 = __webpack_require__(48);
	
	var _StepNumber6 = _interopRequireDefault(_StepNumber5);
	
	var _StepNumber7 = __webpack_require__(49);
	
	var _StepNumber8 = _interopRequireDefault(_StepNumber7);
	
	var _StepSurvey = __webpack_require__(101);
	
	var _StepSurvey2 = _interopRequireDefault(_StepSurvey);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	//Steps
	
	
	/**
	 * A contrived example using a transition between steps
	 */
	var WizardMainStepper = function (_React$Component) {
	  _inherits(WizardMainStepper, _React$Component);
	
	  function WizardMainStepper() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, WizardMainStepper);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WizardMainStepper.__proto__ || Object.getPrototypeOf(WizardMainStepper)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      loading: false,
	      finished: false,
	      stepIndex: 0
	    }, _this.dummyAsync = function (cb) {
	      _this.setState({ loading: true }, function () {
	        _this.asyncTimer = setTimeout(cb, 500);
	      });
	    }, _this.handleNext = function () {
	      var stepIndex = _this.state.stepIndex;
	
	      if (!_this.state.loading) {
	        _this.dummyAsync(function () {
	          return _this.setState({
	            loading: false,
	            stepIndex: stepIndex + 1,
	            finished: stepIndex >= 3
	          });
	        });
	      }
	    }, _this.handlePrev = function () {
	      var stepIndex = _this.state.stepIndex;
	
	      if (!_this.state.loading) {
	        _this.dummyAsync(function () {
	          return _this.setState({
	            loading: false,
	            stepIndex: stepIndex - 1
	          });
	        });
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(WizardMainStepper, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        muiTheme: (0, _getMuiTheme2.default)(_lightBaseTheme2.default)
	      };
	    }
	  }, {
	    key: 'getStepContent',
	    value: function getStepContent(stepIndex) {
	      switch (stepIndex) {
	        case 0:
	          return _react2.default.createElement(_StepNumber2.default, { ref: 'step1' });
	        case 1:
	          return _react2.default.createElement(_StepNumber4.default, { ref: 'step2' });
	        case 2:
	          return _react2.default.createElement(_StepNumber6.default, { ref: 'step3' });
	        case 3:
	          return _react2.default.createElement(_StepNumber8.default, { ref: 'step4' });
	        default:
	          // return 'You\'re a long way from home sonny jim!';
	          return _react2.default.createElement(_StepSurvey2.default, null);
	      }
	    }
	  }, {
	    key: 'renderContent',
	    value: function renderContent() {
	      var _this2 = this;
	
	      var _state = this.state,
	          finished = _state.finished,
	          stepIndex = _state.stepIndex;
	
	      var contentStyle = { margin: '0 16px', width: '100%', overflow: 'hidden' };
	
	      if (finished) {
	        return _react2.default.createElement(
	          'div',
	          { style: contentStyle },
	          _react2.default.createElement(_StepSurvey2.default, null),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'a',
	              {
	                href: '#',
	                onClick: function onClick(event) {
	                  event.preventDefault();
	                  _this2.setState({ stepIndex: 0, finished: false });
	                }
	              },
	              'Click here'
	            ),
	            ' to find some other rights'
	          )
	        );
	      }
	
	      return _react2.default.createElement(
	        'div',
	        { style: contentStyle },
	        _react2.default.createElement(
	          'div',
	          null,
	          this.getStepContent(stepIndex)
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: { marginTop: 24, marginBottom: 12, display: 'flex', justifyContent: 'flex-start' } },
	          _react2.default.createElement(_FlatButton2.default, {
	            label: 'Back',
	            disabled: stepIndex === 0,
	            onTouchTap: this.handlePrev,
	            style: { marginRight: 12 }
	          }),
	          _react2.default.createElement(_RaisedButton2.default, {
	            labelPosition: 'before',
	            label: stepIndex === 3 ? 'Finish' : 'Next',
	            primary: true,
	            onTouchTap: this.handleNext
	          })
	        )
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _state2 = this.state,
	          loading = _state2.loading,
	          stepIndex = _state2.stepIndex;
	
	
	      return _react2.default.createElement(
	        'div',
	        { style: { width: '100%', maxWidth: 1000, margin: 'auto' } },
	        _react2.default.createElement(
	          _Stepper.Stepper,
	          {
	            activeStep: stepIndex,
	            linear: 'true' },
	          _react2.default.createElement(
	            _Stepper.Step,
	            null,
	            _react2.default.createElement(
	              _Stepper.StepLabel,
	              null,
	              'Doctor Diagnosis'
	            )
	          ),
	          _react2.default.createElement(
	            _Stepper.Step,
	            null,
	            _react2.default.createElement(
	              _Stepper.StepLabel,
	              null,
	              'Personal Info'
	            )
	          ),
	          _react2.default.createElement(
	            _Stepper.Step,
	            null,
	            _react2.default.createElement(
	              _Stepper.StepLabel,
	              null,
	              'Terms'
	            )
	          ),
	          _react2.default.createElement(
	            _Stepper.Step,
	            null,
	            _react2.default.createElement(
	              _Stepper.StepLabel,
	              null,
	              'Your rights'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _ExpandTransition2.default,
	          { loading: loading, open: true,
	            style: { width: '100%', maxWidth: 1000, margin: 'auto' } },
	          this.renderContent()
	        )
	      );
	    }
	  }]);
	
	  return WizardMainStepper;
	}(_react2.default.Component);
	
	WizardMainStepper.childContextTypes = {
	  muiTheme: _react2.default.PropTypes.object
	};
	exports.default = WizardMainStepper;

/***/ }

};;