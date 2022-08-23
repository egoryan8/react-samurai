import { DialogType, MessageType } from '../@types/types';
import { InferActionsTypes } from './redux-store';

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

const messagesReducer = (state = initialState, action: ActionType): initialStateType => {
  switch (action.type) {
    case 'SN/MESSAGES/ADD_MESSAGE':
      return {
        ...state,
        messagesData: [...state.messagesData, { id: 6, message: action.message }],
      };
    default:
      return state;
  }
};
export default messagesReducer;

export const actions = {
  addMessageActionCreator: (message: string) =>
    ({
      type: 'SN/MESSAGES/ADD_MESSAGE',
      message,
    } as const),
};

type initialStateType = typeof initialState;
type ActionType = InferActionsTypes<typeof actions>;
