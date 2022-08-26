import React, {ChangeEvent} from 'react';
import Preloader from '../../Preloader/Preloader';
import styles from './ProfileInfo.module.css';
import userAvatarDefault from '../../Users/user.png';
import ProfileStatus from './ProfileStatus';
import {useState} from 'react';
import ProfileDataForm from './ProfileDataForm';
import {ProfileType} from '../../../@types/types';

type ProfileInfoPropsType = {
  status: string;
  profile: ProfileType;
  isOwner: boolean;
  savePhoto: (file: File) => void;
  saveProfile: (profile: ProfileType) => void;
  updateStatus: (status: string) => void;
};

const ProfileInfo: React.FC<ProfileInfoPropsType> = ({status, profile, isOwner, savePhoto, saveProfile, updateStatus,}) => {
  const [editMode, setEditMode] = useState(false);
  if (!profile) return <Preloader/>;

  const onPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files?.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData: any) => {
    saveProfile(formData);
    setEditMode(false);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.avaWrapper}>
          <img src={profile.photos?.large || userAvatarDefault} alt="Аватарка" className={styles.ava}/>
          {
            isOwner && (
              <>
                <input
                  id="uploadAva"
                  name="uploadAva"
                  type="file"
                  onChange={onPhotoSelected}
                  className={styles.avaInput}
                />
                <label htmlFor="uploadAva" className={styles.avaInputLabel}></label>
              </>
            )
          }
        </div>
        <div className={styles.profileInfoContainer}>
          <h1 className={styles.name}>{profile.fullName}</h1>
          <ProfileStatus propStatus={status} updateStatus={updateStatus} isOwner={isOwner}/>
        </div>
        {editMode ? (
          <ProfileDataForm profile={profile} onSubmit={onSubmit}/>
        ) : (
          <ProfileData
            profile={profile}
            isOwner={isOwner}
            activateEditMode={() => {
              setEditMode(true);
            }}
          />
        )}
      </div>
    </>
  );
};

type ProfileDataType = {
  profile: ProfileType;
  isOwner: boolean;
  activateEditMode: () => void;
};

const ProfileData: React.FC<ProfileDataType> = ({profile, isOwner, activateEditMode}) => {
  return (
    <>
      {isOwner && (
        <div className={styles.editWrapper}>
          <button className={styles.editProfileButton} onClick={activateEditMode}></button>
        </div>
      )}

      <div className={styles.textContainer}>
        <h2>Обо мне:</h2>
        <b>Обо мне: </b>
        <p>{profile.aboutMe}</p>
        <p>
          <b>Ищу работу: </b>
          {profile.lookingForAJob ? 'да' : 'нет'}
        </p>
        {profile.lookingForAJob && (
          <>
            <b>Мои навыки: </b>
            <p>{profile.lookingForAJobDescription}</p>
          </>
        )}
      </div>
      <div className={styles.textContainer}>
        <h2>Контакты:</h2>
        <div className={styles.contact}>
          <b>github: </b>
          <a href={profile.contacts?.github} target="_blank" rel="noreferrer">
            github
          </a>
        </div>
        <div className={styles.contact}>
          <b>vk: </b>
          <a href={profile.contacts?.vk} target="_blank" rel="noreferrer">
            vk
          </a>
        </div>
        <div className={styles.contact}>
          <b>instagram: </b>
          <a href={profile.contacts?.instagram} target="_blank" rel="noreferrer">
            instagram
          </a>
        </div>
        <div className={styles.contact}>
          <b>website: </b>
          <a href={profile.contacts?.website} target="_blank" rel="noreferrer">
            website
          </a>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
