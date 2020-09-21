import React, { useState, useEffect, lazy } from 'react';
import {
  Route, Redirect, Switch,
  useHistory,
} from 'react-router-dom';
import { RequestURL, RouteURL } from 'utils/resources';
import request from 'utils/request';

const PageLogin = lazy(() => import('./Login'));
const PagePostsList = lazy(() => import('./PostsList'));
const PagePostEdit = lazy(() => import('./PostEdit'));

function PageAdmin() {
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const getSelf = async () => {
      try {
        await request.get(RequestURL.self);
        setIsLoggedIn(true);
      } catch {
        history.replace(RouteURL.adminLogin);
      } finally {
        setChecking(false);
      }
    };
    getSelf();
  }, [history]);

  if (checking) return null;
  return (
    <Switch>
      {isLoggedIn ? (
        <Redirect from={RouteURL.admin} to={RouteURL.adminPosts} exact />
      ) : (
        <Redirect from={RouteURL.admin} to={RouteURL.adminLogin} exact />
      )}
      <Route path={RouteURL.adminLogin}><PageLogin /></Route>
      <Route path={RouteURL.adminPosts} exact><PagePostsList /></Route>
      <Route path={`${RouteURL.adminPosts}/:id`}><PagePostEdit /></Route>
    </Switch>
  );
}

export default PageAdmin;
