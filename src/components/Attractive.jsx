import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Attractive = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // detect if screen is mobile
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const handleClick = (index) => {
    if (isMobile) {
      setActiveIndex(activeIndex === index ? null : index);
    }
  };

  const marblePlaces = [
    {
      src: "/imgs/sora-1.jpg",
      title: t("marblePlaces.luxuryHall"),
    },
    {
      src: "/imgs/sora-2.jpg",
      title: t("marblePlaces.modernKitchen"),
    },
    {
      src: "/imgs/sora-3.jpg",
      title: t("marblePlaces.elegantStairs"),
    },
    {
      src: "/imgs/sora-4.jpg",
      title: t("marblePlaces.premiumBathroom"),
    },
    {
      src: "/imgs/sora-5.jpg",
      title: t("marblePlaces.hotelLobby"),
    },
    {
      src: "/imgs/sora-6.jpg",
      title: t("marblePlaces.wallCladding"),
    },
  ];

  return (
    <section className="max-w-[1920px] mx-auto bg-black py-16 px-4 sm:px-8 ">
      <div>
        <h2 className="text-white text-3xl sm:text-4xl font-bold text-center mb-12">
          {t("attractiveSection.title")}
        </h2>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          dir="ltr"
        >
          {marblePlaces.map((place, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
                onClick={() => handleClick(index)}
              >
                <img
                  src={place.src}
                  alt={place.title}
                  loading="lazy"
                  className={`w-full h-64 object-cover transform transition-transform duration-500 
                    ${isActive ? "scale-110" : "group-hover:scale-110"}`}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent 
                    opacity-0 transition-opacity duration-500
                    ${isActive ? "opacity-100" : "group-hover:opacity-100"}`}
                ></div>
                <h3
                  className={`absolute bottom-4 left-4 text-white text-lg font-semibold 
                    opacity-0 transform translate-y-4 transition-all duration-500 py-3 ${
                      isMobile ? "py-5" : null
                    }
                    ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "group-hover:opacity-100 group-hover:translate-y-0"
                    }`}
                >
                  {place.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Attractive;
