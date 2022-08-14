import React from 'react';
import styles from './Users.module.css';
import Paginator from '../Paginator/Paginator';
import User from './User';

function Users(props) {
  return (
    <div className={styles.users}>
      <h2 className={styles.heading}>Пользователи</h2>
      <Paginator totalItems={props.totalUsers} {...props} portionSize={15} />
      {props.users.map((user) => (
        <User user={user} {...props} />
      ))}
      <Paginator totalItems={props.totalUsers} {...props} portionSize={15} />
    </div>
  );
}

export default Users;
