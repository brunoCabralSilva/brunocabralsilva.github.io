import React from 'react';
import { ImGithub } from "react-icons/im";
import { FaHeadphonesAlt, FaWolfPackBattalion } from "react-icons/fa";
import { MdFastfood, MdCatchingPokemon } from "react-icons/md";
import { IoWalletOutline } from "react-icons/io5";
import { ImQuestion } from "react-icons/im";
import { motion } from 'framer-motion';

export default function ItemPortFolio(props) {
  const {
    link,
    grid,
    text,
  } = props;

  const returnIcon = () => {
    const classes = `transition-text text-7xl text-center p-2 text-black transition duration-1000 z-30`;
    switch(text) {
      case "Wallet":
      return <IoWalletOutline className={classes} />;
      case "Guia das Matilhas":
      return <FaWolfPackBattalion className={classes} />;
      case "Pokedex":
      return <MdCatchingPokemon className={classes} />;
      case "Recipes":
      return <MdFastfood className={classes} />;
      case "Trivia":
      return <ImQuestion className={classes} />;
      case "Tunes":
      return <FaHeadphonesAlt className={classes} />;
      case "Github":
      return <ImGithub className={classes} />;
      default: return null;
    }
  }

  return (
  <motion.a
    whileHover={{ scale: 0.98 }}
    href={link}
    target="_blank"
    className={`relative ${grid} relative flex items-end" `}
    rel="noreferrer"
  >
    <div className="absolute h-full w-full bg-white opacity-10 hover:opacity-0 z-20 duration-500 transition" />
    <img src={require('../images/h2.png')} alt="imagem de Bruno" className="object-cover w-full h-full absolute" />
    <div className="w-full h-full absolute flex items-center justify-center flex-col">
      { returnIcon() }
      <p className={`transition-text font-bold text-center text-black m-3 z-30`}>{ text }</p>
    </div>
  </motion.a>
  );
}