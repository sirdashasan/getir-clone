import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { subcategories } from "../constants/subcategories";
import { categories } from "../constants/categories";
import { products } from "../constants/products";

import GetirBanner from "../components/GetirBanner";
import DeliveryAddress from "../components/DeliveryAddress";
import CategoryNavbar from "../components/CategoryNavbar";
import SubCategoryBar from "../components/SubCategoryBar";
import ProductCard from "../components/ProductCard";
import BasketBox from "../components/BasketBox";
import { FiChevronDown, FiChevronUp, FiChevronRight } from "react-icons/fi";

const CategoryPage = () => {
  const { slug } = useParams();
  const subCats = subcategories[slug] || [];
  const currentCategory = categories.find((cat) => cat.slug === slug);
  const categoryTitle = currentCategory ? currentCategory.title : slug;

  const [selectedSub, setSelectedSub] = useState(subCats[0] || null);
  const [activeCategory, setActiveCategory] = useState(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const filteredProducts = products.filter(
    (product) =>
      product.category === slug &&
      (!selectedSub || product.subcategory === selectedSub)
  );

  return (
    <>
      {/* Header */}
      <GetirBanner />
      <DeliveryAddress />

      {/* Main Section */}
      <section className="md:px-36 md:pt-4 md:bg-[#f8f8f8]">
        {/* Mobile View */}
        <div className="block md:hidden">
          <CategoryNavbar />
          <SubCategoryBar
            subCats={subCats}
            selectedSub={selectedSub}
            setSelectedSub={setSelectedSub}
          />

          <div className="text-sm text-gray-700 font-medium mb-2 px-2 whitespace-nowrap overflow-x-auto">
            <span>{currentCategory?.title}</span>
            {selectedSub && (
              <span className="ml-1 inline-flex items-center gap-1">
                <FiChevronRight className="text-xs" />
                {selectedSub}
              </span>
            )}
          </div>

          <div className="grid grid-cols-3 gap-4 px-2">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex gap-6">
          {/* Sidebar */}
          <div className="w-1/5 h-[calc(100vh-150px)] overflow-y-auto pr-2">
            <h3 className="text-sm font-semibold mb-2 text-gray-700">
              Kategoriler
            </h3>
            <aside className="bg-white rounded-md">
              <div className="space-y-2">
                {categories.map((cat) => {
                  const isActive = activeCategory === cat.slug;
                  const subs = subcategories[cat.slug] || [];

                  return (
                    <div key={cat.slug} className="rounded-lg overflow-hidden">
                      <div
                        onClick={() =>
                          setActiveCategory((prev) =>
                            prev === cat.slug ? null : cat.slug
                          )
                        }
                        className={`flex items-center justify-between px-3 py-2 font-semibold text-sm cursor-pointer ${
                          isActive
                            ? "bg-[#f3f0fe] text-[#5d3ebc]"
                            : "text-gray-800"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {cat.image && (
                            <img
                              src={cat.image}
                              alt={cat.title}
                              className="w-6 h-6 object-cover rounded-sm"
                            />
                          )}
                          {cat.title}
                        </div>
                        <span className="text-sm">
                          {isActive ? <FiChevronUp /> : <FiChevronDown />}
                        </span>
                      </div>
                      {isActive && (
                        <ul className="mt-1 pl-10 space-y-1 text-sm text-gray-700">
                          {subs.map((sub, i) => (
                            <li
                              key={i}
                              onClick={() => setSelectedSub(sub)}
                              className={`flex justify-between items-center pr-2 cursor-pointer hover:text-[#5d3ebc] transition-colors ${
                                selectedSub === sub
                                  ? "font-medium text-[#5d3ebc]"
                                  : ""
                              }`}
                            >
                              {sub}
                              {selectedSub === sub && (
                                <span className="text-xs px-1">
                                  <FiChevronRight />
                                </span>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
            </aside>
          </div>

          {/* Main Content */}
          <div className="w-4/5 flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <div className="text-sm text-gray-700 font-semibold whitespace-nowrap overflow-x-auto mb-2">
                <span>{currentCategory?.title}</span>
                {selectedSub && (
                  <span className="ml-1 inline-flex items-center gap-1">
                    <FiChevronRight className="text-xs" />
                    {selectedSub}
                  </span>
                )}
              </div>
              <div className="w-1/3 hidden xl:flex justify-start pl-2">
                <h3 className="font-bold text-sm text-gray-700">Sepetim</h3>
              </div>
            </div>

            <div className="flex gap-6">
              <main className="w-2/3 bg-white rounded-md h-[calc(100vh-250px)] overflow-y-auto pr-2">
                <div className="p-4">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </div>
              </main>
              <div className="w-1/3 hidden xl:block">
                <BasketBox />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryPage;
