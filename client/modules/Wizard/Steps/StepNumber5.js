'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import CircularProgress from 'material-ui/CircularProgress';

import MedicalRightItem from '../componenets/MedicalRightItem/MedicalRIghtItem';

// Import Selectors
import { getSelectedMedicalRights } from '../WizardReducer';

class StepNumber4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

  }

  render(){
    const {medicalConditions} = this.props;
    console.log(medicalConditions);

    return(
      <div className="step">
        <div className="row">
          <h1>Summary</h1>
          {/*<CircularProgress size={80} thickness={5} />*/}
          <div>
            Thanks
          </div>
        </div>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    // showAddPost: getShowAddPost(state),
    medicalConditions: getSelectedMedicalRights(state),
  };
}

export default connect(mapStateToProps)(StepNumber4);

