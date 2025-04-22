import { Link } from "react-router";
import { useState } from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // رقم هاتف الواتساب الخاص بك (بدون +)
    const phoneNumber = "201115374045"; // ضع رقمك هنا

    // صياغة الرسالة
    const textMessage = ` Hi Im ${formData.name}.\n I Have A Complaint Regarding:\n${formData.message}`;

    // تحويل النص إلى رابط WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      textMessage
    )}`;

    // فتح WhatsApp مع الرسالة
    window.open(whatsappURL, "_blank");

    // إعادة تعيين النموذج بعد الإرسال
    setFormData({ name: "", message: "" });
  };

  const baseClass =
    "w-[90px] h-[90px] outline-none border-none bg-white shadow-md transition-transform duration-200 ease-in-out cursor-pointer flex items-center justify-center";

  return (
    <div className="w-11/12 max-w-[1920px] mx-auto bg-slate-200 max-xl:px-10 grid grid-cols-5 max-xl:grid-cols-4  text-black py-10 mt-10 rounded-t-2xl">
      <div className="col-span-2 flex flex-col items-center justify-center max-sm:col-span-full">
        <Link to={`/`} className="text-center capitalize">
          <span className="text-5xl font-black">ElBehery</span>
          <br />
          <span className="text-xl text-gray-600 font-light">
            Marble & Granite
          </span>
        </Link>
        <div className="flex items-center justify-center mt-5">
          <div className="flex gap-4">
            <a href="https://www.facebook.com/profile.php?id=100010377245567">
              <button
                className={`${baseClass} w-[60px] h-[60px] rounded-full flex items-center justify-center hover:scale-110 hover:bg-[#1877f2] group`}
              >
                <FaFacebook className="w-[30px] h-[30px] text-[#1877f2] group-hover:text-white transition-colors duration-200" />
              </button>
            </a>

            <a href="https://www.instagram.com/bahaa_el_behery/">
              <button
                className={`${baseClass} w-[60px] h-[60px] rounded-full flex items-center justify-center hover:scale-110 hover:bg-[#cc39a4] group`}
              >
                <FaInstagram className="w-[30px] h-[30px] text-[#cc39a4] group-hover:text-white transition-colors duration-200" />
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Section 2 - Navigation Links */}
      <div className="max-xl:col-span-2 max-sm:col-span-full flex flex-col max-xl:items-center max-xl:justify-center justify-evenly text-lg space-y-3 max-sm:mt-20 *:max-sm:text-xl *:w-fit">
        <Link to="/categories" className="hover:underline">
          Categories
        </Link>
        <Link to="/collections" className="hover:underline">
          Collections
        </Link>
        <Link to="/about-us" className="hover:underline">
          About Us
        </Link>
        <Link to="/contact-us" className="hover:underline">
          Contact Us
        </Link>
      </div>

      {/* Section 3 - Complaint Form */}
      <div className="col-span-2 max-xl:col-span-full">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col max-xl:items-center max-xl:justify-center max-xl:mt-20"
        >
          <label htmlFor="name" className="text-xl">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="px-5 py-3 outline-none border rounded-md mt-3 w-[50%] max-sm:w-[80%]"
          />

          <label htmlFor="message" className="mt-5 text-xl">
            Your Inquiry
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="If you have any complaints regarding the company, please let us know."
            required
            className="px-5 py-3 outline-none border rounded-md mt-3 w-[80%] max-sm:w-full max-h-24 max-sm:h-40"
          />

          <button
            type="submit"
            className="mt-5 bg-green-600 text-white px-5 py-3 rounded-lg hover:bg-green-700 w-fit mx-auto cursor-pointer"
          >
            Send Massage On WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
