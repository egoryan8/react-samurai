import React from 'react';
import Preloader from '../../Preloader/Preloader';
import styles from './ProfileInfo.module.css';
import userAvatarDefault from '../../Users/user.png';
import ProfileStatus from './ProfileStatus';
import { useState } from 'react';
import ProfileDataForm from './ProfileDataForm';

function ProfileInfo(props) {
  const [editMode, setEditMode] = useState(false);
  console.log(props.profile);
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
        <div className={styles.textContainer}>
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
        <div>
          <b>Обо мне: </b>
          <span>{props.profile.aboutMe}</span>
        </div>
        <div>
          <b>Ищу работу: </b>
          <span>{props.profile.lookingForAJob ? 'да' : 'нет'}</span>
        </div>
        {props.profile.lookingForAJob && (
          <div>
            <b>Мои навыки: </b> <span>{props.profile.lookingForAJobDescription}</span>
          </div>
        )}
      </div>
      <div className={styles.textContainer}>
        <b>
          Контакты:
          {Object.keys(props.profile.contacts).map((key) => {
            return (
              <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
            );
          })}
        </b>
      </div>
    </>
  );
};

export const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={styles.contact}>
      <b>{contactTitle}: </b>
      <a href={contactValue} target="_blank">
        {contactValue}
      </a>
    </div>
  );
};

export default ProfileInfo;
