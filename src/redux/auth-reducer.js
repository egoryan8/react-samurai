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
        ...action.data,
        isAuth: true,
      };
    default:
      return state;
  }
};

export const setAuthData = (userId, email, login) => ({
  type: 'SET-USER-DATA',
  data: { userId, email, login },
});

export default authReducer;

export const getAuthData = () => (dispatch) => {
  authAPI.me().then((res) => {
    if (res.data.resultCode === 0) {
      let { id, email, login } = res.data.data;
      dispatch(setAuthData(id, email, login));
    }
  });
};
