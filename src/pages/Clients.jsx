import { motion } from "framer-motion";
import { useState } from "react";

const Clients = () => {
  const clientsImages = [
    {
      id: 1,
      img: "./clients/a1.png",
    },
    {
      id: 2,
      img: "./clients/a2.png",
    },
    {
      id: 3,
      img: "./clients/a3.png",
    },
    {
      id: 4,
      img: "./clients/a4.png",
    },
    {
      id: 6,
      img: "./clients/a6.png",
    },
    {
      id: 7,
      img: "./clients/a7.png",
    },
    {
      id: 8,
      img: "./clients/a8.png",
    },
    {
      id: 9,
      img: "./clients/a9.png",
    },
    {
      id: 10,
      img: "./clients/a10.png",
    },
    {
      id: 11,
      img: "./clients/a11.png",
    },
    {
      id: 12,
      img: "./clients/a12.png",
    },
    {
      id: 13,
      img: "./clients/a13.png",
    },
    {
      id: 14,
      img: "./clients/a1.png",
    },
    {
      id: 15,
      img: "./clients/a2.png",
    },
    {
      id: 16,
      img: "./clients/a3.png",
    },
    {
      id: 17,
      img: "./clients/a4.png",
    },
    {
      id: 18,
      img: "./clients/a6.png",
    },
    {
      id: 19,
      img: "./clients/a7.png",
    },
    {
      id: 20,
      img: "./clients/a8.png",
    },
    {
      id: 21,
      img: "./clients/a9.png",
    },
    {
      id: 22,
      img: "./clients/a10.png",
    },
    {
      id: 23,
      img: "./clients/a11.png",
    },
    {
      id: 24,
      img: "./clients/a12.png",
    },
    {
      id: 25,
      img: "./clients/a13.png",
    },
  ];

  return (
    <section className="py-8 px-4 md:px-0">
      <div className="container m-auto flex flex-col gap-8">
        <div className="flex flex-col gap-8 max-w-md mx-auto my-16">
          <h2 className="text-5xl text-dark-blue-itlista text-center">
            عملاؤنا
          </h2>
          <p className="text-xl text-dark-grey-itlista text-center">
            مجموعة من عملائنا المميزين حيث قمنا ببناء علاقة قوية تقوم على أسس
            المنفعة المتبادلة، لذا ساهم تطوير مشاريع عملائنا على تحقيق التنمية
            بشكل إيجابي في أعمالهم لتتحول العلاقة الى شراكة نجاح.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 md:gap-24 lg:gap-32 justify-evenly">
          {clientsImages.map((client) => {
            return (
              <motion.div
                key={client.id}
                className="w-40 group"
                // initial={{ scale: 0, opacity: 0 }}
                // animate={{ scale: 1, opacity: 1 }}
                whileHover={{
                  scale: 1.2,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                  duration: 1,
                }}
              >
                <img
                  src={client.img}
                  className="w-full grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Clients;
