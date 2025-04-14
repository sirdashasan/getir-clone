import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import DownloadSection from "../components/DownloadSection";

const Home = () => {
  const [active, setActive] = useState("getir");
  return (
    <div>
      <Navbar active={active} setActive={setActive} />
      <Hero active={active} />
      <Categories />
      <DownloadSection />
    </div>
  );
};

export default Home;
