import React from 'react';
import { useHistory } from 'react-router-dom';
import Nav from '../components/Nav';
import GridPortfolio from '../components/GridPortfolio';
import Presentation from '../components/Presentation';
import Header from '../components/Header';

export default function Home() {
  const history = useHistory();
  return(
    <body className="flex flex-col items-center">
      <Nav color="white" />
      <Header />
      <section className="relative">
        <p className="font-aboreto text-4xl sm:text-5xl pt-10 md:text-6xl md:pt-0 text-black w-full text-center z-50">BRUNO CABRAL</p>
        <p className="w-2/3 sm:w-1/3 text-center mx-auto mt-4">
        Nascido em Campina Grande, segunda maior cidade da Paraíba, desde cedo carrego a dedicação em me qualificar no mercado de trabalho. Do ramo da eletrônica até a informática, tive incontáveis aprendizados que levarei para toda a vida.
        </p>
      </section>
      <button
        onClick={ () => history.push('/experience')}
        className="pb-2 mt-12 border-b-3 font-normal bg-white border-h-color hover:border-transp font-normal hover:font-bold transition duration-1000 mb-20">
        Mais sobre mim
      </button>
      <Presentation />
      <GridPortfolio />
    </body>
  );
}
