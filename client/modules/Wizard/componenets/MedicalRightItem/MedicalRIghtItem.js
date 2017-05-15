import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './MedicalRightItem.css';

function MedicalRightItem(props) {
  return (
    <div className={styles['medical-right-item']}>
      <h3 className={styles['medical-condition']}>{props.medicalRight.condition}</h3>
    </div>
  );
}

MedicalRightItem.propTypes = {
  medicalRight: PropTypes.any
};

export default MedicalRightItem;
