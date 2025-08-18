import { useTranslation } from "react-i18next";
import { FaGem, FaCogs, FaDraftingCompass, FaShieldAlt } from "react-icons/fa";

const Inspir = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <FaGem className="text-5xl text-yellow-500 mb-4" />,
      title: t("inspir.features.luxury.title"),
      desc: t("inspir.features.luxury.desc"),
    },
    {
      icon: <FaDraftingCompass className="text-5xl text-yellow-500 mb-4" />,
      title: t("inspir.features.design.title"),
      desc: t("inspir.features.design.desc"),
    },
    {
      icon: <FaCogs className="text-5xl text-yellow-500 mb-4" />,
      title: t("inspir.features.craft.title"),
      desc: t("inspir.features.craft.desc"),
    },
    {
      icon: <FaShieldAlt className="text-5xl text-yellow-500 mb-4" />,
      title: t("inspir.features.quality.title"),
      desc: t("inspir.features.quality.desc"),
    },
  ];

  return (
    <section className="max-w-[1920px] mx-auto bg-gradient-to-b from-gray-900 to-black text-white py-16 px-6">
      <div className="mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-yellow-500">
          {t("inspir.title")}
        </h2>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          {t("inspir.description")}
        </p>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        dir="ltr"
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:shadow-yellow-500/40 hover:-translate-y-2 transform transition duration-300"
          >
            {feature.icon}
            <h3 className="text-xl font-semibold text-yellow-500">
              {feature.title}
            </h3>
            <p className="text-gray-400 mt-2">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Inspir;
