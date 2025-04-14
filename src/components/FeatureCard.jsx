import React from "react";

const FeatureCard = ({ image, title, description }) => {
  return (
    <div className="bg-white md:rounded-xl p-10 text-center flex flex-col items-center gap-2 w-full">
      <img src={image} alt={title} className="w-42 h-42 object-contain" />
      <h3 className="text-lg font-semibold text-[#5d3ebc]">{title}</h3>
      <p className="text-base text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
