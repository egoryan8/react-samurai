import { DialogType, MessageType } from '../@types/types';

type initialStateType = typeof initialState;

const initialState = {
  messagesData: [
    { id: 1, message: 'Hey, how are u?' },
    { id: 2, message: 'Whatsapp bro!' },
    { id: 3, message: 'Im glad to write u' },
    { id: 4, message: 'Im too' },
    { id: 5, message: 'U are very cute! :3' },
  ] as Array<MessageType>,
  dialogsData: [
    { id: 1, name: 'Andrew' },
    { id: 2, name: 'Egor' },
    { id: 3, name: 'Denis' },
    { id: 4, name: 'Ivan' },
    { id: 5, name: 'Ilya' },
  ] as Array<DialogType>,
};

const ADD_MESSAGE = 'ADD_MESSAGE';

const messagesReducer = (state = initialState, action: any): initialStateType => {
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

type addMessageActionCreatorType = {
  type: typeof ADD_MESSAGE;
  message: string;
};

export const addMessageActionCreator = (message: string): addMessageActionCreatorType => ({
  type: ADD_MESSAGE,
  message,
});
