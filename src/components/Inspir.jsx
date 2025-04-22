const Inspir = () => {
  return (
    <div className=" w-11/12 max-w-[1920px] mx-auto mt-10 p-3">
      {/*  */}

      <div className="flex items-center gap-20 max-sm:flex-col max-sm:gap-5">
        <h3 className="font-bold text-5xl max-lg:text-3xl max-sm:text-3xl">
          Design <br /> Inspiration
        </h3>
        <p className="text-lg max-md:text-base max-sm:text-xs">
          Searching for inspiration? Here{"'"}s a look at some of our favorite
          Residential & Commercial applications using our materials.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-10 max-md:grid-cols-1">
        <div className="col-span-2 max-md:col-span-full">
          <img
            src="/imgs/Inspire.jpg"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>

        <div className="grid grid-cols-1 max-md:grid-cols-2 max-md:grid-rows-none grid-rows-2 gap-4">
          <img
            src="/imgs/Inspire-2.jpg"
            alt=""
            className="w-full h-auto max-md:w-full max-md:h-auto object-cover"
          />
          <img
            src="/imgs/Inspire-3.jpg"
            alt=""
            className="w-full h-auto max-md:w-full max-md:h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Inspir;
