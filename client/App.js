/**
 * Root Component
 */
import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import IntlWrapper from './modules/Intl/IntlWrapper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MobileDetect from 'mobile-detect';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme  from 'material-ui/styles/baseThemes/lightBaseTheme';
import root from 'window-or-global'


// Mixpanel
import mixpanel from 'mixpanel-browser';
import MixpanelProvider from 'react-mixpanel';

mixpanel.init("80bb2a9473ffb596cb6e7a06d7306699");

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

//Mobile detect
var mobileDetect = new MobileDetect(root.navigator.userAgent);
//How to check if the device is mobile or not
console.log(mobileDetect.mobile());

// Import Routes
import routes from './routes';

// Base stylesheet
require('./main.css');
require('./css/prog-tracker.css');
require('./modules/Wizard/componenets/WizardMain.css');

export default function App(props) {
  return (
    <MuiThemeProvider>
      <MixpanelProvider mixpanel={mixpanel}>
        <Provider store={props.store}>
          <IntlWrapper>
            <Router history={browserHistory}>
              {routes}
            </Router>
          </IntlWrapper>
        </Provider>
      </MixpanelProvider>
    </MuiThemeProvider>
  );
}

App.propTypes = {
  store: React.PropTypes.object.isRequired,
};
