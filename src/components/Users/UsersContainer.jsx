import React from 'react';
import Users from './Users';
import { connect } from 'react-redux/es/exports';
import { toggleFollowAC, setUsersAC, unFollowAC } from '../../redux/users-reducer';

const mapStateToProps = (state) => {
  return {
    users: state.usersReducer.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFollow: (userId) => dispatch(toggleFollowAC(userId)),

    setUsers: (users) => dispatch(setUsersAC(users)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
