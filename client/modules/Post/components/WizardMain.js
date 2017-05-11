import React, { PropTypes } from 'react';

// Import Components
import PostListItem from './PostListItem/PostListItem';
import styles from '../../../css/prog-tracker.css';

import StepZilla from 'react-stepzilla';

//Steps
import Step1 from '../../Wizard/Step1'
import Step2 from '../../Wizard/Step2'
import Step3 from '../..//Wizard/Step3'
import Step4 from '../../Wizard/Step4'
import Step5 from '../../Wizard/Step5'
import Step6 from '../../Wizard/Step6'


function WizardMain(props) {
  const steps =
    [
      {name: 'Diagnosis', component: <Step1 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
      {name: 'Info', component: <Step2 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
      {name: 'Terms', component: <Step3 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
      {name: 'Rights', component: <Step4 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />}
    ];


  return (
    <div className="listView">
      <div className='step-progress'>
        <StepZilla steps={steps}/>
      </div>
    </div>
  );
}

WizardMain.propTypes = {
  // posts: PropTypes.arrayOf(PropTypes.shape({
  //   name: PropTypes.string.isRequired,
  //   title: PropTypes.string.isRequired,
  //   content: PropTypes.string.isRequired,
  //   slug: PropTypes.string.isRequired,
  //   cuid: PropTypes.string.isRequired,
  // })).isRequired,
  // handleDeletePost: PropTypes.func.isRequired,
};

export default WizardMain;
