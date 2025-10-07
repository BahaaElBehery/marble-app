import Contact_Hero from "../ContactUsComponents/Contact_Hero";
import ContactDetails from "../ContactUsComponents/ContactDetails";
import ContactSplit from "../ContactUsComponents/ContactSplit";

const Contact_US = () => {
  return (
    <div className="w-full min-h-screen">
      <Contact_Hero />
      <ContactDetails />
      <ContactSplit />
    </div>
  );
};

export default Contact_US;
