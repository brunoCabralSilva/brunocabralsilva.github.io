import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div className="flex flex-col items-center bg-fixed bg-me2 bg-cover relative">
          <div className="bg-t-transp h-full w-full absolute" />
        <header className="h-screen flex flex-col relative justify-between w-full text-white z-20">
          <div className="z-20">
            <Nav font="bg-white" />
          </div>
          <div className="z-20 h-85% flex flex-col items-center justify-center h-screen">
            <img src={require('../images/01.png')} alt="logo com nome de Bruno" className="object-contain w-85% md:w-1/3" />
          </div>
          <Link to="/sobre-mim" className="w-full flex justify-center sm:pb-10 pb-20 ">
            <img
              src={require('../images/arrow-down.png')}
              alt="Seta para baixo"
              className="animate-pulse hover:animate-pulse-fast w-20 sm:w-16 md:w-20"
            />
          </Link>
        </header>
        <footer className="text-white z-20 w-full bg-t-transp">
        <Footer />
        </footer>
      </div >
    );
  }
}

export default Home;
