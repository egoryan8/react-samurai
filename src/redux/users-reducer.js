const initialState = {
  users: [],
  pageSize: 10,
  totalUsers: 150,
  currentPage: 1,
  isFetching: false,
  isFollowing: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE-FOLLOW':
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: !user.followed };
          }
          return user;
        }),
      };

    case 'SET-USERS':
      return { ...state, users: action.users };
    case 'SET-CURRENT-PAGE':
      return { ...state, currentPage: action.currentPage };
    case 'SET-USERS-COUNT':
      return { ...state, totalUsers: action.usersCount };
    case 'SET-IS-FETCHING':
      return { ...state, isFetching: action.isFetching };
    case 'TOGGLE-IS-FOLLOWING-PROGRESS':
      return {
        ...state,
        isFollowing: action.isFetching
          ? [...state.isFollowing, action.userId]
          : state.isFollowing.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};

export const toggleFollow = (userId) => ({ type: 'TOGGLE-FOLLOW', userId });
export const setUsers = (users) => ({ type: 'SET-USERS', users });
export const setCurrentPage = (currentPage) => ({ type: 'SET-CURRENT-PAGE', currentPage });
export const setCountUsers = (usersCount) => ({ type: 'SET-USERS-COUNT', usersCount });
export const setIsFetching = (isFetching) => ({ type: 'SET-IS-FETCHING', isFetching });
export const toggleFollowingProgress = (isFetching, userId) => ({
  type: 'TOGGLE-IS-FOLLOWING-PROGRESS',
  isFetching,
  userId,
});

export default usersReducer;
