import marble from "./json/marble.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";

const Swee = () => {
  return (
    <div className="w-full max-w-[1920px] mx-auto -z-10" dir="ltr">
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 3000 }}
        spaceBetween={10}
        slidesPerView={1}
        className="w-full"
      >
        {marble.map((e, i) => (
          <SwiperSlide key={e.id}>
            <div>
              <img
                src={e.img}
                alt={e.title}
                className="w-full h-[800px] object-cover"
                loading={i < 2 ? "eager" : "lazy"}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Swee;
