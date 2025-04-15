import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  const [active, setActive] = useState("getir");

  return (
    <>
      <Navbar active={active} setActive={setActive} />
      <div className="md:pt-[48px]">
        {React.cloneElement(children, { active, setActive })}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
