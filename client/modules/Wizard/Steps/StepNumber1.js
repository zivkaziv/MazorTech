'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MedicalDiagnosticItem from '../componenets/MedicalDiagnosticItem/MedicalDiagnosticItem';
import SearchInput, {createFilter} from 'react-search-input'

//  Material
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

// Import Selectors
import { getMedicalRights } from '../WizardReducer';

// Styles
import searchInputStyles from './StepNumber1.css';
const styles = {
  wizardStepPageStyle: {
    maxHeight: 350,
    // maxWidth: 679,
    // overflow:'auto',
  },
  medicalDiagnosticsContainer:{
    display:'flex'
  },
  searchContainer:{
    height:383,
    overflow:'auto'
  },
  cantFindContainer:{
    textAlign:'center',
    width:'100%'
  },
  dialogContentStyle:{
    width: '50%',
    maxWidth: 'none',
  }
};

const KEYS_TO_FILTERS = ['condition'];

class StepNumber1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm : '',
      dialogOpen : false,
      cantFindDialogOpen : false
    };

    this.searchUpdated = this.searchUpdated.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleCantFindDialogOpen = this.handleCantFindDialogOpen.bind(this);
    this.handleCantFindDialogClose = this.handleCantFindDialogClose.bind(this);
    this.isValidated = this.isValidated.bind(this);
  }

  isValidated() {
    console.log('check is validate');
    let isValid = false;
    for(let index = 0; index < this.props.medicalRights.length; index++){
      if(this.props.medicalRights[index].isSelected){
        isValid = true;
        break;
      }
    }
    if(!isValid){
      this.handleOpen();
    }

    return isValid;
  }

  searchUpdated (term) {
    console.log(term);
    this.setState({searchTerm: term})
  }

  componentDidMount() {
    this.context.mixpanel.track('Wizard step open',{'ab_version':'v1','step':'1'});
  }

  handleOpen = () => {
    this.setState({dialogOpen: true});
  };
  handleClose = () => {
    this.setState({dialogOpen: false});
  };

  handleCantFindDialogOpen = () => {
    this.context.mixpanel.track('Wizard step button',{'ab_version':'v1','step':'1','button':"can't find"});
    this.setState({cantFindDialogOpen: true});
  };
  handleCantFindDialogClose = () => {
    this.setState({cantFindDialogOpen: false});
  };

  getChildContext() {
    return {
      muiTheme: getMuiTheme(lightTheme),
    };
  }
  render() {
    const filteredMedicalDiagnostics = this.props.medicalRights.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));

    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    const actionsCantFind = [
      <FlatButton
        label="OK"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleCantFindDialogClose}
      />,
    ];

    return (
      <div className="step step1" style={styles.wizardStepPageStyle}>
        <div className="row">
          <div className="row" style={styles.searchContainer}>
            <SearchInput placeholder='Search for your medical diagnostic'
                         className={searchInputStyles['search-input']}
                         onChange={this.searchUpdated} />
            {filteredMedicalDiagnostics.map((medicalRight,i) => {
              return (
                <MedicalDiagnosticItem key={i} medicalRight={medicalRight}/>
              )
            })}
          </div>
          <div className="row" style={styles.cantFindContainer}>
            <FlatButton
              label="Can't find proper diagnostic"
              primary={true}
              fullWidth={true}
              keyboardFocused={false}
              contentStyle={styles.dialogContentStyle}
              onTouchTap={this.handleCantFindDialogOpen}
            />
          </div>

          {/*Can't find dialog*/}
          <Dialog
            title="Can't find"
            actions={actionsCantFind}
            modal={true}
            open={this.state.cantFindDialogOpen}
            contentStyle={styles.dialogContentStyle}
            onRequestClose={this.handleCantFindDialogClose}>
            Sorry, but we aren't support it yet...
            {/*<TextField hintText="Write here in your words the medical diagnostic"/>*/}
          </Dialog>

          {/*You must choose dialog*/}
          <Dialog
            title="Please choose"
            actions={actions}
            modal={true}
            open={this.state.dialogOpen}
            onRequestClose={this.handleClose}
          >
            You must select at least one medical diagnostic
          </Dialog>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    medicalRights: getMedicalRights(state)
  };
}

StepNumber1.propTypes = {
  medicalRight: PropTypes.any
};

StepNumber1.childContextTypes = {
  muiTheme: React.PropTypes.object,
};

StepNumber1.contextTypes = {
  router: React.PropTypes.object,
  mixpanel: PropTypes.any
};

export default connect(mapStateToProps, null, null, { withRef: true })(StepNumber1);
