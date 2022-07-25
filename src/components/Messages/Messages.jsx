import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Messages.module.css';

function DialogItem(props) {
  return (
    <NavLink to={'/messages/' + props.id} className={styles.dialog}>
      {props.name}
    </NavLink>
  )
}

function MessageItem(props) {
  return (
    <div className={styles.message}>
      {props.message}
    </div>
  )
}

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

function Messages() {
  return <div className={styles.dialogsWrapper}>
    <div className={styles.dialogs}>
      <p>DIALOGS</p>
      <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
      <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
      <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
    </div>
    <div className={styles.messages}>
      <MessageItem message={messagesData[0].message}/>
      <MessageItem message={messagesData[1].message}/>
      <MessageItem message={messagesData[2].message}/>
      <MessageItem message={messagesData[3].message}/>
      <MessageItem message={messagesData[4].message}/>
    </div>
  </div>;
}

export default Messages;
