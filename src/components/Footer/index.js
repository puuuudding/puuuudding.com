import React from 'react';
import IconCopyright from 'remixicon/icons/Business/copyright-line.svg';
import IconHearts from 'remixicon/icons/Health/hearts-fill.svg';
import IconGithub from 'remixicon/icons/Logos/github-fill.svg';
import styles from './index.module.sass';

function AppFooter() {
  return (
    <footer className={styles.appFooter}>
      <span className={styles.rightsText}>
        puuuudding.com&nbsp;<IconCopyright className={styles.iconCopyright} />&nbsp;2020
      </span>
      <span className={styles.loveText}>
        Build with&nbsp;
        <IconHearts className={styles.iconHeart} />
        &nbsp;by Sean & Lillian
        <a href="https://github.com/puuuudding/puuuudding.com" target="_blank" rel="noreferrer">
          <IconGithub className={styles.iconGithub} />
        </a>
      </span>
    </footer>
  );
}

export default AppFooter;
