/**
 * Created by ziv on 11/05/2017.
 */
import callApi from '../../util/apiCaller';


// Export Constants
export const INIT_MEDICAL_RIGHTS = 'INIT_MEDICAL_RIGHTS';


export function initMedicalRights(medicalRights) {
  return {
    type: INIT_MEDICAL_RIGHTS,
    medicalRights,
  };
}


export function fetchMedicalRights() {
  return (dispatch) => {
    return callApi('medicalrights').then(res => {
      // console.log(res.rights);
      dispatch(initMedicalRights(res.rights));
    });
  };
}
