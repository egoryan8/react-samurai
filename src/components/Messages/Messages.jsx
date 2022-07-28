import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/DialogItem';
import styles from './Messages.module.css';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/messages-reducer";

function Messages(props) {
  const dialogElements = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
  const messageElements = props.state.messagesData.map(message => <MessageItem message={message.message}/>)

  const newMessageElement = React.createRef();

  const addMessage = (e) => {
    e.preventDefault();
    props.dispatch(addMessageActionCreator());
  };

  const onMessageChange = () => {
    const text = newMessageElement.current.value;
    props.dispatch(updateNewMessageTextActionCreator(text))
  };

  const onEnterPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      addMessage(e);
    }
  }

  return <div className={styles.dialogsWrapper}>
    <div className={styles.dialogs}>
      <p>DIALOGS</p>
      {dialogElements}
    </div>
    <div className={styles.messages}>
      <div>{messageElements}</div>
      <form onSubmit={addMessage} className={styles.form}>
        <textarea onChange={onMessageChange}
                  placeholder={'Введите сообщение'}
                  ref={newMessageElement}
                  value={props.state.newMessageText}
                  onKeyDown={onEnterPress}>
        </textarea>
        <button>Отправить</button>
      </form>
    </div>
  </div>;
}

export default Messages;
