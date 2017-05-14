/**
 * Created by ziv on 11/05/2017.
 */
import callApi from '../../util/apiCaller';


// Export Constants
export const ADD_USER = 'ADD_USER';
export const ADD_MEDICAL_RIGHTS = 'ADD_MEDICAL_RIGHTS';
export const TERMS_AGREE = 'TERMS_AGREE';


export function addMedicalRights(medicalRights) {
  return {
    type: ADD_MEDICAL_RIGHTS,
    medicalRights,
  };
}


export function fetchMedicalRights() {
  return (dispatch) => {
    return callApi('medicalrights').then(res => {
      // console.log(res.rights);
      dispatch(addMedicalRights(res.rights));
    });
  };
}
