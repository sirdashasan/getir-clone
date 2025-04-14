import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  const [active, setActive] = useState("getir");

  return (
    <>
      <Navbar active={active} setActive={setActive} />
      {React.cloneElement(children, { active, setActive })}
      <Footer />
    </>
  );
};

export default Layout;
