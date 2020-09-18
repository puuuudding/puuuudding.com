import React from 'react';
import { ImgUrls } from 'utils/resources';
import styles from './index.module.sass';

function PageHome() {
  return (
    <div className={styles.pageHome}>
      <img className={styles.homeCoverImg} src={ImgUrls.puuuudding} />
    </div>
  );
}

export default PageHome;
