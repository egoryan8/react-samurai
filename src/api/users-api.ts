import { UserType } from '../@types/types';
import { GetItemsType, instance } from './api';

type UsersResType = {
  items: Array<UserType>;
  totalCount: number;
  error: string | null;
};

export const usersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instance
      .get<UsersResType>(`users?page=${currentPage}&count=${pageSize}`)
      .then((res) => res.data);
  },

  unfollow(userId: number) {
    return instance.delete<GetItemsType>(`follow/${userId}`);
  },

  follow(userId: number) {
    return instance.post<GetItemsType>(`follow/${userId}`);
  },
};
