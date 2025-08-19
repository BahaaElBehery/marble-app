// import PropTypes from "prop-types";
// import { useState } from "react";
// import { motion } from "framer-motion";

// const Masterpiece = ({ setMarbel }) => {
//   const [active, setActive] = useState(null);

//   const categories = [
//     {
//       name: "Marble",
//       description: "Luxury natural stone for timeless elegance.",
//       img: "https://images.unsplash.com/photo-1680026319202-fcb822e0ab91?fm=jpg&q=60&w=3000",
//       action: () => setMarbel(true),
//     },
//     {
//       name: "Granite",
//       description: "Durable and stylish surfaces for modern spaces.",
//       img: "https://www.evansaggregates.co.uk/wp-content/uploads/2024/08/EA_Red-Granite_14mm.jpg",
//       action: () => setMarbel(false),
//     },
//   ];

//   // للكشف عن حجم الشاشة
//   const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

//   return (
//     <div className="w-full h-[100vh] flex max-md:flex-col overflow-hidden max-md:mt-20">
//       {categories.map((cat, index) => {
//         const isActive = active === index;

//         return (
//           <motion.div
//             key={index}
//             className="relative flex-1 transition-all duration-700"
//             style={{
//               flex: isActive ? 1.2 : active === null ? 1 : 0.8,
//             }}
//             onMouseEnter={() => !isMobile && setActive(index)}
//             onMouseLeave={() => !isMobile && setActive(null)}
//             onClick={() =>
//               isMobile ? setActive(isActive ? null : index) : cat.action()
//             }
//           >
//             {/* صورة الخلفية */}
//             <motion.img
//               src={cat.img}
//               alt={cat.name}
//               className="absolute inset-0 w-full h-full object-cover"
//               animate={{
//                 scale: isActive ? 1.1 : 1,
//                 filter:
//                   active !== null && !isActive
//                     ? "blur(4px) brightness(0.6)"
//                     : "blur(0px) brightness(1)",
//               }}
//               transition={{ duration: 0.8 }}
//             />

//             {/* التدرج */}
//             <div className="absolute inset-0 bg-black/40"></div>

//             {/* المحتوى */}
//             <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
//               <motion.h2
//                 className="text-5xl font-extrabold text-white drop-shadow-lg"
//                 animate={{
//                   y: isActive ? 0 : 20,
//                   opacity: isActive ? 1 : 0.7,
//                 }}
//                 transition={{ duration: 0.6 }}
//               >
//                 {cat.name}
//               </motion.h2>
//               {isActive && (
//                 <>
//                   <motion.p
//                     className="mt-4 text-lg max-sm:text-base text-gray-200 max-w-md"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.2 }}
//                   >
//                     {cat.description}
//                   </motion.p>

//                   <motion.button
//                     className="mt-6 px-6 py-3 bg-amber-500 cursor-pointer max-sm:text-sm text-black font-semibold rounded-full shadow-lg hover:bg-amber-400 transition-all"
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.3 }}
//                     onClick={cat.action}
//                   >
//                     View Collection
//                   </motion.button>
//                 </>
//               )}
//             </div>
//           </motion.div>
//         );
//       })}
//     </div>
//   );
// };

// Masterpiece.propTypes = {
//   setMarbel: PropTypes.func.isRequired,
// };

// export default Masterpiece;

import PropTypes from "prop-types";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Masterpiece = ({ setMarbel }) => {
  const [active, setActive] = useState(null);
  const { t } = useTranslation("common"); // ملف الترجمة masterpiec.json

  const categories = [
    {
      name: t("marble.name"),
      description: t("marble.description"),
      img: "https://images.unsplash.com/photo-1680026319202-fcb822e0ab91?fm=jpg&q=60&w=3000",
      action: () => setMarbel(true),
    },
    {
      name: t("granite.name"),
      description: t("granite.description"),
      img: "https://www.evansaggregates.co.uk/wp-content/uploads/2024/08/EA_Red-Granite_14mm.jpg",
      action: () => setMarbel(false),
    },
  ];

  // للكشف عن حجم الشاشة
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div
      className="w-full h-[100vh] flex max-md:flex-col overflow-hidden max-md:mt-20"
      dir="ltr"
    >
      {categories.map((cat, index) => {
        const isActive = active === index;

        return (
          <motion.div
            key={index}
            className="relative flex-1 transition-all duration-700"
            style={{
              flex: isActive ? 1.2 : active === null ? 1 : 0.8,
            }}
            onMouseEnter={() => !isMobile && setActive(index)}
            onMouseLeave={() => !isMobile && setActive(null)}
            onClick={() =>
              isMobile ? setActive(isActive ? null : index) : cat.action()
            }
          >
            {/* صورة الخلفية */}
            <motion.img
              src={cat.img}
              alt={cat.name}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
              animate={{
                scale: isActive ? 1.1 : 1,
                filter:
                  active !== null && !isActive
                    ? "blur(4px) brightness(0.6)"
                    : "blur(0px) brightness(1)",
              }}
              transition={{ duration: 0.8 }}
            />

            {/* التدرج */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* المحتوى */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
              <motion.h2
                className="text-5xl font-extrabold text-white drop-shadow-lg"
                animate={{
                  y: isActive ? 0 : 20,
                  opacity: isActive ? 1 : 0.7,
                }}
                transition={{ duration: 0.6 }}
              >
                {cat.name}
              </motion.h2>
              {isActive && (
                <>
                  <motion.p
                    className="mt-4 text-lg max-sm:text-base text-gray-200 max-w-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {cat.description}
                  </motion.p>

                  <motion.button
                    className="mt-6 px-6 py-3 bg-amber-500 cursor-pointer max-sm:text-sm text-black font-semibold rounded-full shadow-lg hover:bg-amber-400 transition-all"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    onClick={cat.action}
                  >
                    {t("viewCollection")}
                  </motion.button>
                </>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

Masterpiece.propTypes = {
  setMarbel: PropTypes.func.isRequired,
};

export default Masterpiece;
