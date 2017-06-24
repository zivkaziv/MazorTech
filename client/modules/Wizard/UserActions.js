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

    //try to load from cookies otherwise use default
    const cookies = new Cookies();
    let user = cookies.get('mzr_usr');
    if(!user){
      user = getDefaultUser();
    }
    if(!user.age){
      user.age = getAge(user.dob)
    }
    dispatch(initUser(user));
  };
}

export function updateUserDetails(userToUpdate) {
  return (dispatch) => {
    //try to load from cookies otherwise use default
    const cookies = new Cookies();
    cookies.set('mzr_usr',userToUpdate);
    userToUpdate.age = getAge(userToUpdate.dob);
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

export function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
