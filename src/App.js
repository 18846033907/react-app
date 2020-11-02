import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Example from 'containers/exampleContainer';
import Home from 'containers/homeContainer';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/example">
          <Example />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
