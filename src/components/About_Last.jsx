import { useTranslation } from "react-i18next";
import { Link } from "react-router";

const About_Last = () => {
  const { t } = useTranslation("common"); // ربط الترجمة بالملف

  return (
    <section className="relative w-full py-20 bg-black text-center overflow-hidden">
      {/* خلفية */}
      <div className="absolute inset-0">
        <img
          src="/Cat-Marble/398895503_743073657838504_4425152943727048820_n.jpg"
          alt="Marble Background"
          loading="lazy"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {t("about-last.title")}
        </h2>
        <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
          {t("about-last.desc")}
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <Link to={"https://wa.me/201031618693"} target="_blank">
            <button className="bg-[#8b683e] hover:bg-[#a68452] text-white px-8 py-4 text-lg rounded-2xl shadow-lg transition">
              {t("about-last.btn_quote")}
            </button>
          </Link>
          <Link to={"https://wa.me/201031618693"} target="_blank">
            <button className="bg-transparent border border-[#8b683e] hover:bg-[#8b683e] hover:text-white text-[#8b683e] px-8 py-4 text-lg rounded-2xl transition">
              {t("about-last.btn_contact")}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About_Last;
