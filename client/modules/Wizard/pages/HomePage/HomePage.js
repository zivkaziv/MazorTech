import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

// Material
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

import BoolLogoSvg from '../../../App/IconSvg'

// Import Components
// import PostList from '../../components/PostList';

// Import Actions
// import { toggleAddPost } from '../../../App/AppActions';

// Import Selectors
// import { getShowAddPost } from '../../../App/AppReducer';
// import { getPosts } from '../../PostReducer';

const styles = {
  homePageContainer:{
    background: 'url("http://wallpapercave.com/wp/2N8Zebr.jpg") no-repeat fixed center',
    position:'fixed',
    top:0,
    left:0,
    right:0,
    bottom:0
  },
  logo:{
    position:'fixed',
    top:'10px',
    left:'15px',
    color:'white'
  },
  homePageTextContainer: {
    position: 'relative',
    top: '26%',
    textAlign:'center',
    color:'white'
  },
  homePageTextTitle: {
    fontSize:'30px',
    fontWeight:"bold",
    marginBottom:"10px"
  },
  homePageTextSubTitle: {
    fontSize:'18px',
    marginBottom:"15px"
  },
  button: {
    textAlign: 'center',
    display: 'inline-flex',
    fontSize:"24px",
    // fontWeight:"bold"
  },

};

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.componentDidMount = this.componentDidMount.bind(this);
    this.goToWizard = this.goToWizard.bind(this);
  }

  getChildContext() {
    return {
      muiTheme: getMuiTheme(lightTheme)
    };
  }
  componentDidMount() {
    this.context.mixpanel.track('Homepage login');
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

  goToWizard(){
    this.context.mixpanel.track('Homepage button click',{
      'button_name':'start wizard'
    });
  }
  render() {
    return (
      <div style={styles.homePageContainer}>
        <div style={styles.logo}>
          <BoolLogoSvg/>
        </div>
        <div style={styles.homePageTextContainer}>
           <div style={styles.homePageTextTitle}>
             Find your medical rights now
           </div>
           <div  style={styles.homePageTextSubTitle}>
             Don't waste your time to analyze your medical insurance, <br/>
             Just mark what the doctor said
           </div>
            <Link to={'/wizard'} >
              <RaisedButton
                labelPosition="before"
                style={styles.button}
                containerElement="label"
                label="Get Started Now"
                onTouchTap={this.goToWizard}
              />
            </Link>
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
HomePage.childContextTypes = {
  muiTheme: React.PropTypes.object
};

HomePage.contextTypes = {
  router: React.PropTypes.object,
  mixpanel: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(HomePage);
