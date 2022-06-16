import React from 'react';
import './app.css';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Professional from './pages/Professional';
import Academics from './pages/Academics';
import NotFound from './pages/NotFound';
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <AnimateSharedLayout>
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route exact path="/meu-portfolio" component={Home} />
          <Route path="/sobre-mim" component={About} />
          <Route path="/contato" component={Contact} />
          <Route path="/professional" component={Professional} />
          <Route path="/academico" component={Academics} />
          <Route path="*" component={NotFound} />
        </Switch>
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

export default App;
