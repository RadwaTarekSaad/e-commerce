'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function MySwipper({
  imagesList,
  slidesPreview = 1,
  spaceBetween=50
}: {
  imagesList: string[];
  slidesPreview?: number;
  spaceBetween?:number
}) {
  return (
    <Swiper
   modules={[Navigation,Pagination]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPreview}
      loop
       navigation
        pagination={{ clickable: true,renderBullet(index,className){
            return `<span class="${className} w-5! h-3! bg-white"></span>`
        },bulletActiveClass:"w-7! opacity-100! bg-white! rounded-2xl!" }}
      //   onSlideChange={() => console.log('slide change')}
      //   onSwiper={(swiper) => console.log(swiper)}
    >
      {imagesList.map((imgSrc) => (
        <SwiperSlide key={imgSrc}>
            <img src={imgSrc} alt='' className="w-full object-cover h-85!"/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
