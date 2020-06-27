import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import landing from './pages/landing';
import detail from './pages/detail';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={landing} />
        <Route exact path="/project/:id" component={detail} />
      </Switch>
    </Router>
  )
}

export default App;
