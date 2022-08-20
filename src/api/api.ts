import axios from 'axios';
import { PhotosType, ProfileType, UserType } from '../@types/types';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '1a7cbd8c-f6a1-43d8-b79f-b530c2951bb4',
  },
});

type UsersResType = {
  items: Array<UserType>;
  totalCount: number;
  error: string;
};

type FollowResType = {
  data: {
    id: number;
    email: string;
    login: string;
  };
  resultCode: number;
  messages: Array<string>;
};

export const usersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instance
      .get<UsersResType>(`users?page=${currentPage}&count=${pageSize}`)
      .then((res) => res.data);
  },

  unfollow(userId: number) {
    return instance.delete<FollowResType>(`follow/${userId}`);
  },

  follow(userId: number) {
    return instance.post<FollowResType>(`follow/${userId}`);
  },
};

type StatusResType = {
  data: {
    id: number;
    email: string;
    login: string;
  };
  resultCode: number;
  messages: Array<string>;
};

type PhotosResType = {
  photos: PhotosType;
  resultCode: number;
  messages: Array<string>;
};

export const profileAPI = {
  getProfile(userId: number) {
    return instance.get<ProfileType>(`profile/${userId}`).then((res) => res.data);
  },
  getStatus(userId: number) {
    return instance.get<string>(`profile/status/${userId}`);
  },
  updateStatus(status: string) {
    return instance.put<StatusResType>(`profile/status/`, { status: status });
  },
  setPhoto(photo: string) {
    const formData = new FormData();
    formData.append('image', photo);
    return instance
      .put<PhotosResType>(`profile/photo/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => res.data);
  },
  saveProfile(profile: ProfileType) {
    return instance.put(`profile`, profile);
  },
};

export enum ResultCodeEnum {
  SUCCESS = 0,
  ERROR = 1,
}

type MeResType = {
  data: {
    id: number;
    email: string;
    login: string;
  };
  resultCode: number;
  messages: Array<string>;
};

type LoginResType = {
  data: {
    id: number;
  };
  resultCode: number;
  messages: Array<string>;
};

export const authAPI = {
  me() {
    return instance.get<MeResType>(`auth/me`).then((res) => res.data);
  },
  login(email: string, password: string, rememberMe = false) {
    return instance
      .post<LoginResType>('auth/login', { email, password, rememberMe })
      .then((res) => res.data);
  },
  logout() {
    return instance.delete<LoginResType>('auth/login').then((res) => res.data);
  },
};
