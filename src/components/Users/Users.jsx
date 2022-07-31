import React from 'react';
import styles from './Users.module.css';

function Users(props) {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl: 'http://kudago.com/static/img/default-avatar.png',
        fullName: 'Egor',
        status: 'Hey, Im a junior frontend developer',
        location: { city: 'Novosibirsk', country: 'Russia' },
        followed: false,
      },
      {
        id: 2,
        photoUrl: 'http://kudago.com/static/img/default-avatar.png',
        fullName: 'Denis',
        status: 'Hi, Im a senior frontend developer',
        location: { city: 'Novosibirsk', country: 'Russia' },
        followed: true,
      },
      {
        id: 3,
        photoUrl: 'http://kudago.com/static/img/default-avatar.png',
        fullName: 'Lebron',
        status: 'Hey, Im a professional basketball player',
        location: { city: 'Los Angeles', country: 'USA' },
        followed: true,
      },
    ]);
  }

  return (
    <div className={styles.users}>
      <h2 className={styles.heading}>Users</h2>
      {props.users.map((user) => (
        <div key={user.id} className={styles.wrapper}>
          <div className={styles.avatarWrapper}>
            <img src={user.photoUrl} alt="Avatar" width={50} className={styles.avatar} />
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
              <h3>{user.fullName}</h3>
              <p>{user.status}</p>
            </div>
            <div className={styles.location}>
              <p>{user.location.city},</p>
              <p>{user.location.country}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Users;
