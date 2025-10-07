import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";

const About_Fourth = () => {
  const { t } = useTranslation("common");
  const testimonials = t("fourth.testimonials", { returnObjects: true });

  return (
    <section className="w-full py-20 bg-black" dir="rtl">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          {t("fourth.title")}
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          {t("fourth.desc")}
        </p>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          className="pb-10"
        >
          {testimonials.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="bg-[#111] rounded-2xl shadow-lg p-8 flex flex-col items-center gap-4 max-w-xl mx-auto">
                <img
                  src={item.img} // بدل اللينكات الطويلة بصور محلية
                  alt={item.name}
                  className="w-20 h-20 rounded-full object-cover object-center bg-center border-4 border-[#8b683e]"
                />
                <FaQuoteLeft className="text-[#8b683e] text-3xl" />
                <p className="text-gray-300 italic leading-relaxed">
                  “{item.feedback}”
                </p>
                <h4 className="font-semibold text-white">{item.name}</h4>
                <span className="text-sm text-gray-400">{item.role}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default About_Fourth;
