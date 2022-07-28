import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import {combineReducers, createStore} from "redux";

const reducers = combineReducers({
  profileReducer,
  messagesReducer,
})

const store = createStore(reducers);

export default store;
