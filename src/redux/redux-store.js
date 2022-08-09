import profileReducer from './profile-reducer';
import messagesReducer from './messages-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';

import { combineReducers, legacy_createStore as createStore } from 'redux';

const reducers = combineReducers({
  profileReducer,
  messagesReducer,
  usersReducer,
  authReducer,
});

const store = createStore(reducers);

export default store;
window.store = store;
