import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SuccessPartners = () => {
  const images = [
    {
      id: 1,
      src: "./partners/google-svgrepo-com.svg",
    },
    {
      id: 2,
      src: "./partners/microsoft-svgrepo-com.svg",
    },
    {
      id: 3,
      src: "./partners/cisco-2-logo-svgrepo-com.svg",
    },
    {
      id: 4,
      src: "./partners/oracle-svgrepo-com.svg",
    },
  ];

  return (
    <section className="py-8 px-4 md:px-0">
      <div className="container m-auto">
        <Swiper spaceBetween={50} slidesPerView={4} infi>
          {images.map((img) => {
            return (
              <SwiperSlide key={img.id}>
                <img src={img.src} className="w-40" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default SuccessPartners;
