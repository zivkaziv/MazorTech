exports.ids = [1];
exports.modules = {

/***/ 86:
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
	
	var _WizardMain = __webpack_require__(92);
	
	var _WizardMain2 = _interopRequireDefault(_WizardMain);
	
	var _WizardActions = __webpack_require__(39);
	
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

/***/ 87:
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
	
	var _MedicalDiagnosticItem = __webpack_require__(90);
	
	var _MedicalDiagnosticItem2 = _interopRequireDefault(_MedicalDiagnosticItem);
	
	var _reactSearchInput = __webpack_require__(95);
	
	var _reactSearchInput2 = _interopRequireDefault(_reactSearchInput);
	
	var _FlatButton = __webpack_require__(35);
	
	var _FlatButton2 = _interopRequireDefault(_FlatButton);
	
	var _Dialog = __webpack_require__(42);
	
	var _Dialog2 = _interopRequireDefault(_Dialog);
	
	var _WizardReducer = __webpack_require__(34);
	
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
	  pageStyle: {
	    maxHeight: 350,
	    overflow: 'auto'
	  },
	  medicalDiagnosticsContainer: {
	    display: 'flex'
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
	
	    _this.state = {
	      searchTerm: '',
	      dialogOpen: false
	    };
	
	    _this.printMedicalRights = _this.printMedicalRights.bind(_this);
	    _this.searchUpdated = _this.searchUpdated.bind(_this);
	    _this.handleOpen = _this.handleOpen.bind(_this);
	    _this.handleClose = _this.handleClose.bind(_this);
	    return _this;
	  }
	
	  _createClass(StepNumber1, [{
	    key: 'isValidated',
	    value: function isValidated() {
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
	    key: 'printMedicalRights',
	    value: function printMedicalRights() {
	      console.log(this.props.medicalRights);
	    }
	  }, {
	    key: 'searchUpdated',
	    value: function searchUpdated(term) {
	      console.log(term);
	      this.setState({ searchTerm: term });
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
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'step step1', style: styles.pageStyle },
	        _react2.default.createElement(
	          'div',
	          { className: 'row' },
	          _react2.default.createElement(_reactSearchInput2.default, { style: styles.medicalRightsContainer,
	            placeholder: 'Search for your medical diagnostic',
	            className: _StepNumber2.default['search-input'],
	            onChange: this.searchUpdated }),
	          filteredMedicalDiagnostics.map(function (medicalRight, i) {
	            return _react2.default.createElement(_MedicalDiagnosticItem2.default, { key: i, medicalRight: medicalRight });
	          }),
	          _react2.default.createElement(
	            _Dialog2.default,
	            {
	              title: 'Agree terms',
	              actions: actions,
	              modal: false,
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
	    // showAddPost: getShowAddPost(state),
	    medicalRights: (0, _WizardReducer.getMedicalRights)(state)
	  };
	}
	
	StepNumber1.propTypes = {
	  medicalRight: _react.PropTypes.any
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(StepNumber1);

/***/ },

/***/ 88:
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
	
	var _DatePicker = __webpack_require__(41);
	
	var _DatePicker2 = _interopRequireDefault(_DatePicker);
	
	var _RadioButton = __webpack_require__(44);
	
	var _SelectField = __webpack_require__(46);
	
	var _SelectField2 = _interopRequireDefault(_SelectField);
	
	var _MenuItem = __webpack_require__(43);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	var _Toggle = __webpack_require__(13);
	
	var _Toggle2 = _interopRequireDefault(_Toggle);
	
	var _Checkbox = __webpack_require__(93);
	
	var _Checkbox2 = _interopRequireDefault(_Checkbox);
	
	var _UserReducer = __webpack_require__(38);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Material design
	
	
	// Import Selectors
	
	
	// Styles
	var styles = {
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
	    padding: '7px 0px',
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
	    display: 'flex'
	  }
	};
	
	var StepNumber2 = function (_Component) {
	  _inherits(StepNumber2, _Component);
	
	  function StepNumber2(props) {
	    _classCallCheck(this, StepNumber2);
	
	    var _this = _possibleConstructorReturn(this, (StepNumber2.__proto__ || Object.getPrototypeOf(StepNumber2)).call(this, props));
	
	    _this.state = {};
	
	    //Binds
	    _this.handleChange = _this.handleChange.bind(_this);
	    _this.handleGenderChange = _this.handleGenderChange.bind(_this);
	    _this.handleDOBChange = _this.handleDOBChange.bind(_this);
	    return _this;
	  }
	
	  _createClass(StepNumber2, [{
	    key: 'handleChange',
	    value: function handleChange(event, index, value) {
	      console.log('the new value is' + value);
	      this.props.user.health_insurance = value;
	      this.setState({ user: this.props.user });
	    }
	  }, {
	    key: 'handleGenderChange',
	    value: function handleGenderChange(event, value) {
	      console.log('the new value is' + value);
	      this.props.user.gender = value;
	      this.setState({ user: this.props.user });
	    }
	  }, {
	    key: 'handleDOBChange',
	    value: function handleDOBChange(event, value) {
	      console.log('the new value is' + value);
	      this.props.user.dob = value;
	      this.setState({ user: this.props.user });
	    }
	  }, {
	    key: 'onCheck',
	    value: function onCheck(e, checked) {
	      this.props.user.isSmoking = !this.props.user.isSmoking;
	      this.setState({ user: this.props.user });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
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
	                        defaultDate: new Date(),
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
	                        _SelectField2.default,
	                        {
	                          floatingLabelText: 'Health insurance',
	                          value: this.props.user.health_insurance,
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
	                            return _this2.onCheck(e, checked);
	                          } })
	                      )
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
	
	  return StepNumber2;
	}(_react.Component);
	
	function mapStateToProps(state) {
	  return {
	    // showAddPost: getShowAddPost(state),
	    user: (0, _UserReducer.getUser)(state)
	  };
	}
	
	StepNumber2.propTypes = {
	  user: _react.PropTypes.any
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(StepNumber2);

/***/ },

/***/ 89:
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
	
	var _CircularProgress = __webpack_require__(40);
	
	var _CircularProgress2 = _interopRequireDefault(_CircularProgress);
	
	var _MedicalRIghtItem = __webpack_require__(91);
	
	var _MedicalRIghtItem2 = _interopRequireDefault(_MedicalRIghtItem);
	
	var _WizardReducer = __webpack_require__(34);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Import Selectors
	
	
	var StepNumber4 = function (_Component) {
	  _inherits(StepNumber4, _Component);
	
	  function StepNumber4(props) {
	    _classCallCheck(this, StepNumber4);
	
	    var _this = _possibleConstructorReturn(this, (StepNumber4.__proto__ || Object.getPrototypeOf(StepNumber4)).call(this, props));
	
	    _this.state = {};
	
	    return _this;
	  }
	
	  _createClass(StepNumber4, [{
	    key: 'render',
	    value: function render() {
	      var medicalConditions = this.props.medicalConditions;
	
	      console.log(medicalConditions);
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'step' },
	        _react2.default.createElement(
	          'div',
	          { className: 'row' },
	          _react2.default.createElement(
	            'h1',
	            null,
	            'We have found for you the following medical rights'
	          ),
	          _react2.default.createElement(
	            'div',
	            null,
	            this.props.medicalConditions.map(function (selectedConditions) {
	              // console.log(selectedConditions);
	              return selectedConditions.rights.map(function (medicalRight, i) {
	                console.log(medicalRight);
	                return _react2.default.createElement(_MedicalRIghtItem2.default, { key: i, medicalRight: medicalRight, medicalCondition: selectedConditions });
	              });
	            })
	          )
	        )
	      );
	    }
	  }]);
	
	  return StepNumber4;
	}(_react.Component);
	
	function mapStateToProps(state) {
	  return {
	    // showAddPost: getShowAddPost(state),
	    medicalConditions: (0, _WizardReducer.getSelectedMedicalRights)(state)
	  };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(StepNumber4);

/***/ },

/***/ 90:
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
	
	var _reactRouter = __webpack_require__(3);
	
	var _reactIntl = __webpack_require__(1);
	
	var _Checkbox = __webpack_require__(93);
	
	var _Checkbox2 = _interopRequireDefault(_Checkbox);
	
	var _MedicalDiagnosticItem = {
	  "medical-diagnostic-item": "_Uhygq52TmiRQTOLmE_0"
	};
	
	var _MedicalDiagnosticItem2 = _interopRequireDefault(_MedicalDiagnosticItem);
	
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
	
	exports.default = MedicalDiagnosticItem;

/***/ },

/***/ 91:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Card = __webpack_require__(94);
	
	var _FlatButton = __webpack_require__(35);
	
	var _FlatButton2 = _interopRequireDefault(_FlatButton);
	
	var _MedicalRightItem = {
	  "medical-right-item": "_2OPQaFLVSkPuvLOeotACNW",
	  "medical-condition": "_-zsAwla7bqudwL3lryVKn"
	};
	
	var _MedicalRightItem2 = _interopRequireDefault(_MedicalRightItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function MedicalRightItem(props) {
	  return _react2.default.createElement(
	    _Card.Card,
	    null,
	    _react2.default.createElement(_Card.CardHeader, {
	      title: props.medicalRight.name,
	      subtitle: props.medicalCondition.condition,
	      actAsExpander: true,
	      showExpandableButton: true
	    }),
	    _react2.default.createElement(
	      _Card.CardActions,
	      null,
	      _react2.default.createElement(_FlatButton2.default, { primary: true,
	        label: 'I didn\'t know that',
	        href: 'https://www.facebook.com/sharer.php?u=http://www.ynet.co.il/articles/0,7340,L-4970913,00.html',
	        target: '_blank' })
	    ),
	    _react2.default.createElement(
	      _Card.CardText,
	      { expandable: true },
	      props.medicalRight.description
	    )
	  );
	}
	
	// Import Style
	
	
	MedicalRightItem.propTypes = {
	  medicalRight: _react.PropTypes.any,
	  medicalCondition: _react.PropTypes.any
	};
	
	exports.default = MedicalRightItem;

/***/ },

/***/ 92:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactStepzilla = __webpack_require__(47);
	
	var _reactStepzilla2 = _interopRequireDefault(_reactStepzilla);
	
	var _StepNumber = __webpack_require__(87);
	
	var _StepNumber2 = _interopRequireDefault(_StepNumber);
	
	var _StepNumber3 = __webpack_require__(88);
	
	var _StepNumber4 = _interopRequireDefault(_StepNumber3);
	
	var _Step = __webpack_require__(37);
	
	var _Step2 = _interopRequireDefault(_Step);
	
	var _StepNumber5 = __webpack_require__(89);
	
	var _StepNumber6 = _interopRequireDefault(_StepNumber5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	      } }) }, { name: 'Terms', component: _react2.default.createElement(_Step2.default, { getStore: function getStore() {
	        return _this.getStore();
	      }, updateStore: function updateStore(u) {
	        _this.updateStore(u);
	      } }) }, { name: 'Your Medical Rights', component: _react2.default.createElement(_StepNumber6.default, { getStore: function getStore() {
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