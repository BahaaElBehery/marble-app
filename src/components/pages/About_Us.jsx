import Our_HIstory from "../AboutUsComponents/Our_HIstory";

import FistSec from "../AboutUsComponents/FistSec";
import About_Fourth from "../AboutUsComponents/About_Fourth";
import About_Last from "../AboutUsComponents/About_Last";

const AboutUs = () => {
  const handleContextMenu = (e) => {
    e.preventDefault(); // تمنع الكليك اليمين فقط بدون أي رسالة
  };

  return (
    <div onContextMenu={handleContextMenu} className="w-full">
      <FistSec />
      <Our_HIstory />
      <About_Fourth />
      <About_Last />
    </div>
  );
};

export default AboutUs;
