import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Slider(props) {
  const {array, type } = props;
  return (
    <Swiper 
        modules={[Navigation, Pagination]} 
        navigation={ true }
        className="relative flex flex-col"
    >
      {
        array.map((instituicao) => (
          <SwiperSlide className="flex justify-center items-center flex-col w-full h-full">
            <section className="w-full bg-cover bg-center flex items-center justify-center mb-20">
              <div className="absolute w-full h-full sm:h-90vh z-0">
                <div className="w-full h-1/2" />
                <div className="w-full h-1/2">
                  <img src={require('../images/h3.png')} alt="" className="w-full h-full object-cover opacity-60" />
                </div>
              </div>
              <div className="relative w-9/12 h-70vh my-20 relative flex items-center justify-center">
                <div className="flex w-full h-full right-0 top-0 justify-end rounded-2xl absolute">
                  <img src={require('../images/eter.jpg')} className="m-4 rounded-2xl h-4/5 w-2/3 object-cover opacity-80 bg-heaven bg-cover bg-center" alt="" />
                </div>
                <div className="left-0 flex w-full h-full items-end justify-start rounded-2xl absolute">
                  <div className="m-4 rounded-2xl h-2/3 w-1/2 bg-cover bg-white flex justify-center items-center relative" alt="">
                  <img src={require('../images/h3.png')} alt="" className="w-full h-full object-cover opacity-30 absolute rounded-xl" />
                    <p className="py-2 text-center w-10/12 z-20"></p>
            {type === 'academics'
              ? <h1 className="font-bold text-4xl py-2 text-center">{instituicao.academia}</h1>
              : <h1 className="font-bold text-4xl py-2 text-center">{instituicao.empresa}</h1>
              }
              {type === 'academics'
              ?  <h2 className="font-bold text-2xl py-2 text-center">{instituicao.curso}</h2>
              : <h2 className="font-bold text-2xl py-2 text-center">{instituicao.curso}</h2>}
              <p className="text-center">
                <span className="font-bold py-2">Período:</span>
                {' '}
                {`de ${instituicao.dataInicio} até ${instituicao.dataConclusão} - ${instituicao.duracao}`}
              </p>
                {instituicao.descricao.map((desc) => (
                  <p className="py-2 text-center">{desc}</p>
                ))} 
              </div>
                </div>
                <div className="right-4 py-10 p flex w-full h-full items-end justify-end rounded-2xl absolute">
                  <img src={require(`../images/nassau.png`)} className="m-4 rounded-2xl w-1/12 object-cover bg-center bg-heaven2" alt="" />
                </div>
              </div>
              </section>
          </SwiperSlide>
        )) 
      }
    </Swiper>
  );
}
