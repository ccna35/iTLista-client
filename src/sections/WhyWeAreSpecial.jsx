import { useInView } from "framer-motion";
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
  const isInView = useInView(ref, { once: true });

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
        <img src="./Good team-bro.svg" className="max-w-xl" />
        <div className="flex flex-wrap gap-32">
          {stats.map((stat) => {
            return (
              <div className="flex flex-col gap-2 items-center" key={stat.id}>
                <p
                  className="text-5xl font-bold text-dark-blue-itlista"
                  ref={ref}
                >
                  {stat.count}
                </p>
                <p className="text-2xl text-orange-itlista">{stat.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyWeAreSpecial;
