import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {logout} from "../../redux/auth-reducer";

const Header: React.FC = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector((state: AppStateType) => state.authReducer.isAuth);
  const login = useSelector((state: AppStateType) => state.authReducer.login);
  const onLogout = () => {
    // @ts-ignore
    dispatch(logout())
  }
  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <img src="./logo.png" className="App-logo" alt="logo" />
        <span>SAMURAI NETWORK</span>
      </div>
      <div className={styles.loginWrapper}>
        {isAuth ? (
          <div>
            <span className={styles.login}>{login}</span> <button onClick={onLogout}>Выйти</button>{' '}
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
