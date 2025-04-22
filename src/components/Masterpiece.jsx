import PropTypes from "prop-types";

const Masterpiece = ({ setMarbel }) => {
  return (
    <div className="mt-30 max-w-[1920px] mx-auto">
      <div className="flex items-center justify-center  p-5">
        <h3 className="text-4xl max-sm:text-3xl max-sm:max-w-[300px] text-center font-bold bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text">
          Choose your masterpiece
        </h3>
      </div>

      <div className="w-11/12  mx-auto grid grid-cols-2 max-lg:grid-cols-1 gap-10 mt-10">
        <div
          onClick={() => setMarbel(true)}
          className="flex flex-col items-center justify-center"
        >
          <h3 className="font-bold text-5xl text-gray-300 cursor-default">
            Marble
          </h3>

          <img
            src="/Cat-Marble/40d9740ba0c9023919f830948da8ae24.jpg"
            alt=""
            className="w-[450px] h-[450px] max-sm:w-[300px] max-sm:h-[300px] rounded-[50%] transition-all duration-500 mt-10 hover:scale-110  cursor-pointer"
          />
        </div>

        <div
          onClick={() => setMarbel(false)}
          className="flex  flex-col items-center justify-center"
        >
          <h3 className="font-bold text-5xl text-gray-300 cursor-default">
            Granite
          </h3>
          <img
            src="/Cat-Marble/textured_5333543_01-sw_grande.jpg"
            alt=""
            className="w-[450px] h-[450px]  max-sm:w-[300px] max-sm:h-[300px] rounded-[50%] transition-all duration-500 hover:scale-110  mt-10 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

Masterpiece.propTypes = {
  setMarbel: PropTypes.func.isRequired,
};

export default Masterpiece;
