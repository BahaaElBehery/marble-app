import Header from "./Header";
import { useState, useRef } from "react";
import CatMarble from "./json/categoriesMarble.json";
import CatGranite from "./json/Granite.json";
import { useParams } from "react-router";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const ViewMarble = () => {
  const { viewmarble } = useParams();
  const [contextMenuVisible, setContextMenuVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const excludedRef = useRef(null);
  const { i18n } = useTranslation("");
  // tilt state
  const [tiltStyle, setTiltStyle] = useState({});

  const selectedMarble = CatMarble.concat(CatGranite).find(
    (e) => e.id.toString() === viewmarble
  );

  const handleContextMenu = (e) => {
    e.preventDefault();
    if (excludedRef.current && excludedRef.current.contains(e.target)) return;
    setPosition({ x: e.clientX, y: e.clientY });
    setContextMenuVisible(true);
  };

  const handleClick = () => {
    setContextMenuVisible(false);
  };

  // handle hover tilt
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 20; // زاوية أكبر
    const rotateY = ((x - centerX) / centerX) * -20;

    setTiltStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.08)`,
      transition: "transform 0.15s ease-out",
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: "rotateX(0deg) rotateY(0deg) scale(1)",
      transition: "transform 0.4s ease-out",
    });
  };

  if (!selectedMarble) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-black">
        <h2 className="text-5xl font-black text-white">Marble not found</h2>
      </div>
    );
  }

  return (
    <div
      onContextMenu={handleContextMenu}
      onClick={handleClick}
      className="h-screen w-screen bg-black text-white max-lg:overflow-auto py-36"
    >
      <div ref={excludedRef}>
        <Header />

        <div
          className="max-w-6xl mx-auto h-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          dir="ltr"
        >
          {/* الصورة */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="relative perspective-1000"
          >
            <div
              className="w-full h-[350px] max-sm:h-[300px] rounded-2xl  overflow-hidden"
              style={{
                transformStyle: "preserve-3d",
                ...tiltStyle,
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <motion.img
                src={selectedMarble?.img || selectedMarble?.image}
                alt={selectedMarble.title}
                className="w-full h-full object-cover bg-center"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* لمعة */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 hover:opacity-40 transition-opacity duration-300 pointer-events-none" />
            </div>
          </motion.div>

          {/* النص */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-4xl font-extrabold text-[#d4af7a]">
              {selectedMarble[i18n.language === "ar" ? "title2" : "title"]}
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              {
                selectedMarble[
                  i18n.language === "ar" ? "description2" : "description"
                ]
              }
            </p>

            <a
              href={`https://wa.me/201031618693?text=Hi I Have inquire For ${encodeURIComponent(
                selectedMarble.title
              )} Can You Give Me More Details`}
              target="_blank"
              className="w-fit"
              rel="noopener noreferrer"
            >
              <button className="flex items-center gap-3 px-8 py-3 cursor-pointer bg-[#25D366] text-black font-bold rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 animate-pulse">
                <FaWhatsapp size={22} />
                Inquire on WhatsApp
              </button>
            </a>
          </motion.div>
        </div>
      </div>

      {contextMenuVisible && (
        <div
          className="fixed bg-[#d4af7a] text-black w-72 p-3 rounded-lg shadow-lg transition-opacity duration-300"
          style={{ top: position.y, left: position.x }}
        >
          <h3 className="text-center font-semibold">
            ⚠️ Sorry, This Action Is Not Available
          </h3>
        </div>
      )}
    </div>
  );
};

export default ViewMarble;
