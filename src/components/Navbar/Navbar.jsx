import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <NavLink to="/profile" className={ navData => navData.isActive ? styles.link_active : styles.link}>Profile</NavLink>
        </li>
        <li>
          <NavLink to="/messages" className={ navData => navData.isActive ? styles.link_active : styles.link}>Messages</NavLink>
        </li>
        <li>
          <NavLink to="/news" className={navData => navData.isActive ? styles.link_active : styles.link}>News</NavLink>
        </li>
        <li>
          <NavLink to="/music" className={navData => navData.isActive ? styles.link_active : styles.link}>Music</NavLink>
        </li>
        <li>
          <NavLink to="/settings" className={navData => navData.isActive ? styles.link_active : styles.link}>Settings</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
