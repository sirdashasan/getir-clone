import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const DeliveryAddress = () => {
  return (
    <div className="bg-white py-3 px-4 flex items-center justify-between text-sm font-semibold shadow-sm md:hidden">
      <div className="flex items-center gap-2">
        <FaMapMarkerAlt size={16} className="text-[#5d3ebc]" />
        <span className="text-gray-700">Teslimat Adresi Belirle</span>
      </div>
      <span className="text-[#5d3ebc] text-lg">{`>`}</span>
    </div>
  );
};

export default DeliveryAddress;
