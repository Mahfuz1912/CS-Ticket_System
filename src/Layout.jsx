import React from "react";
import Navbar from "./component/Navbar";
import { ToastContainer } from "react-toastify";
import { Footer } from "./component/Footer";
import Bannar from "./component/Bannar";

const Layout = () => {
  return (
    <div className="font-inter">
      <Navbar />
      <Bannar />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Layout;
