import { useTranslation } from "react-i18next";
import { Link } from "react-router";

const About_Last = () => {
  const { t } = useTranslation("common"); // ربط الترجمة بالملف

  return (
    <section className="relative w-full py-20 bg-black text-center overflow-hidden">
      {/* خلفية */}
      <div className="absolute inset-0">
        <img
          src="https://scontent.fcai26-1.fna.fbcdn.net/v/t39.30808-6/528042979_1188050820007450_6161584392048173844_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=luMDRvX7iFcQ7kNvwFkvZ2g&_nc_oc=AdkIdj3xWN19alpqDssHII9D-_au-4G8I5ApNcUmF9GVEXfE-KzvSm6R3PugloA9K_A&_nc_zt=23&_nc_ht=scontent.fcai26-1.fna&_nc_gid=F1o112yMDqOjKMImybGUeg&oh=00_AfW7b13EmPjmvmjG0u9cBzan2ZTEg9D1S-SZmhhjmfCBbg&oe=68A6739E"
          alt="Marble Background"
          className="w-full h-full object-cover opacity-20"
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
