import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.sass';

import AppHeader from './components/Header';
import AppFooter from './components/Footer';

const PageHome = lazy(() => import('./pages/Home'));
const PageTest = lazy(() => import('./pages/Test'));

function App() {
  return (
    <div className="root">
      <div className="page">
        <AppHeader />
        <Suspense fallback={<div>loading</div>}>
          <Switch>
            <Route path="/" exact><PageHome /></Route>
            <Route path="/hidden-test"><PageTest /></Route>
          </Switch>
        </Suspense>
      </div>
      <AppFooter />
    </div>
  );
}

export default App;