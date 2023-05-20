import { useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";

const WhoWeAre = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section className="py-8 px-4 md:px-0">
      <div className="container m-auto">
        <div>
          <div
            className="transition-colors duration-1000 flex flex-col gap-2 items-center"
            ref={ref}
          >
            <p className="text-2xl text-orange-itlista">سنوات خبرة</p>

            <div className="text-5xl font-bold text-dark-blue-itlista">
              {isInView && <CountUp end={10} start={0} />}
            </div>
          </div>
          <div>
            <h2>من نحن</h2>
            <p>
              نحن نقوم بتوظيف امهر المهندسين من حول العالم ولدينا سجل حافل من
              العملاء حول العالم حيث اننا نحن نقدم جودة عالمية بافضل الخبرات
              والمطورين مع تكلفة مناسبة للجميع بداية من طلاب التخرج , مرورا
              باصحاب الشركات والافكار الناشئه , انتهاء بالشركات العملاقه وأنظمة
              الدفع والبنوك
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
