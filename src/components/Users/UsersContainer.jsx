import axios from 'axios';
import React from 'react';
import Users from './Users';
import { connect } from 'react-redux/es/exports';

import {
  toggleFollowAC,
  setUsersAC,
  setCurrentPageAC,
  setCountUsersAC,
  setIsFetchingAC,
} from '../../redux/users-reducer';
import Preloader from '../Preloader/Preloader';

class UsersAPI extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
      )
      .then((res) => {
        this.props.setUsers(res.data.items);
        // this.props.setCountUsers(res.data.totalCount);
        this.props.setIsFetching(false);
      });
  }

  setCurrentPage = (page) => {
    this.props.setCurrentPage(page);
    this.props.setIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`,
      )
      .then((res) => {
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFollow: (userId) => dispatch(toggleFollowAC(userId)),

    setUsers: (users) => dispatch(setUsersAC(users)),

    setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),

    setCountUsers: (totalUsers) => dispatch(setCountUsersAC(totalUsers)),

    setIsFetching: (isFetching) => dispatch(setIsFetchingAC(isFetching)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPI);
