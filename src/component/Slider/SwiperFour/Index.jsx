import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {Keyboard,Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import "./SwiperFour.css";
import { Pagination } from "swiper";
import Image1 from '../../../assets/Images/cover1.png';
import Image2 from '../../../assets/Images/cover2.png';
import Image3 from '../../../assets/Images/cover3.png';
import Image4 from '../../../assets/Images/cover4.png';
const data=[{dataitem:Image1},{dataitem:Image2},{dataitem:Image3},{dataitem:Image4},{dataitem:Image1},{dataitem:Image2},{dataitem:Image1},{dataitem:Image2},{dataitem:Image3},{dataitem:Image4},{dataitem:Image1},{dataitem:Image2}]
const SwiperFour=()=> {
  return (
    <>
      <Swiper
        className="mySwiper swiper-h"
        spaceBetween={50}
        keyboard={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Keyboard,Navigation]}
      >
        <SwiperSlide>Horizontal Slide 1</SwiperSlide>
        <SwiperSlide>
          <Swiper
            className="mySwiper2 swiper-v"
            direction={"vertical"}
            spaceBetween={50}
            keyboard={true}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination,Keyboard,Navigation]}
          >
            {data.map((item)=>{
                return(
                    <SwiperSlide className="slide"> 
                       <img src={item.dataitem}alt="" />
                    </SwiperSlide>
                )
            })}
          </Swiper>
        </SwiperSlide>
        <SwiperSlide>Horizontal Slide 3</SwiperSlide>
        <SwiperSlide>Horizontal Slide 4</SwiperSlide>
      </Swiper>
    </>
  );
}
export default SwiperFour;