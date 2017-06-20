'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import CircularProgress from 'material-ui/CircularProgress';

import MedicalRightItem from '../componenets/MedicalRightItem/MedicalRIghtItem';

// Import Selectors
import { getMedicalRightsForUser } from '../WizardReducer';

``//images
// Import Images
import serverError from '../images/server_error.jpg';

const styles = {
  wizardStepPageStyle: {
    maxHeight: 350,
    maxWidth: 679,
    overflow:'auto',
  },
  medicalRightsContainer:{
    // overflow:'auto',
  },
  brokenServerContainer:{
    textAlign:'center',
    marginTop:'10%'
  },
  brokenServerImg:{
    height:120
  },
  brokenServerText:{
    fontSize:20,
    fontWeight:'bold'
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

    var results = null;
    if(this.props.medicalConditions.length > 0) {
      results = (
        <div className="step" style={styles.wizardStepPageStyle}>
          <div className="row">
            <section>
              <h2>We have found for you the following medical rights</h2>
            </section>
            {/*<CircularProgress size={80} thickness={5} />*/}
            <div style={styles.medicalRightsContainer}>
              {this.props.medicalConditions.map((selectedConditions) => {
                // console.log(selectedConditions);
                return selectedConditions.rights.map((medicalRight, i) => {
                  console.log(medicalRight);
                  return (
                    <MedicalRightItem key={i} medicalRight={medicalRight} medicalCondition={selectedConditions}/>
                  )
                });

              })}
            </div>
          </div>
        </div>
      );
      //Display server error
    }else{
      results = (
        <div className="step" style={styles.wizardStepPageStyle}>
          <div className="row">
            <div style={styles.brokenServerContainer}>
              <img src={serverError} style={styles.brokenServerImg}/>
              <div style={styles.brokenServerText}>
                Our server just crashed..
                <br/>stay tight..
                <br/> Our best engineers are working to fix it
              </div>
            </div>
          </div>
        </div>
      )
    }

    return results
  }
}

function mapStateToProps(state) {
  return {
    // showAddPost: getShowAddPost(state),
    medicalConditions: getMedicalRightsForUser(state),
  };
}

export default connect(mapStateToProps)(StepNumber4);

