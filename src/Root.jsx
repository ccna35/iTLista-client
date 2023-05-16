import { NavLink, Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";

const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <footer className="p-4 md:px-0">
        <div className="container m-auto "></div>
      </footer>
    </>
  );
};

export default Root;
