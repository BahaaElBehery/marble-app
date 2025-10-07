import { motion } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const ContactHero = () => {
  const { t } = useTranslation("common");

  return (
    <section className="relative bg-black text-white py-24 mt-20 px-6 lg:px-20 overflow-hidden">
      {/* خلفية زخرفية */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#8b683e]/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#8b683e]/10 rounded-full blur-3xl"></div>
      </div>

      {/* المحتوى */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold tracking-wide"
          dangerouslySetInnerHTML={{ __html: t("contactHero.title") }}
        />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          {t("contactHero.description")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
          dir="ltr"
        >
          <a
            href="https://wa.me/+201031618693"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#8b683e] hover:bg-[#9c7a4c] text-white px-8 py-3 rounded-2xl font-medium shadow-lg transition-all"
            aria-label="Send a message on WhatsApp"
          >
            <FaWhatsapp className="text-xl" />
            {t("contactHero.buttons.message")}
          </a>
          <a
            href="tel:+201031618693"
            className="flex items-center justify-center gap-2 border border-[#8b683e] hover:bg-[#8b683e] px-8 py-3 rounded-2xl font-medium shadow-lg transition-all"
            aria-label="Call us"
          >
            <FaPhoneAlt className="text-lg" />
            {t("contactHero.buttons.call")}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
