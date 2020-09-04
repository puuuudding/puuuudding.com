import React, { lazy, Suspense } from 'react';
import './App.sass';
import { Route, Switch } from 'react-router-dom';

import AppHeader from './components/Header';

const PageHome = lazy(() => import('./pages/Home'));

function App() {
  return (
    <div className="app">
      <AppHeader />
      <Suspense fallback={<div>loading</div>}>
        <Switch>
          <Route path="/" exact><PageHome /></Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
