import { getAuthData } from './auth-reducer';

export type initialStateType = {
  initialized: boolean;
};

export type setInitializedType = {
  type: typeof SET_INITIALIZED;
};

const initialState: initialStateType = {
  initialized: false,
};

const SET_INITIALIZED = 'SET_INITIALIZED';

const appReducer = (state = initialState, action: any): initialStateType => {
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

export const setInitialized = (): setInitializedType => ({
  type: SET_INITIALIZED,
});

export const initializeApp = () => async (dispatch: any) => {
  await dispatch(getAuthData());
  dispatch(setInitialized());
};

export default appReducer;
