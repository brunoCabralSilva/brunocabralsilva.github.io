import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface interfaceArrayType {
  academia?: string,
  empresa?: string,
  curso?: string,
  cargo?: string,
  dataConclusão: string,
  dataInicio: string,
  descricao: string[],
  duracao: string,
  imagem: string,
};

interface SliderProps {
  array: interfaceArrayType[],
  type: string,
}

export default class Slider extends React.Component<SliderProps, {}> {
  render() {
    const { array, type } = this.props;
    return (
      <Swiper 
        modules={[Navigation, Pagination]} 
        navigation={ true }
        className="relative flex flex-col"
        loop={ true }
      >
        {
          array.map((instituicao) => (
            <SwiperSlide className="w-full bg-cover bg-center flex items-center justify-center mb-20">
              <div className="absolute w-full h-full sm:h-90vh z-0">
                <div className="w-full h-1/2 hidden sm:flex " />
                <div className="w-full h-full sm:h-1/2">
                  <img src={require('../images/h3.png')} alt="" className="w-full h-full object-cover opacity-60" />
                </div>
              </div>
              <div className="relative w-full sm:w-9/12 sm:h-70vh sm:my-20 flex flex-col sm:flex-row items-center justify-center">
                <div className="flex w-full h-full sm:right-0 sm:top-0 rounded-2xl justify-center sm:justify-end sm:absolute">
                  <img src={require(`../images/works-academy/${instituicao.imagem}`)} className="m-4 sm:rounded-2xl sm:h-4/5 h-48 w-85% sm:w-2/3 object-cover opacity-80 bg-heaven bg-cover bg-center" alt="" />
                </div>
                <div className="left-0 flex w-full h-full items-end justify-start rounded-2xl sm:absolute">
                  <div className="sm:m-4 rounded-2xl h-2/3 w-full sm:w-1/2 bg-cover bg-none sm:bg-white flex justify-center items-center relative">
                  <img src={require('../images/h3.png')} alt="" className="w-full h-full object-cover opacity-30 absolute rounded-xl hidden sm:flex" />
                  <p className="py-2 text-center w-10/12 z-20">
                    {type === 'academics'
                      ? <h1 className="w-full font-bold text-xl sm:text-3xl sm:pt-10 text-left">{instituicao.academia}</h1>
                      : <h1 className="w-full font-bold text-xl sm:text-3xl sm:pt-10 text-left">{instituicao.empresa}</h1>
                      }
                      {type === 'academics'
                      ?  <h2 className="font-bold text-base sm:text-lg italic pb-2 text-left">{instituicao.curso}</h2>
                      : <h2 className="font-bold text-base sm:text-lg italic pb-2 text-center">{instituicao.curso}</h2>}
                      <p className="text-left mt-3">
                        <span className="font-bold">Período:</span>
                        {' '}
                        {`de ${instituicao.dataInicio} até ${instituicao.dataConclusão} - ${instituicao.duracao}`}
                      </p>
                      <p className="py-2 text-left mb-10">
                        {instituicao.descricao.map((desc) => (
                      <span className="py-2 text-left">{desc}</span>
                      ))}
                      </p>
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )) 
        }
      </Swiper>
    );
  }
}

