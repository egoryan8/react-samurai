import profileReducer from './profile-reducer';
import messagesReducer from './messages-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import appReducer from './app-reducer';
import ThunkMiddleware from 'redux-thunk';

import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';

const rootReducer = combineReducers({
  profileReducer,
  messagesReducer,
  usersReducer,
  authReducer,
  appReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware));

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<
  PropertiesTypes<T>
>;

export default store;
// @ts-ignore
window.store = store;
