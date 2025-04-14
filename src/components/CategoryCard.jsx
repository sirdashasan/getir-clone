import React from "react";

const CategoryCard = ({ title, image }) => {
  return (
    <div className="cursor-pointer">
      <div className="flex flex-col items-center gap-2 text-center text-sm p-2 rounded-xl  hover:bg-[#f3f0ff] transition-colors">
        <img
          src={image}
          alt={title}
          className="w-13 h-13 object-contain border rounded-xl border-gray-200"
        />
        <span className="font-semibold text-black hover:text-[#5d3ebc] transition-colors">
          {title}
        </span>
      </div>
    </div>
  );
};

export default CategoryCard;
