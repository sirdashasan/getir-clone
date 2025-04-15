import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { subcategories } from "../constants/subcategories";
import { categories } from "../constants/categories";
import GetirBanner from "../components/GetirBanner";
import DeliveryAddress from "../components/DeliveryAddress";
import { products } from "../constants/products";
import ProductCard from "../components/ProductCard";
import { FiChevronDown, FiChevronUp, FiChevronRight } from "react-icons/fi";
import basketIcon from "../assets/images/category-page-images/basket.svg";

const CategoryPage = () => {
  const { slug } = useParams();
  const subCats = subcategories[slug] || [];
  const currentCategory = categories.find((cat) => cat.slug === slug);
  const categoryTitle = currentCategory ? currentCategory.title : slug;

  const [selectedSub, setSelectedSub] = useState(subCats[0] || null);
  const [activeCategory, setActiveCategory] = useState(slug);

  const filteredProducts = products.filter(
    (product) =>
      product.category === slug &&
      (!selectedSub || product.subcategory === selectedSub)
  );

  return (
    <>
      {/* Header Section */}
      <GetirBanner />
      <DeliveryAddress />

      {/* Main Section */}
      <section className="md:px-36 md:pt-4  md:bg-[#f8f8f8]">
        {/* Mobile view */}
        <div className="block md:hidden">
          {/* Categories */}
          <div className="sticky top-0 z-30 bg-[#7849f7]">
            <div className="flex overflow-x-auto mb-1 py-2">
              {categories.map((cat) => (
                <div key={cat.slug} className="relative px-3">
                  <Link to={`/kategori/${cat.slug}`}>
                    <button
                      className={`text-xs whitespace-nowrap font-medium transition-colors ${
                        cat.slug === slug
                          ? "text-white"
                          : "text-white hover:bg-white hover:text-[#5d3ebc]"
                      }`}
                    >
                      {cat.title}
                    </button>
                  </Link>
                  {cat.slug === slug && (
                    <span className="absolute bottom-[-8px] left-0 right-0 h-[2px] bg-yellow-400 rounded-full"></span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* SubCategories */}
          <div className="sticky top-[40px] z-20 bg-white">
            <div className="flex gap-2 overflow-x-auto mb-2 px-2 py-2">
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
          </div>

          {/* Mobile Category > Subcategory Title */}
          <div className="text-sm text-gray-700 font-medium mb-2 px-2 whitespace-nowrap overflow-x-auto">
            <span>{currentCategory?.title}</span>
            <span className="ml-1 inline-flex items-center gap-1">
              <FiChevronRight className="text-xs" />
              {selectedSub}
            </span>
          </div>

          {/* Mobile Product List */}
          <div className="grid grid-cols-3 gap-4 px-2">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex gap-6">
          {/* Sidebar Section */}
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

          {/* Main Content Section */}
          <div className="w-4/5 flex flex-col gap-4">
            {/* Top Titles */}
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

            {/* Product Grid & Basket */}
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
                <aside className="bg-white border-2 border-yellow-400 rounded-lg px-4 py-20 h-fit shadow-sm flex flex-col items-center text-center sticky top-6 self-start">
                  <img
                    src={basketIcon}
                    alt="Basket Icon"
                    className="h-28 mb-4 opacity-70"
                  />
                  <h3 className="font-semibold text-[#5d3ebc] text-sm mb-1">
                    Sepetin şu an boş
                  </h3>
                  <p className="text-sm font-medium text-gray-500">
                    Sipariş vermek için sepetine ürün ekle
                  </p>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryPage;
