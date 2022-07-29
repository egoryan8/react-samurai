import React from 'react';
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from '../../redux/messages-reducer';
import StoreContext from '../../storeContext';
import Messages from './Messages';

function MessagesContainer() {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const addMessage = () => {
          store.dispatch(addMessageActionCreator());
        };

        const onMessageChange = (text) => {
          store.dispatch(updateNewMessageTextActionCreator(text));
        };

        return (
          <Messages
            addMessage={addMessage}
            updateNewMessageText={onMessageChange}
            dialogsData={store.getState().messagesReducer.dialogsData}
            messagesData={store.getState().messagesReducer.messagesData}
            newMessageText={store.getState().messagesReducer.newMessageText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
}

export default MessagesContainer;
