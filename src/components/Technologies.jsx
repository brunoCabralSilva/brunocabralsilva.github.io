import React from 'react';
import { DiJavascript } from "react-icons/di";
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
            <div className="flex flex-col justify-center items-center">
            <GrMysql className="text-7xl mx-3 md:mx-3 mb-2" />
              MySql
            </div>
            <div className="flex flex-col justify-center items-center">
            <SiTailwindcss className="text-7xl mx-3 md:mx-3 mb-2" />
              Tailwind
            </div>
            {/* <img 
              src={require("../images/technologies/framer.png")}
              alt="ícone do framer motion"
              className="w-3/12 sm:w-2/12 lg:w-1/12 object-contain px-3"
            /> */}
            </div>
        </div>
      </section>
    );
}