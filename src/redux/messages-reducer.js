const initialState = {
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
};

const ADD_MESSAGE = 'ADD_MESSAGE';

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messagesData: [...state.messagesData, { id: 6, message: action.message }],
      };
    default:
      return state;
  }
};
export default messagesReducer;

export const addMessageActionCreator = (message) => ({ type: ADD_MESSAGE, message });
