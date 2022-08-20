import { Dispatch } from 'redux';
import { authAPI, ResultCodeEnum } from '../api/api';

export type initialStateType = typeof initialState;

const initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
};

const SET_USERS_DATA = 'SET_USERS_DATA';

const authReducer = (state = initialState, action: setAuthDataType): initialStateType => {
  switch (action.type) {
    case SET_USERS_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export type setAuthDataType = {
  type: typeof SET_USERS_DATA;
  payload: {
    userId: number | null;
    email: string | null;
    login: string | null;
    isAuth: boolean;
  };
};

export const setAuthData = (
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean,
): setAuthDataType => ({
  type: SET_USERS_DATA,
  payload: { userId, email, login, isAuth },
});

export const getAuthData = () => async (dispatch: Dispatch<setAuthDataType>) => {
  const meData = await authAPI.me();
  if (meData.resultCode === ResultCodeEnum.SUCCESS) {
    let { id, email, login } = meData.data;
    dispatch(setAuthData(id, email, login, true));
  }
  return meData;
};

export const login =
  (email: string, password: string, rememberMe: boolean) => async (dispatch: any) => {
    const data = await authAPI.login(email, password, rememberMe);
    if (data.resultCode === ResultCodeEnum.SUCCESS) {
      dispatch(getAuthData());
    }
  };

export const logout = () => async (dispatch: Dispatch<setAuthDataType>) => {
  const data = await authAPI.logout();
  if (data.resultCode === ResultCodeEnum.SUCCESS) {
    dispatch(setAuthData(null, null, null, false));
  }
};

export default authReducer;
