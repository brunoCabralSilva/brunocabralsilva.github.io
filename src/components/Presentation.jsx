import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Presentation() {
  const history = useHistory();
  return(
    <section className="w-full h-full md:h-90vh flex flex-col md:flex-row  relative justify-center items-center">
      <div className="absolute w-full h-full sm:h-90vh z-0">
        <div className="w-full h-1/2" />
        <div className="w-full h-1/2">
          <img src={require('../images/h3.png')} alt="" className="w-full h-full object-cover opacity-60" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row p-4 w-11/12 justify-center">
      <div className="font-aboreto md:mx-10 md:w-1/2 text-4xl sm:text-5xl md:text-6xl z-30">
        <p className="mb-2 w-full md:text-left pb-3 pb-0">Full Stack</p>
        <div className="bg-gray-300 md:m-10 m-0 md:mt-10 w-full h-70vh">
          <img src={require('../images/escritorio2.jpg')} alt="" className="w-full h-full object-cover opacity-80" />
        </div>
      </div>
      <div className="hidden md:flex md:w-1/2 mt-10 md:mt-0 flex flex-col md:items-start items-center z-30">
        <div className="bg-h-color md:m-10 m-0 w-full h-70vh">
          <img src={require('../images/escritorio.jpg')} alt="" className="w-full h-full object-cover opacity-70" />
        </div>
          <button
            onClick={ () => history.push('/experience')}
            className="p-3 sm:mt-12 mt-3 border-2 font-normal bg-white border-h-color hover:border-gray-500 hover:font-bold transition duration-1000 md:mb-10 md:m-0">
            Mais sobre mim
          </button>
        </div>
      </div>
    </section>
  );
}