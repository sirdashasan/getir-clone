import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";

const Home = () => {
  const [active, setActive] = useState("getir");
  return (
    <div>
      <Navbar active={active} setActive={setActive} />
      <Hero active={active} />
      <Categories />
    </div>
  );
};

export default Home;
