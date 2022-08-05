import React from 'react';
import styles from './Users.module.css';
import userAvatar from './user.png';
import { Link } from 'react-router-dom';

function Users(props) {
  let pagesCount = Math.ceil(props.totalUsers / props.pageSize);
  const pages = [];
  for (let i = 1; i < pagesCount + 1; i++) {
    pages.push(i);
  }

  return (
    <div className={styles.users}>
      <h2 className={styles.heading}>Users</h2>
      <div className={styles.pages}>
        {pages.map((page) => {
          return (
            <span
              className={props.currentPage === page && styles.selectedPage}
              onClick={() => props.setCurrentPage(page)}>
              {page}
            </span>
          );
        })}
      </div>
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
              <p>{'Город пользователя'},</p>
              <p>{'Страна'}</p>
            </div>
          </div>
        </div>
      ))}
      <div className={styles.pages}>
        {pages.map((page) => {
          return (
            <span
              className={props.currentPage === page && styles.selectedPage}
              onClick={() => props.setCurrentPage(page)}>
              {page}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Users;
