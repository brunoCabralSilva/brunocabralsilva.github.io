import React from 'react';
import './app.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Professional from './pages/Professional';
import Academics from './pages/Academics';
import NotFound from './pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/meu-portfolio" component={Home} />
        <Route path="/sobre-mim" component={About} />
        <Route path="/contato" component={Contact} />
        <Route path="/professional" component={Professional} />
        <Route path="/academico" component={Academics} />
        <Route path="*" component={NotFound} />
      </Switch>
    );
  }
}

export default App;
