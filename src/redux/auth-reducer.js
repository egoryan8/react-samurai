import { authAPI } from '../api/api';

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const SET_USERS_DATA = 'SET_USERS_DATA';

const authReducer = (state = initialState, action) => {
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

export const setAuthData = (userId, email, login, isAuth) => ({
  type: SET_USERS_DATA,
  payload: { userId, email, login, isAuth },
});

export const getAuthData = () => async (dispatch) => {
  const res = await authAPI.me();
  if (res.data.resultCode === 0) {
    let { id, email, login } = res.data.data;
    dispatch(setAuthData(id, email, login, true));
  }
  return res;
};

export const login = (email, password, rememberMe) => async (dispatch) => {
  const res = await authAPI.login(email, password, rememberMe);
  if (res.data.resultCode === 0) {
    dispatch(getAuthData());
  }
};

export const logout = () => async (dispatch) => {
  const res = await authAPI.logout();
  if (res.data.resultCode === 0) {
    dispatch(setAuthData(null, null, null, false));
  }
};

export default authReducer;
