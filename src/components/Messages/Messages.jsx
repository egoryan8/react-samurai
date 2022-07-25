import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/DialogItem';
import styles from './Messages.module.css';

function Messages(props) {
  const dialogElements = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/> )
  const messageElements = props.state.messagesData.map(message => <MessageItem message={message.message}/>)

  return <div className={styles.dialogsWrapper}>
    <div className={styles.dialogs}>
      <p>DIALOGS</p>
      {dialogElements}
    </div>
    <div className={styles.messages}>
      {messageElements}
    </div>
  </div>;
}

export default Messages;
