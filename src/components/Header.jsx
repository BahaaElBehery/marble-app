import { Link } from "react-router";
import { useState, useEffect, useRef } from "react";

const Header = () => {
  const [popup, setPopup] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setPopup(!popup);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setPopup(false);
        setIsOpen(false);
      }
    }

    if (popup) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [popup]);

  return (
    <header className="fixed top-0 mx-auto max-w-[1920px] right-0 left-0 grid grid-cols-6 bg-black/50 w-full max-xl:w-screen p-2 gap-0 *:flex *:items-center xl:*:justify-evenly z-50">
      {/* Left links */}
      <div className="col-span-2 max-xl:hidden">
        <Link
          to="/categories"
          className="transition-all duration-500 hover:scale-125 hover:font-bold text-xl"
        >
          Categories
        </Link>
        <Link
          to="/collections"
          className="transition-all duration-500 hover:scale-125 hover:font-bold text-xl"
        >
          Collections
        </Link>
      </div>

      {/* Middle - Burger and Logo */}
      <div className="col-span-2 max-xl:col-span-full flex items-center max-xl:px-20 max-sm:px-5 justify-between w-full max-xl:flex-row-reverse">
        {/* Burger Button */}
        <button
          onClick={toggleMenu}
          className="relative cursor-pointer text-[20px] hidden max-xl:flex select-none z-50"
        >
          <div className="relative w-[1.3em] h-[1.3em]">
            <span
              className={`absolute w-8 h-0.5 bg-white left-0 transition-all duration-300 ease-in-out
                ${isOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-[10%]"}`}
            ></span>
            <span
              className={`absolute w-8 h-0.5 bg-white left-0 transition-all duration-300 ease-in-out
                ${isOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "top-1/2"}`}
            ></span>
            <span
              className={`absolute w-8 h-0.5 bg-white left-0 transition-all duration-300 ease-in-out
                ${isOpen ? "translate-x-[-50px] opacity-0" : "top-[90%]"}`}
            ></span>
          </div>
        </button>

        {/* Popup Nav */}
        {popup && (
          <div className="fixed top-0 left-0 w-screen h-screen bg-black/60 flex items-center justify-center z-40">
            <div
              ref={popupRef}
              className="flex flex-col items-center justify-center gap-10"
            >
              <Link
                to="/categories"
                className="transition-all duration-500 hover:scale-125 hover:font-bold text-2xl max-sm:text-xl"
              >
                Categories
              </Link>
              <Link
                to="/collections"
                className="transition-all duration-500 hover:scale-125 hover:font-bold text-2xl max-sm:text-xl"
              >
                Collections
              </Link>
              <Link
                to="/about-us"
                className="transition-all duration-500 hover:scale-125 hover:font-bold text-2xl max-sm:text-xl"
              >
                About Us
              </Link>
              <Link
                to="/contact-us"
                className="transition-all duration-500 hover:scale-125 hover:font-bold text-2xl max-sm:text-xl"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}

        {/* Logo */}
        <Link to="/">
          <h1
            className="uppercase text-center font-bold text-2xl max-lg:text-xl max-sm:text-base text-white"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            <span>El Behery</span>
            <br />
            <span className="text-gray-200">Marble & Granite</span>
          </h1>
        </Link>
      </div>

      {/* Right links */}
      <div className="col-span-2 max-xl:hidden">
        <Link
          to="/about-us"
          className="transition-all duration-500 hover:scale-125 hover:font-bold text-xl"
        >
          About Us
        </Link>
        <Link
          to="/contact-us"
          className="transition-all duration-500 hover:scale-125 hover:font-bold text-xl"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
};

export default Header;
