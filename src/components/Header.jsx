import { motion } from "framer-motion";
import { IoLogoWhatsapp } from "react-icons/io";

const Header = () => {
  return (
    <header className="h-screen grid place-items-center bg-headerBgMobile md:bg-headerBgDesktop bg-no-repeat bg-cover">
      <div className="flex flex-col items-center gap-8">
        <motion.h2
          className="text-5xl leading-relaxed text-white text-center"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 1,
          }}
        >
          نضئ لك طريق الوصول إلى عملائك!
        </motion.h2>
        <motion.button
          className="py-2 px-4 rounded-md bg-dark-blue-itlista text-white transition-colors duration-300 hover:bg-medium-blue-itlista flex justify-center items-center gap-4"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 1.5,
          }}
        >
          <IoLogoWhatsapp />
          <span>تواصل معنا عبر الواتساب</span>
        </motion.button>
      </div>
    </header>
  );
};

export default Header;
