import { Phone, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const ContactDetails = () => {
  const { t } = useTranslation("common");

  const info = [
    {
      icon: <Phone className="w-7 h-7 text-[#8b683e]" />,
      title: t("contact.phone_title"),
      detail: t("contact.phone_detail"),
      link: "tel:+201031618693",
    },
    {
      icon: <MapPin className="w-7 h-7 text-[#8b683e]" />,
      title: t("contact.address_title"),
      detail: t("contact.address_detail"),
      link: "https://maps.app.goo.gl/NU3nNih9hrPqTSKT7",
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6 lg:px-20" dir="ltr">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 text-center">
        {info.map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-zinc-900/60 hover:bg-zinc-800 transition-all p-8 rounded-2xl shadow-lg flex flex-col items-center gap-4"
          >
            <div className="p-4 bg-[#8b683e]/10 rounded-full group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-300">{item.detail}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ContactDetails;
