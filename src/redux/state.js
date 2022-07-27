const store = {
  _state: {
    profile: {
      postsData: [
        { id: 3, message: 'How are you?', likesCount: 8 },
        { id: 2, message: 'Hello, World', likesCount: 10 },
        { id: 1, message: 'Its my first post!', likesCount: 3 },
      ],
      newPostText: 'Example of post',
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
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log('state changed');
  },
  addPost() {
    const newPost = {
      id: 6,
      message: this._state.profile.newPostText,
      likesCount: 0,
    };
    this._state.profile.postsData.unshift(newPost);
    this._state.profile.newPostText = '';
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profile.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;
