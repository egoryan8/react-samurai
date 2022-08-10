import React from 'react';
import Profile from './Profile';
import { getProfile } from '../../redux/profile-reducer';
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
    if (!userId) userId = 25337;
    this.props.getProfile(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profileReducer.profile,
});

export default compose(
  connect(mapStateToProps, { getProfile }),
  withRouter,
  withAuthRedirect,
)(ProfileContainer);
