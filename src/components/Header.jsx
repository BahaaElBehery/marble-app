import { Link } from "react-router";
import { useState, useEffect, useRef } from "react";
const Header = () => {
  const [popup, setPopup] = useState(false);

  const popupRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setPopup(false);
      }
    }

    if (popup) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [popup]);

  return (
    <header className="fixed top-0  max-xl:right-auto grid  grid-cols-6  bg-black/20 w-full  max-xl:w-screen p-2 gap-0 *:flex *:items-center xl:*:justify-evenly z-50">
      {/* Categories */}
      <div className="col-span-2 max-xl:hidden">
        <Link
          to="/categories"
          className="transition-all duration-500 hover:scale-125 hover:font-bold text-2xl"
        >
          Categories
        </Link>
        <Link
          to="/collections"
          className="transition-all duration-500 hover:scale-125 hover:font-bold text-2xl"
        >
          Collections
        </Link>
      </div>

      {/* Responsive */}
      <div className="col-span-2 max-xl:col-span-full flex items-center max-xl:px-20 max-sm:px-5 justify-between w-full max-xl:flex-row-reverse">
        {/* أيقونة الهامبرغر */}
        <button className="hidden max-xl:flex" onClick={() => setPopup(true)}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
          >
            <path
              d="M4 6H20"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M4 12H20"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M4 18H20"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {popup && (
          <div className="fixed top-0 left-0 w-screen h-screen bg-black/60  flex items-center justify-center">
            <div
              className="flex flex-col items-center justify-center gap-10"
              ref={popupRef}
            >
              <Link
                to="/categories"
                className="transition-all duration-500 hover:scale-125 hover:font-bold text-2xl"
              >
                Categories
              </Link>
              <Link
                to="/collections"
                className="transition-all duration-500 hover:scale-125 hover:font-bold text-2xl"
              >
                Collections
              </Link>
              <Link
                to="/about-us"
                className="transition-all duration-500 hover:scale-125 hover:font-bold text-2xl"
              >
                About Us
              </Link>
              <Link
                to=""
                className="transition-all duration-500 hover:scale-125 hover:font-bold text-2xl"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
        {/* الشعار */}
        <Link to="/">
          <h1
            className="uppercase text-center font-bold text-3xl max-lg:text-xl max-sm:text-base text-white"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            <span>El Behery</span>
            <br />
            <span className="text-gray-200">Marble & Granite</span>
          </h1>
        </Link>
      </div>

      {/* About Us */}
      <div className="col-span-2 max-xl:hidden">
        <Link
          to="/about-us"
          className="transition-all duration-500 hover:scale-125 hover:font-bold text-2xl"
        >
          About Us
        </Link>
        <Link
          to="/contact-us"
          className="transition-all duration-500 hover:scale-125 hover:font-bold text-2xl"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
};

export default Header;
