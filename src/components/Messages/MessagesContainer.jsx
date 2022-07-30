import { connect } from 'react-redux';
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from '../../redux/messages-reducer';
import Messages from './Messages';

const mapStateToProps = (state) => {
  return {
    dialogsData: state.messagesReducer.dialogsData,
    messagesData: state.messagesReducer.messagesData,
    newMessageText: state.messagesReducer.newMessageText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
    updateNewMessageText: (text) => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
  };
};

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;
