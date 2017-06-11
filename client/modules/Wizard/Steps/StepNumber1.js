'use strict';

import React, { Component, PropTypes } from 'react';
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
    overflow:'auto',
  },
  medicalDiagnosticsContainer:{
    display:'flex'
  },
  searchContainer:{
    height:350,
    overflow:'auto'
  },
  cantFindContainer:{
    textAlign:'center'
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
  }

  isValidated() {
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
  handleOpen = () => {
    this.setState({dialogOpen: true});
  };
  handleClose = () => {
    this.setState({dialogOpen: false});
  };

  handleCantFindDialogOpen = () => {
    this.setState({cantFindDialogOpen: true});
  };
  handleCantFindDialogClose = () => {
    this.setState({cantFindDialogOpen: false});
  };


  getChildContext() {
    return {
      muiTheme: getMuiTheme(lightTheme)
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
        label="Save"
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
              keyboardFocused={false}
              onTouchTap={this.handleCantFindDialogOpen}
            />
          </div>

          {/*Can't find dialog*/}
          <Dialog
            title="Can't find"
            actions={actionsCantFind}
            modal={true}
            open={this.state.cantFindDialogOpen}
            onRequestClose={this.handleCantFindDialogClose}>
            <TextField hintText="Write here in your words the medical diagnostic"/>
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
    // showAddPost: getShowAddPost(state),
    medicalRights: getMedicalRights(state),
  };
}

StepNumber1.propTypes = {
  medicalRight: PropTypes.any
};

StepNumber1.childContextTypes = {
  muiTheme: React.PropTypes.object
};

StepNumber1.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(StepNumber1);
