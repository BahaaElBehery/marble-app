import Masterpiece from "./Masterpiece";

import CatMarble from "./json/categoriesMarble.json";
import CatGranite from "./json/Granite.json";
import { Link } from "react-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const MContent = () => {
  const { t } = useTranslation("common");
  const [marbel, setMarbel] = useState(true);
  return (
    <>
      {" "}
      <Masterpiece setMarbel={setMarbel} />
      <div className="w-11/12 mx-auto mt-10 max-w-[1920px]">
        <h2
          className={`text-7xl max-sm:text-5xl font-bold text-center mb-10 text-amber-300`}
        >
          {marbel ? t("select.marble") : t("select.granite")}
        </h2>

        <div
          className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-7"
          dir="ltr"
        >
          {(marbel ? CatMarble : CatGranite).map((e) => (
            <Link key={e.id} to={`/categories/${e.id}`}>
              <div className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                {/* صورة */}
                <img
                  src={e.img || e.image}
                  alt={e.name}
                  className="w-full h-[200px] object-cover transform transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                {/* العنوان */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
                  <h3 className="text-white text-xl font-bold drop-shadow-lg">
                    {e.name}
                  </h3>
                </div>

                {/* لمعة متحركة */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                    translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"
                ></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default MContent;
