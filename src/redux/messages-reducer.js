const messagesReducer = (state, action) => {
  if (action.type === 'ADD-MESSAGE') {
    const newMessage = {id: 6, message: state.newMessageText};
    state.messagesData.push(newMessage);
    state.newMessageText = '';
  } else if (action.type === 'UPDATE-MESSAGE-TEXT') {
    state.newMessageText = action.newText;
  }
  return state;
}


export default messagesReducer;

export const addMessageActionCreator = () => ({type: 'ADD-MESSAGE'});

export const updateNewMessageTextActionCreator = (text) => ({type: 'UPDATE-MESSAGE-TEXT', newText: text});
