import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface NavProps {
  img: string,
  color: string,
  history: any,
}

interface NavState {
  open: boolean,
  bgColor: string,
}

export default class Nav extends React.Component<NavProps, NavState> {
  state = {
    open: false,
    bgColor: 'white',
  };

  componentDidMount(): void {
    window.scrollTo(0, 0);
    const { color } = this.props;
    this.setState({ bgColor: color });
  };
  
  openMenu = (): void => {
    const { open } = this.state;
    this.setState({ open: !open });
    if (open) {
      this.setState({ bgColor: 'white' });
    } else {
      this.setState({ bgColor: 'black' });
    }
  }

  first = (): string => {
    const { open } = this.state;
    if(open) {
      return 'translate-y-2 rotate-_45';
    } return 'translate-x-0 rotate-0';
  };

  second = (): string => {
    const { open } = this.state;
    if(open) {
      return 'translate-x-0 rotate-45';
    } return 'translate-x-0 rotate-0';
  };

  third = (): string => {
    const { open } = this.state;
    if(open) {
      return 'opacity-0 transition duration-500 z-0';
    } return 'opacity-1 transition duration-500 z-30';
  };

  floatMenu = (): string => {
    const { open } = this.state;
    if(open) {
      return '450px:w-4/12 sm:w-3/12 w-6/12 opacity-1 transition duration-500 z-40 trans-width';
    } return 'w-0 transition duration-500 trans-width z-0';
  };

  hiddenVisible = (): string => {
    const { open } = this.state;
    if(open) {
      return 'flex transition-display';
    } return 'hidden transition-display';
  }

  render() {
    const { history } = this.props;
    const { bgColor } = this.state;
    return (
      <nav className="fixed bg-heaven bg-center bg-cover w-full h-header px-3 font-aboreto text-xl z-50 flex flex-row justify-between items-center">
        <motion.img
          whileHover={{scale: 1.3}}
          src={require('../images/01.png')}
          alt="logo com nome de Bruno"
          className={`p-3 object-cover w-16 }`}
          onClick={ () => history.push('/') }
        />
        <div className="w-12 h-12 p-2 z-50" onClick={this.openMenu}>
          <div className={`w-full h-1 bg-${bgColor} mt-1 transition duration-500 ${this.first()}`} />
          <div className={`w-full h-1 bg-${bgColor} mt-1 transition duration-500 ${this.second()}`} />
          <div className={`w-full h-1 bg-${bgColor} mt-1 transition duration-300 ${this.third()}`} />
        </div>
        <nav className={`h-screen glassmorphism bg-glass flex flex-col items-center fixed top-0 right-0 pb-3 ${this.floatMenu()}`}>
          <img src={require('../images/02.png')} alt="logo com nome de Bruno" className={`pl-2 pt-28 w-3/12 mb-5 ${this.hiddenVisible()}`} />
          <hr className={`mt-3 mb-4 mx-2 text-black w-2/3 ${this.hiddenVisible()}`} />
          <div className={`flex-col text-lg text-center my-10 z-50 ${this.hiddenVisible()}`}>
            <Link
              to="/"
              className="text-black no-underline hover:font-bold"
              >
                Início
              </Link>
            <Link
              to="/sobre"
              className="text-black pt-4 no-underline hover:font-bold"
            >
              Sobre
            </Link>
            <Link
              to="/projects"
              className="text-black pt-4 no-underline hover:font-bold"
            >
              Projetos
            </Link>
            <Link
              to="/contato"
              className="text-black py-4 no-underline hover:font-bold"
            >
              Contato
            </Link>
          </div> 
          <hr className={`mb-4 mx-2 text-black w-2/3 ${this.hiddenVisible()}`} />
          <div className={`flex mx-2 flex-row z-30 ${this.hiddenVisible()}`}>
            <motion.a
              whileHover={{scale: 1.7}}
              href="https://contate.me/brunoCabralSilva"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-whatsapp p-2 text-black transition duration-1000"></i>
            </motion.a>
            <motion.a
              whileHover={{scale: 1.7}}
              href="https://www.linkedin.com/in/bruno-cabral-336076228/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin p-2 text-black transition duration-1000"></i>
            </motion.a>
            <motion.a
              whileHover={{scale: 1.7}}
              href="https://github.com/brunoCabralSilva"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github p-2 text-black transition duration-1000"></i>
            </motion.a>
          </div>
        </nav>
      </nav>
    );
  }
}
