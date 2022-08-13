import { profileAPI } from '../api/api';

const ADD_POST = 'ADD_POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SET_PHOTO = 'SET_PHOTO';

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
    case ADD_POST:
      const newPost = {
        id: 6,
        message: action.post,
        likesCount: 0,
      };
      return {
        ...state,
        postsData: [newPost, ...state.postsData],
      };

    case SET_PROFILE:
      return { ...state, profile: action.profile };

    case SET_STATUS:
      return { ...state, status: action.status };

    case SET_PHOTO:
      return { ...state, profile: { ...state.profile, photos: action.photos } };

    default:
      return state;
  }
};

export const addPostActionCreator = (post) => ({ type: ADD_POST, post });
export const setProfile = (profile) => ({ type: SET_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const savePhotoSuccess = (photos) => ({ type: SET_PHOTO, photos });

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

export const savePhoto = (photo) => async (dispatch) => {
  const res = await profileAPI.setPhoto(photo);
  if (res.data.resultCode === 0) {
    dispatch(savePhotoSuccess(res.data.data.photos));
  }
};

export default profileReducer;
