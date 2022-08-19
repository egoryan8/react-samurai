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
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { withRouter } from '../../hoc/withRouter';
import { AppStateType } from '../../redux/redux-store';
import { PhotosType, ProfileType } from '../../@types/types';

type PropsType = {
  profile: ProfileType;
  isOwner: boolean;
  status: string;
  authorizedUserId: number;
  updateStatus: (status: string) => void;
  savePhoto: (photo: PhotosType) => void;
  saveProfile: (profile: ProfileType) => void;
  getProfile: (userId: number) => void;
  getStatus: (userId: number) => void;
  match: any;
};

class ProfileContainer extends React.Component<PropsType> {
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

const mapStateToProps = (state: AppStateType) => ({
  profile: state.profileReducer.profile,
  status: state.profileReducer.status,
  authorizedUserId: state.authReducer.userId,
  isAuth: state.authReducer.isAuth,
});

export default compose<React.Component<PropsType>>(
  connect(mapStateToProps, { getProfile, getStatus, updateStatus, savePhoto, saveProfile }),
  withRouter,
  withAuthRedirect,
)(ProfileContainer);
