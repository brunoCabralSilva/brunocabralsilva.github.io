import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import SliderProjects from '../components/SliderProjects.jsx';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';

function Home(){
  const history = useHistory();
  return (
    <div className="flex flex-col bg-me2 bg-fixed bg-cover items-center">
      <header className="relative h-screen flex flex-col relative justify-between w-full text-white z-20">
        <div className="bg-t-transp h-full w-full absolute" />
          <div className="z-20">
            <Nav color="white z-50" />
          </div>
        <div className="z-20 h-85% flex flex-col items-center justify-center h-screen">
          <img src={require('../images/01.png')} alt="logo com nome de Bruno" className="object-contain w-3/12 sm:w-1/12 my-10" />
          <p className="font-aboreto text-4xl sm:text-6xl w-full text-center">BRUNO CABRAL</p>
          <p className="font-aboreto">Desenvolvedor Front End</p>
        </div>
      </header>
      <div className="w-full h-full flex flex-col relative z-20">
        <div className="flex flex-col md:flex-row bg-white">
          <div className="flex z-0 sm:w-1/2 w-full items-center">
            <div className="sm:w-8/12 sm:h-2/3 mx-auto pt-10 sm:pt-0">
            <img src={require('../images/me-squad.png')} className="sm-opacity-100 sm:my=0 sm:static object-cover rounded-full h-full mx-auto" alt="" />
            </div>
          </div>
          <div className="sm:w-aside w-full sm:w-1/2 h-full sm:pl-14 z-20 flex-col items-center">
              <div className="min-h-page">
              <div className="w-full flex flex-col items-center sm:items-start">
                <h1 className="w-full text-c sm:text-left sm:flex text-4xl sm:text-5xl mt-14 sm:mt-20 margin-b sm:mb-10 font-bold">Olá,<br /> Eu sou<br /> Bruno Cabral!</h1>
                <p className="pl-1 text-sm mt-4 w-10/12 text-c sm:text-justify leading-6 pt-6 sm:pt-0">Nascido em Campina Grande, segunda maior cidade da Paraíba, desde cedo estudo para me qualificar no mercado de trabalho.
                Do ramo da eletrônica até a informática, tive incontáveis aprendizados que levarei para toda a vida.
                </p>

                <p className="pl-1 text-sm mt-4 mb-12 w-10/12 text-c sm:text-justify leading-6">O mais novo e avassalador passo da minha vida em direção a minha futura profissão aspirada de Desenvolvedor Web foi ter ingressado em ferereiro de 2022 na Trybe. 
                Nela, tenho acumulado cada vez mais conhecimento sobre a área e cada vez mais ganho confiança de que estou me tornando um ótimo profissional!
                </p>
                <button
                  onClick={ () => history.push('/academico')}
                  className="p-3 sm:mt-12 mt-3 border-2 font-normal bg-white border-gray-300 hover:border-gray-500 hover:font-bold transition duration-1000 mb-20">
                  Mais sobre mim
                </button>
              </div>
            </div>
          </div>
          </div>
          <div className="w-11/12 mx-auto my-20">
            <p className="text-4xl text-white sm:text-5xl font-bold  text-c sm:text-left mb-20">Projetos Recentes</p>
            <div className="sm:w-full flex items-center justify-center flex-col ">
            <div className="w-full sm:px- ">
              <SliderProjects className="z-0" />
              <p className="w-full sm:text-left text-c font-bold text-white my-4 text-base hover:text-xl transition duration-500">Mais projetos</p>
            </div>
            </div>
          </div>
        </div>
      <footer className="text-white z-20 w-full bg-t-transp">
      <Footer />
      </footer>
      </div>
    );
  }


export default Home;
