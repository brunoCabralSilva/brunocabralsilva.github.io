import React, { useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';


function About({ history }) {
  const carousel = useRef(null);

  const slideLeft = () => {
    carousel.current.scrollLeft -= 200;
  }

  const slideRight = () => {
    carousel.current.scrollLeft += 200;
  }

    return (
      <section className="min-h-screen bg-wallpaper sm:bg-none bg-cover">
        <div>
          <Nav font="bg-black" />
        </div>
        <div className="w-98% h-full flex flex-row relative sm:mx-6 sm:bg-wallpaper bg-none z-20">
          <div className="hidden sm:flex w-section z-0">
            <img src={require('../images/me2.jpg')} className="sm-opacity-100 sm:static object-cover h-full w-full" alt="" />
          </div>
          <div className="w-full sm:w-aside h-full sm:pl-14 z-20 flex-col items-center">
              <div className="min-h-page">
              <section className="sm:hidden w-10/12 mx-auto sm:mt-10 sm:w-65% flex items-center justify-center relative sm:h-screen">
                <div className="relative z-20 flex items-center justify-center">
                  <div className="border border-black rounded-full z-10 absolute h-full bg-gray-300 w-10/12" />
                  <motion.img
                    src={require('../images/me2.jpg')}
                    alt="Imagem de Bruno Cabral"
                    className="rounded-full relative z-20 w-full border border-black"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1.3, type: 'spring', stiffness: 40 }}
                  />
                </div>
              </section>
              <div className="w-full flex flex-col items-center sm:items-start">
                <h1 className="w-full text-c sm:text-left hidden sm:flex text-4xl sm:text-5xl mt-10 margin-b sm:mb-10 font-bold">Olá,<br /> Eu sou o<br /> Bruno Cabral!</h1>
                <p className="pl-1 text-sm mt-4 w-9/12 text-c sm:text-justify leading-6 pt-6 sm:pt-0">Nascido em Campina Grande, segunda maior cidade da Paraíba, desde cedo estudo para me qualificar no mercado de trabalho.
                Do ramo da eletrônica até a informática, tive incontáveis aprendizados que levarei para toda a vida.
                </p>

                <p className="pl-1 text-sm mt-4 mb-12 w-9/12 text-c sm:text-justify leading-6">O mais novo e avassalador passo da minha vida em direção a minha futura profissão aspirada de Desenvolvedor Web foi ter ingressado em ferereiro de 2022 na Trybe. 
                Nela, tenho acumulado cada vez mais conhecimento sobre a área e cada vez mais ganho confiança de que estou me tornando um ótimo profissional!
                </p>
                <button
                  onClick={ () => history.push('/academico')}
                  className="p-3 sm:mt-12 mt-3 border-2 font-normal bg-white border-gray-300 hover:border-gray-500 hover:font-bold transition duration-1000">
                  Mais sobre mim
                </button>
              </div>

            </div>
            <hr className="w-11/12 my-16" />
            <p className="text-4xl sm:text-5xl font-bold mt-5 mb-14 sm:mb-12 text-c sm:text-left">Projetos</p>
            <div className="sm:w-11/12 h-48 flex items-center justify-center flex-col ">
              <div className="h-4/5 w-full flex items-center relative">
                <button className="ml-4 sm:ml-2 absolute font-bold bg-glass hover:bg-white z-20 border border-gray-600 rounded-full p-1" onClick={slideLeft}><IoIosArrowBack /></button>               
                <div className="scroll-smooth snap-x snap-proximity flex overflow-hidden h-full w-11/12 sm:w-full mx-auto sm:mx-0 opacity-70" ref={carousel}>
                  <div className="h-item-slide w-5/12 border-2 rounded-xl snap-center flex-none">
                    <img src={require('../images/project1.png')} className="rounded-xl object-cover h-full w-full" alt="" />
                  </div>
                  <div className=" ml-2 h-item-slide w-5/12 border-2 rounded-xl snap-center flex-none">
                    <img src={require('../images/project2.png')} className="rounded-xl object-cover h-full w-full" alt="" />
                  </div>
                  <div className=" ml-2 h-item-slide w-5/12 border-2 rounded-xl snap-center flex-none">
                    <img src={require('../images/project2.png')} className="rounded-xl object-cover h-full w-full" alt="" />
                  </div>
                  <div className=" ml-2 h-item-slide w-5/12 border-2 rounded-xl snap-center flex-none">
                    <img src={require('../images/project2.png')} className="rounded-xl object-cover h-full w-full" alt="" />
                  </div>
              </div>
              <button className="absolute bg-glass font-bold hover:bg-white border mr-4 sm:mr-2 border-gray-600 right-0 rounded-full p-1" onClick={slideRight}><IoIosArrowForward /></button>
            </div>
            <div className="h-1/5 w-full sm:px- ">
              <p className="w-full sm:text-left text-c">Mais detalhes</p>
            </div>
            </div>
          </div>
        </div>
        <hr className="w-full mt-6 mb-1" />
        <Footer />
      </section >
    );
  }

export default About;

{/* <motion.section
className="h-screen w-full flex justify-center items-center bg-wallpaper z-20"
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ delay: 1, duration: 1 }}
>
<div className="w-3/5 h-full relative text-white">
<div className="bg-t-transp h-full w-full absolute" />
  <h1>Olá, eu sou Bruno Cabral!</h1>
  <p>
  Nascido em Campina Grande, segunda maior cidade da Paraíba, desde cedo estudo para me qualificar no mercado de trabalho.
  </p>
  <p>
  O mais novo e avassalador passo da minha vida em direção a minha futura profissão aspirada de Desenvolvedor Web foi ter ingressado em ferereiro de 2022 na Trybe.
  </p>
</div>
<div className="w-2/5 flex items-center justify-center h-full bg-white ">
<div className="h-85% w-85% bg-wallpaper flex items-end relative">
<div className="bg-bege-transp h-full w-full absolute" />
  <img src={require('../images/imagem-bruno-cabral-removebg-preview.png')} alt="logo com nome de Bruno" className="object-contain z-20" />
</div>
</div>
</motion.section> */}