import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.sass';

function AppHeader(): React.ReactElement {
  return (
    <header className={styles.appHeader}>
      <h1 className={styles.title}>Puuuudding</h1>
      <nav className={styles.navContainer}>
        <Link to="/">Home</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/photos">Photos</Link>
      </nav>
    </header>
  );
}

export default AppHeader;
