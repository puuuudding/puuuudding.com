import React, { lazy, Suspense } from 'react';
import './App.less';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppHeader from './components/Header';

const PageHome = lazy(() => import('./pages/Home'));

function App() {
  return (
    <div className="app">
      <Suspense fallback={<div>loading</div>}>
        <Router>
          <AppHeader />
          <Switch>
            <Route path="/" exact component={PageHome} />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
