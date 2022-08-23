import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { DialogType, MessageType } from '../../@types/types';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { actions } from '../../redux/messages-reducer';
import { AppStateType } from '../../redux/redux-store';
import Messages from './Messages';

type MapStateToPropsType = {
  dialogsData: Array<DialogType>;
  messagesData: Array<MessageType>;
};

type MapDispatchToPropsType = {
  addMessage: (message: string) => void;
};

type PropsType = MapStateToPropsType & MapDispatchToPropsType;

class MessagesContainer extends React.Component<PropsType> {
  render() {
    return (
      <Messages
        dialogsData={this.props.dialogsData}
        messagesData={this.props.messagesData}
        addMessageDispatch={this.props.addMessage}
      />
    );
  }
}

const mapStateToProps = (state: AppStateType) => {
  return {
    dialogsData: state.messagesReducer.dialogsData,
    messagesData: state.messagesReducer.messagesData,
    isAuth: state.authReducer.isAuth,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addMessage: (message: string) => {
      dispatch(actions.addMessageActionCreator(message));
    },
  };
};

export default compose<React.Component<PropsType>>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
)(MessagesContainer);
