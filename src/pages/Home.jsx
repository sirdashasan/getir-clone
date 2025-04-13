import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Home = () => {

    const [active, setActive] = useState("getir");
  return (
    <div>
      <Navbar active={active} setActive={setActive} />
      <Hero active={active} />
    </div>
  );
};

export default Home;
