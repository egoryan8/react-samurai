import { ResultCodeEnum } from '../api/api';
import { PhotosType, PostType, ProfileType } from '../@types/types';
import { AppStateType, InferActionsTypes, CommonThunkType } from './redux-store';
import { profileAPI } from '../api/profile-api';

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
const profileReducer = (state = initialState, action: ActionType): InitialStateType => {
  switch (action.type) {
    case 'SN/PROFILE/ADD_POST':
      const newPost = {
        id: 6,
        message: action.post,
        likesCount: 0,
      };
      return {
        ...state,
        postsData: [newPost, ...state.postsData],
      };

    case 'SN/PROFILE/SET_PROFILE':
      return { ...state, profile: action.profile };

    case 'SN/PROFILE/SET_STATUS':
      return { ...state, status: action.status };

    case 'SN/PROFILE/SET_PHOTO':
      return { ...state, profile: { ...state.profile, photos: action.photos } as ProfileType };

    default:
      return state;
  }
};

export const actions = {
  addPostActionCreator: (post: string) =>
    ({
      type: 'SN/PROFILE/ADD_POST',
      post,
    } as const),
  setProfile: (profile: ProfileType) =>
    ({
      type: 'SN/PROFILE/SET_PROFILE',
      profile: profile,
    } as const),
  setStatus: (status: string) => ({ type: 'SN/PROFILE/SET_STATUS', status } as const),
  savePhotoSuccess: (photos: PhotosType) =>
    ({
      type: 'SN/PROFILE/SET_PHOTO',
      photos,
    } as const),
};

export const getProfile =
  (userId: number): ThunkType =>
  async (dispatch) => {
    const data = await profileAPI.getProfile(userId);
    dispatch(actions.setProfile(data));
  };

export const getStatus =
  (userId: number): ThunkType =>
  async (dispatch) => {
    const res = await profileAPI.getStatus(userId);
    dispatch(actions.setStatus(res.data));
  };

export const updateStatus =
  (status: string): ThunkType =>
  async (dispatch) => {
    const res = await profileAPI.updateStatus(status);
    if (res.data.resultCode === 0) {
      dispatch(actions.setStatus(status));
    }
  };

export const savePhoto =
  (photo: File): ThunkType =>
  async (dispatch) => {
    const data = await profileAPI.setPhoto(photo);
    if (data.resultCode === ResultCodeEnum.SUCCESS) {
      dispatch(actions.savePhotoSuccess(data.photos));
    }
  };

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

type getStateType = () => AppStateType;
export type InitialStateType = typeof initialState;
export type ActionType = InferActionsTypes<typeof actions>;
type ThunkType = CommonThunkType<ActionType>;
