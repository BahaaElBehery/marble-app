import { useTranslation } from "react-i18next";

const WeOfferd = () => {
  const { t } = useTranslation("common"); // namespace = weOffer.json

  const images = [
    "/imgs/we-1.jpg",
    "/imgs/we-2.jpg",
    "/imgs/we3.jpg",
    "/imgs/we4.jpg",
    "/imgs/we5.jpg",
    "/imgs/we6.jpg",
    "/imgs/we7.jpg",
    "/imgs/we8.jpg",
    "/imgs/we9.jpg",
  ];

  return (
    <section className="max-w-[1920px] mx-auto py-16">
      <div className=" mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">
            {t("weOffer.title")}
          </h2>
          <p className="text-white mt-3">{t("weOffer.description")}</p>
        </div>

        {/* Masonry Style */}
        <div
          className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4"
          dir="ltr"
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              loading="lazy"
              alt={`Marble ${index + 1}`}
              className="w-full rounded-lg shadow-lg hover:opacity-90 hover:scale-[1.02] transition-transform duration-500"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeOfferd;
