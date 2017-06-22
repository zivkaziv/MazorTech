import React, { PropTypes } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

// Import Style
import styles from './MedicalRightItem.css';

function MedicalRightItem(props) {
  return (
    <Card>
      <CardHeader
        title={props.medicalRight['Medical Right']}
        subtitle={props.medicalCondition.condition}
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardActions>
        {/*<FlatButton primary={true}*/}
                    {/*label="I didn't know that"*/}
                    {/*href="https://www.facebook.com/sharer.php?u=http://www.ynet.co.il/articles/0,7340,L-4970913,00.html"*/}
                    {/*target="_blank"/>*/}
      </CardActions>
      <CardText expandable={true}>
        {(function(showMe) {
          if (showMe) {
            return (
              <div>
                <b>Description:</b>  {props.medicalRight['Medical Right Description']}
              </div>
            );
          }
        })(props.medicalRight['Medical Right Description'])}
        {(function(showMe) {
          if (showMe) {
            return (
              <div>
                <b>Comments:</b>  {props.medicalRight['Comments']}
              </div>
            );
          }
        })(props.medicalRight['Comments'])}
        {(function(showMe) {
          if (showMe) {
            return (
              <div>
                <b>Family Background:</b>  {props.medicalRight['Family Background']}
              </div>
            );
          }
        })(props.medicalRight['Family Background'])}

      </CardText>
    </Card>
  );
}

MedicalRightItem.propTypes = {
  medicalRight: PropTypes.any,
  medicalCondition: PropTypes.any
};

export default MedicalRightItem;
