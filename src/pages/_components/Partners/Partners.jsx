import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import img1 from "../../../assets/image/happyland.png";
import img2 from "../../../assets/image/binafsha.png";
import img3 from "../../../assets/image/wp.png";
import img4 from "../../../assets/image/begin.png";
import img5 from "../../../assets/image/positano.png";
import img6 from "../../../assets/image/milady.png";

const Partners = () => {
  return (
    <section className="py-[130px]">
      <h6 className="text-center text-textColor text-[40px] font-semibold">
        Наши партнеры
      </h6>
      <div>
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 1000,
          }}
          spaceBetween={70}
          slidesPerView={4}
          navigation
          // centeredSlides={true}
          className={"wrapper h-[200px] mt-5 flex"}
          loop={true}
        >
          <SwiperSlide className="grid place-items-center p-5 select-none">
            <img src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide className="grid place-items-center p-5 select-none">
            <img src={img2} alt="" />
          </SwiperSlide>
          <SwiperSlide className="grid place-items-center p-5 select-none">
            <img src={img3} alt="" />
          </SwiperSlide>
          <SwiperSlide className="grid place-items-center p-5 select-none">
            <img src={img4} alt="" />
          </SwiperSlide>
          <SwiperSlide className="grid place-items-center p-5 select-none">
            <img src={img5} alt="" />
          </SwiperSlide>
          <SwiperSlide className="grid place-items-center p-5 select-none">
            <img src={img6} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Partners;
