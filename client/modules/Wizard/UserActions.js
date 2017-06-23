/**
 * Created by ziv on 11/05/2017.
 */
import callApi from '../../util/apiCaller';
import Cookies from 'universal-cookie';

// Export Constants
export const INIT_USER = 'INIT_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const TERMS_AGREE = 'TERMS_AGREE';

export function initUser(user) {
  return {
    type: INIT_USER,
    user,
  };
}

export function updateUser(user) {
  return {
    type: UPDATE_USER,
    user,
  };
}

export function fetchUser() {
  return (dispatch) => {
    const cookies = new Cookies();
    console.log(cookies);
    //try to load from cookies otherwise use default
    let user = cookies.get('mzr_usr');
    console.log(user);
    // let user = getDefaultUser();
    if(!user){
      user = getDefaultUser();
    }
    // console.log(res.rights);
    dispatch(initUser(user));
  };
}

export function updateUserDetails(userToUpdate) {
  return (dispatch) => {
    //try to load from cookies otherwise use default
    const cookies = new Cookies();
    cookies.set('mzr_usr',userToUpdate);
    dispatch(updateUser(userToUpdate));
  };
}

function getDefaultUser() {
  let initialDob = new Date();
  initialDob.setFullYear(initialDob.getFullYear() - 40);
   return {
      gender:'female',
      isSmoking:false,
      dob:initialDob,
      healthInsurance: 'MEDICARE',
      weight:150,
      agreed_terms:false
  };
}
