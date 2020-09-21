import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { RouteURL } from 'utils/resources';
import './App.sass';

import AppHeader from 'components/Header';
import AppFooter from 'components/Footer';

const PageHome = lazy(() => import('pages/Home'));
const PageAdmin = lazy(() => import('pages/Admin'));
const PageTest = lazy(() => import('pages/Test'));

function App() {
  return (
    <div className="root">
      <div className="page">
        <AppHeader />
        <Suspense fallback={<div>loading</div>}>
          <Switch>
            <Route path={RouteURL.root} exact><PageHome /></Route>
            <Route path={RouteURL.admin}><PageAdmin /></Route>
            <Route path={RouteURL.test}><PageTest /></Route>
          </Switch>
        </Suspense>
      </div>
      <AppFooter />
    </div>
  );
}

export default App;
