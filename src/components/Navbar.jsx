import React, { useState } from "react";
import { FaGlobe, FaUser, FaUserPlus } from "react-icons/fa";
import LanguageModal from "./LanguageModal";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import locales from "../locales/locales";

const Navbar = ({ active, setActive }) => {
  const [showLangModal, setShowLangModal] = useState(false);

  const { language } = useLanguage();

  const menuKeys = [
    "getir",
    "getiryemek",
    "getirbuyuk",
    "getirsu",
    "getircarsi",
  ];

  return (
    <>
      <div className="w-full bg-[#4c3398] text-[#dad9fd] py-2 text-sm md:text-base font-medium font-['Cocon-Regular'] z-50 md:fixed md:top-0 md:left-0 md:right-0">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* left */}
          <div className="flex overflow-x-auto whitespace-nowrap gap-3 scrollbar-hide ">
            {menuKeys.map((key) => (
              <Link
                key={key}
                to={key === "getir" ? "/" : `/${key}`}
                onClick={() => setActive(key)}
                className={`px-3 py-1 rounded-md transition-colors shrink-0 ${
                  active === key
                    ? "bg-[#5d3ebc] text-[#ffd300]"
                    : "hover:bg-[#5d3ebc]"
                }`}
              >
                {locales[language].menu[key]}
              </Link>
            ))}
          </div>

          {/* right */}
          <div className="hidden sm:flex gap-10 items-center text-sm font-sans">
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => setShowLangModal(true)}
            >
              <FaGlobe size={16} />
              <span className="hidden lg:inline">
                {" "}
                {locales[language]["language-text"]}
              </span>
            </div>
            <div className="flex items-center gap-1 cursor-pointer">
              <FaUser size={16} />
              <span className="hidden lg:inline">
                {locales[language]["login"]}
              </span>
            </div>
            <div className="flex items-center gap-1 cursor-pointer">
              <FaUserPlus size={16} />
              <span className="hidden lg:inline">
                {locales[language]["sign-up"]}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Language Modal */}
      {showLangModal && (
        <LanguageModal onClose={() => setShowLangModal(false)} />
      )}
    </>
  );
};

export default Navbar;
