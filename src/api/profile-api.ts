import { PhotosType, ProfileType } from '../@types/types';
import { GetItemsType, instance } from './api';

type PhotosResType = {
  photos: PhotosType;
  resultCode: number | null;
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
    return instance.put<GetItemsType>(`profile/status/`, { status: status });
  },
  setPhoto(photo: any) {
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
