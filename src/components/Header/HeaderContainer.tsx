import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { getAuthData, logout } from '../../redux/auth-reducer';
import { AppStateType } from '../../redux/redux-store';

type MapStateToPropsType = {
  isAuth: boolean;
  login: string | null;
};

type MapDispathToPropsType = {
  logout: () => void;
  getAuthData: () => void;
};

type PropsType = MapStateToPropsType & MapDispathToPropsType;

class HeaderContainer extends React.Component<PropsType> {
  render() {
    return (
      <Header isAuth={this.props.isAuth} logout={this.props.logout} login={this.props.login} />
    );
  }
}

const mapStateToProps = (state: AppStateType) => ({
  isAuth: state.authReducer.isAuth,
  login: state.authReducer.login,
});

export default connect(mapStateToProps, {
  getAuthData,
  logout,
})(HeaderContainer);
