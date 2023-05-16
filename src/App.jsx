import Root from "./Root";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import { useState } from "react";
import Home from "./pages/Home";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
