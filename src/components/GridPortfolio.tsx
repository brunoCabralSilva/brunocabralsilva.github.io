import React from 'react';
import { motion } from 'framer-motion';
import ItemPortFolio from './ItemPortfolio';
import portfolio from '../data/portfolio.json';

interface GrifPortProps {
  history: any,
}

export default class GridPortfolio extends React.Component<GrifPortProps, {}> {
  render() {
    return(
      <section className="w-full flex flex-col items-center justify-center relative pt-14">
        <p className="mt-8 sm:mt-14 mb-2 w-10/12 md:text-left text-c pb-3 font-aboreto md:mx-10 text-4xl sm:text-5xl md:text-6xl z-30">Portfolio</p>
        <div className="mb-3 z-30 grid grid-rows-3 sm:grid-rows-6 gap-3 grid-cols-2 sm:grid-cols-3 w-10/12">
        {
          portfolio.filter(item => item.favorito === true).map((project, index) => (
            <ItemPortFolio
              key={ index }
              index={ index }
              link={ project.link }
              text={ project.text }
            />
          ))
        }
        </div>
        <motion.button
          whileHover={{ scale:1.1 }}
          // onClick={ () => history.push('/projects')}
          className="p-3 border-2 font-normal bg-white border-h-color hover:border-gray-500 hover:font-bold transition duration-1000 z-40">
          Portfolio completo
        </motion.button>
      </section>
    );
  }
}