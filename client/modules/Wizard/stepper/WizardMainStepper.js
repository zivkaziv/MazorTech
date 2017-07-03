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
class WizardMainStepper extends React.Component {

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
    if(this.handleStepValidation(stepIndex)) {
      if (!this.state.loading) {
        this.dummyAsync(() => this.setState({
          loading: false,
          stepIndex: stepIndex + 1,
          finished: stepIndex >= 3,
        }));
      }
    }
  };

  handleStepValidation = (stepIndex) => {
    try {
      let stepIndexToWorkOn = ++stepIndex;
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
          <Step1 ref="step1"/>
        );
      case 1:
        return(
          <Step2 ref="step2"/>
        );
      case 2:
        return(
          <Step3 ref="step3"/>
        );
      case 3:
        return(
          <Step4 ref="step4"/>
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
    const contentStyle = {margin: '0 16px',width:'100%', overflow: 'hidden'};

    if (finished) {
      return (
        <div style={contentStyle}>
          <StepSurvey/>
          <p>
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
        </div>
      );
    }

    return (
      <div style={contentStyle}>
        <div>{this.getStepContent(stepIndex)}</div>
        <div style={{marginTop: 24, marginBottom: 12,display:'flex',justifyContent:'flex-start'}}>
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            onTouchTap={this.handlePrev}
            style={{marginRight: 12}}
          />
          <RaisedButton
            labelPosition="before"
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
      <div style={{width: '100%', maxWidth: 1000, margin: 'auto'}}>
        <Stepper
          activeStep={stepIndex}
          linear="true">
          <Step>
            <StepLabel>Doctor Diagnosis</StepLabel>
          </Step>
          <Step>
            <StepLabel>Personal Info</StepLabel>
          </Step>
          <Step>
            <StepLabel>Terms</StepLabel>
          </Step>
          <Step>
            <StepLabel>Your Rights</StepLabel>
          </Step>
        </Stepper>
        <ExpandTransition loading={loading} open={true}
                          style={{width: '100%', maxWidth: 1000, margin: 'auto'}}>
          {this.renderContent()}
        </ExpandTransition>
      </div>
    );
  }
}

WizardMainStepper.childContextTypes = {
  muiTheme: React.PropTypes.object,
};
export default WizardMainStepper;
