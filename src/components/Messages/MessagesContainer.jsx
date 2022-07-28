import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/messages-reducer";
import Messages from "./Messages";

function MessagesContainer(props) {
  const state = props.store.getState();

  const addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  const onMessageChange = (text) => {
    props.store.dispatch(updateNewMessageTextActionCreator(text))
  };

  return <Messages
    addMessage={addMessage}
    updateNewMessageText={onMessageChange}
    dialogsData={state.messagesReducer.dialogsData}
    messagesData={state.messagesReducer.messagesData}
    newMessageText={state.messagesReducer.newMessageText}/>

}

export default MessagesContainer;
