'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Material design
import DatePicker from 'material-ui/DatePicker';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import CheckBox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';

// Import Selectors
import { getUser } from '../UserReducer';

// Import Actions
import { updateUserDetails } from '../UserActions';

// Styles
const styles = {
  wizardStepPageStyle: {
    maxHeight: 350,
    // maxWidth: 679,
    overflow:'auto',
  },
  title:{
    display:'inline-flex',
    width:'100%',
  },
  personalDetails:{
    display:'inline-flex',
    width:'100%',
    flexDirection:'column'
  },
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
    padding:'4px 0px',
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
    this.handleHealthInsuranceChange = this.handleHealthInsuranceChange.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.handleDOBChange = this.handleDOBChange.bind(this);
    this.isValidated = this.isValidated.bind(this);
    this.updateState = this.updateState.bind(this);
    this.handleWeightChange = this.handleWeightChange.bind(this);
  }

  isValidated() {
    updateUserDetails();
    return true;
  }

  componentDidMount() {
    this.context.mixpanel.track('Wizard step open',{'ab_version':'v1','step':'2'});
  }

  handleHealthInsuranceChange(event, index, value) {
    console.log('the new value is' + value);
    this.props.user.health_insurance = value;
    this.updateState();
  }

  handleGenderChange(event, value) {
    console.log('the new value is' + value);
    this.props.user.gender = value;
    this.updateState();
  }

  handleDOBChange(event, value) {
    console.log('the new value is' + value);
    this.props.user.dob = value;
    this.updateState();
  }

  updateState(){
    this.props.dispatch(updateUserDetails(this.props.user));
    this.setState({user: this.props.user});
  }

  handleIsSmokingChange(e,checked){
    this.props.user.isSmoking = !this.props.user.isSmoking;
    this.updateState();
  };

  handleWeightChange(e,value){
    console.log('the new weight is' + value);
    this.props.user.weight = value;
    this.updateState();
  }

  render() {
    return (
      <div className="step step2" style={styles.wizardStepPageStyle}>
        <section  style={styles.title}>
          <h2>We need a few more details to help you</h2>
        </section>
        <div className="col-md-12" style={styles.personalDetails}>
          {/*Gender*/}
          <div className="user-detail-section" style={styles.userDetailSectionWithNoAlign}>
            <div className="user-detail-text" style={styles.userDetailText}>
              Gender
            </div>
            <div className="user-detail-input">
              <RadioButtonGroup name="gender"
                                defaultSelected={this.props.user.gender}
                                valueSelected={this.props.user.gender}
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
          <div className="user-detail-section" style={styles.userDetailSection}>
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
                onChange={this.handleHealthInsuranceChange}
              >
                <MenuItem value={1} primaryText="Medicare" />
                <MenuItem value={2} primaryText="Unitedhealth Group" />
                <MenuItem value={3} primaryText="Wellpoint Inc. Group" />
                <MenuItem value={4} primaryText="Kaiser Foundation Group" />
                <MenuItem value={5} primaryText="Humana Group" />
                <MenuItem value={6} primaryText="Aetna Group" />
                <MenuItem value={7} primaryText="HCSC Group" />
                <MenuItem value={8} primaryText="Cigna Health Group" />
                <MenuItem value={9} primaryText="Highmark Group" />
                <MenuItem value={10} primaryText="Blue Cross Blue Shield Group" />
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
                  onCheck={(e,checked) => this.handleIsSmokingChange(e,checked)}/>
              </div>
              <div style={styles.block}>
                <TextField
                  floatingLabelText="Your weight in lb"
                  hintText="Weight"
                  onChange={this.handleWeightChange}
                />
              </div>
            </div>
          </div>

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

StepNumber2.contextTypes = {
  mixpanel: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(StepNumber2);
