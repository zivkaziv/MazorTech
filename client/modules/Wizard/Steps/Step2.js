'use strict';

import React, { Component, PropTypes } from 'react';

// Material design
import DatePicker from 'material-ui/DatePicker';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';

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


export default class Step2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      termsAgreed : false,
      dialogOpen : false
    };

    //Binds
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index, value) {
    console.log('the new value is' + value);
//   this.setState({value});
  }

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
                      value={1}
                      onChange={handleChange}
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
                    <DatePicker hintText="Date of birth" />
                  </div>
                  {/*Gender*/}
                  <div>
                    <RadioButtonGroup name="gender" defaultSelected="female">
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
                    <Toggle
                      label="Smoking"
                      style={styles.toggle}
                    />
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

