import React from 'react';
import styles from './Messages.module.css';

function Messages() {
  return <div className={styles.dialogsWrapper}>
    <ul className={styles.dialogs}>
      <p>DIALOGS</p>
      <li className={styles.dialog}>
        Andrew
      </li>
      <li className={`${styles.dialog} ${styles.active}`}>
        Egor
      </li>
      <li className={styles.dialog}>
        Denis
      </li>
      <li className={styles.dialog}>
        Ivan
      </li>
      <li className={styles.dialog}>
        Ilya
      </li>
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
