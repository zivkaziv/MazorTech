'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    // maxWidth: 679,
    overflow:'auto',
  },
  medicalRightsTitle:{
    display:'inline-flex',
    width:'100%',
  },
  medicalRightsContainer:{
    // overflow:'auto',
    display:'inline-flex',
    width:'100%',
    flexDirection:'column'
  },
  brokenServerContainer:{
    textAlign:'center',
    marginTop:'10%',
    // display:'inline-flex',
    width:'100%',
    flexDirection:'column'
  },
  brokenServerImg:{
    height:120
  },
  brokenServerText:{
    fontSize:20,
    fontWeight:'bold'
  },
  errorSection:{
    width:'100%',
    // display:'inline-flex',
    flexDirection:'column'
  },
  spacer:{
    width:'100%',
    display:'inline-flex'
  }
};

class StepNumber4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

  }

  componentDidMount() {
    this.context.mixpanel.track('Wizard step open',{'ab_version':'v1','step':'4'});
  }

  componentWillUnmount(){
    this.context.mixpanel.track('Medical right results',{
      'num_of_selected_medical_conditions':this.props.medicalRights.length,
    });
  }

  render(){
    const {medicalRights} = this.props;
    console.log(medicalRights);

    var results = null;
    if(this.props.medicalRights.length > 0) {
      results = (
        <div className="step" style={styles.wizardStepPageStyle}>
          <div className="row">
            <section style={styles.medicalRightsTitle}>
              <h2>We have found for you the following medical rights</h2>
            </section>
            <div style={styles.medicalRightsContainer}>
              {this.props.medicalRights.map((medicalRight,i) => {
                // console.log(selectedConditions);
                  return (
                    <MedicalRightItem key={i} medicalRight={medicalRight}/>
                  )
              })}
            </div>
          </div>
        </div>
      );
      //Display server error
    }else{
      results = (
        <div className="step" style={styles.wizardStepPageStyle}>
          <div className="row" style={styles.errorSection}>
            <div style={styles.brokenServerContainer}>
              <img src={serverError} style={styles.brokenServerImg}/>
              <div style={styles.brokenServerText}>
                Our server just crashed..
                <br/>stay tight..
                <br/> Our best engineers are working to fix it
              </div>
              <span style={styles.spacer}></span>
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
    medicalRights: getMedicalRightsForUser(state)
  };
}

StepNumber4.contextTypes = {
  mixpanel: PropTypes.any
};

export default connect(mapStateToProps)(StepNumber4);

