export const getAllPosts = state => state.posts;
const createActionName = actionName => `app/posts/${actionName}`;

const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};

export default postsReducer;
