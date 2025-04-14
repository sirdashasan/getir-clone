import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { subcategories } from "../constants/subcategories";
import { categories } from "../constants/categories";
import GetirBanner from "../components/GetirBanner";
import DeliveryAddress from "../components/DeliveryAddress";

const CategoryPage = () => {
  const { slug } = useParams();

  const subCats = subcategories[slug] || [];

  const currentCategory = categories.find((cat) => cat.slug === slug);
  const categoryTitle = currentCategory ? currentCategory.title : slug;

  const [selectedSub, setSelectedSub] = useState(subCats[0] || null);

  return (
    <>
      <GetirBanner />
      <DeliveryAddress />
      <section className=" md:px-36 md:pt-6">
        {/* Mobile view */}
        <div className="block md:hidden">
          {/* Categories */}
          <div className="flex overflow-x-auto mb-2 bg-[#7849f7] py-2 ">
            {categories.map((cat) => (
              <button
                key={cat.slug}
                className={`text-xs rounded-full px-3 py-1 whitespace-nowrap font-medium transition-colors ${
                  cat.slug === slug
                    ? "bg-white text-[#5d3ebc]"
                    : "text-white hover:bg-white hover:text-[#5d3ebc]"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* SubCategories */}
          <div className="flex gap-2 overflow-x-auto mb-2 px-2">
            {subCats.map((sub, index) => (
              <button
                key={index}
                onClick={() => setSelectedSub(sub)}
                className={`text-xs rounded-sm px-4 py-1 whitespace-nowrap border ${
                  selectedSub === sub
                    ? "bg-[#5d3ebc] text-white border-[#5d3ebc]"
                    : "text-[#5d3ebc] border-gray-400"
                }`}
              >
                {sub}
              </button>
            ))}
          </div>

          {/* Placeholder products */}
          <div className="text-sm text-gray-700 font-medium mb-2 px-2 whitespace-nowrap overflow-x-auto">
            <span>{currentCategory?.title}</span>
            {selectedSub && <span className="ml-1">{`> ${selectedSub}`}</span>}
          </div>
          <div className="grid grid-cols-3 gap-4 px-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="border rounded-lg p-2 shadow-sm text-center"
              >
                <div className="bg-gray-100 h-24 mb-2"></div>
                <p className="text-sm font-medium">Ürün Adı</p>
                <p className="text-xs text-gray-500">2 Ürün</p>
                <p className="text-[#5d3ebc] font-semibold mt-1">₺50,00</p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop view */}
        <div className="hidden md:flex gap-6">
          {/* Sidebar */}
          <aside className="w-1/5">
            <h3 className="text-sm font-bold mb-4">Kategoriler</h3>
            <div className="space-y-4">
              {categories.map((cat, index) => {
                const isActive = cat.slug === slug;
                const subs = subcategories[cat.slug] || [];

                return (
                  <div key={index}>
                    <div
                      className={`font-semibold text-sm cursor-pointer ${
                        isActive ? "text-[#5d3ebc]" : "text-gray-800"
                      }`}
                    >
                      {cat.title}
                    </div>

                    {/* Only active category subcategories should be open */}
                    {isActive && (
                      <ul className="mt-2 pl-2 space-y-1 text-sm text-gray-700">
                        {subs.map((sub, i) => (
                          <li
                            key={i}
                            className="cursor-pointer hover:text-[#5d3ebc] transition-colors"
                          >
                            {sub}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          </aside>

          {/* Products */}
          <main className="w-3/5 grid grid-cols-3 gap-4">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="border rounded-lg p-3 text-center shadow-sm"
              >
                <div className="bg-gray-100 h-32 mb-3"></div>
                <p className="font-semibold text-sm">Ürün Adı</p>
                <p className="text-xs text-gray-500">3 Ürün</p>
                <p className="text-[#5d3ebc] mt-1 font-semibold">₺100,50</p>
              </div>
            ))}
          </main>

          {/* shopping cart */}
          <aside className="w-1/5 bg-white border rounded-lg p-4 h-fit shadow-sm">
            <h3 className="font-bold text-sm mb-2">Sepetin</h3>
            <p className="text-xs text-gray-500">Sepetin şu an boş</p>
          </aside>
        </div>
      </section>
    </>
  );
};

export default CategoryPage;
