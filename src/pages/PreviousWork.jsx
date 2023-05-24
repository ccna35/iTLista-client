import { motion } from "framer-motion";
import { useState } from "react";

const PreviousWork = () => {
  const [currentTab, setCurrentTab] = useState("all");

  const previousWorkImages = [
    {
      id: 1,
      img: "./previous work/app dev/photo-1607252650355-f7fd0460ccdb.avif",
      category: "apps",
      name: "تطبيقات الهاتف",
    },
    {
      id: 2,
      img: "./previous work/app dev/photo-1607697987724-fc9f8b225223.avif",
      category: "apps",
      name: "تطبيقات الهاتف",
    },
    {
      id: 3,
      img: "./previous work/app dev/photo-1609921141835-710b7fa6e438.avif",
      category: "apps",
      name: "تطبيقات الهاتف",
    },
    {
      id: 4,
      img: "./previous work/marketing/photo-1562577309-4932fdd64cd1.avif",
      category: "marketing",
      name: "تطبيقات الهاتف",
    },
    {
      id: 5,
      img: "./previous work/marketing/photo-1432888622747-4eb9a8efeb07.avif",
      category: "marketing",
    },
    {
      id: 6,
      img: "./previous work/marketing/photo-1501504905252-473c47e087f8.avif",
      category: "marketing",
    },
    {
      id: 7,
      img: "./previous work/web dev/photo-1553267252-d100936057c1.avif",
      category: "websites",
    },
    {
      id: 8,
      img: "./previous work/web dev/photo-1460925895917-afdab827c52f.avif",
      category: "websites",
    },
    {
      id: 9,
      img: "./previous work/web dev/photo-1499951360447-b19be8fe80f5.avif",
      category: "websites",
    },
  ];

  const [filteredList, setFilteredList] = useState();

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
              currentTab === "all" && "bg-orange-itlista text-white"
            }`}
            onClick={() => setCurrentTab("all")}
          >
            كل المشاريع
          </span>
          <span
            className={`px-4 py-2 rounded-md border border-orange-itlista hover:bg-orange-itlista transition-colors duration-300 hover:text-white cursor-pointer ${
              currentTab === "websites" && "bg-orange-itlista text-white"
            }`}
            onClick={() => setCurrentTab("websites")}
          >
            مواقع الكترونية
          </span>
          <span
            className={`px-4 py-2 rounded-md border border-orange-itlista hover:bg-orange-itlista transition-colors duration-300 hover:text-white cursor-pointer ${
              currentTab === "apps" && "bg-orange-itlista text-white"
            }`}
            onClick={() => setCurrentTab("apps")}
          >
            تطبيقات الهاتف
          </span>
          <span
            className={`px-4 py-2 rounded-md border border-orange-itlista hover:bg-orange-itlista transition-colors duration-300 hover:text-white cursor-pointer ${
              currentTab === "marketing" && "bg-orange-itlista text-white"
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

export default PreviousWork;
