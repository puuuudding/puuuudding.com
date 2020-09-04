import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles/App.sass';

import AppHeader from './components/Header';
import AppFooter from './components/Footer';

const PageHome = lazy(() => import('./pages/Home'));

function App() {
  return (
    <div>
      <AppHeader />
      <div className="app">
        <Suspense fallback={<div>loading</div>}>
          <Switch>
            <Route path="/" exact><PageHome /></Route>
          </Switch>
        </Suspense>
      </div>
      <AppFooter />
    </div>
  );
}

export default App;
