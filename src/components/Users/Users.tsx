import React from 'react';
import styles from './Users.module.css';
import Paginator from '../Paginator/Paginator';
import User from './User';
import { UserType } from '../../@types/types';

type UserPropsType = {
  users: Array<UserType>;
  totalUsers: number;
  currentPage: number;
  pageSize: number;
  isFollowing: Array<number>;
  setCurrentPage: (page: number) => void;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
};

const Users: React.FC<UserPropsType> = ({
  users,
  totalUsers,
  currentPage,
  pageSize,
  setCurrentPage,
  isFollowing,
  follow,
  unfollow,
}) => {
  return (
    <div className={styles.users}>
      <h2 className={styles.heading}>Пользователи</h2>
      <Paginator
        totalItems={totalUsers}
        currentPage={currentPage}
        pageSize={pageSize}
        portionSize={15}
        setCurrentPage={setCurrentPage}
      />
      {users.map((user) => (
        <User user={user} isFollowing={isFollowing} follow={follow} unfollow={unfollow} />
      ))}
      <Paginator
        totalItems={totalUsers}
        currentPage={currentPage}
        pageSize={pageSize}
        portionSize={15}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Users;
