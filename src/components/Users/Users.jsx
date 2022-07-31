import axios from 'axios';
import React from 'react';
import styles from './Users.module.css';
import userAvatar from './user.png';

function Users(props) {
  if (props.users.length === 0) {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then((res) => {
      props.setUsers(res.data.items);
    });
  }

  return (
    <div className={styles.users}>
      <h2 className={styles.heading}>Users</h2>
      {props.users.map((user) => (
        <div key={user.id} className={styles.wrapper}>
          <div className={styles.avatarWrapper}>
            <img
              src={user.photos.small !== null ? user.photos.small : userAvatar}
              alt="Avatar"
              width={50}
              className={styles.avatar}
            />
            {user.followed ? (
              <button
                onClick={() => {
                  props.toggleFollow(user.id);
                }}
                className={styles.buttonUnfollow}>
                Unfollow
              </button>
            ) : (
              <button
                onClick={() => {
                  props.toggleFollow(user.id);
                }}
                className={styles.buttonFollow}>
                Follow
              </button>
            )}
          </div>
          <div className={styles.userInfoWrapper}>
            <div className={styles.userInfo}>
              <h3>{user.name}</h3>
              <p>{user.status}</p>
            </div>
            <div className={styles.location}>
              <p>{'user.location.city'},</p>
              <p>{'user.location.country'}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Users;
