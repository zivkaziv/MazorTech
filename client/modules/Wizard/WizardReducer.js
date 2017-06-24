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
  let userMedicalRights=[];
  state.medicalRights.selected.filter(function(selected){
    selected.rights.filter(function (right){
      isRelevantForUser(right, state.user)? addMedicalRight(userMedicalRights,right) : '';
    });
  });
  console.log(userMedicalRights);
  return userMedicalRights;
};

function addMedicalRight(rights,rightToAdd){
  let isAlreadyExist = false;
  rights.forEach(function(right){
    if(right['Medical Right'] === rightToAdd['Medical Right'] ){
      isAlreadyExist =true;
      right.condition += ' & ' + rightToAdd.condition;
    }
  });
  if(!isAlreadyExist){
    rights.push(rightToAdd);
  }
}

function isRelevantForUser(right,user){
  let isRelevant = false;
  // console.log(right);
  // console.log(user);
  //Medical health provider
  if(right['Insurance Provider'] === user.healthInsurance){
    isRelevant = true;
    //Smoking condition
    if(right['Smoking']) {
      if (right['Smoking'] === 'TRUE' && user.isSmoking) {
        console.log('Smoking condition ' + right['Medical Right'] + ' - pass');
      } else {
        console.log('Smoking condition ' + right['Medical Right'] + ' - failed');
        return false;
      }
    }else{
      console.log('No smoking condition ' + right['Medical Right']);
    }

    //Age condition
    if(right['Age']){
      if((right['Age'].min && right['Age'].min <= user.age) &&
        (right['Age'].max && right['Age'].max >= user.age) ){
        console.log('Age condition '  + right['Medical Right'] +  ' - pass');
      }else{
        console.log('Age condition '  + right['Medical Right'] +  ' - failed');
        return false;
      }
    }else{
      console.log('No age condition ' + right['Medical Right']);
    }
  }
  return isRelevant;
}

// Get post by cuid
// export const getPost = (state, cuid) => state.posts.data.filter(post => post.cuid === cuid)[0];

// Export Reducer
export default WizardReducer;
