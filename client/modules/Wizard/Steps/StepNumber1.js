'use strict';

import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

// Import Selectors
import { getMedicalRights,printState } from '../WizardReducer';

const styles = {
  pageStyle: {
    maxHeight: 350,
    overflow:'auto',
  }
};

export default class StepNumber1 extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
  }

  componentWillUnmount() {}

  // not required as this component has no forms or user entry
  // isValidated() {}
  printMedicalRights(){
    // console.log(printState());
  }

  render() {
    return (
      <div className="step step1" style={styles.pageStyle}>
        <div className="row">
            <h3>Please choose the diagnosis</h3>
            <button onClick={this.printMedicalRights}>Press to print</button>
        </div>
      </div>
    )
  }
}
