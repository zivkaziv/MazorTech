import { INIT_USER,UPDATE_USER,TERMS_AGREE} from './UserActions';

// let initialDob = new Date();
// initialDob.setFullYear(initialDob.getFullYear() - 25);
// Initial State
const initialState = { user: {} };

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_USER :
      return {
        ...action.user
      };
    case UPDATE_USER :
      console.log('update');
      return {
        ...action.user
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
