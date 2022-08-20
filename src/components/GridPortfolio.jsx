import React from 'react';
import { useHistory } from 'react-router-dom';

export default function GridPortfolio() {
  const history = useHistory();
  return(
    <section className="w-full flex flex-col items-center justify-center">
      <div className="hidden mt-20 mb-3 z-30 sm:grid grid-rows-3 sm:grid-rows-6 gap-1 grid-cols-2 sm:grid-cols-3 w-10/12">
        <div className="row-span-3 col-span-1 h-row-3">
          <img src={require('../images/h3.png')} alt="imagem de Bruno" className="p-2 object-cover w-full h-full" />
        </div>
        <div className="row-span-2 col-span-1 h-row-2">
          <img src={require('../images/h3.png')} alt="imagem de Bruno" className="p-2 object-cover w-full h-full" />
        </div>
        <div className="row-span-3 col-span-1 h-row-3">
          <img src={require('../images/h3.png')} alt="imagem de Bruno" className="p-2 object-cover w-full h-full" />
        </div>
        <div className="row-span-2 col-span-1 h-row-2">
          <img src={require('../images/h3.png')} alt="imagem de Bruno" className="p-2 object-cover w-full h-full" />
        </div>
        <div className="row-span-3 col-span-1 h-row-3">
          <img src={require('../images/h3.png')} alt="imagem de Bruno" className="p-2 object-cover w-full h-full" />
        </div>
        <div className="row-span-3 col-span-1 h-row-3">
          <img src={require('../images/h3.png')} alt="imagem de Bruno" className="p-2 object-cover w-full h-full" />
        </div>
        <div className="hidden sm:flex row-span-2 col-span-1 sm:col-span-1 h-row-2">
          <img src={require('../images/h3.png')} alt="imagem de Bruno" className="p-2 object-cover w-full h-full" />
        </div>
      </div>
      <div className="flex sm:hidden mt-20 mb-3 z-30 grid grid-rows-3 sm:grid-rows-6 gap-4 grid-cols-2 sm:grid-cols-3 w-10/12">
        <div className="row-span-2 col-span-1 bg-gray-300">
          <img src={require('../images/h3.png')} alt="imagem de Bruno" className="p-2 object-cover" />
        </div>
        <div className="row-span-1 col-span-1 bg-gray-300">
          <img src={require('../images/h3.png')} alt="imagem de Bruno" className="p-2 object-cover" />
        </div>
        <div className="row-span-1 col-span-1 bg-gray-300">
          <img src={require('../images/h3.png')} alt="imagem de Bruno" className="p-2 object-cover" />
        </div>
        <div className="row-span-1 col-span-1 bg-gray-300">
          <img src={require('../images/h3.png')} alt="imagem de Bruno" className="p-2 object-cover" />
        </div>
        <div className="row-span-2 col-span-1 bg-gray-300">
          <img src={require('../images/h3.png')} alt="imagem de Bruno" className="p-2 object-cover" />
        </div>
        <div className="row-span-1 col-span-1 bg-gray-300">
          <img src={require('../images/h3.png')} alt="imagem de Bruno" className="p-2 object-cover" />
        </div>
        <div className="row-span-1 col-span-2 bg-gray-300">
          <img src={require('../images/h3.png')} alt="imagem de Bruno" className="p-2 object-cover h-full w-full" />
        </div>
      </div>
      <button
        onClick={ () => history.push('/portfolio')}
        className="p-3 sm:mt-12 mt-3 border-2 font-normal bg-white border-gray-300 hover:border-gray-500 hover:font-bold transition duration-1000 mb-10 sm:mb-28">
        Portfólio completo
      </button>
    </section>
  );
}