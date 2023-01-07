import React from 'react';
import './app.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Contact from './pages/Contact.tsx';
import About from './pages/About.tsx';
import Projects from './pages/Projects.tsx';
import NotFound from './pages/NotFound.tsx';
import Articles from './pages/Articles';
import Footer from './components/Footer.tsx';
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion';

function App() {
  return (
    <AnimateSharedLayout>
      <AnimatePresence>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contato" component={Contact} />
          <Route exact path="/sobre" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/articles" component={Articles} />
          <Route exact path="*" component={NotFound} />
        </Switch>
        <Footer />
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

export default App;
