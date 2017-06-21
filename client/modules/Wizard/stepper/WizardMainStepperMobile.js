import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import TextField from 'material-ui/TextField';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightTheme from 'material-ui/styles/baseThemes/lightBaseTheme';


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
    loading: false,
    finished: false,
    stepIndex: 0,
  };
  getChildContext() {
    return {
      muiTheme: getMuiTheme(lightTheme)
    };
  }

  dummyAsync = (cb) => {
    this.setState({loading: true}, () => {
      this.asyncTimer = setTimeout(cb, 500);
    });
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    if (!this.state.loading) {
      this.dummyAsync(() => this.setState({
        loading: false,
        stepIndex: stepIndex + 1,
        finished: stepIndex >= 3,
      }));
    }
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (!this.state.loading) {
      this.dummyAsync(() => this.setState({
        loading: false,
        stepIndex: stepIndex - 1,
      }));
    }
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return(
          <Step1/>
        );
      case 1:
        return(
          <Step2/>
        );
      case 2:
        return(
          <Step3/>
        );
      case 3:
        return(
          <Step4/>
        );
      default:
        // return 'You\'re a long way from home sonny jim!';
        return (
          <StepSurvey/>
        )
    }
  }

  renderContent() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px', overflow: 'hidden'};

    if (finished) {
      return (
        <div style={contentStyle}>
          <p>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                this.setState({stepIndex: 0, finished: false});
              }}
            >
              Click here
            </a> to reset the example.
          </p>
        </div>
      );
    }

    return (
      <div style={contentStyle}>
        <div>{this.getStepContent(stepIndex)}</div>
        <div style={{marginTop: 24, marginBottom: 12}}>
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            onTouchTap={this.handlePrev}
            style={{marginRight: 12}}
          />
          <RaisedButton
            label={stepIndex === 3 ? 'Finish' : 'Next'}
            primary={true}
            onTouchTap={this.handleNext}
          />
        </div>
      </div>
    );
  }

  render() {
    const {loading, stepIndex} = this.state;

    return (
      <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
        <Stepper
          activeStep={stepIndex}
          orientation="vertical">
          <Step>
            <StepLabel>Doctor Diagnosis</StepLabel>
            {this.renderContent()}
          </Step>
          <Step>
            <StepLabel>Personal Info</StepLabel>
            {this.renderContent()}
          </Step>
          <Step>
            <StepLabel>Terms</StepLabel>
            {this.renderContent()}
          </Step>
          <Step>
            <StepLabel>Your rights</StepLabel>
            {this.renderContent()}
          </Step>
        </Stepper>
      </div>
    );
  }
}

WizardMainStepperMobile.childContextTypes = {
  muiTheme: React.PropTypes.object,
};
export default WizardMainStepperMobile;
