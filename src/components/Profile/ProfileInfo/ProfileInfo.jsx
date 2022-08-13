import React from 'react';
import Preloader from '../../Preloader/Preloader';
import styles from './ProfileInfo.module.css';
import userAvatarDefault from '../../Users/user.png';
import ProfileStatus from './ProfileStatus';

function ProfileInfo(props) {
  if (!props.profile) return <Preloader />;

  const onPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
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
      </div>
    </>
  );
}

export default ProfileInfo;
