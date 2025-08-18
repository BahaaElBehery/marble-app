// // About_Fourth.jsx
// import { Swiper, SwiperSlide } from "swiper/react";
// import { FaQuoteLeft } from "react-icons/fa";
// import "swiper/css";
// // import "swiper/css/pagination";
// import { Autoplay } from "swiper/modules";

// const testimonials = [
//   {
//     name: "Mohamed Younes",
//     role: "Home Owner",
//     feedback:
//       "El Behery Marble transformed my living room with elegance and timeless beauty. Truly a masterpiece!",
//     image:
//       "https://scontent.fcai26-1.fna.fbcdn.net/v/t39.30808-6/513147625_1629827264370106_4302986907084790299_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=cPVywG97AdcQ7kNvwGZ20yr&_nc_oc=Adkc2_f7vs4YSqQrJHGKGML5CuJ7n63rlMHF3AzJB2QJCKdEaTRwaYYTrNHSqy2361I&_nc_zt=23&_nc_ht=scontent.fcai26-1.fna&_nc_gid=zxiBif58JgGb3deEmxKDCg&oh=00_AfUdl19HgZeA0jqWkbxBNDf8iS9rM4MOrSwEaWExM2G9dA&oe=68A64D09",
//   },
//   {
//     name: "Wasim Badr",
//     role: "Interior Designer",
//     feedback:
//       "Working with El Behery was a smooth experience. Their quality and attention to detail are unmatched.",
//     image:
//       "https://scontent.fcai26-1.fna.fbcdn.net/v/t39.30808-6/487073541_2445298205816080_9096414384228781440_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=Xs7HDo7LjmEQ7kNvwFVqcal&_nc_oc=Adn78eKRCetgfcJlhgrra25VUsOAeuvw87hhVjYUVR5ZRCRp8i8OI1sxyDDsQTrAP_E&_nc_zt=23&_nc_ht=scontent.fcai26-1.fna&_nc_gid=3FMn--MXk3dhbNPvxAM_AQ&oh=00_AfV7R-_U81rk5R526HzPPlaZHDu3aqIO0h8HhSYYWMgoqA&oe=68A63FA7",
//   },
//   {
//     name: "Omar Hossam",
//     role: "Contractor",
//     feedback:
//       "Reliable, premium quality, and always on time. They are my go-to for all marble projects.",
//     image:
//       "https://scontent.fcai26-1.fna.fbcdn.net/v/t39.30808-6/481078210_1379030823254713_3592474089106136915_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=3eI28LkiiJoQ7kNvwEkeYeh&_nc_oc=AdnY5eDpwWz__mPS5jVNP3vDALIhrMOndWkiA40aUIEqb7GbittJlyr-wY2hIlLa9pg&_nc_zt=23&_nc_ht=scontent.fcai26-1.fna&_nc_gid=Fvi8dIvbwtxn9T3wKwR8uw&oh=00_AfWpCabAl8HrAAMs4ukrh7HNENs1FrHgh8JBl_Hfa0oslg&oe=68A66F25",
//   },
// ];

// const About_Fourth = () => {
//   return (
//     <section className="w-full py-20 bg-black">
//       <div className="max-w-5xl mx-auto px-6 text-center">
//         <h2 className="text-4xl font-bold text-white mb-4">
//           What Our Clients Say
//         </h2>
//         <p className="text-gray-400 max-w-2xl mx-auto mb-12">
//           Our reputation is built on trust and excellence. Here’s what our
//           clients have to say about working with us.
//         </p>

//         <Swiper
//           modules={[Autoplay]}
//           spaceBetween={30}
//           slidesPerView={1}
//           loop={true}
//           autoplay={{ delay: 4000 }}
//           pagination={{ clickable: true }}
//           className="pb-10"
//         >
//           {testimonials.map((t, i) => (
//             <SwiperSlide key={i}>
//               <div className="bg-[#111] rounded-2xl shadow-lg p-8 flex flex-col items-center gap-4 max-w-xl mx-auto">
//                 <img
//                   src={t.image}
//                   alt={t.name}
//                   className="w-20 h-20 rounded-full object-cover object-center bg-center border-4 border-[#8b683e]"
//                 />
//                 <FaQuoteLeft className="text-[#8b683e] text-3xl" />
//                 <p className="text-gray-300 italic leading-relaxed">
//                   “{t.feedback}”
//                 </p>
//                 <h4 className="font-semibold text-white">{t.name}</h4>
//                 <span className="text-sm text-gray-400">{t.role}</span>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default About_Fourth;

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
