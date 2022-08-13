import { getAuthData } from './auth-reducer';

const initialState = {
  initialized: false,
};

const SET_INITIALIZED = 'SET_INITIALIZED';

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export const setInitialized = () => ({
  type: SET_INITIALIZED,
});

export const initializeApp = () => async (dispatch) => {
  await dispatch(getAuthData());
  dispatch(setInitialized());
};

export default appReducer;
