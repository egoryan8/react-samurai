import React from 'react';
import Users from './Users';
import { connect } from 'react-redux/es/exports';
import { usersAPI } from '../../api/api';

import {
  toggleFollow,
  setUsers,
  setCurrentPage,
  setCountUsers,
  setIsFetching,
  toggleFollowingProgress,
} from '../../redux/users-reducer';
import Preloader from '../Preloader/Preloader';

class UsersAPI extends React.Component {
  componentDidMount() {
    console.log(this.props);
    this.props.setIsFetching(true);
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((res) => {
      this.props.setUsers(res.data.items);
      // this.props.setCountUsers(res.data.totalCount);
      this.props.setIsFetching(false);
    });
  }

  setCurrentPage = (page) => {
    this.props.setCurrentPage(page);
    this.props.setIsFetching(true);
    usersAPI.getUsers(page, this.props.pageSize).then((res) => {
      this.props.setUsers(res.data.items);
      this.props.setIsFetching(false);
    });
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
          toggleFollow={this.props.toggleFollow}
          isFetching={this.props.isFetching}
          toggleFollowingProgress={this.props.toggleFollowingProgress}
          isFollowing={this.props.isFollowing}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersReducer.users,
    pageSize: state.usersReducer.pageSize,
    totalUsers: state.usersReducer.totalUsers,
    currentPage: state.usersReducer.currentPage,
    isFetching: state.usersReducer.isFetching,
    isFollowing: state.usersReducer.isFollowing,
  };
};

export default connect(mapStateToProps, {
  toggleFollow,
  setUsers,
  setCurrentPage,
  setCountUsers,
  setIsFetching,
  toggleFollowingProgress,
})(UsersAPI);
