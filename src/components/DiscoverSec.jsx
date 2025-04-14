const DiscoverSec = () => {
  return (
    <section className="w-11/12 mx-auto px-6 py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <h2 className="text-3xl max-lg:text-2xl font-bold text-gray-300">
            Discover the Elegance of Natural Marble
          </h2>
          <p className="mt-4 max-sm:text-sm">
            Marble is a timeless symbol of luxury and sophistication, adding a
            touch of elegance to any space. We bring you the finest selection of
            premium natural marble, carefully sourced to enhance your home or
            project.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            "/Cat-Marble/2pMW5Array_13.jpg",
            "/Cat-Marble/Like.jpg",
            "/Cat-Marble/161697656_2975665469424575_4179678975858541755_n.jpg",
            "/Cat-Marble/XTREME-NERO_Calacatta-Milan_3-1024x848.jpg",
          ].map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Marble ${index + 1}`}
              className="rounded-lg object-cover w-full h-40  transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverSec;
