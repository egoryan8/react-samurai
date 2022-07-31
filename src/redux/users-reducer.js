const initialState = {
  users: [],
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
      return { ...state, users: [...state.users, ...action.users] };
    default:
      return state;
  }
};

export const toggleFollowAC = (userId) => ({ type: 'TOGGLE-FOLLOW', userId });
export const setUsersAC = (users) => ({ type: 'SET-USERS', users });

export default usersReducer;
