import React from 'react';
import { useHistory } from 'react-router-dom';
import ItemPortFolio from '../components/ItemPortfolio';
import portfolio from '../portfolio';

export default function GridPortfolio() {
  const history = useHistory();
  return(
    <section className="w-full flex flex-col items-center justify-center relative pt-14">
      <p className="mt-8 sm:mt-14 mb-2 w-10/12 md:text-left text-c pb-3 pb-0 font-aboreto md:mx-10 text-4xl sm:text-5xl md:text-6xl z-30">Portfolio</p>
      <div className="mb-3 z-30 grid grid-rows-3 sm:grid-rows-6 gap-3 grid-cols-2 sm:grid-cols-3 w-10/12">
      {
        portfolio.map((project, index) => (
          <ItemPortFolio
            index={ index }
            link={ project.link }
            grid={ project.grid }
            text={ project.text }
          />
        ))
      }
      </div>
      <button
        onClick={ () => history.push('/projects')}
        className="transition-weight p-3 border-2 font-normal bg-white border-h-color hover:border-gray-500 hover:font-bold transition duration-1000 z-40">
        Portfolio completo
      </button>
    </section>
  );
}