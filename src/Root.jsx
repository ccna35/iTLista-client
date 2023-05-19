import { NavLink, Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import ParticlesComponent from "./components/ParticlesComponent";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const Root = () => {
  const options = {
    phoneNumber: "966532594583",
    accountName: "iTLista",
    allowClickAway: true,
    avatar: "./logo IT Lista icon.png",
    chatMessage: "كيف يمكننا مساعدتك؟",
    placeholder: "اكتب رسالتك هنا...",
  };
  return (
    <>
      <FloatingWhatsApp {...options} />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
