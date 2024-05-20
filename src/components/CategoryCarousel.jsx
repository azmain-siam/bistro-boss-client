import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Pagination } from "swiper/modules";
import img1 from "../assets/home/slide1.jpg";
import img2 from "../assets/home/slide2.jpg";
import img3 from "../assets/home/slide3.jpg";
import img4 from "../assets/home/slide4.jpg";
import img5 from "../assets/home/slide5.jpg";

const CategoryCarousel = () => {
  return (
    <div className="w-3/4 mx-auto pb-10">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        autoplay
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="mb-10">
          <img src={img1} />
          <h3 className="text-center uppercase font-cinzel text-3xl text-white -mt-10">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} />
          <h3 className="text-center uppercase font-cinzel text-3xl text-white -mt-10">
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} />
          <h3 className="text-center uppercase font-cinzel text-3xl text-white -mt-10">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} />
          <h3 className="text-center uppercase font-cinzel text-3xl text-white -mt-10">
            Deserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} />
          <h3 className="text-center uppercase font-cinzel text-3xl text-white -mt-10">
            Vegetables
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CategoryCarousel;
