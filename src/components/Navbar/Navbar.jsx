import React from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <a href="/profile">Profile</a>
        </li>
        <li>
          <a href="/messages">Messages</a>
        </li>
        <li>
          <a href="/news">News</a>
        </li>
        <li>
          <a href="/music">Music</a>
        </li>
        <li>
          <a href="/settings">Settings</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
