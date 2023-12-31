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
import { Language } from "../../../services/language";
const Partners = () => {
  return (
    <section className="pt-[130px]" id="partners">
      <h6 className="text-center text-textColor md:text-[40px] text-2xl font-semibold">
      {Language("PARTNER_TITLE")}
      </h6>
      <div>
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 5000,
          }}
          spaceBetween={70}
          slidesPerView={4}
          navigation
          // rewind={true}
          loop={true}
          loopedSlides={2}
          centeredSlides={true}
          className={"wrapper h-[200px] mt-5"}
          breakpoints={{
            360: {
              slidesPerView: 1,
              spaceBetween: 70,
            },
            728: {
              slidesPerView: 4,
              spaceBetween: 70,
            },
          }}
        >
          <SwiperSlide className="grid place-items-center p-5 select-none  ">
            <img src={img1} alt="" className="w-[80%] md:[w-full]" />
          </SwiperSlide>
          <SwiperSlide className="grid place-items-center p-5 select-none ">
            <img src={img2} alt="" className="w-[80%] md:[w-full]" />
          </SwiperSlide>
          <SwiperSlide className="grid place-items-center p-5 select-none ">
            <img src={img3} alt="" className="w-[80%] md:[w-full]" />
          </SwiperSlide>
          <SwiperSlide className="grid place-items-center p-5 select-none ">
            <img src={img4} alt="" className="w-[80%] md:[w-full]" />
          </SwiperSlide>
          <SwiperSlide className="grid place-items-center p-5 select-none ">
            <img src={img5} alt="" className="w-[80%] md:[w-full]" />
          </SwiperSlide>
          <SwiperSlide className="grid place-items-center p-5 select-none ">
            <img src={img6} alt="" className="w-[80%] md:[w-full]" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Partners;
