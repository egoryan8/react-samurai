import axios from 'axios';
import React from 'react';
import Users from './Users';
import { connect } from 'react-redux/es/exports';

import {
  toggleFollowAC,
  setUsersAC,
  setCurrentPageAC,
  setCountUsersAC,
} from '../../redux/users-reducer';

class UsersAPI extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
      )
      .then((res) => {
        this.props.setUsers(res.data.items);
        // this.props.setCountUsers(res.data.totalCount);
      });
  }

  setCurrentPage = (page) => {
    this.props.setCurrentPage(page);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`,
      )
      .then((res) => {
        this.props.setUsers(res.data.items);
      });
  };

  render() {
    return (
      <Users
        setCurrentPage={this.setCurrentPage}
        totalUsers={this.props.totalUsers}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        users={this.props.users}
        toggleFollow={this.props.toggleFollow}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersReducer.users,
    pageSize: state.usersReducer.pageSize,
    totalUsers: state.usersReducer.totalUsers,
    currentPage: state.usersReducer.currentPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFollow: (userId) => dispatch(toggleFollowAC(userId)),

    setUsers: (users) => dispatch(setUsersAC(users)),

    setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),

    setCountUsers: (totalUsers) => dispatch(setCountUsersAC(totalUsers)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPI);
