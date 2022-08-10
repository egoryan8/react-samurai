import { profileAPI } from '../api/api';

const initialState = {
  postsData: [
    { id: 3, message: 'How are you?', likesCount: 8 },
    { id: 2, message: 'Hello, World', likesCount: 10 },
    { id: 1, message: 'Its my first post!', likesCount: 3 },
  ],
  newPostText: '',
  profile: null,
  status: '',
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD-POST':
      const newPost = {
        id: 6,
        message: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        postsData: [newPost, ...state.postsData],
        newPostText: '',
      };

    case 'UPDATE-POST-TEXT':
      return {
        ...state,
        newPostText: action.newText,
      };

    case 'SET-PROFILE':
      return { ...state, profile: action.profile };

    case 'SET-STATUS':
      return { ...state, status: action.status };

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: 'ADD-POST' });

export const updateNewPostTextActionCreator = (text) => ({
  type: 'UPDATE-POST-TEXT',
  newText: text,
});

export const setProfile = (profile) => ({ type: 'SET-PROFILE', profile });
export const setStatus = (status) => ({ type: 'SET-STATUS', status });
export const getProfile = (userId) => (dispatch) => {
  profileAPI.getProfile(userId).then((res) => {
    dispatch(setProfile(res.data));
  });
};

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((res) => {
    dispatch(setStatus(res.data));
  });
};

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((res) => {
    if (res.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};

export default profileReducer;
