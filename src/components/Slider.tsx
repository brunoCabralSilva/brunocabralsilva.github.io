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
  link?: string,
};

interface SliderProps {
  array: interfaceArrayType[],
  type: string,
  history: any,
}

export default class Slider extends React.Component<SliderProps, {}> {
  componentDidMount() {
    const classSwiper: any = document.getElementsByClassName('swiper-button-prev');
    console.log(classSwiper)
    for(let i = 0; i < classSwiper.length; i += 1) {
      classSwiper[i].setAttribute("class", "hidden");
      console.log(classSwiper[i]);
    }
  }

  render() {
    const { array, type, history } = this.props;
    return (
        <div className="h-full w-full flex flex-wrap relative">
        {
          array.map((instituicao) => (
            <Swiper 
              modules={[Navigation, Pagination]} 
              navigation={ true }
              className="w-full lg:w-1/2"
              loop={ true }
            >
              <SwiperSlide>
                <div className="rounded-xl flex lg:flex-row flex-col items-center relative justify-start transition-all duration-1000 pb-4 lg:pb-0 lg:mb-0 border-4 border-white hover:border-black w-full h-full"> 
                <img src={require('../images/h3.png')} alt="" className="w-full h-full object-cover opacity-40 absolute" />
                <div className="rounded-full h-60 lg:h-44 w-60 lg:ml-2 mt-10 mb-3 border-8 border-white duration-1000 transition-all z-20 relative flex items-center justify-center">
                  <img src={require('../images/arrow-right.png')} alt="arrow-left" className="animate-pulse absolute w-28 z-40 sm:hidden" />
                  <img
                    src={require(`../images/works-academy/${instituicao.imagem}`)}
                    className="rounded-full w-full h-full object-cover absolute"
                    alt=""
                  />
                </div>
                <div className="text-c lg:text-left rounded-3xl px-4 py-3 z-30 lg:w-10/12 lg:mr-10">
                  {
                    type === 'academics'
                      ? <h1 className="w-full font-bold text-xl">{instituicao.academia}</h1>
                      : <h1 className="w-full font-bold text-xl">{instituicao.empresa}</h1>
                  }
                  {
                    type === 'academics'
                      ?  <h2 className="text-sm italic pb-2">{instituicao.curso}</h2>
                      : <h2 className="text-sm italic pb-2">{instituicao.cargo}</h2>
                  }
                  <div className="text-sm">
                    { `${instituicao.dataInicio} até ${instituicao.dataConclusão} - ${instituicao.duracao}` }
                  </div>
                </div>
              </div>
              </SwiperSlide>
              {
                instituicao.descricao.map((desc) => (
                  <SwiperSlide>
                    <div className="rounded-xl flex lg:flex-row flex-col items-center relative justify-start transition-all duration-1000 pb-4 lg:pb-0 lg:mb-0 border-4 border-white hover:border-black w-full h-full"> 
                      <img src={require('../images/h3.png')} alt="" className="w-full h-full object-cover opacity-40 absolute" />
                      <img src={require(`../images/works-academy/${instituicao.imagem}`)} className="rounded-full h-60 sm:h-60 w-60 sm:w-60 object-cover lg:ml-2 mt-10 mb-3 border-8 border-white duration-1000 transition-all bg-cover z-20" alt="" />
                      <div className="text-c lg:text-left rounded-3xl px-4 py-3 lg:mr-10 z-30 w-full flex items-center justify-start">
                        <span className="py-2">{desc}</span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              }
              {
                instituicao.link &&
                <SwiperSlide>
                    <div className="rounded-xl flex flex-col items-center relative justify-start transition-all duration-1000 pb-4 lg:pb-0 lg:mb-0 border-4 border-white hover:border-black w-full h-full"> 
                      <a
                        className="w-full mb-1 h-full flex items-center relative border-2 border-black px-2 py-1"
                        href="https://community.revelo.com/"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <img src={require('../images/h3.png')} alt="" className="w-full h-full object-cover opacity-40 absolute right-0" />
                        <img src={require(`../images/works-academy/${instituicao.imagem}`)} className="rounded-full h-16 sm:h-16 w-16 sm:w-16 object-cover border-4 border-white duration-1000 transition-all bg-cover z-20" alt="" />
                        <span className="pl-4 z-30 font-bold">Revelo Community Network (Brasil)</span>
                      </a>
                      <a
                        className="h-full mb-1 w-full flex items-center relative border-2 border-black px-2 py-1"
                        href="https://es.community.revelo.com/"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <img src={require('../images/h3.png')} alt="" className="w-full h-full object-cover opacity-40 absolute right-0" />
                        <img src={require(`../images/works-academy/revelo2.png`)} className="rounded-full h-16 sm:h-16 w-16 sm:w-16 object-cover border-4 border-white duration-1000 transition-all bg-cover z-20" alt="" />
                        <span className="pl-4 z-30 font-bold">Revelo Community Network (América Latina)</span>
                      </a>
                      <button
                        className="h-full w-full flex items-center relative border-2 border-black px-2 py-1 hover:text-blue-500"
                        type="button"
                        onClick={ () => history.push('/articles') }
                      >
                        <img src={require('../images/h3.png')} alt="" className="w-full h-full object-cover opacity-40 absolute right-0" />
                        <img src={require(`../images/works-academy/revelo3.png`)} className="rounded-full h-16 sm:h-16 w-16 sm:w-16 object-cover border-4 border-white duration-1000 transition-all bg-cover z-20" alt="" />
                        <span className="pl-4 z-30 font-bold">Meus artigos</span>
                      </button>
                    </div>
                  </SwiperSlide>
              }
            </Swiper>
          )) 
        }
      </div>
    );
  }
}

