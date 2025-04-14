const Our_HIstory = (Props) => {
  return (
    <div className="w-[90%] mx-auto grid grid-cols-2 max-xl:grid-cols-1 gap-10 mt-10">
      <div className={Props.Class}>
        <h3 className="text-5xl max-sm:text-4xl capitalize">{Props.Title}</h3>
        <p className="text-xl capitalize mt-10 max-sm:text-sm">
          {Props.paragraph}
        </p>
      </div>

      <div className="flex items-center justify-center">
        <img src={Props.img} alt="" className="w-full h-full max-xl:w-3xl" />
      </div>
    </div>
  );
};

export default Our_HIstory;
