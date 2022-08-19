export type PostType = {
  id: number;
  message: string;
  likesCount: number;
};

export type ContactsType = {
  github?: string;
  vk?: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  website: string;
  youtube?: string;
  mainLink: string;
};

export type PhotosType = {
  small: string | null;
  large: string | null;
};

export type ProfileType = {
  userId: number | null;
  lookingForAJob: boolean;
  lookingForAJobDescription: string | null;
  fullName: string | null;
  contacts: ContactsType | null;
  photos: PhotosType | null;
  aboutMe: string | null;
};

export type UserType = {
  id: number;
  name: string;
  status: string;
  photos: PhotosType;
  followed: boolean;
};

export type MessageType = {
  id: number;
  message: string;
};

export type DialogType = {
  id: number;
  name: string;
};
