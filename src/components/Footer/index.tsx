import React from 'react';
import { ReactComponent as IconCopyright } from 'remixicon/icons/Business/copyright-line.svg';
import { ReactComponent as IconHearts } from 'remixicon/icons/Health/hearts-fill.svg';
import { ReactComponent as IconGithub } from 'remixicon/icons/Logos/github-fill.svg';
import styles from './index.module.sass';

function AppFooter(): React.ReactElement {
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
