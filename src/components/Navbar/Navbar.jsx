import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <NavLink
            to="/profile"
            className={(navData) => (navData.isActive ? styles.link_active : styles.link)}>
            Профиль
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/messages"
            className={(navData) => (navData.isActive ? styles.link_active : styles.link)}>
            Сообщения
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/news"
            className={(navData) => (navData.isActive ? styles.link_active : styles.link)}>
            Новости
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/music"
            className={(navData) => (navData.isActive ? styles.link_active : styles.link)}>
            Музыка
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            className={(navData) => (navData.isActive ? styles.link_active : styles.link)}>
            Найти людей
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className={(navData) => (navData.isActive ? styles.link_active : styles.link)}>
            Настройки
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
