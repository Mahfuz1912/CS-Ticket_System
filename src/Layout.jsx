import React from "react";
import Navbar from "./component/Navbar";
import { ToastContainer } from "react-toastify";
import { Footer } from "./component/Footer";
import MainCodeComponent from "./MainCodeComponent";

const Layout = () => {
  return (
    <div className="font-inter">
      <Navbar />
      <MainCodeComponent />
      <Footer />
      <ToastContainer theme="colored" />
    </div>
  );
};

export default Layout;
