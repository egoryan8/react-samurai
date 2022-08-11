import { authAPI } from '../api/api';

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET-USER-DATA':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const setAuthData = (userId, email, login, isAuth) => ({
  type: 'SET-USER-DATA',
  payload: { userId, email, login, isAuth },
});

export const getAuthData = () => (dispatch) => {
  authAPI.me().then((res) => {
    if (res.data.resultCode === 0) {
      let { id, email, login } = res.data.data;
      dispatch(setAuthData(id, email, login, true));
    }
  });
};

export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then((res) => {
    if (res.data.resultCode === 0) {
      dispatch(getAuthData());
    }
  });
};

export const logout = () => (dispatch) => {
  authAPI.logout().then((res) => {
    if (res.data.resultCode === 0) {
      dispatch(setAuthData(null, null, null, false));
    }
  });
};

export default authReducer;
