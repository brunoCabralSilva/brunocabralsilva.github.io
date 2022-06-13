import React from 'react';
import '../css/nav.css';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return (
      <header>
        {/* <img
          src={require("../images/imagem-bruno-cabral-semfundo.jpeg")}
          alt="imagem de Bruno Cabral"
          className="rounded-circle img-myself"
        /> */}
        <ul className="ul-nav">
          <li className="li-nav">
            <a className="a-nav" href="">Início</a>
          </li>
          <span>|</span>
          <li className="li-nav">
            <a className="a-nav" href="">Sobre</a>
          </li>
          <span>|</span>
          <li className="li-nav">
            <a className="a-nav" href="">Contato</a>
          </li>
        </ul>
      </header>
    );
  }
}

export default Nav;
