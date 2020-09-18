import React, { lazy } from 'react';
import {
  useRouteMatch,
  Route, Redirect, Switch,
} from 'react-router-dom';

const PageLogin = lazy(() => import('./Login'));
const PagePostsList = lazy(() => import('./PostsList'));

function PageAdmin() {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/login`}><PageLogin /></Route>
      <Route path={`${path}/posts`}><PagePostsList /></Route>
      <Redirect to={`${path}/login`} />
    </Switch>
  );
}

export default PageAdmin;
