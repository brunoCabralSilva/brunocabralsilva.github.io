import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function Slider(props) {
  const {array, type } = props;
  const conf = {
    navigation: true,
  };
  return (
    <Swiper 
        modules={[Navigation, Pagination]} 
        {...conf }
    >
      {
        array.map((instituicao) => (
          <SwiperSlide settings= { conf } className="flex justify-center">
          <div className="flex min-h-85vh w-95% flex-row relative">
            <div className="h-full w-full absolute bg-gradient-to-t from-black to-t-transp z-10" />
            <img src={require(`../images/${instituicao.imagem}`)} className="h-full w-full object-cover absolute" alt="" />
            <div className="w-9/12 mx-auto z-20 text-white flex flex-col justify-center items-center py-6">
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
              <div>
                {instituicao.descricao.map((desc) => (
                  <p className="py-2 text-center">{desc}</p>
                ))} 
              </div>
            </div>
          </div>
          </SwiperSlide>
        )) 
      }
    </Swiper>
  );
}