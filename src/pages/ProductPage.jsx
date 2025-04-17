import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../constants/products";
import GetirBanner from "../components/GetirBanner";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const ProductPage = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const [activeTab, setActiveTab] = useState("Detaylar");
  const [openAccordion, setOpenAccordion] = useState("Detaylar");

  if (!product) return <p className="text-center mt-10">Ürün bulunamadı.</p>;

  return (
    <>
      <GetirBanner />

      <section className="md:px-36 px-4 pt-6 pb-4 bg-[#f8f8f8] min-h-screen relative">
        {/* Mobile: Title and price on top*/}
        <div className="lg:hidden mb-4">
          <h1 className="text-xl font-semibold text-gray-800">
            {product.name}
          </h1>
          <p className="text-sm text-gray-500">{product.quantity}</p>
          {product.oldPrice && (
            <p className="line-through text-gray-400 text-sm">
              ₺{product.oldPrice.toFixed(2)}
            </p>
          )}
          <p className="text-[#5d3ebc] text-xl font-bold">
            ₺{product.price.toFixed(2)}
          </p>
        </div>

        <div className="flex flex-col md:flex-row bg-white md:p-10 md:gap-16">
          {/* Left: Image */}
          <div className="w-full md:w-[320px] flex flex-col items-start">
            <img
              src={product.image}
              alt={product.name}
              className="min-w-[200px] md:max-w-[340px] min-h-[400px] object-contain rounded-xl border border-gray-200 mb-4"
            />
            <div className="mt-2">
              <img
                src={product.image}
                alt="alt"
                className="w-14 h-14 object-contain border-2 border-[#5d3ebc] rounded p-1"
              />
            </div>
          </div>

          {/* Right: Information - desktop only */}
          <div className="hidden lg:flex flex-1 flex-col space-y-4 md:pr-10 lg:pr-20 xl:pr-32 2xl:pr-60">
            {/* Title and price */}
            <div>
              <h1 className="text-2xl font-semibold text-gray-800">
                {product.name}
              </h1>
              <p className="text-sm text-gray-500">{product.quantity}</p>
              {product.oldPrice && (
                <p className="line-through text-gray-400 text-sm">
                  ₺{product.oldPrice.toFixed(2)}
                </p>
              )}
              <p className="text-[#5d3ebc] text-xl font-bold">
                ₺{product.price.toFixed(2)}
              </p>
            </div>

            {/* Desktop Add to Cart */}
            <button className="bg-[#5d3ebc] w-[200px] h-[50px] text-white py-2 px-6 rounded-lg">
              Sepete Ekle
            </button>

            {/* Desktop Tabs */}
            <div className="hidden md:flex">
              {["Detaylar", "İçindekiler", "Kullanım", "Ek Bilgiler"].map(
                (tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-2 text-sm font-medium px-4
        ${
          activeTab === tab
            ? "text-[#5d3ebc] bg-white border-2 border-b-0 border-gray-200 rounded-t-md"
            : "text-gray-600 border-b border-gray-200"
        }`}
                  >
                    {tab}
                  </button>
                )
              )}
            </div>

            {/* Content box */}
            <div className="hidden md:block border-2 border-gray-200 rounded-b-md border-t-0 bg-white p-4 text-sm text-gray-700 -mt-[16px]">
              {activeTab === "Detaylar" &&
                product.details?.map((item, idx) => <p key={idx}>• {item}</p>)}
              {activeTab === "İçindekiler" && <p>{product.ingredients}</p>}
              {activeTab === "Kullanım" && <p>{product.usage}</p>}
              {activeTab === "Ek Bilgiler" && <p>{product.additionalInfo}</p>}
            </div>
          </div>
        </div>

        {/* Mobile: Accordion tabs */}
        <div className="lg:hidden bg-white border border-gray-200 rounded-md mt-4">
          {["Detaylar", "İçindekiler", "Kullanım", "Ek Bilgiler"].map(
            (section, index) => (
              <div
                key={section}
                className={`${index !== 0 ? "border-t border-gray-200" : ""}`}
              >
                <button
                  onClick={() =>
                    setOpenAccordion((prev) =>
                      prev === section ? "" : section
                    )
                  }
                  className="w-full px-4 py-4 flex justify-between items-center text-sm font-medium text-left text-[#5d3ebc]"
                >
                  {section}
                  {openAccordion === section ? (
                    <FiChevronUp />
                  ) : (
                    <FiChevronDown />
                  )}
                </button>
                {openAccordion === section && (
                  <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">
                    {section === "Detaylar" &&
                      product.details?.map((item, idx) => (
                        <p key={idx}>• {item}</p>
                      ))}
                    {section === "İçindekiler" && <p>{product.ingredients}</p>}
                    {section === "Kullanım" && <p>{product.usage}</p>}
                    {section === "Ek Bilgiler" && (
                      <p>{product.additionalInfo}</p>
                    )}
                  </div>
                )}
              </div>
            )
          )}
        </div>

        {/* Mobile Add to Cart - Fixed */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white p-4 z-30 shadow-md">
          <button className="bg-[#5d3ebc] w-full text-white py-3 rounded-lg font-semibold">
            Sepete Ekle
          </button>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
