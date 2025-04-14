import Header from "./Header";
import { useState, useRef } from "react";

import CatMarble from "./json/categoriesMarble.json";
import CatGranite from "./json/Granite.json";
import { useParams } from "react-router";
const ViewMarble = () => {
  const { viewmarble } = useParams();
  const [contextMenuVisible, setContextMenuVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const excludedRef = useRef(null); // مرجع للعناصر المستثناة
  const selectedMarble = CatMarble.concat(CatGranite).find(
    (e) => e.id.toString() === viewmarble
  );

  const handleContextMenu = (e) => {
    e.preventDefault();

    // تحقق مما إذا كان العنصر المستهدف داخل العناصر المستثناة
    if (excludedRef.current && excludedRef.current.contains(e.target)) {
      return; // لا تفعل شيئًا إذا كان داخل العناصر المستثناة
    }

    setPosition({ x: e.clientX, y: e.clientY });
    setContextMenuVisible(true);
  };

  const handleClick = () => {
    setContextMenuVisible(false); // إخفاء القائمة عند النقر في أي مكان
  };

  if (!selectedMarble) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <h2 className="text-5xl font-black">Marble not found</h2>
      </div>
    );
  }

  return (
    <div
      onContextMenu={handleContextMenu}
      onClick={handleClick}
      className="h-screen w-full"
    >
      {/* العناصر المستثناة */}
      <div ref={excludedRef}>
        <Header />
        <div className="w-screen h-screen z-50 flex flex-col items-center justify-center">
          <h2 className="text-4xl max-sm:text-3xl">{selectedMarble.title}</h2>

          <img
            src={selectedMarble?.img || selectedMarble?.image}
            alt=""
            className="w-52 py-8 rounded-md max-lg:w-40"
          />

          <p className="px-10 text-lg max-sm:text-xs">
            {selectedMarble.description}
          </p>

          <a
            href={`https://wa.me/201115374045?text=Hi I Have inquire For ${encodeURIComponent(
              selectedMarble.title
            )} Can You Give Me More Details`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="cursor-pointer mt-10 group relative inline-block px-8 max-sm:px-5 py-3 text-white text-[18px] max-sm:text-sm tracking-[2px] uppercase font-bold border-4 border-white rounded-sm shadow-[0_2px_10px_rgba(0,0,0,0.16),0_3px_6px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out overflow-hidden z-10 hover:text-black focus:text-white active:scale-90">
              <span className="absolute top-0 left-1/2 right-1/2 bottom-0 opacity-0 bg-white transition-all duration-500 ease-in-out group-hover:left-0 group-hover:right-0 group-hover:opacity-100 group-focus:left-0 group-focus:right-0 group-focus:opacity-100 -z-10"></span>
              InQuire Now
            </button>
          </a>
        </div>
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

export default ViewMarble;
