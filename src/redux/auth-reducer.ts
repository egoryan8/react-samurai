import { authAPI } from '../api/api';

export type initialStateType = typeof initialState;

const initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
};

const SET_USERS_DATA = 'SET_USERS_DATA';

const authReducer = (state = initialState, action: any): initialStateType => {
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

export const getAuthData = () => async (dispatch: any) => {
  const res = await authAPI.me();
  if (res.data.resultCode === 0) {
    let { id, email, login } = res.data.data;
    dispatch(setAuthData(id, email, login, true));
  }
  return res;
};

export const login =
  (email: string, password: string, rememberMe: boolean) => async (dispatch: any) => {
    const res = await authAPI.login(email, password, rememberMe);
    if (res.data.resultCode === 0) {
      dispatch(getAuthData());
    }
  };

export const logout = () => async (dispatch: any) => {
  const res = await authAPI.logout();
  if (res.data.resultCode === 0) {
    dispatch(setAuthData(null, null, null, false));
  }
};

export default authReducer;
