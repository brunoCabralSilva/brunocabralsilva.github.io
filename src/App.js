import React from 'react';
import './app.css';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import NotFound from './pages/NotFound';
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <AnimateSharedLayout>
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route exact path="/meu-portfolio" component={Home} />
          <Route path="/contato" component={Contact} />
          <Route path="/academico" component={Skills} />
          <Route path="*" component={NotFound} />
        </Switch>
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

export default App;
