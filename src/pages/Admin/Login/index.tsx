import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import request from 'utils/request';
import { RequestURL, RouteURL } from 'utils/resources';
import styles from './index.module.sass';

function PageLogin(): React.ReactElement {
  const history = useHistory();
  const refPassword = useRef<HTMLInputElement>(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async () => {
    try {
      await request.post(RequestURL.login, { username, password });
      history.push(RouteURL.adminPosts);
    } catch {
      setErrorMsg('Login failed');
    }
  };

  const handleChangeUsername: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setUsername(e.currentTarget.value);
  };
  const handleChangePassword: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.currentTarget.value);
  };
  const handleUsernameKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      refPassword.current?.focus();
    }
  };
  const handlePasswordKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className={styles.pageLogin}>
      <h2>Welcome</h2>
      <form>
        <div className={styles.formItem}>
          <label>
            Account:&nbsp;
            <input
              value={username}
              onChange={handleChangeUsername}
              onKeyDown={handleUsernameKeyDown}
            />
          </label>
        </div>
        <div className={styles.formItem}>
          <label>
            Password:&nbsp;
            <input
              ref={refPassword}
              type="password"
              value={password}
              onChange={handleChangePassword}
              onKeyDown={handlePasswordKeyDown}
            />
          </label>
        </div>
        <input type="button" value="Login" onClick={handleSubmit} />
        <div className={styles.errorMsg}>{errorMsg}</div>
      </form>
    </div>
  );
}

export default PageLogin;
