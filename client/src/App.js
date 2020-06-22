import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Landing from './pages/landing';
import Detail from './pages/detail';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/project/:id" component={Detail} />
      </Switch>
    </Router>
  );
}

export default App;
