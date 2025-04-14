const Attractive = (Props) => {
  return (
    <div className="w-11/12 mx-auto grid grid-cols-2 max-xl:grid-cols-1 gap-5 p-5">
      {/* ضع الصورة في البداية عبر order */}
      <div className={Props.classOrderImg}>
        <img
          src={Props.MyImg}
          alt=""
          className="w-full h-full object-cover bg-center"
        />
      </div>

      <div className={Props.classOrderText}>
        <div className="col-span-2 flex flex-col items-center py-10 px-10 *:text-center">
          <h3 className="text-4xl max-lg:text-2xl max-sm:text-xl font-bold capitalize text-center">
            {Props.heading}
          </h3>
          <article className="mt-20 text-lg max-lg:text-base max-sm:text-sm capitalize">
            {Props.a1}
          </article>
        </div>

        <div className="p-5 flex items-center border-t-[5px] border-t-gray-500 max-xl:col-span-full">
          <article className="text-lg text-center capitalize max-sm:text-sm ">
            {Props.a2}
          </article>
        </div>

        <div className="p-5 flex items-center justify-center border-t-[5px] border-gray-500 max-xl:col-span-full">
          <article className="text-lg text-center capitalize max-sm:text-sm ">
            {Props.a3}
          </article>
        </div>
      </div>
    </div>
  );
};

export default Attractive;
