import React, { PropTypes } from 'react';

require('./WizardMain.css');

// Import Components
// import PostListItem from '../../Post/components/PostListItem/PostListItem';
// import styles from '../../../css/prog-tracker.css';

import StepZilla from 'react-stepzilla';
//Steps
import Step1 from '../Steps/StepNumber1'
import Step2 from '../Steps/StepNumber2'
import Step3 from '../Steps/StepNumber3'
import Step4 from '../Steps/StepNumber4'
import Step5 from '../Steps/StepNumber5'

function WizardMain(props) {
  const steps =
    [
      {name: 'Doctor Diagnosis', component: <Step1 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
      // {name: 'Summary', component: <Step5 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
      {name: 'Personal Info', component: <Step2 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
      {name: 'Terms', component: <Step3 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
      {name: 'Your Medical Rights', component: <Step4 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />}
      // {name: 'Summary', component: <Step5 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />}
    ];


  return (
    <div>
      <div className='step-progress'>
        <StepZilla steps={steps}
                   dontValidate={false}
                   stepsNavigation={false}
                   skipValidationExecution = {false}
                   nextTextOnFinalActionStep={"See my medical rights"}/>
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
