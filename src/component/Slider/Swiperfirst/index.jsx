import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import './SwiperFirst.css'

// import required modules
import { Navigation } from "swiper";

const SwiperFirst=()=> {
  return (
    <>
      <Swiper
      navigation={true} 
      modules={[Navigation]} 
      className="mySwiper"
      slides-per-view="3"
      grid-rows="3"
      mousewheel-force-to-axis="true"
      >
        <SwiperSlide className="slide">Slide 1</SwiperSlide>
        <SwiperSlide className="slide">Slide 2</SwiperSlide>
        <SwiperSlide className="slide">Slide 3</SwiperSlide>
        <SwiperSlide className="slide">Slide 4</SwiperSlide>
        <SwiperSlide className="slide">Slide 5</SwiperSlide>
        <SwiperSlide className="slide">Slide 6</SwiperSlide>
        <SwiperSlide className="slide">Slide 7</SwiperSlide>
        <SwiperSlide className="slide">Slide 8</SwiperSlide>
        <SwiperSlide className="slide">Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
export default SwiperFirst;