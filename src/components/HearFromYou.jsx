import { Link } from "react-router";

const HearFromYou = (Props) => {
  return (
    <div className="*:py-2">
      {Props.icon}
      <h5 className="text-2xl font-bold">{Props.title}</h5>
      <p className="text-lg">{Props.paragraph}</p>
      <Link
        to={Props.link}
        target="_blank"
        className="text-blue-500 underline underline-offset-4"
      >
        {Props.anchor}
      </Link>
    </div>
  );
};

export default HearFromYou;
