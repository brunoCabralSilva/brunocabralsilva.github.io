import React from 'react';
import '../css/nav.css';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return (
      <header>
        <ul className="ul-nav">
          <li className="li-nav">
            <Link to="/meu-portfolio" className="a-nav">Início</Link>
          </li>
          <span>|</span>
          <li className="li-nav">
            <Link to="/sobre-mim" className="a-nav">Sobre</Link>
          </li>
          <span>|</span>
          <li className="li-nav">
            <Link to="/contato" className="a-nav">Contato</Link>
          </li>
        </ul>
      </header>
    );
  }
}

export default Nav;
