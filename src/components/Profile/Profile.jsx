import React from 'react';
import styles from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {
  return (
    <div className={styles.profileWrapper}>
      <ProfileInfo
        {...props}
        status={props.status}
        updateStatus={props.updateStatus}
        isOwner={props.isOwner}
        savePhoto={props.savePhoto}
        saveProfile={props.saveProfile}
      />
      <MyPostsContainer {...props} />
    </div>
  );
}

export default Profile;
