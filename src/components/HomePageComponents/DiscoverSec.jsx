import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const DiscoverSec = () => {
  const { t } = useTranslation();

  const marbleImages = [
    "/Discover/488601933_1092382956240904_166858096221205884_n.jpg",
    "/Discover/488714250_1093126709499862_1945659169369734458_n.jpg",
    "/Discover/489020857_1093127796166420_6356385709623124255_n.jpg",
    "/Discover/489282264_1093127709499762_1224816137638407593_n.jpg",
  ];

  return (
    <section className="w-11/12 max-w-[1920px] mx-auto py-16 px-6">
      <div className="grid lg:grid-cols-1 gap-10 items-center">
        {/* النص */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold max-sm:text-2xl dark:text-gray-100">
            {t("discoverSec.title")}
          </h2>
          <p className="mt-4 max-sm:text-xs text-gray-300 dark:text-gray-300 leading-relaxed">
            {t("discoverSec.description")}
          </p>
        </motion.div>

        {/* الصور */}
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4" dir="ltr">
          {marbleImages.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt={`Marble ${index + 1}`}
              className="rounded-lg object-cover w-full h-48 sm:h-56 md:h-64 lg:h-72 shadow-lg"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverSec;
