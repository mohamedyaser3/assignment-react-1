import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Portfolio from "./Components/Portfolio/Portfolio";
import StartFramework from "./Components/StartFramework/StartFramework";
import Layout from "./Components/Layout/Layout";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "startFramework", element: <StartFramework /> },
      ],
    },
  ]);

  return (
    <>
      {/* <Navbar /> */}
      {/* <StartFramework/> */}
      {/* <About/> */}
      {/* <Portfolio/> */}
      {/* <Contact/> */}
      <RouterProvider router={router} />
      {/* <Footer /> */}
    </>
  );
}
