import { Form, Field } from 'react-final-form';
import React from 'react';
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

  const addMessage = (formData) => {
    props.addMessage(formData.message);
  };

  // const onEnterPress = (e) => {
  //   if (e.keyCode === 13 && e.shiftKey === false) {
  //     addMessage();
  //   }
  // };

  return (
    <div className={styles.dialogsWrapper}>
      <div className={styles.dialogs}>
        <p>DIALOGS</p>
        {dialogElements}
      </div>
      <div className={styles.messages}>
        <div>{messageElements}</div>
        <AddNewMessageForm addMessage={addMessage} />
      </div>
    </div>
  );
}

function AddNewMessageForm({ addMessage }) {
  const onSubmit = (formData) => {
    addMessage(formData);
  };
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className={styles.form}>
          <Field name="message" component="textarea" placeholder={'Введите сообщение'} />
          <button>Отправить</button>
        </form>
      )}
    />
  );
}

export default Messages;
