import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useLanguage } from "../contexts/LanguageContext";

const LanguageModal = ({ onClose }) => {
  const { language, toggleLanguage } = useLanguage();
  const [selectedLanguage, setSelectedLanguage] = useState(language);

  const handleUpdate = () => {
    toggleLanguage(selectedLanguage);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl w-[90%] max-w-md p-6 relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <IoClose size={24} />
        </button>

        <h2 className="text-center text-[#5d3ebc] font-medium mb-4">
          Dil Değiştir
        </h2>

        <div className="space-y-3 text-gray-600">
          {/* Turkish */}
          <label className="flex items-center justify-between border border-gray-200 rounded-lg px-4 py-3">
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="language"
                value="tr"
                checked={selectedLanguage === "tr"}
                onChange={() => setSelectedLanguage("tr")}
                className="w-5 h-5 accent-[#5d3ebc]"
              />
              <span>Türkçe</span>
            </div>
            <img
              src="https://flagcdn.com/w40/tr.png"
              alt="tr"
              className="w-6"
            />
          </label>

          {/* English */}
          <label className="flex items-center justify-between border border-gray-200 rounded-lg px-4 py-3">
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="language"
                value="en"
                checked={selectedLanguage === "en"}
                onChange={() => setSelectedLanguage("en")}
                className="w-5 h-5 accent-[#5d3ebc]"
              />
              <span>English</span>
            </div>
            <img
              src="https://flagcdn.com/w40/gb.png"
              alt="en"
              className="w-6"
            />
          </label>
        </div>

        {/* Update Button */}
        <button
          onClick={handleUpdate}
          disabled={selectedLanguage === language}
          className={`mt-6 w-full py-2 rounded-lg font-medium transition 
      ${
        selectedLanguage === language
          ? "bg-gray-300 text-white cursor-not-allowed"
          : "bg-[#5d3ebc] text-white hover:bg-[#4a30a3]"
      }`}
        >
          Güncelle
        </button>
      </div>
    </div>
  );
};

export default LanguageModal;
