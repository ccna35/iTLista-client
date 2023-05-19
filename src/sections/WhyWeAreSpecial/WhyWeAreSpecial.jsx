import { motion, useInView } from "framer-motion";
import Stat from "./Stat";
import { useRef } from "react";

const WhyWeAreSpecial = () => {
  const stats = [
    {
      id: 1,
      count: 750,
      text: "المشاريع المنجزة",
    },
    {
      id: 2,
      count: 643,
      text: "عملاء سعداء",
    },
    {
      id: 3,
      count: 32,
      text: "مشاريع تحت الانجاز",
    },
    {
      id: 4,
      count: 40,
      text: "شركاء النجاح",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: "all" });

  return (
    <section className="py-8 px-4 md:px-0 bg-sectionBg">
      <div className="container m-auto flex flex-col gap-8 items-center">
        <h2 className="text-4xl text-center text-orange-itlista leading-relaxed">
          لماذا نحن في iTLista متميزون؟
        </h2>
        <p className="text-xl max-w-xl text-center">
          عملنا الجاد في مجال التطوير التقني والتسويق الإلكتروني والتواصل مع
          آلاف العملاء تجعل من شركتنا خياركم الأفضل لتحقيق أهدافكم. تواصلوا معنا
          وترقبوا النتائج
        </p>
        <motion.img
          src="./Good team-bro.svg"
          className={`${
            isInView ? "grayscale-0 opacity-100" : "grayscale opacity-0"
          } transition-all duration-1000 max-w-xl`}
          ref={ref}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            return <Stat stat={stat} key={stat.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyWeAreSpecial;
