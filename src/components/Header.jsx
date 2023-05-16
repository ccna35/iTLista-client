import { IoLogoWhatsapp } from "react-icons/io";

const Header = () => {
  return (
    <header className="h-screen grid place-items-center bg-headerBgMobile md:bg-headerBgDesktop bg-no-repeat bg-cover">
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-5xl leading-relaxed text-white text-center">
          نضئ لك طريق الوصول إلى عملائك!
        </h2>
        <button className="py-2 px-4 rounded-md bg-dark-blue-itlista text-white transition-colors duration-300 hover:bg-medium-blue-itlista flex justify-center items-center gap-4">
          <IoLogoWhatsapp />
          <span>تواصل معنا عبر الواتساب</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
