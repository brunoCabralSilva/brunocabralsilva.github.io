import React from 'react';
import { DiJavascript, DiNodejsSmall } from "react-icons/di";
import { FaDocker } from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiMongodb, SiTypescript } from "react-icons/si";
import { GrMysql, GrReactjs } from "react-icons/gr";
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3 } from 'react-icons/io';
import { motion } from 'framer-motion';

interface TechProps {
  text: string,
}

export default class TechItem extends React.Component<TechProps, {}> {
  returnIcon = () => {
    const { text } = this.props;
    switch (text) {
      case 'HTML':
        return <AiFillHtml5 className="mt-3 sm:mt-0 text-7.5xl mx-3 sm:mx-0 sm:mr-3 mr-0" />
      case 'CSS':
        return <IoLogoCss3 className="mt-3 sm:mt-0 text-7xl mx-3" />
      case 'JS':
        return <DiJavascript className="mt-3 sm:mt-0 text-7.5xl mx-3" />
      case 'TS': 
        return <SiTypescript className="mt-3 sm:pt-1 text-6xl mx-3 mb-4 md:mx-3" />
      case 'React':
        return <GrReactjs className="mt-3 sm:mt-0 text-7xl mx-3 mb-2 md:mx-3" />
      case 'Redux':
        return <SiRedux className="mt-3 sm:mt-0 text-7xl mx-3 md:mx-3 mb-2" />
      case 'Motion':
        return (
          <img 
            src={require("../images/framer1.png")}
            alt="ícone do framer motion"
            className="object-contain w-28 px-4"
          />);
      case 'Tailwind':
        return <SiTailwindcss className="mt-3 sm:mt-0 text-7xl mx-3 md:mx-3" />
      case 'Docker': 
        return <FaDocker className="mt-3 sm:mt-0 text-7xl mx-3 md:mx-3" />
      case 'MySql':
        return <GrMysql className="mt-3 sm:mt-0 text-7xl mx-3 md:mx-3" />
      case 'Node':
        return <DiNodejsSmall className="mt-3 sm:mt-0 text-7xl mx-3 md:mx-3" />
      case 'MongoDB':
        return <SiMongodb className="text-7xl mx-3 md:mx-3 mb-2" />
      default:
        return null;
    }
  };
  
  render() {
    const { text } = this.props;
    return(
      <motion.div
        whileHover={{ scale: 1.2 }}
        className="flex flex-col justify-center items-center mt-3">
        <div className="h-24 flex items-center">{ this.returnIcon() }</div>
        <div className="flex items-end" >{ text }</div>
      </motion.div>
    );
  }
}