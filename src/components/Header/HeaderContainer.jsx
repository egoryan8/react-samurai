import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { getAuthData, logout } from './../../redux/auth-reducer';

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
  login: state.authReducer.login,
});

export default connect(mapStateToProps, { getAuthData, logout })(HeaderContainer);
