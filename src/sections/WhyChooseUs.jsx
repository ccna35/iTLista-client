import { useInView } from "framer-motion";
import { useRef } from "react";
import { ImCheckboxChecked } from "react-icons/im";

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      text: "أنت تتكلم نحن نستمع",
    },
    {
      id: 2,
      text: "نقدّر الابداع",
    },
    {
      id: 3,
      text: "خبرة 10 سنوات في SEO",
    },
    {
      id: 4,
      text: "فريق عمل متكامل",
    },
    {
      id: 5,
      text: "نبدع في تصميم المواقع",
    },
    {
      id: 6,
      text: "نصنع عالماً ابداعياً من التصاميم الجذابة",
    },
    {
      id: 7,
      text: "نبتكر الحلول و نتفاعل بإستمرار مع عملائنا",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-8 px-4 md:px-0">
      <div className="container m-auto flex flex-col gap-8">
        <h2 className="text-4xl text-center text-orange-itlista leading-relaxed">
          لماذا يجب أن تكون iTLista إختيارك الأول
        </h2>
        <div className="flex flex-col md:flex-row justify-center">
          <div className="flex flex-col gap-4">
            {reasons.map((reason) => {
              return (
                <div
                  className={`${
                    isInView
                      ? "translate-x-0 opacity-100"
                      : "translate-x-full opacity-0"
                  } transition-all duration-700 item flex gap-4 items-center text-lg p-4 border border-dark-blue-itlista rounded-lg bg-white group hover:bg-dark-blue-itlista hover:text-white`}
                  key={reason.id}
                  ref={ref}
                >
                  <ImCheckboxChecked className="text-dark-blue-itlista group-hover:text-white transition-colors duration-700" />
                  <p>{reason.text}</p>
                </div>
              );
            })}
          </div>
          <div>
            <img src="./92519-handshake-blue.gif" className="max-w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
