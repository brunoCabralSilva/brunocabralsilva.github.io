import React from 'react';
import '../css/nav.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navegation from '../components/Navegation';

class Nav extends React.Component {
  render() {
    return (
      <motion.ul
        className="ul-nav"
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Navegation href="/meu-portfolio" content="Início" />
        <span>|</span>
        <Navegation href="/sobre-mim" content="Sobre" />
        <span>|</span>
        <Navegation href="/academico" content="Vida Acadêmica" />
        <span>|</span>
        <Navegation href="/professional" content="Profissional" />
        <span>|</span>
        <Navegation href="/contato" content="Contato" />
      </motion.ul>
    );
  }
}

export default Nav;
