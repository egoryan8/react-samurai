let state = {
  profile: {
    postsData: [
      { id: 3, message: 'How are you?', likesCount: 8 },
      { id: 2, message: 'Hello, World', likesCount: 10 },
      { id: 1, message: 'Its my first post!', likesCount: 3 },
    ],
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
};

export const addPost = (message) => {
  const newPost = {
    id: 6,
    message,
    likesCount: 0,
  };
  state.profile.postsData.unshift(newPost);
};

export default state;
