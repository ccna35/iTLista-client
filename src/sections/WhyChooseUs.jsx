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
  return (
    <section className="py-8 px-4 md:px-0">
      <div className="container m-auto flex flex-col gap-8">
        <h2 className="text-4xl text-center text-orange-itlista leading-relaxed">
          لماذا يجب أن تكون iTLista إختيارك الأول
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reasons.map((reason) => {
            return (
              <div
                className="item flex gap-4 items-center text-lg"
                key={reason.id}
              >
                <ImCheckboxChecked className="text-dark-blue-itlista" />
                <p>{reason.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;