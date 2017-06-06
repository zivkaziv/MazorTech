/**
 * Created by ziv on 11/05/2017.
 */
import callApi from '../../util/apiCaller';
import { CookiesProvider, withCookies, Cookies } from 'react-cookie';

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
    //try to load from cookies otherwise use default
    const cookies = new Cookies();
    let user = cookies.get('mzr_usr');
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
    dispatch(updateUser(userToUpdate));
  };
}


function getDefaultUser() {
  let initialDob = new Date();
   return {
      gender:'female',
      isSmoking:false,
      dob:initialDob,
      health_insurance:4
  };
}
