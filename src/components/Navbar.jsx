import React, { useState } from "react";
import { FaGlobe, FaUser, FaUserPlus } from "react-icons/fa";

const Navbar = ({ active, setActive }) => {
  const menuItems = [
    "getir",
    "getiryemek",
    "getirbüyük",
    "getirsu",
    "getirçarsı",
  ];

 

  return (
    <div className="w-full bg-[#4c3398] text-[#dad9fd] py-2 text-sm md:text-base font-medium font-['Cocon-Regular'] z-50">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
      {/* left */}
      <div className="flex overflow-x-auto whitespace-nowrap gap-3 scrollbar-hide ">
        {menuItems.map((item) => (
          <a
            key={item}
            href="#"
            onClick={() => setActive(item)}
            className={`px-3 py-1 rounded-md transition-colors shrink-0 ${
              active === item
                ? "bg-[#5d3ebc] text-[#ffd300]"
                : "hover:bg-[#5d3ebc]"
            }`}
          >
            {item}
          </a>
        ))}
      </div>
      {/* right */}
      <div className="hidden sm:flex gap-10 items-center text-sm font-sans">
        <div className="flex items-center gap-1 cursor-pointer">
          <FaGlobe size={16} />
          <span className="hidden lg:inline">Türkçe (TR)</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer">
          <FaUser size={16} />
          <span className="hidden lg:inline">Giriş yap</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer">
          <FaUserPlus size={16} />
          <span className="hidden lg:inline">Kayıt Ol</span>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
