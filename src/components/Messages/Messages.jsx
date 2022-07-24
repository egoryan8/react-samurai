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

function Messages() {
  return <div className={styles.dialogsWrapper}>
    <div className={styles.dialogs}>
      <p>DIALOGS</p>
      <DialogItem name="Andrew" id="1"/>
      <DialogItem name="Egor" id="2"/>
      <DialogItem name="Denis" id="3"/>
      <DialogItem name="Ivan" id="4"/>
      <DialogItem name="Ilya" id="5"/>
    </div>
    <div className={styles.messages}>
      <MessageItem message='Hey, how are u?'/>
      <MessageItem message='Whatsapp bro!'/>
      <MessageItem message='Im glad to write u?'/>
      <MessageItem message='Im too'/>
      <MessageItem message='U are very cute! :3'/>
    </div>
  </div>;
}

export default Messages;
