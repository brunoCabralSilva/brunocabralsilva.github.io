import React from 'react';
import { useHistory } from 'react-router-dom';
import { FaHeadphonesAlt, FaWolfPackBattalion } from "react-icons/fa";
import { MdFastfood, MdCatchingPokemon } from "react-icons/md";
import { IoWalletOutline } from "react-icons/io5";
import { ImQuestion } from "react-icons/im";
import { ImGithub } from "react-icons/im";

export default function GridPortfolio() {
  const history = useHistory();
  return(
    <section className="w-full flex flex-col items-center justify-center relative pt-14">
      <p className="mt-8 sm:mt-14 mb-2 w-10/12 md:text-left text-c pb-3 pb-0 font-aboreto md:mx-10 text-4xl sm:text-5xl md:text-6xl z-30">Portfolio</p>
      <div className="mb-3 z-30 grid grid-rows-3 sm:grid-rows-6 gap-3 grid-cols-2 sm:grid-cols-3 w-10/12">
        <a href="https://github.com/brunoCabralSilva" target="_blank" className="relative row-span-3 col-span-1 h-row-3 relative flex items-end" rel="noreferrer">
          <div className="absolute h-full w-full bg-white opacity-10 hover:opacity-0 z-20 duration-500 transition" />
          <img src={require('../images/h2.png')} alt="imagem de Bruno" className="object-cover w-full h-full absolute" />
          <div className="w-full h-full absolute flex items-center justify-center flex-col">
            <ImGithub className="text-center text-7xl p-2 text-black transition duration-1000 z-30" />
            <p className="font-bold text-black m-3 z-30">Github</p>
          </div>
        </a>
        <a  target="_blank" href="https://github.com/brunoCabralSilva/trybe-18-wallet" className="row-span-2 col-span-1 sm:col-span-1 h-row-2 relative flex items-end" rel="noreferrer">
        <div className="absolute h-full w-full bg-white opacity-10 hover:opacity-0 z-20 duration-500 transition" />
          <img src={require('../images/h2.png')} alt="imagem de Bruno" className="object-cover w-full h-full absolute" />
          <div className="w-full h-full absolute flex items-center justify-center flex-col">
            <IoWalletOutline className="text-center text-7xl p-2 text-black transition duration-1000 z-30"/>
            <p className="font-bold text-black m-3 z-30">Wallet</p>
          </div>
        </a>
        <a href="https://github.com/brunoCabralSilva/trybe-20-recipes" target="_blank" className="row-span-3 col-span-1 h-row-3 relative flex items-end" rel="noreferrer">
        <div className="absolute h-full w-full bg-white opacity-10 hover:opacity-0 z-20 duration-500 transition" />
          <img src={require('../images/h2.png')} alt="imagem de Bruno" className="object-cover w-full h-full absolute" />
          <div className="w-full h-full absolute flex items-center justify-center flex-col">
            <MdFastfood className="text-center text-7xl fa-solid fa-fork-knife p-2 text-black transition duration-1000 z-30"/>
            <p className="font-bold text-black m-3 z-30">Recipes</p>
          </div>
        </a>
        <a href="https://github.com/brunoCabralSilva/pokedex-react" target="_blank" className="row-span-2 col-span-1 h-row-2 relative flex items-end" rel="noreferrer">
        <div className="absolute h-full w-full bg-white opacity-10 hover:opacity-0 z-20 duration-500 transition" />
          <img src={require('../images/h2.png')} alt="imagem de Bruno" className="object-cover w-full h-full absolute" />
          <div className="w-full h-full absolute flex items-center justify-center flex-col">
            <MdCatchingPokemon className="text-center text-7xl fa-brands fa-github p-2 text-black transition duration-1000 z-30"/>
            <p className="font-bold text-black m-3 z-30">Pokedex</p>
          </div>
        </a>
        <a href="https://github.com/brunoCabralSilva/guia-das-matilhas" target="_blank" className="row-span-3 col-span-1 h-row-3 relative flex items-end" rel="noreferrer">
        <div className="absolute h-full w-full bg-white opacity-10 hover:opacity-0 z-20 duration-500 transition" />
          <img src={require('../images/h2.png')} alt="imagem de Bruno" className="object-cover w-full h-full absolute" />
          <div className="w-full h-full absolute flex items-center justify-center flex-col">
            <FaWolfPackBattalion className="text-center text-7xl p-2 text-black transition duration-1000 z-30"/>
            <p className="font-bold text-black m-3 z-30">Guia das Matilhas</p>
          </div>
        </a>
        <a href="https://github.com/brunoCabralSilva/trybe-19-trivia" target="_blank"className="row-span-3 col-span-1 h-row-3 relative flex items-end" rel="noreferrer">
        <div className="absolute h-full w-full bg-white opacity-10 hover:opacity-0 z-20 duration-500 transition" />
          <img src={require('../images/h2.png')} alt="imagem de Bruno" className="object-cover w-full h-full absolute" />
          <div className="w-full h-full absolute flex items-center justify-center flex-col">
            <ImQuestion className="text-center text-7xl p-2 text-black transition duration-1000 z-30"/>
            <p className="font-bold text-black m-3 z-30">Trivia</p>
          </div>
        </a>
        <a href="https://github.com/brunoCabralSilva/trybe-14-tunes" target="_blank" className="row-span-2 col-span-2 sm:col-span-1 h-row-2 relative flex items-end" rel="noreferrer">
        <div className="absolute h-full w-full bg-white opacity-10 hover:opacity-0 z-20 duration-500 transition" />
          <img src={require('../images/h2.png')} alt="imagem de Bruno" className="object-cover w-full h-full absolute" />
          <div className="w-full h-full absolute flex items-center justify-center flex-col">
            <FaHeadphonesAlt className="text-center text-7xl p-2 text-black transition duration-1000 z-30" />
            <p className="font-bold text-black m-3 z-30">Tunes</p>
          </div>
        </a>
      </div>
      <button
        onClick={ () => history.push('/projects')}
        className="p-3 border-2 font-normal bg-white border-h-color hover:border-gray-500 hover:font-bold transition duration-1000 z-40">
        Portfolio completo
      </button>
    </section>
  );
}