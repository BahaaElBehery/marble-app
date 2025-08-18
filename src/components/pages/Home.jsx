import { useState, useRef } from "react";
import Header from "../Header";
import Swee from "../swiper";
import Attractive from "../Attractive";
import Inspir from "../Inspir";
import Footer from "../Footer";
import WeOfferd from "../WeOfferd";
import DiscoverSec from "../DiscoverSec";
import ServicesSection from "../ServicesSection";

const Home = () => {
  const [contextMenuVisible, setContextMenuVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const excludedRef = useRef(null);

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
      <div ref={excludedRef}>
        <Header />
        <Swee />
        <DiscoverSec />
        <Attractive />
        <WeOfferd />
        <ServicesSection />
        <Inspir />
        <Footer />
        {/*  */}
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

export default Home;
