import { useState } from "react";
import collections from "../json/collections.json";
import Header from "../Header";
import Footer from "../Footer";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Collections = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const { t } = useTranslation("common");
  return (
    <>
      {/* ✅ الهيدر */}
      <Header />
      <div className="min-h-screen flex flex-col mt-20">
        {/* ✅ العنوان */}
        <div className="text-center mt-16 mb-10">
          <h1 className="text-5xl font-extrabold tracking-wide text-white">
            {t("collect.title")}
          </h1>
          <p className="mt-3 text-gray-400 px-5 text-lg max-w-2xl mx-auto">
            {t("collect.desc")}
          </p>
        </div>

        {/* ✅ جاليري الصور */}
        <div className="w-11/12 max-w-[1600px] mx-auto grid grid-cols-3 gap-6 max-xl:grid-cols-2 max-md:grid-cols-1 mb-16">
          {collections.map((item) => (
            <motion.div
              key={item.id}
              className="relative overflow-hidden rounded-2xl shadow-md group cursor-pointer"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedImg(item.img)}
            >
              <img
                src={item.img}
                loading="lazy"
                alt={`collection-${item.id}`}
                className="w-full h-[400px] object-cover object-center bg-center group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <span className="text-white text-xl font-semibold tracking-wide">
                  View
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ✅ الفوتر */}

        {/* ✅ Lightbox (تكبير الصورة) */}
        {selectedImg && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setSelectedImg(null)}
          >
            <motion.img
              src={selectedImg}
              alt="Selected"
              className="max-w-[90%] max-h-[85%] rounded-xl shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Collections;
