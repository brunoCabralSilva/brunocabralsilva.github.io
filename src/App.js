import React from 'react';
import './app.css';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <AnimateSharedLayout>
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route exact path="/meu-portfolio" component={Home} />
          <Route path="/contato" component={Contact} />
          <Route path="/sobre" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

export default App;
