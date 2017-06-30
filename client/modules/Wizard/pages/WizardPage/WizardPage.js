import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import root from 'window-or-global'

// Import Components
import WizardMain from '../../componenets/WizardMain';
import WizardMainStepperMobile from '../../stepper/WizardMainStepperMobile'
import WizardMainStepper from '../../stepper/WizardMainStepper'

// Import Actions
import { fetchMedicalRights } from '../../WizardActions';
import { fetchUser } from '../../UserActions';
// import { toggleAddPost } from '../../../App/AppActions';

// Import Selectors
import { getDevice } from '../../../App/AppReducer';
import { getMedicalRights } from '../../WizardReducer';


import Header from '../../../App/components/Header/Header';

const styles = {
  wizardContainer: {
    overflow:'auto',
    position: 'fixed',
    top: '44px',
    bottom: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    height:'100%',
  }
};

class WizardPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchMedicalRights());
    this.props.dispatch(fetchUser());
    this.context.mixpanel.track('Wizard login');
    console.log('here');
  }

  //
  // handleDeletePost = post => {
  //   if (confirm('Do you want to delete this post')) { // eslint-disable-line
  //     this.props.dispatch(deletePostRequest(post));
  //   }
  // };
  //
  // handleAddPost = (name, title, content) => {
  //   this.props.dispatch(toggleAddPost());
  //   this.props.dispatch(addPostRequest({ name, title, content }));
  // };

  render() {
    return(
      <div style={{
        width:'100%'
      }}>
        <Header/>
        <div style={styles.wizardContainer}>
          {(function(isMobile) {
            if (isMobile) {
              return ( <WizardMainStepperMobile/> );
            }else{
              return ( <WizardMain/> );
            }
          })(this.props.isMobile)}
        </div>
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
// PostListPage.need = [() => { return fetchPosts(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    // showAddPost: getShowAddPost(state),
    isMobile: getDevice(state,root.navigator?root.navigator.userAgent:false),
  };
}

WizardPage.propTypes = {
  medicalRight: PropTypes.any,
  isMobile: PropTypes.any
};

WizardPage.contextTypes = {
  router: PropTypes.object,
  mixpanel: PropTypes.object
};
export default connect(mapStateToProps)(WizardPage);
