import React from 'react';
import { DiJavascript, DiNodejsSmall } from "react-icons/di";
import { FaDocker } from "react-icons/fa";
import { SiRedux, SiTailwindcss } from "react-icons/si";
import { GrMysql, GrReactjs } from "react-icons/gr";
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3 } from 'react-icons/io';

export default function TechItem(props) {
  const { text } = props;
  const returnIcon = () => {
    switch (text) {
      case 'HTML':
        return <AiFillHtml5 className="text-7.5xl mx-3 sm:mx-0 sm:mr-3 mr-0" />
      case 'CSS':
        return <IoLogoCss3 className="text-7xl mx-3" />
      case 'JS':
        return <DiJavascript className="text-7.5xl mx-3" />
      case 'React':
        return <GrReactjs className="text-7xl mx-3 mb-2 md:mx-3" />
      case 'Redux':
        return <SiRedux className="text-7xl mx-3 md:mx-3 mb-2" />
      case 'Motion':
        return (
          <img 
            src={require("../images/framer1.png")}
            alt="ícone do framer motion"
            className="object-contain w-28 px-4 pb-2 pt-1"
          />);
      case 'Tailwind':
        return <SiTailwindcss className="text-7xl mx-3 md:mx-3 mb-2" />
      case 'Docker': 
        return <FaDocker className="text-7xl mx-3 md:mx-3 mb-2" />
      case 'MySql':
        return <GrMysql className="text-7xl mx-3 md:mx-3 mb-2" />
      case 'Node':
        return <DiNodejsSmall className="text-7xl mx-3 md:mx-3 mb-2" />
      default:
        return null;
    }
  }
  return(
    <div className="flex flex-col justify-center items-center">
      { returnIcon() }
      { text }
    </div>
  );
}