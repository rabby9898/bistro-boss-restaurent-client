import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import img1 from "../../assets/home/slide1.jpg";
import img2 from "../../assets/home/slide2.jpg";
import img3 from "../../assets/home/slide3.jpg";
import img4 from "../../assets/home/slide4.jpg";
import img5 from "../../assets/home/slide5.jpg";

const Category = () => {
  return (
    <div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="w-full" src={img1} alt="" />
          <h1 className="text-4xl uppercase font-light text-white -mt-16 text-center">
            Salads
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={img2} alt="" />
          <h1 className="text-4xl uppercase font-light text-white -mt-16 text-center">
            Soups
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={img3} alt="" />
          <h1 className="text-4xl uppercase font-light text-white -mt-16 text-center">
            pizzas
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={img4} alt="" />
          <h1 className="text-4xl uppercase font-light text-white -mt-16 text-center">
            deserts
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={img5} alt="" />
          <h1 className="text-4xl uppercase font-light text-white -mt-16 text-center">
            Salads
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={img1} alt="" />
          <h1 className="text-4xl uppercase font-light text-white -mt-16 text-center">
            Salads
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={img2} alt="" />
          <h1 className="text-4xl uppercase font-light text-white -mt-16 text-center">
            Salads
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={img3} alt="" />
          <h1 className="text-4xl uppercase font-light text-white -mt-16 text-center">
            Salads
          </h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
