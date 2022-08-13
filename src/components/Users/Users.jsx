import React from 'react';
import styles from './Users.module.css';
import Paginator from '../Paginator/Paginator';
import User from './User';

function Users(props) {
  return (
    <div className={styles.users}>
      <h2 className={styles.heading}>Users</h2>
      <Paginator {...props} />
      {props.users.map((user) => (
        <User user={user} {...props} />
      ))}
      <Paginator {...props} />
    </div>
  );
}

export default Users;
