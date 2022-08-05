import React from 'react';
import Preloader from '../../Preloader/Preloader';
import styles from './ProfileInfo.module.css';
import userAvatarDefault from '../../Users/user.png';

function ProfileInfo(props) {
  if (!props.profile) {
    return <Preloader />;
  }
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
        <img
          src={props.profile.photos.large || userAvatarDefault}
          alt="Аватарка"
          className={styles.ava}
        />
        <div className={styles.textContainer}>
          <h1 className={styles.name}>{props.profile.fullName}</h1>
          <p className={styles.status}>{props.profile.aboutMe}</p>
        </div>
      </div>
    </>
  );
}

export default ProfileInfo;
