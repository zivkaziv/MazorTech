// Import Actions
import { TOGGLE_ADD_POST } from './AppActions';
import MobileDetect from 'mobile-detect';

// var mobileDetect = new MobileDetect(window.navigator.userAgent);
//How to check if the device is mobile or not
// console.log(mobileDetect.mobile());

// Initial State
const initialState = {
  showAddPost: false,
  isMobile: false
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_POST:
      return {
        showAddPost: !state.showAddPost,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
export const getShowAddPost = state => state.app.showAddPost;
export const getDevice = (state,userAgent) => {
  if(userAgent) {
    var mobileDetect = new MobileDetect(userAgent);
    state.app.isMobile = mobileDetect.mobile() !== null;
  }else{
    state.app.isMobile = false;
  }
  return state.app.isMobile;
};

// Export Reducer
export default AppReducer;
