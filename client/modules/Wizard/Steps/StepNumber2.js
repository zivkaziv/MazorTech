'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Material design
import DatePicker from 'material-ui/DatePicker';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';
import CheckBox from 'material-ui/Checkbox';

// Import Selectors
import { getUser } from '../UserReducer';

// Styles
const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },
  toggle: {
    marginBottom: 16,
  },

  userDetailSection:{
    display: 'flex',
    borderBottom: '1px solid #AAA',
    padding:'7px 0px',
    fontSize: '16px',
    alignItems:'center',
  },

  userDetailSectionWithNoAlign:{
    display: 'flex',
    borderBottom: '1px solid #AAA',
    padding:'7px 0px',
    fontSize: '16px',
  },

  userDetailText:{
    minWidth: '25%',
    fontWeight: 'bold',
    position:'relative',
    top:'2px'
  },

  userDetailNote:{
    fontSize: '8px',
  },

  // Gender
  genderRadioButton:{
    display:'flex'
  }
};


class StepNumber2 extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    //Binds
    this.handleChange = this.handleChange.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.handleDOBChange = this.handleDOBChange.bind(this);
  }

  handleChange(event, index, value) {
    console.log('the new value is' + value);
    this.props.user.health_insurance = value;
    this.setState({user: this.props.user});
  }

  handleGenderChange(event, value) {
    console.log('the new value is' + value);
    this.props.user.gender = value;
    this.setState({user: this.props.user});
  }

  handleDOBChange(event, value) {
    console.log('the new value is' + value);
    this.props.user.dob = value;
    this.setState({user: this.props.user});
  }

  onCheck(e,checked){
    this.props.user.isSmoking = !this.props.user.isSmoking;
    this.setState({user: this.props.user})
  };

  render() {
    return (
      <div className="step step2">
        <div className="row">
          <form id="Form" className="form-horizontal">
            <div className="form-group">
              <label className="col-md-12 control-label">
                <h1>We need a few more details to help you</h1>
              </label>
              <div className="row content">
                <div className="col-md-12">
                  {/*Gender*/}
                  <div className="user-detail-section" style={styles.userDetailSection}>
                    <div className="user-detail-text" style={styles.userDetailText}>
                      Gender
                    </div>
                    <div className="user-detail-input">
                      <RadioButtonGroup name="gender"
                                        defaultSelected={this.props.user.gender}
                                        style={styles.genderRadioButton}
                                        onChange={this.handleGenderChange}>
                        <RadioButton
                          value="male"
                          label="Male"
                          style={styles.radioButton}
                        />
                        <RadioButton
                          value="female"
                          label="Female"
                          style={styles.radioButton}
                        />
                      </RadioButtonGroup>
                    </div>
                  </div>

                  {/*Date of birth section*/}
                  <div className="user-detail-section" style={styles.userDetailSectionWithNoAlign}>
                    <div className="user-detail-text" style={styles.userDetailText}>
                      Date of birth
                    </div>
                    <div className="user-detail-input">
                      <DatePicker
                        hintText="Select your birth date"
                        defaultDate={new Date()}
                        onChange={this.handleDOBChange}
                        formatDate={null}
                      />
                    </div>
                  </div>

                  {/*Health insurance*/}
                  <div className="user-detail-section" style={styles.userDetailSection}>
                    <div className="user-detail-text" style={styles.userDetailText}>
                      Health insurance
                    </div>
                    <div className="user-detail-input">
                      <SelectField
                        floatingLabelText="Health insurance"
                        value={this.props.user.health_insurance}
                        onChange={this.handleChange}
                      >
                        <MenuItem value={1} primaryText="Unitedhealth Group" />
                        <MenuItem value={2} primaryText="Wellpoint Inc. Group" />
                        <MenuItem value={3} primaryText="Kaiser Foundation Group" />
                        <MenuItem value={4} primaryText="Humana Group" />
                        <MenuItem value={5} primaryText="Aetna Group" />
                        <MenuItem value={6} primaryText="HCSC Group" />
                        <MenuItem value={7} primaryText="Cigna Health Group" />
                        <MenuItem value={8} primaryText="Highmark Group" />
                        <MenuItem value={9} primaryText="Blue Cross Blue Shield Group" />
                      </SelectField>
                      <div style={styles.userDetailNote}>
                        If you can't find your insurance company it's must be because we are still working on analyze this data...
                      </div>
                    </div>
                  </div>

                  {/*Smoking*/}
                  <div className="user-detail-section" style={styles.userDetailSectionWithNoAlign}>
                    <div className="user-detail-text" style={styles.userDetailText}>
                      Critical information
                    </div>
                    <div className="user-detail-input">
                      <div style={styles.block}>
                        <CheckBox
                          label='Smoking'
                          checked={!!this.props.user.isSmoking}
                          onCheck={(e,checked) => this.onCheck(e,checked)}/>
                      </div>
                    </div>
                  </div>

                </div>
                {/*<div className="col-md-12 eg-jump-lnk">*/}
                {/*<a href="#" onClick={() => props.jumpToStep(0)}>e.g. showing how we use the jumpToStep method helper method to jump back to step 1</a>*/}
                {/*</div>*/}
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // showAddPost: getShowAddPost(state),
    user: getUser(state),
  };
}

StepNumber2.propTypes = {
  user: PropTypes.any
};

export default connect(mapStateToProps)(StepNumber2);
