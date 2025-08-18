import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import { useTranslation } from "react-i18next";

const ServicesSection = () => {
  const { t } = useTranslation();

  const images = [
    "https://scontent.fcai23-1.fna.fbcdn.net/v/t39.30808-6/486377653_1084776047001595_6809137013621516861_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Q05lDQ_p7BkQ7kNvwHlx47O&_nc_oc=AdlohTuN8OzEtd5T7pbI3h33Py_Nbp0u2AFDZ00CrAdVBhnKma_uPfrhWtWXxfg2RqM&_nc_zt=23&_nc_ht=scontent.fcai23-1.fna&_nc_gid=8qmpThB0atnACc3QcKbjAQ&oh=00_AfUEtXRjF5yuVfPi1NFSk98Gu_BcRVWgBwWY09tGCA5-og&oe=68A3A961",
    "https://scontent.fcai23-1.fna.fbcdn.net/v/t39.30808-6/518134092_1169923075153558_2325281589639320721_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=1vQplSwibMoQ7kNvwGMAHKH&_nc_oc=AdlLskw312Blu68P10kW_aDXVYhsU9zpcw4byOKa9yfuKktqVg4_aXJQlBhosJ3Pnuw&_nc_zt=23&_nc_ht=scontent.fcai23-1.fna&_nc_gid=nZUBRRunfDHxe5l1ApUB5w&oh=00_AfXNs_8SMXu3mavlFO1W99AainSbcXTHE0W9yeX8W7ZR0g&oe=68A3C4D3",
    "https://scontent.fcai23-1.fna.fbcdn.net/v/t39.30808-6/516595763_1169923085153557_2547494530375536815_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=t75s6-GnWnEQ7kNvwHe-qm7&_nc_oc=Adk5tEpkRDwlyLN4ILw8azmLJTPRFPjie6QAhDn7QzfbsWi_lY9bnwrFO7vabmDBD7g&_nc_zt=23&_nc_ht=scontent.fcai23-1.fna&_nc_gid=krluAMjeAoNu5bXTUun1Qw&oh=00_AfXJOA3FoFBnGB2VFMisTH7J2oytQVLK0c00Hgl0tIgSpA&oe=68A3A657",
    "https://scontent.fcai23-1.fna.fbcdn.net/v/t39.30808-6/505381820_1143769871102212_5042111772181850249_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=F8CVwd9h9TIQ7kNvwGS8NkI&_nc_oc=Adm7OYStfTpSjnlbA5LJstBdQi5jQzz-hXsEIKFdn8Zkxy7e-BhK2bOInMf7G5x5vjA&_nc_zt=23&_nc_ht=scontent.fcai23-1.fna&_nc_gid=SzEK8tlZ4ymemDOhdjRMig&oh=00_AfWXl2kgGWN2gBNh9YRFVj42dbPihwtbnN_1AWtR6YXxWA&oe=68A3A319",
    "https://scontent.fcai23-1.fna.fbcdn.net/v/t39.30808-6/495378761_1118696430276223_1103648581154619378_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=MdNpMkZ6KjgQ7kNvwEXDGTP&_nc_oc=Adn5CyrnERn44vEAod6h2uOb5XvYeTHrVw4hztjHqgk0mMqUSZbHTcq5xeJ6Oe8u1iw&_nc_zt=23&_nc_ht=scontent.fcai23-1.fna&_nc_gid=lPJ_JNAlk3_gVZNcA9Tu5Q&oh=00_AfU05_YVPZCSxz0YzSkBlUPhuajSglzUXhmObUS2G9R-yw&oe=68A3C208",
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
        <div className="text-white">
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
