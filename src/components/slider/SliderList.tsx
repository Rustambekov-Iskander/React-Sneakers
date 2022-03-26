import React from 'react';
import cl from './Slider.module.scss';

// import Swiper
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Slider from '../slider/Slider';



const SliderList = () => {
    return (
        <div className={cl.sliderList}>
            <Swiper
            // install Swiper modules
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
            >
            <SwiperSlide><Slider/></SwiperSlide>
            <SwiperSlide><Slider/></SwiperSlide>

            </Swiper>
        </div>
    );
};

export default SliderList;