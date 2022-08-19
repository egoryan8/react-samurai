import profileReducer from './profile-reducer';
import messagesReducer from './messages-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import appReducer from './app-reducer.ts';
import ThunkMiddleware from 'redux-thunk';

import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';

const reducers = combineReducers({
  profileReducer,
  messagesReducer,
  usersReducer,
  authReducer,
  appReducer,
});

const store = createStore(reducers, applyMiddleware(ThunkMiddleware));

export default store;
window.store = store;
