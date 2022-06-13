import React from 'react';
import './app.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route />
        <Route />
      </Switch>
    );
  }
}

export default App;
