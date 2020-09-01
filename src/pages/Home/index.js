import React from 'react';
import styles from './index.module.less';
import { imgUrls } from '../../utils/resources';

function PageHome() {
  return (
    <div className={styles.pageHome}>
      <img className={styles.homeCoverImg} src={imgUrls.puuuudding} />
    </div>
  );
}

export default PageHome;
