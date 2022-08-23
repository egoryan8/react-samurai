import { GetItemsType, instance } from './api';

type LoginResType = {
  data: {
    id: number;
  };
  resultCode: number;
  messages: Array<string>;
};

export const authAPI = {
  me() {
    return instance.get<GetItemsType>(`auth/me`).then((res) => res.data);
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
