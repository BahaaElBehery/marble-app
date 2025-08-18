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
              src="https://scontent.fcai26-1.fna.fbcdn.net/v/t39.30808-6/487940312_1088561349956398_1933730518627078367_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=gTSqfWWpag4Q7kNvwHvOonO&_nc_oc=AdkY6L_8XLh7Edkz1vwuBGUrsvEnygR5Van6J1TsbR6sLSkH6dEDG6jEJ-L6Bykdlec&_nc_zt=23&_nc_ht=scontent.fcai26-1.fna&_nc_gid=Vps3z2gQCiG9IfP7xI3NEQ&oh=00_AfUP0Y_bngXej2mBjgP0N354XaSEJBZpNRnNQpN-w-k67A&oe=68A63F76"
              alt={t("alt")}
              className="w-full h-[350px] object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FistSec;
