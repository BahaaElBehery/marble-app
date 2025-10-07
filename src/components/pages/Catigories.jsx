import MContent from "../MContent";

const Catigories = () => {
  const handleContextMenu = (e) => {
    e.preventDefault(); // تمنع الكليك اليمين بس من غير أي رسالة
  };

  return (
    <div onContextMenu={handleContextMenu} className="w-full">
      <MContent />
    </div>
  );
};

export default Catigories;
