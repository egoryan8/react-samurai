const profileReducer = (state, action) => {
  if (action.type === 'ADD-POST') {
    const newPost = {
      id: 6, message: state.newPostText, likesCount: 0,
    };
    state.postsData.unshift(newPost);
    state.newPostText = '';
  } else if (action.type === 'UPDATE-POST-TEXT') {
    state.newPostText = action.newText;
  }
  return state;
}

export default profileReducer;

export const addPostActionCreator = () => ({type: 'ADD-POST'});

export const updateNewPostTextActionCreator = (text) => ({ type: 'UPDATE-POST-TEXT', newText: text });
