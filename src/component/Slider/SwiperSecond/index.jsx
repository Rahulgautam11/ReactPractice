import { Swiper, SwiperSlide } from "swiper/react";
import Image1 from '../../../assets/Images/cover1.png';
import Image2 from '../../../assets/Images/cover2.png';
import Image3 from '../../../assets/Images/cover3.png';
import Image4 from '../../../assets/Images/cover4.png';
import Video1 from '../../../assets/Video/sunset.mp4';
import Video2 from '../../../assets/Video/beach.mp4';
import "swiper/css";
import "swiper/css/pagination";
import "./SwiperSecond.css";
import "swiper/css/grid";
import { Navigation, Pagination, Mousewheel, Keyboard, EffectCards} from "swiper";

const data=[{dataitem:Image1},{dataitem:Image3},{dataitem:Image1},{dataitem:Image2},{dataitem:Image1},{dataitem:Image2},{dataitem:Image3},{dataitem:Image4},{dataitem:Image1},{dataitem:Image2}]
// const videoitem=[{dataitem:Video1},{dataitem:Video2},{dataitem:Video1},{dataitem:Video2},{dataitem:Video1},{dataitem:Video2}]
const SwiperSecond=()=> {

    
  return (
    <>
      <Swiper
        direction={"horizontal"} 
        loop={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        slidesPerView={1}
        // centeredSlides={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        navigation={true}
        keyboard={true}
        // breakpoints={{
        //     1100: {
        //       slidesPerView: 4,
        //     },
        //     800: {
        //       slidesPerView: 2,
        //       slidesPerGroup: 2
        //     },

        //   }}
        className="mySwiper"
        >
         {data.map((item)=>{
                return(
                    <SwiperSlide className="slide"> 
                       <img src={item.dataitem}alt="" />  
                    </SwiperSlide>
                )
            })}
         {/* {videoitem.map((item)=>{
                return(
                    <SwiperSlide>
                    <video src={item.videoitem} autoPlay muted  preload="none" ></video>
                    </SwiperSlide>
                )
            })} */}

            {/* <SwiperSlide>
            <video src={Video1} autoPlay muted   ></video>
            </SwiperSlide>
            <SwiperSlide>
            <video src={Video2} autoPlay muted   ></video>
            </SwiperSlide>
            <SwiperSlide>
            <video src={Video1} autoPlay muted   ></video>
            </SwiperSlide>
            <SwiperSlide>
            <video src={Video2} autoPlay muted  preload="none" ></video>
            </SwiperSlide>
            <SwiperSlide>
            <video src={Video1}  autoPlay muted  preload="none" ></video>
            </SwiperSlide>
            <SwiperSlide>
            <video src={Video2}  autoPlay muted  preload="none" ></video>
            </SwiperSlide> */}
      </Swiper>
    </>
  );
}
export default  SwiperSecond;