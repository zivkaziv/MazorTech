import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Components
import WizardMain from '../../componenets/WizardMain';

// Import Actions
import { fetchMedicalRights } from '../../WizardActions';
// import { toggleAddPost } from '../../../App/AppActions';

// Import Selectors
// import { getShowAddPost } from '../../../App/AppReducer';
import { getMedicalRights } from '../../WizardReducer';

class WizardPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchMedicalRights());
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
    return (
      <div>
        <WizardMain/>
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
    medicalRights: getMedicalRights(state),
  };
}

WizardPage.propTypes = {
  medicalRight: PropTypes.any
  // medicalRights: PropTypes.arrayOf(PropTypes.shape({
  //   condition: PropTypes.string.isRequired
  // })).isRequired
  // showAddPost: PropTypes.bool.isRequired,
  // dispatch: PropTypes.func.isRequired,
};

WizardPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(WizardPage);
