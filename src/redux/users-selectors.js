export const getUsersSelector = (state) => state.usersReducer.users;
export const getPageSize = (state) => state.usersReducer.pageSize;
export const getTotalUsers = (state) => state.usersReducer.totalUsers;
export const getCurrentPage = (state) => state.usersReducer.currentPage;
export const getIsFetching = (state) => state.usersReducer.isFetching;
export const getIsFollowing = (state) => state.usersReducer.isFollowing;
