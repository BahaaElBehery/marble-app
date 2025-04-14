import PropTypes from "prop-types";

const NaturalC = ({ title, paragraph, icon }) => {
  return (
    <div className="flex flex-col items-center justify-evenly p-5">
      {icon}
      <h5 className="font-bold mt-5 text-xl max-sm:text-base">{title}</h5>
      <p className="px-5 mt-5 max-sm:text-xs">{paragraph}</p>
    </div>
  );
};

NaturalC.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

export default NaturalC;
