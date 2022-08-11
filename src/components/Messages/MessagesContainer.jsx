import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { addMessageActionCreator } from '../../redux/messages-reducer';
import Messages from './Messages';

const mapStateToProps = (state) => {
  return {
    dialogsData: state.messagesReducer.dialogsData,
    messagesData: state.messagesReducer.messagesData,
    isAuth: state.authReducer.isAuth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (message) => {
      dispatch(addMessageActionCreator(message));
    },
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Messages);
