import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import DownloadSection from "../components/DownloadSection";
import Features from "../components/Features";
import Footer from "../components/Footer";

const Home = () => {
  const [active, setActive] = useState("getir");
  return (
    <div>
      <Navbar active={active} setActive={setActive} />
      <Hero active={active} />
      <Categories />
      <DownloadSection />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
