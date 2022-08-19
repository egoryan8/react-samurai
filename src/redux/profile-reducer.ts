import { profileAPI } from '../api/api';
import { PhotosType, PostType, ProfileType } from '../@types/types';

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
const profileReducer = (state = initialState, action: any): initialStateType => {
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

export const getProfile = (userId: number) => async (dispatch: any) => {
  const res = await profileAPI.getProfile(userId);
  dispatch(setProfile(res.data));
};

export const getStatus = (userId: number) => async (dispatch: any) => {
  const res = await profileAPI.getStatus(userId);
  dispatch(setStatus(res.data));
};

export const updateStatus = (status: string) => async (dispatch: any) => {
  const res = await profileAPI.updateStatus(status);
  if (res.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export const savePhoto = (photo: PhotosType) => async (dispatch: any) => {
  const res = await profileAPI.setPhoto(photo);
  if (res.data.resultCode === 0) {
    dispatch(savePhotoSuccess(res.data.data.photos));
  }
};

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
  const userId = getState().authReducer.userId;
  const res = await profileAPI.saveProfile(profile);
  if (res.data.resultCode === 0) {
    dispatch(getProfile(userId));
  }
};

export default profileReducer;
