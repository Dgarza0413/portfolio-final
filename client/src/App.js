import React from 'react';
import projects from './data/projects.json';
import './App.css';

const App = () => {
  console.log(projects)
  return (
    <div className="App">
      {projects.map((e, i) => {
        return (
          <React.Fragment key={i}>
            <div>{e.title}</div>
            <div>{e.description}</div>
          </React.Fragment>
        )
      })}
    </div>
  );
}

export default App;
