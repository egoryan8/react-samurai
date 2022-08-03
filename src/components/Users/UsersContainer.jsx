import Users from './Users';
import { connect } from 'react-redux/es/exports';
import {
  toggleFollowAC,
  setUsersAC,
  setCurrentPageAC,
  setCountUsersAC,
} from '../../redux/users-reducer';

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

export default connect(mapStateToProps, mapDispatchToProps)(Users);
