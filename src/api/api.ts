import axios from 'axios';
import { PhotosType, ProfileType } from '../@types/types';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '1a7cbd8c-f6a1-43d8-b79f-b530c2951bb4',
  },
});

export const usersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((res) => res.data);
  },

  unfollow(userId: number) {
    return instance.delete(`follow/${userId}`);
  },

  follow(userId: number) {
    return instance.post(`follow/${userId}`);
  },
};

export const profileAPI = {
  getProfile(userId: number) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId: number) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status: string) {
    return instance.put(`profile/status/`, { status: status });
  },
  setPhoto(photo: string) {
    const formData = new FormData();
    formData.append('image', photo);
    return instance.put(`profile/photo/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  saveProfile(profile: ProfileType) {
    return instance.put(`profile`, profile);
  },
};

type MeResType = {
  data: {
    id: number;
    email: string;
    login: string;
  };
  resultCode: number;
  messages: Array<string>;
};

export const authAPI = {
  me() {
    return instance.get<MeResType>(`auth/me`).then((res) => res.data);
  },
  login(email: string, password: string, rememberMe = false) {
    return instance.post('auth/login', { email, password, rememberMe });
  },
  logout() {
    return instance.delete('auth/login');
  },
};
