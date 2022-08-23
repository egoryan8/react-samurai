import { ResultCodeEnum } from '../api/api';
import { PhotosType, PostType, ProfileType } from '../@types/types';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppStateType } from './redux-store';
import { profileAPI } from '../api/profile-api';

const ADD_POST = 'ADD_POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SET_PHOTO = 'SET_PHOTO';

type initialStateType = typeof initialState;

const initialState = {
  postsData: [
    { id: 3, message: 'How are you?', likesCount: 8 },
    { id: 2, message: 'Hello, World', likesCount: 10 },
    { id: 1, message: 'Its my first post!', likesCount: 3 },
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: '',
  newPostText: '',
};
const profileReducer = (state = initialState, action: ActionsType): initialStateType => {
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
      return { ...state, profile: { ...state.profile, photos: action.photos } as ProfileType };

    default:
      return state;
  }
};

type AddPostActionCreatorType = {
  type: typeof ADD_POST;
  post: string;
};

type SetProfileType = {
  type: typeof SET_PROFILE;
  profile: ProfileType;
};

type SetStatusType = {
  type: typeof SET_STATUS;
  status: string;
};

type SavePhotoSuccessType = {
  type: typeof SET_PHOTO;
  photos: PhotosType;
};

type ActionsType = AddPostActionCreatorType | SetProfileType | SetStatusType | SavePhotoSuccessType;

export const addPostActionCreator = (post: string): AddPostActionCreatorType => ({
  type: ADD_POST,
  post,
});
export const setProfile = (profile: ProfileType): SetProfileType => ({
  type: SET_PROFILE,
  profile,
});
export const setStatus = (status: string): SetStatusType => ({ type: SET_STATUS, status });
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessType => ({
  type: SET_PHOTO,
  photos,
});

export type DispatchType = Dispatch<ActionsType>;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>;

export const getProfile =
  (userId: number): ThunkType =>
  async (dispatch) => {
    const data = await profileAPI.getProfile(userId);
    dispatch(setProfile(data));
  };

export const getStatus =
  (userId: number): ThunkType =>
  async (dispatch) => {
    const res = await profileAPI.getStatus(userId);
    dispatch(setStatus(res.data));
  };

export const updateStatus =
  (status: string): ThunkType =>
  async (dispatch) => {
    const res = await profileAPI.updateStatus(status);
    if (res.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  };

export const savePhoto =
  (photo: string): ThunkType =>
  async (dispatch) => {
    const data = await profileAPI.setPhoto(photo);
    if (data.resultCode === ResultCodeEnum.SUCCESS) {
      dispatch(savePhotoSuccess(data.photos));
    }
  };

type getStateType = () => AppStateType;

export const saveProfile =
  (profile: ProfileType): ThunkType =>
  async (dispatch, getState: getStateType) => {
    const userId = getState().authReducer.userId;
    const res = await profileAPI.saveProfile(profile);
    if (userId) {
      if (res.data.resultCode === 0) {
        dispatch(getProfile(userId));
      }
    }
  };

export default profileReducer;
