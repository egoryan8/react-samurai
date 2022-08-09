import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

function Header(props) {
  return (
    <header className={styles.header}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png"
        className="App-logo"
        alt="logo"
      />
      <div className={styles.loginWrapper}>
        {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
}

export default Header;
