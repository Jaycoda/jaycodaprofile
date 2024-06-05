import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="bg-green-200 w-full max-w-5xl px-4 flex flex-col min-h-screen ">
        <NavBar />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
