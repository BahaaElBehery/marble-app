import Header from "./Header";
import { useState, useRef } from "react";
import collections from "../components/json/collections.json";

import Footer from "./Footer";
const Collections = () => {
  const [contextMenuVisible, setContextMenuVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const excludedRef = useRef(null); // مرجع للعناصر المستثناة

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

  return (
    <div
      onContextMenu={handleContextMenu}
      onClick={handleClick}
      className="h-screen w-full"
    >
      {/* العناصر المستثناة */}
      <div ref={excludedRef}>
        <Header />

        <div className="w-11/12 mx-auto mt-50">
          <div className="w-[80%] mx-auto bg-white flex items-center justify-center py-8 rounded-t-2xl px-10">
            <h3 className="font-light text-6xl max-xl:text-5xl max-lg:text-4xl max-md:text-2xl max-md:font-black text-black">
              Create Your <br className="hidden max-sm:flex" /> Masterpiece
            </h3>
          </div>

          <div className=" mx-auto grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-5">
            {collections.map((e) => {
              return (
                <div key={e.id} className="w-full">
                  <img
                    src={e.img}
                    alt=""
                    className="w-full h-[400px] object-fill"
                  />
                </div>
              );
            })}
          </div>
        </div>
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

export default Collections;
