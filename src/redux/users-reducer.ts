import { UserType } from '../@types/types';
import { InferActionsTypes, CommonThunkType } from './redux-store';
import { Dispatch } from 'redux';
import { usersAPI } from '../api/users-api';

const initialState = {
  users: [] as Array<UserType>,
  pageSize: 15,
  totalUsers: 0,
  currentPage: 1,
  isFetching: false,
  isFollowing: [] as Array<number>, //Array of users id
};

const usersReducer = (state = initialState, action: ActionType): initialStateType => {
  switch (action.type) {
    case 'SN/USERS/TOGGLE_FOLLOW':
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: !user.followed };
          }
          return user;
        }),
      };

    case 'SN/USERS/SET_USERS':
      return { ...state, users: action.users };
    case 'SN/USERS/SET_CURRENT_PAGE':
      return { ...state, currentPage: action.currentPage };
    case 'SN/USERS/SET_USERS_COUNT':
      return { ...state, totalUsers: action.usersCount };
    case 'SN/USERS/SET_IS_FETCHING':
      return { ...state, isFetching: action.isFetching };
    case 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS':
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

export const actions = {
  toggleFollow: (userId: number) => ({ type: 'SN/USERS/TOGGLE_FOLLOW', userId } as const),
  setUsers: (users: Array<UserType>) => ({ type: 'SN/USERS/SET_USERS', users } as const),
  setCurrentPage: (currentPage: number) =>
    ({
      type: 'SN/USERS/SET_CURRENT_PAGE',
      currentPage,
    } as const),
  setCountUsers: (usersCount: number) =>
    ({
      type: 'SN/USERS/SET_USERS_COUNT',
      usersCount,
    } as const),
  setIsFetching: (isFetching: boolean) =>
    ({
      type: 'SN/USERS/SET_IS_FETCHING',
      isFetching,
    } as const),
  toggleFollowingProgress: (isFetching: boolean, userId: number) =>
    ({
      type: 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS',
      isFetching,
      userId,
    } as const),
};

export const getUsers = (currentPage: number, pageSize: number): ThunkType => {
  return async (dispatch) => {
    dispatch(actions.setIsFetching(true));
    const res = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(actions.setIsFetching(false));
    dispatch(actions.setUsers(res.items));
    dispatch(actions.setCountUsers(res.totalCount));
  };
};

const followUnfollowFlow = async (dispatch: DispatchType, apiMethod: any, userId: number) => {
  dispatch(actions.toggleFollowingProgress(true, userId));
  const res = await apiMethod(userId);
  if (res.data.resultCode === 0) {
    dispatch(actions.toggleFollow(userId));
  }
  dispatch(actions.toggleFollowingProgress(false, userId));
};

export const follow = (userId: number): ThunkType => {
  return async (dispatch) => {
    followUnfollowFlow(dispatch, usersAPI.follow, userId);
  };
};

export const unfollow = (userId: number): ThunkType => {
  return async (dispatch) => {
    followUnfollowFlow(dispatch, usersAPI.unfollow, userId);
  };
};

export default usersReducer;

type initialStateType = typeof initialState;
type ActionType = InferActionsTypes<typeof actions>;
type DispatchType = Dispatch<ActionType>;
type ThunkType = CommonThunkType<ActionType>;
