import { useInView } from "framer-motion";
import { useRef } from "react";

const Card = ({ card }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      className={`${
        isInView ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      } transition-all duration-700 bg-white border border-gray-300 shadow-lg rounded-lg p-4 flex flex-col items-center gap-4 text-center`}
      ref={ref}
    >
      <img src={card.img} className="w-20" />
      <h2 className="text-3xl text-dark-blue-itlista">{card.title}</h2>
      <p className="text-lg">{card.text}</p>
    </div>
  );
};

export default Card;
