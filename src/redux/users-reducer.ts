import { usersAPI } from '../api/api';
import { UserType } from '../@types/types';
import { AppStateType, InferActionsTypes } from './redux-store';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

type initialStateType = typeof initialState;

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
    case 'TOGGLE_FOLLOW':
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: !user.followed };
          }
          return user;
        }),
      };

    case 'SET_USERS':
      return { ...state, users: action.users };
    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: action.currentPage };
    case 'SET_USERS_COUNT':
      return { ...state, totalUsers: action.usersCount };
    case 'SET_IS_FETCHING':
      return { ...state, isFetching: action.isFetching };
    case 'TOGGLE_IS_FOLLOWING_PROGRESS':
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
  toggleFollow: (userId: number) => ({ type: 'TOGGLE_FOLLOW', userId } as const),
  setUsers: (users: Array<UserType>) => ({ type: 'SET_USERS', users } as const),
  setCurrentPage: (currentPage: number) =>
    ({
      type: 'SET_CURRENT_PAGE',
      currentPage,
    } as const),
  setCountUsers: (usersCount: number) =>
    ({
      type: 'SET_USERS_COUNT',
      usersCount,
    } as const),
  setIsFetching: (isFetching: boolean) =>
    ({
      type: 'SET_IS_FETCHING',
      isFetching,
    } as const),
  toggleFollowingProgress: (isFetching: boolean, userId: number) =>
    ({
      type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
      isFetching,
      userId,
    } as const),
};

type ActionType = InferActionsTypes<typeof actions>;
type DispatchType = Dispatch<ActionType>;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>;

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
