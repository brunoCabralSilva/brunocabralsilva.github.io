import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, Autoplay} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function SliderProjects() {
    return (
        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          pagination={{clickable: true}}
          slidesPerView={3}
        >
          <SwiperSlide className="h-item-slide w-5/12 border-2 rounded-xl snap-center flex-none">
            <img src={require('../images/project1.png')} className="rounded-xl object-cover h-full w-full" alt="" />
          </SwiperSlide>
          <SwiperSlide className=" ml-2 h-item-slide w-5/12 border-2 rounded-xl snap-center flex-none">
            <img src={require('../images/project2.png')} className="rounded-xl object-cover h-full w-full" alt="" />
          </SwiperSlide>
          <SwiperSlide className=" ml-2 h-item-slide w-5/12 border-2 rounded-xl snap-center flex-none">
            <img src={require('../images/project2.png')} className="rounded-xl object-cover h-full w-full" alt="" />
          </SwiperSlide>
          <SwiperSlide className=" ml-2 h-item-slide w-5/12 border-2 rounded-xl snap-center flex-none">
            <img src={require('../images/project2.png')} className="rounded-xl object-cover h-full w-full" alt="" />
          </SwiperSlide>
        </Swiper>
    );
}