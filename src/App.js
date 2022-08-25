import React from 'react';
import './app.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion';

function App() {
  return (
    <AnimateSharedLayout>
      <AnimatePresence>
        <Switch>
          <Route exact path="/meu-portfolio" component={Home} />
          <Route exact path="/contato" component={Contact} />
          <Route exact path="/sobre" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="*" component={NotFound} />
        </Switch>
        <Footer />
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

export default App;
