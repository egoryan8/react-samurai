const initialState = {
  users: [],
  pageSize: 10,
  totalUsers: 150,
  currentPage: 1,
  isFetching: false,
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
    default:
      return state;
  }
};

export const toggleFollowAC = (userId) => ({ type: 'TOGGLE-FOLLOW', userId });
export const setUsersAC = (users) => ({ type: 'SET-USERS', users });
export const setCurrentPageAC = (currentPage) => ({ type: 'SET-CURRENT-PAGE', currentPage });
export const setCountUsersAC = (usersCount) => ({ type: 'SET-USERS-COUNT', usersCount });
export const setIsFetchingAC = (isFetching) => ({ type: 'SET-IS-FETCHING', isFetching });

export default usersReducer;
