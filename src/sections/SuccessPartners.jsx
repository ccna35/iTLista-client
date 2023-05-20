import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

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
    {
      id: 5,
      src: "./partners/google-svgrepo-com.svg",
    },
    {
      id: 6,
      src: "./partners/microsoft-svgrepo-com.svg",
    },
    {
      id: 7,
      src: "./partners/cisco-2-logo-svgrepo-com.svg",
    },
    {
      id: 8,
      src: "./partners/oracle-svgrepo-com.svg",
    },
  ];

  const items = images.map((img) => {
    return (
      <div className="item grid place-items-center" data-value={img.id}>
        <img src={img.src} className="w-20 md:w-40" />
      </div>
    );
  });

  const responsive = {
    0: { items: 3 },
    568: { items: 3 },
    1024: { items: 4 },
  };

  return (
    <section className="py-8 px-4 md:px-0 my-12">
      <div className="container m-auto">
        <h2
          className="text-4xl text-center text-orange-itlista leading-relaxed relative w-fit m-auto lg:before:w-40 lg:before:h-1 before:bg-dark-blue-itlista before:absolute before:rounded-full before:left-[118%] before:top-1/2 lg:after:w-40 lg:after:h-1 after:bg-dark-blue-itlista after:absolute after:rounded-full after:right-[118%] after:top-1/2
        hover:before:left-[110%] hover:after:right-[110%] before:transition-all after:transition-all before:duration-1000 after:duration-1000 mb-12"
        >
          كبار شركاء النجاح
        </h2>

        <AliceCarousel
          autoPlay
          autoPlayStrategy="default"
          autoPlayInterval={1000}
          animationDuration={1000}
          animationType="fadeout"
          infinite
          touchTracking={false}
          disableDotsControls
          disableButtonsControls
          items={items}
          responsive={responsive}
        />
      </div>
    </section>
  );
};

export default SuccessPartners;
