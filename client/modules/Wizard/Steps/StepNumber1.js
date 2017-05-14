'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

// Import Selectors
import { getMedicalRights,printState } from '../WizardReducer';

const styles = {
  pageStyle: {
    maxHeight: 350,
    overflow:'auto',
  }
};

class StepNumber1 extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.printMedicalRights = this.printMedicalRights.bind(this);
  }

  componentDidMount() {
  }

  componentWillUnmount() {}

  // not required as this component has no forms or user entry
  // isValidated() {}
  printMedicalRights(){
    console.log(this.props.medicalRights);
  }

  render() {
    return (
      <div className="step step1" style={styles.pageStyle}>
        <div className="row">
            <h3>Please choose the diagnosis</h3>
            {/*<button onClick={this.printMedicalRights}>Press to print</button>*/}

          {this.props.medicalRights.map((medicalRight,i) => (
            <div key={i}>
              {medicalRight.condition}
            </div>
          ))}
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
