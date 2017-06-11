import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {
  LandingCanvas,
  ThemePropagator,
  GenericBrick,
  DoubleContentBrick,
  StrongMessageBrick,
  EnumerationBrick,
  EmailSqueezeBrick,
  FooterBrick,
  CallToAction,
  FeatureItem,
  PlaceHolder
} from 'landricks-components';

// Import Images
import background from '../../images/background_city.jpg';

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

const BASE_THEME = {
  fontFamily: 'Lato',
  baseFontSize: '18px'
};

const HEADER_BAND_THEME = {
  ...BASE_THEME,
  baseFontSize: '18px',
  backgroundColor: '#71A2B6',
  textColor: '#FFFFFF',
  primaryColor: '#FFFFFF',
  primaryContrastColor: '#71A2B6',
  objectDesign: 'square-solid',
  backgroundImage: `${background}`
};

const HEAVY_BAND_THEME = {
  ...BASE_THEME,
  backgroundColor: '#29D9C2',
  textColor: '#FFFFFF',
  primaryColor: '#FFFFFF',
  primaryContrastColor: '#000000',
  secondaryColor: '#C99DA3',
  objectDesign: 'square-outline'
};

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


const LIGHT_BAND_THEME = {
  ...BASE_THEME,
  backgroundColor: '#FAFAFA',
  textColor: '#888888',
  primaryColor: '#996888',
  secondaryColor: '#C99DA3'
};

class LandingPage extends Component {
  getChildContext() {
    return {
      muiTheme: getMuiTheme(lightTheme)
    };
  }

  render() {
    return (
      <div>
        <LandingCanvas>
          <StrongMessageBrick
            theme={ HEADER_BAND_THEME }
            messageLevel1="A beautiful message, but not so long"
            messageLevel2="A related but not so important concept, that usually is a little bit longer than the previous"
            CTAs={ <CallToAction label="sign up"/>}
            styles={styles.homePageContainer}
          />
          <DoubleContentBrick theme={ HEAVY_BAND_THEME } hasHeader={ false }>
            <ThemePropagator>
              <h1>Our product highlight</h1>
              <p>you wont find a better product anywhere in the universe.</p>
              <CallToAction label="buy" /><CallToAction label="learn more" />
            </ThemePropagator>
            <PlaceHolder />
          </DoubleContentBrick>
          <GenericBrick
            theme={ LIGHT_BAND_THEME }
            title="Yes, we can!"
            subtitle="if you think you can do it"
            contentStyle={ {textAlign: 'center'} }>
            <PlaceHolder />
          </GenericBrick>
          <EnumerationBrick
            theme={ HEAVY_BAND_THEME }
            title="Awesome features"
            subtitle="You can add any number of them">
            <FeatureItem
              icon="rocket"
              title="Feature 1"
              // description="bla bla bla bla bla"
            />
            <FeatureItem
              icon="rocket"
              title="Feature 2"
              // description="bla bla bla bla bla"
            />
            <FeatureItem
              icon="rocket"
              title="Feature 3"
              // description="bla bla bla bla bla"
            />
          </EnumerationBrick>
          <DoubleContentBrick theme={ LIGHT_BAND_THEME } hasHeader={ false }>
            <PlaceHolder useLoremIpsum={ true } />
            <PlaceHolder label="image placeholder" />
          </DoubleContentBrick>
          <DoubleContentBrick theme={ LIGHT_BAND_THEME } hasHeader={ false }>
            <PlaceHolder label="image placeholder" />
            <PlaceHolder useLoremIpsum={ true } />
          </DoubleContentBrick>
          <DoubleContentBrick theme={ LIGHT_BAND_THEME } hasHeader={ false }>
            <PlaceHolder useLoremIpsum={ true } />
            <PlaceHolder label="image placeholder" />
          </DoubleContentBrick>
          <EmailSqueezeBrick
            title="Join our Newsletter"
            // subtitle="To get updates about what we want you to know about"
            theme={ HEAVY_BAND_THEME }
            buttonLabel="Join"
            placeholder="Enter your email"
          />
        </LandingCanvas>
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

LandingPage.propTypes = {
  // posts: PropTypes.arrayOf(PropTypes.shape({
  //   name: PropTypes.string.isRequired,
  //   title: PropTypes.string.isRequired,
  //   content: PropTypes.string.isRequired,
  // })).isRequired,
  // showAddPost: PropTypes.bool.isRequired,
  // dispatch: PropTypes.func.isRequired,
};
LandingPage.childContextTypes = {
  muiTheme: React.PropTypes.object
};

LandingPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(LandingPage);
