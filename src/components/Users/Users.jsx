import axios from 'axios';
import React from 'react';
import styles from './Users.module.css';
import userAvatar from './user.png';
import { setCurrentPageAC } from '../../redux/users-reducer';

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
      )
      .then((res) => {
        this.props.setUsers(res.data.items);
        // this.props.setCountUsers(res.data.totalCount);
      });
  }

  setCurrentPage = (page) => {
    this.props.setCurrentPage(page);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`,
      )
      .then((res) => {
        this.props.setUsers(res.data.items);
      });
  };

  render() {
    let pagesCount = Math.ceil(this.props.totalUsers / this.props.pageSize);
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
                className={this.props.currentPage === page && styles.selectedPage}
                onClick={() => this.setCurrentPage(page)}>
                {page}
              </span>
            );
          })}
        </div>
        {this.props.users.map((user) => (
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
                    this.props.toggleFollow(user.id);
                  }}
                  className={styles.buttonUnfollow}>
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    this.props.toggleFollow(user.id);
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
                className={this.props.currentPage === page && styles.selectedPage}
                onClick={() => this.setCurrentPage(page)}>
                {page}
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Users;
