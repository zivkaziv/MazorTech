import React, { PropTypes } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

// Import Style
import styles from './MedicalRightItem.css';

function MedicalRightItem(props) {
  return (
    <Card>
      <CardHeader
        title="Without Avatar"
        subtitle="Subtitle"
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardActions>
        <FlatButton label="I didn't know that" />
        <FlatButton label="That's not new" />
      </CardActions>
      <CardText expandable={true}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>
    </Card>
  );
}

MedicalRightItem.propTypes = {
  medicalRight: PropTypes.any
};

export default MedicalRightItem;
