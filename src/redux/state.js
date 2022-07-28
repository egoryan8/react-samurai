import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";

const store = {
  _state: {
    profile: {
      postsData: [
        { id: 3, message: 'How are you?', likesCount: 8 },
        { id: 2, message: 'Hello, World', likesCount: 10 },
        { id: 1, message: 'Its my first post!', likesCount: 3 },
      ],
      newPostText: '',
    },
    messages: {
      messagesData: [
        { id: 1, message: 'Hey, how are u?' },
        { id: 2, message: 'Whatsapp bro!' },
        { id: 3, message: 'Im glad to write u' },
        { id: 4, message: 'Im too' },
        { id: 5, message: 'U are very cute! :3' },
      ],
      dialogsData: [
        { id: 1, name: 'Andrew' },
        { id: 2, name: 'Egor' },
        { id: 3, name: 'Denis' },
        { id: 4, name: 'Ivan' },
        { id: 5, name: 'Ilya' },
      ],
      newMessageText: '',
    },
  },
  _callSubscriber() {
    console.log('state changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profile = profileReducer(this._state.profile, action);
    this._state.messages = messagesReducer(this._state.messages, action);

    this._callSubscriber(this._state);
  }
};

export default store;

