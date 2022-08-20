import { usersAPI } from '../api/api';
import { UserType } from '../@types/types';
import { AppStateType } from './redux-store';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_COUNT = 'SET_USERS_COUNT';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

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
    case TOGGLE_FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: !user.followed };
          }
          return user;
        }),
      };

    case SET_USERS:
      return { ...state, users: action.users };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_USERS_COUNT:
      return { ...state, totalUsers: action.usersCount };
    case SET_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
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
type ToggleFollowType = {
  type: typeof TOGGLE_FOLLOW;
  userId: number;
};

type SetUsersType = {
  type: typeof SET_USERS;
  users: Array<UserType>;
};

type SetCurrentPageType = {
  type: typeof SET_CURRENT_PAGE;
  currentPage: number;
};

type SetCountUsersType = {
  type: typeof SET_USERS_COUNT;
  usersCount: number;
};

type SetIsFetchingType = {
  type: typeof SET_IS_FETCHING;
  isFetching: boolean;
};

type ToggleFollowingProgress = {
  type: typeof TOGGLE_IS_FOLLOWING_PROGRESS;
  isFetching: boolean;
  userId: number;
};

type ActionType =
  | ToggleFollowType
  | SetUsersType
  | SetCurrentPageType
  | SetCountUsersType
  | SetIsFetchingType
  | ToggleFollowingProgress;

export const toggleFollow = (userId: number): ToggleFollowType => ({ type: TOGGLE_FOLLOW, userId });
export const setUsers = (users: Array<UserType>): SetUsersType => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setCountUsers = (usersCount: number): SetCountUsersType => ({
  type: SET_USERS_COUNT,
  usersCount,
});
export const setIsFetching = (isFetching: boolean): SetIsFetchingType => ({
  type: SET_IS_FETCHING,
  isFetching,
});
export const toggleFollowingProgress = (
  isFetching: boolean,
  userId: number,
): ToggleFollowingProgress => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

type getStateType = () => AppStateType;
type DispatchType = Dispatch<ActionType>;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>;

export const getUsers = (currentPage: number, pageSize: number): ThunkType => {
  return async (dispatch) => {
    dispatch(setIsFetching(true));
    const res = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(setIsFetching(false));
    dispatch(setUsers(res.items));
    dispatch(setCountUsers(res.totalCount));
  };
};

const followUnfollowFlow = async (dispatch: DispatchType, apiMethod: any, userId: number) => {
  dispatch(toggleFollowingProgress(true, userId));
  const res = await apiMethod(userId);
  if (res.data.resultCode === 0) {
    dispatch(toggleFollow(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
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
