import React from 'react';
import Preloader from '../../Preloader/Preloader';
import styles from './ProfileInfo.module.css';
import userAvatarDefault from '../../Users/user.png';
import ProfileStatus from './ProfileStatus';
import { useState } from 'react';
import ProfileDataForm from './ProfileDataForm';

function ProfileInfo(props) {
  const [editMode, setEditMode] = useState(false);
  if (!props.profile) return <Preloader />;

  const onPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    props.saveProfile(formData);
    setEditMode(false);
  };

  return (
    <>
      <div className={styles.container}>
        {props.isOwner && (
          <div className={styles.avaWrapper}>
            <img
              src={props.profile.photos.large || userAvatarDefault}
              alt="Аватарка"
              className={styles.ava}
            />

            <input
              id="uploadAva"
              name="uploadAva"
              type="file"
              onChange={onPhotoSelected}
              className={styles.avaInput}
            />
            <label for="uploadAva" className={styles.avaInputLabel}></label>
          </div>
        )}
        {!props.isOwner && (
          <div className={styles.avaWrapper}>
            <img
              src={props.profile.photos.large || userAvatarDefault}
              alt="Аватарка"
              className={styles.ava}
            />
          </div>
        )}
        <div className={styles.profileInfoContainer}>
          <h1 className={styles.name}>{props.profile.fullName}</h1>
          <ProfileStatus
            className={styles.status}
            status={props.status}
            updateStatus={props.updateStatus}
            isOwner={props.isOwner}
          />
        </div>
        {editMode ? (
          <ProfileDataForm {...props} onSubmit={onSubmit} />
        ) : (
          <ProfileData
            {...props}
            activateEditMode={() => {
              setEditMode(true);
            }}
          />
        )}
      </div>
    </>
  );
}

const ProfileData = (props) => {
  return (
    <>
      {props.isOwner && (
        <div className={styles.editWrapper}>
          <button className={styles.editProfileButton} onClick={props.activateEditMode}></button>
        </div>
      )}

      <div className={styles.textContainer}>
        <h2>Обо мне:</h2>
        <b>Обо мне: </b>
        <p>{props.profile.aboutMe}</p>
        <p>
          <b>Ищу работу: </b>
          {props.profile.lookingForAJob ? 'да' : 'нет'}
        </p>
        {props.profile.lookingForAJob && (
          <>
            <b>Мои навыки: </b>
            <p>{props.profile.lookingForAJobDescription}</p>
          </>
        )}
      </div>
      <div className={styles.textContainer}>
        <h2>Контакты:</h2>
        {Object.keys(props.profile.contacts).map((key) => {
          return (
            props.profile.contacts[key] && (
              <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
            )
          );
        })}
      </div>
    </>
  );
};

export const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={styles.contact}>
      <b>{contactTitle === 'website' ? 'telegram' : contactTitle}: </b>
      <a href={contactValue} target="_blank">
        {contactValue}
      </a>
    </div>
  );
};

export default ProfileInfo;
