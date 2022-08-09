import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthData } from './../../redux/auth-reducer';
import axios from 'axios';

class HeaderContainer extends React.Component {
  componentDidMount() {
    console.log(this.props);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
      .then((res) => {
        if (res.data.resultCode === 0) {
          let { id, email, login } = res.data.data;
          this.props.setAuthData(id, email, login);
        }
      });
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
  login: state.authReducer.login,
});

export default connect(mapStateToProps, { setAuthData })(HeaderContainer);
