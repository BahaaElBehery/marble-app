import { useTranslation } from "react-i18next";

const FistSec = () => {
  const { t } = useTranslation("common");

  return (
    <section className="relative py-16 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* النص */}
        <div className="space-y-6 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-[#8b683e] leading-tight">
            {t("about.title")}{" "}
            <span className="text-[#5e4426]">{t("about.highlight")}</span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            {t("about.desc1")}
          </p>
          <p className="text-gray-300">{t("about.desc2")}</p>
        </div>

        {/* الصورة */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src="/Cat-Marble/292893895_1416444868854584_110538062407337570_n.jpg"
              alt={t("alt")}
              loading="lazy"
              className="w-full h-[350px] object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FistSec;
