import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import CheckBox from 'material-ui/Checkbox';

// Import Style
import styles from './MedicalDiagnosticItem.css';

import { selectCondition,unselectCondition } from '../../WizardActions';


export class MedicalDiagnosticItem extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    //Bind
    this.onCheck = this.onCheck.bind(this);
  }

  onCheck(e,checked){
    this.props.medicalRight.isSelected = !this.props.medicalRight.isSelected;

    this.props.medicalRight.isSelected ?
      this.props.dispatch(selectCondition(this.props.medicalRight)) :
      this.props.dispatch(unselectCondition(this.props.medicalRight));

    this.setState({medicalRight: this.props.medicalRight})
  };

  render() {
    return(
      <div className={styles['medical-diagnostic-item']}>
        <CheckBox className={styles['medical-diagnostic']}
          label={this.props.medicalRight.condition}
          checked={!!this.props.medicalRight.isSelected}
          onCheck={(e,checked) => this.onCheck(e,checked)}/>
      </div>
    );
  }
}

MedicalDiagnosticItem.propTypes = {
  medicalRight: PropTypes.any
};

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps)(MedicalDiagnosticItem);
