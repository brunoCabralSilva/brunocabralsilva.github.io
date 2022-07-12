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
      return '450px:w-4/12 sm:w-3/12 w-6/12 opacity-1 transition duration-500 z-30';
    } return 'w-0 opacity-0 transition duration-500 z-0';
  }

  render() {
    return (
      <nav className="w-full h-header sm:my-10 px-4">
        <div className="fixed w-12 1015px:hidden h-12 top-1 right-1 p-2 z-40" onClick={this.openMenu}>
          <div className={`w-full h-1 bg-black mt-1 transition duration-500 ${this.first()}`} />
          <div className={`w-full h-1 bg-black mt-1 transition duration-500 ${this.second()}`} />
          <div className={`w-full h-1 bg-black mt-1 transition duration-300 ${this.third()}`} />
        </div>
        <nav className={`1015px:hidden h-screen glassmorphism bg-glass fixed top-0 right-0 z-30 pb-3 ${this.floatMenu()}`}>
          <img src={require('../images/bruno.png')} alt="logo com nome de Bruno" className="pl-2 pt-3 w-6/12" />
          <hr className="mt-3 mb-4 mx-2 text-black w-2/3" />
          <div className="flex flex-col text-lg">
            <Link to="/meu-portfolio" className="text-black pl-3 no-underline">Início</Link>
            <Link to="/sobre-mim" className="text-black pl-3 pt-4 no-underline">Sobre</Link>
            <Link to="/academico" className="text-black pl-3 pt-4 no-underline">Acadêmico</Link>
            <Link to="/professional" className="text-black pl-3 pt-4 no-underline">Profissional</Link>
            <Link to="/contato" className="text-black pl-3 py-4 no-underline">Contato</Link>
          </div> 
          <hr className="mb-4 mx-2 text-black w-2/3" />
          <div className="flex mx-2 flex-row">
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
        <div className="1015px:flex 1015px:flex-row 1015px:justify-between w-full items-start hidden">
          <div className="flex justify-start">
            <img src={require('../images/bruno.png')} alt="logo com nome de Bruno" className="w-4/12" />
          </div>

          <motion.ul
            className="w-20% flex flex-row justify-center mt-1"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Navegation href="/meu-portfolio" content="Início" />
            <Navegation href="/sobre-mim" content="Sobre" />
            <Navegation href="/academico" content="Acadêmico" />
            <Navegation href="/professional" content="Profissional" />
            <Navegation href="/contato" content="Contato" />
          </motion.ul>

          <div className="flex flex-row w-20% justify-end">
            <a href="https://contate.me/brunoCabralSilva" target="_blank" rel="noreferrer">
              <i className="fa-brands px-3 pt-0 fa-whatsapp text-lg text-black"></i>
            </a>
            <a href="https://www.linkedin.com/in/bruno-cabral-336076228/" target="_blank" rel="noreferrer">
              <i className="fa-brands px-3 pt-0  fa-linkedin text-lg text-black"></i>
            </a>
            <a href="https://github.com/brunoCabralSilva" target="_blank" rel="noreferrer">
              <i className="fa-brands pl-3 pt-0 pr-0 text-lg fa-github text-black"></i>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
