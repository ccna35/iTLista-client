import Root from "./Root";
import { Route, Routes, createBrowserRouter } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";
import { useEffect, useLayoutEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useLayoutEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="bg-white w-screen h-screen grid place-items-center fixed top-0 left-0 transition-colors duration-500">
        <p className="transition-all duration-500 w-16 h-16 bg-dark-blue-itlista rounded-full animate-ping" />
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
