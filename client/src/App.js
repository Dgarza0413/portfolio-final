import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import projects from './pages/projects';
import detail from './pages/detail';
import landing from './pages/landing';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={landing} />
        <Route exact path="/projects" component={projects} />
        <Route exact path="/project/:id" component={detail} />
      </Switch>
    </Router>
  )
}

export default App;
