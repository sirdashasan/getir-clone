import React from "react";

import Hero from "../components/Hero";
import Categories from "../components/Categories";
import DownloadSection from "../components/DownloadSection";
import Features from "../components/Features";

const Home = ({ active, setActive }) => {
  return (
    <div>
      <Hero active={active} />
      <Categories />
      <DownloadSection />
      <Features />
    </div>
  );
};

export default Home;
