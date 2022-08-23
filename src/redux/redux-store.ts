import profileReducer from './profile-reducer';
import messagesReducer from './messages-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import appReducer from './app-reducer';
import ThunkMiddleware, { ThunkAction } from 'redux-thunk';

import { Action, applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';

const rootReducer = combineReducers({
  profileReducer,
  messagesReducer,
  usersReducer,
  authReducer,
  appReducer,
});

const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware));

export default store;
// @ts-ignore
window.store = store;

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;
type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<
  PropertiesTypes<T>
>;
export type CommonThunkType<A extends Action, R = Promise<void>> = ThunkAction<
  R,
  AppStateType,
  unknown,
  A
>;
