import React from 'react';
import styles from './index.module.sass';
import { ImgUrls } from '../../utils/resources';

function PageHome() {
  return (
    <div className={styles.pageHome}>
      <img className={styles.homeCoverImg} src={ImgUrls.puuuudding} />
    </div>
  );
}

export default PageHome;
