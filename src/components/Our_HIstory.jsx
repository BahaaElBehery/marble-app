import { useTranslation } from "react-i18next";

const Our_HIstory = () => {
  const { t } = useTranslation("common"); // هنربطه بملف history.json

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#8b683e] mb-4">
          {t("history.title")}
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">{t("history.desc")}</p>
      </div>

      {/* Timeline */}
      <div className="relative border-l-4 border-[#8b683e] max-w-4xl mx-auto ">
        {/* 1 */}
        <div className="mb-10 ml-8">
          <div className="absolute -left-[11px] w-6 h-6 bg-[#8b683e] rounded-full border-4 border-white"></div>
          <h3 className="text-xl font-bold text-[#5e4426]">
            {t("timeline.2005.year")}
          </h3>
          <p className="text-gray-300">{t("timeline.2005.text")}</p>
        </div>

        {/* 2 */}
        <div className="mb-10 ml-8">
          <div className="absolute -left-[11px] w-6 h-6 bg-[#8b683e] rounded-full border-4 border-white"></div>
          <h3 className="text-xl font-bold text-[#5e4426]">
            {t("timeline.2012.year")}
          </h3>
          <p className="text-gray-300">{t("timeline.2012.text")}</p>
        </div>

        {/* 3 */}
        <div className="mb-10 ml-8">
          <div className="absolute -left-[11px] w-6 h-6 bg-[#8b683e] rounded-full border-4 border-white"></div>
          <h3 className="text-xl font-bold text-[#5e4426]">
            {t("timeline.2023.year")}
          </h3>
          <p className="text-gray-300">{t("timeline.2023.text")}</p>
        </div>
      </div>
    </section>
  );
};

export default Our_HIstory;
