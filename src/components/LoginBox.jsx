import React from "react";
import turkiyeFlag from "../assets/images/hero-images/turkiye-flag.svg";

const LoginBox = () => {
  return (
    <div className="bg-white text-gray-800 rounded-md w-full max-w-md p-8 flex flex-col gap-4">
      <h2 className="text-center font-semibold text-[#5d3ebc] text-lg">
        Giriş yap veya kayıt ol
      </h2>

      <div className="flex gap-2 items-center">
        <div className="flex items-center gap-2 border border-gray-300 rounded-md px-2 py-2 text-sm w-28">
          <img src={turkiyeFlag} alt="TR" className="w-5 h-5 rounded-sm" />
          <span className="text-sm">+90</span>
        </div>

        <input
          type="tel"
          placeholder="Telefon Numarası"
          className="flex-1 border rounded-md px-3 py-2 text-sm border-gray-300"
        />
      </div>

      <button className="bg-[#ffd300] text-[#5d3ebc] hover:bg-[#5d3ebc] hover:text-[#ffd300] hover:cursor-pointer font-semibold py-3 rounded-md text-sm">
        Telefon numarası ile devam et
      </button>
    </div>
  );
};

export default LoginBox;
