import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

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

  const items = images.map((img) => {
    return (
      <div
        className="item grid place-items-center aspect-square"
        data-value={img.id}
      >
        <img src={img.src} className="w-20 md:w-40 invert" />
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
          من عملاء iTLista
        </h2>

        <AliceCarousel
          autoPlay
          autoPlayStrategy="default"
          autoPlayInterval={10}
          animationDuration={10000}
          animationType="fadeout"
          infinite
          touchTracking={false}
          disableDotsControls
          disableButtonsControls
          items={items}
          responsive={responsive}
          animationEasingFunction="linear"
        />
        <AliceCarousel
          autoPlay
          autoPlayStrategy="default"
          autoPlayInterval={10}
          animationDuration={10000}
          animationType="fadeout"
          infinite
          touchTracking={false}
          disableDotsControls
          disableButtonsControls
          items={items}
          responsive={responsive}
          animationEasingFunction="linear"
          autoPlayDirection="rtl"
        />
      </div>
    </section>
  );
};

export default Customers;
