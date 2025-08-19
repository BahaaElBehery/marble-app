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
          className="rounded-2xl overflow-hidden shadow-2xl"
        >
          <img
            src="https://scontent.fcai26-1.fna.fbcdn.net/v/t39.30808-6/505675868_1143772601101939_3805707370655912499_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=nOqNiLb8Y2cQ7kNvwGWFyCh&_nc_oc=Admrq30P_iNZJNKWh57zy2XpnouHHT53Ws3ip_aezFATUPzWvf0V36xNkOVE1og503g&_nc_zt=23&_nc_ht=scontent.fcai26-1.fna&_nc_gid=PwWMm8lmzG38Y7vXFCUyzg&oh=00_AfX9gnTR39dhguUoQDdVmN8kerHbJGQTTb9voQOiMNKsPQ&oe=68A7A1BA"
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
