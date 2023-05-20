import { useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";

const Stat = ({ stat }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      className="transition-colors duration-1000 flex flex-col gap-2 items-center"
      key={stat.id}
      ref={ref}
    >
      <div className="text-5xl font-bold text-dark-blue-itlista">
        {isInView && <CountUp end={stat.count} start={0} />}
      </div>

      <p className="text-2xl text-orange-itlista">{stat.text}</p>
    </div>
  );
};

export default Stat;
