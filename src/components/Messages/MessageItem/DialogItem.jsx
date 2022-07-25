import React from "react";
import styles from '../Messages.module.css';

function MessageItem(props) {
  return (
    <div className={styles.message}>
      {props.message}
    </div>
  )
}

export default MessageItem;