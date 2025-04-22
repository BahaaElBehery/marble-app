import Header from "./Header";
import { useState, useRef } from "react";
import collections from "../components/json/collections.json";
import Footer from "./Footer";

const Collections = () => {
  const [visibleCount, setVisibleCount] = useState(3);
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

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <div
      onContextMenu={handleContextMenu}
      onClick={handleClick}
      className="min-h-screen w-full  flex flex-col justify-between"
    >
      <div ref={excludedRef} className="flex-grow">
        <Header />

        <div className="w-11/12  mx-auto mt-50 max-w-[1900px]">
          <div className="w-[80%] mx-auto bg-white flex items-center justify-center py-8 rounded-t-2xl px-10">
            <h3 className="font-light text-6xl max-xl:text-5xl max-lg:text-4xl max-md:text-2xl max-md:font-black text-black">
              Create Your <br className="hidden max-sm:flex" /> Masterpiece
            </h3>
          </div>

          <div className="mx-auto grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-5">
            {collections.slice(0, visibleCount).map((e) => (
              <div key={e.id} className="w-full">
                <img
                  src={e.img}
                  alt={`image ${e.id + 1}`}
                  className="w-full h-[400px] object-cover"
                />
              </div>
            ))}
          </div>

          {visibleCount < collections.length && (
            <div className="flex justify-center mt-10">
              <button
                onClick={handleShowMore}
                className="px-8 py-4 rounded-[9px] bg-[#eee] border-none font-inherit text-center cursor-pointer transition-all duration-400 hover:shadow-[7px_10px_30px_10px_#ccc] active:scale-[0.97] active:shadow-[7px_5px_56px_-10px_#ccc] text-black"
              >
                <strong>Show More</strong>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ✅ الفوتر خارج الـ flex-grow علشان يثبت تحت */}
      <Footer />

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
