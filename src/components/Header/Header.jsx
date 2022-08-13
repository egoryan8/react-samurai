import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

function Header(props) {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <img src="./logo.png" className="App-logo" alt="logo" />
        <span>SAMURAI NETWORK</span>
      </div>
      <div className={styles.loginWrapper}>
        {props.isAuth ? (
          <div>
            <span className={styles.login}>{props.login}</span>{' '}
            <button onClick={props.logout}>Выйти</button>{' '}
          </div>
        ) : (
          <div>
            <NavLink to={'/login'} className={styles.signIn}>
              Войти
            </NavLink>
            <a
              className={styles.signUp}
              href="https://social-network.samuraijs.com/signUp"
              target="_blank">
              зарегестрироваться
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
