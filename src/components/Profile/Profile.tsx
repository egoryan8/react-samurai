import React from 'react';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { ProfileType } from '../../@types/types';
import MyPosts from "./MyPosts/MyPosts";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

type ProfilePropsType = {
  profile: ProfileType | null;
  isOwner: boolean;
  status: string;
  authorizedUserId: number;
  updateStatus: (status: string) => void;
  savePhoto: (photo: File) => void;
  saveProfile: (profile: ProfileType) => void;
  getProfile: (userId: number) => void;
  getStatus: (userId: number) => void;
};

const Profile: React.FC<ProfilePropsType> = ({
  updateStatus,
  isOwner,
  savePhoto,
  saveProfile,
}) => {
  const {profile, status} = useSelector((state: AppStateType) => state.profileReducer)
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
      <MyPosts profile={profile} />
    </div>
  );
};

export default Profile;
