import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

export const Navbar = () => {
  const menuItems = [
    {
      id: 1,
      text: "من نحن",
      href: "/about",
    },
    {
      id: 2,
      text: "خدماتنا",
      href: "#",
      dropdownItems: [
        {
          id: 1,
          text: "تصميم مواقع",
          href: "/website-design",
        },
        {
          id: 2,
          text: "انتاج الفيديو",
          href: "/website-design",
        },
        {
          id: 3,
          text: "تحسين محركات البحث",
          href: "/website-design",
        },
        {
          id: 4,
          text: "رسائل الواتس اب",
          href: "/website-design",
        },
      ],
    },
    {
      id: 3,
      text: "باقات التسويق",
      href: "#",
      dropdownItems: [
        {
          id: 1,
          text: "باقات التسويق الالكتروني",
          href: "/website-design",
        },
        {
          id: 2,
          text: "باقات الادارة والمتابعة",
          href: "/website-design",
        },
        {
          id: 3,
          text: "باقات الانطلاق الاحترافية",
          href: "/website-design",
        },
      ],
    },
    {
      id: 4,
      text: "عملاؤنا",
      href: "/about",
    },
    {
      id: 5,
      text: "أعمالنا",
      href: "/about",
    },
    {
      id: 6,
      text: "تواصل معنا",
      href: "/about",
    },
  ];

  const [showSidebar, setShowSidebar] = useState(false);

  const [active, setActive] = useState(null);

  const handleNavItems = (id) => {
    active === null
      ? setActive(id)
      : active === id
      ? setActive(null)
      : active !== id && setActive(id);
  };

  return (
    <nav className="p-4 lg:p-0 bg-white">
      <div className="container m-auto flex gap-32 items-stretch justify-between">
        <Link to="/">
          <div className="logo w-24 h-full flex items-center">
            <img
              src="./Logo/Vector Smart Object.png"
              className="w-full"
              alt=""
            />
          </div>
        </Link>

        <div className="menu hidden lg:flex gap-8 justify-between">
          {menuItems.map((item) => {
            return (
              <div
                className="flex flex-col py-4 justify-center gap-4 relative group bg-white w-max transition-all duration-300"
                key={item.id}
              >
                <NavLink
                  to={item.href}
                  className="transition-colors duration-300 text-base px-2 hover:text-dark-blue-itlista"
                >
                  {item.text}
                  {item.dropdownItems && (
                    <IoIosArrowDown className="inline mr-2" />
                  )}
                </NavLink>
                {item.dropdownItems && (
                  <div className="invisible shadow-lg flex bg-white py-4 pl-4 w-max transition-all duration-300 flex-col gap-2 absolute top-20 opacity-30 group-hover:top-full group-hover:opacity-100 group-hover:visible">
                    {item.dropdownItems?.map((item) => {
                      return (
                        <NavLink
                          to={item.href}
                          className="transition-all duration-300 text-base px-2 hover:text-dark-blue-itlista  hover:-translate-x-2"
                          key={item.id}
                        >
                          {item.text}
                        </NavLink>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div
          className={`mobile-menu fixed top-0 right-0 w-full h-screen bg-transparent ${
            showSidebar ? "visible" : "invisible"
          }`}
        >
          <div
            className={`${
              showSidebar ? "opacity-50" : "opacity-0"
            } overlay absolute w-full h-full bg-light-blue-itlista -z-10 blur-sm transition-all duration-1000`}
            onClick={() => setShowSidebar(false)}
          />
          <div
            className={`${
              showSidebar ? "translate-x-0" : "translate-x-full"
            } content flex h-full w-60 p-4 bg-white justify-between transition-all duration-1000 delay-100`}
          >
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => {
                return (
                  <div key={item.id} onClick={() => handleNavItems(item.id)}>
                    <NavLink
                      to={item.href}
                      className="transition-colors duration-300 text-base px-2 hover:text-dark-blue-itlista font-semibold"
                    >
                      {item.text}
                      {item.dropdownItems && (
                        <IoIosArrowDown className="inline mr-2" />
                      )}
                    </NavLink>

                    {item.dropdownItems && active === item.id && (
                      <div className="dropdown flex flex-col py-4 transition-all delay-500 duration-1000 gap-2">
                        {item.dropdownItems?.map((item) => {
                          return (
                            <NavLink
                              to={item.href}
                              className="transition-colors duration-300 text-base px-2 hover:text-dark-blue-itlista"
                              key={item.id}
                            >
                              {item.text}
                            </NavLink>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
              {/* {menuItems.map((item) => {
                return (
                  <Disclosure key={item.id}>
                    <Disclosure.Button>
                      <NavLink to={item.href}>
                        {item.text}
                        {item.dropdownItems && (
                          <IoIosArrowDown className="inline mr-2" />
                        )}
                      </NavLink>
                    </Disclosure.Button>

                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      {item.dropdownItems?.map((drop) => {
                        return (
                          <Disclosure.Panel className="" key={drop.id}>
                            {drop.text}
                          </Disclosure.Panel>
                        );
                      })}
                    </Transition>
                  </Disclosure>
                );
              })} */}
            </div>

            <GrClose
              className="text-xl cursor-pointer transition-colors duration-300 hover:text-dark-blue-itlista"
              onClick={() => setShowSidebar(false)}
            />
          </div>
        </div>

        <div
          className="lg:hidden flex items-center"
          onClick={() => {
            setShowSidebar(true);
          }}
        >
          <HiMenuAlt2 className="text-4xl cursor-pointer transition-colors duration-300 hover:text-dark-blue-itlista" />
        </div>
        {/* <button className="hidden lg:block py-2 px-4 rounded-md bg-dark-blue-itlista text-white transition-colors duration-300 hover:bg-medium-blue-itlista">
          اتصل بنا
        </button> */}
      </div>
    </nav>
  );
};
