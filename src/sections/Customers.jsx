import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Customers = () => {
  const images = [
    {
      id: 1,
      src: "./customers/1.png",
    },
    {
      id: 2,
      src: "./customers/2.png",
    },
    {
      id: 3,
      src: "./customers/3.png",
    },
    {
      id: 4,
      src: "./customers/4.png",
    },
    {
      id: 5,
      src: "./customers/5.png",
    },
    {
      id: 6,
      src: "./customers/6.png",
    },
    {
      id: 7,
      src: "./customers/2332.png",
    },
    {
      id: 8,
      src: "./customers/arhc-Logo.png",
    },
    {
      id: 9,
      src: "./customers/logo_fixed.png",
    },
    {
      id: 10,
      src: "./customers/logo-300x80.png",
    },
  ];

  return (
    <section className="py-8 px-4 md:px-0 my-12">
      <div className="container m-auto">
        <h2
          className="text-4xl text-center text-orange-itlista leading-relaxed relative w-fit m-auto lg:before:w-40 lg:before:h-1 before:bg-dark-blue-itlista before:absolute before:rounded-full before:left-[118%] before:top-1/2 lg:after:w-40 lg:after:h-1 after:bg-dark-blue-itlista after:absolute after:rounded-full after:right-[118%] after:top-1/2
        hover:before:left-[110%] hover:after:right-[110%] before:transition-all after:transition-all before:duration-1000 after:duration-1000 mb-12"
        >
          من عملاء iTLista
        </h2>
        <Swiper
          spaceBetween={50}
          centeredSlides={true}
          slidesPerView={3}
          autoplay={{
            delay: 1000,
          }}
        >
          {images.map((img) => {
            return (
              <SwiperSlide key={img.id}>
                <div className="bg-gray-950 p-2 rounded-lg grid place-items-center">
                  <img src={img.src} className="w-40" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Customers;
