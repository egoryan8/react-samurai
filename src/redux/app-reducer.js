import { getAuthData } from './auth-reducer';

const initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET-INITIALIZED':
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export const setInitialized = () => ({
  type: 'SET-INITIALIZED',
});

export const initializeApp = () => (dispatch) => {
  dispatch(getAuthData()).then(() => {
    dispatch(setInitialized());
  });
};

export default appReducer;
