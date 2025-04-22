import AbOut_Grid from "./AbOut_Grid";
import Header from "./Header";
import { useState, useRef } from "react";
import Our_HIstory from "./Our_HIstory";
import Footer from "./Footer";

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

        <div className="mx-auto flex flex-col items-center justify-evenly mt-50 max-w-[1920px]">
          <h2 className="text-9xl px-5 max-md:text-7xl max-sm:text-5xl text-[#8b683e] font-bold">
            About Us
          </h2>
          <p className="mt-10 text-2xl px-10 max-sm:text-sm">
            Providing Egypt with the largest variety of over 250 different
            materials since 1999
          </p>
        </div>

        <div className="mt-20 *:text-black max-w-[1920px] mx-auto">
          <div className="w-[90%] mx-auto grid grid-cols-5 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 max-xl:gap-10 gap-3 *:border-r *:border-gray-300 bg-slate-50 py-10 rounded-md">
            <AbOut_Grid title="150k SQM" paragraph="Slabs in Stock" />
            <AbOut_Grid title="10k CBM" paragraph="Blocka in Stock" />
            <AbOut_Grid title="250+" paragraph="Materials" />
            <AbOut_Grid title="25 Years" paragraph="Experince" />
            <AbOut_Grid title="600+" paragraph="Projects" />
          </div>
        </div>

        <Our_HIstory
          Class="flex flex-col justify-center"
          Title="Our history"
          paragraph="Our journey began in 1999 with the establishment of El behery Marble. With a commitment to craftsmanship and quality, we quickly gained recognition in the authentic stone industry. Thanks to a dedicated team and strict quality control, we expanded our reach and began exporting premium Egyptian marble to international markets. Over the years, our continuous growth and expertise have solidified our reputation as a trusted name in the industry"
          img="/Cat-Marble/about-us-history.jpg"
        />

        <Our_HIstory
          Class="flex flex-col justify-center order-1 "
          Title="Our Story"
          paragraph="Today, Onix for Marble and Granite stands as a market leader within the natural stone production industry with a product focus on marbles, granite, quartz, as well as artificial stones. Our factories hold a market record of over 10,000 CBM of blocks, with 250 different materials being available to choose from. We’ve also exported to more than 50 countries and have delivered more than 600 different projects. This success can largely be attributed to our customer-first approach, which is integral to every step of our process. Every marble and granite tile is expertly produced at our top of the line production facility located in Elmokkatam City. This is done to ensure our production is of the utmost quality in terms of grain, durability, and customization."
          img="/Cat-Marble/about-us-our-story.jpg"
        />

        <div className="w-[90%] max-w-[1920px] mx-auto grid grid-cols-2 mt-20">
          <div className="flex flex-col max-xl:col-span-2">
            <h3 className="text-5xl max-sm:text-4xl">Our Mission</h3>
            <p className="mt-10 text-xl max-sm:text-sm">
              To constantly the best variety of quality marble, authentic stones
              and granite products, that are carefully tailored to meet
              different budgets while satisfying the diversified needs of
              end-users, and designers alike with unmatched value, durability
              and timeless elegance.
            </p>
          </div>
          <div className="col-span-2 mt-10">
            <img
              src="/Cat-Marble/about-us-long-insert-vision-mission.jpg"
              className="w-full h-auto"
              alt=""
            />
          </div>

          <div></div>

          <div className="flex flex-col max-xl:col-span-2">
            <h3 className="text-5xl max-sm:text-4xl mt-10">Our Vision</h3>
            <p className="mt-10 text-xl max-sm:text-sm">
              We aspire to be the leading name in the marble and natural stone
              industry by providing innovative, high-quality products that meet
              the needs of both local and international markets. Our goal is to
              achieve excellence by adopting cutting-edge technology,
              maintaining the highest quality standards, and focusing on
              sustainability while delivering exceptional value to our customers
              in every project.
            </p>
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

export default AboutUs;
