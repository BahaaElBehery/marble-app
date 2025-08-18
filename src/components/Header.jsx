import { Link } from "react-router";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

const MarbleHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const drawerRef = useRef(null);
  const { t, i18n } = useTranslation();

  const linksLeft = [
    { to: "/categories", label: t("categories") },
    { to: "/collections", label: t("collections") },
  ];

  const linksRight = [
    { to: "/about-us", label: t("aboutUs") },
    { to: "/contact-us", label: t("contactUs") },
  ];

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-lg border-b border-white/10"
        dir={i18n.language === "ar" ? "rtl" : "ltr"}
      >
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between lg:justify-center relative">
          {/* Left Nav */}
          <nav className="hidden lg:flex items-center gap-8 absolute left-6">
            {linksLeft.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-white hover:text-yellow-400 transition-all text-lg font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Logo */}
          <Link to="/" className="text-center">
            <h1 className="text-white text-2xl font-bold uppercase tracking-widest">
              El Behery
              <span className="block text-sm text-gray-300 font-light">
                {t("marbleGranite")}
              </span>
            </h1>
          </Link>

          {/* Right Nav */}
          <nav
            className="hidden lg:flex items-center gap-8 absolute right-6"
            dir="ltr"
          >
            {linksRight.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-white hover:text-yellow-400 transition-all text-lg font-medium"
              >
                {link.label}
              </Link>
            ))}

            <span className="w-[0.2px] rounded-full h-8 bg-slate-300"></span>

            {/* Language Switcher */}
            <div className="flex items-center gap-3">
              {i18n.language === "en" ? (
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg"
                  alt="Arabic"
                  className="w-8 h-6 cursor-pointer object-contain bg-center  transition"
                  onClick={() => i18n.changeLanguage("ar")}
                />
              ) : (
                <img
                  src="https://cdn.britannica.com/33/4833-050-F6E415FE/Flag-United-States-of-America.jpg"
                  alt="English"
                  className="w-8 h-6 cursor-pointer object-cover  transition"
                  onClick={() => i18n.changeLanguage("en")}
                />
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <aside
        ref={drawerRef}
        className={`fixed top-0 left-0 h-full w-72 bg-black text-white p-6 z-50 transform transition-transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-xl font-bold">{t("menu")}</h2>
          <button onClick={() => setMenuOpen(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6l12 12M18 6l-12 12"
              />
            </svg>
          </button>
        </div>

        {[...linksLeft, ...linksRight].map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="block py-2 text-lg hover:text-yellow-400 transition-all"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        {/* Language Switcher */}
        <div className="flex flex-col gap-5 items-center justify-center mt-5">
          <span className="bg-slate-200 w-[80%] h-[0.5px]"></span>
          {i18n.language === "en" ? (
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg"
              alt="Arabic"
              className="w-8 h-6 cursor-pointer object-contain bg-center  transition"
              onClick={() => i18n.changeLanguage("ar")}
            />
          ) : (
            <img
              src="https://cdn.britannica.com/33/4833-050-F6E415FE/Flag-United-States-of-America.jpg"
              alt="English"
              className="w-8 h-6 cursor-pointer object-cover  transition"
              onClick={() => i18n.changeLanguage("en")}
            />
          )}
        </div>
      </aside>
    </>
  );
};

export default MarbleHeader;
