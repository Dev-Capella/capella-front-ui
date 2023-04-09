import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <Header />
      <div className="w-full m-auto lg:w-8" style={{ minHeight: "60rem" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default RootLayout;
