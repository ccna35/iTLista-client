import { motion } from "framer-motion";
import { useState } from "react";

const Services = () => {
  const previousWorkImages = [
    {
      id: 1,
      icon: "./previous work/app dev/photo-1607252650355-f7fd0460ccdb.avif",
      heading: "apps",
      description: "apps",
    },
  ];

  return (
    <section className="py-8 px-4 md:px-0">
      <div className="container m-auto flex flex-col gap-8">
        <div className="flex flex-col gap-8 max-w-md mx-auto my-16">
          <h2 className="text-5xl text-dark-blue-itlista text-center">
            أعمالنا في خدمات تصميم المواقع والتسويق الرقمي
          </h2>
          <p className="text-xl text-dark-grey-itlista text-center">
            رحلة عملنا كانت حافلة بالنجاحات في السوق السعودي عبر مساهمتنا في
            توسيع دائرة وحجم معاملات زبائننا وإضفاء قيمة مضافة على البرندات
            والماركات التي اتخذت القرار الصائب بطلب خدماتنا …. نحن نفكّر لنجاحكم
          </p>
        </div>
      </div>
      <div>
        <div className="tabs flex flex-wrap gap-4 my-8 justify-center">
          <span
            className={`px-4 py-2 rounded-md border border-orange-itlista hover:bg-orange-itlista transition-colors duration-300 hover:text-white cursor-pointer ${
              currentTab === "all"
                ? "bg-orange-itlista text-white"
                : "bg-white text-dark-grey-itlista"
            }`}
            onClick={() => setCurrentTab("all")}
          >
            كل المشاريع
          </span>
          <span
            className={`px-4 py-2 rounded-md border border-orange-itlista hover:bg-orange-itlista transition-colors duration-300 hover:text-white cursor-pointer ${
              currentTab === "websites"
                ? "bg-orange-itlista text-white"
                : "bg-white text-dark-grey-itlista"
            }`}
            onClick={() => setCurrentTab("websites")}
          >
            مواقع الكترونية
          </span>
          <span
            className={`px-4 py-2 rounded-md border border-orange-itlista hover:bg-orange-itlista transition-colors duration-300 hover:text-white cursor-pointer ${
              currentTab === "apps"
                ? "bg-orange-itlista text-white"
                : "bg-white text-dark-grey-itlista"
            }`}
            onClick={() => setCurrentTab("apps")}
          >
            تطبيقات الهاتف
          </span>
          <span
            className={`px-4 py-2 rounded-md border border-orange-itlista hover:bg-orange-itlista transition-colors duration-300 hover:text-white cursor-pointer ${
              currentTab === "marketing"
                ? "bg-orange-itlista text-white"
                : "bg-white text-dark-grey-itlista"
            }`}
            onClick={() => setCurrentTab("marketing")}
          >
            تسويق الكتروني
          </span>
        </div>
        <div className="cards flex flex-wrap gap-4 justify-center">
          {currentTab === "all"
            ? previousWorkImages
                // .filter((img) => img.category === currentTab)
                .map((img) => {
                  return (
                    <motion.img
                      src={img.img}
                      className="w-96 max-w-full rounded-lg"
                      key={img.id}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                    />
                  );
                })
            : previousWorkImages
                .filter((img) => img.category === currentTab)
                .map((img) => {
                  return (
                    <motion.img
                      src={img.img}
                      className="w-96 max-w-full rounded-lg"
                      key={img.id}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                    />
                  );
                })}
        </div>
      </div>
    </section>
  );
};

export default Services;
