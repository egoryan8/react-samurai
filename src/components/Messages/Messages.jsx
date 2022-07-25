import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/DialogItem';
import styles from './Messages.module.css';

const dialogsData = [
  { id: 1, name: 'Andrew'},
  { id: 2, name: 'Egor'},
  { id: 3, name: 'Denis'},
  { id: 4, name: 'Ivan'},
  { id: 5, name: 'Ilya'},
]

const messagesData = [
  {id: 1, message: 'Hey, how are u?'},
  {id: 2, message: 'Whatsapp bro!'},
  {id: 3, message: 'Im glad to write u'},
  {id: 4, message: 'Im too'},
  {id: 5, message: 'U are very cute! :3'},
]

const dialogElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/> )
const messageElements = messagesData.map(message => <MessageItem message={message.message}/>)

function Messages() {
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
