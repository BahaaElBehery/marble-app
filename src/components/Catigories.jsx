import Header from "./Header";
import { useState, useRef } from "react";
import Masterpiece from "./Masterpiece";
import CatMarble from "./json/categoriesMarble.json";
import CatGranite from "./json/Granite.json";
import Footer from "./Footer";
import { Link } from "react-router";

const Catigories = () => {
  const [contextMenuVisible, setContextMenuVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const excludedRef = useRef(null);
  const [marbel, setMarbel] = useState(true);

  // عدد العناصر المعروضة
  const [visibleMarbleCount, setVisibleMarbleCount] = useState(12);
  const [visibleGraniteCount, setVisibleGraniteCount] = useState(12);

  const handleContextMenu = (e) => {
    e.preventDefault();
    if (excludedRef.current && excludedRef.current.contains(e.target)) return;
    setPosition({ x: e.clientX, y: e.clientY });
    setContextMenuVisible(true);
  };

  const handleClick = () => setContextMenuVisible(false);

  return (
    <div
      onContextMenu={handleContextMenu}
      onClick={handleClick}
      className="w-full"
    >
      <div ref={excludedRef}>
        <Header />
        <Masterpiece setMarbel={setMarbel} />

        {marbel ? (
          <div className="w-11/12 mx-auto mt-10">
            <h2 className="text-7xl max-sm:text-5xl font-bold text-center text-slate-200 mb-10">
              Marble
            </h2>
            <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-7">
              {CatMarble.slice(0, visibleMarbleCount).map((e) => (
                <div key={e.id}>
                  <Link to={`/categories/${e.id}`}>
                    <div className="flex items-center justify-center w-full h-full">
                      <img
                        src={e.img}
                        alt=""
                        className="w-full h-full bg-cover transition-all duration-300 hover:scale-105 cursor-pointer rounded-2xl"
                      />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            {visibleMarbleCount < CatMarble.length && (
              <div className="flex justify-center mt-10">
                <button
                  onClick={() => setVisibleMarbleCount((prev) => prev + 4)}
                  className="relative inline-block px-8 py-3 text-[17px] font-bold tracking-wide rounded-full bg-white text-ghostwhite overflow-hidden group border-none outline-none cursor-pointer"
                >
                  <span className="relative z-10 transition-colors duration-400 group-hover:text-black">
                    Show More ...
                  </span>
                  <span className="absolute inset-0 z-0 w-[120%] -left-[10%] skew-x-[30deg] bg-black transition-transform duration-[400ms] ease-[cubic-bezier(0.3,1,0.8,1)] group-hover:translate-x-full"></span>
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="w-11/12 mx-auto mt-10">
            <h2 className="text-7xl max-sm:text-5xl font-bold text-center text-slate-200 mb-10">
              Granite
            </h2>
            <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-7">
              {CatGranite.slice(0, visibleGraniteCount).map((e) => (
                <div key={e.id}>
                  <Link to={`/categories/${e.id}`}>
                    <div className="flex items-center justify-center w-full h-full">
                      <img
                        src={e.image}
                        alt=""
                        className="w-full h-full bg-cover transition-all duration-300 hover:scale-105 cursor-pointer rounded-2xl"
                      />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            {visibleGraniteCount < CatGranite.length && (
              <div className="flex justify-center mt-10">
                <button
                  onClick={() => setVisibleGraniteCount((prev) => prev + 4)}
                  className="relative inline-block px-8 py-3 text-[17px] font-bold tracking-wide rounded-full bg-white text-ghostwhite overflow-hidden group border-none outline-none cursor-pointer"
                >
                  <span className="relative z-10 transition-colors duration-400 group-hover:text-black">
                    Show More ...
                  </span>
                  <span className="absolute inset-0 z-0 w-[120%] -left-[10%] skew-x-[30deg] bg-black transition-transform duration-[400ms] ease-[cubic-bezier(0.3,1,0.8,1)] group-hover:translate-x-full"></span>
                </button>
              </div>
            )}
          </div>
        )}

        <Footer />
      </div>

      {contextMenuVisible && (
        <div
          className="fixed bg-blue-500 text-white w-60 p-3 rounded-lg shadow-lg transition-opacity duration-300 z-50"
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

export default Catigories;
