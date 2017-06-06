'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import CircularProgress from 'material-ui/CircularProgress';

import MedicalRightItem from '../componenets/MedicalRightItem/MedicalRIghtItem';

// Import Selectors
import { getSelectedMedicalRights } from '../WizardReducer';

const styles = {
  pageStyle: {
    maxHeight: 350,
    maxWidth: 740,
    overflow:'auto',
  }
};

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
          <h1>We have found for you the following medical rights</h1>
          {/*<CircularProgress size={80} thickness={5} />*/}
          <div>
            {this.props.medicalConditions.map((selectedConditions)=>{
              // console.log(selectedConditions);
              return selectedConditions.rights.map((medicalRight,i) => {
                console.log(medicalRight);
                return(
                  <MedicalRightItem key={i} medicalRight={medicalRight} medicalCondition={selectedConditions}/>
                )
              });

            })}
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

