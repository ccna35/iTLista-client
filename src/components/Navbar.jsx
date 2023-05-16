import { NavLink } from "react-router-dom";
import { HiMenuAlt2 } from "react-icons/hi";

export const Navbar = () => {
  return (
    <nav className="p-4 md:px-0">
      <div className="container m-auto flex gap-32 items-center justify-between">
        <div className="logo w-16">
          <img src="./Logo/Vector Smart Object.png" className="w-full" alt="" />
        </div>

        <div className="menu hidden lg:flex gap-8 justify-between">
          <NavLink
            to="/about"
            className="transition-colors duration-300 text-base px-2 hover:text-dark-blue-itlista"
          >
            من نحن
          </NavLink>
          <NavLink
            to="/about"
            className="transition-colors duration-300 text-base px-2 hover:text-dark-blue-itlista"
          >
            خدماتنا
          </NavLink>
          <NavLink
            to="/about"
            className="transition-colors duration-300 text-base px-2 hover:text-dark-blue-itlista"
          >
            باقات التسويق
          </NavLink>
          <NavLink
            to="/about"
            className="transition-colors duration-300 text-base px-2 hover:text-dark-blue-itlista"
          >
            عملاؤنا
          </NavLink>
          <NavLink
            to="/about"
            className="transition-colors duration-300 text-base px-2 hover:text-dark-blue-itlista"
          >
            أعمالنا
          </NavLink>
          <NavLink
            to="/about"
            className="transition-colors duration-300 text-base px-2 hover:text-dark-blue-itlista"
          >
            تواصل معنا
          </NavLink>
        </div>

        <div className="lg:hidden">
          <HiMenuAlt2 />
        </div>
        {/* <button className="hidden lg:block py-2 px-4 rounded-md bg-dark-blue-itlista text-white transition-colors duration-300 hover:bg-medium-blue-itlista">
          اتصل بنا
        </button> */}
      </div>
    </nav>
  );
};
