import { Link } from "react-router";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation("common");
  const [formData, setFormData] = useState({ name: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "201031618693";
    const textMessage = `Hi, I'm ${formData.name}.\nMessage:\n${formData.message}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      textMessage
    )}`;
    window.open(whatsappURL, "_blank");
    setFormData({ name: "", message: "" });
  };

  return (
    <footer className=" max-w-[1920px] bg-black text-white py-14 px-6 mt-auto">
      <div className="mx-auto grid md:grid-cols-3 gap-12 max-w-6xl">
        {/* Logo & Social */}
        <div
          className={`${
            i18n.language === "ar"
              ? "flex flex-col items-center justify-start"
              : ""
          }`}
        >
          <h2 className="text-3xl font-bold tracking-wide text-yellow-500">
            {t("footer.title")}
          </h2>
          <p className="text-gray-400 mt-2">{t("footer.subtitle")}</p>

          <div className="flex gap-4 mt-5">
            <a
              href="https://www.facebook.com/profile.php?id=100010377245567"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-yellow-500 transition-colors"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.instagram.com/bahaa_el_behery/"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-yellow-500 transition-colors"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center gap-3">
          <h3 className="text-lg font-semibold text-yellow-500 mb-1">
            {t("footer.quickLinks")}
          </h3>
          <Link to="/categories" className="hover:text-yellow-400">
            {t("footer.categories")}
          </Link>
          <Link to="/collections" className="hover:text-yellow-400">
            {t("footer.collections")}
          </Link>
          <Link to="/about-us" className="hover:text-yellow-400">
            {t("footer.about")}
          </Link>
          <Link to="/contact-us" className="hover:text-yellow-400">
            {t("footer.contact")}
          </Link>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-500 mb-4">
            {t("footer.inquiry")}
          </h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="text"
              name="name"
              placeholder={t("footer.name")}
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-gray-800 p-3 rounded-md outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <textarea
              name="message"
              placeholder={t("footer.message")}
              value={formData.message}
              onChange={handleChange}
              required
              rows="3"
              className="bg-gray-800 p-3 rounded-md outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
            />
            <button
              type="submit"
              className="bg-yellow-500 text-black font-semibold py-3 rounded-md hover:bg-yellow-400 transition-colors"
            >
              {t("footer.send")}
            </button>
          </form>
        </div>
      </div>

      {/* الحقوق */}
      <div className="text-center text-gray-500 text-sm mt-12 border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} ElBehery Marble. {t("footer.rights")}
      </div>
    </footer>
  );
};

export default Footer;
