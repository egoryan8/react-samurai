import React from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <a href="#a">Profile</a>
        </li>
        <li>
          <a href="#a">Messages</a>
        </li>
        <li>
          <a href="#a">News</a>
        </li>
        <li>
          <a href="#a">Music</a>
        </li>
        <li>
          <a href="#a">Settings</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
