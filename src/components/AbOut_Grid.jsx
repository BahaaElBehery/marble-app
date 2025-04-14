const AbOut_Grid = (Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h2 className="text-4xl font-bold">{Props.title}</h2>
      <span className="text-xl text-gray-500">{Props.paragraph}</span>
    </div>
  );
};

export default AbOut_Grid;
