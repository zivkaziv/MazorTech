import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import TextField from 'material-ui/TextField';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

import Scroll from 'react-scroll';
var scroll     = Scroll.animateScroll;

//Steps
import Step1 from '../Steps/StepNumber1'
import Step2 from '../Steps/StepNumber2'
import Step3 from '../Steps/StepNumber3'
import Step4 from '../Steps/StepNumber4'
import StepSurvey from '../Steps/StepSurvey'

/**
 * A contrived example using a transition between steps
 */
class WizardMainStepperMobile extends React.Component {

  state = {
    finished: false,
    stepIndex: 0,
  };

  getChildContext() {
    return {
      muiTheme: getMuiTheme(lightTheme)
    };
  }

  handleNext = () => {
    const {stepIndex} = this.state;
    if(this.handleStepValidation(stepIndex)) {
      this.setState({
        stepIndex: stepIndex + 1,
        finished: stepIndex >= 3,
      });
    }
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  handleStepValidation = (stepIndex) => {
    try {
      let stepIndexToWorkOn = ++stepIndex;
      console.log(stepIndexToWorkOn);
      if (this.refs['step' + stepIndexToWorkOn].getWrappedInstance() &&
        this.refs['step' + stepIndexToWorkOn].getWrappedInstance().isValidated) {
        return this.refs['step' + stepIndexToWorkOn].getWrappedInstance().isValidated()
      } else {
        return true;
      }
    }catch(err){
      return true;
    }
  };

  renderStepActions(step) {
    const {stepIndex} = this.state;

    return (
      <div style={{margin: '12px 0'}}>
        <RaisedButton
          label={stepIndex === 3 ? 'Finish' : 'Next'}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onTouchTap={this.handleNext}
          style={{marginRight: 12}}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onTouchTap={this.handlePrev}
          />
        )}
      </div>
    );
  }

  render() {
    const {finished, stepIndex} = this.state;

    return (
      <div style={{maxWidth: 380, margin: 'auto', paddingBottom:'100px'}}>
        <Stepper activeStep={stepIndex}
                 linear={false}
                 orientation="vertical">
          <Step>
            <StepLabel>Doctor Diagnosis</StepLabel>
            <StepContent>
              <Step1 ref="step1"/>
              {this.renderStepActions(0)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Personal Info</StepLabel>
            <StepContent>
              <Step2  ref="step2"/>
              {this.renderStepActions(1)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Terms</StepLabel>
            <StepContent>
              <Step3 ref="step3"/>
              {this.renderStepActions(2)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Your Medical Rights</StepLabel>
            <StepContent>
              <Step4 ref="step4"/>
              {this.renderStepActions(3)}
            </StepContent>
          </Step>
        </Stepper>
        {finished && (
          <p style={{margin: '20px 0', textAlign: 'center'}}>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                this.setState({stepIndex: 0, finished: false});
              }}
            >
              Click here
            </a> to find additional rights
          </p>
        )}
      </div>
    );
  }
}

WizardMainStepperMobile.childContextTypes = {
  muiTheme: React.PropTypes.object,
};
export default WizardMainStepperMobile;
