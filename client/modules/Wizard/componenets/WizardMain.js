import React, { PropTypes } from 'react';

// Import Components
// import PostListItem from '../../Post/components/PostListItem/PostListItem';
// import styles from '../../../css/prog-tracker.css';

import StepZilla from 'react-stepzilla';

//Steps
import Step1 from '../Steps/Step1'
import Step2 from '../Steps/Step2'
import Step3 from '../Steps/Step3'
import Step4 from '../Steps/Step4'


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
