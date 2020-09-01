import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.less';

function AppHeader() {
  return (
    <header className={styles.appHeader}>
      <h1 className={styles.title}>Puuuudding</h1>
      <nav className={styles.navContainer}>
        <Link to="/">Home</Link>
      </nav>
    </header>
  );
}

export default AppHeader;
