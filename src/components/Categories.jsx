import React from "react";
import CategoryCard from "./CategoryCard";

import { categories } from "../constants/categories";
import { useLanguage } from "../contexts/LanguageContext";
import locales from "../locales/locales";

const Categories = () => {
  const { language } = useLanguage();
  return (
    <div className="bg-white p-6 rounded-lg max-w-7xl mx-auto mt-1">
      <h3 className="text-base font-semibold mb-4">
        {" "}
        {locales[language]["categories-title"]}
      </h3>
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-10 gap-2">
        {categories.map((cat) => (
          <CategoryCard key={cat.title} title={cat.title} image={cat.image} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
