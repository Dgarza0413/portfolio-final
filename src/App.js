import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import projects from './pages/projects';
import detail from './pages/detail';
import landing from './pages/landing';
import skills from './pages/skills';
import occupations from './pages/occupations';
import Nav from './components/Nav';

import './index.css';


const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={landing} />
          <div style={{ margin: '5rem 10%' }}>
            <Route exact path="/skills" component={skills} />
            {/* <Route exact path="/occupations" component={occupations} /> */}
            <Route exact path="/projects" component={projects} />
            <Route exact path="/project/:id" component={detail} />
          </div>
        </Switch>
      </Router>
    </>
  )
}

export default App;
