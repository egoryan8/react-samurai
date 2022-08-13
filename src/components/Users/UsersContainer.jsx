import React from 'react';
import Users from './Users';
import { connect } from 'react-redux/es/exports';

import {
  getCurrentPage,
  getIsFetching,
  getIsFollowing,
  getPageSize,
  getTotalUsers,
  getUsersSelector,
} from '../../redux/users-selectors';

import {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers,
} from '../../redux/users-reducer';
import Preloader from '../Preloader/Preloader';

class UsersAPI extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  setCurrentPage = (page) => {
    this.props.setCurrentPage(page);
    this.props.getUsers(page, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching && <Preloader />}
        <Users
          setCurrentPage={this.setCurrentPage}
          totalUsers={this.props.totalUsers}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          isFetching={this.props.isFetching}
          isFollowing={this.props.isFollowing}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: getUsersSelector(state),
    pageSize: getPageSize(state),
    totalUsers: getTotalUsers(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    isFollowing: getIsFollowing(state),
  };
};

export default connect(mapStateToProps, {
  setCurrentPage,
  toggleFollowingProgress,
  getUsers,
  follow,
  unfollow,
})(UsersAPI);
