import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

type HeaderProps = {
  isAuth: boolean;
  login: string | null;

  logout: () => void;
};

const Header: React.FC<HeaderProps> = ({ isAuth, login, logout }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <img src="./logo.png" className="App-logo" alt="logo" />
        <span>SAMURAI NETWORK</span>
      </div>
      <div className={styles.loginWrapper}>
        {isAuth ? (
          <div>
            <span className={styles.login}>{login}</span> <button onClick={logout}>Выйти</button>{' '}
          </div>
        ) : (
          <div>
            <NavLink to={'/login'} className={styles.signIn}>
              Войти
            </NavLink>
            <a
              className={styles.signUp}
              href="https://social-network.samuraijs.com/signUp"
              target="_blank"
              rel="noreferrer">
              зарегестрироваться
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
