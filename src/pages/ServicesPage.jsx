import { motion } from "framer-motion";
import { useState } from "react";
import { cardInfo } from "../sections/services/Services";
import Card from "../sections/services/Card";
import { Disclosure, Transition } from "@headlessui/react";
import Accordion from "../components/servicesPage/Accordion";

const ServicesPage = () => {
  const team = [
    {
      id: 1,
      img: "./team/photo-1564564244660-5d73c057f2d2.avif",
      role: "كاتب محتوى",
    },
    {
      id: 2,
      img: "./team/photo-1564564321361-5694c96475ec.avif",
      role: "مطور ويب",
    },
    {
      id: 3,
      img: "./team/photo-1564564321837-a57b7070ac4f.avif",
      role: "خبير SEO",
    },
    {
      id: 4,
      img: "./team/photo-1597204081767-4c14a6b7cbec.avif",
      role: "مصمم",
    },
    {
      id: 5,
      img: "./team/photo-1605462863863-10d9e47e15ee.avif",
      role: "موشن غرافيك",
    },
    {
      id: 6,
      img: "./team/photo-1619380061814-58f03707f082.avif",
      role: "مدير حملات إعلانية",
    },
  ];

  const accordionQuestions = [
    {
      id: 1,
      heading: "إختيار الصور",
      body: "سنقوم بإختيار صور ذات جودة عالية لتكون مضمنة في المقال.",
    },
    {
      id: 2,
      heading: "أريد منكم كتابة ونشر مقالات على موقعي مباشرة، هل هذا ممكن؟",
      body: "نعم، سنحتاج منك بيانات الدخول إلى لوحة تحكم موقعك حتى نقوم بتنسيق نص المقال وفق قواعد السيو والمقروئية ثم جدولته للنشر.",
    },
    {
      id: 3,
      heading: "أريد منكم كتابة ونشر مقالات على موقعي مباشرة، هل هذا ممكن؟",
      body: "نعم، سنحتاج منك بيانات الدخول إلى لوحة تحكم موقعك حتى نقوم بتنسيق نص المقال وفق قواعد السيو والمقروئية ثم جدولته للنشر.",
    },
    {
      id: 4,
      heading: "أريد منكم كتابة ونشر مقالات على موقعي مباشرة، هل هذا ممكن؟",
      body: "نعم، سنحتاج منك بيانات الدخول إلى لوحة تحكم موقعك حتى نقوم بتنسيق نص المقال وفق قواعد السيو والمقروئية ثم جدولته للنشر.",
    },
    {
      id: 5,
      heading: "أريد منكم كتابة ونشر مقالات على موقعي مباشرة، هل هذا ممكن؟",
      body: "نعم، سنحتاج منك بيانات الدخول إلى لوحة تحكم موقعك حتى نقوم بتنسيق نص المقال وفق قواعد السيو والمقروئية ثم جدولته للنشر.",
    },
  ];

  return (
    <section className="py-8 px-4 md:px-0">
      <div className="container m-auto flex flex-col gap-8">
        <div className="flex flex-col gap-8 max-w-md mx-auto my-16">
          <h2 className="text-5xl text-dark-blue-itlista text-center">
            اكتشف خدماتنا
          </h2>
          <p className="text-xl text-dark-grey-itlista text-center">
            نقدم في خدماتنا حلول التسويق الإلكتروني والشبكات الاجتماعية،
            والتحليلات والإحصائيات. نتميز بتقديم خدمات ذات جودة عالية وأسعار
            مناسبة.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardInfo.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </div>
        <div className="flex flex-col gap-8 max-w-md mx-auto my-16">
          <h2 className="text-5xl text-dark-blue-itlista text-center">
            ماذا سنقدم لك عند إشتراكك في إحدى خدماتنا
          </h2>
          <p className="text-xl text-dark-grey-itlista text-center">
            سيقدم لك فريقنا كافة الخدمات المتعلقة بوجود أعمالك على الانترنت،
            بشكل يضمن تميزك و وصول خدماتك أو منتجاتك للجمهور وبالتالي زيادة
            مبيعاتك
          </p>
        </div>
        <div className="flex flex-wrap gap-8 justify-center">
          {team.map((member) => {
            return (
              <div key={member.id} className="text-center">
                <div className="w-60 h-60 rounded-full overflow-hidden mb-4 shadow-md">
                  <img
                    src={member.img}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xl text-orange-itlista">
                  {member.role}
                </span>
              </div>
            );
          })}
        </div>
        <h2 className="text-5xl text-dark-blue-itlista text-center">
          أسئلة شائعة حول خدماتنا
        </h2>
        <Accordion accordionQuestions={accordionQuestions} />
      </div>
    </section>
  );
};

export default ServicesPage;
