import React, { lazy } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { RouteURL } from 'utils/resources';

const PageLogin = lazy(() => import('./Login'));
const PagePostsList = lazy(() => import('./PostsList'));
const PagePostEdit = lazy(() => import('./PostEdit'));

function PageAdmin() {
  return (
    <Switch>
      <Route path={RouteURL.adminLogin}><PageLogin /></Route>
      <Route path={RouteURL.adminPosts} exact><PagePostsList /></Route>
      <Route path={`${RouteURL.adminPosts}/:id`}><PagePostEdit /></Route>
      <Redirect to={RouteURL.adminLogin} />
    </Switch>
  );
}

export default PageAdmin;
