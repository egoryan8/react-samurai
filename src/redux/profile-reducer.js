import { profileAPI } from '../api/api';

const initialState = {
  postsData: [
    { id: 3, message: 'How are you?', likesCount: 8 },
    { id: 2, message: 'Hello, World', likesCount: 10 },
    { id: 1, message: 'Its my first post!', likesCount: 3 },
  ],
  profile: null,
  status: '',
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD-POST':
      const newPost = {
        id: 6,
        message: action.post,
        likesCount: 0,
      };
      return {
        ...state,
        postsData: [newPost, ...state.postsData],
      };

    case 'SET-PROFILE':
      return { ...state, profile: action.profile };

    case 'SET-STATUS':
      return { ...state, status: action.status };

    default:
      return state;
  }
};

export const addPostActionCreator = (post) => ({ type: 'ADD-POST', post });

export const setProfile = (profile) => ({ type: 'SET-PROFILE', profile });
export const setStatus = (status) => ({ type: 'SET-STATUS', status });
export const getProfile = (userId) => async (dispatch) => {
  const res = await profileAPI.getProfile(userId);
  dispatch(setProfile(res.data));
};

export const getStatus = (userId) => async (dispatch) => {
  const res = await profileAPI.getStatus(userId);
  dispatch(setStatus(res.data));
};

export const updateStatus = (status) => async (dispatch) => {
  const res = await profileAPI.updateStatus(status);
  if (res.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export default profileReducer;
