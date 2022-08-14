import React from 'react';
import Profile from './Profile';
import {
  getProfile,
  getStatus,
  updateStatus,
  savePhoto,
  saveProfile,
} from '../../redux/profile-reducer';
import { connect } from 'react-redux';
// import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { withRouter } from '../../hoc/withRouter';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
    }

    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <Profile
        {...this.props}
        isOwner={!this.props.match.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto}
        saveProfile={this.props.saveProfile}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profileReducer.profile,
  status: state.profileReducer.status,
  authorizedUserId: state.authReducer.userId,
  isAuth: state.authReducer.isAuth,
});

export default compose(
  connect(mapStateToProps, { getProfile, getStatus, updateStatus, savePhoto, saveProfile }),
  withRouter,
)(ProfileContainer);
