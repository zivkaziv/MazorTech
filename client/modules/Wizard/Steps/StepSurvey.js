'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import MedicalRightItem from '../componenets/MedicalRightItem/MedicalRIghtItem';

// Material
import TextField from 'material-ui/TextField';

import ReactStars from 'react-stars'

// Import Selectors
import { getSelectedMedicalRights } from '../WizardReducer';

const styles = {
  medicalRightsContainer:{
    overflow:'auto',
  }
};

export default class StepSurvey extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    this.isValidated = this.isValidated.bind(this);
  }

  isValidated(){
    console.log('validate');
    return false;
  }

  render(){
    return(
      <div className="step" style={styles.wizardStepPageStyle}>
        <div className="row">
          <section>
            <h2>Let us know what you think</h2>
          </section>
          {/*<CircularProgress size={80} thickness={5} />*/}
          <div className="col-md-12">
            We really want to get improve, please write us your feedback:
            Did you like it?
            And what you want to see next?
            <TextField
              hintText="Tell us what do you think"
              floatingLabelText="What do you want to see more?"
              multiLine={true}
            /><br />
          </div>
        </div>
      </div>
    )
  }
}


