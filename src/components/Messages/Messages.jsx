import React from 'react';
import { Navigate } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/DialogItem';
import styles from './Messages.module.css';

function Messages(props) {
  const dialogElements = props.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />
  ));
  const messageElements = props.messagesData.map((message) => (
    <MessageItem message={message.message} key={message.id} />
  ));

  const newMessageElement = React.createRef();

  const addMessage = (e) => {
    e.preventDefault();
    props.addMessage();
  };

  const onMessageChange = () => {
    const text = newMessageElement.current.value;
    props.updateNewMessageText(text);
  };

  const onEnterPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      addMessage(e);
    }
  };

  return (
    <div className={styles.dialogsWrapper}>
      <div className={styles.dialogs}>
        <p>DIALOGS</p>
        {dialogElements}
      </div>
      <div className={styles.messages}>
        <div>{messageElements}</div>
        <form onSubmit={addMessage} className={styles.form}>
          <textarea
            onChange={onMessageChange}
            placeholder={'Введите сообщение'}
            ref={newMessageElement}
            value={props.newMessageText}
            onKeyDown={onEnterPress}></textarea>
          <button>Отправить</button>
        </form>
      </div>
    </div>
  );
}

export default Messages;
