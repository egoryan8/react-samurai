import React from 'react';
import styles from './Users.module.css';
import userAvatar from './user.png';
import { Link } from 'react-router-dom';
import { UserType } from '../../@types/types';

type UserPropsType = {
  user: UserType;
  isFollowing: Array<number>;
  unfollow: (userId: number) => void;
  follow: (userId: number) => void;
};

const User: React.FC<UserPropsType> = ({ user, isFollowing, unfollow, follow }) => {
  return (
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
            disabled={isFollowing.some((id: number) => id === user.id)}
            onClick={() => {
              unfollow(user.id);
            }}
            className={styles.buttonUnfollow}>
            Unfollow
          </button>
        ) : (
          <button
            disabled={isFollowing.some((id: number) => id === user.id)}
            onClick={() => {
              follow(user.id);
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
  );
};

export default User;
