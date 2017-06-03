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
  }
};


class StepNumber2 extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    //Binds
    this.handleChange = this.handleChange.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
  }

  handleChange(event, index, value) {
    console.log('the new value is' + value);
    this.props.user.health_insurance = value;
    this.setState({user: this.props.user});
  }

  handleGenderChange(event, index, value) {
    console.log('the new value is' + value);
    this.props.user.gender = value;
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
                  {/*Health insurance*/}
                  <div>
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
                  </div>
                  {/*Date of birth section*/}
                  <div>
                    <DatePicker
                      hintText="Date of birth"
                      defaultDate={new Date()}
                    />
                  </div>
                  {/*Gender*/}
                  <div>
                    <RadioButtonGroup name="gender" defaultSelected="female"
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
                  {/*Smoking*/}
                  <div style={styles.block}>
                    <CheckBox
                              label='Smoking'
                              checked={!!this.props.user.isSmoking}
                              onCheck={(e,checked) => this.onCheck(e,checked)}/>
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
