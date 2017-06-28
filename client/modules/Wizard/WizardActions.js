/**
 * Created by ziv on 11/05/2017.
 */
import callApi from '../../util/apiCaller';


// Export Constants
export const INIT_MEDICAL_RIGHTS = 'INIT_MEDICAL_RIGHTS';
export const SELECT_MEDICAL_CONDITION = 'SELECT_MEDICAL_CONDITION';
export const UNSELECT_MEDICAL_CONDITION = 'UNSELECT_MEDICAL_CONDITION';


function initMedicalRights(medicalRights) {
  return {
    type: INIT_MEDICAL_RIGHTS,
    medicalRights
  };
}

function selectMedicalCondition(medicalCondition) {
  return {
    type: SELECT_MEDICAL_CONDITION,
    medicalCondition,
  };
}

function unselectMedicalCondition(medicalCondition) {
  return {
    type: UNSELECT_MEDICAL_CONDITION,
    medicalCondition,
  };
}




export function fetchMedicalRights() {
  return (dispatch) => {
    return callApi('medicalrights').then(res => {
      // console.log(res.rights);
      res.medicalEntry.map((conditionEntry)=>{
        conditionEntry.rights.map((medicalRight)=>{
          medicalRight.condition = conditionEntry.condition;
        });
      });
      res.medicalEntry.sort();
      dispatch(initMedicalRights(res.medicalEntry));
    });
  };
}

export function selectCondition(medicalCondition) {
  return (dispatch) => {
      // console.log(res.rights);
      dispatch(selectMedicalCondition(medicalCondition));
  };
}


export function unselectCondition(medicalCondition) {
  return (dispatch) => {
    // console.log(res.rights);
    dispatch(unselectMedicalCondition(medicalCondition));
  };
}

