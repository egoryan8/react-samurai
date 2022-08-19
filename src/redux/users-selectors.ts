import { AppStateType } from './redux-store';

export const getUsersSelector = (state: AppStateType) => state.usersReducer.users;
export const getPageSize = (state: AppStateType) => state.usersReducer.pageSize;
export const getTotalUsers = (state: AppStateType) => state.usersReducer.totalUsers;
export const getCurrentPage = (state: AppStateType) => state.usersReducer.currentPage;
export const getIsFetching = (state: AppStateType) => state.usersReducer.isFetching;
export const getIsFollowing = (state: AppStateType) => state.usersReducer.isFollowing;
