'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import MedicalDiagnosticItem from '../componenets/MedicalDiagnosticItem/MedicalDiagnosticItem';
import SearchInput, {createFilter} from 'react-search-input'

//  Material
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';


// Import Selectors
import { getMedicalRights,printState } from '../WizardReducer';

// Styles
import searchInputStyles from './StepNumber1.css';
const styles = {
  pageStyle: {
    maxHeight: 350,
    overflow:'auto',
  },
  medicalDiagnosticsContainer:{
    display:'flex'
  }
};

const KEYS_TO_FILTERS = ['condition'];

class StepNumber1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm : '',
      dialogOpen : false
    };

    this.printMedicalRights = this.printMedicalRights.bind(this);
    this.searchUpdated = this.searchUpdated.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
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

  printMedicalRights(){
    console.log(this.props.medicalRights);
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

    return (
      <div className="step step1" style={styles.pageStyle}>
        <div className="row">
          {/*<h3>Please mark the medical diagnostics</h3>*/}
          <SearchInput style={styles.medicalRightsContainer}
                       placeholder='Search for your medical diagnostic'
                       className={searchInputStyles['search-input']}
                       onChange={this.searchUpdated} />
          {filteredMedicalDiagnostics.map((medicalRight,i) => {
            return (
              <MedicalDiagnosticItem key={i} medicalRight={medicalRight}/>
            )
          })}

          <Dialog
            title="Agree terms"
            actions={actions}
            modal={false}
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

export default connect(mapStateToProps)(StepNumber1);
