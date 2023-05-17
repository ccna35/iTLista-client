import { useInView } from "framer-motion";
import Card from "./Card";
import { useRef } from "react";

const Services = () => {
  const cardInfo = [
    {
      id: 1,
      title: "تصميم المواقع الالكترونية",
      img: "./wired-outline-742-multimedia-code-1.gif",
      text: "“موقع الويب هو من سيقوم بالتسويق لخدماتك كامل اليوم على مدار الأسبوع وليس موظفوك!” بول كوكسن – مستشار تسويق ومبيعات",
    },
    {
      id: 2,
      title: "تصميم الهوية البصرية",
      img: "./wired-outline-543-apple.gif",
      text: "نمارس فن تصميم الشعارات والهوية البصرية وندمج الجمال مع الأعمال. نقدم لك عبر باقاتنا مجموعة متنوعة ومتكاملة من التصاميم التي تُكَوٍن هويتك البصرية. لذلك اختر الباقة المناسبة لك الآن!",
    },
    {
      id: 3,
      title: "تحسين محركات البحث",
      img: "./wired-outline-19-magnifier-zoom-search.gif",
      text: "فريق المبرمجين لدينا محترفون في SEO ، نقوم بفحص مجاني شامل لموقعك لنرى مواطن القوة والضعف ونرفق تقريرا شاملا عن صحة موقعك نحدد فيه إحتياجاتك لتتجاوز منافسيك",
    },
    {
      id: 4,
      title: "إنتاج الفيديو الاحترافي",
      img: "./wired-outline-62-film.gif",
      text: "محترفون في صناعة كافة أشكال الفيديو ونختار لك الطريقة الأمثل في التعبير عنك “فيديو جرافيك، إنفو فيديو، فواصل دعائية، برومو ترويجي”",
    },
    {
      id: 5,
      title: "رسائل الواتس اب",
      img: "./wired-outline-37-approve-checked-simple.gif",
      text: "التسويق من خلال رسائل الواتس اب يعتبر من أفضل وأوفر الوسائل لتوسيع نطاق عملك والوصول للعملاء بشكل مباشر ",
    },
    {
      id: 6,
      title: "باقات الانطلاقة الاحترافية",
      img: "./wired-outline-667-biking.gif",
      text: "إذا أردت البدء في تسويق أعمالك رقمياً فإن باقات الانطلاق صممت خصيصاً لتضمن لك بداية صحيحة وآمنة للتسويق يمكنك البناء عليها خلال رحلة عملك.",
    },
  ];

  return (
    <section className="py-8 px-4 md:px-0">
      <div className="container m-auto flex flex-col gap-8">
        <h2 className="text-4xl text-center text-orange-itlista">
          اكتشف خدمات ITLista
        </h2>
        <div className="text-center flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="border w-16 h-16 overflow-hidden rounded-full">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/af/Bill_Gates_-_Nov._8%2C_2019.jpg"
                alt=""
                className="w-full object-cover transition-all duration-300 grayscale hover:grayscale-0"
              />
            </div>
            <p className="flex flex-col md:flex-row gap-2">
              <span className="font-medium">
                إذا لم يكن لأعمالك وجود على الإنترنت فستختفي من قائمة الأعمال.
              </span>
              <span className="font-thin">“Bill Gates”</span>
            </p>
          </div>

          <p className="text-xl text-orange-itlista">
            ماذا سنقدم لك في ITLista
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardInfo.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
