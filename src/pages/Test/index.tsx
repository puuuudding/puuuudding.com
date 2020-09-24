import React from 'react';
import styles from './index.module.sass';

function PageTest(): React.ReactElement {
  return (
    <div className={styles.pageTest}>
      <pre>
        <code>
          {
`{
  name: 'sean' >=
}`
          }
        </code>
      </pre>
      <div>中文字符</div>
      <div>abcdefghijklmnopqrstuvwxyz</div>
    </div>
  );
}

export default PageTest;
