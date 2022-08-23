import { ResultCodeEnum } from '../api/api';
import { authAPI } from '../api/auth-api';
import { InferActionsTypes, CommonThunkType } from './redux-store';

const initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
};

const authReducer = (state = initialState, action: ActionType): initialStateType => {
  switch (action.type) {
    case 'SET_USERS_DATA':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const actions = {
  setAuthData: (
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
  ) =>
    ({
      type: 'SET_USERS_DATA',
      payload: { userId, email, login, isAuth },
    } as const),
};

export const getAuthData = () => async (dispatch: any) => {
  const meData = await authAPI.me();
  if (meData.resultCode === ResultCodeEnum.SUCCESS) {
    const { id, email, login } = meData.data;
    dispatch(actions.setAuthData(id, email, login, true));
  }
  return meData;
};

export const login =
  (email: string, password: string, rememberMe: boolean): ThunkType =>
  async (dispatch) => {
    const data = await authAPI.login(email, password, rememberMe);
    if (data.resultCode === ResultCodeEnum.SUCCESS) {
      dispatch(getAuthData());
    }
  };

export const logout = (): ThunkType => async (dispatch) => {
  const data = await authAPI.logout();
  if (data.resultCode === ResultCodeEnum.SUCCESS) {
    dispatch(actions.setAuthData(null, null, null, false));
  }
};

export default authReducer;

export type initialStateType = typeof initialState;
type ActionType = InferActionsTypes<typeof actions>;
type ThunkType = CommonThunkType<ActionType>;
