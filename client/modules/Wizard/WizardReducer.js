import { INIT_MEDICAL_RIGHTS} from './WizardActions';

// Initial State
const initialState = { data: [] };

const WizardReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_MEDICAL_RIGHTS:
      return{
        data: action.medicalRights,
      };

    // case DELETE_POST :
    //   return {
    //     data: state.data.filter(post => post.cuid !== action.cuid),
    //   };

    default:
      return state;
  }
};

/* Selectors */

// Get all posts
export const getMedicalRights = state => state.medicalRights.data;

export const getSelectedMedicalRights = state => {
  return(
    state.medicalRights.data.filter(function(right){
      return right.isSelected;
    })
  );
};
// Get post by cuid
// export const getPost = (state, cuid) => state.posts.data.filter(post => post.cuid === cuid)[0];

// Export Reducer
export default WizardReducer;
