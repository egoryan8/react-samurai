const initialState = {
  postsData: [
    {id: 3, message: 'How are you?', likesCount: 8},
    {id: 2, message: 'Hello, World', likesCount: 10},
    {id: 1, message: 'Its my first post!', likesCount: 3},
  ],
  newPostText: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD-POST' :
      const newPost = {
        id: 6, message: state.newPostText, likesCount: 0,
      };
      state.postsData.unshift(newPost);
      state.newPostText = '';
      return state;
    case 'UPDATE-POST-TEXT' :
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
}

export default profileReducer;

export const addPostActionCreator = () => ({type: 'ADD-POST'});

export const updateNewPostTextActionCreator = (text) => ({type: 'UPDATE-POST-TEXT', newText: text});
