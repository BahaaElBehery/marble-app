import { useState, useRef } from "react";
import Header from "./components/Header";
import Swee from "./components/swiper";
import Attractive from "./components/Attractive";
import Inspir from "./components/Inspir";
import Footer from "./components/Footer";
import WeOfferd from "./components/WeOfferd";
import DiscoverSec from "./components/DiscoverSec";
const App = () => {
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
        <Attractive
          classOrderImg="order-2 flex items-center justify-center"
          classOrderText="grid grid-cols-2 max-xl:grid-cols-1 gap-5 order-1"
          heading="Marble A Timeless Symbol of Elegance"
          a1="Marble is one of the most beautiful natural stones, admired and used by civilizations for centuries in architecture and art. Its unique colors and intricate patterns bring a touch of luxury and sophistication to any space. Known for its durability and versatility, marble is widely used in flooring"
          a2="ElBehery Marble is one of Egypt’s finest natural stones, known for its elegant white and light gray tones with subtle veining."
          a3="Its smooth texture and refined appearance make it ideal for flooring, wall cladding, countertops, and decorative elements."
          MyImg="/imgs/Atractive.jpg"
        />
        <Attractive
          classOrderImg="order-1 flex items-center justify-center"
          classOrderText="grid grid-cols-2 gap-5 order-2"
          heading="ElBehery Marble Egypt’s Icon of Natural Beauty"
          a1="ElBehery Marble stands out as one of Egypt’s most distinguished natural stones, valued for its sophisticated white and light gray hues with delicate veining. Extracted from the El Beheira region, this marble has been a staple in architectural and interior designs for centuries."
          a2="Its smooth, polished surface and exceptional durability make it a preferred choice for flooring, wall cladding, countertops, and decorative applications"
          a3="ElBehery Marble adds a sense of timeless elegance, making it a sought-after material for luxury projects worldwide Whether used in classic or contemporary spaces"
          MyImg="/imgs/Atractive-2.jpg"
        />
        <Inspir />
        <WeOfferd />
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

export default App;
