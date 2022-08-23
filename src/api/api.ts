import axios from 'axios';
import { PhotosType, ProfileType, UserType } from '../@types/types';

export const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '1a7cbd8c-f6a1-43d8-b79f-b530c2951bb4',
  },
});

export enum ResultCodeEnum {
  SUCCESS = 0,
  ERROR = 1,
}

export type GetItemsType = {
  data: {
    id: number;
    email: string;
    login: string;
  };
  resultCode: number;
  messages: Array<string>;
};
