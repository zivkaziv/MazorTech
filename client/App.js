/**
 * Root Component
 */
import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import IntlWrapper from './modules/Intl/IntlWrapper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme  from 'material-ui/styles/baseThemes/lightBaseTheme';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Import Routes
import routes from './routes';

// Base stylesheet
require('./main.css');
require('./css/prog-tracker.css');

export default function App(props) {


  return (
    <MuiThemeProvider>
      <Provider store={props.store}>
        <IntlWrapper>
          <Router history={browserHistory}>
            {routes}
          </Router>
        </IntlWrapper>
      </Provider>
    </MuiThemeProvider>
  );
}

App.propTypes = {
  store: React.PropTypes.object.isRequired,
};
