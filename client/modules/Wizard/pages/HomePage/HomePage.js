import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

// Import Components
// import PostList from '../../components/PostList';

// Import Actions
// import { toggleAddPost } from '../../../App/AppActions';

// Import Selectors
// import { getShowAddPost } from '../../../App/AppReducer';
// import { getPosts } from '../../PostReducer';

const styles = {
  uploadButton: {
    marginTop:20
  }
};

class HomePage extends Component {
  // componentDidMount() {
  //   this.props.dispatch(fetchPosts());
  // }
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
        Home page<br/>
        Here we'll put some stuff that related to the service...Yey...<br/>
        <Link to={'/wizard'} >
         Start wizard
        </Link>
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
    // posts: getPosts(state),
  };
}

HomePage.propTypes = {
  // posts: PropTypes.arrayOf(PropTypes.shape({
  //   name: PropTypes.string.isRequired,
  //   title: PropTypes.string.isRequired,
  //   content: PropTypes.string.isRequired,
  // })).isRequired,
  // showAddPost: PropTypes.bool.isRequired,
  // dispatch: PropTypes.func.isRequired,
};

HomePage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(HomePage);
