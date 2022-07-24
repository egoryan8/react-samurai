import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Messages.module.css';

function Messages() {
  return <div className={styles.dialogsWrapper}>
    <ul className={styles.dialogs}>
      <p>DIALOGS</p>
      <NavLink to='/messages/1' className={styles.dialog}>
        Andrew
      </NavLink>
      <NavLink to='/messages/2' className={`${styles.dialog} ${styles.active}`}>
        Egor
      </NavLink>
      <NavLink to='/messages/3' className={styles.dialog}>
        Denis
      </NavLink>
      <NavLink to='/messages/4' className={styles.dialog}>
        Ivan
      </NavLink>
      <NavLink to='/messages/5' className={styles.dialog}>
        Ilya
      </NavLink>
    </ul>
    <div className={styles.messages}>
      <div className={styles.message}>
        Whatsapp, how are u bro?
      </div>
      <div className={styles.message}>
        Yo bro are u ok?
      </div>
      <div className={styles.message}>
        Im glad to see you
      </div>
      <div className={styles.message}>
        Im too 
      </div>
    </div>
  </div>;
}

export default Messages;
