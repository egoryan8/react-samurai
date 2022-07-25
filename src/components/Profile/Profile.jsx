import React from 'react';
import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

function Profile(props) {
  return (
    <>
      <div>
        <img className={styles.image}
          src="https://images.unsplash.com/photo-1658144492483-912cc8f969b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
          alt=""
        />
      </div>
      <div>ava + description</div>
      <MyPosts postsData={props.postsData}/>
    </>
  );
}

export default Profile;
