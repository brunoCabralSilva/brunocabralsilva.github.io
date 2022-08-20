import React from 'react';
import { DiJavascript, DiNodejsSmall } from "react-icons/di";
import { FaDocker } from "react-icons/fa";
import { SiRedux, SiTailwindcss } from "react-icons/si";
import { GrMysql, GrReactjs } from "react-icons/gr";
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3 } from 'react-icons/io';

export default function Technologies() {
    return (
      <section className="w-10/12 my-20">
        <p className="mb-2 md:text-left text-c sm:pb-3 pb-10 font-aboreto text-4xl sm:text-5xl md:text-6xl z-30">Tecnologias</p>
        <div className="flex flex-col md:flex-row flex-wrap w-full justify-center items-center flex-wrap items-center justify-center md:justify-start">
          <div className="flex justify-center md:justify-end mt:0">
            <div className="flex flex-col justify-center items-center">
              <AiFillHtml5 className="text-7xl mr-3" />
              HTML
            </div>
            <div className="flex flex-col justify-center items-center">
            <IoLogoCss3 className="text-7xl mx-3" />
              CSS
            </div>
            <div className="flex flex-col justify-center items-center">
              <DiJavascript className="text-7xl mx-3" />
              JS
            </div>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start ">
            <div className="flex flex-col justify-center items-center mb-4 sm:mb-0 pt-6">
            <GrReactjs className="text-7xl mx-3 mb-2 md:mx-3" />
              React
            </div>
            <div className="flex flex-col justify-center items-center mb-4 sm:mb-0 pt-6">
            <SiRedux className="text-7xl mx-3 md:mx-3 mb-2" />
              Redux
            </div>
            <div className="flex flex-col justify-center items-center w-28">
              <img 
                src={require("../images/framer1.png")}
                alt="ícone do framer motion"
                className="object-contain px-4 pb-2 pt-1"
              />
              Motion
            </div>
            <div className="flex flex-col justify-center items-center">
            <SiTailwindcss className="text-7xl mx-3 md:mx-3 mb-2" />
              Tailwind
            </div>
            <div className="flex flex-col justify-center items-center">
            <FaDocker className="text-7xl mx-3 md:mx-3 mb-2" />
              Docker
            </div>
            <div className="flex flex-col justify-center items-center">
            <GrMysql className="text-7xl mx-3 md:mx-3 mb-2" />
              MySql
            </div>
            <div className="flex flex-col justify-center items-center">
            <DiNodejsSmall className="text-7xl mx-3 md:mx-3 mb-2" />
              Node
            </div>
          </div>
        </div>
      </section>
    );
}