
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image1 from '../../../assets/Images/cover1.png';
import Image2 from '../../../assets/Images/cover2.png';
import Image3 from '../../../assets/Images/cover3.png';
import Image4 from '../../../assets/Images/cover4.png';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import {Mousewheel, Autoplay, Pagination, Navigation,EffectFade } from "swiper";
const data=[{dataitem:Image1},{dataitem:Image3},{dataitem:Image1},{dataitem:Image2},{dataitem:Image1},{dataitem:Image2},{dataitem:Image3},{dataitem:Image4},{dataitem:Image1},{dataitem:Image2}]
const SwiperSix=()=> {
  return (
    <>
      <Swiper
         direction={"vertical"}
         slidesPerView={1}
         effect={"fade"}
         spaceBetween={30}
         mousewheel={false}
         loop={true}
         pagination={{
           clickable: true,
         }}
         autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          waitForTransition: true
        }}
         modules={[ Autoplay,Pagination,EffectFade]}
         className="mySwiper"
      >
        {data.map((item)=>{
                return(
                    <SwiperSlide className="slide"> 
                       <img src={item.dataitem}alt="" />  
                    </SwiperSlide>
                )
            })}
      </Swiper>
    </>
  );
}

export default SwiperSix;
