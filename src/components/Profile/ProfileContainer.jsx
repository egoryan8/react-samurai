import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import { setProfile } from '../../redux/profile-reducer';
import { connect } from 'react-redux';

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/29`).then((res) => {
      this.props.setProfile(res.data);
    });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profileReducer.profile,
});

export default connect(mapStateToProps, { setProfile })(ProfileContainer);
