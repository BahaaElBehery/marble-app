import Header from "../Header";
import { useState, useRef } from "react";
import Our_HIstory from "../Our_HIstory";
import Footer from "../Footer";
import FistSec from "../FistSec";

import About_Fourth from "../About_Fourth";
import About_Last from "../About_Last";

const AboutUs = () => {
  const [contextMenuVisible, setContextMenuVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const excludedRef = useRef(null); // مرجع للعناصر المستثناة

  const handleContextMenu = (e) => {
    e.preventDefault();

    if (excludedRef.current && excludedRef.current.contains(e.target)) {
      return;
    }
    setPosition({ x: e.clientX, y: e.clientY });
    setContextMenuVisible(true);
  };

  const handleClick = () => {
    setContextMenuVisible(false);
  };

  return (
    <div
      onContextMenu={handleContextMenu}
      onClick={handleClick}
      className="h-screen w-full"
    >
      {/* العناصر المستثناة */}
      <div ref={excludedRef}>
        <Header />
        <FistSec />

        <Our_HIstory />

        <About_Fourth />
        <About_Last />
        <Footer />

        {/*  */}
      </div>
      {contextMenuVisible && (
        <div
          className="fixed bg-blue-500 text-white w-60 p-3 rounded-lg shadow-lg transition-opacity duration-300"
          style={{ top: position.y, left: position.x }}
        >
          <h3 className="text-center font-bold">
            Sorry, This Action Is Not Available For You
          </h3>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
