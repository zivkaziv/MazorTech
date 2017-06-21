import React, { PropTypes } from 'react';

import styles from './WizardMain.css';

// Import Components
// import PostListItem from '../../Post/components/PostListItem/PostListItem';
// import styles from '../../../css/prog-tracker.css';

import StepZilla from 'react-stepzilla';
import WizardMainStepper from '../stepper/WizardMainStepper';

//Steps
import Step1 from '../Steps/StepNumber1'
import Step2 from '../Steps/StepNumber2'
import Step3 from '../Steps/StepNumber3'
import Step4 from '../Steps/StepNumber4'

function WizardMain(props) {
  const steps =
    [
      {name: 'Doctor Diagnosis', component: <Step1 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
      {name: 'Personal Info', component: <Step2 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
      {name: 'Terms', component: <Step3 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
      {name: 'Your Medical Rights', component: <Step4 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />}
    ];


  return (
    <div>
      <div className='step-progress' style=
        {{
          width:'100%',
          display:'inline-flex',
          flexDirection:'column',
          margin: 'auto',
          maxWidth: 1000
        }}>
{/*        <StepZilla steps={steps}
                   dontValidate={false}
                   stepsNavigation={false}
                   skipValidationExecution = {false}
                   nextTextOnFinalActionStep={"See my medical rights"}/>*/}
           <WizardMainStepper/>
          <span className={styles['wizard-spacer']} style=
                  {{
                    // width:'100%',
                    display:'inline-flex',
                    margin: 'auto',
                    maxWidth: 1000,
                    // visibility:'hidden'
                  }}>spacer</span>
      </div>
    </div>
  );
}

WizardMain.propTypes = {
  // medicalRights: PropTypes.arrayOf(PropTypes.shape({
  //   condition: PropTypes.string.isRequired
  // })).isRequired,
};

export default WizardMain;
