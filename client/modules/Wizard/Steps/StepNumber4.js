'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import CircularProgress from 'material-ui/CircularProgress';

import MedicalRightItem from '../componenets/MedicalRightItem/MedicalRIghtItem';

// Import Selectors
import { getMedicalRightsForUser,getSelectedMedicalRights } from '../WizardReducer';
import { getUser } from '../UserReducer';

//images
// Import Images
import serverError from '../images/onwork.png';

const styles = {
  wizardStepPageStyle: {
    maxHeight: 350,
    // maxWidth: 679,
    minWidth:318,
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
      isEmailSubmitted:false,
      email : ''
    };

  }

  componentDidMount() {
    this.context.mixpanel.track('Wizard step open',{'ab_version':'v1','step':'4'});
  }

  componentWillUnmount(){
    this.context.mixpanel.track('Medical right results',{
      'num_of_rights_found':this.props.medicalRights.length,
      'num_of_selected_medical_conditions':this.props.selectedDiagnostics.length,
      'selected':this.props.selectedDiagnostics.map(x => x.condition).join(','),
      'user':JSON.stringify(this.props.user)
    });
  }

  emailHasChanged = (email) => {
    this.state.email = email;
  };


  submitEmail = () =>{
    var selected = this.props.selectedDiagnostics.map(x => x.condition).join(',');

    this.context.mixpanel.track('No rights - But update me',{
      'ab_version':'v1',
      'email':this.state.email,
      'selected':selected,
      'user':JSON.stringify(this.props.user),
    });

    this.setState({isEmailSubmitted: true});
  };

  render(){
    const {medicalRights} = this.props;
    console.log(medicalRights);

    var results = null;
    if(this.props.medicalRights.length > 0) {
      results = (
        <div className="step" style={styles.wizardStepPageStyle}>
          <div className="row">
            <section style={styles.medicalRightsTitle}>
              <h2>Based on your input, these are your medical rights:</h2>
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
                We didn't find any medical rights for you..
                <br/>
                Our insurance experts are working on it.
                <br/>
                If you wanna stay updated, we can send you an email when it will be ready
                <br/>
                <TextField
                  hintText="Email"
                  onChange={this.emailHasChanged()}
                />
                {(function(showMe) {
                  if (showMe) {
                    return (
                      <div>
                        <FlatButton
                          style={{marginTop:30}}
                          label="Sent"
                          disabled={true}
                          primary={true}
                          keyboardFocused={false}
                        />
                      </div>
                    );
                  }
                })(this.state.isEmailSubmitted)}

                {(function(showMe,submit) {
                  if (showMe) {
                    return (
                      <div>
                        <FlatButton
                          style={{marginTop:30}}
                          label="Send"
                          primary={true}
                          keyboardFocused={false}
                          onTouchTap={submit}
                        />
                      </div>
                    );
                  }
                })(!this.state.isEmailSubmitted,this.submitEmail)}
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
    medicalRights: getMedicalRightsForUser(state),
    selectedDiagnostics: getSelectedMedicalRights(state),
    user: getUser(state)
  };
}

StepNumber4.contextTypes = {
  mixpanel: PropTypes.any
};

export default connect(mapStateToProps)(StepNumber4);

