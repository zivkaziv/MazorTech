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
	
	var _WizardMain = __webpack_require__(94);
	
	var _WizardMain2 = _interopRequireDefault(_WizardMain);
	
	var _WizardActions = __webpack_require__(41);
	
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
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Card = __webpack_require__(98);
	
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
	
	var _MedicalDiagnosticItem = __webpack_require__(93);
	
	var _MedicalDiagnosticItem2 = _interopRequireDefault(_MedicalDiagnosticItem);
	
	var _reactSearchInput = __webpack_require__(100);
	
	var _reactSearchInput2 = _interopRequireDefault(_reactSearchInput);
	
	var _FlatButton = __webpack_require__(35);
	
	var _FlatButton2 = _interopRequireDefault(_FlatButton);
	
	var _RaisedButton = __webpack_require__(38);
	
	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
	
	var _Dialog = __webpack_require__(37);
	
	var _Dialog2 = _interopRequireDefault(_Dialog);
	
	var _TextField = __webpack_require__(99);
	
	var _TextField2 = _interopRequireDefault(_TextField);
	
	var _getMuiTheme = __webpack_require__(97);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	var _lightBaseTheme = __webpack_require__(96);
	
	var _lightBaseTheme2 = _interopRequireDefault(_lightBaseTheme);
	
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
	    maxHeight: 350
	    // overflow:'auto',
	  },
	  medicalDiagnosticsContainer: {
	    display: 'flex'
	  },
	  searchContainer: {
	    height: 350,
	    overflow: 'auto'
	  },
	  cantFindContainer: {
	    textAlign: 'center'
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
	    key: 'searchUpdated',
	    value: function searchUpdated(term) {
	      console.log(term);
	      this.setState({ searchTerm: term });
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
	        label: 'Save',
	        primary: true,
	        keyboardFocused: true,
	        onTouchTap: this.handleCantFindDialogClose
	      })];
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'step step1', style: styles.pageStyle },
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
	              keyboardFocused: false,
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
	              onRequestClose: this.handleCantFindDialogClose },
	            _react2.default.createElement(_TextField2.default, { hintText: 'Write here in your words the medical diagnostic' })
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
	    // showAddPost: getShowAddPost(state),
	    medicalRights: (0, _WizardReducer.getMedicalRights)(state)
	  };
	}
	
	StepNumber1.propTypes = {
	  medicalRight: _react.PropTypes.any
	};
	
	StepNumber1.childContextTypes = {
	  muiTheme: _react2.default.PropTypes.object
	};
	
	StepNumber1.contextTypes = {
	  router: _react2.default.PropTypes.object
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(StepNumber1);

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
	
	var _DatePicker = __webpack_require__(42);
	
	var _DatePicker2 = _interopRequireDefault(_DatePicker);
	
	var _RadioButton = __webpack_require__(44);
	
	var _SelectField = __webpack_require__(45);
	
	var _SelectField2 = _interopRequireDefault(_SelectField);
	
	var _MenuItem = __webpack_require__(43);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	var _Toggle = __webpack_require__(13);
	
	var _Toggle2 = _interopRequireDefault(_Toggle);
	
	var _Checkbox = __webpack_require__(95);
	
	var _Checkbox2 = _interopRequireDefault(_Checkbox);
	
	var _UserReducer = __webpack_require__(40);
	
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

/***/ 90:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Toggle = __webpack_require__(13);
	
	var _Toggle2 = _interopRequireDefault(_Toggle);
	
	var _Dialog = __webpack_require__(37);
	
	var _Dialog2 = _interopRequireDefault(_Dialog);
	
	var _FlatButton = __webpack_require__(35);
	
	var _FlatButton2 = _interopRequireDefault(_FlatButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Material
	
	
	var styles = {
	  pageStyle: {
	    maxWidth: 740
	  },
	  termsSection: {
	    maxHeight: 334,
	    overflow: 'auto'
	  },
	  toggle: {
	    // marginBottom: 15,
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
	        { className: 'step' },
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

/***/ 91:
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
	
	var _CircularProgress = __webpack_require__(36);
	
	var _CircularProgress2 = _interopRequireDefault(_CircularProgress);
	
	var _MedicalRIghtItem = __webpack_require__(87);
	
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
	    maxWidth: 740,
	    overflow: 'auto'
	  }
	};
	
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

/***/ 92:
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
	
	var _CircularProgress = __webpack_require__(36);
	
	var _CircularProgress2 = _interopRequireDefault(_CircularProgress);
	
	var _MedicalRIghtItem = __webpack_require__(87);
	
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
	            'Summary'
	          ),
	          _react2.default.createElement(
	            'div',
	            null,
	            'Thanks'
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

/***/ 93:
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
	
	var _Checkbox = __webpack_require__(95);
	
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

/***/ 94:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(0);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactStepzilla = __webpack_require__(46);
	
	var _reactStepzilla2 = _interopRequireDefault(_reactStepzilla);
	
	var _WizardMain = {
	  "wizard-steps-container": "_3rIfZKbLlZ4umprC1ltNYV"
	};
	
	var _WizardMain2 = _interopRequireDefault(_WizardMain);
	
	var _StepNumber = __webpack_require__(88);
	
	var _StepNumber2 = _interopRequireDefault(_StepNumber);
	
	var _StepNumber3 = __webpack_require__(89);
	
	var _StepNumber4 = _interopRequireDefault(_StepNumber3);
	
	var _StepNumber5 = __webpack_require__(90);
	
	var _StepNumber6 = _interopRequireDefault(_StepNumber5);
	
	var _StepNumber7 = __webpack_require__(91);
	
	var _StepNumber8 = _interopRequireDefault(_StepNumber7);
	
	var _StepNumber9 = __webpack_require__(92);
	
	var _StepNumber10 = _interopRequireDefault(_StepNumber9);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	      } }) }, { name: 'Summary', component: _react2.default.createElement(_StepNumber10.default, { getStore: function getStore() {
	        return _this.getStore();
	      }, updateStore: function updateStore(u) {
	        _this.updateStore(u);
	      } }) }];
	
	  return _react2.default.createElement(
	    'div',
	    { className: _WizardMain2.default['wizard-steps-container'] },
	    _react2.default.createElement(
	      'div',
	      { className: 'step-progress' },
	      _react2.default.createElement(_reactStepzilla2.default, { steps: steps })
	    )
	  );
	}
	
	//Steps
	
	
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