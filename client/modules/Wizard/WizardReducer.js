import { INIT_MEDICAL_RIGHTS,SELECT_MEDICAL_CONDITION,UNSELECT_MEDICAL_CONDITION} from './WizardActions';

// Initial State
const initialState = {
  data: [],
  selected:[]
};

const WizardReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_MEDICAL_RIGHTS:
      return{
        data: action.medicalRights,
        selected: []
      };

    case SELECT_MEDICAL_CONDITION:
      return{
        data: [...state.data],
        selected: [action.medicalCondition, ...state.selected],
      };

    case UNSELECT_MEDICAL_CONDITION:
      return{
        data: [...state.data],
        selected: state.selected.filter(item => item.condition !== action.medicalCondition.condition)
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

export const getSelectedMedicalRights = state => state.medicalRights.selected;

export const getMedicalRightsForUser = state => {
  return(
    state.medicalRights.selected.filter(function(selected){
      return selected.rights.filter(function (right){
        return isRelevantForUser(right, state.user)
      });
    })
  );
};

function isRelevantForUser(right,user){
  return true;
}

// Get post by cuid
// export const getPost = (state, cuid) => state.posts.data.filter(post => post.cuid === cuid)[0];

// Export Reducer
export default WizardReducer;
