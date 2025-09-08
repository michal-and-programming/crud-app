const REMOVE_POST = 'app/ChosenPost/REMOVE_POST';
const ADD_POST = 'app/addpostform/Add_POST';

export const getAllPosts = state => state.posts;

const createActionName = actionName => `app/posts/${actionName}`;

export const deletePost = payload => ({ type: REMOVE_POST, payload});

export const addPost = payload => ({ type: ADD_POST, payload});

const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case REMOVE_POST:
      return statePart.filter(post => post.id !== action.payload);

    case ADD_POST:
      return [...statePart, {...action.payload}];

    default:
      return statePart;
  };
};

export default postsReducer;
