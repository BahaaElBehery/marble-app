import Header from "./Header";
import Footer from "../components/Footer";
import HearFromYou from "./HearFromYou";

const Contact_US = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/201115374045", "_blank");
  };

  return (
    <div className="w-full min-h-screen">
      <Header />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-11/12 mx-auto p-10">
        <div>
          <img
            src="/Cat-Marble/Contact.jpg"
            alt="Contact Illustration"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-6">Let{"'"}s Get In Touch</h2>
          <p className="text-lg mb-6">
            No forms, no hassle. Just reach out to us directly using any of the
            options below!
          </p>

          <div className="space-y-5">
            <button
              onClick={openWhatsApp}
              className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-600 transition cursor-pointer"
            >
              Chat on WhatsApp
            </button>
          </div>
        </div>
      </section>

      <section className="w-11/12 mx-auto px-10 mt-10">
        <h3 className="text-3xl font-bold mb-6">
          We Would Love To Hear From You
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <HearFromYou
            title="Instagram"
            paragraph="Visit Our Instagram Page"
            anchor="Instagram"
            link="https://instagram.com/"
            icon={null}
          />
          <HearFromYou
            title="Call Us Directly"
            paragraph="Available During Working Hours"
            anchor="+2 01115374045"
            link="tel:+201115374045"
            icon={null}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact_US;
