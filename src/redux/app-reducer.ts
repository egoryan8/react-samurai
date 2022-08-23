import { InferActionsTypes } from './redux-store';
import { getAuthData } from './auth-reducer';

const initialState = {
  initialized: false,
};

export type initialStateType = typeof initialState;
type ActionType = InferActionsTypes<typeof actions>;

const appReducer = (state = initialState, action: ActionType): initialStateType => {
  switch (action.type) {
    case 'SN/APP/SET_INITIALIZED':
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

const actions = {
  setInitialized: () =>
    ({
      type: 'SN/APP/SET_INITIALIZED',
    } as const),
};

export const initializeApp = () => async (dispatch: any) => {
  dispatch(getAuthData());
  dispatch(actions.setInitialized());
};

export default appReducer;
