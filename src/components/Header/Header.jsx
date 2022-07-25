import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png"
        className="App-logo"
        alt="logo"
      />
    </header>
  );
}

export default Header;