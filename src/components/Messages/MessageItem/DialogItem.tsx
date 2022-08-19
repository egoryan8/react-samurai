import React from 'react';
import styles from '../Messages.module.css';

type MessageItemPropsType = {
  message: string;
};

const MessageItem: React.FC<MessageItemPropsType> = ({ message }) => {
  return <div className={styles.message}>{message}</div>;
};

export default MessageItem;
