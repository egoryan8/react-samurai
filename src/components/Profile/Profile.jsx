import React from 'react';
import styles from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {
  return (
    <>
      <ProfileInfo {...props} status={props.status} updateStatus={props.updateStatus} />
      <MyPostsContainer />
    </>
  );
}

export default Profile;
