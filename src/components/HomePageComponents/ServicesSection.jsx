import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import { useTranslation } from "react-i18next";

const ServicesSection = () => {
  const { t, i18n } = useTranslation();

  const images = [
    "/imgs/s1.jpg",
    "/imgs/s2.jpg",
    "/imgs/s3.jpg",
    "/imgs/s4.jpg",
    "/imgs/s5.jpg",
  ];

  return (
    <section className="max-w-[1920px] mx-auto bg-black py-16 px-4" dir="ltr">
      <div className=" mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Swiper Section */}
        <div>
          <Swiper
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView="auto"
            loop
            autoplay={{ delay: 2500 }}
            coverflowEffect={{
              rotate: 10,
              stretch: 0,
              depth: 150,
              modifier: 2,
              slideShadows: false,
            }}
            modules={[Autoplay, EffectCoverflow]}
            className="w-full"
          >
            {images.map((img, idx) => (
              <SwiperSlide
                key={idx}
                className="w-[280px] h-[200px] overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={img}
                  alt={`marble work ${idx + 1}`}
                  className="w-full h-[350px] object-cover"
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Text Section */}
        <div
          className="text-white px-5"
          dir={`${i18n.language === "ar" ? "rtl" : "ltr"}`}
        >
          <h2 className="text-3xl max-sm:text-2xl text-center font-bold mb-4">
            {t("servicesSection.title")}
          </h2>
          <p className="text-gray-400 leading-relaxed mb-6 max-sm:text-sm">
            {t("servicesSection.description1")}
          </p>
          <p className="text-gray-400 leading-relaxed max-sm:text-sm">
            {t("servicesSection.description2")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
