import { Form, Field } from 'react-final-form';
import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/DialogItem';
import styles from './Messages.module.css';
import { required } from '../../utils/validator';
import { DialogType, MessageType } from '../../@types/types';

type MesagesProps = {
  dialogsData: Array<DialogType>;
  messagesData: Array<MessageType>;
  addMessageDispatch: (message: string) => void;
};

const Messages: React.FC<MesagesProps> = ({ dialogsData, messagesData, addMessageDispatch }) => {
  const dialogElements = dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />
  ));
  const messageElements = messagesData.map((message) => (
    <MessageItem message={message.message} key={message.id} />
  ));

  const addMessage = (formData: { message: string }) => {
    addMessageDispatch(formData.message);
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
};

type AddNewMessageFormType = {
  addMessage: (formData: { message: string }) => void;
};

const AddNewMessageForm: React.FC<AddNewMessageFormType> = ({ addMessage }) => {
  const onSubmit = (formData: { message: string }) => {
    addMessage(formData);
  };
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className={styles.form}>
          <Field
            name="message"
            component="textarea"
            placeholder={'Введите сообщение'}
            validate={required}
          />
          <button>Отправить</button>
        </form>
      )}
    />
  );
};

export default Messages;
