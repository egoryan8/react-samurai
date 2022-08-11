import React from 'react';
import Profile from './Profile';
import { getProfile, getStatus, updateStatus } from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = this.props.authorizedUserId;
    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
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
  connect(mapStateToProps, { getProfile, getStatus, updateStatus }),
  withRouter,
  withAuthRedirect,
)(ProfileContainer);
