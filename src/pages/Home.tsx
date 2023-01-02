import React from 'react';
import { motion } from 'framer-motion';
import Nav from '../components/Nav';
import GridPortfolio from '../components/GridPortfolio';
import Presentation from '../components/Presentation';
import Header from '../components/Header';
import Technologies from '../components/Technologies';

export default class Home extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { history }: any = this.props;
    return(
      <body className="flex flex-col items-center">
        <Nav color="white z-50" />
        <Header img="me-squad.png" />
        <section className="relative">
          <p className="font-aboreto text-4xl sm:text-5xl pt-10 md:text-6xl md:pt-0 text-black w-full text-center z-50">BRUNO CABRAL</p>
          <p className="w-2/3 sm:w-1/3 text-center mx-auto mt-4">
          Nascido em Campina Grande, segunda maior cidade da Paraíba, desde cedo carrego a dedicação em me qualificar no mercado de trabalho. Apaixonado por RPG e Nordeste, amante da tecnologia e estudante de Desenvolvimento Web na Trybe!
          </p>
        </section>
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={ () => history.push('/sobre') }
          className="pb-2 mt-12 border-b-3 font-normal bg-white border-h-color hover:border-transp hover:font-bold transition duration-1000 mb-20">
          Mais sobre mim
        </motion.button>
        <Presentation />
        <GridPortfolio />
        <Technologies />
      </body>
    );
  }
}
