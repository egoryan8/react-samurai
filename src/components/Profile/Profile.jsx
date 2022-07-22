import React from 'react';
import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

function Profile() {
  return (
    <>
      <div>
        <img
          src="https://images.unsplash.com/photo-1658144529357-3e4183e8e762?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
          alt=""
        />
      </div>
      <div>ava + description</div>
      <MyPosts />
    </>
  );
}

export default Profile;
