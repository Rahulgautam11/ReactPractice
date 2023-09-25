import './SwipFive.css'

import { Swiper, SwiperSlide } from "swiper/react";
import Image1 from '../../../assets/Images/cover1.png';
import Image2 from '../../../assets/Images/cover2.png';
import Image3 from '../../../assets/Images/cover3.png';
import Image4 from '../../../assets/Images/cover4.png';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";
import { Navigation, Pagination, Mousewheel, Keyboard,Grid} from "swiper";

// const data=[{dataitem:Image1},{dataitem:Image2},{dataitem:Image3},{dataitem:Image4},{dataitem:Image1},{dataitem:Image2},{dataitem:Image1},{dataitem:Image2},{dataitem:Image3},{dataitem:Image4},{dataitem:Image1},{dataitem:Image2}]
const data=[{dataitem:"1"},{dataitem:"2"},{dataitem:"3"},{dataitem:"4"},{dataitem:"5"},{dataitem:"6"},{dataitem:"7"},{dataitem:"8"},{dataitem:"9"},{dataitem:"10"},{dataitem:"11"},{dataitem:"12"},{dataitem:"13"}]
const SwiperFive=()=> {

    
  return (
    <>
      <Swiper
    //   for direction
        direction={"horizontal"} 
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        // slidesPerView is number or auto
        slidesPerView={3}
        // centeredSlides={true}
        modules={[Grid,Navigation, Pagination, Mousewheel, Keyboard]}
        navigation={true}
        keyboard={true}
        grid={{
            rows: 2,
            
          }}
        className="mySwiper"
        >
         {data.map((item)=>{
                return(
                    <SwiperSlide className="slide"> 
                       {/* <img src={item.dataitem}alt="" /> */}
                       <h1>{item.dataitem}</h1>
                    </SwiperSlide>
                )
            })}
      </Swiper>
    </>
  );
}
export default  SwiperFive;