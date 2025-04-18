import React from "react";
import LoginBox from "./LoginBox";
import getirLogo from "../assets/images/hero-images/hero-logo.svg";
import DeliveryAddress from "./DeliveryAddress";
import { useLanguage } from "../contexts/LanguageContext";
import locales from "../locales/locales";

const Hero = ({ active }) => {
  const { language } = useLanguage();
  return (
    <section className="w-full">
      {/* Desktop view */}
      <div className="hidden md:flex bg-[#5d3ebc] py-24">
        <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
          {/* Left: Logo  */}
          <div className="flex flex-col gap-8 justify-center text-white w-1/2">
            <img src={getirLogo} alt="Getir Logo" className="w-48" />
            <h1 className="text-4xl font-semibold">
              {" "}
              {locales[language]["hero-text"]}
            </h1>
          </div>

          {/* Right: Login */}
          <div className="w-1/2 flex justify-end items-center">
            <div className="w-full max-w-sm">
              <LoginBox />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="block md:hidden">
        {/* Header */}
        <div className="px-6 py-4 flex flex-col items-center text-center gap-4 bg-[#5d3ebc]">
          <h1 className="text-2xl text-[#ffd300] font-['Cocon-Regular']">
            {active}
          </h1>
        </div>

        {/* Delivery Address */}
        <DeliveryAddress />

        {/* Login Box */}
        <div className="p-4">
          <LoginBox />
        </div>
      </div>
    </section>
  );
};

export default Hero;
