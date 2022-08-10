import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
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
    isAuth: state.authReducer.isAuth,
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

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Messages);
