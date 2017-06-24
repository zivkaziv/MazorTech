'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import MedicalRightItem from '../componenets/MedicalRightItem/MedicalRIghtItem';

// Material
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import ReactStars from 'react-stars'

// Import Selectors
import { getSelectedMedicalRights } from '../WizardReducer';

const styles = {
  question:{
    display:'flex',
    alignItems:'center'
  }
};

export default class StepSurvey extends Component {
  constructor(props) {
    super(props);

    this.state = {
      generalRating:0,
      isSubmitted:false,
      moreFeatures:'',
      freeText:'',
      email:'',
      isEmailSubmitted:false
    };

    this.ratingChanged = this.ratingChanged.bind(this);
    this.submitFeedback = this.submitFeedback.bind(this);
    this.submitEmail= this.submitEmail.bind(this);
    this.emailHasChanged= this.emailHasChanged.bind(this);
  }

  componentDidMount() {
    this.context.mixpanel.track('Wizard step open',{'ab_version':'v1','step':'survey'});
  }

  ratingChanged(newRating){
    console.log(newRating);
    this.setState({generalRating:newRating});
  };

  emailHasChanged(email){
    this.state.email = email;
  }

  submitFeedback(){
    this.context.mixpanel.track('Feedback',{
      'ab_version':'v1',
      'general_rating':this.state.generalRating,
      'more_features':this.state.moreFeatures,
      'free_text':this.state.freeText,
    });

    this.setState({isSubmitted: true});
  }

  submitEmail(){
    this.context.mixpanel.track('Register email',{
      'ab_version':'v1',
      'email':this.state.email,
    });

    this.setState({isEmailSubmitted: true});
  }

  handleChange = (event, index, value) => this.setState({moreFeatures:value});

  textFieldChange = (event, text) => this.setState({freeText:text});

  render(){
      var results = null;
      if(!this.state.isSubmitted){
        results = (
          <div className="step" style={styles.wizardStepPageStyle}>
              <div className="row">
              <section>
                <h2>Help us to get improve</h2>
              </section>
              {/*<CircularProgress size={80} thickness={5} />*/}
              <div className="col-md-12">
                <div style={styles.question}>
                  <span style={{marginRight:20}}>Did you like the idea of our wizard?</span>
                  <ReactStars
                    count={5}
                    value={this.state.generalRating}
                    onChange={this.ratingChanged}
                    size={24}
                    half={false}
                    color2={'#ffd700'}/>
                </div>
                <div style={styles.question}>
                  <SelectField
                    style={{minWidth:350}}
                    floatingLabelText="What else will really help you?"
                    value={this.state.moreFeatures}
                    onChange={this.handleChange}
                  >
                    <MenuItem value={'more_rights'} primaryText="Get more rights" />
                    <MenuItem value={'help_to_get_them'} primaryText="Someone that will help me to get them" />
                    <MenuItem value={'comparison'} primaryText="Insurance comparison" />
                    <MenuItem value={'smart_recommendation'} primaryText="Recommend me on other insurance programs" />
                  </SelectField>
                </div>
                <TextField
                  hintText="Free text for everything you want"
                  floatingLabelText="feel free to write any review"
                  multiLine={true}
                  onChange={this.textFieldChange}
                /><br />

                <FlatButton
                  style={{marginTop:30}}
                  label="Submit"
                  primary={true}
                  keyboardFocused={false}
                  onTouchTap={this.submitFeedback}
                />
              </div>
            </div>
          </div>
        )
      }else {
        results = (
          <div className="step" style={styles.wizardStepPageStyle}>
            <div className="row">
              <h1 style={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                color:'#00bcd4',
                textAlign:'center'
              }}>
                Thanks..
                <br/>
                you really helped us
                <br/>
                If you want to stay in touch, enter your mail.
                <br/>
                We promise never to send you spam
                <br/>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  textAlign: 'center',
                  justifyContent: 'center'
                }}>
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

              </h1>
            </div>
          </div>
        )
      }

      return results;
  }
}

StepSurvey.contextTypes = {
  mixpanel: PropTypes.object.isRequired
};
