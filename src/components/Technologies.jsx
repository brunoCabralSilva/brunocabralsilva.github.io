import React from 'react';

export default function Technologies() {
    return (
      <section className="w-full mb-10">
        <img 
            src={require("../images/technologies/tecnologias.jpg")}
            alt="ícone do html"
            className="w-10/12 sm:w-7/12 md:w-5/12 lg:w-3/12 mx-auto object-cover"
          />
        <div className="flex flex-row w-full justify-center items-center flex-wrap p-5">
          <img 
            src={require("../images/technologies/react.png")}
            alt="ícone react"
            className="w-4/12 sm:w-2/12 lg:w-1/12 object-contain px-3"
          />
          <img 
            src={require("../images/technologies/redux.png")}
            alt="ícone redux"
            className="w-4/12 sm:w-2/12 lg:w-1/12 object-contain px-3"
          />
          <img 
            src={require("../images/technologies/tailwind.png")}
            alt="ícone do tailwind"
            className="w-4/12 sm:w-2/12 lg:w-1/12 object-contain px-3"
          />
          <img 
            src={require("../images/technologies/framer.png")}
            alt="ícone do framer motion"
            className="w-3/12 sm:w-2/12 lg:w-1/12 object-contain px-3"
          />
          <img 
            src={require("../images/technologies/mysql.png")}
            alt="ícone do mysql"
            className="w-5/12 sm:w-2/12 lg:w-1/12 object-contain px-3"
          />
        </div>
      </section>
    );
}