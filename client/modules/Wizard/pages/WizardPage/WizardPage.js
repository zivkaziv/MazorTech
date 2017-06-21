import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

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

const styles = {
  wizardContainer: {
    width: '100%',
  }
};

class WizardPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchMedicalRights());
    this.props.dispatch(fetchUser());
    this.context.mixpanel.track('Wizard login');
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
    const isMobile = this.props.isMobile;
    if (!isMobile){
      return (
        <WizardMain/>
      )
    }else{
      return(
        <WizardMainStepperMobile/>
      )
    }
  }
}

// Actions required to provide data for this component to render in sever side.
// PostListPage.need = [() => { return fetchPosts(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    // showAddPost: getShowAddPost(state),
    isMobile: getDevice(state,false),
  };
}

WizardPage.propTypes = {
  medicalRight: PropTypes.any,
  isMobile: PropTypes.any
};

WizardPage.contextTypes = {
  router: React.PropTypes.object,
  mixpanel: PropTypes.object.isRequired
};
export default connect(mapStateToProps)(WizardPage);
