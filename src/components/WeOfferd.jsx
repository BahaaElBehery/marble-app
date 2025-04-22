import NaturalC from "./NaturalC";

const WeOfferd = () => {
  return (
    <div className="w-11/12 mx-auto max-w-[1920px]">
      <div className="flex flex-col items-center p-3 mt-10">
        <h2 className="font-bold text-4xl capitalize max-lg:text-2xl max-sm:text-xl">
          Discover the Finest Marble Types
        </h2>
        <p className="mt-5 text-sm capitalize max-lg:text-xs">
          We offer a wide selection of premium-quality marble, perfect for all
          designs and applications
        </p>
      </div>

      <div className="grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-5 mt-5">
        <NaturalC
          icon={
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L2 12h10V2z" />
              <path d="M2 12l10 10V12H2z" />
              <path d="M12 2l10 10H12V2z" />
            </svg>
          }
          title="Natural Marble"
          paragraph="Sourced from the finest quarries, natural marble offers unique beauty and durability."
        />

        <NaturalC
          icon={
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18M9 21V9" />
            </svg>
          }
          title="Engineered Marble
"
          paragraph="Manufactured with precision, engineered marble combines aesthetics with strength and easy maintenance."
        />

        <NaturalC
          icon={
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="2" y="2" width="20" height="20" rx="2" />
              <path d="M2 12h20M12 2v20" />
            </svg>
          }
          title="Marble Flooring
"
          paragraph="Luxurious marble flooring that enhances any space with elegance and sophistication."
        />
        <NaturalC
          icon={
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 3h18v18H3zM9 3v18M15 3v18" />
            </svg>
          }
          title="Wall Marble"
          paragraph="Premium marble designs to decorate walls with a modern and opulent look."
        />
        <NaturalC
          icon={
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 3h18v6H3zM3 9h18v12H3zM9 9v12" />
            </svg>
          }
          title="Kitchen Marble"
          paragraph="High-quality marble for kitchens, offering scratch resistance and easy cleaning."
        />
        <NaturalC
          icon={
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 4V2h6v2" />
              <path d="M3 11h18v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9z" />
              <path d="M7 11v5" />
            </svg>
          }
          title="Bathroom Marble"
          paragraph="Specially designed marble that withstands moisture while adding a luxurious touch to bathrooms."
        />
      </div>
    </div>
  );
};

export default WeOfferd;
