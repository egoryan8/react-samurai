import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '1a7cbd8c-f6a1-43d8-b79f-b530c2951bb4',
  },
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((res) => res.data);
  },

  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },

  follow(userId) {
    return instance.post(`follow/${userId}`);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status/`, { status: status });
  },
  setPhoto(photo) {
    const formData = new FormData();
    formData.append('image', photo);
    return instance.put(`profile/photo/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
  login(email, password, rememberMe = false) {
    return instance.post('auth/login', { email, password, rememberMe });
  },
  logout() {
    return instance.delete('auth/login');
  },
};
