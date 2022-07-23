import React from 'react';
import { motion } from 'framer-motion';
import Navegation from '../components/Navegation';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  state = {
    open: false,
  };

  openMenu = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  }

  first = () => {
    const { open } = this.state;
    if(open) {
      return 'translate-y-2 rotate-_45';
    } return 'translate-x-0 rotate-0';
  }

  second = () => {
    const { open } = this.state;
    if(open) {
      return 'translate-x-0 rotate-45';
    } return 'translate-x-0 rotate-0';
  }

  third = () => {
    const { open } = this.state;
    if(open) {
      return 'opacity-0 transition duration-500 z-0';
    } return 'opacity-1 transition duration-500 z-30';
  }

  floatMenu = () => {
    const { open } = this.state;
    if(open) {
      return '450px:w-4/12 sm:w-3/12 w-6/12 opacity-1 transition duration-500 z-40';
    } return 'w-0 opacity-0 transition duration-500 z-0';
  }

  render() {
    const { font } = this.props;
    return (
      <nav className="w-full h-header sm:mt-5 px-4 font-cormorant">
        <div className="fixed w-12 sm:hidden h-12 top-3 right-3 p-2 z-50" onClick={this.openMenu}>
          <div className={`w-full h-1 ${font} mt-1 transition duration-500 ${this.first()}`} />
          <div className={`w-full h-1 ${font} mt-1 transition duration-500 ${this.second()}`} />
          <div className={`w-full h-1 ${font} mt-1 transition duration-300 ${this.third()}`} />
        </div>
        <nav className={`sm:hidden h-screen glassmorphism bg-glass fixed top-0 right-0 pb-3 ${this.floatMenu()}`}>
          <img src={require('../images/01.png')} alt="logo com nome de Bruno" className="pl-2 pt-3 w-6/12" />
          <hr className="mt-3 mb-4 mx-2 text-black w-2/3" />
          <div className="flex flex-col text-lg z-30">
            <Link to="/meu-portfolio" className="text-black pl-3 no-underline">Início</Link>
            <Link to="/sobre-mim" className="text-black pl-3 pt-4 no-underline">Sobre</Link>
            <Link to="/academico" className="text-black pl-3 pt-4 no-underline">Acadêmico</Link>
            <Link to="/professional" className="text-black pl-3 pt-4 no-underline">Profissional</Link>
            <Link to="/contato" className="text-black pl-3 py-4 no-underline">Contato</Link>
          </div> 
          <hr className="mb-4 mx-2 text-black w-2/3" />
          <div className="flex mx-2 flex-row z-30">
            <a href="https://contate.me/brunoCabralSilva" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-whatsapp p-2 text-black transition duration-1000"></i>
            </a>
            <a href="https://www.linkedin.com/in/bruno-cabral-336076228/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-linkedin p-2 text-black transition duration-1000"></i>
            </a>
            <a href="https://github.com/brunoCabralSilva" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github p-2 text-black transition duration-1000"></i>
            </a>
          </div>
        </nav>

        <motion.ul
          className="flex-row justify-center hidden sm:flex"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navegation href="/meu-portfolio" content="INÍCIO" />
          {/* <Navegation href="/sobre-mim" content="sobre" /> */}
          <Navegation href="/academico" content="ACADÊMICO" />
          <Navegation href="/professional" content="PROFISSIONAL" />
          <Navegation href="/contato" content="CONTATO" />
        </motion.ul>
      </nav>
    );
  }
}

export default Nav;
