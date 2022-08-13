import React from 'react';
import styles from './Users.module.css';
import userAvatar from './user.png';
import { Link } from 'react-router-dom';
import Paginator from '../Paginator/Paginator';

function Users(props) {
  return (
    <div className={styles.users}>
      <h2 className={styles.heading}>Users</h2>
      <Paginator {...props} />
      {props.users.map((user) => (
        <div key={user.id} className={styles.wrapper}>
          <div className={styles.avatarWrapper}>
            <Link to={'/profile/' + user.id}>
              <img
                src={user.photos.small !== null ? user.photos.small : userAvatar}
                alt="Avatar"
                width={50}
                className={styles.avatar}
              />
            </Link>
            {user.followed ? (
              <button
                disabled={props.isFollowing.some((id) => id === user.id)}
                onClick={() => {
                  props.unfollow(user.id);
                }}
                className={styles.buttonUnfollow}>
                Unfollow
              </button>
            ) : (
              <button
                disabled={props.isFollowing.some((id) => id === user.id)}
                onClick={() => {
                  props.follow(user.id);
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
              <p>{'Город пользователя'},</p>
              <p>{'Страна'}</p>
            </div>
          </div>
        </div>
      ))}
      <Paginator {...props} />
    </div>
  );
}

export default Users;
