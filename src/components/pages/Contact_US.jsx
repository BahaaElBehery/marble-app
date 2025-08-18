import Header from "../Header";
import Footer from "../Footer";

import Contact_Hero from "../Contact_Hero";
import ContactDetails from "../ContactDetails";
import ContactSplit from "../ContactSplit";

const Contact_US = () => {
  return (
    <div className="w-full min-h-screen">
      <Header />
      <Contact_Hero />
      <ContactDetails />
      <ContactSplit />
      <Footer />
    </div>
  );
};

export default Contact_US;
