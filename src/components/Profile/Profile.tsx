import React from 'react';
import styles from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { PhotosType, ProfileType } from '../../@types/types';

type ProfilePropsType = {
  profile: ProfileType;
  isOwner: boolean;
  status: string;
  authorizedUserId: number;
  updateStatus: (status: string) => void;
  savePhoto: (photo: PhotosType) => void;
  saveProfile: (profile: ProfileType) => void;
  getProfile: (userId: number) => void;
  getStatus: (userId: number) => void;
};

const Profile: React.FC<ProfilePropsType> = ({
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfile,
  profile,
}) => {
  return (
    <div className={styles.profileWrapper}>
      <ProfileInfo
        profile={profile}
        status={status}
        updateStatus={updateStatus}
        isOwner={isOwner}
        savePhoto={savePhoto}
        saveProfile={saveProfile}
      />
      <MyPostsContainer profile={profile} />
    </div>
  );
};

export default Profile;
