import { ADD_USER} from './UserActions';

// Initial State
const initialState = {
  isSmoking:false
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER :
      return {
        data: [action.user, ...state.data],
      };

    default:
      return state;
  }
};

/* Selectors */
export const getUser = state => state.user;


// Get post by cuid
// export const getPost = (state, cuid) => state.posts.data.filter(post => post.cuid === cuid)[0];

// Export Reducer
export default UserReducer;
