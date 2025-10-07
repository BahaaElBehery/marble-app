import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ContactSplit = () => {
  const { t } = useTranslation("common");

  return (
    <section className="bg-black text-white py-24 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            {t("contactSplit.title")}{" "}
            <span className="text-[#8b683e]">
              {t("contactSplit.highlight")}
            </span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            {t("contactSplit.desc")}
          </p>
        </motion.div>

        {/* Image / Map */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className=" overflow-hidden shadow-2xl"
        >
          <img
            src="/Cat-Marble/395214030_735420648603805_4116836545853409728_n.jpg"
            alt="El Behery Marble"
            loading="lazy"
            className="w-full h-[400px] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSplit;
