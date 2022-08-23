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

import { follow, unfollow, getUsers, actions } from '../../redux/users-reducer';
import Preloader from '../Preloader/Preloader';
import { UserType } from '../../@types/types';
import { AppStateType } from '../../redux/redux-store';

type PropsType = {
  users: Array<UserType>;
  totalUsers: number;
  currentPage: number;
  pageSize: number;
  isFollowing: Array<number>;
  isFetching: boolean;
  setCurrentPage: (page: number) => void;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  getUsers: (page: number, pageSize: number) => void;
};

class UsersAPI extends React.Component<PropsType> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  setCurrentPage = (page: number) => {
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
          isFollowing={this.props.isFollowing}
        />
      </>
    );
  }
}

const mapStateToProps = (state: AppStateType) => {
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
  setCurrentPage: actions.setCurrentPage,
  getUsers,
  follow,
  unfollow,
})(UsersAPI);
