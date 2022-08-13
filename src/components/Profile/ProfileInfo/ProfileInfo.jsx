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
      <div>
        <img
          className={styles.img}
          src="https://images.unsplash.com/photo-1658144492483-912cc8f969b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
          alt=""
        />
      </div>
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
          <img
            src={props.profile.photos.large || userAvatarDefault}
            alt="Аватарка"
            className={styles.ava}
          />
        )}

        <div className={styles.textContainer}>
          <h1 className={styles.name}>{props.profile.fullName}</h1>
          <ProfileStatus
            className={styles.status}
            status={props.status}
            updateStatus={props.updateStatus}
          />
        </div>
      </div>
    </>
  );
}

export default ProfileInfo;
